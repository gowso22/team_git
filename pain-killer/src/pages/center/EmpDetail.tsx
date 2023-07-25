import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import BackImage from '../../img/Back_24px.svg'
import InfoEdit from '../../assets/Edit_24px.svg';

interface IEmpContent {
  
    id : number, 
    type : string,
    name : string,
    phone : string,
    active : boolean,
    createdAt: string,
    updatedAt : string,
    loginId: string,
    memo: string,
    pwdChangeRequired: boolean,
    lastLoginedAt : string,
    roles : IRoles[],

    members : IMember[],
    prescriptionReviews : IReview[],

}

interface IRoles{
  id: number,
  name: string
}

interface IMember {
        id: number,
        name: string,
        phone: string,
        sex: string,
        birthDate: string,
        createdAt: string,
        updatedAt: string,
        visitedAt: string,
}

interface IReview {
        id: number,
        privateTutor: {
          id : number,
          name : string
        },
        member: {
          id: number,
          name : string,
          phone : string
        },
        rating : number,
        content : string,
        createdAt : string
}


const EmpDetail = () => {

    const {userId} = useParams();
    const access_Token = localStorage.getItem('access_token');

    const navigate = useNavigate();

    const [empContent, setEmpContent] = useState<IEmpContent>()

    const onPrevPage = () => {
      navigate(-1);
    }

    // 
    const getEmpDetail = () => {
    
    try{
          fetch(`http://223.130.161.221/api/v1/staffs/${userId}`, {
            method: 'GET',
            headers: {
              "Authorization" : `Bearer ${access_Token}`,
            },
            
          }).then((response) => response.json())
            .then((result) => {
              
              setEmpContent(result);
              
             }
          )
      } catch (error : any) {
        alert(error);
      }
  }

  useEffect(()=> {

    getEmpDetail();

  }, [])



    

    return(
        <>
            <header className="bg-white border-b border-t-neutral-100">
                <nav className="flex p-5">
                    <div className="flex justify-between items-center cursor-pointer" onClick={onPrevPage}>
                      <img src={BackImage} alt="Back" />
                      <p className="text-lg ml-2">직원 목록</p>
                    </div>
                </nav>
            </header>
           
            {
              empContent &&
              <>
                <div>{empContent.id}</div>
                <Link to = {`/modrole/${empContent.id}`}>
                  <span className='text-[12px] font-bold hover:text-[#2D62EA] cursor-pointer'>권한(역할) 수정</span>
                </Link>
                <Link to = {`/modemp/${empContent.id}`}>
                  <img src={InfoEdit} alt = "정보수정 아이콘"/>
                </Link> 
                <div>{empContent.name}</div>
                <div>{empContent.active}</div>
                <div>{empContent.phone}</div>
                <div>{empContent.loginId}</div>
                <div>{empContent.memo}</div>
                <div>나의 회원</div>
                {empContent.members.length === 0 && <div>배정된 회원이 없습니다.</div>}
                {empContent.members.map((member) => {
                  <div key={member.id}>{member.name}</div>
                })}
                <div>만족도 후기</div>
                {empContent.prescriptionReviews.length === 0 && <div>등록된 후기가 없습니다.</div>}
                {empContent.prescriptionReviews.map((review)=> {
                  <div key={review.id}>{review.privateTutor.name}</div>
                })}
              </>
            }
        </>
    )
}

    


export default EmpDetail;