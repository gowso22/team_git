import React, { useState } from "react";
import { ChangeEvent } from "react";

function LoginTsx() {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  const [logIn, setLogin] = useState(false);

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePwdChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPwd(event.target.value);
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username === "admin" && pwd === "password") {
      setLogin(true); // success
    } else {
      setLogin(false); // failure
    }
  };

  return (
    <React.Fragment>
      <div>
        <div>Point T</div>
        <h4>관리자 로그인 | 직원 로그인</h4>
        <form onSubmit={handleSubmit}>
          <div>센터코드</div>
          <input type="number" />
          <div>아이디</div>
          <input type="id" onChange={handleUsernameChange} />
          <div>비밀번호</div>
          <input type="password" onChange={handlePwdChange} />
          <button type="submit">로그인</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default LoginTsx;
