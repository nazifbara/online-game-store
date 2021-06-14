import './checkout_page.css';

import { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import useAsync from '../../hooks/use_async';
import { processOrder } from '../../api/mutations';
import { useCart } from '../../context/cart_context';
import Button from '../../components/button';
import Message from '../../components/message';
import { printPrice } from '../../utils';

function CheckoutPage() {
  const { cartItems, getCartTotal, getItemTotal } = useCart();
  const [stripePromise] = useState(() =>
    loadStripe('pk_test_gj7dXJ4Qc852MzYqINg6QULX')
  );

  return (
    <div className="Container">
      <h2>Checkout</h2>
      <div className="Checkout">
        <div className="Summary">
          <h3>Summary</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="SummaryItem">
              <span>{item.title}</span>
              <span>{printPrice(getItemTotal(item))}</span>
              <span>Qty: {item.quantity}</span>
            </div>
          ))}
          <span>Total : {printPrice(getCartTotal())}</span>
        </div>
        <Elements stripe={stripePromise}>
          <InjectedCheckoutForm />
        </Elements>
      </div>
    </div>
  );
}

function CheckoutForm({ stripe, elements }) {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { status, error, run } = useAsync();
  const [form, setForm] = useState(initialFormState);

  function handleSubmit(e) {
    const { address, country } = form;
    e.preventDefault();
    if (!stripe && !elements && !address && !country) {
      return;
    }
    run(process());
  }

  function handlInputChange({ target: { name, value } }) {
    setForm((f) => ({
      ...form,
      [name]: value,
    }));
  }

  async function process() {
    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    await API.graphql(
      graphqlOperation(processOrder, {
        input: {
          cart: cartItems,
          token: result.token.id,
          total: getCartTotal(),
          ...form,
        },
      })
    );
    clearCart();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="Field">
        <label htmlFor="country">Country: </label>
        <input
          value={form.country}
          onChange={handlInputChange}
          className="Input"
          required
          name="country"
          id="country"
        />
      </div>
      <div className="Field">
        <label htmlFor="city">City: </label>
        <input
          value={form.city}
          onChange={handlInputChange}
          className="Input"
          name="city"
          id="city"
        />
      </div>
      <div className="Field">
        <label htmlFor="zipCode">ZIP-CODE: </label>
        <input
          value={form.zipCode}
          onChange={handlInputChange}
          className="Input"
          name="zipCode"
          id="zipCode"
        />
      </div>
      <div className="Field">
        <label htmlFor="address">Address: </label>
        <input
          value={form.address}
          onChange={handlInputChange}
          className="Input"
          required
          name="address"
          id="address"
        />
      </div>
      <div className="Field">
        <label htmlFor="card">
          Card:{' '}
          <span style={{ color: 'green' }}>
            enter 4242424242424242 - 08/30 - 123 - 12345
          </span>
        </label>
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
      <Button type="primary">
        {status === 'pending' ? 'processing...' : 'Buy'}
      </Button>
      {status === 'rejected' && (
        <Message type="failed">{error.message}</Message>
      )}
      {status === 'resolved' && (
        <Message type="succed">Successfully ordered</Message>
      )}
    </form>
  );
}

function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}

const initialFormState = {
  country: '',
  city: '',
  zipCode: '',
  address: '',
};

const route = {
  routeProps: {
    path: '/checkout',
    component: withAuthenticator(CheckoutPage),
  },
  name: 'CheckoutPage',
};

export default route;
