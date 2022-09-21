import React from 'react';

export default function PokeCard({ pokemon, type_1 }) {
  return (
    <div>
      <h3>{pokemon}</h3>
      <p>{type_1}</p>
    </div>
  );
}
