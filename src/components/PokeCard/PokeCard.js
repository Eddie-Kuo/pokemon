import React from 'react';
import './PokeCard.css';

export default function PokeCard({ pokemon, type_1, type_2, url_image, hp }) {
  return (
    <div className='pokecard'>
      <img src={`${url_image}`}/>
      <h3>{pokemon.toUpperCase()}</h3>
      { type_2 === 'NA' ? <p>Type: {type_1}</p> : <p>Type: {type_1}, {type_2}</p> }
      <p>hp: {hp}</p>
      
      
    </div>
  );
}
