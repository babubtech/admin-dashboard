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
  Divider,
  Typography,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TablePagination,
  TableRow,
  colors
} from '@mui/material';

import { Label,  TableEditBar,GenericMoreButton } from '../../../../components';

const useStyles = makeStyles(theme => ({
  root: {},
  filterButton: {
    marginRight: theme.spacing(2)
  },
  content: {
    padding: 0
  },
  nodataCont: {
    textAlign: "center",
    padding: "14px",
    fontSize: "18px",
    color: "#bfbfbf",
    fontWeight: 800
},
  inner: {
    minWidth: 1150
  },
  actions: {
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-end'
  }
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
        <CardHeader
          
          title="Users List"
        />
        <Divider />
        <CardContent className={classes.content}>
            <div className={classes.inner}>
            <TableContainer className={classes.container}>
              <Table>
                <TableHead>
                  <TableRow>
                    {/* <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedOrders.length === orders.length}
                        color="primary"
                        indeterminate={
                          selectedOrders.length > 0 &&
                          selectedOrders.length < orders.length
                        }
                        onChange={handleSelectAll}
                      />
                    </TableCell> */}
                    <TableCell>S no</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Product ID</TableCell>
                    <TableCell>Purchase Price</TableCell>
                    <TableCell>Selling Price</TableCell>
                    <TableCell>Tax</TableCell>
                    <TableCell>Current Stock</TableCell>
                    <TableCell>SKU Count</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Brand</TableCell>
                    <TableCell>status</TableCell>
                    <TableCell>CreatedAt</TableCell>
                    <TableCell align="center">Edit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.slice(0, rowsPerPage).map((order, index) => (
                    <TableRow
                      key={order.id}
                      selected={selectedOrders.indexOf(order.id) !== -1}
                    >
                      {/* <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedOrders.indexOf(order.id) !== -1}
                          color="primary"
                          onChange={event => handleSelectOne(event, order.id)}
                          value={selectedOrders.indexOf(order.id) !== -1}
                        />
                      </TableCell> */}
                      <TableCell>
                        {index+1}
                        
                      </TableCell>

                      <TableCell>                        
                        <Avatar alt={order.productname} src={`http://128.199.83.45/moogambika_dev${order.image}`} />
                      </TableCell>
                      <TableCell>{order.product_name}</TableCell>
                      <TableCell>{order.product_id}</TableCell>
                      <TableCell>{order.purchase_price}</TableCell>
                      <TableCell>{order.selling_price}</TableCell>
                      <TableCell>{order.tax}</TableCell>
                      <TableCell>{order.current_stock}</TableCell>
                      <TableCell>{order.sku_count}</TableCell>
                      <TableCell>{order.category}</TableCell>
                      <TableCell>{order.brand}</TableCell>

                      <TableCell>
                         <Label
                          color={paymentStatusColors[order.isactive ? 'active' : 'inactive']}
                          variant="contained"
                        >
                          {order.isactive ? 'Active' : 'In Active'}
                        </Label>

                      </TableCell>
                      <TableCell>

                      <Typography variant="body1">
                          {moment(order.created_at).format(
                            'DD MMM YYYY hh:mm a' 
                          )}
                        </Typography>
                      </TableCell>
                            
                      <TableCell align="center">
                        <GenericMoreButton />
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
