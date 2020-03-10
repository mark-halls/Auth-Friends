import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../../actions";

const FriendForm = () => {
  const numFriends = useSelector(state => state.friends).length;
  const [formState, setFormState] = useState({
    id: numFriends,
    name: "",
    age: "",
    email: ""
  });
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      actions.addFriend({
        id: numFriends,
        name: formState.name,
        age: formState.age,
        email: formState.email
      })
    );
  };

  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={formState.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="number"
        name="age"
        value={formState.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <input
        type="email"
        name="email"
        value={formState.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="button" onClick={() => handleSubmit()}>
        Submit
      </button>
    </div>
  );
};

export default FriendForm;
