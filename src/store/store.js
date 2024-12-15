import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { thunk } from 'redux-thunk';
import {pokeDataReducer} from './dataSlice';

// const rootReducer = combineReducers({
//   data: dataReducer,
// });
// Combine multiple reducers
const rootReducer = combineReducers({
  pokeData: pokeDataReducer,
  // pokeImg: pokeImgReducer,
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