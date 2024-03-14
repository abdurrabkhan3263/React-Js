import React, { useState } from "react";
import userContext from "./UserContext";

function UserContextProvider({ children }) {
  const [user, setUser] = React.useState(null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}

export default UserContextProvider;
