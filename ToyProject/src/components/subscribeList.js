import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SubscribeList = () => {
  const [subList, setSubList] = useState([]);

  const fetchSubscribeHandler = async () => {
    const response = await fetch(
      "https://udemy-react-ecdd2-default-rtdb.firebaseio.com/subscribeList.json"
    );
    const data = await response.json();
    const loadSubscribe = [];

    for (const key in data) {
      loadSubscribe.push({
        id: key,
        name: data[key].name,
        address: data[key].address,
        tel: data[key].tel,
      });
    }
    setSubList(loadSubscribe);
  };

  useEffect(() => {
    fetchSubscribeHandler();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(
        `https://udemy-react-ecdd2-default-rtdb.firebaseio.com/subscribeList/${id}.json`,
        {
          method: "DELETE",
        }
      );
      fetchSubscribeHandler();
    } catch (error) {
      console.log("삭제 실패", error);
    }
  };

  return (
    <>
      <h1>구독 카페 리스트</h1>
      <Link to="/cafeList">
        <h3>카페 추가</h3>
      </Link>
      <Link to="/login">
        <button>로그아웃</button>
      </Link>
      {subList.length > 0 ? (
        <ul>
          {subList.map((sub) => (
            <li key={sub.id}>

              <h2>{sub.name}</h2>
              <h3>{sub.address}</h3>
              <button onClick={() => handleDelete(sub.id)}>삭제</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>구독한 카페가 없습니다.</p>
      )}
    </>
  );
};

export default SubscribeList;