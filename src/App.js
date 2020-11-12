import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Cart from './components/Cart';
import Home from './pages/Home';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <header>
        <div className="Container">
          <div className="HeaderBar">
            <span className="AppName">
              <Link to="/">OnlineGameStore</Link>
            </span>
            <Cart items={cartItems} />
          </div>
        </div>
      </header>

      <Switch>
        <Route exact path="/">
          <Home 
            setCartItems={setCartItems} 
            cartItems={cartItems}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
