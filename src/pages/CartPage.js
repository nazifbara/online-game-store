import './CartPage.css';
import { CartContext } from '../context';
import { useContext } from 'react';

function Cart() {
  const { cartItems, onItemRemove, onQuantityChange } = useContext(CartContext);
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
          {cartItems.map(i => (
            <tr key={i.id}>
              <td>{i.title}</td>
              <td>${i.price}</td>
              <td>
                <input
                  type="number"
                  min="1"
                  value={i.quantity}
                  onChange={(e) => {
                    onQuantityChange(i, e.target.value)
                  }}
                />
                <br/>
                <button onClick={() => onItemRemove(i)}>remove</button>
              </td>
              <td>${i.total}</td>
            </tr>
          ))}
        </tbody>
        
      </table>
      <span><strong>Total: ${cartItems.reduce((total, item) => total + item.total, 0)}</strong></span><br/>
      <a href="/#">Procced to checkout</a>
    </div>
  )
}

export default Cart;