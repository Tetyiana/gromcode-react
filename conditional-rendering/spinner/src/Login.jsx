import React from "react";

const Login = (onLogin) => {
  return <button className="login btn" onClick={onLogin.onClick}>Login</button>;
};

export default Login;