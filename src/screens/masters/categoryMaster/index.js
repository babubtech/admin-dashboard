import React from "react";
import { CategoryMaster } from './CategoryMaster';
import { withNavBars } from "../../../HOCs";

class CategoryMasterParent extends React.Component {
  render() {
    return <CategoryMaster />;
  }
}

export default withNavBars(CategoryMasterParent);
