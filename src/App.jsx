import './style/Core.scss';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fullPokemons } from "./store/collection"
import { pokemonByGame, pokemonByGen } from './store/gameData';
import Head from "./layouts/Header"
import Foot from "./layouts/Footer"
import Body from "./layouts/Body"
import ViewPokemon from "./layouts/ViewPokemon"

function App() {
  const [displayedPokemon, setDisplayedPokemon] = useState(fullPokemons);
  const [filterState, setFilterState] = useState({ type: '', value: 'all' });
  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem('poke_favourites');
    return saved ? JSON.parse(saved) : [];
  });
  const handleFilterSelect = (filterKey, filterType) => {
    setFilterState({ type: filterType, value: filterKey });
    if (!filterKey || filterKey === "all") {
      setDisplayedPokemon(fullPokemons);
      return;
    }
    if (filterKey === 'favourites') {
      setFilterState({ type: 'special', value: 'favourites' });
      const filtered = fullPokemons.filter(p => favourites.includes(p.name));
      setDisplayedPokemon(filtered);
      return;
    }

    const orderedSpeciesNames = filterType === "game-selector" ? pokemonByGame[filterKey] : pokemonByGen[filterKey];
    const orderedResult = [];

    const speciesSet = new Set(orderedSpeciesNames);
    orderedSpeciesNames.forEach(speciesName => {
      const matches = fullPokemons.filter(p => {
        if (p.name === speciesName) return true;
        if (p.name.startsWith(`${speciesName}-`)) {
          if (speciesName === 'porygon' && p.name === 'porygon-z') return false;
          if (speciesSet.has(p.name)) return false;
          return true;
        }
        return false;
      });
      orderedResult.push(...matches);
    });

    setDisplayedPokemon(orderedResult);
  };

  useEffect(() => {
    localStorage.setItem('poke_favourites', JSON.stringify(favourites));
  }, [favourites]);
  useEffect(() => {
    if (filterState.value === 'favourites') {
      const filtered = fullPokemons.filter(p => favourites.includes(p.name));
      setDisplayedPokemon(filtered);
    }
  }, [favourites, filterState.value]);

  const toggleFavourites = (e, pokemonName) => {
    e.preventDefault();
    e.stopPropagation();
    setFavourites(prev => 
      prev.includes(pokemonName)
      ? prev.filter(name => name !== pokemonName)
      : [...prev, pokemonName]
    );
  }

  return (
    <Router>
      <Head />
      <Routes>
        <Route path="/" element={
          <Body
            data={displayedPokemon}
            onFilterelect={handleFilterSelect}
            currentFilter={filterState}
            toggleFavourites={toggleFavourites}
            favourites={favourites}
            setFavourites={setFavourites}
          />}
        />
        <Route path="/:name" element={<ViewPokemon />} />
      </Routes>
      <Foot />
    </Router>
  );
}

export default App;