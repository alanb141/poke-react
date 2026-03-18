import { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fullPokemons, variantPokemons } from "./store/collection"
import Head from "./layouts/Header";
import Foot from "./layouts/Footer";

import './style/Core.scss';

const Body = lazy(() => import("./layouts/Body"));
const ViewPokemon = lazy(() => import("./layouts/ViewPokemon"));

const INITIAL_PREVIEW = [
  {
    "name": "bulbasaur",
    "id": 1,
    "type": [
      "grass",
      "poison"
    ],
    "gen": "generation-i",
    "regions": {
      "red-blue": 1,
      "gold-silver": 226,
      "heartgold-soulsilver": 231,
      "x-y": 80,
      "lets-go": 1,
      "isle-of-armor": 68,
      "blueberry": 164,
      "legends-za": 148
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "isle-of-armor",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "ivysaur",
    "id": 2,
    "type": [
      "grass",
      "poison"
    ],
    "gen": "generation-i",
    "regions": {
      "red-blue": 2,
      "gold-silver": 227,
      "heartgold-soulsilver": 232,
      "x-y": 81,
      "lets-go": 2,
      "isle-of-armor": 69,
      "blueberry": 165,
      "legends-za": 149
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "isle-of-armor",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "venusaur",
    "id": 3,
    "type": [
      "grass",
      "poison"
    ],
    "gen": "generation-i",
    "regions": {
      "red-blue": 3,
      "gold-silver": 228,
      "heartgold-soulsilver": 233,
      "x-y": 82,
      "lets-go": 3,
      "isle-of-armor": 70,
      "blueberry": 166,
      "legends-za": 150
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "isle-of-armor",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "charmander",
    "id": 4,
    "type": [
      "fire"
    ],
    "gen": "generation-i",
    "regions": {
      "red-blue": 4,
      "gold-silver": 229,
      "heartgold-soulsilver": 234,
      "x-y": 83,
      "lets-go": 4,
      "sword-shield": 378,
      "blueberry": 167,
      "legends-za": 151
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "sword-shield",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "charmeleon",
    "id": 5,
    "type": [
      "fire"
    ],
    "gen": "generation-i",
    "regions": {
      "red-blue": 5,
      "gold-silver": 230,
      "heartgold-soulsilver": 235,
      "x-y": 84,
      "lets-go": 5,
      "sword-shield": 379,
      "blueberry": 168,
      "legends-za": 152
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "sword-shield",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "charizard",
    "id": 6,
    "type": [
      "fire",
      "flying"
    ],
    "gen": "generation-i",
    "regions": {
      "red-blue": 6,
      "gold-silver": 231,
      "heartgold-soulsilver": 236,
      "x-y": 85,
      "lets-go": 6,
      "sword-shield": 380,
      "blueberry": 169,
      "legends-za": 153
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "sword-shield",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "squirtle",
    "id": 7,
    "type": [
      "water"
    ],
    "gen": "generation-i",
    "regions": {
      "red-blue": 7,
      "gold-silver": 232,
      "heartgold-soulsilver": 237,
      "x-y": 86,
      "lets-go": 7,
      "isle-of-armor": 71,
      "blueberry": 170,
      "legends-za": 154
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "isle-of-armor",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "wartortle",
    "id": 8,
    "type": [
      "water"
    ],
    "gen": "generation-i",
    "regions": {
      "red-blue": 8,
      "gold-silver": 233,
      "heartgold-soulsilver": 238,
      "x-y": 87,
      "lets-go": 8,
      "isle-of-armor": 72,
      "blueberry": 171,
      "legends-za": 155
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "isle-of-armor",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "blastoise",
    "id": 9,
    "type": [
      "water"
    ],
    "gen": "generation-i",
    "regions": {
      "red-blue": 9,
      "gold-silver": 234,
      "heartgold-soulsilver": 239,
      "x-y": 88,
      "lets-go": 9,
      "isle-of-armor": 73,
      "blueberry": 172,
      "legends-za": 156
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "isle-of-armor",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "caterpie",
    "id": 10,
    "type": [
      "bug"
    ],
    "gen": "generation-i",
    "regions": {
      "red-blue": 10,
      "gold-silver": 24,
      "heartgold-soulsilver": 24,
      "x-y": 23,
      "sun-moon": 17,
      "ultra-sun-ultra-moon": 17,
      "lets-go": 10,
      "sword-shield": 13
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield"
    ]
  },
  {
    "name": "metapod",
    "id": 11,
    "type": [
      "bug"
    ],
    "gen": "generation-i",
    "regions": {
      "red-blue": 11,
      "gold-silver": 25,
      "heartgold-soulsilver": 25,
      "x-y": 24,
      "sun-moon": 18,
      "ultra-sun-ultra-moon": 18,
      "lets-go": 11,
      "sword-shield": 14
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield"
    ]
  },
  {
    "name": "butterfree",
    "id": 12,
    "type": [
      "bug",
      "flying"
    ],
    "gen": "generation-i",
    "regions": {
      "red-blue": 12,
      "gold-silver": 26,
      "heartgold-soulsilver": 26,
      "x-y": 25,
      "sun-moon": 19,
      "ultra-sun-ultra-moon": 19,
      "lets-go": 12,
      "sword-shield": 15
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield"
    ]
  }
]

function App() {
  const [displayedPokemon, setDisplayedPokemon] = useState(INITIAL_PREVIEW);
  const [filterState, setFilterState] = useState({ type: '', value: 'all' });
  const [theme, setTheme] = useState(localStorage.getItem('pokedex-theme') ?? 'light');
  const [favourites, setFavourites] = useState(() => {
    const saved = localStorage.getItem('poke_favourites');
    return saved ? JSON.parse(saved) : [];
  });
  const allPokemons = fullPokemons.concat(variantPokemons);
  
  const handleFilterSelect = (filterKey, filterType) => {
    setFilterState({ type: filterType, value: filterKey });
    
    if (!filterKey || filterKey === "all") {
      setDisplayedPokemon(fullPokemons);
      return;
    }
    
    if (filterKey === 'favourites') {
      const filtered = allPokemons.filter(p => favourites.includes(p.name));
      setDisplayedPokemon(filtered);
      return;
    }
    const allowedNames = filterType === "game-selector" 
      ? allPokemons.filter(p => p.regions?.[filterKey]).sort((a, b) => a.regions[filterKey] - b.regions[filterKey])
      : fullPokemons.filter(p => p.gen === filterKey);

    if (!allowedNames) return;
    
    const orderedResult = allowedNames.map(pokemon => {
      return allPokemons.find(p => p.name === pokemon.name);
    }).filter(Boolean);

    setDisplayedPokemon(orderedResult);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem('pokedex-theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      localStorage.setItem('pokedex-theme', prefersDark ? 'dark' : 'light');
      setTheme(prefersDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
    setDisplayedPokemon(fullPokemons);
  }, []);
  useEffect(() => {
    localStorage.setItem('poke_favourites', JSON.stringify(favourites));
  }, [favourites]);
  useEffect(() => {
    if (filterState.value === 'favourites') {
      const filtered = fullPokemons.filter(p => favourites.includes(p.name));
      setDisplayedPokemon(filtered);
    }
  }, [favourites, filterState.value]);

  const toggleFavourites = (e, pokemonName) => {
    e.preventDefault();
    e.stopPropagation();
    setFavourites(prev => 
      prev.includes(pokemonName)
      ? prev.filter(name => name !== pokemonName)
      : [...prev, pokemonName]
    );
  }
  
  return (
    <Router>
      <Head />
      <Suspense fallback={null}>
        
        <Routes>
          <Route path="/" element={
            <Body
              data={displayedPokemon}
              onFilterelect={handleFilterSelect}
              currentFilter={filterState}
              toggleFavourites={toggleFavourites}
              favourites={favourites}
            />}
          />
          <Route path="/:name" element={
            <ViewPokemon
              theme={theme}
              pokemonByGame={allPokemons}
            />} />
        </Routes>

      </Suspense>
      <Foot theme={theme} setTheme={setTheme} />
    </Router>
  );
}

export default App;