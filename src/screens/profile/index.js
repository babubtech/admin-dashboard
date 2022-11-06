import React from "react";
import { Profile } from './profile';
import { withNavBars } from "./../../HOCs";

class ProfileParent extends React.Component {
  render() {
    return <Profile />;
  }
}

export default withNavBars(ProfileParent);
