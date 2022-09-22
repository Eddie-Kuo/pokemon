import { useState, useEffect } from 'react';
import { fetchPokemon, fetchTypes } from '../services/pokemon';



export function usePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState('');
  const [type, setType] = useState([]);
  const [selectedType, setSelectedType] = useState('all');
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchPokemon(selectedType);
        setPokemon(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
      }
      
    }; loadData();
  }, [selectedType]);
  

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchTypes();
        setType(data.map((type) => type.type));
      } catch (e) {
        setError(e.message);
      }
    }; loadData();
  }, []);
  
  return { pokemon, error, type, setSelectedType, selectedType, loading };
}