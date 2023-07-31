import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profileEdit from '../../assets/svg/profile-edit-48px.svg';
import LogoutModal from '../../components/logoutModal';

interface MyPage {
  name: string;
  phone: string;
  id: string;
  loginId: string;
  hashKey: string;
  center : {
    code: string;
  }
}

export default function Mypage() {
  const [logoutButton, setLogoutButton] = useState(false);
  const [userData, setUserData] = useState<MyPage>()
  const [isLoading, setIsLoading] = useState(false);
  
  const TOKEN = localStorage.getItem('access_token');

  const LogoutButtonHandle = () => {
    setLogoutButton(true);
  };

  const fetchUserDataFromAPI = async () => {
    try {
      // Perform the API call using fetch or any other library (e.g., axios)
      const response = await fetch("http://223.130.161.221/api/v1/me", {
        method: "GET",
        headers: {
          // Add any required headers (e.g., authorization token) here
          'Authorization' : `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
        },
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


  return (
    <div className='bg-[#F4F4F4] p-2 h-[900px] overflow-y-auto'>
      <div className="mb-5 px-6 py-2 bg-white rounded-[10px]">
        <div className="mb-2 flex justify-between items-center">
          <div className="flex items-center">
            <object className="mr-2" data={profileEdit}></object>
            <p
              className="text-xl font-extrabold text-[#2D62EA]"
              onClick={LogoutButtonHandle}
            >
              {userData?.name}
            </p>
          </div>

          <div className="text-[#2D62EA] flex items-center text-[10px]">
            <div className="mr-2 px-2 py-1 bg-[#F4F4F4] rounded-[4px]">
              알림메시지 관리 권한
            </div>
            <span>+3</span>
          </div>
        </div>
        <div className="flex">
          <p className="flex-1 text-sm font-extrabold text-[#505050] text-left">
            좋은 관절 센터
          </p>
          <div className="flex">
            <span className="mr-1 text-sm text-[#505050]">센터코드</span>
            <p className="text-sm font-extrabold text-[#2D62EA]">{userData?.center.code}</p>
          </div>
        </div>
      </div>
      <div className="text-left px-5 py-4 bg-white rounded-[10px]">
        <div className="mb-4 flex justify-between ">
          <p className="text-base font-extrabold text-[#505050]">내정보</p>
          <button className="px-2 py-1 text-sm bg-white rounded-[10px] border-solid border border-[#E7E7E7]">
            내 정보 수정
          </button>
        </div>
        <div className="flex mb-2">
          <p className="w-24 text-sm text-[#505050]">이름 </p>
          <p className="text-sm font-extrabold text-[#1D1D1D]">{userData?.name}</p>
        </div>
        <div className="flex mb-2">
          <p className="w-24 text-sm text-[#505050]">휴대폰 번호 </p>
          <p className="text-sm font-extrabold text-[#1D1D1D]">
            {userData?.phone}
          </p>
        </div>
        <div className="flex mb-2">
          <p className="w-24 text-sm text-[#505050]">아이디 </p>
          <p className="text-sm font-extrabold text-[#1D1D1D]">{userData?.loginId}</p>
        </div>
        <div className="flex mb-2">
          <p className="w-24 text-sm text-[#505050]">비밀번호 </p>
          <p className="text-sm font-extrabold text-[#1D1D1D]">{userData?.hashKey}</p>
        </div>
      </div>
      {logoutButton && <LogoutModal />}
    </div>
  );
}
