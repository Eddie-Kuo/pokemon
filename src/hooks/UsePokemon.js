import { useState, useEffect } from 'react';
import { fetchPokemon } from '../services/pokemon';



export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState('');
  
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPokemon();
        setPokemon(data);
      } catch (e) {
        setError(e.message);
      }
      
    }; loadData();
  }, []);
  return { pokemon, error };
}