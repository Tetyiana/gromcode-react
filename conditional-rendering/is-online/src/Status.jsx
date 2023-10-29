import React, { Component } from "react";
import Online from "./Online.jsx";
import Offline from "./Offline.jsx";

const Status = ({isOnline}) => {
  if (isOnline) {
    return <Online />      
   }
    return <Offline />
  } 


export default Status;