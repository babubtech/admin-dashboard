import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Switch,
  Divider,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  colors,
  TableContainer
} from '@mui/material';

import { Label,  TableEditBar } from '../../../components';
import EditIcon from '@mui/icons-material/Edit';
import { DeleteForever } from '@mui/icons-material';

const useStyles = makeStyles(theme => ({
  root: {},
  filterButton: {
    marginRight: theme.spacing(2)
  },
  content: {
    padding: 0
  },
  inner: {
   // minWidth: 1150
  },
  actions: {
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-end'
  },
  nodataCont: {
    textAlign: "center",
    padding: "14px",
    fontSize: "18px",
    color: "#bfbfbf",
    fontWeight: 800
},
}));

const Results = props => {
  const { className, orders, ...rest } = props;

  const classes = useStyles();

  const [selectedOrders, setSelectedOrders] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSelectAll = event => {
    const selectedOrders = event.target.checked
      ? orders.map(order => order.id)
      : [];

    setSelectedOrders(selectedOrders);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedOrders.indexOf(id);
    let newSelectedOrders = [];

    if (selectedIndex === -1) {
      newSelectedOrders = newSelectedOrders.concat(selectedOrders, id);
    } else if (selectedIndex === 0) {
      newSelectedOrders = newSelectedOrders.concat(selectedOrders.slice(1));
    } else if (selectedIndex === selectedOrders.length - 1) {
      newSelectedOrders = newSelectedOrders.concat(selectedOrders.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedOrders = newSelectedOrders.concat(
        selectedOrders.slice(0, selectedIndex),
        selectedOrders.slice(selectedIndex + 1)
      );
    }

    setSelectedOrders(newSelectedOrders);
  };

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(event.target.value);
  };
  const toggleChecked = (order) => e => {
     
   props.onUpdatestatus(order, e.target.checked)
 // orderlist[index].isactive = e.target.checked
 // setOrderlist(orderlist)
 //setChecked((prev) => !prev);
};
  const paymentStatusColors = {
    canceled: colors.grey[600],
    pending: colors.orange[600],
    active: colors.green[600],
    inactive: colors.red[600]
  };

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
     
      <Card>
       
        <CardContent className={classes.content}>
            <div className={classes.inner}>
              <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>S no</TableCell>
                    <TableCell>name</TableCell>
                    <TableCell>username</TableCell>
                    <TableCell>email</TableCell>

                    <TableCell>status</TableCell>
                    <TableCell>CreatedAt</TableCell>
                    
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
               
                <TableBody>
                  {orders.slice(0, rowsPerPage).map((order,index) => (
                    <TableRow
                      key={order.id}
                      selected={selectedOrders.indexOf(order.id) !== -1}
                    >
                 
                      <TableCell>
                        {index + 1}
                        
                      </TableCell>
                      <TableCell>{order.name}</TableCell>
                      <TableCell>{order?.username}</TableCell>
                      <TableCell>{order?.email}</TableCell>
                     
                      <TableCell>
                      <Switch
                            checked={order.id_active}
                            onChange={toggleChecked(order)}
                            color="primary"
                            name="checkedA"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                          />
                            {/* <Label
                                color={paymentStatusColors[order.is_active ? 'active' : 'inactive']}
                                variant="contained"
                                >
                                {order.is_active ? 'Active'  : 'In Active'}
                                </Label> */}
                      </TableCell>
                      <TableCell>
                      <Typography variant="body1">
                          {moment(order.createdAt).format('DD MMM YYYY hh:mm a')}

                        </Typography>
                      </TableCell>
                     
                      <TableCell align="center">
                      <Button  >
                        <EditIcon 
                            onClick={() => props.onEdit(order)}/>
                        </Button>
                           {/* <Button  >
                           <DeleteForever onClick={() => props.onDelete(order)}/>
                                                    </Button> */}
                           
                      </TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {orders.length > 0 ? "" : <Typography className={classes.nodataCont} component={"h6"} >No Records found</Typography>}
               </TableContainer>   
            </div>
        </CardContent>
        <CardActions className={classes.actions}>
          <TablePagination
            component="div"
            count={orders.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </CardActions>
      </Card>
      <TableEditBar selected={selectedOrders} />
    </div>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  orders: PropTypes.array.isRequired
};

Results.defaultProps = {
  orders: []
};

export default Results;
