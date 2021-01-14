import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import AdminPage from './pages/AdminPage';
import { CartProvider } from './context/cart-context';

function App() {
  return (
    <Router>
      <CartProvider>
        <header>
          <div className="Container">
            <div className="HeaderBar">
              <span className="AppName">
                <Link to="/">OnlineGameStore</Link>
              </span>
              <Cart />
            </div>
          </div>
        </header>

        <Switch>
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
