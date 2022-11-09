import React, { useState } from 'react';
import clsx from 'clsx';
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
  colors
} from '@mui/material';

import { Label,  TableEditBar } from '../../components';
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

const DataTable = props => {
  const { className, orders, header=null, dataList=null, heading="",...rest } = props;

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


  const getTableComponent = (val, index) => {
    switch (val.componentType) {
      case 'count':
        return(
          <TableCell>{index+1}</TableCell>
        )
      case 'text':
        return(
          <TableCell>{val?.value??""}</TableCell>
        )
      case 'status':
        return(
          <TableCell>
            <Label
            color={paymentStatusColors[val?.value ? 'active' : 'inactive']}
            variant="contained"
          >
            {val?.value ? 'Active' : 'In Active'}
          </Label>

        </TableCell>
        )
      case "editIcon":
        return(
          <TableCell align="right">
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
          </TableCell>
        )
      case "deleteIcon":
        return(
        <TableCell align="right">
          <IconButton aria-label="delete" 
              // action={()=>handleClickOpen()} 
              onClick={()=>handleClickOpen()}
            >
              <DeleteIcon />
          </IconButton>
        </TableCell>
        )
    
      default:
        break;
    }
  }

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
     
      <Card>
        <CardHeader
          
          title={heading??""}
        />
        <Divider />
        <CardContent className={classes.content}>
            <div className={classes.inner}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {header && header.map((head, index) => {
                      return(
                        <TableCell align={head?.align??""}>{head?.name??""}</TableCell>  
                      )
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataList.slice(0, rowsPerPage) && dataList.slice(0, rowsPerPage).map((data, index) => (
                    <TableRow>
                      {
                        data && data?.map((val, i) => (
                          getTableComponent(val, i)
                        ))
                      }
                    </TableRow>
                  ))}


                  {/* {orders.slice(0, rowsPerPage).map((order, index) => (
                    <TableRow
                      key={order.id}
                      selected={selectedOrders.indexOf(order.id) !== -1}
                    >
                      <TableCell>
                        {index+1}
                        
                      </TableCell>
                      <TableCell>{order.product_id}</TableCell>
                      <TableCell>                        
                        <Avatar alt={order.productname} src={`http://128.199.83.45/moogambika_dev${order.image}`} />
                      </TableCell>
                      <TableCell>                        
                        <Avatar alt={order.productname} src={`http://128.199.83.45/moogambika_dev${order.image}`} />
                      </TableCell>
                      <TableCell>{order.product_name}</TableCell>
                      <TableCell>{order.product_id}</TableCell>
                      <TableCell>{order.purchase_price}</TableCell>
                      <TableCell>{order.selling_price}</TableCell>
                      <TableCell>{order.tax}</TableCell>

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
                  ))} */}
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
          Delete this {heading??""}
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

DataTable.propTypes = {
  className: PropTypes.string,
  orders: PropTypes.array.isRequired
};

DataTable.defaultProps = {
  orders: []
};

export default DataTable;
