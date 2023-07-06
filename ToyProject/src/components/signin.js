import React, { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { signupWithEmailAndPassword } from "../fbase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMesage] = useState("");
  const navigate = useNavigate();
  

  const handleSignup = (e) => {
    e.preventDefault();

    //이메일 형식 유효성 검사하기
    const emailRegex = /^\S+@\S+\.\S+$/;
    if(!emailRegex.test(email)){
      setErrorMesage("올바른 이메일 형식이 아닙니다");
      return;
    }

    //패스워드 길이 유효성 검사하기
    if(password.length < 6){
      setErrorMesage("패스워드는 최소 6자리 이상이어야합니다.");
      return;
    }

    signupWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("회원가입성공");
        console.log("회원정보:", userCredential)
        navigate("/subscribeList");
      })
      .catch((error) => {
        if(error.code === "auth/email-already-in-use"){
          setErrorMesage("이미 사용 중인 이메일입니다")
        }else{
          setErrorMesage("회원가입 실패:" + error.message)
        }
        console.log("회원가입 실패", error);
      });
  };
  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">회원가입</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      <Link to="/login">이미 계정이 있으신가요? 로그인하러가기</Link>
    </div>
  );
}

export default Signup;
