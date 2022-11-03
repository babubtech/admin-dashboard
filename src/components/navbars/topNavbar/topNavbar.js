/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink, useNavigate} from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Hidden,
  Input,
  colors,
  Popper,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ClickAwayListener,
  Typography
} from '@mui/material';
import LockIcon from '@mui/icons-material/LockOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import InputIcon from '@mui/icons-material/Input';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { LocalStorageKeys } from '../../../utils';
import { AppRoutes } from '../../../router/routes';
// import axios from 'utils/axios';
// import useRouter from 'utils/useRouter';
import NotificationsPopover from '../../NotificationsPopover';
// import { logout } from 'actions';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    zIndex: 2,
    position: 'relative'
  },
  flexGrow: {
    flexGrow: 1
  },
  search: {
    backgroundColor: 'rgba(255,255,255, 0.1)',
    borderRadius: 4,
    flexBasis: 300,
    height: 36,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center'
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: 'inherit'
  },
  searchInput: {
    flexGrow: 1,
    color: 'inherit',
    '& input::placeholder': {
      opacity: 1,
      color: 'inherit'
    }
  },
  searchPopper: {
    zIndex: theme.zIndex.appBar + 100
  },
  searchPopperContent: {
    marginTop: theme.spacing(1)
  },
  trialButton: {
    marginLeft: theme.spacing(2),
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  },
  trialIcon: {
    marginRight: theme.spacing(1)
  },
  notificationsButton: {
    marginLeft: theme.spacing(1)
  },
  notificationsBadge: {
    backgroundColor: colors.orange[600]
  },
  logoutButton: {
    marginLeft: theme.spacing(1)
  },
  logoutIcon: {
    marginRight: theme.spacing(1)
  },
  headerTitle: {
    color: "#fff"
  }
}));

export const TopNavBar = (props) => {
  const { onOpenNavBarMobile, className, ...rest } = props;
  const navigate = useNavigate();
  const classes = useStyles();
  // const searchRef = useRef(null);
  const notificationsRef = useRef(null);
  const [pricingModalOpen, setPricingModalOpen] = useState(false);
  const [openSearchPopover, setOpenSearchPopover] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [openNotifications, setOpenNotifications] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchNotifications = () => {
    //   axios.get('/api/account/notifications').then(response => {
    //     if (mounted) {
    //       setNotifications(response.data.notifications);
    //     }
    //   });
    };

    fetchNotifications();

    return () => {
      mounted = false;
    };
  }, []);

  const handleLogout = () => {
    // history.push('/auth/login')
    localStorage.removeItem(LocalStorageKeys.authToken);
    navigate(AppRoutes.login);
  };

  const handlePricingOpen = () => {
    setPricingModalOpen(true);
  };

  const handlePricingClose = () => {
    setPricingModalOpen(false);
  };

  const handleNotificationsOpen = () => {
    setOpenNotifications(true);
  };

  const handleNotificationsClose = () => {
    setOpenNotifications(false);
  };

  const handleSearchChange = event => {
    setSearchValue(event.target.value);
    setAnchorEl(event.currentTarget);
    if (event.target.value) {
      if (!openSearchPopover) {
        setOpenSearchPopover(true);
      }
    } else {
      setOpenSearchPopover(false);
    }
  };

  const handleSearchPopverClose = () => {
    setOpenSearchPopover(false);
  };

  const popularSearches = [
    'Devias React Dashboard',
    'Devias',
    'Admin Pannel',
    'Project',
    'Pages'
  ];

  const canBeOpen = openSearchPopover && Boolean(anchorEl);
  const id = canBeOpen ? 'spring-popper' : undefined;

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
    >
      <Toolbar>
        <RouterLink to="/" style={{textDecoration: "none"}} >
          {/* <img
            alt="Logo"
            src="/images/logo--white.svg"
          /> */}
          <Typography 
              component="h1"
              gutterBottom
              variant="h3"
              className={classes.headerTitle} 
          >{"KCDS"}</Typography>
        </RouterLink>
        <div className={classes.flexGrow} />
        {/* <Hidden smDown>
          <div
            className={classes.search}
            // ref={searchRef}
          >
            <SearchIcon className={classes.searchIcon} />
            <Input
              className={classes.searchInput}
              disableUnderline
              onChange={handleSearchChange}
              placeholder="Search people &amp; places"
              value={searchValue}
            />
          </div>
          <Popper
            anchorEl={anchorEl}
            className={classes.searchPopper}
            open={openSearchPopover}
            transition
          >
            <ClickAwayListener onClickAway={handleSearchPopverClose}>
              <Paper
                className={classes.searchPopperContent}
                elevation={3}
              >
                <List>
                  {popularSearches.map(search => (
                    <ListItem
                      button
                      key={search}
                      onClick={handleSearchPopverClose}
                    >
                      <ListItemIcon>
                        <SearchIcon />
                      </ListItemIcon>
                      <ListItemText primary={search} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </ClickAwayListener>
          </Popper>
          <Button
            className={classes.trialButton}
            onClick={handlePricingOpen}
            variant="contained"
          >
            <LockIcon className={classes.trialIcon} />
            Trial expired
          </Button>
        </Hidden> */}
        <Hidden mdDown>
          <IconButton
            className={classes.notificationsButton}
            color="inherit"
            onClick={handleNotificationsOpen}
            ref={notificationsRef}
          >
            <Badge
              badgeContent={2}
              classes={{ badge: classes.notificationsBadge }}
              // variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Button
            className={classes.logoutButton}
            color="inherit"
            onClick={handleLogout}
          >
            <InputIcon className={classes.logoutIcon} />
            Sign out
          </Button>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onOpenNavBarMobile}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
      {/* <PricingModal
        onClose={handlePricingClose}
        open={pricingModalOpen}
      /> */}
      <NotificationsPopover
        anchorEl={notificationsRef.current}
        notifications={notifications}
        onClose={handleNotificationsClose}
        open={openNotifications}
      />
    </AppBar>
  );
}

