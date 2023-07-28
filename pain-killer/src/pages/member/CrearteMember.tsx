import { ChangeEvent, FormEvent, useState } from "react";


const CreateMember = () => {

    
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [job, setJob] = useState('')
    const [path, setPath] = useState('')

    
    const getGender = (e : any) => {
        setGender(e.target.value)
    }
    const handleJobSelect = (e : ChangeEvent<HTMLSelectElement>) => {
        setJob(e.target.value);
    }
    const handlePathSelect = (e : ChangeEvent<HTMLSelectElement>) => {
        setPath(e.target.value);
    }
    
    const onRegMemberHandler = ( e : FormEvent) => {
        e.preventDefault();

        console.log(gender)
        console.log(job)
        console.log(path)
    }

    return(
        <div className="flex flex-col">
            <h1>회원 등록</h1>
            <form
                onSubmit={onRegMemberHandler} 
                className="flex flex-col">
                <span>이름</span>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                <span>성별</span>
                <label>
                    <input
                    type="radio"
                    name = "gender"
                    value="MALE"
                    onClick={getGender}
                    />
                 남
                </label>
                <label>
                    <input
                        type="radio"
                        name = "gender"
                        value="FEMALE"
                        onClick={getGender}
                    />
                여
                </label>
                <span>생년월일</span>
                <input
                    type = "text"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}/>
                <span>휴대폰 번호</span>
                <input
                    type="text"
                    value={phoneNum}
                    onChange={(e) => setPhoneNum(e.target.value)}/>

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
    )


}

export default CreateMember;