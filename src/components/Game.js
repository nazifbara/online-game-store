import React from 'react';
import Image from 'react-graceful-image';
import './Game.css';
import { printPrice } from '../utility';
import AddToCart from './AddToCart';

function Game({ item }) {
  return (
    <article className="Game" key={item.id}>
      <Image width="300" alt="" src={item.imageUrl} />
      <div className="GameMeta">
        <div>
          <h3>{item.title}</h3>
          <span>{printPrice(item.price)}</span>
        </div>
        <AddToCart item={item} />
      </div>
    </article>
  );
}

export default Game;
