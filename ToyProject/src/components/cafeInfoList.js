

const CafeInfoList = ({info}) => {

    const {id, name, address, tel} = info;

    const onSubscribe = async () => {
        const res = await fetch('https://udemy-react-ecdd2-default-rtdb.firebaseio.com/subscribeList.json', {
            method : 'POST',
           
            body : JSON.stringify({
                id,
                name,
                address,
                tel
      }),

      headers : {
        'Content-Type' : 'application/json'
      },

    });
    const data = await res.json();
    console.log(data);
    }

    return(
        <div>
            <h1>카페 이름 : {name}</h1>
            <p>
                카페 주소 : {address}
            </p>
            <h5>tel : {tel}</h5>
            <button onClick={onSubscribe}>{name} 구독 </button>
        </div>
    )
}

export default CafeInfoList;