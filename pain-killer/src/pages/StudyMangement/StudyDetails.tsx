import StudyDetailsHeader from '../../components/StudyDetailsHeader';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJwaWVoZWFsdGhjYXJlLmtyIiwiaWF0IjoxNjkwMTg1ODIyLCJzdWIiOiI0IiwiZXhwIjoxNjkwMTg2NzIyfQ.30uV03AYGPv8w4D1suhWhdVLRbM3lkefxZMWqNV1A70';

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
  // const access_Token = localStorage.get
  const [ticketData, setTicketData] = useState<Ticket | null>(null); // 수강권 데이터를 저장할 상태 변수
  const { ticketId } = useParams<{ ticketId: string }>(); // URL 파라미터에서 ticketId를 가져옴
  const [loading, setLoading] = useState<boolean>(true);
  const [isEditing, setIsEditing] = useState(false);

  const [editedTitle, setEditedTitle] = useState(ticketData?.title || ''); // 상세 정보 편집 모드에서 수정할 필드에 대한 상태 변수

  // 상세 정보 편집 모드로 변경하는 함수
  const handleEditTicket = () => {
    setIsEditing(true);
  };

  // 상세 정보 수정 폼 제출 시 호출되는 함수
  const handleSaveEdit = (e) => {
    e.preventDefault(); // 폼 제출을 막음
    // 서버로 수정된 데이터 전송하는 로직 추가 (axios.put 또는 axios.post 등)
    console.log('수정된 title:', editedTitle);
  
    // ticketData의 title을 수정된 값인 editedTitle로 업데이트
    setTicketData((prevTicketData) => ({
      ...prevTicketData,
      title: editedTitle,
    }));
  
    // 수정 후 편집 모드 종료
    setIsEditing(false);
  };

  // 서버로부터 ticket 데이터를 가져오는 함수
  const fetchTicketData = async () => {
    try {
      const response = await axios.get<Ticket>(
        `http://223.130.161.221/api/v1/tickets/${ticketId}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            'Content-Type': 'application/json',
          },
        },
      );
      setTicketData(response.data); // 가져온 데이터를 상태 변수에 저장
      setLoading(false);
    } catch (error) {
      console.error('수강권 데이터 가져오기 오류:', error);
      setLoading(false);
    }
  };

  const handleDeleteTicket = () => {
    if (!ticketData) {
      console.error('삭제할 수강권 정보가 없습니다.');
      return;
    }

    axios
      .delete(`http://223.130.161.221/api/v1/tickets/${ticketData.id}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('수강권이 성공적으로 삭제되었습니다.');
        // 삭제 후 추가적인 동작을 수행할 수 있도록 작성
      })
      .catch((error) => {
        console.error('수강권 삭제 오류:', error);
      });
  };

  useEffect(() => {
    fetchTicketData(); // 컴포넌트가 마운트되면 ticket 데이터를 가져옴
  }, [ticketId]);

  // 영어값을 한글로 변환하는 함수
  function convertTermUnitToKorean(termUnit: string) {
    switch (termUnit) {
      case 'MONTH':
        return '개월';
      case 'WEEK':
        return '주';
      case 'DAY':
        return '일';
      default:
        return termUnit;
    }
  }

  return (
    <>
      <StudyDetailsHeader
        onDeleteTicket={handleDeleteTicket}
        onEditTicket={handleEditTicket}
      />
      {/* ticketData가 로드되기 전에 렌더링 되는 상황을 처리 */}
      {ticketData ? (
        <>
          {isEditing ? (
            // 편집 모드일 때, 상세 정보 수정 뷰 표시
            <div className="text-left p-5">
              {/* 상세 정보 수정 폼 */}
              <h2 className="text-2xl font-extrabold">수강권 수정</h2>
              {/* 여기에 상세 정보 수정 폼을 추가하면 됩니다. */}
              <form onSubmit={handleSaveEdit}>
                {/* <div className="flex items-start flex-col mb-4">
                  <p className="mb-1">수업유형*</p>
                  <select
                    className="border p-2 w-[389px] rounded-lg"
                    value={lessonType}
                    onChange={(e) => setLessonType(e.target.value)}
                  >
                    <option value="">선택</option>
                    <option value="SINGLE">1:1 개인수업</option>
                    <option value="GROUP">그룹 수업</option>
                  </select>
                </div> */}

                <div className="flex items-start flex-col mb-4">
                  <p className="mr-2">수강권명*</p>
                  <input
                    type="text"
                    className="border p-2 w-[389px] rounded-lg"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                  />
                </div>

                <button type="submit">저장</button>
                <button onClick={() => setIsEditing(false)}>취소</button>
              </form>
            </div>
          ) : (
            // 편집 모드가 아닐 때, 기본 상세 정보 뷰 표시
            <>
              {/* ticketData를 이용하여 수강권 상세 정보를 화면에 표시 */}
              <div className=" mt-6">
                <div className="flex  items-end ">
                  <p className="text-left truncate  font-semibold text-2xl">
                    {ticketData.title}
                  </p>
                  <p className="text-right  bg-Pri-50 text-xs px-2 py-1 rounded text-Pri-500 ml-4 ">
                    {ticketData.lessonType === 'GROUP'
                      ? '그룹수업'
                      : '개인수업 - 1:1'}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-end mt-10 mb-2 ">
                <p className="text-lg font-semibold text-Gray-800">
                  수강권 내용
                </p>
                <button className="text-Pri-500">수강권 부여내역</button>
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
                        {ticketData.defaultTerm}{' '}
                        {convertTermUnitToKorean(ticketData.defaultTermUnit)}
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
          )}
        </>
      ) : (
        // ticketData가 로드되기 전에 로딩 중인 상태를 표시
        <p>Loading...</p>
      )}
    </>
  );
}
