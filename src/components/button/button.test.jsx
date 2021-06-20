import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './button.jsx';

test('clicking the button calls handleClick', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>click here</Button>);
  userEvent.click(screen.getByRole('button'));
  expect(handleClick).toBeCalledTimes(1);
});
