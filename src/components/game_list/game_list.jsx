import React from 'react';
import './game_list.css';

function GameList({ list, children }) {
  return (
    <div className="Container">
      <section className="GameList">{list.map((g) => children(g))}</section>
    </div>
  );
}

export default GameList;
