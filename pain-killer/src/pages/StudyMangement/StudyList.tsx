import Tiket from '../../img/Tiket_ac.svg';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import instance from '../../api/axios_interceptors';


 const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJwaWVoZWFsdGhjYXJlLmtyIiwiaWF0IjoxNjkwMzYzMzU2LCJzdWIiOiI0IiwiZXhwIjoxNjkwMzY0MjU2fQ.ikEG_GpWNusJ7NES1XWU-daKJMArvNYqmTFkIqWHZ0w'
interface Ticket {
  id: number;
  title: string;
  lessonType: string;
  granted: number;
  defaultCount: number;
  duration: number;
  defaultTerm: number;
  defaultTermUnit: string;
}
export default function StudyList() {
  // const access_Token = localStorage.getItem('access_token')
  const [ticketData, setTicketData] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  // API에 POST 요청으로 수강권 생성
  useEffect(() => {
    // API에 GET 요청으로 수강권 가져오기
    axios
      .get('http://223.130.161.221/api/v1/tickets', {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        // 수강권 생성 성공 시 처리할 코드
        console.log('수강권 출력 완료:', response.data);
        setTicketData(response.data.tickets); // API 응답 데이터를 ticketData 상태에 설정
        setCount(response.data.tickets.filter((ticket) => ticket.lessonType === 'SINGLE').length); // 판매중인 수강권 갯수 설정
        setLoading(false);
      })
      .catch((error) => {
        // 오류 처리
        console.error('수강권 출력 오류:', error);
        setLoading(false);
      });
  }, []);

  // 로딩 상태를 확인하고 로딩 중이면 "Loading..."을 렌더링
  if (loading) {
    return <div>Loading...</div>;
  }

  // ticketData 상태가 배열인 경우에만 수강권 정보를 렌더링
  if (!Array.isArray(ticketData) || ticketData.length === 0) {
    return <div>Error: 수강권 데이터가 유효하지 않거나 데이터가 없습니다.</div>;
  }

  // 영어값을 한글로 변환하는 함수
  function convertTermUnitToKorean(termUnit) {
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
  // ticketId 값을 매개변수로 
  const fetchTicketsById = async (ticketId: number) => {
    try {
      const response = await instance.get(`/tickets/${ticketId}/issued-tickets`, {
        
      });
      console.log(response)
      return response.data;
      
    } catch (error) {
      console.error('수강권 출력 오류:', error);
      return null;
    }
  };



  return (
    <>

      <div>
        <div className="flex justify-between items-center">
          <p className="text-Gray-800 font-extrabold text-lg mt-6">센터 수강권</p>
          <Link to="/create">

          <button className="font-blod text-base mt-10 ">생성하기</button>
          </Link>
        </div>

        <div className="flex justify-start mt-6 mb-4">
          <p className="py-2 px-3 font-semibold text-Pri-300 border-b-2 border-Pri-300">판매중 ({count})</p>
          <p className="py-2 px-3 font-semibold border-b-2 border-Gray-300 text-Gray-300 ">판매종료 (2)</p>
        </div>

        {/* 수강권 목록 렌더링 */}
        {ticketData.map((ticket) => (
             <Link to={`/studydetails/${ticket.id}`} key={ticket.id}>
          <div className="border border-Gray-200 rounded-xl p-6 mb-3" key={ticket.id}>
            <div>
              <div className="flex justify-between items-end">
                <p className="text-left truncate font-semibold">{ticket.title}</p>
                <p className="text-right bg-Pri-50 text-xs px-2 py-1 rounded text-Pri-500">
                {ticket.lessonType === 'GROUP' ? '그룹 수업' : '개인수업 - 1:1'}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-left mt-2 mb-9">
                  <span className="text-Gray-400 mr-2">부여</span> {ticket.granted}건
                </p>
                <p className="text-left">
                  <span className="text-Gray-400 mr-2">수강권 횟수</span> {ticket.defaultCount}회
                </p>
                <p className="text-left">
                  <span className="text-Gray-400 mr-6">수업시간</span> {ticket.bookableLessons[0].duration}분
                </p>
                <p className="text-left">
                  <span className="text-Gray-400 mr-2">수강권 기간</span> {ticket.defaultTerm}{convertTermUnitToKorean(ticket.defaultTermUnit)}
                </p>
              </div>
              <img src={Tiket} alt="티켓 아이콘" />
            </div>
          </div>
            </Link>
        ))}
      </div>
    </>
  );



};

