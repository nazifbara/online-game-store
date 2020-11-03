import React from 'react';
import './GameList.css';
import { FiDollarSign } from 'react-icons/fi';


function GameList({ list }) {
  return (
    <section className="GameList">
      {list.map(g => 
        <article className="Game" key={g.id}>
          <img alt="" src={g.imageUrl} />
          <h3>{g.title}</h3>
          <span><FiDollarSign/>{g.price}</span>
        </article>  
      )}
    </section>
  );
};

export default GameList;
