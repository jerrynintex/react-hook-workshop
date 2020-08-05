import React from "react";
import { withRouter } from "react-router-dom";

// Old way to fetch parameters
export const Post = ({ match }) => {
    let params = match.params;
    return (
      <div>
        In React Router v4, you get parameters from the props. Current parameter
        is <strong>{params.slug}</strong>
      </div>
    );
  }
export const RoutePost = withRouter(Post);