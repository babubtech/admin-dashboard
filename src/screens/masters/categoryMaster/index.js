import React from "react";
import { CategoryMaster } from './categoryMaster';
import { withNavBars } from "./../../../HOCs";

class CategoryMasterParent extends React.Component {
  render() {
    return <CategoryMaster />;
  }
}

export default withNavBars(CategoryMasterParent);
