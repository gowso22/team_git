import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Profile from '../assets/Profile_24px.svg';

export default function SearchResult() {
  // interface IEmpSearch {
  //   searchParam: { query: string; resources: [] };
  //   members: IEmpMembersList[];
  //   users: IEmpUserhList[];
  //   message: string;
  // }

  interface IEmpMembersList {
    id: number;
    name: string;
    phone: string;
    sex: string;
    // birthDate: string;
    // createdAt: string;
    // updatedAt: string;
    // visitedAt: string;
  }
  interface IEmpUserhList {
    id: number;
    type: string;
    loginId: string;
    name: string;
    phone: string;
    // isActive: boolean;
    // createdAt: string;
    // updatedAt: string;
    // lastLoginedAt: string;
  }

  const access_Token = localStorage.getItem('access_token');
  const [empMembersList, setEmpMembersList] = useState<IEmpMembersList[]>();
  const [empUserList, setEmpUserList] = useState<IEmpUserhList[]>();

  const location = useLocation();
  // console.log(location.state.value);

  const getSearchEmp = () => {
    try {
      fetch(
        `http://223.130.161.221/api/v1/search?query=${location.state.value}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${access_Token}`,
          },
        },
      )
        .then((response) => response.json())
        .then((result) => {
          setEmpMembersList(result.members);
          setEmpUserList(result.users);
        });
    } catch (error: any) {
      alert(error);
    }
  };

  useEffect(() => {
    getSearchEmp();
  }, []);

  return (
    <>
      {empMembersList
        ? empMembersList.map((emp) => (
            <div
              key={emp.id}
              className="flex flex-col bg-[#FFFFFF] rounded-[4px] w-full px-[10px] py-3 gap-2"
            >
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <img src={Profile} alt="프사" />
                  <span className="font-bold">{emp.name}</span>
                </div>
                <span>{emp.phone}</span>
                <span>{emp.sex}</span>
              </div>
            </div>
          ))
        : empUserList?.map((emp) => (
            <div
              key={emp.id}
              className="flex flex-col bg-[#FFFFFF] rounded-[4px] w-full px-[10px] py-3 gap-2"
            >
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <img src={Profile} alt="프사" />
                  <span className="font-bold">{emp.name}</span>
                </div>
                <span>{emp.phone}</span>
                <span>{emp.type}</span>
                <span>{emp.loginId}</span>
              </div>
            </div>
          ))}
      <div>검색 결과: {location.state.value}</div>
    </>
  );
}
