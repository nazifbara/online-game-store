import { render, screen } from '@testing-library/react';
import Game from './game';
import { CartProvider } from '../../context/cart_context';

test("display item's info properly", () => {
  const item = {
    id: 'theid',
    imageUrl: '',
    title: 'GTA',
    price: 1000,
  };

  render(
    <CartProvider>
      <Game item={item} />
    </CartProvider>
  );

  expect(screen.getByRole('heading')).toHaveTextContent(item.title);
  expect(screen.getByText('$10')).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /add to cart/i })
  ).toBeInTheDocument();
});
