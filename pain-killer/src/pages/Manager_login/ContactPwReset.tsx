import ManagerFindHeader from '../../components/ManagerFindAccount';

export default function PwReset(){
  return(
    <>
    <ManagerFindHeader/>
    <div className="flex  justify-center ">
      <div className=" p-8 ">
        <div className="text-center mb-10">
          {/* 비밀번호 재설정 메시지 */}
          <p className="text-center text-xl font-extrabold text-Gray-800">비밀번호 재설정</p>
          <p className="text-center text-Gray-400 text-sm mt-1">비밀번호 재설정 후 새로운 비밀번호로 로그인 할 수 있습니다.</p>
        </div>
        <div className="space-y-2 text-left mb-2">
          {/* 왼쪽 정렬된 새로운 비밀번호 */}
          <label className="block font-medium">새로운 비밀번호</label>
          <input
            type="password"
            className="block w-full rounded border px-4 py-3 border-Gray-300 "
          />
          <p className='text-xs text-Gray-400'>8~15자의 영문 소문자, 숫자, 기호(!,@,#,$,%,^,&,*) 조합</p>
        </div>
        <div className="space-y-2 text-left mb-52">
          {/* 왼쪽 정렬된 비밀번호 확인 */}
          <label className="block font-medium">비밀번호 확인</label>
          <input
            type="password"
            className="block w-full rounded border px-4 py-3 border-Gray-300"
            placeholder="비밀번호를 다시 입력하세요."
          />
        </div>
        {/* 취소와 확인 버튼 */}
        <div className="flex justify-between mt-52">
          <button className="mr-2 bg-gray-100 text-Gray-900 py-2 px-4 rounded w-full">
            취소
          </button>
          <button className="hover:bg-Pri-500 hover:text-white bg-gray-100  text-Gray-400 py-3 px-4 rounded  w-full">
            확인
          </button>
        </div>
      </div>
      
    </div>

    </>
  )
}