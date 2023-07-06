import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const [loginState, setLoginState] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        setLoginState(true);
        navigate('/subscribeList');
    }
    return(
    <>
        
            <form onSubmit={handleSubmit}> 
                <input type="text"
                    placeholder="이메일을 입력하세요"/>
                <input type="password"
                    placeholder="비밀번호를 입력하세요"/>
                <input type="submit" value= "로그인"/>
            </form>  
    </>
    )
}

export default Login;