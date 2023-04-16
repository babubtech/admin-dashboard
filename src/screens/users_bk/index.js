import React from "react";
import { Users } from './users';
import { withNavBars } from "./../../HOCs";

class UserParent extends React.Component {
  render() {
    return <Users />;
  }
}

export default withNavBars(UserParent);
