import React from 'react';
import Profile from '../../../img/Profile_32px.svg'

const PatientInfo = () => {
  return (
    <div className="flex items-start justify-center flex-col px-2">
      <p className="font-extrabold text-bsblack mt-5 mb-2">환자정보</p>
      <div className="p-4 bg-white w-96 rounded-md">
        <div className="flex flex-wrap flex-col">
        <div className="flex items-center mb-4 justify-center">
          <img src={Profile}/>
          <p className=" ml-4  text-Gray-400">이름 <span className="text-bsblack">박길동</span></p>
        </div>
        <p className=" ml-4  text-Gray-400"> 생년월일<span className="text-bsblack ml-1">1991.02.14</span></p>
        <p className=" ml-4  text-Gray-400"> 등록일<span className="text-bsblack ml-1">2022.11.11</span></p>
        <p className=" ml-4  text-Gray-400"> 성별<span className="text-bsblack ml-1">남</span></p>
        <p className=" ml-4  text-Gray-400"> 전화번호<span className="text-bsblack ml-1">010-1234-5678</span></p>
        <p className=" ml-4  text-Gray-400"> 직업형태<span className="text-bsblack ml-1">사무직</span></p>
        </div>
        <div className="flex justify-start mt-2">
        <button className=" text-bsblack px-1 py-1 rounded-xl mr-2 border">알림메세지 보내기</button>
        <button className=" text-bsblack px-1 py-1 rounded-xl mr-2 border">수강권/계약서</button>
        <button className=" text-bsblack px-1 py-1 rounded-xl border">환자 정보 편집</button>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
