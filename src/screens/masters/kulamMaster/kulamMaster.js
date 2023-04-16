import React, { useState } from 'react';
import { makeStyles } from "@mui/styles";
import { AddUserForm } from "./AddUser";
import { DataTable, SubFilter, SubHeader } from '../../../components';
import { NetworkContext } from '../../../context/NetworkContext';
import utils from '../../../redux/slices/utils';
import Results  from './Results';
import { SnackBarContext } from "../../../context/SnackbarContext";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { async } from 'validate.js';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '100%',
        padding: theme.spacing(3)
    },
    results: {
      marginTop: theme.spacing(3)
    }
}))

const fromField = [
    {
        fieldType: "textField",
        name: "User Name",
        state: "user_name"
    },
    {
        name: "Status",
        state: "status",
        id: "status",
        fieldType: "radioGroup",
        options: [
            {
                value: "Active",
                label: "Active"
            },
            {
                value: "In-Active",
                label: "In-Active"
            }
        ]
    }
]

export const KulamMaster = props => {

    const classes = useStyles();
    const { sendNetworkRequest } = React.useContext(NetworkContext);
    const snackbarCtx = React.useContext(SnackBarContext);

    const [dataList, setDataList] = useState([]);
    const [confirmdialog, setConfirmdialog] = useState(false);
    const [statusobj, setStatusobj] = useState({});


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
    };

    
    const updateuserstatus = async (userobj) => {
        let units = await sendNetworkRequest('/master/modifykulam', {}, userobj,false)
        snackbarCtx.setSnack({
            ...snackbarCtx,
            open: true,
            type: "success",
            msg: "Saved Successfully",
            vertical: "top",
          });
        handleClose()
        fetuserstatus()
    }
    const handlesearch =  (content) => {
        alert("content")
    }
    const handleedit =  (userobj) => {
        setStatusobj(userobj)
        setOpen(true);
    };
    const handledelete =  (userobj) => {
        changeuserstatus(userobj)
       // setConfirmdialog(true);
    };

    const changeuserstatus = async (userobj) => {
        let bodycontent = {
            id : userobj.id,
            status : userobj.status
        }
         await sendNetworkRequest('/master/updateuserstatus', {}, userobj,false)
         fetuserstatus()
    }
    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        snackbarCtx.setSnack({
            ...snackbarCtx,
            open: true,
            type: "success",
            msg: "Saved Successfully",
            vertical: "top",
          });
        fetuserstatus()
    },[])
    React.useEffect(() => {
        if (open) {
             const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
            descriptionElement.focus();
        }
        }
    }, [open]);
    async function fetuserstatus()
    {
      let units = await sendNetworkRequest('/master/fetchmasterkulam', {}, {},false)
      setDataList(units.data);

     
    }
    const handleconfirmClose = () => {
        setConfirmdialog(false);
      };
    return <div className={classes.root}>
      <Dialog
        open={confirmdialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure want to delete status?"}
        </DialogTitle>
       
        <DialogActions>
          <Button color="error" onClick={handleconfirmClose}>Cancel</Button>
          <Button onClick={handleconfirmClose} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
        <SubHeader title={"Kulam Master"} buttonText={"Add Kulam Master"} handleAddOpen={handleClickOpen}/>
        
        <SubFilter 
            is_fiter = {false}
            filter={{
                buttonName: "Advance filter",
                onFilter: ()=>null,
                formJson: fromField
            }}
            search={{
                placeholder: "Search by kulam",
                onSearch: {handlesearch}
            }}
        />
        
        {/* <DataTable 
            heading={"User Status Master"}
            className={classes.results}
            orders={dataList}
            header={[{name: "S No",componentType: "count",key:"id"}, {name: "Name",
            componentType: "text",key:"name"}, {name: "Status",componentType: "status",key:"is_active"}, {name: "Edit",componentType: "editIcon",key:"id", align: "right"}, {name: "Delete", componentType: "deleteIcon",key:"id", align: "right"}]}
            dataList={dataList}
        /> */}
<Results
         onEdit={handleedit}
         onDelete={handledelete}
        // onReset={resetpassword}
         onUpdatestatus={updateuserstatus}
        className={classes.results}
        orders={dataList} //
      />
        <AddUserForm 
            statusobj= {statusobj}
            onUpdatestatus={updateuserstatus}
            descriptionElementRef={descriptionElementRef} 
            handleClickOpen={handleClickOpen}  
            handleClose={handleClose}
            open={open}
        />
       
    </div>
}