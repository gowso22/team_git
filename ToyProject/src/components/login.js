import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../fbase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginState, setLoginState] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoginState(true);
    navigate("/subscribeList");
  };

  const [userData, setUserData] = useState(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data); // console로 들어온 데이터 표시
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="이메일을 입력하세요" />
        <input type="password" placeholder="비밀번호를 입력하세요" />
        <input type="submit" value="로그인" />
      </form>

      <button onClick={handleGoogleLogin}>구글로그인</button>
      {userData ? userData.displayName : null}
      <Link to="/signin">
        <p>회원가입</p>
      </Link>
    </>
  );
};

export default Login;
