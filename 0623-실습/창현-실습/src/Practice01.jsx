import React, { useState } from "react";



function Practice01(){
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");

    const [logIn, setLogIn] = useState(false);

    const usernameChage = (e) => {
        setUsername(e.target.value);
       // console.log(username);
    }
    const pwdChange = (e) => {
        setPwd(e.target.value);
        // console.log(pwd);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(username === "admin" && pwd === "password"){
            setLogIn(true)
            console.log("로그인성공");
        }else{
            setLogIn(false);
            console.log("로그인 실패!");
        }
    }


    return(
        <div>
            <h1>실습 1</h1>
            {logIn ? <h2>로그인 성공</h2> : 
            <form onSubmit={handleSubmit}>
                <label>사용자명 : </label>
                <input type="text"
                        value = {username}
                        onChange={usernameChage}></input>
                <label>비밀번호 : </label>
                <input type="password"
                        value = {pwd}
                        onChange={pwdChange}></input>
                <input type="submit"></input>
                
            </form>
            }
        </div>
    );

}

export default Practice01;