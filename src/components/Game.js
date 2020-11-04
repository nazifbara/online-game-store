import React from 'react';
import './Game.css';
import { FiDollarSign } from 'react-icons/fi';


function Game({ 
  item, 
  onItemAdd, 
  onItemRemove, 
  cartItems 
}) {
  const existingCartItem = cartItems.findIndex(i => i.id === item.id);
  const isItemOnCart = existingCartItem !== -1;
  return (
    <article className="Game" key={item.id}>
      <img alt="" src={item.imageUrl} />
      <div className="GameMeta">
        <div>
          <h3>{item.title}</h3>
          <span><FiDollarSign/>{item.price}</span>
        </div>
        {isItemOnCart ? (
          <button 
            onClick={() => onItemRemove(item)} 
            style={{backgroundColor: "red"}}
          >
            Remove from cart
          </button>
        ) : (
          <button onClick={() => onItemAdd(item)}>Add to cart</button>
        ) 
        }
      </div>
    </article>
  )
}

export default Game;
