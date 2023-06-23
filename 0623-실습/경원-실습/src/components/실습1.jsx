import React from "react";
import { useState } from "react";

function Login(){
    const[inputId,setInputId] = useState('');
    const[inputPw,setInputPw] = useState('');
    const[isLoggedIn, setIsLoggedIn] = useState(false);

    const handleInputId = (e) =>{
      setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
      setInputPw(e.target.value);
    }

    const handleFormSubmit = (e) => {
      e.preventDefault();
      if(inputId ==="admin" && inputPw === "password"){
        setIsLoggedIn(true);
      }
      console.log(handleFormSubmit)
    };

    const handleLogout = () => {
      setIsLoggedIn(false);
    };

    if(isLoggedIn){
      return(
        <div>
          <h1>로그인 성공!</h1>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      );
    }else {
      return(
        <div>
          <h1>로그인</h1>
          <form onSubmit={handleFormSubmit}>
            <input type="text" value={inputId} onChange={handleInputId}
            placeholder="아이디를 입력하세요"></input>
            <input type="password"
              value={inputPw} onChange={handleInputPw}
              placeholder="비밀번호를 입력하세요"
            ></input>
            <button type="submit">로그인</button>
          </form>
        </div>
      )
    }
  
}

export default Login;