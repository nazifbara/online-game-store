import React from 'react';
import './Game.css';
import { FiDollarSign } from 'react-icons/fi';

function Game({ item }) {
  return (
    <article className="Game" key={item.id}>
      <img alt="" src={item.imageUrl} />
      <h3>{item.title}</h3>
      <span><FiDollarSign/>{item.price}</span>
    </article>
  )
}

export default Game;
