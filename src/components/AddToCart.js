import { useContext } from 'react';
import Button from './Button';
import { CartContext } from '../context';

function AddToCart({ item }) {
  let { cartItems, onItemAdd, onItemRemove } = useContext(CartContext);
  const existingCartItem = cartItems.findIndex((i) => i.id === item.id);
  const isItemInCart = existingCartItem !== -1;

  return isItemInCart ? (
    <Button type="danger" onClick={() => onItemRemove(item)}>
      Remove from cart
    </Button>
  ) : (
    <Button type="primary" onClick={() => onItemAdd(item)}>
      Add to cart
    </Button>
  );
}

export default AddToCart;
