import { useReducer, } from 'react';
import GameList from '../components/GameList';
import Game from '../components/Game';

const initialGamesState = {
  data: [
    {
      id: "111",
      title: "Spider Man",
      imageUrl: "/spider-man-jaquette.jpg",
      price: 29.99,
    },
    {
      id: "222",
      title: "Spider Man",
      imageUrl: "/spider-man-jaquette.jpg",
      price: 29.99,
    },
    {
      id: "333",
      title: "Spider Man",
      imageUrl: "/spider-man-jaquette.jpg",
      price: 29.99,
    },
    {
      id: "444",
      title: "Spider Man",
      imageUrl: "/spider-man-jaquette.jpg",
      price: 29.99,
    },
    {
      id: "555",
      title: "Spider Man",
      imageUrl: "/spider-man-jaquette.jpg",
      price: 29.99,
    },
    {
      id: "666",
      title: "Spider Man",
      imageUrl: "/spider-man-jaquette.jpg",
      price: 29.99,
    },
    {
      id: "777",
      title: "Spider Man",
      imageUrl: "/spider-man-jaquette.jpg",
      price: 29.99,
    },
    {
      id: "888",
      title: "Spider Man",
      imageUrl: "/spider-man-jaquette.jpg",
      price: 29.99,
    },
  ]
}

function gamesReducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function Home() {
  const [games, dispatchGames] = useReducer(gamesReducer, initialGamesState);

  return (
    <div>
      <h2 className="Title">Play Has No Limits</h2>

      <GameList list={games.data}>
        {item => (
          <Game key={item.id} item={item} />
        )}
      </GameList>
    </div>
  );
}

export default Home;