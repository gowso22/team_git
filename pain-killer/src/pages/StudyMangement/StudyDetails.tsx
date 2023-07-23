import StudyDetailsHeader from '../../components/StudyDetailsHeader';

export default function StudyDetails() {
  return (
    <>
      <StudyDetailsHeader />
      <div className=' mt-6'>
        <div className="flex  items-end ">
          <p className="text-left truncate  font-semibold text-2xl">
            [이벤트 특가] 설맞이 30% 할인
          </p>
          <p className="text-right  bg-Pri-50 text-xs px-2 py-1 rounded text-Pri-500 ml-4 ">
            개인수업-1:1
          </p>
        </div>
      </div>
      <div className='flex justify-between items-end mt-10 mb-2 '>
        <p className='text-lg font-semibold text-Gray-800'>수강권 내용</p>
        <button className='text-Pri-500'>수강권 부여내역</button>
      </div>
      <div
        className="border border-Gray-200 rounded-xl p-6 mb-3
        "
      >
        <div className="flex justify-between items-end">
          <div>
            
            <p className="text-left mb-3 text-Gray-400">
              시간
              <span className="text-Gray-900 font-semibold ml-14">8개월</span> 
            </p>
            <p className="text-left mb-3 text-Gray-400">
              기본 횟수
              <span className="text-Gray-900 font-semibold ml-6">10회</span> 
            </p>
            <p className="text-left mb-3 text-Gray-400">
              수강권 기간
              <span className="text-Gray-900 font-semibold ml-3">1년</span> 
            </p>
            <p className="text-left mb-3 text-Gray-400">
              수강권 상태
              <span className="text-Pri-300 font-semibold ml-3">판매중</span> 
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
