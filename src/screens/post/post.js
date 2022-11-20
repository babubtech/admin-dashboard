import React from 'react';
// import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Tabs, Tab, Divider, colors, Grid, CardHeader, Avatar, Typography, Card, CardContent, CardActions, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';

import { Timeline,
//  Connections, Header, Projects, Reviews 
} from '../profile/components';

const useStyles = makeStyles(theme => ({
  root: {},
  inner: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  content: {
    marginTop: theme.spacing(3)
  },
  bgImage: {
    width: "100%",
    borderRadius: "16px"
  }
}));

export const Post = props => {
  const { match, history } = props;
  const classes = useStyles();
//   const { id, tab } = match.params;

  const handleTabsChange = (event, value) => {
    history.push(value);
  };

  const tabs = [
    { value: 'timeline', label: 'Timeline' },
    { value: 'connections', label: 'Connections' },
    { value: 'projects', label: 'Projects' },
    { value: 'reviews', label: 'Reviews' }
  ];

//   if (!tab) {
//     return <Redirect to={`/profile/${id}/timeline`} />;
//   }

//   if (!tabs.find(t => t.value === tab)) {
//     return <Redirect to="/errors/error-404" />;
//   }

  return (
    <div
      className={classes.root}
      title="Profile"
    >
      <div className={classes.inner}>
        <div className={classes.content}>
            <Grid container xs={12} spacing={4}>
                <Grid item md={12} xs={12}>
                    {<Timeline />}
                </Grid>
            </Grid>
        </div>
      </div>
    </div>
  );
};
