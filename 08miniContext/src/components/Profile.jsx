import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>please Login!</div>;

  return (
    <>
      <div>username: {user.username}</div>
      <div>password:{user.password}</div>
    </>
  );
}

export default Profile;
