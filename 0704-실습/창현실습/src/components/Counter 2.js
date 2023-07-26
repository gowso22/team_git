import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/CounterSlice";


const Counter =() => {

    const dispatch = useDispatch();

    const count = useSelector(state => state.CounterSlice.num);


    return(
        <>
            <h1>카운터</h1>
            <h3>Count : {count}</h3>
            <button onClick={()=> {
               dispatch(increment(1));
                }}>
                    증가
            </button>
            <button onClick={()=> {
                dispatch(decrement(1));
                }}>
                감소
            </button>
        </>
    );
}

export default Counter;