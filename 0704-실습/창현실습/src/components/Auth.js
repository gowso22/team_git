import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../redux/AuthSlice";



const Auth = () => {

    const dispatch = useDispatch();

    const auth = useSelector(state => state.AuthSlice.isLogin)

    return(
        <>
            <h1>로그인 여부</h1>
            {auth  ? 
            <>
                <p>로그인 상태입니다.</p>
                <button onClick={()=>dispatch(logout())}>logout</button>
            </>
            :
            <>
                <p>로그아웃 상태입니다.</p>
                <button onClick={()=>dispatch(login())}>login</button>
            </>
            }
        </>
    )
}

export default Auth;