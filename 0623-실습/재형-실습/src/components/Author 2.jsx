import React, { useState } from "react"

function Author(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    //사용자 인증
    if(username === "admin" && password === "password"){
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if(isLoggedIn){
    return(
      <div>
        <h1>Sign in Success!</h1>
        <button onClick={handleLogout}></button>
      </div>
    );
  } else{
    return(
      <div>
        <h1>Sign in</h1>
        <form onSubmit={handleFormSubmit}>
        <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Usernmae:"
          />

          <input
            type="text"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Passwords:"
          />
          <button type="submit">Sign in</button>
        </form>
      </div>
    );
  }
}

export default Author;