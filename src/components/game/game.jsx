import React from 'react';
import Image from 'react-graceful-image';
import './game.css';
import { printPrice } from '../../utils';
import AddToCart from '../add_to_cart';

function Game({ item }) {
  return (
    <article className="Game" key={item.id}>
      <Image width="100%" alt="" src={item.imageUrl} />
      <h3>{item.title}</h3>
      <span>{printPrice(item.price)}</span>
      <AddToCart item={item} />
    </article>
  );
}

export default Game;
