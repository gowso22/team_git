import Tiket from '../../img/Tiket_ac.svg';
import axios from 'axios';
import { useState,useEffect } from 'react';

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJwaWVoZWFsdGhjYXJlLmtyIiwiaWF0IjoxNjkwMDQ4NDgxLCJzdWIiOiI0IiwiZXhwIjoxNjkwMDQ5MzgxfQ.llBh4rl2TCMT6vDQE-VTKL7MgqmmUfeCiDzKDn8ZMbI'
export default function StudyList() {

  const [tickets, setTickets] = useState([]);

  // API에 POST 요청으로 수강권 생성
  axios.get('http://223.130.161.221/api/v1/tickets', {
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
      "Content-Type": "application/json", // JSON 형식으로 설정
    }
  })
    .then((response) => {
      // 수강권 생성 성공 시 처리할 코드
      console.log('수강권 출력 완료:', response.data);
    })
    .catch((error) => {
      // 오류 처리
      console.error('수강권 출력 오류:', error);
    });


  return (
    <>

      <div>
        <div className="flex justify-between items-center">
          <p className="text-Gray-800 font-extrabold text-lg mt-6">센터 수강권</p>
          <button className="font-blod text-base mt-10 ">생성하기</button>
        </div>

        <div className="flex justify-start mt-6 mb-4">
          <p className="py-2 px-3 font-semibold text-Pri-300 border-b-2 border-Pri-300">판매중 (3)</p>
          <p className="py-2 px-3 font-semibold border-b-2 border-Gray-300 text-Gray-300 ">판매종료 (2)</p>
        </div>

        {/* 수강권 목록 렌더링 */}
        {tickets.map((ticket) => (
          <div key={ticket.id} className="border border-Gray-200 rounded-xl p-6 mb-3">
            <div>
              <div className="flex justify-between items-end">
                <p className="text-left truncate font-semibold">{ticket.title}</p>
                <p className="text-right bg-Pri-50 text-xs px-2 py-1 rounded text-Pri-500">
                  {ticket.lessonType}
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
                  <span className="text-Gray-400 mr-6">수업시간</span> {ticket.duration}분
                </p>
                <p className="text-left">
                  <span className="text-Gray-400 mr-2">수강권 기간</span> {ticket.defaultTerm}개월
                </p>
              </div>
              <img src={Tiket} alt="티켓 아이콘" />
            </div>
          </div>
        ))}
      </div>
    </>
  );



};

