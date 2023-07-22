import { useEffect, useState } from 'react';
import Profile from '../../assets/Profile_24px.svg'
import SearchBar from '../../components/search';
import { Link } from 'react-router-dom';


interface IEmpList{
    id: number,
    name: string,
    phone: string,
    memberCount: number,
    rating: number,
    memo: string
}


const CenterManage = () => {


    const access_Token = localStorage.getItem('access_token');

    const [empList, setEmpList] = useState<IEmpList[]>();

    const getEmp = () => {
        
        try {
      
            fetch("http://223.130.161.221/api/v1/staffs", {
              method: 'GET',
              headers: {
                "Authorization" : `Bearer ${access_Token}`,
              },
              
            }).then((response) => response.json())
              .then((result) => {
                
                console.log(result.meta);
                console.log(result.datas);
                console.log(result.message);

                setEmpList(result.datas);
                
               }
            )
        } catch (error : any) {
          alert(error);
        }
    }

    useEffect(()=> {
        getEmp()
    }, [])

    return(
       <div className="flex flex-col items-center bg-[#F4F4F4] p-2 gap-3 h-[900px] overflow-y-auto">
            <SearchBar/>
            <div className="flex justify-between items-center w-full ">
                <span>
                    직원 리스트 
                    <span className="text-[#2D62EA]"> 20</span>
                </span>
                <div className="flex items-center gap-3">
                    <span className="text-[12px] hover:text-[#2D62EA]">등록순</span>
                    <span className="text-[12px] hover:text-[#2D62EA]">이름순</span>
                    <button className="border rounded-[10px] py-1 px-[10px] text-[12px]">직원 등록</button>
                </div>
            </div>
           
            { empList && 
                empList.map((emp)=>(
                    <Link to = "/">
                        <div key={emp.id} 
                             className="flex flex-col bg-[#FFFFFF] rounded-[4px] w-full px-[10px] py-3 gap-2">   
                            <div className="flex justify-between">
                                <div className="flex gap-3">
                                    <img src={Profile} alt="프사"/>
                                    <span className="font-bold">{emp.name}</span>
                                </div>
                                <span>{emp.phone}</span>
                            </div>
                            <div className="flex justify-between ">
                                <span className="font-bold">총 회원수</span>
                                <span>{emp.memberCount}명</span>
                            </div>
                            <div className="flex justify-between ">
                                <span className="font-bold">메모</span>
                                <span>{emp.memo}</span>
                            </div>
                        </div>
                    </Link>
                ))
            }
       </div>
    )
}

export default CenterManage;