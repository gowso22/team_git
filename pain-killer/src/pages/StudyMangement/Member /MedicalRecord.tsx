import React from 'react';

const MedicalRecord = () => {
  return (
    <div className="flex items-start justify-start mt-8">
      <div className="p-4 bg-white w-96">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold">문진기록</span>
          <button className="text-blue-500">등록하기버튼</button>
        </div>
        <div className="mb-4">
          <p className="mb-2">2022-00-00 문진과 처치 템플릿명 김파이</p>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold">처치기록</span>
          <button className="text-blue-500">등록하기버튼</button>
        </div>
        <div className="mb-4">
          <p className="mb-2">2022-00-00 운동수행 영상 +0</p>
        </div>
      </div>
    </div>
  );
};

export default MedicalRecord;
