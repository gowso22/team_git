import { Link } from "react-router-dom";


const SubscribeList = ({loginState}) =>{


    

    return(
        <>
            <h1>구독 카페 리스트</h1>
            <Link to = "/cafeList">
                <h3>카페 추가</h3>
            </Link>
            <Link to = "/login">
                <button>로그아웃</button>
            </Link>
        </>
    )
}

export default SubscribeList;