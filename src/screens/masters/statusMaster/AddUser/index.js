import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { DialogTitle, TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Controller,useForm } from "react-hook-form";
import {FormInputText}  from "../../../../components/form-components/FormInputText";
import {FormInputRadio}  from "../../../../components/form-components/FormInputRadio";
import { rules } from './rules';

export const AddUserForm = props => {
    const {onUpdatestatus, statusobj} = props;
    const { handleSubmit, reset, control , setValue} = useForm();
    const onSubmit = (data) =>  onUpdatestatus(data);
    

    const handleDismiss = () => {
       
        props.handleClose()
    }
    React.useEffect(() => {
        if(statusobj.name)
        {
            setValue("id",statusobj.id)

            setValue("statusname",statusobj.name)
            setValue("status",statusobj.is_active ? 'active' : 'inactive')
            setValue("errortitle",statusobj?.content?.title)
            setValue("errordescription",statusobj?.content?.description)


            // setValue({
            //     ...statusobj
            // })
        }else{
            reset()
        }
       
    },[statusobj])
    return <Dialog
        maxWidth={"sm"}
        fullWidth
        open={props.open}
        // onClose={props.handleClose}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
    >
        <DialogTitle variant={"h4"} id="scroll-dialog-title">{"Add Status"}</DialogTitle>
        <form>
        <DialogContent dividers>
            <DialogContentText
                id="scroll-dialog-description"
                ref={props.descriptionElementRef}
                tabIndex={-1}
                sx={{
                    minHeight: "calc(100vh - 60vh)",
                    padding: "12px 0px"
                }}
            >
                <Grid container spacing={2}>
                    <Grid item md={12} xs={12}>
                    <FormInputText name="statusname" control={control} label="Status Name" rules={
                        rules.statusname
                    } />
                    </Grid>
                    
                     <Grid item md={12} xs={12}>

                        <FormInputRadio
                            name={"status"}
                            control={control}
                            label={"Radio Input"}
                            row = {true}
                            options={
                                [
                                    {
                                      label: "Active",
                                      value: "active",
                                    },
                                    {
                                      label: "Inactive",
                                      value: "inactive",
                                    },
                                  ]
                            }
                        />
                       
                    </Grid>
                    <Grid item md={12} xs={12}>
                    <FormInputText name="errortitle" control={control} label="Error Title"  rules={
                        rules.errortitle
                    }/>

                    </Grid>
                    <Grid item md={12} xs={12}>
                    <FormInputText name="errordescription" rules={
                        rules.errordescription
                    } control={control} label="Description" fieldprops={{
                        multiline:true,
                        maxRows:4,
                         minRows:4
                    }}  />

                   
                    </Grid>
                </Grid>
            </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ padding: 2 }}>
            <Button onClick={handleDismiss}>Cancel</Button>
            <Button onClick={handleSubmit(onSubmit)} variant={"contained"} >Submit</Button>
            
        </DialogActions>
        </form>
    </Dialog>
}