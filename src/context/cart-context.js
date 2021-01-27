import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  function onItemAdd(cartItem) {
    const { id, title, price } = cartItem;
    const existingItemIndex = cartItems.findIndex((i) => i.id === id);
    if (existingItemIndex !== -1) return;

    const newCartItems = [...cartItems, { id, title, price, quantity: 1 }];
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

  function onQuantityChange(cartItem, quantity) {
    const { id, title, price } = cartItem;
    const itemIndex = cartItems.findIndex((i) => i.id === id);
    const newCartItems = [
      ...cartItems.slice(0, itemIndex),
      { id, title, quantity, price },
      ...cartItems.slice(itemIndex + 1),
    ];
    setCartItems(newCartItems);
  }

  function getCartTotal() {
    return cartItems.reduce((prev, i) => prev + getItemTotal(i), 0);
  }

  function getItemTotal(cartItem) {
    return cartItem.price * cartItem.quantity;
  }

  return (
    <CartContext.Provider
      {...props}
      value={{
        cartItems,
        onItemAdd,
        onItemRemove,
        onQuantityChange,
        getCartTotal,
        getItemTotal,
      }}
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
