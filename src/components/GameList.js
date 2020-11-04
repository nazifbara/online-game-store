import React from 'react';
import './GameList.css';
import Game from './Game';


function GameList({ 
  list, 
  onItemAdd,
  onItemRemove,
  cartItems 
}) {
  return (
    <section className="GameList">
      {list.map(g => (
        <Game 
          key={g.id} 
          item={g} 
          onItemAdd={onItemAdd}
          onItemRemove={onItemRemove}
          cartItems={cartItems}
        />
      ))}
    </section>
  );
};

export default GameList;
