import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

function Cart({ items }) {
  const isCartEmpty = items.length > 0;
  const style = isCartEmpty ? { color: 'red' } : {};

  return (
    <span style={style}>
      <span>{items.length}</span>
      <FiShoppingCart/>
    </span>
  )
}

export default Cart;
