import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackImage from '../../img/Back_24px.svg'
import instance from '../../api/axios_interceptors';

interface Memdetail {
    id: number,
    name: string,
    phone: string,
    job: string,
    birthDate: string,
    sex: string,
    acqusitionFunnel: string,
    acquisitionFunnel: string,
    visitedAt: string,
    createdAt: string,
    updatedAt: string
}


const MemDetail = () => {
  const { useData } = useParams();

  const [memContent, setMemContent] = useState<Memdetail>();

  const navigate = useNavigate();

  const onPrevious = () => {
    navigate(-1);
  }


  const getMemDetail = async () => {
    try{
      const indicate = await instance.get(`/members/${useData}`)
      setMemContent(indicate.data)
      console.log(indicate);
    }catch(error){
      alert(error);
    }
  }

  useEffect(() => {
    getMemDetail();
  }, [])

  return(
    <React.Fragment>

      <header className="bg-white border-b border-t-neutral-100">
        <nav className="flex p-5">
            <div className="flex justify-between items-center cursor-pointer" onClick={onPrevious}>
              <img src={BackImage} alt="Back" />
              <p className="text-lg ml-2">회원 목록</p>
            </div>
        </nav>
      </header>

      <h1>회원상세조회
        <p>
          아이디: {memContent?.id}
        </p>
        <p>
          이름 : {memContent?.name}
        </p>
        <p>
          성별 : {memContent?.sex}
        </p>
        <p>
          휴대전화번호: {memContent?.phone}
        </p>
        <p>
          직업: {memContent?.job}
        </p>
        <p>
          생년월일 :  {memContent?.birthDate}
        </p>
      </h1>
    </React.Fragment>
  )
}



export default MemDetail;