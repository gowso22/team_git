

const CafeCard = ({info}) => {

    const {id, name, address, tel} = info;

    return(
        <div>
            <h1>카페 이름 : {name}</h1>
            <p>
                카페 주소 : {address}
            </p>
            <h5>tel : {tel}</h5>
            <button>{name} 구독 </button>
        </div>
    )
}

export default CafeCard;