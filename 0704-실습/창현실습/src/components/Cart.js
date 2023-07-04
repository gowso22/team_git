import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/CartSlice";




const Cart = () => {
    const cartItems = useSelector((state) => state.CartSlice);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart({ CartItem: cartItems, id: itemId }));
  };

  return (
    <div>
      <h1>쇼핑 카트</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}원
            <button onClick={() => handleRemoveFromCart(index)}>제거</button>
            {console.log(index)}
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddToCart({ name: "상품 1", price: 10000 })}>
        상품 1 추가
      </button>
      <button onClick={() => handleAddToCart({ name: "상품 2", price: 20000 })}>
        상품 2 추가
      </button>
    </div>
  );
}

export default Cart;