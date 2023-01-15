import React from "react";
import { withNavBars } from "../../HOCs";
import { AddAnnouncement } from './addAnnouncement';


class AddAnnouncementParent extends React.Component {
  render() {
    return <AddAnnouncement />;
  }
}

export default withNavBars(AddAnnouncementParent);
