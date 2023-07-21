import React, { useState } from 'react';
import VisibilityON from '../../img/Visibility_24px.svg'; // 아이콘 이미지 경로
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

  

  const [visible, setVisible] = useState(false);
  // 비밀번호 표시여부
  const onVisibleToggle = () => {
    setVisible((prev) => !prev);
  }
  const navigate = useNavigate();

  
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const onIdChange = (event : any) => {
    setId(event.target.value)
  }
  const onPwdChage = (event : any) => {
    setPwd(event.target.value);
  }


  // 전역상태로 토큰값을 가지고 있어야 함.(상태 선언)

  const onLoginSubmit = (event : React.FormEvent) =>{
    event.preventDefault();

    try {
      
        fetch("http://223.130.161.221/api/v1/admins/login", {
          method: 'POST',
          headers: {
            "Authorization" : `Basic ${btoa(id + ":" + pwd)}`,
          },
          body: JSON.stringify({
            username: id,
            password: pwd,
          }),
        }).then((response) => response.json())
          .then((result) => {

            

            if(result.accessToken !== undefined) {

              localStorage.setItem('access_token', result.accessToken)
             
              sessionStorage.setItem("id", id);

              alert(result.message);

              navigate("/home");

            }else{
              alert(result.message);
            }


            console.log(result);
            console.log(result.accessToken);
            
           }
        )
    } catch (error : any) {
      alert(error);
    }
  
  }



  return (
    <div className="flex flex-col items-center">

      <div className="my-10 font-bold text-3xl text-Pri-500">Point T</div>

      <div className="flex justify-start w-64">
        <div className="border-b-2 border-Pri-300 py-2 px-3 font-semibold text-Pri-300">관리자 로그인</div>
        <div className="border-b-2 py-2 px-3 text-Gray-400 font-semibold">직원 로그인</div>
      </div>

      <form 
        onSubmit={onLoginSubmit}
        className="flex flex-col items-start w-96 mt-6">

        <div className="mb-1">아이디</div>
        <input
          className="w-full h-8   px-4 py-2 border border-Gray-300 rounded"
          type="text"
          value={id}
          onChange={onIdChange}
        />

        <div className="mt-6 mb-1">비밀번호</div>
        <div className="relative w-full"> {/* relative 클래스 추가 */}
          <input
            className="w-full h-8   px-4 py-2 border border-Gray-300 rounded"
            type={visible ? "text" : "password"}
            value={pwd}
            onChange={onPwdChage}
          />
          <img
            src={VisibilityON}
            alt="icon"
            onClick={onVisibleToggle}
            className="absolute top-2 right-3 w-6 h-6 cursor-pointer"
          />
        </div>

        <div className="flex w-64 mt-2">
          <button className='text-sm text-Gray-700 mr-1'>아이디 찾기</button>
          <span className='text-sm text-Gray-700'>/</span>
          <button className='text-sm text-Gray-700 ml-1'>비밀번호 찾기</button>
        </div>

        <div className='flex flex-col items-center w-full'>
          <div className="mt-24 mb-4 text-Gray-700">포인티 계정이 없으세요? | 회원가입</div>
          <button className="w-64 h-10 p-2 bg-Gray-100 text-Gray-400 hover:bg-Pri-500 hover:text-white rounded">
            로그인
          </button>
        </div>

      </form>

    </div>
  );
};

export default LoginPage;
