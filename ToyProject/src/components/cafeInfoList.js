import { useState } from "react";

const CafeInfoList = ({ info }) => {
  const { id, name, address, tel } = info;
  const [isSubscribed, setIsSubscribed] = useState(false);

  const onSubscribe = async () => {
    // 이미 구독한 경우에는 버튼을 비활성화
    if (isSubscribed) {
      return;
    }

    try {
      const res = await fetch(
        "https://udemy-react-ecdd2-default-rtdb.firebaseio.com/subscribeList.json",
        {
          method: "POST",
          body: JSON.stringify({
            id,
            name,
            address,
            tel,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data);

      setIsSubscribed(true); // 구독 완료 상태로 변경
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>카페 이름: {name}</h1>
      <p>카페 주소: {address}</p>
      <h5>tel: {tel}</h5>
      <button onClick={onSubscribe} disabled={isSubscribed}>
        {isSubscribed ? "구독 완료" : `${name} 구독`}
      </button>
    </div>
  );
};

export default CafeInfoList;
