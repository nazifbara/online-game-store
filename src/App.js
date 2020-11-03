import { useReducer } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import GameList from './components/GameList';

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

      <GameList list={games.data}/>
    </div>
  );
}

export default App;
