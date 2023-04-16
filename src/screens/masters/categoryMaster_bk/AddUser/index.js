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

export const AddUserForm = props => {

    return <Dialog
            maxWidth={"sm"}
            fullWidth 
            open={props.open}
            onClose={props.handleClose}
            scroll={"paper"}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle variant={"h4"} id="scroll-dialog-title">{"Add Category"}</DialogTitle>
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
                        <TextField fullWidth id="outlined-basic" label="Category Name" variant="outlined" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Status</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Active" />
                                <FormControlLabel value="male" control={<Radio />} label="In-Active" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </DialogContentText>
            </DialogContent>
            <DialogActions sx={{padding: 2}}>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button onClick={props.handleClose} variant={"contained"} >Submit</Button>
            </DialogActions>
    </Dialog>
}