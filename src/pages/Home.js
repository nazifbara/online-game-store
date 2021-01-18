import './Home.css';

import { useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import GameList from '../components/GameList';
import Game from '../components/Game';
import Message from '../components/Message';
import useAsync from '../hooks/use-async';
import { listGames } from '../api/queries';

function Home() {
  const { status, data, error, run } = useAsync();
  if (error) {
    throw error;
  }

  useEffect(() => {
    run(fetchGames());
  }, [run]);

  return (
    <div>
      <h2 className="Title">Play Has No Limits</h2>
      {error && <Message type="failed">Something went wrong...</Message>}
      {status === 'pending' && <span>Loading...</span>}
      {status === 'resolved' && (
        <GameList list={data}>
          {(item) => <Game key={item.id} item={item} />}
        </GameList>
      )}
    </div>
  );
}

async function fetchGames() {
  const data = await API.graphql({ query: listGames, authMode: 'API_KEY' });
  const {
    data: {
      listGames: { items },
    },
  } = data;
  const signedGames = await getSignedGames(items);
  return signedGames;
}

async function getSignedGames(games) {
  const signedGames = await Promise.all(
    games.map(async (item) => {
      const signedUrl = await Storage.get(item.imageKey);
      item.imageUrl = signedUrl;
      return item;
    })
  );
  return signedGames;
}

export default Home;
