import React from 'react';
import './Compendium.css';
import { usePokemon } from '../../hooks/UsePokemon';
import PokeCard from '../PokeCard/PokeCard';
import Select from '../controls/Select';

export default function Compendium() {
  const { pokemon, type, setSelectedType } = usePokemon();
  

  return (
      
       
    <main>
      <div className='dropdown'>
        <Select options={type} handleSelect={setSelectedType}/>
      </div>
      <div className='cards'>
        {pokemon.map((poke) => {
          return <PokeCard key={poke.pokemon} {...poke}/>;
        })}
      </div>
      
    </main>
    
    
  );
}
