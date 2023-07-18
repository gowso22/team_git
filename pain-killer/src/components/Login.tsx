import React , { useState } from "react";
import { ChangeEvent } from "react";

function LoginTsx() {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  const [logIn, setLogin] = useState(false);

  const userNameChange = (event: ChangeEvent<HTMLInputElement>) =>  {
    setUsername(event.target.value);
  }

  const pwdChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPwd(event.target.value);
  }

  const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    if(username === "admin" && pwd === "password"){
      setLogin(true);  // success
    } else {
      setLogin(false); // failure
    }
  }

  return (
    <React.Fragment>
      <div>
        <div>Point T</div>
        <h4>관리자 로그인 | 직원 로그인</h4>
        <div>센터코드</div>
        <input type="number"></input>
        <div>아이디</div>
        <input type="id"></input>
        <div>비밀번호</div>
        <input type="passcode"></input>
    </div>
    </React.Fragment>
  )

}

export default LoginTsx;