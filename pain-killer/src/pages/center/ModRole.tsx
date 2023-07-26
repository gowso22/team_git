import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import instance from '../../api/axios_interceptors';


const roleList = [
    {id : 'info', name : '인포 직원', role_value : 7},
    {id : 'manager', name : '총괄', role_value : 8}
];

const ModRole = () => {

    const {userId} = useParams();

     // 한 가지 이상의 역할을 담을 체크리스트 
     const [checkList, setCheckList] = useState<number[]>([]);
     // 체크여부
     const [isChecked, setIsChecked] = useState(false);
 
 
     // 체크박스 처리 로직
     const checkedRoleHandler = (value:number, isChecked: boolean) => {
        // 체크하면 checkList에 추가 
        if(isChecked){
             setCheckList((prev) => [...prev, value])
 
             return;
         }
         
         // 체크가 되지 않았고 체크리스트에 value 가 들어있으면 해당 value를 제외하고 checkList 구성
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

    const onModRoleHandler = async(e : React.FormEvent) => {
        e.preventDefault();

        try{
            const res = await instance.post(`/staffs/${userId}/change-role`, {
                "roleIds": checkList   
            })

            console.log(res);

        } catch(error){
            alert(error);
        }

    console.log(checkList + `으로 권한 변경`);
    }
   

    return(
        <form onSubmit={onModRoleHandler}>
            <div>
                <input id ='basic' type="checkbox" checked readOnly/>
                <label htmlFor="basic">기본</label>
            </div>
            {roleList.map((role) => (
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
            <button>권한 변경</button>
        </form>
    )
}

export default ModRole;