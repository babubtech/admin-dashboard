import React from "react";
import { UserProfileList } from './userProfileList';
import { withNavBars } from "./../../HOCs";

class UserProfileListParent extends React.Component {
  render() {
    return <UserProfileList />;
  }
}

export default withNavBars(UserProfileListParent);
