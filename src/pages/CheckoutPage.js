import './CheckoutPage.css';

import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { useCart } from '../context/cart-context';
import Button from '../components/Button';
import { printPrice } from '../utility';

function Checkout() {
  const { cartItems, getCartTotal } = useCart();
  const stripe = loadStripe('pk_test_gj7dXJ4Qc852MzYqINg6QULX');
  return (
    <div className="Container">
      <h2>Checkout</h2>
      <div className="Checkout">
        <div className="Summary">
          <h3>Summary</h3>
          {cartItems.map(({ title, total, quantity }) => (
            <div className="SummaryItem">
              <span>{title}</span>
              <span>{printPrice(total)}</span>
              <span>Qty: {quantity}</span>
            </div>
          ))}
          <span>Total : {printPrice(getCartTotal())}</span>
        </div>
        <Elements stripe={stripe}>
          <form>
            <div className="Field">
              <label htmlFor="country">Country: </label>
              <input className="Input" required name="country" id="country" />
            </div>
            <div className="Field">
              <label htmlFor="city">City: </label>
              <input className="Input" required name="city" id="city" />
            </div>
            <div className="Field">
              <label htmlFor="zipCode">ZIP-CODE: </label>
              <input className="Input" required name="zipCode" id="zipCode" />
            </div>
            <div className="Field">
              <label htmlFor="address">Address: </label>
              <input className="Input" required name="address" id="address" />
            </div>
            <div className="Field">
              <label htmlFor="card">Card:</label>
              <CardElement
                className="Input"
                options={{
                  style: {
                    base: {
                      backgroundColor: 'white',
                    },
                  },
                }}
              />
            </div>
            <Button type="primary">Buy</Button>
          </form>
        </Elements>
      </div>
    </div>
  );
}

export default Checkout;
