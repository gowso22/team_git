import GrantHeader from '../../components/GrantHeader';

export default function GrantList() {
  return (
    <>
      <GrantHeader />
      <div className='flex justify-start mt-6 mb-9 pl-12'>
        <p className=' font-bold text-lg'>총 10건</p>
      </div>
      <div>
        <div className="grid grid-cols-6 gap-3 mb-3 border-b botder-Gray-200">
          <p className="max-w-32 font-bold">최대 5글자</p>
          <p className="max-w-32">010 - 1234 - 5678</p>
          <p className="max-w-32">김파이</p>
          <p className="max-w-32">잔여 300회</p>
          <p>유효기간: 9999/09/29 - 9999/09/29</p>
        </div>
        <div className="grid grid-cols-6 gap-3 border-b botder-Gray-200">
          <p className="max-w-32 font-bold">김회원</p>
          <p className="max-w-32">010 - 1234 - 5678</p>
          <p className="max-w-32">김파이</p>
          <p className="max-w-32">잔여 3회</p>
          <p>유효기간: 2023/03/23 - 9999/01/23</p>
        </div>
        <div className="grid grid-cols-6 gap-3 border-b botder-Gray-200">
          <p className="max-w-32 font-bold">김회원</p>
          <p className="max-w-32">010 - 1234 - 5678</p>
          <p className="max-w-32">김파이</p>
          <p className="max-w-32">잔여 3회</p>
          <p>유효기간: 2023/03/23 - 9999/01/23</p>
        </div>
        <div className="grid grid-cols-6 gap-3 border-b botder-Gray-200">
          <p className="max-w-32 font-bold">김회원</p>
          <p className="max-w-32">010 - 1234 - 5678</p>
          <p className="max-w-32">김파이</p>
          <p className="max-w-32">잔여 3회</p>
          <p>유효기간: 2023/03/23 - 9999/01/23</p>
        </div>
        <div className="grid grid-cols-6 gap-3 border-b botder-Gray-200">
          <p className="max-w-32 font-bold">김회원</p>
          <p className="max-w-32">010 - 1234 - 5678</p>
          <p className="max-w-32">김파이</p>
          <p className="max-w-32">잔여 3회</p>
          <p>유효기간: 2023/03/23 - 9999/01/23</p>
        </div>
      </div>
    </>
  );
}
