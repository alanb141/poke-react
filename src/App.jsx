// import logo from './logo.svg';
// import './App.css';/
import React, { useState, useEffect }  from 'react';
import Head from"./layouts/Header"
import Foot from"./layouts/Footer"
import Body from"./layouts/Body"

function App() {
	const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
		if (window.localStorage !== undefined) {
			const data = window.localStorage.getItem('pokemon');
			if (data !== null) {setPokemon(JSON.parse(data))};
		}
	}, []);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=3')
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem('pokemon', JSON.stringify(data));
        setPokemon([data]);
        console.log(pokemon);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="App">
      <Head />
      {pokemon && <pre>{JSON.stringify(pokemon, null, 4)}</pre>}
      <Body />
      <Foot />
    </div>
  );
}

export default App;