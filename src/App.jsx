import './style/Core.scss';
import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fullPokemons } from "./store/collection"
import Head from"./layouts/Header"
import Foot from"./layouts/Footer"
import Body from"./layouts/Body"
import ViewPokemon from "./layouts/ViewPokemon"

function App() {
  return (
    <Router>
      <Head />
        <Routes>
          <Route path="/" element={<Body data={fullPokemons} />} />
          <Route path="/:name" element={<ViewPokemon />} />
        </Routes>
      <Foot />
    </Router>
  );
}

export default App;