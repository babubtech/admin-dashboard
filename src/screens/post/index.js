import React from "react";
import { Post } from './post';
import { withNavBars } from "./../../HOCs";

class PostParent extends React.Component {
  render() {
    return <Post />;
  }
}

export default withNavBars(PostParent);
