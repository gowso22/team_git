import MemberDatailsHeader from './MemberDetailsHeader';
import Document from '../../../img/Document_24px.svg';
import Message from '../../../img/Message_24px.svg';
import Profile from '../../../img/Profile_32px.svg';
import Edit from '../../../img/Edit_24px.svg';

const MemberInfo = () => {
  return (
    <div className="flex flex-row justify-between items-center px-4 py-2">
      <div className="flex items-center">
        <h2 className="text-lg font-semibold mr-4">회원 정보</h2>
        <button className="flex">
          수강권/계약서
          <img src={Document} />
        </button>
      </div>
      <button className="flex">
        알림메세지보내기
        <img src={Message} />
      </button>
    </div>
  );
};

const Memberinfo2 = () => {
  return (
    <div className="bg-white p-4 border-Gray-200 border rounded-xl">
      <div className="flex flex-wrap">
        <img src={Profile} className="mr-4 w-12" />
        <div className="flex justify-start flex-col items-start">
          <p className="mr-2">
            <span className="text-Gray-400">이름</span> 박길동
          </p>
          <p>
            <span className="text-Gray-400">생년월일</span> 1991.02.14
          </p>
          <p className="mr-2">
            <span className="text-Gray-400">등록일</span> 2022.11.11
          </p>
          <p>
            <span className="text-Gray-400">성별</span> 남
          </p>

          <p>
            <span className="text-Gray-400">전화번호</span> 010-5522-3344
          </p>
          <p>
            <span className="text-Gray-400">직업형태</span> 사무직
          </p>

          <img src={Edit} />
        </div>
      </div>
    </div>
  );
};

const Records = () => {
  return (
    <div className="flex justify-between mt-4">
      <div>
        <div className="flex justify-between">
          <div className="border-b-2 w-[132px] ">
            <p>기록지</p>
          </div>
          <div className="border-b-2 w-[132px] border-Pri-300">
            <p>알림메세지</p>
          </div>
          <div className="border-b-2  w-[132px]">
            <p>앨범</p>
          </div>
        </div>
        <div className="bg-Gray-100 px-3 py-3">
          <div>
            <div className="text-left">2023-12-23</div>
            <p className='flex justify-end'>날짜조회</p>
            <ul className="flex flex-col items-start bg-white rounded-xl px-2">
              <li>만족도 및 후기: 오늘 운동도 너무 좋았습니다.</li>
              <li>★★★★★</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default function MemberDetails() {
  return (
    <div className="container mx-auto">
      <MemberDatailsHeader />
      <MemberInfo />
      <div className="mt-4">
        <Memberinfo2 />
        <Records />
      </div>
    </div>
  );
}
