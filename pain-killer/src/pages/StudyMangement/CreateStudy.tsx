import CreateStudyHeader from '../../components/CreateStudyHeader';
import { useState } from 'react';

export default function CreateStudy() {
  const [isExhausted, setIsExhausted] = useState(false);

  const handleToggle = () => {
    setIsExhausted(!isExhausted);
  };

  return (
    <>
      <CreateStudyHeader />
      <div className="text-left p-5">
        {/* 수강권 생성 */}
        <h2 className="text-2xl font-extrabold">수강권 생성</h2>
        <p>센터의 수강권을 생성하세요</p>
        <p className=" mt-10 mb-6 font-semibold text-Gray-800">
          수강권 정보 설정
        </p>

        {/* 수업유형 */}
        <div className="flex items-start flex-col mb-4">
          <p className=" mb-1">수업유형*</p>
          <select className="border p-2 w-[389px] rounded-lg">
            <option value="">선택 </option>
            <option value="1:1">1:1 개인수업</option>
            <option value="그룹">그룹 수업</option>
          </select>
        </div>

        {/* 수강권명 */}
        <div className="flex items-start flex-col mb-4">
          <p className="mr-2">수강권명*</p>
          <input type="text" className="border p-2 w-[389px] rounded-lg" />
        </div>

        {/* 수강권기간 */}
        <div className="flex items-start flex-col mb-4">
          <p className="mr-2">수강권기간*</p>
          <div className="flex justify-between">
            <input
              type="text"
              className="border p-2 rounded-lg mr-1 w-[245px]"
            />
            <select className="border p-2  rounded-lg w-36">
              <option value="개월">개월</option>
              <option value="주">주</option>
              <option value="일">일</option>
            </select>
          </div>
        </div>
        {/* 슬라이드 토글 버튼 */}
        <div className="flex justify-end  mb-4">
            <p className='text-Gray-400 text-sm'>소진시 까지</p>
            <label className="switch">
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={isExhausted}
              />
              <span className="slider"></span>
            </label>
          </div>

        {/* 시간 */}
        <div className="flex items-start flex-col mb-4">
          <p className="mr-2">시간*</p>
          <div className="flex items-end">
            <input type="text" className="border p-2 rounded-lg w-[372px]" />
            <span className="ml-2">분</span>
          </div>
        </div>

        {/* 기본횟수 */}
        <div className="flex items-start flex-col mb-4">
          <p className="mr-2">기본횟수*</p>
          <div>
          <input type="text" className="border p-2 rounded-lg w-[372px]" />
          <span className="ml-2">회</span>
          </div>
        </div>
        {/* 슬라이드 토글 버튼 */}
        <div className="flex justify-end  mb-4">
            <p className='text-Gray-400 text-sm'>무제한 </p>
            <label className="switch">
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={isExhausted}
              />
              <span className="slider"></span>
            </label>
          </div>

        

        {/* 서비스횟수 */}
        <div className="flex items-start flex-col mb-4">
          <p className="mr-2">서비스횟수</p>
          <p className=" text-xs mb-1">
            서비스로 부여되는 횟수를 제한하여 설정할 수 있습니다
          </p>
          <div className='flex justify-between w-[389px]'>
          <button className=" flex justify-center items-center border p-1 mr-2 rounded-full w-10 h-10 text-xl bg-Gray-100">-</button>
          <p  className="border p-2 rounded-lg text-center w-72">0회</p>
          <button className="flex justify-center items-center border p-1 ml-2 rounded-full w-10 h-10 text-xl bg-Gray-100">+</button>
          </div>
        </div>

        {/* 저장버튼 */}
        <button className="bg-Pri-500 text-white px-4 py-2 rounded w-full mt-40">
          저장
        </button>
      </div>
    </>
  );
}
