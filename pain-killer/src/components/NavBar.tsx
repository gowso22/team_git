import hamburgerIcon from '../assets/hamburger_button_menu_icon.svg';
import notiIcon from '../assets/notifications.svg';


const NavBar = () =>{


    const onMenuShow = () => {
        console.log('메뉴 표시')
    }

    const onNotiShow = () => {
        console.log('알림 표시');
        
    }

    // 추후 작업
    
    return(
        <div className="border p-2 flex justify-between">
            <img 
                src={hamburgerIcon}
                alt="메뉴 버튼"
                onClick={onMenuShow}
                className="w-[25px] h-[25px] cursor-pointer text-white hover:bg-[#bebebe] rounded"/>
            <img
                src={notiIcon}
                alt = "알림 표시"
                onClick={onNotiShow}
                className='w-[25px] h-[25px] cursor-pointer hover:bg-[#bebebe] rounded'
            />
        </div>
    )
}

export default NavBar;