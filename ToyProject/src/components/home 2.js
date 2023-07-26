import { Link } from "react-router-dom"
import styled from 'styled-components'




const FirstView = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Home = () => {

    return(
        <FirstView>
            <Link to = "/login">
                <h3>로그인하기</h3>
            </Link>
        </FirstView>    
        )

}

export default Home;