import React from "react";
import { RoleMaster } from './roleMaster';
import { withNavBars } from "./../../../HOCs";

class RoleMasterParent extends React.Component {
  render() {
    return <RoleMaster />;
  }
}

export default withNavBars(RoleMasterParent);
