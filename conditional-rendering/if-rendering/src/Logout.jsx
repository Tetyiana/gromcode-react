import React from "react";

const LogoutButton = ({ onLogout }) => {
  return <button className="btn logout" onClick={onLogout}>Logout</button>;
};

export default LogoutButton;