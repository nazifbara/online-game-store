import React, { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../context';


function Cart() {
  let history = useHistory();
  let { cartItems } = useContext(CartContext); 
  let style = { cursor: "pointer" };
  const isCartEmpty = cartItems.length > 0;
  style = isCartEmpty ? { color: 'red', ...style } : {...style};

  return (
    <span 
      style={style}
      onClick={() => history.push('/cart')}
    >
      <span>{cartItems.length}</span>
      <FiShoppingCart/>
    </span>
  )
}

export default Cart;
