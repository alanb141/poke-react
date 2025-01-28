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

export const fetchPokemonByName = createAsyncThunk('data/fetchPokemonByName', async (name) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const baseData = await response.json();
    const fullAbilities = {};
    let species = {};
    let evoChain = {};

    for (const abilityInfo of baseData.abilities) {
      const abilityResponse = await fetch(abilityInfo.ability.url);
      if (!abilityResponse.ok) {
        throw new Error(`Error fetching ability: ${abilityResponse.statusText}`);
      }
      const abilityData = await abilityResponse.json();
      fullAbilities[abilityData.name] = abilityData;
    }

    const speciesResponse = await fetch(baseData.species.url);
    if (!speciesResponse.ok) {
      throw new Error(`Error fetching species: ${speciesResponse.statusText}`);
    }
    const speciesData = await speciesResponse.json();
    species = speciesData;

    const evoChainResponse = await fetch(species.evolution_chain.url);
    if (!evoChainResponse.ok) {
      throw new Error(`Error fetching evolution chain: ${evoChainResponse.statusText}`);
    }
    const evoChainData = await evoChainResponse.json();
    evoChain = evoChainData;

    return {
      ...baseData,
      fullAbilities,
      species,
      evoChain
    };
  } catch (error) {
    console.error("API Fetch Error:", error);
    throw error;
  }
});

const pokeDataSlice = createSlice({
  name: 'pokeData',
  initialState: {
    items: [],
    pokemonByName: {},
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
    // Handle fetchData
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
    // Handle fetchPokemonByName
    builder
      .addCase(fetchPokemonByName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemonByName.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const name = action.meta.arg;
        state.pokemonByName = { [name]: action.payload };
      })
      .addCase(fetchPokemonByName.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { resetRetries: resetDataRetries } = pokeDataSlice.actions;
export const pokeDataReducer = pokeDataSlice.reducer;
