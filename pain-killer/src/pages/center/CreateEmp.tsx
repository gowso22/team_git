import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../../api/axios_interceptors";
import RegOutHeader from "../../components/RegOutHeader";
import EmpImg from '../../img/Graphic_Employee_registered.svg';

 // 역할 리스트
 const roleList = [
    {id : 'info', name : '인포 직원', role_value : 7},
    {id : 'manager', name : '총괄', role_value : 8}
];

const CreateEmp = () => {

    const [step, setStep] = useState(1);
    const [isRegistrationComplete, setIsRegistrationComplete] = useState(false);

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
    const [checkList, setCheckList] = useState<number[]>([]);
    // 체크여부
    const [isChecked, setIsChecked] = useState(false);


    // 체크박스 처리 로직
    const checkedRoleHandler = (value:number, isChecked: boolean) => {
        if(isChecked){
            setCheckList((prev) => [...prev, value])

            return;
        }

        if(!isChecked && checkList?.includes(value)){
            setCheckList(checkList?.filter((role) => role !== value));

            return;
        }

        return;
    };
    const oncheckHandler = (e : React.ChangeEvent<HTMLInputElement>, value : number) => {
        setIsChecked(!isChecked);
        checkedRoleHandler(value, e.target.checked);
    }


    // 연락처 중복 검증
    const onPhoneCheck = async () =>{
        console.log('연락처 중복확인');
        try {
          const res = await instance.post(`/staffs/validate/phone`, {
            phone : phoneNum,
          });
        
          console.log(res);

      } catch (error : any) {
        alert(error);
      }
    }
    // 아이디 중복 검증
    const onIdCheck = async () => {
        console.log('아이디 중복확인');

        try {
          const res = await instance.post(`/staffs/validate/id`, {
            id : empId,
          });
        
          console.log(res);

      } catch (error : any) {
        alert(error);
      }
    }

    // 직원 생성
    const onSubmit = async (e : React.FormEvent) =>{
        e.preventDefault();

        try {
            const res = await instance.post(`/staffs`, {

              loginId: empId,
              password: pwd,
              name: empName,
              phone : phoneNum,
              roles: checkList

            });
          
            console.log(res);

        } catch (error : any) {
          alert(error);
        }
    }

    return(
        <>
        {isRegistrationComplete &&
          <>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-3xl mb-4 font-bold text-center">
                직원 등록 완료
              </h2>
              <p className="text-center">직원 등록이 완료되었습니다.</p>
              <img
                src={EmpImg}
                alt="직원 아이디 전달 이미지"
                className="mt-4 w-80 h-80"
              />
              <div className="flex justify-center mt-4">
                <button className="w-80 h-12 bg-Pri-500 hover:bg-Pri-700 text-white py-3 px-3 rounded">
                  홈으로
                </button>
              </div>
            </div>
          </>
        }
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
                
                <button>완료</button>             
            </form>
        </>
    )

}

export default CreateEmp;