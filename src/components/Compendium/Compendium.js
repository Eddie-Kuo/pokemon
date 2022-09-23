import React from 'react';
import './Compendium.css';
import { usePokemon } from '../../hooks/UsePokemon';
import PokeCard from '../PokeCard/PokeCard';
import Search from '../controls/Search';
import SelectEl from '../controls/Select';

export default function Compendium() {
  const { pokemon, type, setSelectedType, searched, setSearched } = usePokemon();
 

  

  return (
      
       
    <main>
      <div className='controls'>
        <Search obj={pokemon} handleSearch={setSearched} searched={searched} />
        <SelectEl options={type} handleSelect={setSelectedType}/>
      </div>
      <div className='cards'>
        {pokemon.map((poke) => {
          return <PokeCard key={poke.pokemon} {...poke}/>;
        })}
      </div>
      
    </main>
    
    
  );
}
