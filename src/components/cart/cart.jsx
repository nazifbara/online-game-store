import React from 'react';
import './cart.css';
import CartIcon from './cart_icon.jsx';
import { useHistory } from 'react-router-dom';
import { useCart } from '../../context/cart_context';

function Cart() {
  const history = useHistory();
  const { cartItems } = useCart();
  const isCartEmpty = cartItems.length === 0;

  return (
    <span
      style={{ cursor: 'pointer', position: 'relative' }}
      onClick={() => history.push('/cart')}
    >
      {!isCartEmpty && <span className="badge">{cartItems.length}</span>}
      <CartIcon />
    </span>
  );
}

export default Cart;
