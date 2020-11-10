import { useReducer, useState } from 'react';
import GameList from './components/GameList';
import Game from './components/Game';
import Cart from './components/Cart';

const initialGamesState = {
  data: [
    {
      id: "111",
      title: "The witcher 3",
      imageUrl: "https://planete-play.fr/images/2014/06/The-Witcher-3-Wild-Hunt-Jaquette-PS4.jpg",
      price: "49.99",
    },
    {
      id: "222",
      title: "The witcher 3",
      imageUrl: "https://planete-play.fr/images/2014/06/The-Witcher-3-Wild-Hunt-Jaquette-PS4.jpg",
      price: "49.99",
    },
    {
      id: "333",
      title: "The witcher 3",
      imageUrl: "https://planete-play.fr/images/2014/06/The-Witcher-3-Wild-Hunt-Jaquette-PS4.jpg",
      price: "49.99",
    },
    {
      id: "444",
      title: "The witcher 3",
      imageUrl: "https://planete-play.fr/images/2014/06/The-Witcher-3-Wild-Hunt-Jaquette-PS4.jpg",
      price: "49.99",
    },
    {
      id: "555",
      title: "The witcher 3",
      imageUrl: "https://planete-play.fr/images/2014/06/The-Witcher-3-Wild-Hunt-Jaquette-PS4.jpg",
      price: "49.99",
    },
    {
      id: "666",
      title: "The witcher 3",
      imageUrl: "https://planete-play.fr/images/2014/06/The-Witcher-3-Wild-Hunt-Jaquette-PS4.jpg",
      price: "49.99",
    },
    {
      id: "777",
      title: "The witcher 3",
      imageUrl: "https://planete-play.fr/images/2014/06/The-Witcher-3-Wild-Hunt-Jaquette-PS4.jpg",
      price: "49.99",
    },
    {
      id: "888",
      title: "The witcher 3",
      imageUrl: "https://planete-play.fr/images/2014/06/The-Witcher-3-Wild-Hunt-Jaquette-PS4.jpg",
      price: "49.99",
    },
  ]
}

function gamesReducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function App() {
  const [games, dispatchGames] = useReducer(gamesReducer, initialGamesState);
  const [cartItems, setCartItems] = useState([]);

  function onItemAdd(item) {
    const existingItemIndex = cartItems.findIndex(i => i.id === item.id);
    if (existingItemIndex !== -1) return;
  
    const newCartItems = [...cartItems, item];
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

  return (
    <div>
      <header>
        <div className="Container">
          <div className="HeaderBar">
            <span className="AppName">OnlineGameStore</span>
            <Cart items={cartItems} />
          </div>
        </div>
      </header>

      <h2 className="Title">Play Has No Limits</h2>

      <GameList list={games.data}>
        {item => (
          <Game 
            key={item.id}
            item={item}
            onItemAdd={onItemAdd}
            onItemRemove={onItemRemove}
            cartItems={cartItems}
          />
        )}
      </GameList>
    </div>
  );
}

export default App;
