import React from "react";
import { useParams } from "react-router-dom";

// new way to fetch parameters with hooks
export const Users = () => {
    let params = useParams();
    return (
      <div>
        In React Router v5, You can use hooks to get parameters.
        <br />
        Current id parameter is <strong>{params.id}</strong>
        <br />
        Current hash parameter is <strong>{params.hash}</strong>
      </div>
    );
  }