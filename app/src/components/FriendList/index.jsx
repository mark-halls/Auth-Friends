import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actions } from "../../actions";

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
      {friends ? (
        friends.map((friend, index) => {
          console.log(friend);
          return <div key={index}>{friend.name}</div>;
        })
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default FriendList;
