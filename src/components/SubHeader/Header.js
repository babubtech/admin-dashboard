import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { Grid, Typography, Button } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 20
  }
}));

const SubHeader = props => {
  const { className, handleAddOpen, title = '', buttonText="Add", ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
        spacing={3}
      >
        <Grid item>
          <Typography
            component="h1"
            variant="h3"
          >
           {title}
          </Typography>
        </Grid>
        <Grid item>
          {handleAddOpen && 
             <Button
             color="primary"
             variant="contained"
             size={"medium"}
             onClick={handleAddOpen()}
           >
             {buttonText}
           </Button>
          } 
        </Grid>
      </Grid>
    </div>
  );
};

SubHeader.propTypes = {
  className: PropTypes.string,
  handleAddOpen: PropTypes.func,
  title: PropTypes.string,
  buttonText: PropTypes.string
};

export default SubHeader;
