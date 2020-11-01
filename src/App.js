import { FiShoppingCart } from 'react-icons/fi';

function App() {
  return (
    <div>
      <header >
        <div className="Container">
          <div className="HeaderBar">
            <span className="AppName">OnlineGameStore</span>
            <span className="Cart"><FiShoppingCart/></span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
