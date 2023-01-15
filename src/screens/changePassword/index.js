import React from "react";
import { withNavBars } from "../../HOCs";
import { ChangePassword } from './changePassword';


class ChangePasswordParent extends React.Component {
  render() {
    return <ChangePassword />;
  }
}

export default withNavBars(ChangePasswordParent);
