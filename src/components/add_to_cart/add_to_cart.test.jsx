import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderHook } from '@testing-library/react-hooks';
import AddToCart from './add_to_cart';
import { CartProvider, useCart } from '../../context/cart_context';

test('can add item to cart', () => {
  const item = {
    id: 'theid',
    imageUrl: '',
    title: 'GTA',
    price: 1000,
  };

  const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;

  render(<AddToCart item={item} />, { wrapper });

  const button = screen.getByRole('button', { name: /add to cart/i });

  expect(button).toBeInTheDocument();

  userEvent.click(button);

  expect(button).toHaveTextContent(/remove from cart/i);

  const { result } = renderHook(() => useCart(), { wrapper });

  expect(result.current.cartItems).toHaveLength(1);
  expect(result.current.cartItems[0]).toEqual({
    id: 'theid',
    title: 'GTA',
    price: 1000,
    quantity: 1,
  });
});
