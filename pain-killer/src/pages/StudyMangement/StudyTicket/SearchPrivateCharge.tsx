import BackImage from '../../../img/Back_24px.svg';
import instance from '../../../api/axios_interceptors';
import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

interface SearchParam {
  query: string;
  resources: string[];
}

interface Member {
  id: number;
  name: string;
  phone: string;
  sex: string;
  birthDate: string;
  createdAt: string;
  updatedAt: string;
  visitedAt: string;
}

interface User {
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

interface SearchResponse {
  searchParam: SearchParam;
  members: Member[];
  users: User[];
  message: string;
}

export default function SearchPrivateCharge() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await instance.post<SearchResponse>('/search', {
        searchParam: {
          query: searchQuery,
          resources: ['USER'],
        },
      });

      // 검색 결과의 users 배열을 상태로 저장합니다.
      setSearchResults(response.data.users);
    } catch (error) {
      console.error('직원 검색 오류:', error);
    }
  };
  const handleSelectEmployee = (selectedEmployee) => {
    // CreateStudyTicket 페이지로 돌아가기 위해 URL 파라미터에서 ticketId를 가져옵니다.
    const queryParams = new URLSearchParams(window.location.search);
    const ticketId = queryParams.get('ticketId');

    // 선택한 직원의 이름과 전화번호를 CreateStudyTicket 페이지로 전달합니다.
    const selectedEmployeeName = selectedEmployee.name;
    const selectedEmployeePhone = selectedEmployee.phone;

    // CreateStudyTicket 페이지로 이동하면서 선택한 직원의 이름과 전화번호를 URL 파라미터로 전달합니다.
    return (
      <Navigate
        to={`/create-study-ticket?ticketId=${ticketId}&selectedEmployeeName=${selectedEmployeeName}&selectedEmployeePhone=${selectedEmployeePhone}`}
      />
    );
  };

  return (
    <>
      <header className="bg-white border-b border-t-neutral-100">
        <nav className="flex p-5 justify-between">
          <div className="flex justify-between items-center">
            {/* ... */}
            <input
              type="text"
              className="bg-Gray-100 px-4 py-1 w-[300px] ml-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>검색</button>
          </div>
        </nav>
      </header>

      <div>
        {/* 검색 결과를 보여줍니다. */}
        {searchResults.map((employee) => (
          <div key={employee.id} onClick={() => handleSelectEmployee(employee)}>
            <p>{employee.name}</p>
            <p>{employee.phone}</p>
          </div>
        ))}
      </div>
    </>
  );
}
