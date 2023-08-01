import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BackImage from '../../img/Back_24px.svg'
import instance from '../../api/axios_interceptors';
import InfoEdit from '../../assets/Edit_24px.svg';

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
              <p className="text-lg ml-2">회원 정보</p>
            </div>
        </nav>
      </header>

      <div className="flex justify-end">
        <Link to={`/modmem/${memContent?.id}`}>
          <img src={InfoEdit} alt = "정보수정 아이콘"/>
        </Link>
      </div>
      <h1>회원상세조회
        <p>
          이름 : {memContent?.name}
        </p>
        <p>
          생년월일 :  {memContent?.birthDate}
        </p>
        <p>
          등록일 : {memContent?.createdAt}
        </p>
        <p>
          성별 : {memContent?.sex}
        </p>
        <p>
          휴대전화번호: {memContent?.phone}
        </p>
        <p>
          직업형태: {memContent?.job}
        </p>
        
      </h1>
    </React.Fragment>
  )
}



export default MemDetail;