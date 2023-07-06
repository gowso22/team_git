import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../fbase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginState, setLoginState] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("로그인 성공");
        setLoginState(true);
        navigate("/subscribeList");
      })
      .catch((error) => {
        console.log("로그인 실패", error);
      });
  };

  const [userData, setUserData] = useState(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((data) => {
        setUserData(data.user);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="이메일을 입력하세요" name="email" />
        <input type="password" placeholder="비밀번호를 입력하세요" name="password" />
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
