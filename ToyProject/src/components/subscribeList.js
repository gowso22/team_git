import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const SubscribeList = ({loginState}) =>{

    const [subList, setSubList] = useState([]);

    const fetchSubscribeHandler = async () => {

        const response = await fetch('https://udemy-react-ecdd2-default-rtdb.firebaseio.com/subscribeList.json');
        
        const data = await response.json();
  
        const loadSubscribe = [];

        for (const key in data){
            loadSubscribe.push({
             id : key,
             name : data[key].name,
             address : data[key].address,
             tel : data[key].tel,
            });
           }
        setSubList(loadSubscribe);
  
      } 
   
      console.log(subList)
  
    useEffect(() => {
        fetchSubscribeHandler();
    }, []);




    return(
        <>
            <h1>구독 카페 리스트</h1>
            <Link to = "/cafeList">
                <h3>카페 추가</h3>
            </Link>
            <Link to = "/login">
                <button>로그아웃</button>
            </Link>
            {subList && <ul>
                {subList.map((sub) => (
                    <li>
                        <p>{sub.id}</p>
                        <h2>{sub.name}</h2>
                        <h3>{sub.address}</h3>
                        
                    </li>
                ))}
            </ul>}
            
        </>
    )
}

export default SubscribeList;