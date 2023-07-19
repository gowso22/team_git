import profileEdit from '../assets/Profile edit_48px.png';
import regCertificate from '../assets/image 28.png';

const CenterInfo = () => {



    return(
        <div className="bg-gray-200 flex flex-col items-center gap-2 p-6">
            <div className="w-full text-left">
                <span className="text-base font-bold">센터 정보</span>
            </div>
            <div className="w-full bg-white rounded-lg flex items-center justify-between px-6 py-4">
                <div className='flex items-center gap-3'>
                    <img src={profileEdit} alt = "프로필수정"/>
                    <span className='font-bold text-blue-600'>좋은 관절센터</span>
                </div>
                <div className="bg-gray-100 rounded-lg px-2 py-1 text-xs">
                    센터 정보 수정이 필요하신가요?
                </div>
            </div>
            <div className="w-full bg-white rounded-lg flex items-start flex-col px-5 py-4 gap-2">
                <div className='w-full flex flex-row justify-between'>
                    <span>센터코드</span>
                    <span className='font-bold'>45576</span>
                </div>
                <div className='w-full flex flex-row justify-between'>
                    <span>대표자</span>
                    <span className='font-bold'>박사장</span>
                </div>
                <div className='w-full flex flex-row justify-between mb-5'>
                    <span>사업자 번호</span>
                    <span className='font-bold'>243 - 69 - 011</span>
                </div>
                <div className='w-full flex flex-row justify-between'>
                    <span>사업자 등록증 이미지</span>
                    <img className='rounded-md' src ={regCertificate} alt='사업자 등록증 이미지'/>
                </div>
            </div>
        </div>
    )

}

export default CenterInfo;