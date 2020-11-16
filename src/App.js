import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Cart from './components/Cart';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import { CartContext } from './context';


function App() {
  const [cartItems, setCartItems] = useState([]);

  function onItemAdd(item) {
    const existingItemIndex = cartItems.findIndex(i => i.id === item.id);
    if (existingItemIndex !== -1) return;
  
    const newCartItems = [
      ...cartItems, 
      { ...item, total: item.price, quantity: 1 }
    ];
    setCartItems(newCartItems);
  }

  function onItemRemove(item) {
    const itemIndex = cartItems.findIndex(i => i.id === item.id);
    const newCartItems = [
      ...cartItems.slice(0, itemIndex),
      ...cartItems.slice(itemIndex + 1)
    ];
    setCartItems(newCartItems);
  }

  function onQuantityChange(item, quantity) {
    const itemIndex = cartItems.findIndex(i => i.id === item.id);
    const newCartItems = [
      ...cartItems.slice(0, itemIndex),
      { ...item, quantity, total: item.price * quantity },
      ...cartItems.slice(itemIndex + 1)
    ];
    setCartItems(newCartItems);
  }

  return (
    <Router>
      <CartContext.Provider 
        value={{
          cartItems, 
          onItemAdd,
          onItemRemove,
          onQuantityChange,
        }}
      >
        <header>
          <div className="Container">
            <div className="HeaderBar">
              <span className="AppName">
                <Link to="/">OnlineGameStore</Link>
              </span>
              <Cart/>
            </div>
          </div>
        </header>

        <Switch>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </CartContext.Provider>
    </Router>
  );
}

export default App;
