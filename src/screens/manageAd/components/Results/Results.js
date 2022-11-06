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
  IconButton,
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
  colors,
  Link
} from '@mui/material';

import { Label,  TableEditBar,GenericMoreButton } from '../../../../components';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const useStyles = makeStyles(theme => ({
  root: {},
  filterButton: {
    marginRight: theme.spacing(2)
  },
  content: {
    padding: 0,
    overflow: "auto"
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
  },
  paginationCss: {
    // backgroundColor: "red",
    [theme.breakpoints.up('xs')]: {
      "& .MuiInputBase-colorPrimary":{
        marginRight: 5
      },
      "& .MuiTablePagination-toolbar": {
        paddingLeft: 0
      }
    }
  }
}));

const Results = props => {
  const { className, orders, ...rest } = props;

  const classes = useStyles();

  const [selectedOrders, setSelectedOrders] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          
          title="Advisement List"
        />
        <Divider />
        <CardContent className={classes.content}>
            <div className={classes.inner}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
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
                    <TableCell>Ad Id</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell>URL</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Priority</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="center">Edit</TableCell>
                    <TableCell align="center">Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.slice(0, rowsPerPage).map((order, index) => (
                    <TableRow
                      key={order.id}
                      selected={selectedOrders.indexOf(order.id) !== -1}
                    >
                      <TableCell>
                        {index+1}
                        
                      </TableCell>
                      <TableCell>{order.id}</TableCell>
                      <TableCell>                        
                        <Avatar alt={order.image} variant={"square"} src={`https://picsum.photos/200/300?random=1`} />
                      </TableCell>
                      <TableCell>                        
                        <Link href="https://picsum.photos/200/300?random=1">{"URL link"}</Link>
                      </TableCell>
                      <TableCell>{order.category}</TableCell>
                      <TableCell>{order.priority}</TableCell>
                      <TableCell>{order.description}</TableCell>

                      <TableCell>
                         <Label
                          color={paymentStatusColors[order.isactive ? 'active' : 'inactive']}
                          variant="contained"
                        >
                          {order.isactive ? 'Active' : 'In Active'}
                        </Label>

                      </TableCell>
                            
                      <TableCell align="center">
                        <IconButton aria-label="edit">
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="center">
                        <IconButton aria-label="delete" 
                            // action={()=>handleClickOpen()} 
                            onClick={()=>handleClickOpen()}
                          >
                            <DeleteIcon />
                        </IconButton>
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
            className={classes.paginationCss}
          />
        </CardActions>
      </Card>
      <TableEditBar selected={selectedOrders} />


      {/* Delete iteam confirmatiom modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        // PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle variant={"h4"} style={{ cursor: 'move' }} id="draggable-dialog-title">
          Delete Advisement Information
        </DialogTitle>
        <DialogContent>
          <DialogContentText variant={"h5"} >
              Do you confirm to delete the information. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color={"inherit"} autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button variant={"contained"} color={"error"} onClick={handleClose}>Delete</Button>
        </DialogActions>
      </Dialog>

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
