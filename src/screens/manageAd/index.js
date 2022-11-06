import React from "react";
import { ManageAd } from './manageAd';
import { withNavBars } from "./../../HOCs";

class ManageAdParent extends React.Component {
  render() {
    return <ManageAd />;
  }
}

export default withNavBars(ManageAdParent);
