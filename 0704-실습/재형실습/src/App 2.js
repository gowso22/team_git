import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from './components/CartSlice1';

function App() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const newItem = { id: Date.now(), name: `Item ${Date.now()}` };
    dispatch(addItem(newItem));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}{' '}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
