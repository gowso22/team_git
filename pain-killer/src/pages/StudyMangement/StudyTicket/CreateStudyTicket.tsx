import CreateStudyTicketHeader from './CreateStudyTicketHeader';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

export default function CreateStudyTicket() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <>
      <CreateStudyTicketHeader />

      <div className="text-left p-5">
        {/* 수강권 생성 */}
        <div className="flex flex-col justify-start mb-2">
          <h2 className="text-2xl font-extrabold mb-2">
            [이벤트 특가] 설맞이 피티 30% 할인
          </h2>

          <p className="text-right bg-Pri-50 text-xs px-2 py-1 rounded text-Pri-500 w-[83px] ">
            개인수업 - 1:1
          </p>
        </div>

        {/* 수강권명 입력 */}
        <div className="flex items-start flex-col mb-4">
          <p className="mr-2">수강권명*</p>
          <input type="text" className="border p-2 w-[389px] rounded-lg" />
        </div>

        {/* 유효기간 입력 */}
        <div>
          <div className="flex items-start flex-col mb-4">
            <p className="mr-2">유효기간*</p>
            <div className="flex justify-between">
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat="yyyy-MM-dd"
                className="border p-2 rounded-lg mr-1 w-[187px]"
                placeholderText="시작 날짜"
              />
              <span>~</span>
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                dateFormat="yyyy-MM-dd"
                className="border p-2 rounded-lg ml-1 w-[187px]"
                placeholderText="종료 날짜"
              />
            </div>
          </div>
        </div>
        {/* 수강권 기간 */}
        <div className="flex items-start flex-col mb-4">
          <p className="mr-2">수강권기간*</p>
          <div className="flex justify-between">
            <input
              type="number"
              className="border p-2 rounded-lg mr-1 w-[389px]"
            />
          </div>
        </div>

       

        {/* 기본횟수 */}
        <div className="flex items-start flex-col mb-4">
          <p className="mr-2">기본횟수*</p>
          <div>
            <input type="number" className="border p-2 rounded-lg w-[389px]" />

          </div>
        </div>
       

        {/* 서비스횟수 */}
        <div className="flex items-start flex-col mb-4">
          <p className="mr-2">서비스횟수</p>
          <p className="text-xs mb-1">
            서비스로 부여되는 횟수를 제한하여 설정할 수 있습니다
          </p>
          <div className="flex justify-between w-[389px]">
            <button className="flex justify-center items-center border p-1 mr-2 rounded-full w-10 h-10 text-xl bg-Gray-100">
              -
            </button>
            <p className="border p-2 rounded-lg text-center w-72">회</p>
            <button className="flex justify-center items-center border p-1 ml-2 rounded-full w-10 h-10 text-xl bg-Gray-100">
              +
            </button>
          </div>
        </div>

        {/* 담당강사 */}

        <button className='bg-Gray-100 py-2 px-4 rounded-xl border border-Gray-300'>선택하기 +</button>

        {/* 저장버튼 */}
        <button className="bg-Pri-500 text-white px-4 py-2 rounded w-full mt-40">
          저장
        </button>
      </div>
    </>
  );
}
