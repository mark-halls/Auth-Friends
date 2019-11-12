import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { actions } from "../../actions";

const Login = ({history}) => {
  const [formState, setFormState] = useState({
    username: "Lambda School",
    password: "i<3Lambd4"
  });
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      actions.login({
        username: formState.username,
        password: formState.password
      })
    );
    history.push("/friends");
  };

  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input
        type="username"
        name="username"
        value={formState.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={formState.password}
        onChange={handleChange}
      />

      <button type="button" onClick={() => handleSubmit()}>
        Submit
      </button>
    </div>
  );
};

export default Login;
