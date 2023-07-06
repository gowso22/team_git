import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CafeInfoList from "./cafeInfoList";

const CafeList = () => {
  const [cafeInfo, setCafeInfo] = useState([]);

  const fetchInfoHandler = async () => {
    const response = await fetch(
      "https://udemy-react-ecdd2-default-rtdb.firebaseio.com/cafeInfos.json"
    );
    const data = await response.json();
    setCafeInfo(data);
  };

  useEffect(() => {
    fetchInfoHandler();
  }, []);

  return (
    <>
      <h1>카페 리스트</h1>
      <Link to="/subscribeList">
        <h3>구독목록</h3>
      </Link>
      <ul>
        {cafeInfo.map((info) => (
          <li key={info.id}>
            <CafeInfoList info={info} />
          </li>
        ))}
      </ul>
      <ToastContainer />
    </>
  );
};

export default CafeList;
