import React from 'react';
import './GameList.css';

function GameList({ list, children}) {
  return (
    <section className="GameList">
      {list.map(g => children(g))}
    </section>
  );
};

export default GameList;
