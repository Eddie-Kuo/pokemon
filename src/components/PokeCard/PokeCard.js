import React from 'react';
import './PokeCard.css';

export default function PokeCard({ pokemon, type_1, type_2, url_image }) {
  return (
    <div className='pokecard'>
      <img src={`${url_image}`}/>
      <h3>{pokemon.toUpperCase()}</h3>
      <p>Type: {type_1}, {type_2}</p>
      {/* <p>Type 2: </p> */}
    </div>
  );
}
