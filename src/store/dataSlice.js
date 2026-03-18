import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { VARIANT_EVO_MAP } from './variantMaps';

export const fetchPokemonByName = createAsyncThunk('data/fetchPokemonByName', async (name) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const baseData = await response.json();
    const fullAbilities = {};
    let species = {};

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

    const idStr = baseData.id.toString();
    let finalEvoPath = [];

    const mapToTree = (pathArray) => {
      return pathArray.reduceRight((acc, current) => {
        if (Array.isArray(current)) {
          return current.map(item => ({
            ...item,
            evolves_to: item.evolves_to || (acc ? [acc] : [])
          }));
        }
        return {
          ...current,
          evolves_to: acc ? (Array.isArray(acc) ? acc : [acc]) : []
        };
      }, null);
    };

    if ( VARIANT_EVO_MAP[idStr]) {
      finalEvoPath = mapToTree(VARIANT_EVO_MAP[idStr].path);
    } else {
      const flatten = (node) => {
        const stage = {
          name: node.species.name,
          id: node.species.url.split('/').filter(Boolean).pop(),
          evolution_details: node.evolution_details.map(d => ({
            trigger: d.trigger?.name || null,
            min_level: d.min_level || null,
            gender: d.gender || null,
            held_item: d.held_item?.name || null,
            item: d.item?.name || null,
            known_move: d.known_move?.name || null,
            known_move_type: d.known_move_type?.name || null,
            location: d.location || null,
            min_affection: d.min_affection || null,
            min_beauty: d.min_beauty || null,
            min_damage_taken: d.min_damage_taken || null,
            min_happiness: d.min_happiness || null,
            min_move_count: d.min_move_count || null,
            min_steps: d.min_steps || null,
            needs_overworld_rain: d.needs_overworld_rain || false,
            party_species: d.party_species?.name || null,
            party_type: d.party_type?.name || null,
            region_id: d.region_id || null,
            region: d.region || null,
            relative_physical_stats: d.relative_physical_stats !== null ? d.relative_physical_stats : null,
            time_of_day: d.time_of_day || null,
            trade_species: d.trade_species?.name || null,
            turn_upside_down: d.turn_upside_down || false,
            used_move: d.used_move?.name || null
          }))
        };
        
        return {
          ...stage,
          evolves_to: node.evolves_to.map(branch => flatten(branch))
        };
      };
      finalEvoPath = flatten(evoChainData.chain);
    }
    const labelId = species.varieties[0].pokemon.url.split("/").filter(s => s !== "").pop();
    
    return {
      id: baseData.id,
      labelId: labelId,
      name: baseData.name,
      types: baseData.types.map(t => t.type.name),
      stats: baseData.stats.map(s => ({name: s.stat.name, value: s.base_stat })),
      weight: baseData.weight,
      height: baseData.height,
      abilities: trimmedAbilities,
      description: englishFlavourText,
      cries: baseData.cries,
      species: species.varieties,
      evoChain: finalEvoPath,

      // baseData: baseData,
      // evoChain2: evoChainData.chain,
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
