import { Link } from "react-router-dom";


const Nav = () => {



    return(
        <nav>
            <ul>
                <Link to = "/"> <li>홈</li></Link>
                <Link to = "/searchMovie"> <li>영화 검색</li></Link>
                <Link to = "/favMovie"> <li>즐겨찾기</li></Link>
            </ul>
        </nav>
    )
}

export default Nav;