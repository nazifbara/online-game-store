import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header';
import routes from '../../routes';
import { CartProvider } from '../../context/cart_context';

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Switch>
          {routes.map((route) => (
            <Route {...route.routeProps} key={route.name} />
          ))}
        </Switch>
      </CartProvider>
    </Router>
  );
}

export default App;
