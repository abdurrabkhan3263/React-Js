import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUse] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  function handleSubmit(e) {
    e.preventDefault();
    setUser({ username, password });
  }
  return (
    <div>
      <h1>Welcome To ContextApi</h1>
      <input
        type="text"
        placeholder="Enter Your Name Please"
        value={username}
        onChange={(e) => setUse(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Your Password Please"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Now</button>
    </div>
  );
}

export default Login;
