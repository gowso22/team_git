import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

 // 역할 리스트
 const roleList = [
    {id : 'basic', name : '기본', role_value : '1'},
    {id : 'info', name : '인포 직원', role_value : '7'},
    {id : 'manager', name : '총괄', role_value : '8'}
];

const CreateEmp = () => {

    const access_Token = localStorage.getItem('access_token');
    const navigate = useNavigate();
   
    // 이름, 연락처, 아이디, 비밀번호
    const [empName, setEmpName] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [empId, setEmpId] = useState("");
    const [pwd, setPwd] = useState("");
    
    const onEmpIdChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setEmpId(event.target.value)
    }
    const onPwdChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setPwd(event.target.value);
    }
    const onPhoneNumChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNum(event.target.value);
    }
    const onEmpNameChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setEmpName(event.target.value);
    }

    // 한 가지 이상의 역할을 담을 체크리스트 
    const [checkList, setCheckList] = useState<string[]>([]);
    // 체크여부
    const [isChecked, setIsChecked] = useState(false);


    // 체크박스 처리 로직
    const checkedRoleHandler = (value:string, isChecked: boolean) => {
        if(isChecked){
            setCheckList((prev) => [...prev, value])

            return;
        }

        if(!isChecked && checkList.includes(value)){
            setCheckList(checkList.filter((role) => role !== value));

            return;
        }

        return;
    };
    const oncheckHandler = (e : React.ChangeEvent<HTMLInputElement>, value : string) => {
        setIsChecked(!isChecked);
        checkedRoleHandler(value, e.target.checked);
    }


    // 연락처 중복 검증
    const onPhoneCheck = () =>{
        console.log('연락처 중복확인');
        try {
      
            fetch("http://223.130.161.221/api/v1/staffs/validate/phone", {
              method: 'POST',
              headers: {
                "Authorization" : `Bearer ${access_Token}`,
                "Content-Type" : "application/json",
              },
              body: JSON.stringify({
                phone : phoneNum,
              }),
            }).then((response) => response.json())
              .then((result) => {
                console.log(result)
               }
            )
        } catch (error : any) {
          alert(error);
        }

        
    }
    // 아이디 중복 검증
    const onIdCheck = () => {
        console.log('아이디 중복확인');
        try {
      
            fetch("http://223.130.161.221/api/v1/staffs/validate/id", {
              method: 'POST',
              headers: {
                "Authorization" : `Bearer ${access_Token}`,
                "Content-Type" : "application/json",
              },
              body: JSON.stringify({
                id : empId,
              }),
            }).then((response) => response.json())
              .then((result) => {
                console.log(result)
               }
            )
        } catch (error : any) {
          alert(error);
        }

    }

    // 직원 생성
    const onSubmit = (e : React.FormEvent) =>{
        e.preventDefault();

        try {
      
            fetch("http://223.130.161.221/api/v1/staffs", {
              method: 'POST',
              headers: {
                "Authorization" : `Bearer ${access_Token}`,
                "Content-Type" : "application/json",
              },
              body: JSON.stringify({
                loginId: empId,
                password: pwd,
                name: empName,
                phone : phoneNum,
                roles: checkList
              }),
            }).then((response) => response.json())
              .then((result) => {
                navigate("/centerInfo")
                console.log(result)
               }
            )
        } catch (error : any) {
          alert(error);
        }
        
    }

    return(
        <>
            <div>직원등록</div>
            <form className="flex flex-col" onSubmit={onSubmit}>
                <label>이름 *</label>
                <input
                    type="text"
                    value={empName}
                    onChange={onEmpNameChange}
                    placeholder="이름을 입력해주세요"/>
                 <label>휴대폰 번호 *</label>
                <input
                    type="text"
                    value={phoneNum}
                    onChange={onPhoneNumChange}
                    placeholder="000-0000-0000('-'포함)"/>
                <div onClick={onPhoneCheck}>연락처 중복 확인</div>
                <label>아이디 *</label>
                <input
                    type="text"
                    value={empId}
                    onChange={onEmpIdChange}
                    placeholder="3~15자의 영문, 숫자를 사용하여 아이디 입력해주세요"/>
                <div onClick={onIdCheck}>아이디 중복 확인</div> 
                <label>비밀번호 *</label>
                <input
                    type="text"
                    value={pwd}
                    onChange={onPwdChange}
                    placeholder="비밀번호를 입력해주세요"/>
                <span>역할 선택(중복선택가능)</span>

                {
                    roleList.map((role) => (
                        <div key={role.id}>
                            <input
                                id = {role.id}
                                type="checkbox"
                                
                                value={role.role_value}
                                onChange={(e) => oncheckHandler(e, role.role_value)}
                            />
                            <label htmlFor={role.id}>{role.name}</label>
                        </div>
                    ))
                }
                
                <button>완료</button>             
            </form>
        </>
    )

}

export default CreateEmp;