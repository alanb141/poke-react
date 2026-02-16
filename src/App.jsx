import './style/Core.scss';
import React, { useState }  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fullPokemons } from "./store/collection"
import { pokemonByGame, pokemonByGen } from './store/gameData';
import Head from"./layouts/Header"
import Foot from"./layouts/Footer"
import Body from"./layouts/Body"
import ViewPokemon from "./layouts/ViewPokemon"

function App() {
  const [canPlay, setCanPlay] = useState(false);
  const handleToggleChange = () => {
    setCanPlay(!canPlay);
  };

  const [displayedPokemon, setDisplayedPokemon] = useState(fullPokemons);
  const [filterState, setFilterState] = useState({type: '', value: 'all'});
  const handleFilterSelect = (filterKey, filterType) => {
    setFilterState({type: filterType, value: filterKey});
    if (!filterKey || filterKey === "all") {
      setDisplayedPokemon(fullPokemons);
      return;
    }
    const orderedSpeciesNames = filterType === "game-selector" ? pokemonByGame[filterKey] : pokemonByGen[filterKey]; 
    const orderedResult = [];

    const speciesSet = new Set(orderedSpeciesNames);
    orderedSpeciesNames.forEach(speciesName => {
      
      // Find matches in your full collection
      const matches = fullPokemons.filter(p => {
        if (p.name === speciesName) return true;
        if (p.name.startsWith(`${speciesName}-`)) {
           if (speciesSet.has(p.name)) return false;
           
           return true;
        }
        return false;
      });

      // Add found items to the result in order
      orderedResult.push(...matches);
    });

    setDisplayedPokemon(orderedResult);
  };

  return (
    <Router>
      <Head />
      <Routes>
        <Route path="/" element={
          <Body data={displayedPokemon} onFilterelect={handleFilterSelect} currentFilter={filterState}/>} />
        <Route path="/:name" element={<ViewPokemon />} />
      </Routes>
      <Foot canPlay={canPlay} handleToggleChange={handleToggleChange} />
    </Router>
  );
}

export default App;