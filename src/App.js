import { FiShoppingCart } from 'react-icons/fi';

function App() {
  return (
    <div>
      <header>
        <div className="Container">
          <div className="HeaderBar">
            <span className="AppName">OnlineGameStore</span>
            <span className="Cart"><FiShoppingCart/></span>
          </div>
        </div>
      </header>
      <h2 className="Title">Play Has No Limits</h2>
    </div>
  );
}

export default App;
