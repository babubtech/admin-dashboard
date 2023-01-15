import React from 'react';
import { makeStyles } from "@mui/styles";
import { useNavigate } from 'react-router-dom';
import { FilesDropzone, SubHeader } from '../../components';
// import { AppRoutes } from '../../router/routes';
import { Grid, TextField, Paper, Button, Typography } from "@mui/material";
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


export const ChangePassword = props => {

    const navigate = useNavigate();
    const classes = useStyles();
   
    // const onLogOut = () => {
    //     navigate(AppRoutes.login);
    // }

    return <div className={classes.root}>
        <SubHeader 
           title={"Change Password"}
        />
        <Paper elevation={2} className={classes.bgColor} >
            <div style={{height: "100%"}} >
            <Grid container spacing={4} >
                <Grid item xs={12} md={12} >
                    <TextField fullWidth id="outlined-basic" label="Old Password" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField fullWidth id="outlined-basic" label="New Password" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField fullWidth id="outlined-basic" label="Confirm password" variant="outlined" />
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