import React from 'react';

const Album = () => {
  return (
    <div className="flex items-start justify-start mt-8">
      <div className="p-4 bg-white w-96">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold">회원앨범</span>
          <button className="text-blue-500">전체보기 버튼</button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-200 p-2">운동 수행영상</div>
          {/* 이하 생략 */}
        </div>
        <div className="flex items-center justify-between mt-4">
          <button className="text-blue-500">전체보기</button>
          <div className="flex items-center">
            <div className="bg-yellow-400 w-6 h-6 rounded-full flex items-center justify-center mr-2">
              <span>별점</span>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <p>2022-00-00 만족도 및 후기: 오늘 운동 좋음 굿 ~</p>
        </div>
      </div>
    </div>
  );
};

export default Album;
