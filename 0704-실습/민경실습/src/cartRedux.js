import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./redux/cartSlice";

export default function CartRedux() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart({ CartItem: cartItems, id: itemId }));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}원
            <button onClick={() => handleRemoveFromCart(index)}>제거</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddToCart({ name: "상품 a", price: 10000 })}>
        상품 a 추가
      </button>
      <button onClick={() => handleAddToCart({ name: "상품 b", price: 20000 })}>
        상품 b 추가
      </button>
    </div>
  );
}
