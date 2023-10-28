import React from "react";

const LoginButton = ({ onLogin }) => {
  return <button className="btn login" onClick={onLogin}>Login</button>;
};

export default LoginButton;