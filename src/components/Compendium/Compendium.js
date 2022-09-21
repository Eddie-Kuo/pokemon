import React from 'react';
import './Compendium.css';
import { usePokemon } from '../../hooks/UsePokemon';
import PokeCard from '../PokeCard/PokeCard';

export default function Compendium() {
  const { pokemon } = usePokemon();
  console.log('!!!', pokemon);
  return (
    <main>
      {pokemon.map((poke) => {
        return <PokeCard key={poke.pokemon} {...poke}/>;
      })}
    </main>
  );
}
