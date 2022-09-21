import React from 'react';
import './PokeCard.css';

export default function PokeCard({ pokemon, type_1 }) {
  return (
    <div className='pokecard'>
      <h3>{pokemon}</h3>
      <p>{type_1}</p>
    </div>
  );
}
