import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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

    const trimmedAbilities = baseData.abilities.map(ab => {
      const abilityDetails = fullAbilities[ab.ability.name];
      const englishEntry = abilityDetails.effect_entries?.find(e => e.language.name === 'en');
      return {
        name: ab.ability.name,
        isHidden: ab.is_hidden,
        effect: englishEntry ? englishEntry.effect || englishEntry.short_effect: 'No description available.'
      };
    });

    const englishFlavourText = species.flavor_text_entries?.find(f => f.language.name === 'en')?.flavor_text.replace(/\f/g, ' ');

    return {
      id: baseData.id,
      name: baseData.name,
      types: baseData.types.map(t => t.type.name),
      stats: baseData.stats.map(s => ({name: s.stat.name, value: s.base_stat })),
      weight: baseData.weight,
      height: baseData.height,
      abilities: trimmedAbilities,
      description: englishFlavourText,
      evoChain: evoChain.chain,
      cries: baseData.cries,
      species: species.varieties,

      // baseData: baseData,
      // fullAbilities: fullAbilities
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
    builder
      .addCase(fetchPokemonByName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemonByName.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const actualId = action.payload.id;
        state.pokemonByName[actualId] = action.payload;
      })
      .addCase(fetchPokemonByName.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { resetRetries: resetDataRetries } = pokeDataSlice.actions;
export const pokeDataReducer = pokeDataSlice.reducer;
