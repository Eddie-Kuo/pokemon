import React from 'react';
import './Compendium.css';
import { usePokemon } from '../../hooks/UsePokemon';
import PokeCard from '../PokeCard/PokeCard';

export default function Compendium() {
  return (
    <main>
      {usePokemon.map((poke) => {
        <PokeCard key={poke._id}/>;
      })}
    </main>
  );
}
