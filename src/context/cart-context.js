import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function onItemAdd(item) {
    const existingItemIndex = cartItems.findIndex((i) => i.id === item.id);
    if (existingItemIndex !== -1) return;

    const newCartItems = [
      ...cartItems,
      { ...item, total: item.price, quantity: 1 },
    ];
    setCartItems(newCartItems);
  }

  function onItemRemove(item) {
    const itemIndex = cartItems.findIndex((i) => i.id === item.id);
    const newCartItems = [
      ...cartItems.slice(0, itemIndex),
      ...cartItems.slice(itemIndex + 1),
    ];
    setCartItems(newCartItems);
  }

  function onQuantityChange(item, quantity) {
    const itemIndex = cartItems.findIndex((i) => i.id === item.id);
    const newCartItems = [
      ...cartItems.slice(0, itemIndex),
      { ...item, quantity, total: item.price * quantity },
      ...cartItems.slice(itemIndex + 1),
    ];
    setCartItems(newCartItems);
  }

  return (
    <CartContext.Provider
      {...props}
      value={[cartItems, onItemAdd, onItemRemove, onQuantityChange]}
    />
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider.');
  }
  return context;
}
