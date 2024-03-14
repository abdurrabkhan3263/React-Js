import React, { useContext, useState } from "react";
import userContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(userContext);
  if (!user) {
    return <h2>Please Login</h2>;
  }
  return (
    <div>
      <h2>Welcome {user.username}</h2>
    </div>
  );
}

export default Profile;
