export const excludedNames = [
  'deoxys-normal', 'wormadam-plant', 'giratina-altered', 'shaymin-land',
  'basculin-red-striped', 'darmanitan-standard', 'tornadus-incarnate',
  'thundurus-incarnate', 'landorus-incarnate', 'keldeo-ordinary',
  'meloetta-aria', 'meowstic-male', 'aegislash-shield', 'pumpkaboo-average',
  'gourgeist-average', 'zygarde-50', 'oricorio-baile', 'lycanroc-midday',
  'wishiwashi-solo', 'minior-red-meteor', 'mimikyu-disguised',
  'toxtricity-amped', 'eiscue-ice', 'indeedee-male', 'morpeko-full-belly',
  'urshifu-single-strike', 'basculegion-male', 'enamorus-incarnate', '', "oinkologne-male", "maushold-family-of-four", "squawkabilly-green-plumage", "palafin-zero", "tatsugiri-curly", "dudunsparce-two-segment"
];
export const replaceDash = ["great-tusk", "scream-tail", "brute-bonnet", "flutter-mane", "slither-wing", "sandy-shocks", "walking-wake", "gouging-fire", "raging-bolt", "iron-treads", "iron-bundle", "iron-hands", "iron-jugulis", "iron-moth", "iron-thorns", "iron-valiant", "iron-leaves", "iron-boulder", "iron-crown", "mr-mime", "mime-jr", "mr-rime", "tapu-koko", "tapu-lele", "tapu-bulu", "tapu-fini",];

export const applinFamily = ["applin", "flapple", "appletun", "dipplin", "hydrapple"];

export const wurmpleFamily = ["wurmple", "silcoon", "cascoon", "beautify", "dustox"];

export const evolutionExceptions = ["eevee", "vaporeon", "jolteon", "flareon", "espeon", "umbreon", "leafeon", "glaceon", "sylveon", "magnemite", "magneton", "magnezone", "grubbin", "charjabug", "vikavolt"];

export const genArray = [
  ["generation-i", "generation-ii", "generation-iii", "generation-iv", "generation-v", "generation-vi", "generation-vii", "generation-viii", "generation-ix"],
  ["Generation I", "Generation II", "Generation III", "Generation IV", "Generation V", "Generation VI", "Generation VII", "Generation VIII", "Generation IX"]
];
export const gameArray = [
  ["red-blue", "gold-silver", "ruby-sapphire", "diamond-pearl", "platinum", "heartgold-soulsilver", "black-white", "black-2-white-2", "x-y", "omega-ruby-alpha-sapphire", "sun-moon", "ultra-sun-ultra-moon", "sword-shield", "legends-arceus", "scarlet-violet", "legends-za"],
  ["Red / Blue", "Gold / Silver", "Ruby / Sapphire", "Diamond / Pearl", "Platinum", "HeartGold / SoulSilver", "Black / White", "Black 2 / White 2", "X / Y", "Omega Ruby / Alpha Sapphire", "Sun / Moon", "Ultra Sun / Ultra Moon", "Sword / Shield", "Legends: Arceus", "Scarlet / Violet", "Legends: ZA"]
];

export const types = [
  "Bug",
  "Dark",
  "Dragon",
  "Electric",
  "Fairy",
  "Fighting",
  "Fire",
  "Flying",
  "Ghost",
  "Grass",
  "Ground",
  "Ice",
  "Normal",
  "Poison",
  "Psychic",
  "Rock",
  "Steel",
  "Water"
]
export const typeStates = {
  "fairy": {
    "double_damage_from": [
      "poison",
      "steel"
    ],
    "double_damage_to": [
      "fighting",
      "dragon",
      "dark"
    ],
    "half_damage_from": [
      "fighting",
      "bug",
      "dark"
    ],
    "half_damage_to": [
      "poison",
      "steel",
      "fire"
    ],
    "no_damage_from": [
      "dragon"
    ],
    "no_damage_to": []
  },
  "steel": {
    "double_damage_from": [
      "fighting",
      "ground",
      "fire"
    ],
    "double_damage_to": [
      "rock",
      "ice",
      "fairy"
    ],
    "half_damage_from": [
      "normal",
      "flying",
      "rock",
      "bug",
      "steel",
      "grass",
      "psychic",
      "ice",
      "dragon",
      "fairy"
    ],
    "half_damage_to": [
      "steel",
      "fire",
      "water",
      "electric"
    ],
    "no_damage_from": [
      "poison"
    ],
    "no_damage_to": []
  },
  "flying": {
    "double_damage_from": [
      "rock",
      "electric",
      "ice"
    ],
    "double_damage_to": [
      "fighting",
      "bug",
      "grass"
    ],
    "half_damage_from": [
      "fighting",
      "bug",
      "grass"
    ],
    "half_damage_to": [
      "rock",
      "steel",
      "electric"
    ],
    "no_damage_from": [
      "ground"
    ],
    "no_damage_to": []
  },
  "poison": {
    "double_damage_from": [
      "ground",
      "psychic"
    ],
    "double_damage_to": [
      "grass",
      "fairy"
    ],
    "half_damage_from": [
      "fighting",
      "poison",
      "bug",
      "grass",
      "fairy"
    ],
    "half_damage_to": [
      "poison",
      "ground",
      "rock",
      "ghost"
    ],
    "no_damage_from": [],
    "no_damage_to": [
      "steel"
    ]
  },
  "ghost": {
    "double_damage_from": [
      "ghost",
      "dark"
    ],
    "double_damage_to": [
      "ghost",
      "psychic"
    ],
    "half_damage_from": [
      "poison",
      "bug"
    ],
    "half_damage_to": [
      "dark"
    ],
    "no_damage_from": [
      "normal",
      "fighting"
    ],
    "no_damage_to": [
      "normal"
    ]
  },
  "fire": {
    "double_damage_from": [
      "ground",
      "rock",
      "water"
    ],
    "double_damage_to": [
      "bug",
      "steel",
      "grass",
      "ice"
    ],
    "half_damage_from": [
      "bug",
      "steel",
      "fire",
      "grass",
      "ice",
      "fairy"
    ],
    "half_damage_to": [
      "rock",
      "fire",
      "water",
      "dragon"
    ],
    "no_damage_from": [],
    "no_damage_to": []
  },
  "bug": {
    "double_damage_from": [
      "flying",
      "rock",
      "fire"
    ],
    "double_damage_to": [
      "grass",
      "psychic",
      "dark"
    ],
    "half_damage_from": [
      "fighting",
      "ground",
      "grass"
    ],
    "half_damage_to": [
      "fighting",
      "flying",
      "poison",
      "ghost",
      "steel",
      "fire",
      "fairy"
    ],
    "no_damage_from": [],
    "no_damage_to": []
  },
  "rock": {
    "double_damage_from": [
      "fighting",
      "ground",
      "steel",
      "water",
      "grass"
    ],
    "double_damage_to": [
      "flying",
      "bug",
      "fire",
      "ice"
    ],
    "half_damage_from": [
      "normal",
      "flying",
      "poison",
      "fire"
    ],
    "half_damage_to": [
      "fighting",
      "ground",
      "steel"
    ],
    "no_damage_from": [],
    "no_damage_to": []
  },
  "grass": {
    "double_damage_from": [
      "flying",
      "poison",
      "bug",
      "fire",
      "ice"
    ],
    "double_damage_to": [
      "ground",
      "rock",
      "water"
    ],
    "half_damage_from": [
      "ground",
      "water",
      "grass",
      "electric"
    ],
    "half_damage_to": [
      "flying",
      "poison",
      "bug",
      "steel",
      "fire",
      "grass",
      "dragon"
    ],
    "no_damage_from": [],
    "no_damage_to": []
  },
  "ice": {
    "double_damage_from": [
      "fighting",
      "rock",
      "steel",
      "fire"
    ],
    "double_damage_to": [
      "flying",
      "ground",
      "grass",
      "dragon"
    ],
    "half_damage_from": [
      "ice"
    ],
    "half_damage_to": [
      "steel",
      "fire",
      "water",
      "ice"
    ],
    "no_damage_from": [],
    "no_damage_to": []
  },
  "ground": {
    "double_damage_from": [
      "water",
      "grass",
      "ice"
    ],
    "double_damage_to": [
      "poison",
      "rock",
      "steel",
      "fire",
      "electric"
    ],
    "half_damage_from": [
      "poison",
      "rock"
    ],
    "half_damage_to": [
      "bug",
      "grass"
    ],
    "no_damage_from": [
      "electric"
    ],
    "no_damage_to": [
      "flying"
    ]
  },
  "fighting": {
    "double_damage_from": [
      "flying",
      "psychic",
      "fairy"
    ],
    "double_damage_to": [
      "normal",
      "rock",
      "steel",
      "ice",
      "dark"
    ],
    "half_damage_from": [
      "rock",
      "bug",
      "dark"
    ],
    "half_damage_to": [
      "flying",
      "poison",
      "bug",
      "psychic",
      "fairy"
    ],
    "no_damage_from": [],
    "no_damage_to": [
      "ghost"
    ]
  },
  "dark": {
    "double_damage_from": [
      "fighting",
      "bug",
      "fairy"
    ],
    "double_damage_to": [
      "ghost",
      "psychic"
    ],
    "half_damage_from": [
      "ghost",
      "dark"
    ],
    "half_damage_to": [
      "fighting",
      "dark",
      "fairy"
    ],
    "no_damage_from": [
      "psychic"
    ],
    "no_damage_to": []
  },
  "electric": {
    "double_damage_from": [
      "ground"
    ],
    "double_damage_to": [
      "flying",
      "water"
    ],
    "half_damage_from": [
      "flying",
      "steel",
      "electric"
    ],
    "half_damage_to": [
      "grass",
      "electric",
      "dragon"
    ],
    "no_damage_from": [],
    "no_damage_to": [
      "ground"
    ]
  },
  "dragon": {
    "double_damage_from": [
      "ice",
      "dragon",
      "fairy"
    ],
    "double_damage_to": [
      "dragon"
    ],
    "half_damage_from": [
      "fire",
      "water",
      "grass",
      "electric"
    ],
    "half_damage_to": [
      "steel"
    ],
    "no_damage_from": [],
    "no_damage_to": [
      "fairy"
    ]
  },
  "psychic": {
    "double_damage_from": [
      "bug",
      "ghost",
      "dark"
    ],
    "double_damage_to": [
      "fighting",
      "poison"
    ],
    "half_damage_from": [
      "fighting",
      "psychic"
    ],
    "half_damage_to": [
      "steel",
      "psychic"
    ],
    "no_damage_from": [],
    "no_damage_to": [
      "dark"
    ]
  },
  "water": {
    "double_damage_from": [
      "grass",
      "electric"
    ],
    "double_damage_to": [
      "ground",
      "rock",
      "fire"
    ],
    "half_damage_from": [
      "steel",
      "fire",
      "water",
      "ice"
    ],
    "half_damage_to": [
      "water",
      "grass",
      "dragon"
    ],
    "no_damage_from": [],
    "no_damage_to": []
  },
  "normal": {
    "double_damage_from": [
      "fighting"
    ],
    "double_damage_to": [],
    "half_damage_from": [],
    "half_damage_to": [
      "rock",
      "steel"
    ],
    "no_damage_from": [
      "ghost"
    ],
    "no_damage_to": [
      "ghost"
    ]
  }
};


export const mockPokemons = [
  {
    "name": "bulbasaur",
    "url": "https://pokeapi.co/api/v2/pokemon/1/",
    "id": 1,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  {
    "name": "ivysaur",
    "url": "https://pokeapi.co/api/v2/pokemon/2/",
    "id": 2,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
  },
  {
    "name": "venusaur",
    "url": "https://pokeapi.co/api/v2/pokemon/3/",
    "id": 3,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  },
  {
    "name": "charmander",
    "url": "https://pokeapi.co/api/v2/pokemon/4/",
    "id": 4,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
  {
    "name": "charmeleon",
    "url": "https://pokeapi.co/api/v2/pokemon/5/",
    "id": 5,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
  },
  {
    "name": "charizard",
    "url": "https://pokeapi.co/api/v2/pokemon/6/",
    "id": 6,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
  },
  {
    "name": "squirtle",
    "url": "https://pokeapi.co/api/v2/pokemon/7/",
    "id": 7,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  },
  {
    "name": "wartortle",
    "url": "https://pokeapi.co/api/v2/pokemon/8/",
    "id": 8,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
  },
  {
    "name": "blastoise",
    "url": "https://pokeapi.co/api/v2/pokemon/9/",
    "id": 9,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
  }
];
export const fullPokemons = [
  {
    "name": "bulbasaur",
    "id": 1,
    "type": [
      "grass",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg"
  },
  {
    "name": "ivysaur",
    "id": 2,
    "type": [
      "grass",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/2/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/2.ogg"
  },
  {
    "name": "venusaur",
    "id": 3,
    "type": [
      "grass",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/3/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/3.ogg"
  },
  {
    "name": "charmander",
    "id": 4,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/4/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/4.ogg"
  },
  {
    "name": "charmeleon",
    "id": 5,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/5/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/5.ogg"
  },
  {
    "name": "charizard",
    "id": 6,
    "type": [
      "fire",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/6/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/6.ogg"
  },
  {
    "name": "squirtle",
    "id": 7,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/7/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/7.ogg"
  },
  {
    "name": "wartortle",
    "id": 8,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/8/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/8.ogg"
  },
  {
    "name": "blastoise",
    "id": 9,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/9/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/9.ogg"
  },
  {
    "name": "caterpie",
    "id": 10,
    "type": [
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/10/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10.ogg"
  },
  {
    "name": "metapod",
    "id": 11,
    "type": [
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/11/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/11.ogg"
  },
  {
    "name": "butterfree",
    "id": 12,
    "type": [
      "bug",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/12/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/12.ogg"
  },
  {
    "name": "weedle",
    "id": 13,
    "type": [
      "bug",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/13/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/13.ogg"
  },
  {
    "name": "kakuna",
    "id": 14,
    "type": [
      "bug",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/14/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/14.ogg"
  },
  {
    "name": "beedrill",
    "id": 15,
    "type": [
      "bug",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/15/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/15.ogg"
  },
  {
    "name": "pidgey",
    "id": 16,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/16/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/16.ogg"
  },
  {
    "name": "pidgeotto",
    "id": 17,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/17/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/17.ogg"
  },
  {
    "name": "pidgeot",
    "id": 18,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/18/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/18.ogg"
  },
  {
    "name": "rattata",
    "id": 19,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/19/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/19.ogg"
  },
  {
    "name": "raticate",
    "id": 20,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/20/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/20.ogg"
  },
  {
    "name": "spearow",
    "id": 21,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/21/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/21.ogg"
  },
  {
    "name": "fearow",
    "id": 22,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/22/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/22.ogg"
  },
  {
    "name": "ekans",
    "id": 23,
    "type": [
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/23/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/23.ogg"
  },
  {
    "name": "arbok",
    "id": 24,
    "type": [
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/24/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/24.ogg"
  },
  {
    "name": "pikachu",
    "id": 25,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/25/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/25.ogg"
  },
  {
    "name": "raichu",
    "id": 26,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/26/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/26.ogg"
  },
  {
    "name": "sandshrew",
    "id": 27,
    "type": [
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/27/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/27.ogg"
  },
  {
    "name": "sandslash",
    "id": 28,
    "type": [
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/28/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/28.ogg"
  },
  {
    "name": "nidoran-f",
    "id": 29,
    "type": [
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/29/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/29.ogg"
  },
  {
    "name": "nidorina",
    "id": 30,
    "type": [
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/30/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/30.ogg"
  },
  {
    "name": "nidoqueen",
    "id": 31,
    "type": [
      "poison",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/31/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/31.ogg"
  },
  {
    "name": "nidoran-m",
    "id": 32,
    "type": [
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/32/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/32.ogg"
  },
  {
    "name": "nidorino",
    "id": 33,
    "type": [
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/33/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/33.ogg"
  },
  {
    "name": "nidoking",
    "id": 34,
    "type": [
      "poison",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/34/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/34.ogg"
  },
  {
    "name": "clefairy",
    "id": 35,
    "type": [
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/35/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/35.ogg"
  },
  {
    "name": "clefable",
    "id": 36,
    "type": [
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/36/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/36.ogg"
  },
  {
    "name": "vulpix",
    "id": 37,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/37/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/37.ogg"
  },
  {
    "name": "ninetales",
    "id": 38,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/38/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/38.ogg"
  },
  {
    "name": "jigglypuff",
    "id": 39,
    "type": [
      "normal",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/39/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/39.ogg"
  },
  {
    "name": "wigglytuff",
    "id": 40,
    "type": [
      "normal",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/40/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/40.ogg"
  },
  {
    "name": "zubat",
    "id": 41,
    "type": [
      "poison",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/41/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/41.ogg"
  },
  {
    "name": "golbat",
    "id": 42,
    "type": [
      "poison",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/42/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/42.ogg"
  },
  {
    "name": "oddish",
    "id": 43,
    "type": [
      "grass",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/43/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/43.ogg"
  },
  {
    "name": "gloom",
    "id": 44,
    "type": [
      "grass",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/44/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/44.ogg"
  },
  {
    "name": "vileplume",
    "id": 45,
    "type": [
      "grass",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/45/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/45.ogg"
  },
  {
    "name": "paras",
    "id": 46,
    "type": [
      "bug",
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/46/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/46.ogg"
  },
  {
    "name": "parasect",
    "id": 47,
    "type": [
      "bug",
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/47/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/47.ogg"
  },
  {
    "name": "venonat",
    "id": 48,
    "type": [
      "bug",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/48/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/48.ogg"
  },
  {
    "name": "venomoth",
    "id": 49,
    "type": [
      "bug",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/49/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/49.ogg"
  },
  {
    "name": "diglett",
    "id": 50,
    "type": [
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/50/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/50.ogg"
  },
  {
    "name": "dugtrio",
    "id": 51,
    "type": [
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/51/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/51.ogg"
  },
  {
    "name": "meowth",
    "id": 52,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/52/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/52.ogg"
  },
  {
    "name": "persian",
    "id": 53,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/53/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/53.ogg"
  },
  {
    "name": "psyduck",
    "id": 54,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/54/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/54.ogg"
  },
  {
    "name": "golduck",
    "id": 55,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/55/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/55.ogg"
  },
  {
    "name": "mankey",
    "id": 56,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/56/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/56.ogg"
  },
  {
    "name": "primeape",
    "id": 57,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/57/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/57.ogg"
  },
  {
    "name": "growlithe",
    "id": 58,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/58/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/58.ogg"
  },
  {
    "name": "arcanine",
    "id": 59,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/59/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/59.ogg"
  },
  {
    "name": "poliwag",
    "id": 60,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/60/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/60.ogg"
  },
  {
    "name": "poliwhirl",
    "id": 61,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/61/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/61.ogg"
  },
  {
    "name": "poliwrath",
    "id": 62,
    "type": [
      "water",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/62/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/62.ogg"
  },
  {
    "name": "abra",
    "id": 63,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/63/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/63.ogg"
  },
  {
    "name": "kadabra",
    "id": 64,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/64/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/64.ogg"
  },
  {
    "name": "alakazam",
    "id": 65,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/65/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/65.ogg"
  },
  {
    "name": "machop",
    "id": 66,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/66/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/66.ogg"
  },
  {
    "name": "machoke",
    "id": 67,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/67/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/67.ogg"
  },
  {
    "name": "machamp",
    "id": 68,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/68/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/68.ogg"
  },
  {
    "name": "bellsprout",
    "id": 69,
    "type": [
      "grass",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/69/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/69.ogg"
  },
  {
    "name": "weepinbell",
    "id": 70,
    "type": [
      "grass",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/70/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/70.ogg"
  },
  {
    "name": "victreebel",
    "id": 71,
    "type": [
      "grass",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/71/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/71.ogg"
  },
  {
    "name": "tentacool",
    "id": 72,
    "type": [
      "water",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/72/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/72.ogg"
  },
  {
    "name": "tentacruel",
    "id": 73,
    "type": [
      "water",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/73/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/73.ogg"
  },
  {
    "name": "geodude",
    "id": 74,
    "type": [
      "rock",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/74/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/74.ogg"
  },
  {
    "name": "graveler",
    "id": 75,
    "type": [
      "rock",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/75/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/75.ogg"
  },
  {
    "name": "golem",
    "id": 76,
    "type": [
      "rock",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/76/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/76.ogg"
  },
  {
    "name": "ponyta",
    "id": 77,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/77/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/77.ogg"
  },
  {
    "name": "rapidash",
    "id": 78,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/78/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/78.ogg"
  },
  {
    "name": "slowpoke",
    "id": 79,
    "type": [
      "water",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/79/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/79.ogg"
  },
  {
    "name": "slowbro",
    "id": 80,
    "type": [
      "water",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/80/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/80.ogg"
  },
  {
    "name": "magnemite",
    "id": 81,
    "type": [
      "electric",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/81/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/81.ogg"
  },
  {
    "name": "magneton",
    "id": 82,
    "type": [
      "electric",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/82/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/82.ogg"
  },
  {
    "name": "farfetchd",
    "id": 83,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/83/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/83.ogg"
  },
  {
    "name": "doduo",
    "id": 84,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/84/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/84.ogg"
  },
  {
    "name": "dodrio",
    "id": 85,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/85/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/85.ogg"
  },
  {
    "name": "seel",
    "id": 86,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/86/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/86.ogg"
  },
  {
    "name": "dewgong",
    "id": 87,
    "type": [
      "water",
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/87/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/87.ogg"
  },
  {
    "name": "grimer",
    "id": 88,
    "type": [
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/88/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/88.ogg"
  },
  {
    "name": "muk",
    "id": 89,
    "type": [
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/89/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/89.ogg"
  },
  {
    "name": "shellder",
    "id": 90,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/90/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/90.ogg"
  },
  {
    "name": "cloyster",
    "id": 91,
    "type": [
      "water",
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/91/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/91.ogg"
  },
  {
    "name": "gastly",
    "id": 92,
    "type": [
      "ghost",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/92/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/92.ogg"
  },
  {
    "name": "haunter",
    "id": 93,
    "type": [
      "ghost",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/93/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/93.ogg"
  },
  {
    "name": "gengar",
    "id": 94,
    "type": [
      "ghost",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/94/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/94.ogg"
  },
  {
    "name": "onix",
    "id": 95,
    "type": [
      "rock",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/95/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/95.ogg"
  },
  {
    "name": "drowzee",
    "id": 96,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/96/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/96.ogg"
  },
  {
    "name": "hypno",
    "id": 97,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/97/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/97.ogg"
  },
  {
    "name": "krabby",
    "id": 98,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/98/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/98.ogg"
  },
  {
    "name": "kingler",
    "id": 99,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/99/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/99.ogg"
  },
  {
    "name": "voltorb",
    "id": 100,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/100/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/100.ogg"
  },
  {
    "name": "electrode",
    "id": 101,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/101/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/101.ogg"
  },
  {
    "name": "exeggcute",
    "id": 102,
    "type": [
      "grass",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/102/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/102.ogg"
  },
  {
    "name": "exeggutor",
    "id": 103,
    "type": [
      "grass",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/103/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/103.ogg"
  },
  {
    "name": "cubone",
    "id": 104,
    "type": [
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/104/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/104.ogg"
  },
  {
    "name": "marowak",
    "id": 105,
    "type": [
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/105/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/105.ogg"
  },
  {
    "name": "hitmonlee",
    "id": 106,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/106/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/106.ogg"
  },
  {
    "name": "hitmonchan",
    "id": 107,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/107/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/107.ogg"
  },
  {
    "name": "lickitung",
    "id": 108,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/108/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/108.ogg"
  },
  {
    "name": "koffing",
    "id": 109,
    "type": [
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/109/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/109.ogg"
  },
  {
    "name": "weezing",
    "id": 110,
    "type": [
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/110/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/110.ogg"
  },
  {
    "name": "rhyhorn",
    "id": 111,
    "type": [
      "ground",
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/111/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/111.ogg"
  },
  {
    "name": "rhydon",
    "id": 112,
    "type": [
      "ground",
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/112/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/112.ogg"
  },
  {
    "name": "chansey",
    "id": 113,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/113/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/113.ogg"
  },
  {
    "name": "tangela",
    "id": 114,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/114/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/114.ogg"
  },
  {
    "name": "kangaskhan",
    "id": 115,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/115/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/115.ogg"
  },
  {
    "name": "horsea",
    "id": 116,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/116/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/116.ogg"
  },
  {
    "name": "seadra",
    "id": 117,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/117/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/117.ogg"
  },
  {
    "name": "goldeen",
    "id": 118,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/118/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/118.ogg"
  },
  {
    "name": "seaking",
    "id": 119,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/119/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/119.ogg"
  },
  {
    "name": "staryu",
    "id": 120,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/120/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/120.ogg"
  },
  {
    "name": "starmie",
    "id": 121,
    "type": [
      "water",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/121/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/121.ogg"
  },
  {
    "name": "mr-mime",
    "id": 122,
    "type": [
      "psychic",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/122/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/122.ogg"
  },
  {
    "name": "scyther",
    "id": 123,
    "type": [
      "bug",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/123/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/123.ogg"
  },
  {
    "name": "jynx",
    "id": 124,
    "type": [
      "ice",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/124/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/124.ogg"
  },
  {
    "name": "electabuzz",
    "id": 125,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/125/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/125.ogg"
  },
  {
    "name": "magmar",
    "id": 126,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/126/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/126.ogg"
  },
  {
    "name": "pinsir",
    "id": 127,
    "type": [
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/127/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/127.ogg"
  },
  {
    "name": "tauros",
    "id": 128,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/128/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/128.ogg"
  },
  {
    "name": "magikarp",
    "id": 129,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/129/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/129.ogg"
  },
  {
    "name": "gyarados",
    "id": 130,
    "type": [
      "water",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/130/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/130.ogg"
  },
  {
    "name": "lapras",
    "id": 131,
    "type": [
      "water",
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/131/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/131.ogg"
  },
  {
    "name": "ditto",
    "id": 132,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/132/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/132.ogg"
  },
  {
    "name": "eevee",
    "id": 133,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/133/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/133.ogg"
  },
  {
    "name": "vaporeon",
    "id": 134,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/134/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/134.ogg"
  },
  {
    "name": "jolteon",
    "id": 135,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/135/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/135.ogg"
  },
  {
    "name": "flareon",
    "id": 136,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/136/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/136.ogg"
  },
  {
    "name": "porygon",
    "id": 137,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/137/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/137.ogg"
  },
  {
    "name": "omanyte",
    "id": 138,
    "type": [
      "rock",
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/138/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/138.ogg"
  },
  {
    "name": "omastar",
    "id": 139,
    "type": [
      "rock",
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/139/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/139.ogg"
  },
  {
    "name": "kabuto",
    "id": 140,
    "type": [
      "rock",
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/140/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/140.ogg"
  },
  {
    "name": "kabutops",
    "id": 141,
    "type": [
      "rock",
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/141/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/141.ogg"
  },
  {
    "name": "aerodactyl",
    "id": 142,
    "type": [
      "rock",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/142/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/142.ogg"
  },
  {
    "name": "snorlax",
    "id": 143,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/143/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/143.ogg"
  },
  {
    "name": "articuno",
    "id": 144,
    "type": [
      "ice",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/144/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/144.ogg"
  },
  {
    "name": "zapdos",
    "id": 145,
    "type": [
      "electric",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/145/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/145.ogg"
  },
  {
    "name": "moltres",
    "id": 146,
    "type": [
      "fire",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/146/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/146.ogg"
  },
  {
    "name": "dratini",
    "id": 147,
    "type": [
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/147/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/147.ogg"
  },
  {
    "name": "dragonair",
    "id": 148,
    "type": [
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/148/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/148.ogg"
  },
  {
    "name": "dragonite",
    "id": 149,
    "type": [
      "dragon",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/149/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/149.ogg"
  },
  {
    "name": "mewtwo",
    "id": 150,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/150/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/150.ogg"
  },
  {
    "name": "mew",
    "id": 151,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/151/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/151.ogg"
  },
  {
    "name": "chikorita",
    "id": 152,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/152/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/152.ogg"
  },
  {
    "name": "bayleef",
    "id": 153,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/153/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/153.ogg"
  },
  {
    "name": "meganium",
    "id": 154,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/154/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/154.ogg"
  },
  {
    "name": "cyndaquil",
    "id": 155,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/155/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/155.ogg"
  },
  {
    "name": "quilava",
    "id": 156,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/156/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/156.ogg"
  },
  {
    "name": "typhlosion",
    "id": 157,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/157/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/157.ogg"
  },
  {
    "name": "totodile",
    "id": 158,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/158/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/158.ogg"
  },
  {
    "name": "croconaw",
    "id": 159,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/159/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/159.ogg"
  },
  {
    "name": "feraligatr",
    "id": 160,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/160/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/160.ogg"
  },
  {
    "name": "sentret",
    "id": 161,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/161/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/161.ogg"
  },
  {
    "name": "furret",
    "id": 162,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/162/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/162.ogg"
  },
  {
    "name": "hoothoot",
    "id": 163,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/163/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/163.ogg"
  },
  {
    "name": "noctowl",
    "id": 164,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/164/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/164.ogg"
  },
  {
    "name": "ledyba",
    "id": 165,
    "type": [
      "bug",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/165/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/165.ogg"
  },
  {
    "name": "ledian",
    "id": 166,
    "type": [
      "bug",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/166/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/166.ogg"
  },
  {
    "name": "spinarak",
    "id": 167,
    "type": [
      "bug",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/167/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/167.ogg"
  },
  {
    "name": "ariados",
    "id": 168,
    "type": [
      "bug",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/168/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/168.ogg"
  },
  {
    "name": "crobat",
    "id": 169,
    "type": [
      "poison",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/169/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/169.ogg"
  },
  {
    "name": "chinchou",
    "id": 170,
    "type": [
      "water",
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/170/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/170.ogg"
  },
  {
    "name": "lanturn",
    "id": 171,
    "type": [
      "water",
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/171/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/171.ogg"
  },
  {
    "name": "pichu",
    "id": 172,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/172/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/172.ogg"
  },
  {
    "name": "cleffa",
    "id": 173,
    "type": [
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/173/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/173.ogg"
  },
  {
    "name": "igglybuff",
    "id": 174,
    "type": [
      "normal",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/174/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/174.ogg"
  },
  {
    "name": "togepi",
    "id": 175,
    "type": [
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/175/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/175.ogg"
  },
  {
    "name": "togetic",
    "id": 176,
    "type": [
      "fairy",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/176/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/176.ogg"
  },
  {
    "name": "natu",
    "id": 177,
    "type": [
      "psychic",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/177/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/177.ogg"
  },
  {
    "name": "xatu",
    "id": 178,
    "type": [
      "psychic",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/178/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/178.ogg"
  },
  {
    "name": "mareep",
    "id": 179,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/179/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/179.ogg"
  },
  {
    "name": "flaaffy",
    "id": 180,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/180/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/180.ogg"
  },
  {
    "name": "ampharos",
    "id": 181,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/181/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/181.ogg"
  },
  {
    "name": "bellossom",
    "id": 182,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/182/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/182.ogg"
  },
  {
    "name": "marill",
    "id": 183,
    "type": [
      "water",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/183/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/183.ogg"
  },
  {
    "name": "azumarill",
    "id": 184,
    "type": [
      "water",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/184/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/184.ogg"
  },
  {
    "name": "sudowoodo",
    "id": 185,
    "type": [
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/185/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/185.ogg"
  },
  {
    "name": "politoed",
    "id": 186,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/186/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/186.ogg"
  },
  {
    "name": "hoppip",
    "id": 187,
    "type": [
      "grass",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/187/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/187.ogg"
  },
  {
    "name": "skiploom",
    "id": 188,
    "type": [
      "grass",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/188/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/188.ogg"
  },
  {
    "name": "jumpluff",
    "id": 189,
    "type": [
      "grass",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/189/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/189.ogg"
  },
  {
    "name": "aipom",
    "id": 190,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/190/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/190.ogg"
  },
  {
    "name": "sunkern",
    "id": 191,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/191/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/191.ogg"
  },
  {
    "name": "sunflora",
    "id": 192,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/192/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/192.ogg"
  },
  {
    "name": "yanma",
    "id": 193,
    "type": [
      "bug",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/193/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/193.ogg"
  },
  {
    "name": "wooper",
    "id": 194,
    "type": [
      "water",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/194/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/194.ogg"
  },
  {
    "name": "quagsire",
    "id": 195,
    "type": [
      "water",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/195/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/195.ogg"
  },
  {
    "name": "espeon",
    "id": 196,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/196/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/196.ogg"
  },
  {
    "name": "umbreon",
    "id": 197,
    "type": [
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/197/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/197.ogg"
  },
  {
    "name": "murkrow",
    "id": 198,
    "type": [
      "dark",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/198/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/198.ogg"
  },
  {
    "name": "slowking",
    "id": 199,
    "type": [
      "water",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/199/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/199.ogg"
  },
  {
    "name": "misdreavus",
    "id": 200,
    "type": [
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/200/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/200.ogg"
  },
  {
    "name": "unown",
    "id": 201,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/201/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/201.ogg"
  },
  {
    "name": "wobbuffet",
    "id": 202,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/202/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/202.ogg"
  },
  {
    "name": "girafarig",
    "id": 203,
    "type": [
      "normal",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/203/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/203.ogg"
  },
  {
    "name": "pineco",
    "id": 204,
    "type": [
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/204/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/204.ogg"
  },
  {
    "name": "forretress",
    "id": 205,
    "type": [
      "bug",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/205/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/205.ogg"
  },
  {
    "name": "dunsparce",
    "id": 206,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/206/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/206.ogg"
  },
  {
    "name": "gligar",
    "id": 207,
    "type": [
      "ground",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/207/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/207.ogg"
  },
  {
    "name": "steelix",
    "id": 208,
    "type": [
      "steel",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/208/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/208.ogg"
  },
  {
    "name": "snubbull",
    "id": 209,
    "type": [
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/209/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/209.ogg"
  },
  {
    "name": "granbull",
    "id": 210,
    "type": [
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/210/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/210.ogg"
  },
  {
    "name": "qwilfish",
    "id": 211,
    "type": [
      "water",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/211/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/211.ogg"
  },
  {
    "name": "scizor",
    "id": 212,
    "type": [
      "bug",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/212/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/212.ogg"
  },
  {
    "name": "shuckle",
    "id": 213,
    "type": [
      "bug",
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/213/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/213.ogg"
  },
  {
    "name": "heracross",
    "id": 214,
    "type": [
      "bug",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/214/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/214.ogg"
  },
  {
    "name": "sneasel",
    "id": 215,
    "type": [
      "dark",
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/215/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/215.ogg"
  },
  {
    "name": "teddiursa",
    "id": 216,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/216/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/216.ogg"
  },
  {
    "name": "ursaring",
    "id": 217,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/217/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/217.ogg"
  },
  {
    "name": "slugma",
    "id": 218,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/218/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/218.ogg"
  },
  {
    "name": "magcargo",
    "id": 219,
    "type": [
      "fire",
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/219/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/219.ogg"
  },
  {
    "name": "swinub",
    "id": 220,
    "type": [
      "ice",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/220/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/220.ogg"
  },
  {
    "name": "piloswine",
    "id": 221,
    "type": [
      "ice",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/221/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/221.ogg"
  },
  {
    "name": "corsola",
    "id": 222,
    "type": [
      "water",
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/222/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/222.ogg"
  },
  {
    "name": "remoraid",
    "id": 223,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/223/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/223.ogg"
  },
  {
    "name": "octillery",
    "id": 224,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/224/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/224.ogg"
  },
  {
    "name": "delibird",
    "id": 225,
    "type": [
      "ice",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/225/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/225.ogg"
  },
  {
    "name": "mantine",
    "id": 226,
    "type": [
      "water",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/226/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/226.ogg"
  },
  {
    "name": "skarmory",
    "id": 227,
    "type": [
      "steel",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/227/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/227.ogg"
  },
  {
    "name": "houndour",
    "id": 228,
    "type": [
      "dark",
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/228/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/228.ogg"
  },
  {
    "name": "houndoom",
    "id": 229,
    "type": [
      "dark",
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/229/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/229.ogg"
  },
  {
    "name": "kingdra",
    "id": 230,
    "type": [
      "water",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/230/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/230.ogg"
  },
  {
    "name": "phanpy",
    "id": 231,
    "type": [
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/231/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/231.ogg"
  },
  {
    "name": "donphan",
    "id": 232,
    "type": [
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/232/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/232.ogg"
  },
  {
    "name": "porygon2",
    "id": 233,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/233/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/233.ogg"
  },
  {
    "name": "stantler",
    "id": 234,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/234/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/234.ogg"
  },
  {
    "name": "smeargle",
    "id": 235,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/235/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/235.ogg"
  },
  {
    "name": "tyrogue",
    "id": 236,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/236/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/236.ogg"
  },
  {
    "name": "hitmontop",
    "id": 237,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/237/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/237.ogg"
  },
  {
    "name": "smoochum",
    "id": 238,
    "type": [
      "ice",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/238/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/238.ogg"
  },
  {
    "name": "elekid",
    "id": 239,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/239/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/239.ogg"
  },
  {
    "name": "magby",
    "id": 240,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/240/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/240.ogg"
  },
  {
    "name": "miltank",
    "id": 241,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/241/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/241.ogg"
  },
  {
    "name": "blissey",
    "id": 242,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/242/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/242.ogg"
  },
  {
    "name": "raikou",
    "id": 243,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/243/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/243.ogg"
  },
  {
    "name": "entei",
    "id": 244,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/244/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/244.ogg"
  },
  {
    "name": "suicune",
    "id": 245,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/245/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/245.ogg"
  },
  {
    "name": "larvitar",
    "id": 246,
    "type": [
      "rock",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/246/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/246.ogg"
  },
  {
    "name": "pupitar",
    "id": 247,
    "type": [
      "rock",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/247/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/247.ogg"
  },
  {
    "name": "tyranitar",
    "id": 248,
    "type": [
      "rock",
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/248/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/248.ogg"
  },
  {
    "name": "lugia",
    "id": 249,
    "type": [
      "psychic",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/249/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/249.ogg"
  },
  {
    "name": "ho-oh",
    "id": 250,
    "type": [
      "fire",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/250/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/250.ogg"
  },
  {
    "name": "celebi",
    "id": 251,
    "type": [
      "psychic",
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/251/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/251.ogg"
  },
  {
    "name": "treecko",
    "id": 252,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/252/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/252.ogg"
  },
  {
    "name": "grovyle",
    "id": 253,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/253/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/253.ogg"
  },
  {
    "name": "sceptile",
    "id": 254,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/254/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/254.ogg"
  },
  {
    "name": "torchic",
    "id": 255,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/255/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/255.ogg"
  },
  {
    "name": "combusken",
    "id": 256,
    "type": [
      "fire",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/256/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/256.ogg"
  },
  {
    "name": "blaziken",
    "id": 257,
    "type": [
      "fire",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/257/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/257.ogg"
  },
  {
    "name": "mudkip",
    "id": 258,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/258/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/258.ogg"
  },
  {
    "name": "marshtomp",
    "id": 259,
    "type": [
      "water",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/259/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/259.ogg"
  },
  {
    "name": "swampert",
    "id": 260,
    "type": [
      "water",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/260/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/260.ogg"
  },
  {
    "name": "poochyena",
    "id": 261,
    "type": [
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/261/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/261.ogg"
  },
  {
    "name": "mightyena",
    "id": 262,
    "type": [
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/262/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/262.ogg"
  },
  {
    "name": "zigzagoon",
    "id": 263,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/263/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/263.ogg"
  },
  {
    "name": "linoone",
    "id": 264,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/264/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/264.ogg"
  },
  {
    "name": "wurmple",
    "id": 265,
    "type": [
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/265/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/265.ogg"
  },
  {
    "name": "silcoon",
    "id": 266,
    "type": [
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/266/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/266.ogg"
  },
  {
    "name": "beautifly",
    "id": 267,
    "type": [
      "bug",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/267/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/267.ogg"
  },
  {
    "name": "cascoon",
    "id": 268,
    "type": [
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/268/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/268.ogg"
  },
  {
    "name": "dustox",
    "id": 269,
    "type": [
      "bug",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/269/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/269.ogg"
  },
  {
    "name": "lotad",
    "id": 270,
    "type": [
      "water",
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/270/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/270.ogg"
  },
  {
    "name": "lombre",
    "id": 271,
    "type": [
      "water",
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/271/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/271.ogg"
  },
  {
    "name": "ludicolo",
    "id": 272,
    "type": [
      "water",
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/272/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/272.ogg"
  },
  {
    "name": "seedot",
    "id": 273,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/273/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/273.ogg"
  },
  {
    "name": "nuzleaf",
    "id": 274,
    "type": [
      "grass",
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/274/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/274.ogg"
  },
  {
    "name": "shiftry",
    "id": 275,
    "type": [
      "grass",
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/275/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/275.ogg"
  },
  {
    "name": "taillow",
    "id": 276,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/276/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/276.ogg"
  },
  {
    "name": "swellow",
    "id": 277,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/277/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/277.ogg"
  },
  {
    "name": "wingull",
    "id": 278,
    "type": [
      "water",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/278/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/278.ogg"
  },
  {
    "name": "pelipper",
    "id": 279,
    "type": [
      "water",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/279/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/279.ogg"
  },
  {
    "name": "ralts",
    "id": 280,
    "type": [
      "psychic",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/280/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/280.ogg"
  },
  {
    "name": "kirlia",
    "id": 281,
    "type": [
      "psychic",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/281/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/281.ogg"
  },
  {
    "name": "gardevoir",
    "id": 282,
    "type": [
      "psychic",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/282/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/282.ogg"
  },
  {
    "name": "surskit",
    "id": 283,
    "type": [
      "bug",
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/283/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/283.ogg"
  },
  {
    "name": "masquerain",
    "id": 284,
    "type": [
      "bug",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/284/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/284.ogg"
  },
  {
    "name": "shroomish",
    "id": 285,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/285/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/285.ogg"
  },
  {
    "name": "breloom",
    "id": 286,
    "type": [
      "grass",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/286/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/286.ogg"
  },
  {
    "name": "slakoth",
    "id": 287,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/287/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/287.ogg"
  },
  {
    "name": "vigoroth",
    "id": 288,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/288/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/288.ogg"
  },
  {
    "name": "slaking",
    "id": 289,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/289/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/289.ogg"
  },
  {
    "name": "nincada",
    "id": 290,
    "type": [
      "bug",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/290/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/290.ogg"
  },
  {
    "name": "ninjask",
    "id": 291,
    "type": [
      "bug",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/291/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/291.ogg"
  },
  {
    "name": "shedinja",
    "id": 292,
    "type": [
      "bug",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/292/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/292.ogg"
  },
  {
    "name": "whismur",
    "id": 293,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/293/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/293.ogg"
  },
  {
    "name": "loudred",
    "id": 294,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/294/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/294.ogg"
  },
  {
    "name": "exploud",
    "id": 295,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/295/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/295.ogg"
  },
  {
    "name": "makuhita",
    "id": 296,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/296/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/296.ogg"
  },
  {
    "name": "hariyama",
    "id": 297,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/297/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/297.ogg"
  },
  {
    "name": "azurill",
    "id": 298,
    "type": [
      "normal",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/298/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/298.ogg"
  },
  {
    "name": "nosepass",
    "id": 299,
    "type": [
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/299/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/299.ogg"
  },
  {
    "name": "skitty",
    "id": 300,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/300/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/300.ogg"
  },
  {
    "name": "delcatty",
    "id": 301,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/301/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/301.ogg"
  },
  {
    "name": "sableye",
    "id": 302,
    "type": [
      "dark",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/302/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/302.ogg"
  },
  {
    "name": "mawile",
    "id": 303,
    "type": [
      "steel",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/303/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/303.ogg"
  },
  {
    "name": "aron",
    "id": 304,
    "type": [
      "steel",
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/304/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/304.ogg"
  },
  {
    "name": "lairon",
    "id": 305,
    "type": [
      "steel",
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/305/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/305.ogg"
  },
  {
    "name": "aggron",
    "id": 306,
    "type": [
      "steel",
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/306/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/306.ogg"
  },
  {
    "name": "meditite",
    "id": 307,
    "type": [
      "fighting",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/307/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/307.ogg"
  },
  {
    "name": "medicham",
    "id": 308,
    "type": [
      "fighting",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/308/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/308.ogg"
  },
  {
    "name": "electrike",
    "id": 309,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/309/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/309.ogg"
  },
  {
    "name": "manectric",
    "id": 310,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/310/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/310.ogg"
  },
  {
    "name": "plusle",
    "id": 311,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/311/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/311.ogg"
  },
  {
    "name": "minun",
    "id": 312,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/312/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/312.ogg"
  },
  {
    "name": "volbeat",
    "id": 313,
    "type": [
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/313/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/313.ogg"
  },
  {
    "name": "illumise",
    "id": 314,
    "type": [
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/314/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/314.ogg"
  },
  {
    "name": "roselia",
    "id": 315,
    "type": [
      "grass",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/315/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/315.ogg"
  },
  {
    "name": "gulpin",
    "id": 316,
    "type": [
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/316/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/316.ogg"
  },
  {
    "name": "swalot",
    "id": 317,
    "type": [
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/317/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/317.ogg"
  },
  {
    "name": "carvanha",
    "id": 318,
    "type": [
      "water",
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/318/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/318.ogg"
  },
  {
    "name": "sharpedo",
    "id": 319,
    "type": [
      "water",
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/319/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/319.ogg"
  },
  {
    "name": "wailmer",
    "id": 320,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/320/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/320.ogg"
  },
  {
    "name": "wailord",
    "id": 321,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/321/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/321.ogg"
  },
  {
    "name": "numel",
    "id": 322,
    "type": [
      "fire",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/322/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/322.ogg"
  },
  {
    "name": "camerupt",
    "id": 323,
    "type": [
      "fire",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/323/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/323.ogg"
  },
  {
    "name": "torkoal",
    "id": 324,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/324/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/324.ogg"
  },
  {
    "name": "spoink",
    "id": 325,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/325/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/325.ogg"
  },
  {
    "name": "grumpig",
    "id": 326,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/326/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/326.ogg"
  },
  {
    "name": "spinda",
    "id": 327,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/327/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/327.ogg"
  },
  {
    "name": "trapinch",
    "id": 328,
    "type": [
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/328/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/328.ogg"
  },
  {
    "name": "vibrava",
    "id": 329,
    "type": [
      "ground",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/329/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/329.ogg"
  },
  {
    "name": "flygon",
    "id": 330,
    "type": [
      "ground",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/330/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/330.ogg"
  },
  {
    "name": "cacnea",
    "id": 331,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/331/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/331.ogg"
  },
  {
    "name": "cacturne",
    "id": 332,
    "type": [
      "grass",
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/332/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/332.ogg"
  },
  {
    "name": "swablu",
    "id": 333,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/333/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/333.ogg"
  },
  {
    "name": "altaria",
    "id": 334,
    "type": [
      "dragon",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/334/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/334.ogg"
  },
  {
    "name": "zangoose",
    "id": 335,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/335/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/335.ogg"
  },
  {
    "name": "seviper",
    "id": 336,
    "type": [
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/336/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/336.ogg"
  },
  {
    "name": "lunatone",
    "id": 337,
    "type": [
      "rock",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/337/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/337.ogg"
  },
  {
    "name": "solrock",
    "id": 338,
    "type": [
      "rock",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/338/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/338.ogg"
  },
  {
    "name": "barboach",
    "id": 339,
    "type": [
      "water",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/339/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/339.ogg"
  },
  {
    "name": "whiscash",
    "id": 340,
    "type": [
      "water",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/340/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/340.ogg"
  },
  {
    "name": "corphish",
    "id": 341,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/341/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/341.ogg"
  },
  {
    "name": "crawdaunt",
    "id": 342,
    "type": [
      "water",
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/342/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/342.ogg"
  },
  {
    "name": "baltoy",
    "id": 343,
    "type": [
      "ground",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/343/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/343.ogg"
  },
  {
    "name": "claydol",
    "id": 344,
    "type": [
      "ground",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/344/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/344.ogg"
  },
  {
    "name": "lileep",
    "id": 345,
    "type": [
      "rock",
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/345/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/345.ogg"
  },
  {
    "name": "cradily",
    "id": 346,
    "type": [
      "rock",
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/346/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/346.ogg"
  },
  {
    "name": "anorith",
    "id": 347,
    "type": [
      "rock",
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/347/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/347.ogg"
  },
  {
    "name": "armaldo",
    "id": 348,
    "type": [
      "rock",
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/348/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/348.ogg"
  },
  {
    "name": "feebas",
    "id": 349,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/349/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/349.ogg"
  },
  {
    "name": "milotic",
    "id": 350,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/350/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/350.ogg"
  },
  {
    "name": "castform",
    "id": 351,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/351/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/351.ogg"
  },
  {
    "name": "kecleon",
    "id": 352,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/352/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/352.ogg"
  },
  {
    "name": "shuppet",
    "id": 353,
    "type": [
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/353/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/353.ogg"
  },
  {
    "name": "banette",
    "id": 354,
    "type": [
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/354/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/354.ogg"
  },
  {
    "name": "duskull",
    "id": 355,
    "type": [
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/355/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/355.ogg"
  },
  {
    "name": "dusclops",
    "id": 356,
    "type": [
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/356/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/356.ogg"
  },
  {
    "name": "tropius",
    "id": 357,
    "type": [
      "grass",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/357/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/357.ogg"
  },
  {
    "name": "chimecho",
    "id": 358,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/358/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/358.ogg"
  },
  {
    "name": "absol",
    "id": 359,
    "type": [
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/359/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/359.ogg"
  },
  {
    "name": "wynaut",
    "id": 360,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/360/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/360.ogg"
  },
  {
    "name": "snorunt",
    "id": 361,
    "type": [
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/361/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/361.ogg"
  },
  {
    "name": "glalie",
    "id": 362,
    "type": [
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/362/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/362.ogg"
  },
  {
    "name": "spheal",
    "id": 363,
    "type": [
      "ice",
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/363/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/363.ogg"
  },
  {
    "name": "sealeo",
    "id": 364,
    "type": [
      "ice",
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/364/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/364.ogg"
  },
  {
    "name": "walrein",
    "id": 365,
    "type": [
      "ice",
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/365/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/365.ogg"
  },
  {
    "name": "clamperl",
    "id": 366,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/366/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/366.ogg"
  },
  {
    "name": "huntail",
    "id": 367,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/367/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/367.ogg"
  },
  {
    "name": "gorebyss",
    "id": 368,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/368/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/368.ogg"
  },
  {
    "name": "relicanth",
    "id": 369,
    "type": [
      "water",
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/369/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/369.ogg"
  },
  {
    "name": "luvdisc",
    "id": 370,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/370/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/370.ogg"
  },
  {
    "name": "bagon",
    "id": 371,
    "type": [
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/371/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/371.ogg"
  },
  {
    "name": "shelgon",
    "id": 372,
    "type": [
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/372/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/372.ogg"
  },
  {
    "name": "salamence",
    "id": 373,
    "type": [
      "dragon",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/373/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/373.ogg"
  },
  {
    "name": "beldum",
    "id": 374,
    "type": [
      "steel",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/374/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/374.ogg"
  },
  {
    "name": "metang",
    "id": 375,
    "type": [
      "steel",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/375/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/375.ogg"
  },
  {
    "name": "metagross",
    "id": 376,
    "type": [
      "steel",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/376/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/376.ogg"
  },
  {
    "name": "regirock",
    "id": 377,
    "type": [
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/377/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/377.ogg"
  },
  {
    "name": "regice",
    "id": 378,
    "type": [
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/378/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/378.ogg"
  },
  {
    "name": "registeel",
    "id": 379,
    "type": [
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/379/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/379.ogg"
  },
  {
    "name": "latias",
    "id": 380,
    "type": [
      "dragon",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/380/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/380.ogg"
  },
  {
    "name": "latios",
    "id": 381,
    "type": [
      "dragon",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/381/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/381.ogg"
  },
  {
    "name": "kyogre",
    "id": 382,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/382/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/382.ogg"
  },
  {
    "name": "groudon",
    "id": 383,
    "type": [
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/383/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/383.ogg"
  },
  {
    "name": "rayquaza",
    "id": 384,
    "type": [
      "dragon",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/384/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/384.ogg"
  },
  {
    "name": "jirachi",
    "id": 385,
    "type": [
      "steel",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/385/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/385.ogg"
  },
  {
    "name": "deoxys",
    "id": 386,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/386/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/386.ogg"
  },
  {
    "name": "turtwig",
    "id": 387,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/387/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/387.ogg"
  },
  {
    "name": "grotle",
    "id": 388,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/388/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/388.ogg"
  },
  {
    "name": "torterra",
    "id": 389,
    "type": [
      "grass",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/389/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/389.ogg"
  },
  {
    "name": "chimchar",
    "id": 390,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/390/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/390.ogg"
  },
  {
    "name": "monferno",
    "id": 391,
    "type": [
      "fire",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/391/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/391.ogg"
  },
  {
    "name": "infernape",
    "id": 392,
    "type": [
      "fire",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/392/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/392.ogg"
  },
  {
    "name": "piplup",
    "id": 393,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/393/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/393.ogg"
  },
  {
    "name": "prinplup",
    "id": 394,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/394/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/394.ogg"
  },
  {
    "name": "empoleon",
    "id": 395,
    "type": [
      "water",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/395/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/395.ogg"
  },
  {
    "name": "starly",
    "id": 396,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/396/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/396.ogg"
  },
  {
    "name": "staravia",
    "id": 397,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/397/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/397.ogg"
  },
  {
    "name": "staraptor",
    "id": 398,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/398/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/398.ogg"
  },
  {
    "name": "bidoof",
    "id": 399,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/399/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/399.ogg"
  },
  {
    "name": "bibarel",
    "id": 400,
    "type": [
      "normal",
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/400/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/400.ogg"
  },
  {
    "name": "kricketot",
    "id": 401,
    "type": [
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/401/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/401.ogg"
  },
  {
    "name": "kricketune",
    "id": 402,
    "type": [
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/402/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/402.ogg"
  },
  {
    "name": "shinx",
    "id": 403,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/403/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/403.ogg"
  },
  {
    "name": "luxio",
    "id": 404,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/404/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/404.ogg"
  },
  {
    "name": "luxray",
    "id": 405,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/405/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/405.ogg"
  },
  {
    "name": "budew",
    "id": 406,
    "type": [
      "grass",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/406/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/406.ogg"
  },
  {
    "name": "roserade",
    "id": 407,
    "type": [
      "grass",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/407/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/407.ogg"
  },
  {
    "name": "cranidos",
    "id": 408,
    "type": [
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/408/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/408.ogg"
  },
  {
    "name": "rampardos",
    "id": 409,
    "type": [
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/409/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/409.ogg"
  },
  {
    "name": "shieldon",
    "id": 410,
    "type": [
      "rock",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/410/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/410.ogg"
  },
  {
    "name": "bastiodon",
    "id": 411,
    "type": [
      "rock",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/411/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/411.ogg"
  },
  {
    "name": "burmy",
    "id": 412,
    "type": [
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/412/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/412.ogg"
  },
  {
    "name": "wormadam",
    "id": 413,
    "type": [
      "bug",
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/413/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/413.ogg"
  },
  {
    "name": "mothim",
    "id": 414,
    "type": [
      "bug",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/414/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/414.ogg"
  },
  {
    "name": "combee",
    "id": 415,
    "type": [
      "bug",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/415/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/415.ogg"
  },
  {
    "name": "vespiquen",
    "id": 416,
    "type": [
      "bug",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/416/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/416.ogg"
  },
  {
    "name": "pachirisu",
    "id": 417,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/417/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/417.ogg"
  },
  {
    "name": "buizel",
    "id": 418,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/418/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/418.ogg"
  },
  {
    "name": "floatzel",
    "id": 419,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/419/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/419.ogg"
  },
  {
    "name": "cherubi",
    "id": 420,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/420/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/420.ogg"
  },
  {
    "name": "cherrim",
    "id": 421,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/421/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/421.ogg"
  },
  {
    "name": "shellos",
    "id": 422,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/422/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/422.ogg"
  },
  {
    "name": "gastrodon",
    "id": 423,
    "type": [
      "water",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/423/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/423.ogg"
  },
  {
    "name": "ambipom",
    "id": 424,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/424/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/424.ogg"
  },
  {
    "name": "drifloon",
    "id": 425,
    "type": [
      "ghost",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/425/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/425.ogg"
  },
  {
    "name": "drifblim",
    "id": 426,
    "type": [
      "ghost",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/426/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/426.ogg"
  },
  {
    "name": "buneary",
    "id": 427,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/427/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/427.ogg"
  },
  {
    "name": "lopunny",
    "id": 428,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/428/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/428.ogg"
  },
  {
    "name": "mismagius",
    "id": 429,
    "type": [
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/429/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/429.ogg"
  },
  {
    "name": "honchkrow",
    "id": 430,
    "type": [
      "dark",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/430/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/430.ogg"
  },
  {
    "name": "glameow",
    "id": 431,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/431/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/431.ogg"
  },
  {
    "name": "purugly",
    "id": 432,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/432/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/432.ogg"
  },
  {
    "name": "chingling",
    "id": 433,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/433/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/433.ogg"
  },
  {
    "name": "stunky",
    "id": 434,
    "type": [
      "poison",
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/434/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/434.ogg"
  },
  {
    "name": "skuntank",
    "id": 435,
    "type": [
      "poison",
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/435/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/435.ogg"
  },
  {
    "name": "bronzor",
    "id": 436,
    "type": [
      "steel",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/436/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/436.ogg"
  },
  {
    "name": "bronzong",
    "id": 437,
    "type": [
      "steel",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/437/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/437.ogg"
  },
  {
    "name": "bonsly",
    "id": 438,
    "type": [
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/438/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/438.ogg"
  },
  {
    "name": "mime-jr",
    "id": 439,
    "type": [
      "psychic",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/439/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/439.ogg"
  },
  {
    "name": "happiny",
    "id": 440,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/440/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/440.ogg"
  },
  {
    "name": "chatot",
    "id": 441,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/441/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/441.ogg"
  },
  {
    "name": "spiritomb",
    "id": 442,
    "type": [
      "ghost",
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/442/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/442.ogg"
  },
  {
    "name": "gible",
    "id": 443,
    "type": [
      "dragon",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/443/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/443.ogg"
  },
  {
    "name": "gabite",
    "id": 444,
    "type": [
      "dragon",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/444/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/444.ogg"
  },
  {
    "name": "garchomp",
    "id": 445,
    "type": [
      "dragon",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/445/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/445.ogg"
  },
  {
    "name": "munchlax",
    "id": 446,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/446/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/446.ogg"
  },
  {
    "name": "riolu",
    "id": 447,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/447/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/447.ogg"
  },
  {
    "name": "lucario",
    "id": 448,
    "type": [
      "fighting",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/448/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/448.ogg"
  },
  {
    "name": "hippopotas",
    "id": 449,
    "type": [
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/449/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/449.ogg"
  },
  {
    "name": "hippowdon",
    "id": 450,
    "type": [
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/450/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/450.ogg"
  },
  {
    "name": "skorupi",
    "id": 451,
    "type": [
      "poison",
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/451/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/451.ogg"
  },
  {
    "name": "drapion",
    "id": 452,
    "type": [
      "poison",
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/452/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/452.ogg"
  },
  {
    "name": "croagunk",
    "id": 453,
    "type": [
      "poison",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/453/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/453.ogg"
  },
  {
    "name": "toxicroak",
    "id": 454,
    "type": [
      "poison",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/454/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/454.ogg"
  },
  {
    "name": "carnivine",
    "id": 455,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/455/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/455.ogg"
  },
  {
    "name": "finneon",
    "id": 456,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/456/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/456.ogg"
  },
  {
    "name": "lumineon",
    "id": 457,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/457/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/457.ogg"
  },
  {
    "name": "mantyke",
    "id": 458,
    "type": [
      "water",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/458/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/458.ogg"
  },
  {
    "name": "snover",
    "id": 459,
    "type": [
      "grass",
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/459/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/459.ogg"
  },
  {
    "name": "abomasnow",
    "id": 460,
    "type": [
      "grass",
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/460/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/460.ogg"
  },
  {
    "name": "weavile",
    "id": 461,
    "type": [
      "dark",
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/461/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/461.ogg"
  },
  {
    "name": "magnezone",
    "id": 462,
    "type": [
      "electric",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/462/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/462.ogg"
  },
  {
    "name": "lickilicky",
    "id": 463,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/463/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/463.ogg"
  },
  {
    "name": "rhyperior",
    "id": 464,
    "type": [
      "ground",
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/464/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/464.ogg"
  },
  {
    "name": "tangrowth",
    "id": 465,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/465/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/465.ogg"
  },
  {
    "name": "electivire",
    "id": 466,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/466/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/466.ogg"
  },
  {
    "name": "magmortar",
    "id": 467,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/467/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/467.ogg"
  },
  {
    "name": "togekiss",
    "id": 468,
    "type": [
      "fairy",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/468/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/468.ogg"
  },
  {
    "name": "yanmega",
    "id": 469,
    "type": [
      "bug",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/469/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/469.ogg"
  },
  {
    "name": "leafeon",
    "id": 470,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/470/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/470.ogg"
  },
  {
    "name": "glaceon",
    "id": 471,
    "type": [
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/471/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/471.ogg"
  },
  {
    "name": "gliscor",
    "id": 472,
    "type": [
      "ground",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/472/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/472.ogg"
  },
  {
    "name": "mamoswine",
    "id": 473,
    "type": [
      "ice",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/473/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/473.ogg"
  },
  {
    "name": "porygon-z",
    "id": 474,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/474/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/474.ogg"
  },
  {
    "name": "gallade",
    "id": 475,
    "type": [
      "psychic",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/475/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/475.ogg"
  },
  {
    "name": "probopass",
    "id": 476,
    "type": [
      "rock",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/476/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/476.ogg"
  },
  {
    "name": "dusknoir",
    "id": 477,
    "type": [
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/477/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/477.ogg"
  },
  {
    "name": "froslass",
    "id": 478,
    "type": [
      "ice",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/478/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/478.ogg"
  },
  {
    "name": "rotom",
    "id": 479,
    "type": [
      "electric",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/479/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/479.ogg"
  },
  {
    "name": "uxie",
    "id": 480,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/480/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/480.ogg"
  },
  {
    "name": "mesprit",
    "id": 481,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/481/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/481.ogg"
  },
  {
    "name": "azelf",
    "id": 482,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/482/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/482.ogg"
  },
  {
    "name": "dialga",
    "id": 483,
    "type": [
      "steel",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/483/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/483.ogg"
  },
  {
    "name": "palkia",
    "id": 484,
    "type": [
      "water",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/484/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/484.ogg"
  },
  {
    "name": "heatran",
    "id": 485,
    "type": [
      "fire",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/485/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/485.ogg"
  },
  {
    "name": "regigigas",
    "id": 486,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/486/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/486.ogg"
  },
  {
    "name": "giratina",
    "id": 487,
    "type": [
      "ghost",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/487/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/487.ogg"
  },
  {
    "name": "cresselia",
    "id": 488,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/488/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/488.ogg"
  },
  {
    "name": "phione",
    "id": 489,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/489/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/489.ogg"
  },
  {
    "name": "manaphy",
    "id": 490,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/490/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/490.ogg"
  },
  {
    "name": "darkrai",
    "id": 491,
    "type": [
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/491/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/491.ogg"
  },
  {
    "name": "shaymin",
    "id": 492,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/492/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/492.ogg"
  },
  {
    "name": "arceus",
    "id": 493,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/493/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/493.ogg"
  },
  {
    "name": "victini",
    "id": 494,
    "type": [
      "psychic",
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/494/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/494.ogg"
  },
  {
    "name": "snivy",
    "id": 495,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/495/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/495.ogg"
  },
  {
    "name": "servine",
    "id": 496,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/496/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/496.ogg"
  },
  {
    "name": "serperior",
    "id": 497,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/497/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/497.ogg"
  },
  {
    "name": "tepig",
    "id": 498,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/498/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/498.ogg"
  },
  {
    "name": "pignite",
    "id": 499,
    "type": [
      "fire",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/499/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/499.ogg"
  },
  {
    "name": "emboar",
    "id": 500,
    "type": [
      "fire",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/500/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/500.ogg"
  },
  {
    "name": "oshawott",
    "id": 501,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/501/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/501.ogg"
  },
  {
    "name": "dewott",
    "id": 502,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/502/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/502.ogg"
  },
  {
    "name": "samurott",
    "id": 503,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/503/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/503.ogg"
  },
  {
    "name": "patrat",
    "id": 504,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/504/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/504.ogg"
  },
  {
    "name": "watchog",
    "id": 505,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/505/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/505.ogg"
  },
  {
    "name": "lillipup",
    "id": 506,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/506/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/506.ogg"
  },
  {
    "name": "herdier",
    "id": 507,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/507/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/507.ogg"
  },
  {
    "name": "stoutland",
    "id": 508,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/508/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/508.ogg"
  },
  {
    "name": "purrloin",
    "id": 509,
    "type": [
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/509/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/509.ogg"
  },
  {
    "name": "liepard",
    "id": 510,
    "type": [
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/510/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/510.ogg"
  },
  {
    "name": "pansage",
    "id": 511,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/511/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/511.ogg"
  },
  {
    "name": "simisage",
    "id": 512,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/512/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/512.ogg"
  },
  {
    "name": "pansear",
    "id": 513,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/513/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/513.ogg"
  },
  {
    "name": "simisear",
    "id": 514,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/514/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/514.ogg"
  },
  {
    "name": "panpour",
    "id": 515,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/515/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/515.ogg"
  },
  {
    "name": "simipour",
    "id": 516,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/516/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/516.ogg"
  },
  {
    "name": "munna",
    "id": 517,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/517/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/517.ogg"
  },
  {
    "name": "musharna",
    "id": 518,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/518/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/518.ogg"
  },
  {
    "name": "pidove",
    "id": 519,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/519/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/519.ogg"
  },
  {
    "name": "tranquill",
    "id": 520,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/520/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/520.ogg"
  },
  {
    "name": "unfezant",
    "id": 521,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/521/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/521.ogg"
  },
  {
    "name": "blitzle",
    "id": 522,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/522/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/522.ogg"
  },
  {
    "name": "zebstrika",
    "id": 523,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/523/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/523.ogg"
  },
  {
    "name": "roggenrola",
    "id": 524,
    "type": [
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/524/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/524.ogg"
  },
  {
    "name": "boldore",
    "id": 525,
    "type": [
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/525/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/525.ogg"
  },
  {
    "name": "gigalith",
    "id": 526,
    "type": [
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/526/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/526.ogg"
  },
  {
    "name": "woobat",
    "id": 527,
    "type": [
      "psychic",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/527/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/527.ogg"
  },
  {
    "name": "swoobat",
    "id": 528,
    "type": [
      "psychic",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/528/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/528.ogg"
  },
  {
    "name": "drilbur",
    "id": 529,
    "type": [
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/529/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/529.ogg"
  },
  {
    "name": "excadrill",
    "id": 530,
    "type": [
      "ground",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/530/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/530.ogg"
  },
  {
    "name": "audino",
    "id": 531,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/531/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/531.ogg"
  },
  {
    "name": "timburr",
    "id": 532,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/532/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/532.ogg"
  },
  {
    "name": "gurdurr",
    "id": 533,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/533/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/533.ogg"
  },
  {
    "name": "conkeldurr",
    "id": 534,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/534/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/534.ogg"
  },
  {
    "name": "tympole",
    "id": 535,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/535/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/535.ogg"
  },
  {
    "name": "palpitoad",
    "id": 536,
    "type": [
      "water",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/536/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/536.ogg"
  },
  {
    "name": "seismitoad",
    "id": 537,
    "type": [
      "water",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/537/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/537.ogg"
  },
  {
    "name": "throh",
    "id": 538,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/538/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/538.ogg"
  },
  {
    "name": "sawk",
    "id": 539,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/539/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/539.ogg"
  },
  {
    "name": "sewaddle",
    "id": 540,
    "type": [
      "bug",
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/540/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/540.ogg"
  },
  {
    "name": "swadloon",
    "id": 541,
    "type": [
      "bug",
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/541/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/541.ogg"
  },
  {
    "name": "leavanny",
    "id": 542,
    "type": [
      "bug",
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/542/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/542.ogg"
  },
  {
    "name": "venipede",
    "id": 543,
    "type": [
      "bug",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/543/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/543.ogg"
  },
  {
    "name": "whirlipede",
    "id": 544,
    "type": [
      "bug",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/544/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/544.ogg"
  },
  {
    "name": "scolipede",
    "id": 545,
    "type": [
      "bug",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/545/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/545.ogg"
  },
  {
    "name": "cottonee",
    "id": 546,
    "type": [
      "grass",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/546/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/546.ogg"
  },
  {
    "name": "whimsicott",
    "id": 547,
    "type": [
      "grass",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/547/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/547.ogg"
  },
  {
    "name": "petilil",
    "id": 548,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/548/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/548.ogg"
  },
  {
    "name": "lilligant",
    "id": 549,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/549/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/549.ogg"
  },
  {
    "name": "basculin",
    "id": 550,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/550/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/550.ogg"
  },
  {
    "name": "sandile",
    "id": 551,
    "type": [
      "ground",
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/551/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/551.ogg"
  },
  {
    "name": "krokorok",
    "id": 552,
    "type": [
      "ground",
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/552/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/552.ogg"
  },
  {
    "name": "krookodile",
    "id": 553,
    "type": [
      "ground",
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/553/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/553.ogg"
  },
  {
    "name": "darumaka",
    "id": 554,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/554/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/554.ogg"
  },
  {
    "name": "darmanitan",
    "id": 555,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/555/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/555.ogg"
  },
  {
    "name": "maractus",
    "id": 556,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/556/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/556.ogg"
  },
  {
    "name": "dwebble",
    "id": 557,
    "type": [
      "bug",
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/557/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/557.ogg"
  },
  {
    "name": "crustle",
    "id": 558,
    "type": [
      "bug",
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/558/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/558.ogg"
  },
  {
    "name": "scraggy",
    "id": 559,
    "type": [
      "dark",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/559/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/559.ogg"
  },
  {
    "name": "scrafty",
    "id": 560,
    "type": [
      "dark",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/560/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/560.ogg"
  },
  {
    "name": "sigilyph",
    "id": 561,
    "type": [
      "psychic",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/561/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/561.ogg"
  },
  {
    "name": "yamask",
    "id": 562,
    "type": [
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/562/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/562.ogg"
  },
  {
    "name": "cofagrigus",
    "id": 563,
    "type": [
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/563/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/563.ogg"
  },
  {
    "name": "tirtouga",
    "id": 564,
    "type": [
      "water",
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/564/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/564.ogg"
  },
  {
    "name": "carracosta",
    "id": 565,
    "type": [
      "water",
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/565/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/565.ogg"
  },
  {
    "name": "archen",
    "id": 566,
    "type": [
      "rock",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/566/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/566.ogg"
  },
  {
    "name": "archeops",
    "id": 567,
    "type": [
      "rock",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/567/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/567.ogg"
  },
  {
    "name": "trubbish",
    "id": 568,
    "type": [
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/568/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/568.ogg"
  },
  {
    "name": "garbodor",
    "id": 569,
    "type": [
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/569/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/569.ogg"
  },
  {
    "name": "zorua",
    "id": 570,
    "type": [
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/570/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/570.ogg"
  },
  {
    "name": "zoroark",
    "id": 571,
    "type": [
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/571/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/571.ogg"
  },
  {
    "name": "minccino",
    "id": 572,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/572/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/572.ogg"
  },
  {
    "name": "cinccino",
    "id": 573,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/573/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/573.ogg"
  },
  {
    "name": "gothita",
    "id": 574,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/574/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/574.ogg"
  },
  {
    "name": "gothorita",
    "id": 575,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/575/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/575.ogg"
  },
  {
    "name": "gothitelle",
    "id": 576,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/576/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/576.ogg"
  },
  {
    "name": "solosis",
    "id": 577,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/577/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/577.ogg"
  },
  {
    "name": "duosion",
    "id": 578,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/578/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/578.ogg"
  },
  {
    "name": "reuniclus",
    "id": 579,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/579/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/579.ogg"
  },
  {
    "name": "ducklett",
    "id": 580,
    "type": [
      "water",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/580/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/580.ogg"
  },
  {
    "name": "swanna",
    "id": 581,
    "type": [
      "water",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/581/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/581.ogg"
  },
  {
    "name": "vanillite",
    "id": 582,
    "type": [
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/582/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/582.ogg"
  },
  {
    "name": "vanillish",
    "id": 583,
    "type": [
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/583/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/583.ogg"
  },
  {
    "name": "vanilluxe",
    "id": 584,
    "type": [
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/584/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/584.ogg"
  },
  {
    "name": "deerling",
    "id": 585,
    "type": [
      "normal",
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/585/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/585.ogg"
  },
  {
    "name": "sawsbuck",
    "id": 586,
    "type": [
      "normal",
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/586/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/586.ogg"
  },
  {
    "name": "emolga",
    "id": 587,
    "type": [
      "electric",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/587/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/587.ogg"
  },
  {
    "name": "karrablast",
    "id": 588,
    "type": [
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/588/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/588.ogg"
  },
  {
    "name": "escavalier",
    "id": 589,
    "type": [
      "bug",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/589/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/589.ogg"
  },
  {
    "name": "foongus",
    "id": 590,
    "type": [
      "grass",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/590/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/590.ogg"
  },
  {
    "name": "amoonguss",
    "id": 591,
    "type": [
      "grass",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/591/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/591.ogg"
  },
  {
    "name": "frillish",
    "id": 592,
    "type": [
      "water",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/592/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/592.ogg"
  },
  {
    "name": "jellicent",
    "id": 593,
    "type": [
      "water",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/593/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/593.ogg"
  },
  {
    "name": "alomomola",
    "id": 594,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/594/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/594.ogg"
  },
  {
    "name": "joltik",
    "id": 595,
    "type": [
      "bug",
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/595/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/595.ogg"
  },
  {
    "name": "galvantula",
    "id": 596,
    "type": [
      "bug",
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/596/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/596.ogg"
  },
  {
    "name": "ferroseed",
    "id": 597,
    "type": [
      "grass",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/597/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/597.ogg"
  },
  {
    "name": "ferrothorn",
    "id": 598,
    "type": [
      "grass",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/598/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/598.ogg"
  },
  {
    "name": "klink",
    "id": 599,
    "type": [
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/599/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/599.ogg"
  },
  {
    "name": "klang",
    "id": 600,
    "type": [
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/600/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/600.ogg"
  },
  {
    "name": "klinklang",
    "id": 601,
    "type": [
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/601/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/601.ogg"
  },
  {
    "name": "tynamo",
    "id": 602,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/602/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/602.ogg"
  },
  {
    "name": "eelektrik",
    "id": 603,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/603/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/603.ogg"
  },
  {
    "name": "eelektross",
    "id": 604,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/604/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/604.ogg"
  },
  {
    "name": "elgyem",
    "id": 605,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/605/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/605.ogg"
  },
  {
    "name": "beheeyem",
    "id": 606,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/606/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/606.ogg"
  },
  {
    "name": "litwick",
    "id": 607,
    "type": [
      "ghost",
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/607/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/607.ogg"
  },
  {
    "name": "lampent",
    "id": 608,
    "type": [
      "ghost",
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/608/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/608.ogg"
  },
  {
    "name": "chandelure",
    "id": 609,
    "type": [
      "ghost",
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/609/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/609.ogg"
  },
  {
    "name": "axew",
    "id": 610,
    "type": [
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/610/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/610.ogg"
  },
  {
    "name": "fraxure",
    "id": 611,
    "type": [
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/611/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/611.ogg"
  },
  {
    "name": "haxorus",
    "id": 612,
    "type": [
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/612/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/612.ogg"
  },
  {
    "name": "cubchoo",
    "id": 613,
    "type": [
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/613/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/613.ogg"
  },
  {
    "name": "beartic",
    "id": 614,
    "type": [
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/614/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/614.ogg"
  },
  {
    "name": "cryogonal",
    "id": 615,
    "type": [
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/615/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/615.ogg"
  },
  {
    "name": "shelmet",
    "id": 616,
    "type": [
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/616/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/616.ogg"
  },
  {
    "name": "accelgor",
    "id": 617,
    "type": [
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/617/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/617.ogg"
  },
  {
    "name": "stunfisk",
    "id": 618,
    "type": [
      "ground",
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/618/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/618.ogg"
  },
  {
    "name": "mienfoo",
    "id": 619,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/619/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/619.ogg"
  },
  {
    "name": "mienshao",
    "id": 620,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/620/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/620.ogg"
  },
  {
    "name": "druddigon",
    "id": 621,
    "type": [
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/621/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/621.ogg"
  },
  {
    "name": "golett",
    "id": 622,
    "type": [
      "ground",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/622/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/622.ogg"
  },
  {
    "name": "golurk",
    "id": 623,
    "type": [
      "ground",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/623/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/623.ogg"
  },
  {
    "name": "pawniard",
    "id": 624,
    "type": [
      "dark",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/624/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/624.ogg"
  },
  {
    "name": "bisharp",
    "id": 625,
    "type": [
      "dark",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/625/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/625.ogg"
  },
  {
    "name": "bouffalant",
    "id": 626,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/626/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/626.ogg"
  },
  {
    "name": "rufflet",
    "id": 627,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/627/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/627.ogg"
  },
  {
    "name": "braviary",
    "id": 628,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/628/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/628.ogg"
  },
  {
    "name": "vullaby",
    "id": 629,
    "type": [
      "dark",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/629/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/629.ogg"
  },
  {
    "name": "mandibuzz",
    "id": 630,
    "type": [
      "dark",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/630/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/630.ogg"
  },
  {
    "name": "heatmor",
    "id": 631,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/631/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/631.ogg"
  },
  {
    "name": "durant",
    "id": 632,
    "type": [
      "bug",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/632/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/632.ogg"
  },
  {
    "name": "deino",
    "id": 633,
    "type": [
      "dark",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/633/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/633.ogg"
  },
  {
    "name": "zweilous",
    "id": 634,
    "type": [
      "dark",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/634/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/634.ogg"
  },
  {
    "name": "hydreigon",
    "id": 635,
    "type": [
      "dark",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/635/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/635.ogg"
  },
  {
    "name": "larvesta",
    "id": 636,
    "type": [
      "bug",
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/636/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/636.ogg"
  },
  {
    "name": "volcarona",
    "id": 637,
    "type": [
      "bug",
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/637/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/637.ogg"
  },
  {
    "name": "cobalion",
    "id": 638,
    "type": [
      "steel",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/638/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/638.ogg"
  },
  {
    "name": "terrakion",
    "id": 639,
    "type": [
      "rock",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/639/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/639.ogg"
  },
  {
    "name": "virizion",
    "id": 640,
    "type": [
      "grass",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/640/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/640.ogg"
  },
  {
    "name": "tornadus",
    "id": 641,
    "type": [
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/641/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/641.ogg"
  },
  {
    "name": "thundurus",
    "id": 642,
    "type": [
      "electric",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/642/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/642.ogg"
  },
  {
    "name": "reshiram",
    "id": 643,
    "type": [
      "dragon",
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/643/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/643.ogg"
  },
  {
    "name": "zekrom",
    "id": 644,
    "type": [
      "dragon",
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/644/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/644.ogg"
  },
  {
    "name": "landorus",
    "id": 645,
    "type": [
      "ground",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/645/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/645.ogg"
  },
  {
    "name": "kyurem",
    "id": 646,
    "type": [
      "dragon",
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/646/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/646.ogg"
  },
  {
    "name": "keldeo",
    "id": 647,
    "type": [
      "water",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/647/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/647.ogg"
  },
  {
    "name": "meloetta",
    "id": 648,
    "type": [
      "normal",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/648/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/648.ogg"
  },
  {
    "name": "genesect",
    "id": 649,
    "type": [
      "bug",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/649/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/649.ogg"
  },
  {
    "name": "chespin",
    "id": 650,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/650/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/650.ogg"
  },
  {
    "name": "quilladin",
    "id": 651,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/651/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/651.ogg"
  },
  {
    "name": "chesnaught",
    "id": 652,
    "type": [
      "grass",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/652/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/652.ogg"
  },
  {
    "name": "fennekin",
    "id": 653,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/653/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/653.ogg"
  },
  {
    "name": "braixen",
    "id": 654,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/654/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/654.ogg"
  },
  {
    "name": "delphox",
    "id": 655,
    "type": [
      "fire",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/655/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/655.ogg"
  },
  {
    "name": "froakie",
    "id": 656,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/656/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/656.ogg"
  },
  {
    "name": "frogadier",
    "id": 657,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/657/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/657.ogg"
  },
  {
    "name": "greninja",
    "id": 658,
    "type": [
      "water",
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/658/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/658.ogg"
  },
  {
    "name": "bunnelby",
    "id": 659,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/659/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/659.ogg"
  },
  {
    "name": "diggersby",
    "id": 660,
    "type": [
      "normal",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/660/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/660.ogg"
  },
  {
    "name": "fletchling",
    "id": 661,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/661/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/661.ogg"
  },
  {
    "name": "fletchinder",
    "id": 662,
    "type": [
      "fire",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/662/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/662.ogg"
  },
  {
    "name": "talonflame",
    "id": 663,
    "type": [
      "fire",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/663/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/663.ogg"
  },
  {
    "name": "scatterbug",
    "id": 664,
    "type": [
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/664/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/664.ogg"
  },
  {
    "name": "spewpa",
    "id": 665,
    "type": [
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/665/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/665.ogg"
  },
  {
    "name": "vivillon",
    "id": 666,
    "type": [
      "bug",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/666/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/666.ogg"
  },
  {
    "name": "litleo",
    "id": 667,
    "type": [
      "fire",
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/667/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/667.ogg"
  },
  {
    "name": "pyroar",
    "id": 668,
    "type": [
      "fire",
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/668/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/668.ogg"
  },
  {
    "name": "flabebe",
    "id": 669,
    "type": [
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/669/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/669.ogg"
  },
  {
    "name": "floette",
    "id": 670,
    "type": [
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/670/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/670.ogg"
  },
  {
    "name": "florges",
    "id": 671,
    "type": [
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/671/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/671.ogg"
  },
  {
    "name": "skiddo",
    "id": 672,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/672/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/672.ogg"
  },
  {
    "name": "gogoat",
    "id": 673,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/673/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/673.ogg"
  },
  {
    "name": "pancham",
    "id": 674,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/674/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/674.ogg"
  },
  {
    "name": "pangoro",
    "id": 675,
    "type": [
      "fighting",
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/675/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/675.ogg"
  },
  {
    "name": "furfrou",
    "id": 676,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/676/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/676.ogg"
  },
  {
    "name": "espurr",
    "id": 677,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/677/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/677.ogg"
  },
  {
    "name": "meowstic",
    "id": 678,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/678/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/678.ogg"
  },
  {
    "name": "honedge",
    "id": 679,
    "type": [
      "steel",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/679/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/679.ogg"
  },
  {
    "name": "doublade",
    "id": 680,
    "type": [
      "steel",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/680/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/680.ogg"
  },
  {
    "name": "aegislash",
    "id": 681,
    "type": [
      "steel",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/681/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/681.ogg"
  },
  {
    "name": "spritzee",
    "id": 682,
    "type": [
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/682/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/682.ogg"
  },
  {
    "name": "aromatisse",
    "id": 683,
    "type": [
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/683/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/683.ogg"
  },
  {
    "name": "swirlix",
    "id": 684,
    "type": [
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/684/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/684.ogg"
  },
  {
    "name": "slurpuff",
    "id": 685,
    "type": [
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/685/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/685.ogg"
  },
  {
    "name": "inkay",
    "id": 686,
    "type": [
      "dark",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/686/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/686.ogg"
  },
  {
    "name": "malamar",
    "id": 687,
    "type": [
      "dark",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/687/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/687.ogg"
  },
  {
    "name": "binacle",
    "id": 688,
    "type": [
      "rock",
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/688/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/688.ogg"
  },
  {
    "name": "barbaracle",
    "id": 689,
    "type": [
      "rock",
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/689/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/689.ogg"
  },
  {
    "name": "skrelp",
    "id": 690,
    "type": [
      "poison",
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/690/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/690.ogg"
  },
  {
    "name": "dragalge",
    "id": 691,
    "type": [
      "poison",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/691/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/691.ogg"
  },
  {
    "name": "clauncher",
    "id": 692,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/692/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/692.ogg"
  },
  {
    "name": "clawitzer",
    "id": 693,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/693/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/693.ogg"
  },
  {
    "name": "helioptile",
    "id": 694,
    "type": [
      "electric",
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/694/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/694.ogg"
  },
  {
    "name": "heliolisk",
    "id": 695,
    "type": [
      "electric",
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/695/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/695.ogg"
  },
  {
    "name": "tyrunt",
    "id": 696,
    "type": [
      "rock",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/696/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/696.ogg"
  },
  {
    "name": "tyrantrum",
    "id": 697,
    "type": [
      "rock",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/697/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/697.ogg"
  },
  {
    "name": "amaura",
    "id": 698,
    "type": [
      "rock",
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/698/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/698.ogg"
  },
  {
    "name": "aurorus",
    "id": 699,
    "type": [
      "rock",
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/699/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/699.ogg"
  },
  {
    "name": "sylveon",
    "id": 700,
    "type": [
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/700/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/700.ogg"
  },
  {
    "name": "hawlucha",
    "id": 701,
    "type": [
      "fighting",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/701/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/701.ogg"
  },
  {
    "name": "dedenne",
    "id": 702,
    "type": [
      "electric",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/702/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/702.ogg"
  },
  {
    "name": "carbink",
    "id": 703,
    "type": [
      "rock",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/703/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/703.ogg"
  },
  {
    "name": "goomy",
    "id": 704,
    "type": [
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/704/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/704.ogg"
  },
  {
    "name": "sliggoo",
    "id": 705,
    "type": [
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/705/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/705.ogg"
  },
  {
    "name": "goodra",
    "id": 706,
    "type": [
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/706/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/706.ogg"
  },
  {
    "name": "klefki",
    "id": 707,
    "type": [
      "steel",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/707/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/707.ogg"
  },
  {
    "name": "phantump",
    "id": 708,
    "type": [
      "ghost",
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/708/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/708.ogg"
  },
  {
    "name": "trevenant",
    "id": 709,
    "type": [
      "ghost",
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/709/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/709.ogg"
  },
  {
    "name": "pumpkaboo",
    "id": 710,
    "type": [
      "ghost",
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/710/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/710.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/710.ogg"
  },
  {
    "name": "gourgeist",
    "id": 711,
    "type": [
      "ghost",
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/711/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/711.ogg"
  },
  {
    "name": "bergmite",
    "id": 712,
    "type": [
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/712/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/712.ogg"
  },
  {
    "name": "avalugg",
    "id": 713,
    "type": [
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/713/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/713.ogg"
  },
  {
    "name": "noibat",
    "id": 714,
    "type": [
      "flying",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/714/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/714.ogg"
  },
  {
    "name": "noivern",
    "id": 715,
    "type": [
      "flying",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/715/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/715.ogg"
  },
  {
    "name": "xerneas",
    "id": 716,
    "type": [
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/716/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/716.ogg"
  },
  {
    "name": "yveltal",
    "id": 717,
    "type": [
      "dark",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/717/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/717.ogg"
  },
  {
    "name": "zygarde",
    "id": 718,
    "type": [
      "dragon",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/718/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/718.ogg"
  },
  {
    "name": "diancie",
    "id": 719,
    "type": [
      "rock",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/719/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/719.ogg"
  },
  {
    "name": "hoopa",
    "id": 720,
    "type": [
      "psychic",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/720/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/720.ogg"
  },
  {
    "name": "volcanion",
    "id": 721,
    "type": [
      "fire",
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/721/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/721.ogg"
  },
  {
    "name": "rowlet",
    "id": 722,
    "type": [
      "grass",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/722/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/722.ogg"
  },
  {
    "name": "dartrix",
    "id": 723,
    "type": [
      "grass",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/723/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/723.ogg"
  },
  {
    "name": "decidueye",
    "id": 724,
    "type": [
      "grass",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/724/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/724.ogg"
  },
  {
    "name": "litten",
    "id": 725,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/725/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/725.ogg"
  },
  {
    "name": "torracat",
    "id": 726,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/726/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/726.ogg"
  },
  {
    "name": "incineroar",
    "id": 727,
    "type": [
      "fire",
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/727/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/727.ogg"
  },
  {
    "name": "popplio",
    "id": 728,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/728/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/728.ogg"
  },
  {
    "name": "brionne",
    "id": 729,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/729/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/729.ogg"
  },
  {
    "name": "primarina",
    "id": 730,
    "type": [
      "water",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/730/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/730.ogg"
  },
  {
    "name": "pikipek",
    "id": 731,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/731/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/731.ogg"
  },
  {
    "name": "trumbeak",
    "id": 732,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/732/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/732.ogg"
  },
  {
    "name": "toucannon",
    "id": 733,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/733/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/733.ogg"
  },
  {
    "name": "yungoos",
    "id": 734,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/734/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/734.ogg"
  },
  {
    "name": "gumshoos",
    "id": 735,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/735/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/735.ogg"
  },
  {
    "name": "grubbin",
    "id": 736,
    "type": [
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/736/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/736.ogg"
  },
  {
    "name": "charjabug",
    "id": 737,
    "type": [
      "bug",
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/737/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/737.ogg"
  },
  {
    "name": "vikavolt",
    "id": 738,
    "type": [
      "bug",
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/738/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/738.ogg"
  },
  {
    "name": "crabrawler",
    "id": 739,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/739/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/739.ogg"
  },
  {
    "name": "crabominable",
    "id": 740,
    "type": [
      "fighting",
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/740/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/740.ogg"
  },
  {
    "name": "oricorio",
    "id": 741,
    "type": [
      "fire",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/741/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/741.ogg"
  },
  {
    "name": "cutiefly",
    "id": 742,
    "type": [
      "bug",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/742/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/742.ogg"
  },
  {
    "name": "ribombee",
    "id": 743,
    "type": [
      "bug",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/743/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/743.ogg"
  },
  {
    "name": "rockruff",
    "id": 744,
    "type": [
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/744/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/744.ogg"
  },
  {
    "name": "lycanroc",
    "id": 745,
    "type": [
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/745/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/745.ogg"
  },
  {
    "name": "wishiwashi",
    "id": 746,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/746/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/746.ogg"
  },
  {
    "name": "mareanie",
    "id": 747,
    "type": [
      "poison",
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/747/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/747.ogg"
  },
  {
    "name": "toxapex",
    "id": 748,
    "type": [
      "poison",
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/748/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/748.ogg"
  },
  {
    "name": "mudbray",
    "id": 749,
    "type": [
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/749/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/749.ogg"
  },
  {
    "name": "mudsdale",
    "id": 750,
    "type": [
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/750/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/750.ogg"
  },
  {
    "name": "dewpider",
    "id": 751,
    "type": [
      "water",
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/751/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/751.ogg"
  },
  {
    "name": "araquanid",
    "id": 752,
    "type": [
      "water",
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/752/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/752.ogg"
  },
  {
    "name": "fomantis",
    "id": 753,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/753/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/753.ogg"
  },
  {
    "name": "lurantis",
    "id": 754,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/754/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/754.ogg"
  },
  {
    "name": "morelull",
    "id": 755,
    "type": [
      "grass",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/755/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/755.ogg"
  },
  {
    "name": "shiinotic",
    "id": 756,
    "type": [
      "grass",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/756/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/756.ogg"
  },
  {
    "name": "salandit",
    "id": 757,
    "type": [
      "poison",
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/757/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/757.ogg"
  },
  {
    "name": "salazzle",
    "id": 758,
    "type": [
      "poison",
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/758/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/758.ogg"
  },
  {
    "name": "stufful",
    "id": 759,
    "type": [
      "normal",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/759/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/759.ogg"
  },
  {
    "name": "bewear",
    "id": 760,
    "type": [
      "normal",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/760/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/760.ogg"
  },
  {
    "name": "bounsweet",
    "id": 761,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/761/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/761.ogg"
  },
  {
    "name": "steenee",
    "id": 762,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/762/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/762.ogg"
  },
  {
    "name": "tsareena",
    "id": 763,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/763/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/763.ogg"
  },
  {
    "name": "comfey",
    "id": 764,
    "type": [
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/764/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/764.ogg"
  },
  {
    "name": "oranguru",
    "id": 765,
    "type": [
      "normal",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/765/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/765.ogg"
  },
  {
    "name": "passimian",
    "id": 766,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/766/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/766.ogg"
  },
  {
    "name": "wimpod",
    "id": 767,
    "type": [
      "bug",
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/767/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/767.ogg"
  },
  {
    "name": "golisopod",
    "id": 768,
    "type": [
      "bug",
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/768/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/768.ogg"
  },
  {
    "name": "sandygast",
    "id": 769,
    "type": [
      "ghost",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/769/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/769.ogg"
  },
  {
    "name": "palossand",
    "id": 770,
    "type": [
      "ghost",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/770/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/770.ogg"
  },
  {
    "name": "pyukumuku",
    "id": 771,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/771/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/771.ogg"
  },
  {
    "name": "type-null",
    "id": 772,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/772/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/772.ogg"
  },
  {
    "name": "silvally",
    "id": 773,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/773/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/773.ogg"
  },
  {
    "name": "minior",
    "id": 774,
    "type": [
      "rock",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/774/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/774.ogg"
  },
  {
    "name": "komala",
    "id": 775,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/775/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/775.ogg"
  },
  {
    "name": "turtonator",
    "id": 776,
    "type": [
      "fire",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/776/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/776.ogg"
  },
  {
    "name": "togedemaru",
    "id": 777,
    "type": [
      "electric",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/777/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/777.ogg"
  },
  {
    "name": "mimikyu",
    "id": 778,
    "type": [
      "ghost",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/778/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/778.ogg"
  },
  {
    "name": "bruxish",
    "id": 779,
    "type": [
      "water",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/779/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/779.ogg"
  },
  {
    "name": "drampa",
    "id": 780,
    "type": [
      "normal",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/780/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/780.ogg"
  },
  {
    "name": "dhelmise",
    "id": 781,
    "type": [
      "ghost",
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/781/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/781.ogg"
  },
  {
    "name": "jangmo-o",
    "id": 782,
    "type": [
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/782/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/782.ogg"
  },
  {
    "name": "hakamo-o",
    "id": 783,
    "type": [
      "dragon",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/783/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/783.ogg"
  },
  {
    "name": "kommo-o",
    "id": 784,
    "type": [
      "dragon",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/784/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/784.ogg"
  },
  {
    "name": "tapu-koko",
    "id": 785,
    "type": [
      "electric",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/785/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/785.ogg"
  },
  {
    "name": "tapu-lele",
    "id": 786,
    "type": [
      "psychic",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/786/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/786.ogg"
  },
  {
    "name": "tapu-bulu",
    "id": 787,
    "type": [
      "grass",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/787/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/787.ogg"
  },
  {
    "name": "tapu-fini",
    "id": 788,
    "type": [
      "water",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/788/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/788.ogg"
  },
  {
    "name": "cosmog",
    "id": 789,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/789/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/789.ogg"
  },
  {
    "name": "cosmoem",
    "id": 790,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/790/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/790.ogg"
  },
  {
    "name": "solgaleo",
    "id": 791,
    "type": [
      "psychic",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/791/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/791.ogg"
  },
  {
    "name": "lunala",
    "id": 792,
    "type": [
      "psychic",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/792/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/792.ogg"
  },
  {
    "name": "nihilego",
    "id": 793,
    "type": [
      "rock",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/793/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/793.ogg"
  },
  {
    "name": "buzzwole",
    "id": 794,
    "type": [
      "bug",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/794/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/794.ogg"
  },
  {
    "name": "pheromosa",
    "id": 795,
    "type": [
      "bug",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/795/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/795.ogg"
  },
  {
    "name": "xurkitree",
    "id": 796,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/796/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/796.ogg"
  },
  {
    "name": "celesteela",
    "id": 797,
    "type": [
      "steel",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/797/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/797.ogg"
  },
  {
    "name": "kartana",
    "id": 798,
    "type": [
      "grass",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/798/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/798.ogg"
  },
  {
    "name": "guzzlord",
    "id": 799,
    "type": [
      "dark",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/799/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/799.ogg"
  },
  {
    "name": "necrozma",
    "id": 800,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/800/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/800.ogg"
  },
  {
    "name": "magearna",
    "id": 801,
    "type": [
      "steel",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/801/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/801.ogg"
  },
  {
    "name": "marshadow",
    "id": 802,
    "type": [
      "fighting",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/802/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/802.ogg"
  },
  {
    "name": "poipole",
    "id": 803,
    "type": [
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/803/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/803.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/803.ogg"
  },
  {
    "name": "naganadel",
    "id": 804,
    "type": [
      "poison",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/804/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/804.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/804.ogg"
  },
  {
    "name": "stakataka",
    "id": 805,
    "type": [
      "rock",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/805/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/805.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/805.ogg"
  },
  {
    "name": "blacephalon",
    "id": 806,
    "type": [
      "fire",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/806/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/806.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/806.ogg"
  },
  {
    "name": "zeraora",
    "id": 807,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/807/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/807.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/807.ogg"
  },
  {
    "name": "meltan",
    "id": 808,
    "type": [
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/808/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/808.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/808.ogg"
  },
  {
    "name": "melmetal",
    "id": 809,
    "type": [
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/809/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/809.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/809.ogg"
  },
  {
    "name": "grookey",
    "id": 810,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/810/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/810.ogg"
  },
  {
    "name": "thwackey",
    "id": 811,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/811/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/811.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/811.ogg"
  },
  {
    "name": "rillaboom",
    "id": 812,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/812/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/812.ogg"
  },
  {
    "name": "scorbunny",
    "id": 813,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/813/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/813.ogg"
  },
  {
    "name": "raboot",
    "id": 814,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/814/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/814.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/814.ogg"
  },
  {
    "name": "cinderace",
    "id": 815,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/815/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/815.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/815.ogg"
  },
  {
    "name": "sobble",
    "id": 816,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/816/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/816.ogg"
  },
  {
    "name": "drizzile",
    "id": 817,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/817/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/817.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/817.ogg"
  },
  {
    "name": "inteleon",
    "id": 818,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/818/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/818.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/818.ogg"
  },
  {
    "name": "skwovet",
    "id": 819,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/819/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/819.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/819.ogg"
  },
  {
    "name": "greedent",
    "id": 820,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/820/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/820.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/820.ogg"
  },
  {
    "name": "rookidee",
    "id": 821,
    "type": [
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/821/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/821.ogg"
  },
  {
    "name": "corvisquire",
    "id": 822,
    "type": [
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/822/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/822.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/822.ogg"
  },
  {
    "name": "corviknight",
    "id": 823,
    "type": [
      "flying",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/823/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/823.ogg"
  },
  {
    "name": "blipbug",
    "id": 824,
    "type": [
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/824/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/824.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/824.ogg"
  },
  {
    "name": "dottler",
    "id": 825,
    "type": [
      "bug",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/825/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/825.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/825.ogg"
  },
  {
    "name": "orbeetle",
    "id": 826,
    "type": [
      "bug",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/826/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/826.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/826.ogg"
  },
  {
    "name": "nickit",
    "id": 827,
    "type": [
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/827/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/827.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/827.ogg"
  },
  {
    "name": "thievul",
    "id": 828,
    "type": [
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/828/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/828.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/828.ogg"
  },
  {
    "name": "gossifleur",
    "id": 829,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/829/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/829.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/829.ogg"
  },
  {
    "name": "eldegoss",
    "id": 830,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/830/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/830.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/830.ogg"
  },
  {
    "name": "wooloo",
    "id": 831,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/831/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/831.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/831.ogg"
  },
  {
    "name": "dubwool",
    "id": 832,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/832/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/832.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/832.ogg"
  },
  {
    "name": "chewtle",
    "id": 833,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/833/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/833.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/833.ogg"
  },
  {
    "name": "drednaw",
    "id": 834,
    "type": [
      "water",
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/834/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/834.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/834.ogg"
  },
  {
    "name": "yamper",
    "id": 835,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/835/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/835.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/835.ogg"
  },
  {
    "name": "boltund",
    "id": 836,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/836/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/836.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/836.ogg"
  },
  {
    "name": "rolycoly",
    "id": 837,
    "type": [
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/837/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/837.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/837.ogg"
  },
  {
    "name": "carkol",
    "id": 838,
    "type": [
      "rock",
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/838/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/838.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/838.ogg"
  },
  {
    "name": "coalossal",
    "id": 839,
    "type": [
      "rock",
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/839/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/839.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/839.ogg"
  },
  {
    "name": "applin",
    "id": 840,
    "type": [
      "grass",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/840/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/840.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/840.ogg"
  },
  {
    "name": "flapple",
    "id": 841,
    "type": [
      "grass",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/841/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/841.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/841.ogg"
  },
  {
    "name": "appletun",
    "id": 842,
    "type": [
      "grass",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/842/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/842.ogg"
  },
  {
    "name": "silicobra",
    "id": 843,
    "type": [
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/843/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/843.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/843.ogg"
  },
  {
    "name": "sandaconda",
    "id": 844,
    "type": [
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/844/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/844.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/844.ogg"
  },
  {
    "name": "cramorant",
    "id": 845,
    "type": [
      "flying",
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/845/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/845.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/845.ogg"
  },
  {
    "name": "arrokuda",
    "id": 846,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/846/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/846.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/846.ogg"
  },
  {
    "name": "barraskewda",
    "id": 847,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/847/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/847.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/847.ogg"
  },
  {
    "name": "toxel",
    "id": 848,
    "type": [
      "electric",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/848/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/848.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/848.ogg"
  },
  {
    "name": "toxtricity",
    "id": 849,
    "type": [
      "electric",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/849/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/849.ogg"
  },
  {
    "name": "sizzlipede",
    "id": 850,
    "type": [
      "fire",
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/850/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/850.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/850.ogg"
  },
  {
    "name": "centiskorch",
    "id": 851,
    "type": [
      "fire",
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/851/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/851.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/851.ogg"
  },
  {
    "name": "clobbopus",
    "id": 852,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/852/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/852.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/852.ogg"
  },
  {
    "name": "grapploct",
    "id": 853,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/853/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/853.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/853.ogg"
  },
  {
    "name": "sinistea",
    "id": 854,
    "type": [
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/854/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/854.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/854.ogg"
  },
  {
    "name": "polteageist",
    "id": 855,
    "type": [
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/855/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/855.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/855.ogg"
  },
  {
    "name": "hatenna",
    "id": 856,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/856/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/856.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/856.ogg"
  },
  {
    "name": "hattrem",
    "id": 857,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/857/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/857.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/857.ogg"
  },
  {
    "name": "hatterene",
    "id": 858,
    "type": [
      "psychic",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/858/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/858.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/858.ogg"
  },
  {
    "name": "impidimp",
    "id": 859,
    "type": [
      "dark",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/859/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/859.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/859.ogg"
  },
  {
    "name": "morgrem",
    "id": 860,
    "type": [
      "dark",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/860/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/860.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/860.ogg"
  },
  {
    "name": "grimmsnarl",
    "id": 861,
    "type": [
      "dark",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/861/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/861.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/861.ogg"
  },
  {
    "name": "obstagoon",
    "id": 862,
    "type": [
      "dark",
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/862/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/862.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/862.ogg"
  },
  {
    "name": "perrserker",
    "id": 863,
    "type": [
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/863/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/863.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/863.ogg"
  },
  {
    "name": "cursola",
    "id": 864,
    "type": [
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/864/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/864.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/864.ogg"
  },
  {
    "name": "sirfetchd",
    "id": 865,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/865/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/865.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/865.ogg"
  },
  {
    "name": "mr-rime",
    "id": 866,
    "type": [
      "ice",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/866/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/866.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/866.ogg"
  },
  {
    "name": "runerigus",
    "id": 867,
    "type": [
      "ground",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/867/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/867.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/867.ogg"
  },
  {
    "name": "milcery",
    "id": 868,
    "type": [
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/868/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/868.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/868.ogg"
  },
  {
    "name": "alcremie",
    "id": 869,
    "type": [
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/869/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/869.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/869.ogg"
  },
  {
    "name": "falinks",
    "id": 870,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/870/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/870.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/870.ogg"
  },
  {
    "name": "pincurchin",
    "id": 871,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/871/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/871.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/871.ogg"
  },
  {
    "name": "snom",
    "id": 872,
    "type": [
      "ice",
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/872/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/872.ogg"
  },
  {
    "name": "frosmoth",
    "id": 873,
    "type": [
      "ice",
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/873/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/873.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/873.ogg"
  },
  {
    "name": "stonjourner",
    "id": 874,
    "type": [
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/874/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/874.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/874.ogg"
  },
  {
    "name": "eiscue",
    "id": 875,
    "type": [
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/875/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/875.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/875.ogg"
  },
  {
    "name": "indeedee",
    "id": 876,
    "type": [
      "psychic",
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/876/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/876.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/876.ogg"
  },
  {
    "name": "morpeko",
    "id": 877,
    "type": [
      "electric",
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/877/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/877.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/877.ogg"
  },
  {
    "name": "cufant",
    "id": 878,
    "type": [
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/878/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/878.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/878.ogg"
  },
  {
    "name": "copperajah",
    "id": 879,
    "type": [
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/879/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/879.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/879.ogg"
  },
  {
    "name": "dracozolt",
    "id": 880,
    "type": [
      "electric",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/880/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/880.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/880.ogg"
  },
  {
    "name": "arctozolt",
    "id": 881,
    "type": [
      "electric",
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/881/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/881.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/881.ogg"
  },
  {
    "name": "dracovish",
    "id": 882,
    "type": [
      "water",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/882/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/882.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/882.ogg"
  },
  {
    "name": "arctovish",
    "id": 883,
    "type": [
      "water",
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/883/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/883.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/883.ogg"
  },
  {
    "name": "duraludon",
    "id": 884,
    "type": [
      "steel",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/884/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/884.ogg"
  },
  {
    "name": "dreepy",
    "id": 885,
    "type": [
      "dragon",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/885/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/885.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/885.ogg"
  },
  {
    "name": "drakloak",
    "id": 886,
    "type": [
      "dragon",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/886/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/886.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/886.ogg"
  },
  {
    "name": "dragapult",
    "id": 887,
    "type": [
      "dragon",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/887/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/887.ogg"
  },
  {
    "name": "zacian",
    "id": 888,
    "type": [
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/888/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/888.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/888.ogg"
  },
  {
    "name": "zamazenta",
    "id": 889,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/889/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/889.ogg"
  },
  {
    "name": "eternatus",
    "id": 890,
    "type": [
      "poison",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/890/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/890.ogg"
  },
  {
    "name": "kubfu",
    "id": 891,
    "type": [
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/891/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/891.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/891.ogg"
  },
  {
    "name": "urshifu",
    "id": 892,
    "type": [
      "fighting",
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/892/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/892.ogg"
  },
  {
    "name": "zarude",
    "id": 893,
    "type": [
      "dark",
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/893/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/893.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/893.ogg"
  },
  {
    "name": "regieleki",
    "id": 894,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/894/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/894.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/894.ogg"
  },
  {
    "name": "regidrago",
    "id": 895,
    "type": [
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/895/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/895.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/895.ogg"
  },
  {
    "name": "glastrier",
    "id": 896,
    "type": [
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/896/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/896.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/896.ogg"
  },
  {
    "name": "spectrier",
    "id": 897,
    "type": [
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/897/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/897.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/897.ogg"
  },
  {
    "name": "calyrex",
    "id": 898,
    "type": [
      "psychic",
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/898/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/898.ogg"
  },
  {
    "name": "wyrdeer",
    "id": 899,
    "type": [
      "normal",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/899/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/899.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/899.ogg"
  },
  {
    "name": "kleavor",
    "id": 900,
    "type": [
      "bug",
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/900/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/900.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/900.ogg"
  },
  {
    "name": "ursaluna",
    "id": 901,
    "type": [
      "ground",
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/901/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/901.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/901.ogg"
  },
  {
    "name": "basculegion",
    "id": 902,
    "type": [
      "water",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/902/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/902.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/902.ogg"
  },
  {
    "name": "sneasler",
    "id": 903,
    "type": [
      "fighting",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/903/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/903.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/903.ogg"
  },
  {
    "name": "overqwil",
    "id": 904,
    "type": [
      "dark",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/904/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/904.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/904.ogg"
  },
  {
    "name": "enamorus",
    "id": 905,
    "type": [
      "fairy",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/905/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/905.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/905.ogg"
  },
  {
    "name": "sprigatito",
    "id": 906,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/906/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/906.ogg"
  },
  {
    "name": "floragato",
    "id": 907,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/907/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/907.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/907.ogg"
  },
  {
    "name": "meowscarada",
    "id": 908,
    "type": [
      "grass",
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/908/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/908.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/908.ogg"
  },
  {
    "name": "fuecoco",
    "id": 909,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/909/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/909.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/909.ogg"
  },
  {
    "name": "crocalor",
    "id": 910,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/910/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/910.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/910.ogg"
  },
  {
    "name": "skeledirge",
    "id": 911,
    "type": [
      "fire",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/911/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/911.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/911.ogg"
  },
  {
    "name": "quaxly",
    "id": 912,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/912/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/912.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/912.ogg"
  },
  {
    "name": "quaxwell",
    "id": 913,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/913/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/913.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/913.ogg"
  },
  {
    "name": "quaquaval",
    "id": 914,
    "type": [
      "water",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/914/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/914.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/914.ogg"
  },
  {
    "name": "lechonk",
    "id": 915,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/915/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/915.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/915.ogg"
  },
  {
    "name": "oinkologne",
    "id": 916,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/916/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/916.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/916.ogg"
  },
  {
    "name": "tarountula",
    "id": 917,
    "type": [
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/917/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/917.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/917.ogg"
  },
  {
    "name": "spidops",
    "id": 918,
    "type": [
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/918/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/918.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/918.ogg"
  },
  {
    "name": "nymble",
    "id": 919,
    "type": [
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/919/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/919.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/919.ogg"
  },
  {
    "name": "lokix",
    "id": 920,
    "type": [
      "bug",
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/920/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/920.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/920.ogg"
  },
  {
    "name": "pawmi",
    "id": 921,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/921/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/921.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/921.ogg"
  },
  {
    "name": "pawmo",
    "id": 922,
    "type": [
      "electric",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/922/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/922.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/922.ogg"
  },
  {
    "name": "pawmot",
    "id": 923,
    "type": [
      "electric",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/923/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/923.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/923.ogg"
  },
  {
    "name": "tandemaus",
    "id": 924,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/924/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/924.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/924.ogg"
  },
  {
    "name": "maushold",
    "id": 925,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/925/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/925.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/925.ogg"
  },
  {
    "name": "fidough",
    "id": 926,
    "type": [
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/926/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/926.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/926.ogg"
  },
  {
    "name": "dachsbun",
    "id": 927,
    "type": [
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/927/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/927.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/927.ogg"
  },
  {
    "name": "smoliv",
    "id": 928,
    "type": [
      "grass",
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/928/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/928.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/928.ogg"
  },
  {
    "name": "dolliv",
    "id": 929,
    "type": [
      "grass",
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/929/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/929.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/929.ogg"
  },
  {
    "name": "arboliva",
    "id": 930,
    "type": [
      "grass",
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/930/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/930.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/930.ogg"
  },
  {
    "name": "squawkabilly",
    "id": 931,
    "type": [
      "normal",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/931/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/931.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/931.ogg"
  },
  {
    "name": "nacli",
    "id": 932,
    "type": [
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/932/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/932.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/932.ogg"
  },
  {
    "name": "naclstack",
    "id": 933,
    "type": [
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/933/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/933.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/933.ogg"
  },
  {
    "name": "garganacl",
    "id": 934,
    "type": [
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/934/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/934.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/934.ogg"
  },
  {
    "name": "charcadet",
    "id": 935,
    "type": [
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/935/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/935.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/935.ogg"
  },
  {
    "name": "armarouge",
    "id": 936,
    "type": [
      "fire",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/936/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/936.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/936.ogg"
  },
  {
    "name": "ceruledge",
    "id": 937,
    "type": [
      "fire",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/937/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/937.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/937.ogg"
  },
  {
    "name": "tadbulb",
    "id": 938,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/938/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/938.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/938.ogg"
  },
  {
    "name": "bellibolt",
    "id": 939,
    "type": [
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/939/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/939.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/939.ogg"
  },
  {
    "name": "wattrel",
    "id": 940,
    "type": [
      "electric",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/940/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/940.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/940.ogg"
  },
  {
    "name": "kilowattrel",
    "id": 941,
    "type": [
      "electric",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/941/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/941.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/941.ogg"
  },
  {
    "name": "maschiff",
    "id": 942,
    "type": [
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/942/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/942.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/942.ogg"
  },
  {
    "name": "mabosstiff",
    "id": 943,
    "type": [
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/943/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/943.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/943.ogg"
  },
  {
    "name": "shroodle",
    "id": 944,
    "type": [
      "poison",
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/944/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/944.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/944.ogg"
  },
  {
    "name": "grafaiai",
    "id": 945,
    "type": [
      "poison",
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/945/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/945.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/945.ogg"
  },
  {
    "name": "bramblin",
    "id": 946,
    "type": [
      "grass",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/946/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/946.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/946.ogg"
  },
  {
    "name": "brambleghast",
    "id": 947,
    "type": [
      "grass",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/947/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/947.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/947.ogg"
  },
  {
    "name": "toedscool",
    "id": 948,
    "type": [
      "ground",
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/948/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/948.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/948.ogg"
  },
  {
    "name": "toedscruel",
    "id": 949,
    "type": [
      "ground",
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/949/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/949.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/949.ogg"
  },
  {
    "name": "klawf",
    "id": 950,
    "type": [
      "rock"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/950/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/950.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/950.ogg"
  },
  {
    "name": "capsakid",
    "id": 951,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/951/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/951.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/951.ogg"
  },
  {
    "name": "scovillain",
    "id": 952,
    "type": [
      "grass",
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/952/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/952.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/952.ogg"
  },
  {
    "name": "rellor",
    "id": 953,
    "type": [
      "bug"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/953/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/953.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/953.ogg"
  },
  {
    "name": "rabsca",
    "id": 954,
    "type": [
      "bug",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/954/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/954.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/954.ogg"
  },
  {
    "name": "flittle",
    "id": 955,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/955/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/955.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/955.ogg"
  },
  {
    "name": "espathra",
    "id": 956,
    "type": [
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/956/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/956.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/956.ogg"
  },
  {
    "name": "tinkatink",
    "id": 957,
    "type": [
      "fairy",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/957/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/957.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/957.ogg"
  },
  {
    "name": "tinkatuff",
    "id": 958,
    "type": [
      "fairy",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/958/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/958.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/958.ogg"
  },
  {
    "name": "tinkaton",
    "id": 959,
    "type": [
      "fairy",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/959/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/959.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/959.ogg"
  },
  {
    "name": "wiglett",
    "id": 960,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/960/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/960.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/960.ogg"
  },
  {
    "name": "wugtrio",
    "id": 961,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/961/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/961.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/961.ogg"
  },
  {
    "name": "bombirdier",
    "id": 962,
    "type": [
      "flying",
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/962/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/962.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/962.ogg"
  },
  {
    "name": "finizen",
    "id": 963,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/963/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/963.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/963.ogg"
  },
  {
    "name": "palafin",
    "id": 964,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/964/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/964.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/964.ogg"
  },
  {
    "name": "varoom",
    "id": 965,
    "type": [
      "steel",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/965/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/965.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/965.ogg"
  },
  {
    "name": "revavroom",
    "id": 966,
    "type": [
      "steel",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/966/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/966.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/966.ogg"
  },
  {
    "name": "cyclizar",
    "id": 967,
    "type": [
      "dragon",
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/967/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/967.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/967.ogg"
  },
  {
    "name": "orthworm",
    "id": 968,
    "type": [
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/968/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/968.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/968.ogg"
  },
  {
    "name": "glimmet",
    "id": 969,
    "type": [
      "rock",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/969/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/969.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/969.ogg"
  },
  {
    "name": "glimmora",
    "id": 970,
    "type": [
      "rock",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/970/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/970.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/970.ogg"
  },
  {
    "name": "greavard",
    "id": 971,
    "type": [
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/971/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/971.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/971.ogg"
  },
  {
    "name": "houndstone",
    "id": 972,
    "type": [
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/972/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/972.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/972.ogg"
  },
  {
    "name": "flamigo",
    "id": 973,
    "type": [
      "flying",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/973/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/973.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/973.ogg"
  },
  {
    "name": "cetoddle",
    "id": 974,
    "type": [
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/974/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/974.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/974.ogg"
  },
  {
    "name": "cetitan",
    "id": 975,
    "type": [
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/975/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/975.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/975.ogg"
  },
  {
    "name": "veluza",
    "id": 976,
    "type": [
      "water",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/976/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/976.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/976.ogg"
  },
  {
    "name": "dondozo",
    "id": 977,
    "type": [
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/977/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/977.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/977.ogg"
  },
  {
    "name": "tatsugiri",
    "id": 978,
    "type": [
      "dragon",
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/978/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/978.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/978.ogg"
  },
  {
    "name": "annihilape",
    "id": 979,
    "type": [
      "fighting",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/979/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/979.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/979.ogg"
  },
  {
    "name": "clodsire",
    "id": 980,
    "type": [
      "poison",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/980/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/980.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/980.ogg"
  },
  {
    "name": "farigiraf",
    "id": 981,
    "type": [
      "normal",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/981/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/981.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/981.ogg"
  },
  {
    "name": "dudunsparce",
    "id": 982,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/982/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/982.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/982.ogg"
  },
  {
    "name": "kingambit",
    "id": 983,
    "type": [
      "dark",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/983/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/983.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/983.ogg"
  },
  {
    "name": "great-tusk",
    "id": 984,
    "type": [
      "ground",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/984/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/984.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/984.ogg"
  },
  {
    "name": "scream-tail",
    "id": 985,
    "type": [
      "fairy",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/985/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/985.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/985.ogg"
  },
  {
    "name": "brute-bonnet",
    "id": 986,
    "type": [
      "grass",
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/986/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/986.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/986.ogg"
  },
  {
    "name": "flutter-mane",
    "id": 987,
    "type": [
      "ghost",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/987/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/987.ogg"
  },
  {
    "name": "slither-wing",
    "id": 988,
    "type": [
      "bug",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/988/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/988.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/988.ogg"
  },
  {
    "name": "sandy-shocks",
    "id": 989,
    "type": [
      "electric",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/989/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/989.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/989.ogg"
  },
  {
    "name": "iron-treads",
    "id": 990,
    "type": [
      "ground",
      "steel"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/990/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/990.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/990.ogg"
  },
  {
    "name": "iron-bundle",
    "id": 991,
    "type": [
      "ice",
      "water"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/991/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/991.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/991.ogg"
  },
  {
    "name": "iron-hands",
    "id": 992,
    "type": [
      "fighting",
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/992/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/992.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/992.ogg"
  },
  {
    "name": "iron-jugulis",
    "id": 993,
    "type": [
      "dark",
      "flying"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/993/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/993.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/993.ogg"
  },
  {
    "name": "iron-moth",
    "id": 994,
    "type": [
      "fire",
      "poison"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/994/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/994.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/994.ogg"
  },
  {
    "name": "iron-thorns",
    "id": 995,
    "type": [
      "rock",
      "electric"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/995/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/995.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/995.ogg"
  },
  {
    "name": "frigibax",
    "id": 996,
    "type": [
      "dragon",
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/996/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/996.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/996.ogg"
  },
  {
    "name": "arctibax",
    "id": 997,
    "type": [
      "dragon",
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/997/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/997.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/997.ogg"
  },
  {
    "name": "baxcalibur",
    "id": 998,
    "type": [
      "dragon",
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/998/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/998.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/998.ogg"
  },
  {
    "name": "gimmighoul",
    "id": 999,
    "type": [
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/999/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/999.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/999.ogg"
  },
  {
    "name": "gholdengo",
    "id": 1000,
    "type": [
      "steel",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1000/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1000.ogg"
  },
  {
    "name": "wo-chien",
    "id": 1001,
    "type": [
      "dark",
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1001/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1001.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1001.ogg"
  },
  {
    "name": "chien-pao",
    "id": 1002,
    "type": [
      "dark",
      "ice"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1002/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1002.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1002.ogg"
  },
  {
    "name": "ting-lu",
    "id": 1003,
    "type": [
      "dark",
      "ground"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1003/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1003.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1003.ogg"
  },
  {
    "name": "chi-yu",
    "id": 1004,
    "type": [
      "dark",
      "fire"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1004/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1004.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1004.ogg"
  },
  {
    "name": "roaring-moon",
    "id": 1005,
    "type": [
      "dragon",
      "dark"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1005/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1005.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1005.ogg"
  },
  {
    "name": "iron-valiant",
    "id": 1006,
    "type": [
      "fairy",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1006/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1006.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1006.ogg"
  },
  {
    "name": "koraidon",
    "id": 1007,
    "type": [
      "fighting",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1007/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1007.ogg"
  },
  {
    "name": "miraidon",
    "id": 1008,
    "type": [
      "electric",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1008/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1008.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1008.ogg"
  },
  {
    "name": "walking-wake",
    "id": 1009,
    "type": [
      "water",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1009/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1009.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1009.ogg"
  },
  {
    "name": "iron-leaves",
    "id": 1010,
    "type": [
      "grass",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1010/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1010.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1010.ogg"
  },
  {
    "name": "dipplin",
    "id": 1011,
    "type": [
      "grass",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1011/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1011.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1011.ogg"
  },
  {
    "name": "poltchageist",
    "id": 1012,
    "type": [
      "grass",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1012/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1012.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1012.ogg"
  },
  {
    "name": "sinistcha",
    "id": 1013,
    "type": [
      "grass",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1013/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1013.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1013.ogg"
  },
  {
    "name": "okidogi",
    "id": 1014,
    "type": [
      "poison",
      "fighting"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1014/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1014.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1014.ogg"
  },
  {
    "name": "munkidori",
    "id": 1015,
    "type": [
      "poison",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1015/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1015.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1015.ogg"
  },
  {
    "name": "fezandipiti",
    "id": 1016,
    "type": [
      "poison",
      "fairy"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1016/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1016.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1016.ogg"
  },
  {
    "name": "ogerpon",
    "id": 1017,
    "type": [
      "grass"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1017/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1017.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1017.ogg"
  },
  {
    "name": "archaludon",
    "id": 1018,
    "type": [
      "steel",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1018/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1018.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1018.ogg"
  },
  {
    "name": "hydrapple",
    "id": 1019,
    "type": [
      "grass",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1019/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1019.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1019.ogg"
  },
  {
    "name": "gouging-fire",
    "id": 1020,
    "type": [
      "fire",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1020/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1020.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1020.ogg"
  },
  {
    "name": "raging-bolt",
    "id": 1021,
    "type": [
      "electric",
      "dragon"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1021/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1021.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1021.ogg"
  },
  {
    "name": "iron-boulder",
    "id": 1022,
    "type": [
      "rock",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1022/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1022.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1022.ogg"
  },
  {
    "name": "iron-crown",
    "id": 1023,
    "type": [
      "steel",
      "psychic"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1023/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1023.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1023.ogg"
  },
  {
    "name": "terapagos",
    "id": 1024,
    "type": [
      "normal"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1024/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1024.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1024.ogg"
  },
  {
    "name": "pecharunt",
    "id": 1025,
    "type": [
      "poison",
      "ghost"
    ],
    "url": "https://pokeapi.co/api/v2/pokemon/1025/",
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1025.png",
    "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1025.ogg"
  }
];