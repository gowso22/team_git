import Profile from '../../assets/Profile_24px.svg'
import SearchBar from '../../components/search';

const CenterManage = () => {

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
            <div className="flex flex-col bg-[#FFFFFF] rounded-[4px] w-full px-[10px] py-3 gap-2">   
                <div className="flex justify-between">
                    <div className="flex gap-3">
                        <img src={Profile} alt="프사"/>
                        <span className="font-bold">김직원</span>
                    </div>
                    <span>010-0000-0000</span>
                </div>
                <div className="flex justify-between ">
                    <span className="font-bold">총 회원수</span>
                    <span>1000명</span>
                </div>
                <div className="flex justify-between ">
                    <span className="font-bold">메모</span>
                    <span>권한 변경 필요</span>
                </div>
            </div>
       </div>
    )
}

export default CenterManage;