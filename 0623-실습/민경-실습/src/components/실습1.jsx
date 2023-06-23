import React, { useState } from "react";

const LoginApp = () => {
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
    // 사용자 인증 로직
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
    } else {
      alert("다시 입력해주세요!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <h1>로그인 성공!</h1>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>로그인</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="사용자명"
            value={username}
            onChange={handleUsernameChange}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">로그인</button>
        </form>
      </div>
    );
  }
};

function Training01() {
  return <LoginApp />;
}

export default Training01;
