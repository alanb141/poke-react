import './style/Core.scss';
import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './store/dataSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Head from"./layouts/Header"
import Foot from"./layouts/Footer"
import Body from"./layouts/Body"
import ViewPokemon from "./layouts/ViewPokemon"
import Loading from './components/Loading';

function App() {
  const dispatch = useDispatch();
  const { items, status, error, retries } = useSelector((state) => state.pokeData);
  useEffect(() => {
    if (status !== 'succeeded' && status !== 'loading' && retries < 3 && !items.length) {
      dispatch(fetchData());
    }
  }, [dispatch, status, retries, items.length]);
  
  return (
    <Router>
      <Head />
      {status === "loading" ?
        <Loading />
        :
        status === 'failed' ?
        <div>Error: {error}</div>
        :
        <Routes>
          <Route path="/" element={<Body data={items} />} />
          <Route path="/:name" element={<ViewPokemon />} />
        </Routes>
      }
      <Foot />
    </Router>
  );
}

export default App;