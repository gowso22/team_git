import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchResult() {
  interface IEmpSearch {
    searchParam: IEmpsearchParam[];
    members: IEmpMembersList[];
    users: IEmpUserhList[];
    message: string;
  }

  interface IEmpsearchParam {
    query: string;
    resources: [];
  }
  interface IEmpMembersList {
    id: number;
    name: string;
    phone: string;
    sex: string;
    birthDate: string;
    createdAt: string;
    updatedAt: string;
    visitedAt: string;
  }
  interface IEmpUserhList {
    id: number;
    type: string;
    loginId: string;
    name: string;
    phone: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    lastLoginedAt: string;
  }

  const access_Token = localStorage.getItem('access_token');
  const [empMembersList, setEmpMembersList] = useState<IEmpMembersList[]>();
  const [empUserList, setEmpUserList] = useState<IEmpUserhList[]>();

  //const { search } = useParams();
  const location = useLocation();
  console.log(location.state.value);

  const getSearchEmp = () => {
    try {
      fetch(`http://223.130.161.221/api/v1/search?query=${search}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${access_Token}`,
        },
      })
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
      <div>검색 결과: {location.state.value}</div>
    </>
  );
}
