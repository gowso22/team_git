import SearchBar from '../../components/search';
import Profile from '../../assets/Profile_24px.svg';
import { useEffect, useState } from 'react';
import instance from '../../api/axios_interceptors';

interface IEmpMembersManageList {
  id: number;
  name: string;
  phone: string;
  sex: string;
  birthDate: string;
  createdAt: string;
  updatedAt: string;
  visitedAt: string;
}

const MemberManage = () => {
  const [empTotalCount, setEmpTotalCount] = useState(0);
  const [empMembersManageList, setEmpMembersManageList] =
    useState<IEmpMembersManageList[]>();

  const getMemberEmp = async () => {
    try {
      const res = await instance.get('/members');

      setEmpTotalCount(res.data.meta.totalCount);
      setEmpMembersManageList(res.data.datas);
      console.log(res.data.message);
    } catch (error: any) {
      alert(error);
    }
  };

  useEffect(() => {
    getMemberEmp();
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#F4F4F4] p-2 gap-3 h-[900px] overflow-y-auto">
      <SearchBar />
      <div className="flex justify-between items-center w-full">
        <span>
          나의 회원
          <span className="text-[#2D62EA]"> {empTotalCount}</span>
        </span>
        <button className="border rounded-[10px] py-1 px-[10px] text-[12px]">
          등록하기
        </button>
      </div>

      {empMembersManageList &&
        empMembersManageList.map((emp) => (
          <div className="flex flex-col bg-[#FFFFFF] rounded-[4px] w-full px-[10px] py-3 gap-2">
            <div className="flex justify-between">
              <div className="flex gap-3">
                <img src={Profile} alt="프사" />
                <span className="font-bold">{emp.name}</span>
              </div>
              <span>{emp.sex}</span>
            </div>
            <div className="flex justify-between ">
              <span>22.00.00 ~ 22.00.00</span>
              <span>100회/100회</span>
              <span>4.5/5.0 점</span>
            </div>
            <div className="flex justify-between ">
              <span className="rounded-[4px] bg-[#F4F4F4] px-[10px] py-1 text-[#505050]">
                김파이
              </span>
              <span>22.00.00</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MemberManage;
