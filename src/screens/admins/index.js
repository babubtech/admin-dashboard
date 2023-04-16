import React from "react";
import { Admins } from './admins';
import { withNavBars } from "../../HOCs";

class AdminsParent extends React.Component {
  render() {
    return <Admins />;
  }
}

export default withNavBars(AdminsParent);
