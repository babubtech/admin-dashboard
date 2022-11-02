import React from "react";
import { Dashboard } from './dashboard';
import { withNavBars } from "./../../HOCs";

class DashboardParent extends React.Component {
  render() {
    return <Dashboard />;
  }
}

export default withNavBars(DashboardParent);
