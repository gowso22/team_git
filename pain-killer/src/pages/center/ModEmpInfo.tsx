import React, {useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

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

const ModEmpInfo = () => {
    const {userId} = useParams();
    const access_Token = localStorage.getItem('access_token');

    const navigate = useNavigate();

    const [empContent, setEmpContent] = useState<IEmpContent>();
    const [empName, setEmpName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");

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
                  
                  setEmpName(result.name);
                  setPhoneNum(result.phone);
                 }
              )
          } catch (error) {
            alert(error);
          }
      }
    
      useEffect(()=> {
    
        getEmpDetail();
    
      }, [])

    const onEmpNameChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setEmpName(event.target.value)
    }
    const onPhoneNumChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNum(event.target.value);
    }
    

      
      const onModEmpInfoHandler = (e : React.FormEvent) => {
        e.preventDefault();

        try{

            fetch(`http://223.130.161.221/api/v1/staffs/${userId}`, {
              method: 'PUT',
              headers: {
                "Authorization" : `Bearer ${access_Token}`,
                "Content-Type"  : "application/json",
              },
              body: JSON.stringify({
                name : empName,
                phone : phoneNum,
              }),
            }).then((response) => response.json())
              .then((result) => {
                
                setEmpContent(result);

                navigate(`/centerInfo`);

                alert(result.message);
          
               }
            )
        } catch (error) {
          alert(error);
        }

      }

      return(
        <div className="flex flex-col">
            <div>직원 정보 수정</div>
            {empContent &&
            <>
                <form className="flex flex-col" onSubmit={onModEmpInfoHandler}>
                    <span>이름</span>
                    <input 
                        value={empName} 
                        type="text"
                        onChange={onEmpNameChange}/>
                    
                    <span>전화번호</span>
                    <input 
                        value={phoneNum} 
                        type="text"
                        onChange={onPhoneNumChange}/>
                    
                    <button>수정</button>
                </form>
            </>}
            

        </div>
      )
}

export default ModEmpInfo;