import React, { useState } from "react";

import { makeStyles } from "@mui/styles";
import { TopNavBar, SideNavBar } from '../components';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  topBar: {
    zIndex: 2,
    position: 'relative'
  },
  container: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    height: "93vh"
  },
  navBar: {
    zIndex: 3,
    width: 256,
    minWidth: 256,
    flex: '0 0 auto'
  },
  content: {
    overflowY: 'auto',
    flex: '1 1 auto'
  }
}));


const withNavBars = (Component) => (props) => {
  const classes = useStyles({ props });

  const [openNavBarMobile, setOpenNavBarMobile] = useState(false);


  const handleNavBarMobileOpen = () => {
    debugger
    setOpenNavBarMobile(true);
  };

  const handleNavBarMobileClose = () => {
    setOpenNavBarMobile(false);
  };

  return (
    <div className={classes.root}>
      <TopNavBar
        className={classes.topBar}
        onOpenNavBarMobile={handleNavBarMobileOpen}
      />
      <div className={classes.container}>
        <SideNavBar
          className={classes.navBar}
          onMobileClose={handleNavBarMobileClose}
          openMobile={openNavBarMobile}
        />
        <main className={classes.content}>
          <Component {...props}>{props.children}</Component>
        </main>
      </div>
    </div>
  );
};

export default withNavBars;
