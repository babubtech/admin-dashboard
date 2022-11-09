import React from 'react';
import { makeStyles } from "@mui/styles";
import { useNavigate } from 'react-router-dom';
import { SubHeader } from '../../../components';
// import { AppRoutes } from '../../router/routes';
import { Grid, TextField, Paper, Button } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '100%',
        padding: theme.spacing(3)
    },
    results: {
      marginTop: theme.spacing(3)
    },
    bgColor: {
        backgroundColor: "#fff",
        height: "calc(100vh - 170px)",
        padding: 30,

    },
    cancelBtn: {
        marginRight: 20
    }
}))


export const AddUser = props => {

    const navigate = useNavigate();
    const classes = useStyles();
   
    // const onLogOut = () => {
    //     navigate(AppRoutes.login);
    // }

    return <div className={classes.root}>
        <SubHeader 
           title={"Add User"}
        />
        <Paper elevation={2} className={classes.bgColor} >
            <div style={{height: "100%"}} >
            <Grid container spacing={4} >
                <Grid item xs={12} md={4} >
                    <TextField fullWidth id="outlined-basic" label="User Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Full Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Mobile number" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="E-mail id" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextField fullWidth id="outlined-basic" label="Father Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Status</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                            <FormControlLabel value="active" control={<Radio />} label="Active" />
                            <FormControlLabel value="inactive" control={<Radio />} label="In-Active" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
            </div>
            <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
            >
                <Button variant={"text"} className={classes.cancelBtn}>Cancel</Button>       
                <Button variant={"contained"} >Submit</Button>       
            </Grid>
        </Paper>
    </div>
}