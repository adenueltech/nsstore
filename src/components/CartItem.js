// components/CartItem.js
import React from 'react';

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center space-x-4">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
        <span>{item.name}</span>
      </div>
      <span>${item.price}</span>
      <select
        value={item.quantity}
        onChange={(e) => onQuantityChange(item.id, e.target.value)}
        className="border p-1 rounded"
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
      <span>${item.price * item.quantity}</span>
      <button onClick={() => onRemove(item.id)} className="text-red-500">✖️</button>
    </div>
  );
};

export default CartItem;
