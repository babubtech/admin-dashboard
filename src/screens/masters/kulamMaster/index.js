import React from "react";
import { KulamMaster } from './kulamMaster';
import { withNavBars } from "../../../HOCs";

class KulamMasterParent extends React.Component {
  render() {
    return <KulamMaster />;
  }
}

export default withNavBars(KulamMasterParent);
