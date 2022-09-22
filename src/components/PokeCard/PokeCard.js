import React from 'react';
import './PokeCard.css';

export default function PokeCard({ pokemon, type_1, type_2, url_image }) {
  return (
    <div className='pokecard'>
      <img src={`${url_image}`}/>
      <h3>{pokemon}</h3>
      <p>Type 1: {type_1}</p>
      <p>Type 2: {type_2}</p>
    </div>
  );
}
