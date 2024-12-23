import './style/Core.scss';
import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './store/dataSlice';

import Head from"./layouts/Header"
import Foot from"./layouts/Footer"
import Body from"./layouts/Body"

function App() {
  const dispatch = useDispatch();
  const { items, status, error, retries } = useSelector((state) => state.pokeData);
  useEffect(() => {
    if (status !== 'succeeded' && status !== 'loading' && retries < 3 && !items.length) {
      dispatch(fetchData());
    }
  }, [dispatch, status, retries, items.length]);
  
  return (
    <>
      <Head />
      {status === "loading" ?
        <div>Loading...</div>
        :
        status === 'failed' ?
        <div>Error: {error}</div>
        :
        <Body data={items}/>
      }
      <Foot />
    </>
  );
}

export default App;