// import logo from './logo.svg';
import './style/Core.scss';
import React, { useState, useEffect }  from 'react';
import Head from"./layouts/Header"
import Foot from"./layouts/Footer"
import Body from"./layouts/Body"

function App() {
	const [pokemon, setPokemon] = useState();

  useEffect(() => {
		if (window.localStorage !== undefined) {
			const data = window.localStorage.getItem('pokemon');
			if (data !== null) {setPokemon(JSON.parse(data))};
		}
	}, []);

  function getPokemon(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('pokemon', JSON.stringify(data));
        setPokemon(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  
  if (pokemon === undefined) {
    getPokemon('https://pokeapi.co/api/v2/pokemon?limit=2500');
  }
  if (pokemon !== undefined) {
    return (
      <>
        <Head />
        <Body data={pokemon} getPokemon={getPokemon}/>
        <Foot />
      </>
    );
  }
}

export default App;