import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CafeCard from "../CafeCard";


const CafeList = () => {

    const [cafeInfo, setCafeInfo] = useState([]);

  const fetchInfoHandler = async () => {

      const response = await fetch('https://udemy-react-ecdd2-default-rtdb.firebaseio.com/cafeInfos.json');
      
      const data = await response.json();

      
      setCafeInfo(data);

    } 
 
    console.log(cafeInfo)

  useEffect(() => {
    fetchInfoHandler();
  }, []);



   return(
    <>
    <h1>카페 리스트</h1>

    <ul>
        {cafeInfo.map((info)=>(
            <CafeCard info = {info} key={info.id}/>
        ) )}
    </ul>
    <Link to = "/subscribeList">
        <h3>구독목록으로</h3>
    </Link>
    </>
   )
}
    
export default CafeList;