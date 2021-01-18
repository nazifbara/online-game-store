import { Link } from 'react-router-dom';
import Cart from './Cart';
import './Header.css';

function Header() {
  return (
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
  );
}

export default Header;
