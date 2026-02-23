import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/es/storage/session';
import {pokeDataReducer} from './dataSlice';

const rootReducer = combineReducers({
  pokeData: pokeDataReducer,
});

const persistConfig = {
  key: 'root',
  storage: sessionStorage
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