import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2500');
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("API Fetch Error:", error);
    return [];
  }
});
export const fetchPokemon = createAsyncThunk('data/fetchPokemon', async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return {[data.name]: data};
  } catch (error) {
    console.error("API Fetch Error:", error);
    return [];
  }
});

const pokeDataSlice = createSlice({
  name: 'pokeData',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    retries: 0,
  },
  reducers: {
    resetRetries(state) {
      state.retries = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.retries = 0;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.retries += 1;
      });
  },
});

const pokemonSlice = createSlice({
  name: 'pokeImg',
  initialState: {
    items: {},
    error: null,
    retries: 0,
  },
  reducers: {
    resetRetries(state) {
      state.retries = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        if (action.payload) {
          state.items = { ...state.items, ...action.payload };
        }
        state.retries = 0;
      })
      .addCase(fetchPokemon.rejected, (state, action) => {
        state.error = action.error.message;
        state.retries += 1;
      });
  },
});

export const { resetRetries: resetDataRetries } = pokeDataSlice.actions;
export const { resetRetries: resetPokemonRetries } = pokemonSlice.actions;
export const pokeDataReducer = pokeDataSlice.reducer;
export const pokemonReducer = pokemonSlice.reducer;
