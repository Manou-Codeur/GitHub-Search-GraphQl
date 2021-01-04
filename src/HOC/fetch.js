import React from "react";
import { useQuery } from "@apollo/client";

const connect = (state, dispatch) => {
  //do something...
  return component => {
    //do something else... then return component
    return (component.props += { state, dispatch });
  };
};

export default connect;
