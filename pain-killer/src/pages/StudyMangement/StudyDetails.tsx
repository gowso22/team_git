import StudyDetailsHeader from '../../components/StudyDetailsHeader';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJwaWVoZWFsdGhjYXJlLmtyIiwiaWF0IjoxNjkwMTI0Njg0LCJzdWIiOiI0IiwiZXhwIjoxNjkwMTI1NTg0fQ.O7wCnF041JIfrD2A7iAjBpHlrTSyRMupk8GGAp24HTg';

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
  bookableLessons: {
    id: number;
    type: string;
    title: string;
    duration: number;
    maxGroupMember: number;
  }[];
}

export default function StudyDetails() {
  const [ticketData, setTicketData] = useState<Ticket | null>(null); // 수강권 데이터를 저장할 상태 변수
  const { ticketId } = useParams<{ ticketId: string }>(); // URL 파라미터에서 ticketId를 가져옴
  const [loading, setLoading] = useState<boolean>(true);

  // 서버로부터 ticket 데이터를 가져오는 함수
  const fetchTicketData = async () => {
    try {
      const response = await axios.get<Ticket>(`http://223.130.161.221/api/v1/tickets/${ticketId}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
        },
      });
      setTicketData(response.data); // 가져온 데이터를 상태 변수에 저장
      setLoading(false);
    } catch (error) {
      console.error('수강권 데이터 가져오기 오류:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTicketData(); // 컴포넌트가 마운트되면 ticket 데이터를 가져옴
  }, [ticketId]);

  // 영어값을 한글로 변환하는 함수
  function convertTermUnitToKorean(termUnit: string) {
    switch (termUnit) {
      case "MONTH":
        return "개월";
      case "WEEK":
        return "주";
      case "DAY":
        return "일";
      default:
        return termUnit;
    }
  }

  return (
    <>
      <StudyDetailsHeader />
      {/* ticketData가 로드되기 전에 렌더링 되는 상황을 처리 */}
      {ticketData ? (
        <>
          {/* ticketData를 이용하여 수강권 상세 정보를 화면에 표시 */}
          <div className=' mt-6'>
            <div className="flex  items-end ">
              <p className="text-left truncate  font-semibold text-2xl">
                {ticketData.title}
              </p>
              <p className="text-right  bg-Pri-50 text-xs px-2 py-1 rounded text-Pri-500 ml-4 ">
                {ticketData.lessonType === 'GROUP' ? '그룹수업' : '개인수업 - 1:1'}
              </p>
            </div>
          </div>
          <div className='flex justify-between items-end mt-10 mb-2 '>
            <p className='text-lg font-semibold text-Gray-800'>수강권 내용</p>
            <button className='text-Pri-500'>수강권 부여내역</button>
          </div>
          <div className="border border-Gray-200 rounded-xl p-6 mb-3">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-left mb-3 text-Gray-400">
                  시간
                  <span className="text-Gray-900 font-semibold ml-14">
                    {ticketData.bookableLessons[0].duration}분
                  </span>
                </p>
                <p className="text-left mb-3 text-Gray-400">
                  기본 횟수
                  <span className="text-Gray-900 font-semibold ml-6">
                    {ticketData.defaultCount}회
                  </span>
                </p>
                <p className="text-left mb-3 text-Gray-400">
                  수강권 기간
                  <span className="text-Gray-900 font-semibold ml-3">
                    {ticketData.defaultTerm} {convertTermUnitToKorean(ticketData.defaultTermUnit)}
                  </span>
                </p>
                <p className="text-left mb-3 text-Gray-400">
                  수강권 상태
                  <span className="text-Pri-300 font-semibold ml-3">
                    {ticketData.isActive ? '판매중' : '판매종료'}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        // ticketData가 로드되기 전에 로딩 중인 상태를 표시
        <p>Loading...</p>
      )}
    </>
  );
}
