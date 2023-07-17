import RegModalHeader from "../../components/RegModalHeader";


import React from 'react';

const RegModal = ({ onClose }) => {
  return (
    <>
    <RegModalHeader></RegModalHeader>
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white w-80 p-6 rounded-lg">
        <div className="flex justify-end">
          <button className="text-gray-500" onClick={onClose}>x</button>
        </div>
        <div className="text-center">
          <p className="mb-4">돌아가기</p>
          <p>직원 등록을 완료하지 않았습니다.</p>
          <p className="mb-6">직원 등록을 중단하시겠습니까?</p>
          <div className="flex justify-center w-full">
            <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded w-full">예</button>
            <button className="bg-gray-300 px-4 py-2 rounded w-full">돌아가기</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};




export default RegModal;