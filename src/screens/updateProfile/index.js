import React from "react";
import { withNavBars } from "../../HOCs";
import { UpdateProfile } from './updateProfile';


class UpdateProfileParent extends React.Component {
  render() {
    return <UpdateProfile />;
  }
}

export default withNavBars(UpdateProfileParent);
