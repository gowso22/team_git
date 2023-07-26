import { useState, useEffect } from 'react';
import SearchBar from "../../components/search";
import Profile from '../../assets/Profile_24px.svg'

interface Member {
  totalCount: 0,
  members: []
}

const MemberManage = () => {
  const [data, setsData] = useState<Member>()
  const access_token = localStorage.getItem('access_token')

  const manage_member = async () => {
    try{
      const response = await fetch("http://223.130.161.221/api/v1/me/members", {
        method: "GET",
        headers: {
          'Authorization' : `Bearer ${access_token}`,
          'Content-Type' : 'application/json'
        },
      });

      const info = await response.json();
      setsData(info);
      console.log(info);
    } catch(error){
      console.log('error fetching user data', error);
    }
  }

  useEffect(() => {
    manage_member();
  }, []);


    return(
       <div className="flex flex-col items-center bg-[#F4F4F4] p-2 gap-3 h-[900px] overflow-y-auto">
            <SearchBar/>
            <div className="flex justify-between items-center w-full">
                <span>
                    나의 회원 
                    <span className="text-[#2D62EA]"> 20</span>
                </span>
                <button className="border rounded-[10px] py-1 px-[10px] text-[12px]">등록하기</button>
            </div>
            <div className="flex flex-col bg-[#FFFFFF] rounded-[4px] w-full px-[10px] py-3 gap-2">   
                <div className="flex justify-between">
                    <div className="flex gap-3">
                        <img src={Profile} alt="프사"/>
                        <span className="font-bold">김회원</span>
                    </div>
                    <span>여</span>
                </div>
                <div className="flex justify-between ">
                    <span>22.00.00 ~ 22.00.00</span>
                    <span>100회/100회</span>
                    <span>4.5/5.0 점</span>
                </div>
                <div className="flex justify-between ">
                    <span className="rounded-[4px] bg-[#F4F4F4] px-[10px] py-1 text-[#505050]">김파이</span>
                    <span>22.00.00</span>
                </div>
            </div>
       </div>
    )
}

export default MemberManage;