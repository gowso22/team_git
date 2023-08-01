import React from 'react';

const PainArea = () => {
  return (
    <div className="flex items-start justify-start mt-8">
      <div className="p-4 bg-white w-96">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold">통증부위</span>
          <button className="text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.293 8.293a1 1 0 00-1.414-1.414L12 10.586l-1.879-1.879a1 1 0 00-1.414 1.414L10.586 12l-1.879 1.879a1 1 0 101.414 1.414L12 13.414l1.879 1.879a1 1 0 001.414-1.414L13.414 12l1.879-1.879a1 1 0 000-1.414z"
              />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-gray-200 p-2">[오른쪽팔 - 아래쪽 팔]</div>
          <div className="bg-gray-200 p-2">[오른쪽팔 - 아래쪽 팔]</div>
          <div className="bg-gray-200 p-2">[오른쪽팔 - 아래쪽 팔]</div>
          {/* 이하 생략 */}
        </div>
      </div>
    </div>
  );
};

export default PainArea;
