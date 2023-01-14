import React from "react";
import { ManageFeedback } from './manageFeedback';
import { withNavBars } from "./../../HOCs";

class manageFeedbackParent extends React.Component {
  render() {
    return <ManageFeedback />;
  }
}

export default withNavBars(manageFeedbackParent);
