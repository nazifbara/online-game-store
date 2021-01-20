import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import AdminPage from './pages/AdminPage';
import CheckoutPage from './pages/CheckoutPage';
import { CartProvider } from './context/cart-context';

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Switch>
          <Route path="/checkout">
            <CheckoutPage />
          </Route>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </CartProvider>
    </Router>
  );
}

export default App;
