import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { Grid, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 20
  }
}));

const Header = props => {
  const { className, ...rest } = props;

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
          {/* <Typography
            component="h2"
            gutterBottom
            variant="overline"
          >
            Management
          </Typography> */}
          <Typography
            component="h1"
            variant="h3"
          >
           Announcements
          </Typography>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            variant="contained"
            component={RouterLink}
            size="small"
            // to={'/editproducts/1'}
          >
            Add Announcement
          </Button> 
        </Grid>
      </Grid>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

export default Header;
