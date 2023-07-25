import React, {useState, useEffect} from 'react';
import ManagerFindHeader from '../../components/ManagerFindAccount';


//아래의 모든 코드들은 임시비밀번호 변경을 구현하기 위해 쓴 코드들입니다. 

interface PwReset {
  status: number;
  type: string;
  timestamp: string;
  message: string;
}


export default function PwReset(){

  const [userData, setUserData] = useState<PwReset>();
  const [isLoading, setIsLoading] = useState(true);

  const TOKEN = localStorage.getItem('access_token')

  const fetchUserDataFromAPI = async () => {
    try {
      // Perform the API call using fetch or any other library (e.g., axios)
      const response = await fetch("http://223.130.161.221/api/v1/me/", {
        method: "GET",
        headers: {
          // Add any required headers (e.g., authorization token) here
          'Authorization' : `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
        },
      /*   body: JSON.stringify({
          hashKey: stirng,
          loginId: empId,
          password: pwd,
          name: empName,
          phone : phoneNum,
          roles: checkList
        }), */
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      const data = await response.json();
      setUserData(data);
      console.log(data);

      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDataFromAPI();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>Failed to fetch user data.</div>;
  }

 const onSubmit = async () =>{
  try {
    // 비밀번호 변경 api
    const pwdchange = await fetch("http://223.130.161.221/api/v1/me/change-password", {
      
    })
  } catch (error) {
    //err
  }
}


  return(
    <>
    <ManagerFindHeader/>
    <div className="flex  justify-center ">
      <div className=" p-8 ">
        <div className="text-center mb-10">
          {userData.message};
          <p className="text-center text-xl font-extrabold text-Gray-800">비밀번호 재설정</p>
          <p className="text-center text-Gray-400 text-sm mt-1">비밀번호 재설정 후 새로운 비밀번호로 로그인 할 수 있습니다.</p>
        </div>
        <div className="space-y-2 text-left mb-2">
          {/* 왼쪽 정렬된 새로운 비밀번호 */}
          <label className="block font-medium">변경할 비밀번호(pin)</label>
          <input
            type="password"
            className="block w-full rounded border px-4 py-3 border-Gray-300 "
          />
          <p className='text-xs text-Gray-400'>4~6자리 숫자로 구성해 주세요.</p>
        </div>
        <div className="space-y-2 text-left mb-52">
          {/* 왼쪽 정렬된 비밀번호 확인 */}
          <label className="block font-medium">변경할 비밀번호 재확인 (pin)</label>
          <input
            type="password"
            className="block w-full rounded border px-4 py-3 border-Gray-300"
          />
        </div>
        {/* 취소와 확인 버튼 */}
        <div className="flex justify-between mt-52">
          <button className="hover:bg-Pri-500 hover:text-white bg-gray-100  text-Gray-400 py-3 px-4 rounded  w-full">
            확인
          </button>
        </div>
      </div>
      
    </div>

    </>
  )
}