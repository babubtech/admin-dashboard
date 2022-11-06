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
} from './components';

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

export const Profile = props => {
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
      {/* <Header /> */}
      

      <div className={classes.inner}>

        <div className={classes.content}>
            <Grid container xs={12} spacing={1}>
                <Grid item md={12} xs={12}>
                    <img className={classes.bgImage} src="https://picsum.photos/800/300?random=1"></img>
                </Grid>
            </Grid>
        </div>

        <div className={classes.content}>
            <Grid container xs={12} spacing={1}>
                <Grid item md={12} xs={12}>
                    <CardHeader
                        avatar={
                        <Avatar x={{ bgcolor: red[500] }} sx={{ width: 56, height: 56 }}  aria-label="recipe" src={"https://picsum.photos/400/400?random=10"} >
                            R
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title={<Typography variant={"h6"} >{"Shrimp and Chorizo Paella"}</Typography>}
                        subheader="September 14, 2016"
                    />
                </Grid>
            </Grid>
        </div>

        <Tabs
          onChange={handleTabsChange}
          scrollButtons="auto"
          value={"timeline"}
          variant="scrollable"
        >
          {tabs.map(tab => (
            <Tab
              key={tab.value}
              label={tab.label}
              value={tab.value}
            />
          ))}
        </Tabs>
        <Divider className={classes.divider} />
        <div className={classes.content}>
            <Grid container xs={12} spacing={4}>
                <Grid item md={4} xs={12}>
                  <Card style={{marginTop: 18}} >
                    <CardHeader
                        title={<Typography variant={"h4"} >{"About"}</Typography>}
                    />
                    <Divider />
                    <CardContent>

                        <Typography variant={"h6"} color={"text.secondary"} >"Everyone thinks of changing the world, but no one thinks of changing himself."</Typography>
                        <br />
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                    </Card>
                </Grid>
                <Grid item md={8} xs={12}>
                    {<Timeline />}
                </Grid>
            </Grid>
          {/* {tab === 'connections' && <Connections />}
          {tab === 'projects' && <Projects />}
          {tab === 'reviews' && <Reviews />} */}
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};
