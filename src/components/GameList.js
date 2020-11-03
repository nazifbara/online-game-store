import React from 'react';
import './GameList.css';
import Game from './Game';


function GameList({ list }) {
  return (
    <section className="GameList">
      {list.map(g => <Game item={g} />)}
    </section>
  );
};

export default GameList;
