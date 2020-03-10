import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { actions } from "../../actions";

const Friend = ({ name, age, email, id }) => {
  const dispatch = useDispatch();

  const handleDelete = useCallback(() => dispatch(actions.deleteFriend(id)), [
    dispatch,
    id
  ]);
  
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{email}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Friend;
