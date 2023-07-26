import CreateStudyHeader from '../../components/CreateStudyHeader';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ConfirmationModal from './ConfirmationModal'


const TOKEN ='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJwaWVoZWFsdGhjYXJlLmtyIiwiaWF0IjoxNjkwMzMyMjEyLCJzdWIiOiI0IiwiZXhwIjoxNjkwMzMzMTEyfQ.WNkczv0qJsv5kXIYH8lNM1HrXQF1GutkIoz0eTeMjPU'
// 수강권 생성 요청 데이터의 타입
interface NewTicketData {
  lessonType: string;
  title: string;
  duration: number;
  defaultCount: number;
  serviceCount: number;
  defaultTerm: number;
  defaultTermUnit: string;
  dailyCountLimit: number;
  maxServiceCount: number;
}

export default function CreateStudy() {
  const [isExhausted1, setIsExhausted1] = useState(false);
  const [isExhausted2, setIsExhausted2] = useState(false);
  const [lessonType, setLessonType] = useState('');
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState(0);
  const [defaultCount, setDefaultCount] = useState(0);
  const [maxServiceCount, setMaxServiceCount] = useState(0);
  const [defaultTerm, setDefaultTerm] = useState(0);
  const [defaultTermUnit, setDefaultTermUnit] = useState('DAY');
  const [dailyCountLimit, setDailyCountLimit] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // 모달
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleToggle = () => {
    setIsExhausted(!isExhausted);
  };

  const handleToggle2 = () => {
    setIsExhausted2(!isExhausted2);
  };

  const handleCreateTicket = () => {
    // 수강권 생성 요청 데이터
    const newTicketData: NewTicketData = {
      lessonType,
      title,
      duration,
      defaultCount,
      // serviceCount,
      defaultTerm,
      defaultTermUnit,
      dailyCountLimit,
      maxServiceCount
    };
    console.log('lessontype:',lessonType)

    // API에 POST 요청으로 수강권 생성
    axios.post('http://223.130.161.221/api/v1/tickets', newTicketData, {
      headers: {
        "Authorization": `Bearer ${TOKEN}`,
        "Content-Type": "application/json", // JSON 형식으로 설정
      }
    })
      .then((response) => {
        // 수강권 생성 성공 시 처리할 코드
        console.log('수강권 생성 완료:', response.data);
        setIsModalOpen(true);
      })
      .catch((error) => {
        // 오류 처리
        console.error('수강권 생성 오류:', error);
      });
    console.log(newTicketData)
  };

  // 여기는 서비스 수강 카운터 입니다
  const handleDecreaseServiceCount = () => {
    setMaxServiceCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  const handleIncreaseServiceCount = () => {
    // 최대 횟수를 넘지 않게 해놨음
    setMaxServiceCount((prevCount) => prevCount + 1);
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
          <select
            className="border p-2 w-[389px] rounded-lg"
            value={lessonType}
            onChange={(e) => setLessonType(e.target.value)} // 변경된 부분
          >
            <option value="">선택</option>
            <option value="SINGLE">1:1 개인수업</option>
            <option value="GROUP">그룹 수업</option>
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
          <div className="flex justify-between w-[389px]">
            <button
              className="flex justify-center items-center border p-1 mr-2 rounded-full w-10 h-10 text-xl bg-Gray-100"
              onClick={handleDecreaseServiceCount}
            >
              -
            </button>
            <p className="border p-2 rounded-lg text-center w-72">{maxServiceCount}회</p>
            <button
              className="flex justify-center items-center border p-1 ml-2 rounded-full w-10 h-10 text-xl bg-Gray-100"
              onClick={handleIncreaseServiceCount}
            >
              +
            </button>
          </div>
        </div>

        {/* 저장버튼 */}
        <button className="bg-Pri-500 text-white px-4 py-2 rounded w-full mt-40">
          저장
        </button>
         {/* 모달 */}
        {/* 모달 */}
        {isModalOpen && <ConfirmationModal onClose={handleModalClose} />}
      </div>
    </>
  );
}
