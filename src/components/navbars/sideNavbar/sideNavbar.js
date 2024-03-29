import React, { Fragment, useEffect,useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Drawer, Divider, Paper, Avatar, Typography, Hidden } from '@mui/material';

import Navigation from './components/navigation';
import navigationConfig from './navigationConfig';
import { LocalStorageKeys } from '../../../utils';
import { parse } from 'graphql';

const drawerWidth = 56;

const useStyles = makeStyles(theme => ({
    root: {
      height: '100%',
      overflowY: 'auto'
    },
    content: {
      padding: theme.spacing(2)
    },
    profile: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: 'fit-content'
    },
    avatar: {
      width: 60,
      height: 60
    },
    name: {
      marginTop: theme.spacing(1)
    },
    divider: {
      marginTop: theme.spacing(2)
    },
    navigation: {
      marginTop: theme.spacing(2)
    }
  }));

export const SideNavBar = (props) => {

    const { openMobile, onMobileClose, className, ...rest } = props;

    const classes = useStyles();
    const router = useLocation();
    const session = useSelector(state => state.session);
    const [profile, setProfile] = useState({});

    useEffect(() => {
      if (openMobile) {
        onMobileClose && onMobileClose();
      }
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.pathname]);
    useEffect(() => {
     let profileobj = localStorage.getItem(LocalStorageKeys.profile)
     let profileobjnew = JSON.parse(profileobj)
     
        setProfile(profileobjnew);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const navbarContent = (
      <div className={classes.content}>
        <div className={classes.profile}>
          <Avatar
            alt="Person"
            className={classes.avatar}
            component={RouterLink}
            src={session?.user?.avatar??"/images/login_bg.png"}
            to="/profile/1/timeline"
          />
          <Typography
            className={classes.name}
            variant="h4"
          >
            {/* {session.user.first_name} {session.user.last_name} */}
          </Typography>
          <Typography variant="body2">{profile?.name}</Typography>
          <Typography variant="body2" color={"ActiveCaption"} >{profile?.role?.length > 0 ? profile?.role[0] : ""}</Typography>
        </div>
        <Divider className={classes.divider} />
        <nav className={classes.navigation}>
          {navigationConfig.map(list => (
            <Navigation
              component="div"
              key={list.title}
              pages={list.pages}
              title={list.title}
            />
          ))}
        </nav>
      </div>
    );

    return (
        <Fragment>
        <Hidden lgUp>
        <Drawer
            anchor="left"
            onClose={onMobileClose}
            open={openMobile}
            variant="temporary"
        >
            <div
            {...rest}
            className={clsx(classes.root, className)}
            >
            {navbarContent}
            </div>
        </Drawer>
        </Hidden>
        <Hidden mdDown>
        <Paper
            {...rest}
            className={clsx(classes.root, className)}
            elevation={1}
            square
        >
            {navbarContent}
        </Paper>
        </Hidden>
        </Fragment>
    );
}
