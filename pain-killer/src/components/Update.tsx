import updateAlarm from '../assets/Graphic_Update_02_230706_250x250 1.png'

const Update = () => {
    

    return(
        <div className="flex justify-center align-center flex-col">
            <p className="mb-4">포인티 업데이트 알림</p>
            <p>포인티 최신 버전이 등록되었습니다.</p>
            <p>최신 버전으로 업데이트하시겠습니까?</p>
            <img src ={updateAlarm} className='w-18 h-18'></img>
        </div>
    )
}

export default Update;