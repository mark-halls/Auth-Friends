import React from "react";
import { useDispatch } from "react-redux";

import { actions } from "../../actions";

const Login = () => {
  const dispatch = useDispatch();
  dispatch(actions.login({ username: "Lambda School", password: "i<3Lambd4" }));
  return <div></div>;
};

export default Login;
