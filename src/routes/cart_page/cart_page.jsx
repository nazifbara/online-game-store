import './cart_page.css';
import { Link } from 'react-router-dom';
import Button from '../../components/button';
import { useCart } from '../../context/cart_context';
import { printPrice } from '../../utils';

function CartPage() {
  const {
    cartItems,
    onItemRemove,
    onQuantityChange,
    getCartTotal,
    getItemTotal,
  } = useCart();

  if (getCartTotal() === 0) {
    return (
      <div className="Container">
        <h2 style={{ color: 'red', marginTop: '15px' }}>Your cart is empty</h2>
      </div>
    );
  }
  return (
    <div className="Container">
      <h2>Shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Game</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((i) => (
            <tr key={i.id}>
              <td>{i.title}</td>
              <td>{printPrice(i.price)}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={i.quantity}
                  onChange={(e) => {
                    onQuantityChange(i, e.target.value);
                  }}
                />
                <br />
                <button onClick={() => onItemRemove(i)}>remove</button>
              </td>
              <td>{printPrice(getItemTotal(i))}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginBottom: '15px' }}>
        <strong>Total: {printPrice(getCartTotal())}</strong>
      </div>
      <Button type="primary">
        <Link to="/checkout">Procced to checkout</Link>
      </Button>
    </div>
  );
}

const route = {
  routeProps: {
    path: '/cart',
    component: CartPage,
  },
  name: 'CartPage',
};

export default route;
