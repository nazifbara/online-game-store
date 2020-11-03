import React from 'react';
import './Game.css';
import { FiDollarSign } from 'react-icons/fi';


function Game({ item }) {
  return (
    <article className="Game" key={item.id}>
      <img alt="" src={item.imageUrl} />
      <div className="GameMeta">
        <div>
          <h3>{item.title}</h3>
          <span><FiDollarSign/>{item.price}</span>
        </div>
        <button>Add to cart</button>
      </div>
    </article>
  )
}

export default Game;
