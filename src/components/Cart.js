import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useCart } from '../context/cart-context';

function Cart() {
  const history = useHistory();
  const { cartItems } = useCart();
  let style = { cursor: 'pointer' };
  const isCartEmpty = cartItems.length > 0;
  style = isCartEmpty ? { color: 'red', ...style } : { ...style };

  return (
    <span style={style} onClick={() => history.push('/cart')}>
      <span>{cartItems.length}</span>
      <FiShoppingCart />
    </span>
  );
}

export default Cart;
