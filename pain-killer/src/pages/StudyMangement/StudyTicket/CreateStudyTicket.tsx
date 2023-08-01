import CreateStudyTicketHeader from './CreateStudyTicketHeader';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState, useEffect } from 'react';
import instance from '../../../api/axios_interceptors';
import { useParams,Navigate } from 'react-router-dom';

interface TicketParams {
  ticketId: string;
}
interface Ticket {
  id: number;
  title: string;
  lessonType: string;
  granted: number;
  defaultCount: number;
  duration: number;
  defaultTerm: number;
  defaultTermUnit: string;
  isActive: boolean;
}

export default function CreateStudyTicket() {
  // 수강권 ID를 URL 파라미터에서 추출합니다.
  const { ticketId } = useParams<TicketParams>();
  // 수강권 데이터와 입력한 정보를 상태로 관리합니다.
  const [ticketData, setTicketData] = useState<Ticket | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [ServiceCount, setServiceCount] = useState(0);
  const [privateTutorId, setPrivateTutorId] = useState(0);
  const [memberIds, setMemberIds] = useState<number[]>([]);
  const handleMemberIdsChange = (ids: number[]) => {
    setMemberIds(ids);
  };
  
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSelectPrivateCharge = () => {
    // 담당강사 선택하기 버튼을 누르면 SearchPrivateCharge 페이지로 이동
    // ticketId를 URL 파라미터로 전달하여 다시 CreateStudyTicket 페이지로 돌아올 때 사용
    return <Navigate to={`/search-private-charge?ticketId=${ticketId}`} />;
  };

  useEffect(() => {
    // 선택한 수강권의 정보를 서버에서 가져옵니다.
    const fetchTicketData = async () => {
      try {
        const response = await instance.get(`/tickets/${ticketId}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        setTicketData(response.data);
        console.log(response.data); // 최신 ticketData를 콘솔에 출력
      } catch (error) {
        console.error('수강권 정보 오류:', error);
      }
    };

    fetchTicketData();
  }, [ticketId]);

  const handleSave = async () => {
    const data = {
      memberIds: [],
      ServiceCount,
      privateTutorId,
      startAt: startDate?.toISOString(),
      endAt: endDate?.toISOString(),
    };

    console.log(data)

    try {
      // POST API 호출
      const response = await instance.post(`/tickets/${ticketId}/issue`, data);
      console.log('수강권 생성 완료:', response.data);
      // 성공 시 처리할 코드 추가
    } catch (error) {
      // 오류 처리
      console.error('수강권 생성 오류:', error);
    }
  };

  if (!ticketData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <CreateStudyTicketHeader />

      <div className="text-left p-5">
        {/* 수강권 생성 */}
        <div className="flex flex-col justify-start mb-2">
          <h2 className="text-2xl font-extrabold mb-2">
            {ticketData.bookableLessons[0].title}
          </h2>

          <p className="text-right bg-Pri-50 text-xs px-2 py-1 rounded text-Pri-500 w-[83px] ">
            {ticketData.bookableLessons[0].lessonType === 'GROUP'
              ? '그룹 수업'
              : '개인수업 - 1:1'}
          </p>
        </div>

        {/* 수강권명 입력 */}
        <div className="flex items-start flex-col mb-4">
          <p className="mr-2">수강권명*</p>
          <input
            type="text"
            className="border p-2 w-[389px] rounded-lg text-Gray-400"
            value={ticketData.bookableLessons[0].title}
            disabled
          />
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
              className="border p-2 rounded-lg mr-1 w-[389px] text-Gray-400"
              value={ticketData.defaultTerm}
              disabled
            />
          </div>
        </div>

        {/* 기본횟수 */}
        <div className="flex items-start flex-col mb-4">
          <p className="mr-2">기본횟수*</p>
          <div>
            <input
              type="number"
              className="border p-2 rounded-lg w-[389px] text-Gray-400"
              value={ticketData.defaultCount}
              disabled
            />
          </div>
        </div>

        {/* 서비스횟수 */}
        <div className="flex items-start flex-col mb-4">
          <p className="mr-2">서비스횟수</p>
          <p className="text-xs mb-1">
            서비스로 부여되는 횟수를 제한하여 설정할 수 있습니다
          </p>
          <div className="flex justify-between w-[389px]">
            <button
              className="flex justify-center items-center border p-1 mr-2 rounded-full w-10 h-10 text-xl bg-Gray-100"
              disabled
            >
              -
            </button>
            <input
              type="number"
              className="border p-2 rounded-lg text-center w-72 text-Gray-400"
              value={ServiceCount}
              onChange={(e) => setServiceCount(parseInt(e.target.value))}
            />
            <button
              className="flex justify-center items-center border p-1 ml-2 rounded-full w-10 h-10 text-xl bg-Gray-100"
              disabled
            >
              +
            </button>
          </div>
        </div>

        {/* 담당강사 */}
        <div>
          <p>담당강사</p>
        <button className="bg-Gray-100 py-2 px-4 rounded-xl border border-Gray-300" onClick={handleSelectPrivateCharge}>
          선택하기 +
        </button>
        </div>

        {/* 저장버튼 */}
        <button
          className="bg-Pri-500 text-white px-4 py-2 rounded w-full mt-40"
          onClick={handleSave}
        >
          저장
        </button>
      </div>
    </>
  );
}
