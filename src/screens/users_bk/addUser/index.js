import React from "react";
import { withNavBars } from "../../../HOCs";
import { AddUser } from './addUser';


class AddUserParent extends React.Component {
  render() {
    return <AddUser />;
  }
}

export default withNavBars(AddUserParent);
