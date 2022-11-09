import React from "react";
import { StatusMaster } from './statusMaster';
import { withNavBars } from "./../../../HOCs";

class StatusMasterParent extends React.Component {
  render() {
    return <StatusMaster />;
  }
}

export default withNavBars(StatusMasterParent);
