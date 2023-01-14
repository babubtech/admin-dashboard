import React from "react";
import { ManageAnouncement } from './manageAnouncement';
import { withNavBars } from "./../../HOCs";

class manageAnouncementParent extends React.Component {
  render() {
    return <ManageAnouncement />;
  }
}

export default withNavBars(manageAnouncementParent);
