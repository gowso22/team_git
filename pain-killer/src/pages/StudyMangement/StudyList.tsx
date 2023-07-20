import NavBar from '../../components/NavBar';
import Tiket from '../../img/Tiket_ac.svg';

export default function StudyList() {
  const Study = () => {
    return (
      <>
        <div className="border border-Gray-200 rounded-xl p-6 mb-3
        ">
          <div>
            <div className="flex justify-between items-end">
              <p className="text-left truncate  font-semibold ">
                수강권 최대 15자까지 필요
              </p>
              <p className="text-right  bg-Pri-50 text-xs px-2 py-1 rounded text-Pri-500">
                개인수업-1:1
              </p>
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-left mt-2 mb-9">
                <span className="text-Gray-400 mr-2">부여</span> 70건
              </p>
              <p className="text-left">
                <span className="text-Gray-400 mr-2">수강권 횟수</span> 20회
              </p>
              <p className="text-left">
                <span className="text-Gray-400 mr-6">수업시간</span> 60분
              </p>
              <p className="text-left">
                <span className="text-Gray-400 mr-2">수강권 기간</span> 8개월
              </p>
            </div>
            <img src={Tiket} alt="티켓 아이콘" />
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <NavBar />

      <div>
        <div className="flex justify-between items-center">
          <p className="text-Gray-800 font-extrabold text-lg mt-6">
            센터 수강권
          </p>
          <button className="font-blod text-base mt-10 ">생성하기</button>
        </div>

        <div className="flex justify-start mt-6 mb-4">
          <p className=" py-2 px-3 font-semibold text-Pri-300  border-b-2 border-Pri-300">
            판매중 (3)
          </p>
          <p className=" py-2 px-3 font-semibold border-b-2 border-Gray-300 text-Gray-300 ">
            판매종료 (2)
          </p>
        </div>
        <Study/>
        <Study/>
        <Study/>
      </div>
    </>
  );
}