import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {pokeDataReducer, pokemonReducer} from './dataSlice';

const rootReducer = combineReducers({
  pokeData: pokeDataReducer,
  pokemon: pokemonReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable warnings about non-serializable values
    }),
});

const persistor = persistStore(store);

export { store, persistor };