import { ChangeEvent, FormEvent, useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const CreateMember = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [job, setJob] = useState('');
  const [path, setPath] = useState('');

  const getGender = (e: any) => {
    setGender(e.target.value);
  };
  const handleJobSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setJob(e.target.value);
  };
  const handlePathSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setPath(e.target.value);
  };

  const onRegMemberHandler = (e: FormEvent) => {
    e.preventDefault();

    console.log(gender);
    console.log(job);
    console.log(path);
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-extrabold">회원 등록</h1>
      <p className="text-sm text-[#1D1D1D]">회원 정보를 등록하세요</p>
      <form
        onSubmit={onRegMemberHandler}
        className="mt-10 flex flex-col text-left"
      >
        <div className="mb-2">
          <p className="text-sm text-[#1D1D1D]">
            이름
            <span className="text-[#2D62EA]">*</span>
          </p>
          <input
            className="mt-1 w-full px-4 py-2 rounded border-solid border-[1.5px] border-[#CFCFCF)]"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="스나이퍼"
          />
        </div>
        <p className="text-sm text-[#1D1D1D]">
          성별
          <span className="text-[#2D62EA]">*</span>
        </p>
        <ul className="flex">
          <li className="mr-1">
            <input
              type="radio"
              id="FEMALE"
              name="gender"
              value="FEMALE"
              className="hidden peer"
              onClick={getGender}
            />
            <label
              htmlFor="FEMALE"
              className="inline-flex items-center justify-between px-4 py-2 text-[#1D1D1D] bg-white border-[1.5px] border-[#CFCFCF] rounded cursor-pointer peer-checked:border-[#4679FC] peer-checked:text-white peer-checked:bg-[#6691FF]"
            >
              <div className="block">
                <div className="font-semibold">여</div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="MALE"
              name="gender"
              value="MALE"
              className="hidden peer"
              onClick={getGender}
              required
            />
            <label
              htmlFor="MALE"
              className="inline-flex items-center justify-between px-4 py-2 text-[#1D1D1D] bg-white border-[1.5px] border-[#CFCFCF] rounded cursor-pointer peer-checked:border-[#4679FC] peer-checked:text-white peer-checked:bg-[#6691FF]"
            >
              <div className="block">
                <div className="font-semibold">남</div>
              </div>
            </label>
          </li>
        </ul>

        <p className="text-sm text-[#1D1D1D]">
          생년월일<span className="text-[#2D62EA]">*</span>
        </p>
        <input
          type="text"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
        <p className="text-sm text-[#1D1D1D]">
          휴대폰 번호<span className="text-[#2D62EA]">*</span>
        </p>
        <input
          type="text"
          value={phoneNum}
          onChange={(e) => setPhoneNum(e.target.value)}
        />

        <span>직업</span>
        <select onChange={handleJobSelect}>
          <option value="사무직">사무직</option>
          <option value="현장직">현장직</option>
          <option value="가사노동자">가사노동자</option>
          <option value="학생">학생</option>
          <option value="무직">무직</option>
          <option value="기타">기타 - 직접입력</option>
        </select>

        <span>방문 경로</span>
        <select onChange={handlePathSelect}>
          <option value="주변 추천">주변 추천</option>
          <option value="오프라인 광고">오프라인 광고(배너, 현수막)</option>
          <option value="SNS 광고">SNS 광고(페이스북, 인스타)</option>
          <option value="네이버 지도">네이버 지도</option>
          <option value="기타">기타 - 직접입력</option>
        </select>
        <button>완료</button>
      </form>
    </div>
  );
};

export default CreateMember;
