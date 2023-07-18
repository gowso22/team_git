import React, { useState } from 'react';
import ManagerFindHeader from '../../components/ManagerFindAccount';

const ContactVerification = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCodeSent, setVerificationCodeSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationCodeConfirmed, setVerificationCodeConfirmed] =
    useState(false);

  const handleVerificationCodeRequest = () => {
    setVerificationCodeSent(true);
    setVerificationCodeConfirmed(false);
  };

  const handleResendVerificationCode = () => {
    setVerificationCodeSent(true);
    setVerificationCodeConfirmed(false);
  };

  const handleVerificationCodeConfirm = () => {
    setVerificationCodeConfirmed(true);
  };

  const handleConfirm = () => {
    console.log(
      `Name: ${name}, Phone Number: ${phoneNumber}, Verification Code: ${verificationCode}`,
    );
  };

  return (
    <>
      <ManagerFindHeader />
      <div className="flex flex-col items-center">
        <div className="my-10 font-bold text-xl text-Gray-700">연락처 인증</div>
        <div className="flex flex-col items-start w-96">
          <div className="mb-2 text-bsblack ">이름</div>
          <input
            className="w-full h-8 p-5 border border-Gray-300 rounded"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="mt-4 mb-2 text-bsblack">연락처</div>
          <div className="flex w-full">
            <input
              className="flex-grow h-8 p-5 border border-Gray-300 rounded"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {!verificationCodeSent && (
              <button
                className="w-32 h-10 ml-2   flex items-center justify-center bg-bswhite text-bsblack rounded border border-Gray-300"
                onClick={handleVerificationCodeRequest}
              >
                인증번호 받기
              </button>
            )}
            {verificationCodeSent && !verificationCodeConfirmed && (
              <button
                className="w-32 h-10 ml-2   flex items-center justify-center bg-bswhite text-bsblack rounded border border-Gray-300"
                onClick={handleResendVerificationCode}
              >
                재전송
              </button>
            )}
          </div>
          {verificationCodeSent && !verificationCodeConfirmed && (
            <>
              <div className="mt-4 mb-2 flex w-full">
                <div className="">
                  <input
                    className="flex-grow h-8 p-5 border border-Gray-300 rounded"
                    type="text"
                    value={verificationCode}
                    placeholder="인증번호 입력"
                    onChange={(e) => setVerificationCode(e.target.value)}
                  />
                </div>
                <button
                  className="w-32 h-10 ml-2   flex items-center justify-center bg-bswhite text-bsblack rounded border border-Gray-300 hover:bg-Pri-100 hover:border-Pri-500 hover:text-Pri-500"
                  onClick={
                    verificationCodeSent
                      ? handleVerificationCodeConfirm
                      : handleConfirm
                  }
                >
                  {verificationCodeSent ? '인증번호 확인' : '확인'}
                </button>
              </div>
            </>
          )}
        </div>
        <button
          className=" w-72 h-10 mt-60 bg-Gray-100 text-Gray-400 hover:bg-Pri-500 hover:text-white rounded"
          onClick={handleConfirm}
        >
          확인
        </button>
      </div>
    </>
  );
};

export default ContactVerification;
