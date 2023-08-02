import React, { useState, useEffect} from 'react';
import { Link , useNavigate, useParams } from 'react-router-dom';
import instance from "../../api/axios_interceptors"
import BackImage from '../../img/Back_24px.svg'
//박재형 작업한 부분

interface Modificate_mem {
  
    name: string,
    birthDate: string,
    phone: string,
    sex: string,
    job: string,
    acquisitionFunnel: string
  
}


const ModMemInfo = () => {
  const {userId} = useParams();
  const access_token = localStorage.getItem('access_token');

  const [memContent, setMemContent] = useState<Modificate_mem>();
  const [memName, setMemName] = useState("");
  const [memBirthdate, setMemBirthdate] = useState("");
  const [memPhone, setMemPhone] = useState("");
  const [memSex, setMemSex] = useState("");
  const [memJob, setMemJob] = useState("");

  const navigate = useNavigate();

  const onPrevious = () => {
    navigate(-1);
  }

  const getMemDetail = async () => {  //get부분으로 가져오는 모습
    try {
      const show = await instance.get(`/members/${userId}`)
      setMemContent(show.data);
      setMemName(show.data.name);
      setMemBirthdate(show.data.birthDate);
      setMemPhone(show.data.phone);
      setMemSex(show.data.sex);
      setMemJob(show.data.job);
    } catch(error) {
      alert(error);
    }
  }

  useEffect(() => {
    getMemDetail();
  }, [])

  const onMemNameChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setMemName(event.target.value);
  }

  const onMemBirthDateChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setMemBirthdate(event.target.value);
  }

  const onMemPhoneChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setMemPhone(event.target.value)
  }

  const onMemSexChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setMemSex(event.target.value);
  }

  const onMemJobChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setMemJob(event.target.value);
  }


  const onMemInfoHandler = async(e : React.FormEvent) => {
    e.preventDefault();

    try{    //put 부분(수정하는 부분)
      const response = await instance.put(`/members/${userId}`, {
        name : memName,
        BirthDate : memBirthdate,
        phone : memPhone,
        Sex : memSex,
        Job : memJob
      });

      console.log(response);
    } catch (error) {
      alert(error);
    }
  }
  return(
    <div className="flex flex-col">
      <header className="bg-white border-b border-t-neutral-100">
        <nav className="flex p-5">
            <div className="flex justify-between items-center cursor-pointer" onClick={onPrevious}>
              <img src={BackImage} alt="Back" />
              <p className="text-lg ml-2">회원상세조회</p>
            </div>
        </nav>
      </header>
            <div>회원 정보 수정</div>
            {memContent &&
            <>
                <form className="flex flex-col" onSubmit={onMemInfoHandler}>
                    <span>이름</span>
                    <input 
                        value={memName} 
                        type="text"
                        onChange={onMemNameChange}/>
                    
                    <span>전화번호</span>
                    <input 
                        value={memPhone} 
                        type="text"
                        onChange={onMemPhoneChange}/>
                    <span>생년월일</span>
                    <input 
                        value={memBirthdate} 
                        type="text"
                        onChange={onMemBirthDateChange}/>
                    <span>성별</span>
                    <input 
                        value={memSex} 
                        type="text"
                        onChange={onMemSexChange}/>
                    <span>직업</span>
                    <input 
                        value={memJob} 
                        type="text"
                        onChange={onMemJobChange}/>
                    
                    <button>수정완료</button>
                </form>
            </>}
            

    </div>
  )
}

export default ModMemInfo;


