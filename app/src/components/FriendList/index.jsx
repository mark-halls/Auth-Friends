import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../../actions";
import FriendForm from "../FriendForm";
import Friend from "../Friend";

const FriendList = () => {
  const dispatch = useDispatch(actions.getFriends());
  const friends = useSelector(state => state.friends);

  useEffect(() => {
    const fetchOnce = async () => {
      await dispatch(actions.getFriends());
    };
    fetchOnce();
  }, [dispatch]);

  return (
    <>
      <FriendForm />
      {friends ? (
        friends.map((friend, index) => {
          return <Friend key={index} {...friend} />;
        })
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default FriendList;
