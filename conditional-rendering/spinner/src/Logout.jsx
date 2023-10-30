import React from "react";

const Logout = ( onLogout ) => {
  return <button className="logout btn" onClick={onLogout.onClick}>Logout</button>;
};

export default Logout;