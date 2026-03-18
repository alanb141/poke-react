export const excludedNames = [
  'deoxys-normal', 'wormadam-plant', 'giratina-altered', 'shaymin-land',
  'basculin-red-striped', 'darmanitan-standard', 'tornadus-incarnate',
  'thundurus-incarnate', 'landorus-incarnate', 'keldeo-ordinary',
  'meloetta-aria', 'meowstic-male', 'aegislash-shield', 'pumpkaboo-average',
  'gourgeist-average', 'zygarde-50', 'oricorio-baile', 'lycanroc-midday',
  'wishiwashi-solo', 'minior-red-meteor', 'mimikyu-disguised',
  'toxtricity-amped', 'eiscue-ice', 'indeedee-male', 'morpeko-full-belly',
  'urshifu-single-strike', 'basculegion-male', 'enamorus-incarnate', '', "oinkologne-male", "maushold-family-of-four", "squawkabilly-green-plumage", "palafin-zero", "tatsugiri-curly", "dudunsparce-two-segment", "zigzagoon-galar", "linoone-galar", "lycanroc-midnight", "lycanroc-dusk", "meowstic-female", "pyroar-male"
];
export const replaceDash = ["great-tusk", "scream-tail", "brute-bonnet", "flutter-mane", "slither-wing", "sandy-shocks", "walking-wake", "gouging-fire", "raging-bolt", "iron-treads", "iron-bundle", "iron-hands", "iron-jugulis", "iron-moth", "iron-thorns", "iron-valiant", "iron-leaves", "iron-boulder", "iron-crown", "mr-mime", "mime-jr", "mr-rime", "tapu-koko", "tapu-lele", "tapu-bulu", "tapu-fini",];

export const genArray = [
  ["generation-i", "generation-ii", "generation-iii", "generation-iv", "generation-v", "generation-vi", "generation-vii", "generation-viii", "generation-ix"],
  ["Generation I", "Generation II", "Generation III", "Generation IV", "Generation V", "Generation VI", "Generation VII", "Generation VIII", "Generation IX"]
];
export const gameArray = [
  ["red-blue", "gold-silver", "ruby-sapphire", "diamond-pearl", "platinum", "heartgold-soulsilver", "black-white", "black-2-white-2", "x-y", "omega-ruby-alpha-sapphire", "sun-moon", "ultra-sun-ultra-moon", "lets-go", "sword-shield", "isle-of-armor", "crown-tundra", "legends-arceus", "scarlet-violet", "kitakami", "blueberry", "legends-za", "hyperspace"],
  ["Red / Blue", "Gold / Silver", "Ruby / Sapphire", "Diamond / Pearl", "Platinum", "HeartGold / SoulSilver", "Black / White", "Black 2 / White 2", "X / Y", "Omega Ruby / Alpha Sapphire", "Sun / Moon", "Ultra Sun / Ultra Moon", "Let's Go Pikachu / Eevee", "Sword / Shield", "- The Isle of Armor (DLC)", "- The Crown Tundra (DLC)", "Legends: Arceus", "Scarlet / Violet", "- The Teal Mask (DLC)", "- The Indigo Disk (DLC)", "Legends: ZA", "- Mega Dimension (DLC)"]
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

export const fullPokemons = [
  {
    "name": "bulbasaur",
    "id": 1,
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
  },
  {
    "name": "weedle",
    "id": 13,
    "gen": "generation-i",
    "regions": {
      "red-blue": 13,
      "gold-silver": 27,
      "heartgold-soulsilver": 27,
      "x-y": 26,
      "lets-go": 13,
      "legends-za": 18
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "legends-za"
    ]
  },
  {
    "name": "kakuna",
    "id": 14,
    "gen": "generation-i",
    "regions": {
      "red-blue": 14,
      "gold-silver": 28,
      "heartgold-soulsilver": 28,
      "x-y": 27,
      "lets-go": 14,
      "legends-za": 19
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "legends-za"
    ]
  },
  {
    "name": "beedrill",
    "id": 15,
    "gen": "generation-i",
    "regions": {
      "red-blue": 15,
      "gold-silver": 29,
      "heartgold-soulsilver": 29,
      "x-y": 28,
      "lets-go": 15,
      "legends-za": 20
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "legends-za"
    ]
  },
  {
    "name": "pidgey",
    "id": 16,
    "gen": "generation-i",
    "regions": {
      "red-blue": 16,
      "gold-silver": 10,
      "heartgold-soulsilver": 10,
      "x-y": 17,
      "lets-go": 16,
      "legends-za": 21
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "legends-za"
    ]
  },
  {
    "name": "pidgeotto",
    "id": 17,
    "gen": "generation-i",
    "regions": {
      "red-blue": 17,
      "gold-silver": 11,
      "heartgold-soulsilver": 11,
      "x-y": 18,
      "lets-go": 17,
      "legends-za": 22
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "legends-za"
    ]
  },
  {
    "name": "pidgeot",
    "id": 18,
    "gen": "generation-i",
    "regions": {
      "red-blue": 18,
      "gold-silver": 12,
      "heartgold-soulsilver": 12,
      "x-y": 19,
      "lets-go": 18,
      "legends-za": 23
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "legends-za"
    ]
  },
  {
    "name": "rattata",
    "id": 19,
    "gen": "generation-i",
    "regions": {
      "red-blue": 19,
      "gold-silver": 17,
      "heartgold-soulsilver": 17,
      "black-2-white-2": 60,
      "lets-go": 19
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "black-2-white-2",
      "lets-go"
    ]
  },
  {
    "name": "raticate",
    "id": 20,
    "gen": "generation-i",
    "regions": {
      "red-blue": 20,
      "gold-silver": 18,
      "heartgold-soulsilver": 18,
      "black-2-white-2": 61,
      "lets-go": 20
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "black-2-white-2",
      "lets-go"
    ]
  },
  {
    "name": "spearow",
    "id": 21,
    "gen": "generation-i",
    "regions": {
      "red-blue": 21,
      "gold-silver": 13,
      "heartgold-soulsilver": 13,
      "x-y": 415,
      "sun-moon": 73,
      "ultra-sun-ultra-moon": 87,
      "lets-go": 21
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go"
    ]
  },
  {
    "name": "fearow",
    "id": 22,
    "gen": "generation-i",
    "regions": {
      "red-blue": 22,
      "gold-silver": 14,
      "heartgold-soulsilver": 14,
      "x-y": 416,
      "sun-moon": 74,
      "ultra-sun-ultra-moon": 88,
      "lets-go": 22
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go"
    ]
  },
  {
    "name": "ekans",
    "id": 23,
    "gen": "generation-i",
    "regions": {
      "red-blue": 23,
      "gold-silver": 50,
      "heartgold-soulsilver": 50,
      "x-y": 343,
      "ultra-sun-ultra-moon": 61,
      "lets-go": 23,
      "kitakami": 18,
      "legends-za": 60
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "ultra-sun-ultra-moon",
      "lets-go",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "arbok",
    "id": 24,
    "gen": "generation-i",
    "regions": {
      "red-blue": 24,
      "gold-silver": 51,
      "heartgold-soulsilver": 51,
      "x-y": 344,
      "ultra-sun-ultra-moon": 62,
      "lets-go": 24,
      "kitakami": 19,
      "legends-za": 61
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "ultra-sun-ultra-moon",
      "lets-go",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "pikachu",
    "id": 25,
    "gen": "generation-i",
    "regions": {
      "red-blue": 25,
      "gold-silver": 22,
      "ruby-sapphire": 156,
      "diamond-pearl": 104,
      "platinum": 104,
      "heartgold-soulsilver": 22,
      "x-y": 36,
      "omega-ruby-alpha-sapphire": 163,
      "sun-moon": 25,
      "ultra-sun-ultra-moon": 32,
      "lets-go": 25,
      "sword-shield": 194,
      "isle-of-armor": 85,
      "legends-arceus": 56,
      "scarlet-violet": 74,
      "kitakami": 21,
      "legends-za": 53
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "raichu",
    "id": 26,
    "gen": "generation-i",
    "regions": {
      "red-blue": 26,
      "gold-silver": 23,
      "ruby-sapphire": 157,
      "diamond-pearl": 105,
      "platinum": 105,
      "heartgold-soulsilver": 23,
      "x-y": 37,
      "omega-ruby-alpha-sapphire": 164,
      "lets-go": 26,
      "sword-shield": 195,
      "isle-of-armor": 86,
      "legends-arceus": 57,
      "scarlet-violet": 75,
      "kitakami": 22,
      "legends-za": 54
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "lets-go",
      "sword-shield",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "sandshrew",
    "id": 27,
    "gen": "generation-i",
    "regions": {
      "red-blue": 27,
      "gold-silver": 48,
      "ruby-sapphire": 112,
      "heartgold-soulsilver": 48,
      "black-2-white-2": 114,
      "x-y": 403,
      "omega-ruby-alpha-sapphire": 117,
      "lets-go": 27,
      "isle-of-armor": 168,
      "kitakami": 116,
      "blueberry": 155
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "lets-go",
      "isle-of-armor",
      "kitakami",
      "blueberry"
    ]
  },
  {
    "name": "sandslash",
    "id": 28,
    "gen": "generation-i",
    "regions": {
      "red-blue": 28,
      "gold-silver": 49,
      "ruby-sapphire": 113,
      "heartgold-soulsilver": 49,
      "black-2-white-2": 115,
      "x-y": 404,
      "omega-ruby-alpha-sapphire": 118,
      "lets-go": 28,
      "isle-of-armor": 169,
      "kitakami": 117,
      "blueberry": 156
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "lets-go",
      "isle-of-armor",
      "kitakami",
      "blueberry"
    ]
  },
  {
    "name": "nidoran-f",
    "id": 29,
    "gen": "generation-i",
    "regions": {
      "red-blue": 29,
      "gold-silver": 95,
      "heartgold-soulsilver": 95,
      "x-y": 257,
      "lets-go": 29,
      "crown-tundra": 65
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "crown-tundra"
    ]
  },
  {
    "name": "nidorina",
    "id": 30,
    "gen": "generation-i",
    "regions": {
      "red-blue": 30,
      "gold-silver": 96,
      "heartgold-soulsilver": 96,
      "x-y": 258,
      "lets-go": 30,
      "crown-tundra": 66
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "crown-tundra"
    ]
  },
  {
    "name": "nidoqueen",
    "id": 31,
    "gen": "generation-i",
    "regions": {
      "red-blue": 31,
      "gold-silver": 97,
      "heartgold-soulsilver": 97,
      "x-y": 259,
      "lets-go": 31,
      "crown-tundra": 67
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "crown-tundra"
    ]
  },
  {
    "name": "nidoran-m",
    "id": 32,
    "gen": "generation-i",
    "regions": {
      "red-blue": 32,
      "gold-silver": 98,
      "heartgold-soulsilver": 98,
      "x-y": 260,
      "lets-go": 32,
      "crown-tundra": 68
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "crown-tundra"
    ]
  },
  {
    "name": "nidorino",
    "id": 33,
    "gen": "generation-i",
    "regions": {
      "red-blue": 33,
      "gold-silver": 99,
      "heartgold-soulsilver": 99,
      "x-y": 261,
      "lets-go": 33,
      "crown-tundra": 69
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "crown-tundra"
    ]
  },
  {
    "name": "nidoking",
    "id": 34,
    "gen": "generation-i",
    "regions": {
      "red-blue": 34,
      "gold-silver": 100,
      "heartgold-soulsilver": 100,
      "x-y": 262,
      "lets-go": 34,
      "crown-tundra": 70
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "crown-tundra"
    ]
  },
  {
    "name": "clefairy",
    "id": 35,
    "gen": "generation-i",
    "regions": {
      "red-blue": 35,
      "gold-silver": 41,
      "diamond-pearl": 100,
      "platinum": 100,
      "heartgold-soulsilver": 41,
      "black-2-white-2": 90,
      "sun-moon": 211,
      "ultra-sun-ultra-moon": 273,
      "lets-go": 35,
      "sword-shield": 255,
      "crown-tundra": 44,
      "legends-arceus": 200,
      "kitakami": 152,
      "legends-za": 56
    },
    "games": [
      "red-blue",
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "clefable",
    "id": 36,
    "gen": "generation-i",
    "regions": {
      "red-blue": 36,
      "gold-silver": 42,
      "diamond-pearl": 101,
      "platinum": 101,
      "heartgold-soulsilver": 42,
      "black-2-white-2": 91,
      "sun-moon": 212,
      "ultra-sun-ultra-moon": 274,
      "lets-go": 36,
      "sword-shield": 256,
      "crown-tundra": 45,
      "legends-arceus": 201,
      "kitakami": 153,
      "legends-za": 57
    },
    "games": [
      "red-blue",
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "vulpix",
    "id": 37,
    "gen": "generation-i",
    "regions": {
      "red-blue": 37,
      "gold-silver": 125,
      "ruby-sapphire": 153,
      "heartgold-soulsilver": 127,
      "black-2-white-2": 249,
      "omega-ruby-alpha-sapphire": 160,
      "lets-go": 37,
      "sword-shield": 68,
      "legends-arceus": 168,
      "kitakami": 37,
      "blueberry": 157
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "black-2-white-2",
      "omega-ruby-alpha-sapphire",
      "lets-go",
      "sword-shield",
      "legends-arceus",
      "kitakami",
      "blueberry"
    ]
  },
  {
    "name": "ninetales",
    "id": 38,
    "gen": "generation-i",
    "regions": {
      "red-blue": 38,
      "gold-silver": 126,
      "ruby-sapphire": 154,
      "heartgold-soulsilver": 128,
      "black-2-white-2": 250,
      "omega-ruby-alpha-sapphire": 161,
      "lets-go": 38,
      "sword-shield": 69,
      "legends-arceus": 169,
      "kitakami": 38,
      "blueberry": 158
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "black-2-white-2",
      "omega-ruby-alpha-sapphire",
      "lets-go",
      "sword-shield",
      "legends-arceus",
      "kitakami",
      "blueberry"
    ]
  },
  {
    "name": "jigglypuff",
    "id": 39,
    "gen": "generation-i",
    "regions": {
      "red-blue": 39,
      "gold-silver": 44,
      "ruby-sapphire": 138,
      "heartgold-soulsilver": 44,
      "black-2-white-2": 283,
      "x-y": 426,
      "omega-ruby-alpha-sapphire": 143,
      "sun-moon": 135,
      "ultra-sun-ultra-moon": 168,
      "lets-go": 39,
      "isle-of-armor": 12,
      "scarlet-violet": 60,
      "hyperspace": 77
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "wigglytuff",
    "id": 40,
    "gen": "generation-i",
    "regions": {
      "red-blue": 40,
      "gold-silver": 45,
      "ruby-sapphire": 139,
      "heartgold-soulsilver": 45,
      "black-2-white-2": 284,
      "x-y": 427,
      "omega-ruby-alpha-sapphire": 144,
      "sun-moon": 136,
      "ultra-sun-ultra-moon": 169,
      "lets-go": 40,
      "isle-of-armor": 13,
      "scarlet-violet": 61,
      "hyperspace": 78
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "zubat",
    "id": 41,
    "gen": "generation-i",
    "regions": {
      "red-blue": 41,
      "gold-silver": 37,
      "ruby-sapphire": 63,
      "diamond-pearl": 28,
      "platinum": 28,
      "heartgold-soulsilver": 37,
      "black-2-white-2": 62,
      "x-y": 145,
      "omega-ruby-alpha-sapphire": 65,
      "sun-moon": 68,
      "ultra-sun-ultra-moon": 80,
      "lets-go": 41,
      "crown-tundra": 144,
      "legends-arceus": 34,
      "hyperspace": 94
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "crown-tundra",
      "legends-arceus",
      "hyperspace"
    ]
  },
  {
    "name": "golbat",
    "id": 42,
    "gen": "generation-i",
    "regions": {
      "red-blue": 42,
      "gold-silver": 38,
      "ruby-sapphire": 64,
      "diamond-pearl": 29,
      "platinum": 29,
      "heartgold-soulsilver": 38,
      "black-2-white-2": 63,
      "x-y": 146,
      "omega-ruby-alpha-sapphire": 66,
      "sun-moon": 69,
      "ultra-sun-ultra-moon": 81,
      "lets-go": 42,
      "crown-tundra": 145,
      "legends-arceus": 35,
      "hyperspace": 95
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "crown-tundra",
      "legends-arceus",
      "hyperspace"
    ]
  },
  {
    "name": "oddish",
    "id": 43,
    "gen": "generation-i",
    "regions": {
      "red-blue": 43,
      "gold-silver": 83,
      "ruby-sapphire": 88,
      "heartgold-soulsilver": 83,
      "x-y": 105,
      "omega-ruby-alpha-sapphire": 91,
      "lets-go": 43,
      "sword-shield": 55,
      "blueberry": 62
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "lets-go",
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "gloom",
    "id": 44,
    "gen": "generation-i",
    "regions": {
      "red-blue": 44,
      "gold-silver": 84,
      "ruby-sapphire": 89,
      "heartgold-soulsilver": 84,
      "x-y": 106,
      "omega-ruby-alpha-sapphire": 92,
      "lets-go": 44,
      "sword-shield": 56,
      "blueberry": 63
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "lets-go",
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "vileplume",
    "id": 45,
    "gen": "generation-i",
    "regions": {
      "red-blue": 45,
      "gold-silver": 85,
      "ruby-sapphire": 90,
      "heartgold-soulsilver": 85,
      "x-y": 107,
      "omega-ruby-alpha-sapphire": 93,
      "lets-go": 45,
      "sword-shield": 57,
      "blueberry": 64
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "lets-go",
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "paras",
    "id": 46,
    "gen": "generation-i",
    "regions": {
      "red-blue": 46,
      "gold-silver": 70,
      "heartgold-soulsilver": 70,
      "sun-moon": 147,
      "ultra-sun-ultra-moon": 180,
      "lets-go": 46,
      "legends-arceus": 53
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "legends-arceus"
    ]
  },
  {
    "name": "parasect",
    "id": 47,
    "gen": "generation-i",
    "regions": {
      "red-blue": 47,
      "gold-silver": 71,
      "heartgold-soulsilver": 71,
      "sun-moon": 148,
      "ultra-sun-ultra-moon": 181,
      "lets-go": 47,
      "legends-arceus": 54
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "legends-arceus"
    ]
  },
  {
    "name": "venonat",
    "id": 48,
    "gen": "generation-i",
    "regions": {
      "red-blue": 48,
      "gold-silver": 108,
      "heartgold-soulsilver": 109,
      "lets-go": 48,
      "scarlet-violet": 256,
      "blueberry": 8
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "lets-go",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "venomoth",
    "id": 49,
    "gen": "generation-i",
    "regions": {
      "red-blue": 49,
      "gold-silver": 109,
      "heartgold-soulsilver": 110,
      "lets-go": 49,
      "scarlet-violet": 257,
      "blueberry": 9
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "lets-go",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "diglett",
    "id": 50,
    "gen": "generation-i",
    "regions": {
      "red-blue": 50,
      "gold-silver": 132,
      "heartgold-soulsilver": 134,
      "x-y": 307,
      "lets-go": 50,
      "sword-shield": 164,
      "scarlet-violet": 148,
      "blueberry": 66
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "sword-shield",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "dugtrio",
    "id": 51,
    "gen": "generation-i",
    "regions": {
      "red-blue": 51,
      "gold-silver": 133,
      "heartgold-soulsilver": 135,
      "x-y": 308,
      "lets-go": 51,
      "sword-shield": 165,
      "scarlet-violet": 149,
      "blueberry": 67
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "sword-shield",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "meowth",
    "id": 52,
    "gen": "generation-i",
    "regions": {
      "red-blue": 52,
      "gold-silver": 136,
      "heartgold-soulsilver": 138,
      "lets-go": 52,
      "scarlet-violet": 141,
      "hyperspace": 4
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "lets-go",
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "persian",
    "id": 53,
    "gen": "generation-i",
    "regions": {
      "red-blue": 53,
      "gold-silver": 137,
      "heartgold-soulsilver": 139,
      "lets-go": 53,
      "sword-shield": 184,
      "scarlet-violet": 142,
      "hyperspace": 5
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "lets-go",
      "sword-shield",
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "psyduck",
    "id": 54,
    "gen": "generation-i",
    "regions": {
      "red-blue": 54,
      "gold-silver": 138,
      "ruby-sapphire": 158,
      "diamond-pearl": 43,
      "platinum": 43,
      "heartgold-soulsilver": 140,
      "black-2-white-2": 29,
      "x-y": 59,
      "omega-ruby-alpha-sapphire": 165,
      "sun-moon": 89,
      "ultra-sun-ultra-moon": 107,
      "lets-go": 54,
      "isle-of-armor": 146,
      "legends-arceus": 68,
      "scarlet-violet": 55
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet"
    ]
  },
  {
    "name": "golduck",
    "id": 55,
    "gen": "generation-i",
    "regions": {
      "red-blue": 55,
      "gold-silver": 139,
      "ruby-sapphire": 159,
      "diamond-pearl": 44,
      "platinum": 44,
      "heartgold-soulsilver": 141,
      "black-2-white-2": 30,
      "x-y": 60,
      "omega-ruby-alpha-sapphire": 166,
      "sun-moon": 90,
      "ultra-sun-ultra-moon": 108,
      "lets-go": 55,
      "isle-of-armor": 147,
      "legends-arceus": 69,
      "scarlet-violet": 56
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet"
    ]
  },
  {
    "name": "mankey",
    "id": 56,
    "gen": "generation-i",
    "regions": {
      "red-blue": 56,
      "gold-silver": 134,
      "heartgold-soulsilver": 136,
      "sun-moon": 79,
      "ultra-sun-ultra-moon": 93,
      "lets-go": 56,
      "scarlet-violet": 158,
      "kitakami": 99,
      "hyperspace": 1
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "scarlet-violet",
      "kitakami",
      "hyperspace"
    ]
  },
  {
    "name": "primeape",
    "id": 57,
    "gen": "generation-i",
    "regions": {
      "red-blue": 57,
      "gold-silver": 135,
      "heartgold-soulsilver": 137,
      "sun-moon": 80,
      "ultra-sun-ultra-moon": 94,
      "lets-go": 57,
      "scarlet-violet": 159,
      "kitakami": 100,
      "hyperspace": 2
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "scarlet-violet",
      "kitakami",
      "hyperspace"
    ]
  },
  {
    "name": "growlithe",
    "id": 58,
    "gen": "generation-i",
    "regions": {
      "red-blue": 58,
      "gold-silver": 127,
      "heartgold-soulsilver": 129,
      "black-2-white-2": 52,
      "sun-moon": 52,
      "ultra-sun-ultra-moon": 64,
      "lets-go": 58,
      "sword-shield": 70,
      "scarlet-violet": 213,
      "kitakami": 78
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "arcanine",
    "id": 59,
    "gen": "generation-i",
    "regions": {
      "red-blue": 59,
      "gold-silver": 128,
      "heartgold-soulsilver": 130,
      "black-2-white-2": 53,
      "sun-moon": 53,
      "ultra-sun-ultra-moon": 65,
      "lets-go": 59,
      "sword-shield": 71,
      "scarlet-violet": 214,
      "kitakami": 79
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "poliwag",
    "id": 60,
    "gen": "generation-i",
    "regions": {
      "red-blue": 60,
      "gold-silver": 72,
      "heartgold-soulsilver": 72,
      "x-y": 339,
      "sun-moon": 149,
      "ultra-sun-ultra-moon": 182,
      "lets-go": 60,
      "isle-of-armor": 142,
      "kitakami": 39
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "kitakami"
    ]
  },
  {
    "name": "poliwhirl",
    "id": 61,
    "gen": "generation-i",
    "regions": {
      "red-blue": 61,
      "gold-silver": 73,
      "heartgold-soulsilver": 73,
      "x-y": 340,
      "sun-moon": 150,
      "ultra-sun-ultra-moon": 183,
      "lets-go": 61,
      "isle-of-armor": 143,
      "kitakami": 40
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "kitakami"
    ]
  },
  {
    "name": "poliwrath",
    "id": 62,
    "gen": "generation-i",
    "regions": {
      "red-blue": 62,
      "gold-silver": 74,
      "heartgold-soulsilver": 74,
      "x-y": 341,
      "sun-moon": 151,
      "ultra-sun-ultra-moon": 184,
      "lets-go": 62,
      "isle-of-armor": 144,
      "kitakami": 41
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "kitakami"
    ]
  },
  {
    "name": "abra",
    "id": 63,
    "gen": "generation-i",
    "regions": {
      "red-blue": 63,
      "gold-silver": 89,
      "ruby-sapphire": 39,
      "diamond-pearl": 20,
      "platinum": 20,
      "heartgold-soulsilver": 89,
      "x-y": 102,
      "omega-ruby-alpha-sapphire": 40,
      "sun-moon": 42,
      "ultra-sun-ultra-moon": 49,
      "lets-go": 63,
      "isle-of-armor": 31,
      "legends-arceus": 58,
      "legends-za": 62
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "legends-arceus",
      "legends-za"
    ]
  },
  {
    "name": "kadabra",
    "id": 64,
    "gen": "generation-i",
    "regions": {
      "red-blue": 64,
      "gold-silver": 90,
      "ruby-sapphire": 40,
      "diamond-pearl": 21,
      "platinum": 21,
      "heartgold-soulsilver": 90,
      "x-y": 103,
      "omega-ruby-alpha-sapphire": 41,
      "sun-moon": 43,
      "ultra-sun-ultra-moon": 50,
      "lets-go": 64,
      "isle-of-armor": 32,
      "legends-arceus": 59,
      "legends-za": 63
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "legends-arceus",
      "legends-za"
    ]
  },
  {
    "name": "alakazam",
    "id": 65,
    "gen": "generation-i",
    "regions": {
      "red-blue": 65,
      "gold-silver": 91,
      "ruby-sapphire": 41,
      "diamond-pearl": 22,
      "platinum": 22,
      "heartgold-soulsilver": 91,
      "x-y": 104,
      "omega-ruby-alpha-sapphire": 42,
      "sun-moon": 44,
      "ultra-sun-ultra-moon": 51,
      "lets-go": 65,
      "isle-of-armor": 33,
      "legends-arceus": 60,
      "legends-za": 64
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "legends-arceus",
      "legends-za"
    ]
  },
  {
    "name": "machop",
    "id": 66,
    "gen": "generation-i",
    "regions": {
      "red-blue": 66,
      "gold-silver": 140,
      "ruby-sapphire": 73,
      "diamond-pearl": 40,
      "platinum": 40,
      "heartgold-soulsilver": 142,
      "x-y": 210,
      "omega-ruby-alpha-sapphire": 75,
      "sun-moon": 95,
      "ultra-sun-ultra-moon": 117,
      "lets-go": 66,
      "sword-shield": 138,
      "legends-arceus": 154,
      "legends-za": 125
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield",
      "legends-arceus",
      "legends-za"
    ]
  },
  {
    "name": "machoke",
    "id": 67,
    "gen": "generation-i",
    "regions": {
      "red-blue": 67,
      "gold-silver": 141,
      "ruby-sapphire": 74,
      "diamond-pearl": 41,
      "platinum": 41,
      "heartgold-soulsilver": 143,
      "x-y": 211,
      "omega-ruby-alpha-sapphire": 76,
      "sun-moon": 96,
      "ultra-sun-ultra-moon": 118,
      "lets-go": 67,
      "sword-shield": 139,
      "legends-arceus": 155,
      "legends-za": 126
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield",
      "legends-arceus",
      "legends-za"
    ]
  },
  {
    "name": "machamp",
    "id": 68,
    "gen": "generation-i",
    "regions": {
      "red-blue": 68,
      "gold-silver": 142,
      "ruby-sapphire": 75,
      "diamond-pearl": 42,
      "platinum": 42,
      "heartgold-soulsilver": 144,
      "x-y": 212,
      "omega-ruby-alpha-sapphire": 77,
      "sun-moon": 97,
      "ultra-sun-ultra-moon": 119,
      "lets-go": 68,
      "sword-shield": 140,
      "legends-arceus": 156,
      "legends-za": 127
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield",
      "legends-arceus",
      "legends-za"
    ]
  },
  {
    "name": "bellsprout",
    "id": 69,
    "gen": "generation-i",
    "regions": {
      "red-blue": 69,
      "gold-silver": 64,
      "heartgold-soulsilver": 64,
      "x-y": 332,
      "lets-go": 69,
      "kitakami": 23,
      "legends-za": 74
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "weepinbell",
    "id": 70,
    "gen": "generation-i",
    "regions": {
      "red-blue": 70,
      "gold-silver": 65,
      "heartgold-soulsilver": 65,
      "x-y": 333,
      "lets-go": 70,
      "kitakami": 24,
      "legends-za": 75
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "victreebel",
    "id": 71,
    "gen": "generation-i",
    "regions": {
      "red-blue": 71,
      "gold-silver": 66,
      "heartgold-soulsilver": 66,
      "x-y": 334,
      "lets-go": 71,
      "kitakami": 25,
      "legends-za": 76
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "tentacool",
    "id": 72,
    "gen": "generation-i",
    "regions": {
      "red-blue": 72,
      "gold-silver": 162,
      "ruby-sapphire": 66,
      "diamond-pearl": 136,
      "platinum": 136,
      "heartgold-soulsilver": 164,
      "x-y": 178,
      "omega-ruby-alpha-sapphire": 68,
      "sun-moon": 106,
      "ultra-sun-ultra-moon": 129,
      "lets-go": 72,
      "isle-of-armor": 40,
      "legends-arceus": 170,
      "blueberry": 50
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "tentacruel",
    "id": 73,
    "gen": "generation-i",
    "regions": {
      "red-blue": 73,
      "gold-silver": 163,
      "ruby-sapphire": 67,
      "diamond-pearl": 137,
      "platinum": 137,
      "heartgold-soulsilver": 165,
      "x-y": 179,
      "omega-ruby-alpha-sapphire": 69,
      "sun-moon": 107,
      "ultra-sun-ultra-moon": 130,
      "lets-go": 73,
      "isle-of-armor": 41,
      "legends-arceus": 171,
      "blueberry": 51
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "geodude",
    "id": 74,
    "gen": "generation-i",
    "regions": {
      "red-blue": 74,
      "gold-silver": 34,
      "ruby-sapphire": 57,
      "diamond-pearl": 31,
      "platinum": 31,
      "heartgold-soulsilver": 34,
      "x-y": 315,
      "omega-ruby-alpha-sapphire": 58,
      "lets-go": 74,
      "legends-arceus": 46,
      "kitakami": 80,
      "blueberry": 96
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "lets-go",
      "legends-arceus",
      "kitakami",
      "blueberry"
    ]
  },
  {
    "name": "graveler",
    "id": 75,
    "gen": "generation-i",
    "regions": {
      "red-blue": 75,
      "gold-silver": 35,
      "ruby-sapphire": 58,
      "diamond-pearl": 32,
      "platinum": 32,
      "heartgold-soulsilver": 35,
      "x-y": 316,
      "omega-ruby-alpha-sapphire": 59,
      "lets-go": 75,
      "legends-arceus": 47,
      "kitakami": 81,
      "blueberry": 97
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "lets-go",
      "legends-arceus",
      "kitakami",
      "blueberry"
    ]
  },
  {
    "name": "golem",
    "id": 76,
    "gen": "generation-i",
    "regions": {
      "red-blue": 76,
      "gold-silver": 36,
      "ruby-sapphire": 59,
      "diamond-pearl": 33,
      "platinum": 33,
      "heartgold-soulsilver": 36,
      "x-y": 317,
      "omega-ruby-alpha-sapphire": 60,
      "lets-go": 76,
      "legends-arceus": 48,
      "kitakami": 82,
      "blueberry": 98
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "lets-go",
      "legends-arceus",
      "kitakami",
      "blueberry"
    ]
  },
  {
    "name": "ponyta",
    "id": 77,
    "gen": "generation-i",
    "regions": {
      "red-blue": 77,
      "gold-silver": 201,
      "diamond-pearl": 90,
      "platinum": 90,
      "heartgold-soulsilver": 206,
      "lets-go": 77,
      "legends-arceus": 23
    },
    "games": [
      "red-blue",
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "lets-go",
      "legends-arceus"
    ]
  },
  {
    "name": "rapidash",
    "id": 78,
    "gen": "generation-i",
    "regions": {
      "red-blue": 78,
      "gold-silver": 202,
      "diamond-pearl": 91,
      "platinum": 91,
      "heartgold-soulsilver": 207,
      "lets-go": 78,
      "legends-arceus": 24
    },
    "games": [
      "red-blue",
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "lets-go",
      "legends-arceus"
    ]
  },
  {
    "name": "slowpoke",
    "id": 79,
    "gen": "generation-i",
    "regions": {
      "red-blue": 79,
      "gold-silver": 80,
      "heartgold-soulsilver": 80,
      "x-y": 286,
      "sun-moon": 37,
      "ultra-sun-ultra-moon": 44,
      "lets-go": 79,
      "scarlet-violet": 325,
      "blueberry": 75,
      "legends-za": 137
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "scarlet-violet",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "slowbro",
    "id": 80,
    "gen": "generation-i",
    "regions": {
      "red-blue": 80,
      "gold-silver": 81,
      "heartgold-soulsilver": 81,
      "x-y": 287,
      "sun-moon": 38,
      "ultra-sun-ultra-moon": 45,
      "lets-go": 80,
      "scarlet-violet": 326,
      "blueberry": 76,
      "legends-za": 138
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "scarlet-violet",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "magnemite",
    "id": 81,
    "gen": "generation-i",
    "regions": {
      "red-blue": 81,
      "gold-silver": 118,
      "ruby-sapphire": 82,
      "platinum": 178,
      "heartgold-soulsilver": 119,
      "black-2-white-2": 49,
      "x-y": 375,
      "omega-ruby-alpha-sapphire": 84,
      "sun-moon": 47,
      "ultra-sun-ultra-moon": 54,
      "lets-go": 81,
      "isle-of-armor": 105,
      "legends-arceus": 177,
      "scarlet-violet": 209,
      "blueberry": 116
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "magneton",
    "id": 82,
    "gen": "generation-i",
    "regions": {
      "red-blue": 82,
      "gold-silver": 119,
      "ruby-sapphire": 83,
      "platinum": 179,
      "heartgold-soulsilver": 120,
      "black-2-white-2": 50,
      "x-y": 376,
      "omega-ruby-alpha-sapphire": 85,
      "sun-moon": 48,
      "ultra-sun-ultra-moon": 55,
      "lets-go": 82,
      "isle-of-armor": 106,
      "legends-arceus": 178,
      "scarlet-violet": 210,
      "blueberry": 117
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "farfetchd",
    "id": 83,
    "gen": "generation-i",
    "regions": {
      "red-blue": 83,
      "gold-silver": 158,
      "heartgold-soulsilver": 160,
      "x-y": 61,
      "lets-go": 83,
      "hyperspace": 7
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "hyperspace"
    ]
  },
  {
    "name": "doduo",
    "id": 84,
    "gen": "generation-i",
    "regions": {
      "red-blue": 84,
      "gold-silver": 199,
      "ruby-sapphire": 92,
      "heartgold-soulsilver": 204,
      "x-y": 94,
      "omega-ruby-alpha-sapphire": 95,
      "lets-go": 84,
      "blueberry": 1
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "lets-go",
      "blueberry"
    ]
  },
  {
    "name": "dodrio",
    "id": 85,
    "gen": "generation-i",
    "regions": {
      "red-blue": 85,
      "gold-silver": 200,
      "ruby-sapphire": 93,
      "heartgold-soulsilver": 205,
      "x-y": 95,
      "omega-ruby-alpha-sapphire": 96,
      "lets-go": 85,
      "blueberry": 2
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "lets-go",
      "blueberry"
    ]
  },
  {
    "name": "seel",
    "id": 86,
    "gen": "generation-i",
    "regions": {
      "red-blue": 86,
      "gold-silver": 176,
      "heartgold-soulsilver": 178,
      "black-2-white-2": 266,
      "ultra-sun-ultra-moon": 115,
      "lets-go": 86,
      "blueberry": 143
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "black-2-white-2",
      "ultra-sun-ultra-moon",
      "lets-go",
      "blueberry"
    ]
  },
  {
    "name": "dewgong",
    "id": 87,
    "gen": "generation-i",
    "regions": {
      "red-blue": 87,
      "gold-silver": 177,
      "heartgold-soulsilver": 179,
      "black-2-white-2": 267,
      "ultra-sun-ultra-moon": 116,
      "lets-go": 87,
      "blueberry": 144
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "black-2-white-2",
      "ultra-sun-ultra-moon",
      "lets-go",
      "blueberry"
    ]
  },
  {
    "name": "grimer",
    "id": 88,
    "gen": "generation-i",
    "regions": {
      "red-blue": 88,
      "gold-silver": 116,
      "ruby-sapphire": 106,
      "heartgold-soulsilver": 117,
      "black-2-white-2": 65,
      "omega-ruby-alpha-sapphire": 111,
      "lets-go": 88,
      "scarlet-violet": 194,
      "blueberry": 68
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "black-2-white-2",
      "omega-ruby-alpha-sapphire",
      "lets-go",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "muk",
    "id": 89,
    "gen": "generation-i",
    "regions": {
      "red-blue": 89,
      "gold-silver": 117,
      "ruby-sapphire": 107,
      "heartgold-soulsilver": 118,
      "black-2-white-2": 66,
      "omega-ruby-alpha-sapphire": 112,
      "lets-go": 89,
      "scarlet-violet": 195,
      "blueberry": 69
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "black-2-white-2",
      "omega-ruby-alpha-sapphire",
      "lets-go",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "shellder",
    "id": 90,
    "gen": "generation-i",
    "regions": {
      "red-blue": 90,
      "gold-silver": 169,
      "heartgold-soulsilver": 171,
      "x-y": 189,
      "sun-moon": 115,
      "ultra-sun-ultra-moon": 138,
      "lets-go": 90,
      "sword-shield": 150,
      "isle-of-armor": 131,
      "scarlet-violet": 330
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet"
    ]
  },
  {
    "name": "cloyster",
    "id": 91,
    "gen": "generation-i",
    "regions": {
      "red-blue": 91,
      "gold-silver": 170,
      "heartgold-soulsilver": 172,
      "x-y": 190,
      "sun-moon": 116,
      "ultra-sun-ultra-moon": 139,
      "lets-go": 91,
      "sword-shield": 151,
      "isle-of-armor": 132,
      "scarlet-violet": 331
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet"
    ]
  },
  {
    "name": "gastly",
    "id": 92,
    "gen": "generation-i",
    "regions": {
      "red-blue": 92,
      "gold-silver": 58,
      "diamond-pearl": 69,
      "platinum": 69,
      "heartgold-soulsilver": 58,
      "x-y": 336,
      "sun-moon": 61,
      "ultra-sun-ultra-moon": 73,
      "lets-go": 92,
      "sword-shield": 141,
      "legends-arceus": 136,
      "scarlet-violet": 68,
      "kitakami": 118,
      "legends-za": 65
    },
    "games": [
      "red-blue",
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "haunter",
    "id": 93,
    "gen": "generation-i",
    "regions": {
      "red-blue": 93,
      "gold-silver": 59,
      "diamond-pearl": 70,
      "platinum": 70,
      "heartgold-soulsilver": 59,
      "x-y": 337,
      "sun-moon": 62,
      "ultra-sun-ultra-moon": 74,
      "lets-go": 93,
      "sword-shield": 142,
      "legends-arceus": 137,
      "scarlet-violet": 69,
      "kitakami": 119,
      "legends-za": 66
    },
    "games": [
      "red-blue",
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "gengar",
    "id": 94,
    "gen": "generation-i",
    "regions": {
      "red-blue": 94,
      "gold-silver": 60,
      "diamond-pearl": 71,
      "platinum": 71,
      "heartgold-soulsilver": 60,
      "x-y": 338,
      "sun-moon": 63,
      "ultra-sun-ultra-moon": 75,
      "lets-go": 94,
      "sword-shield": 143,
      "legends-arceus": 138,
      "scarlet-violet": 70,
      "kitakami": 120,
      "legends-za": 67
    },
    "games": [
      "red-blue",
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "onix",
    "id": 95,
    "gen": "generation-i",
    "regions": {
      "red-blue": 95,
      "gold-silver": 62,
      "diamond-pearl": 34,
      "platinum": 34,
      "heartgold-soulsilver": 62,
      "black-2-white-2": 72,
      "x-y": 206,
      "lets-go": 95,
      "sword-shield": 178,
      "legends-arceus": 118,
      "legends-za": 197
    },
    "games": [
      "red-blue",
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "lets-go",
      "sword-shield",
      "legends-arceus",
      "legends-za"
    ]
  },
  {
    "name": "drowzee",
    "id": 96,
    "gen": "generation-i",
    "regions": {
      "red-blue": 96,
      "gold-silver": 87,
      "heartgold-soulsilver": 87,
      "sun-moon": 54,
      "ultra-sun-ultra-moon": 66,
      "lets-go": 96,
      "scarlet-violet": 66
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "scarlet-violet"
    ]
  },
  {
    "name": "hypno",
    "id": 97,
    "gen": "generation-i",
    "regions": {
      "red-blue": 97,
      "gold-silver": 88,
      "heartgold-soulsilver": 88,
      "sun-moon": 55,
      "ultra-sun-ultra-moon": 67,
      "lets-go": 97,
      "scarlet-violet": 67
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "scarlet-violet"
    ]
  },
  {
    "name": "krabby",
    "id": 98,
    "gen": "generation-i",
    "regions": {
      "red-blue": 98,
      "gold-silver": 164,
      "heartgold-soulsilver": 166,
      "lets-go": 98,
      "sword-shield": 98,
      "isle-of-armor": 38
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "lets-go",
      "sword-shield",
      "isle-of-armor"
    ]
  },
  {
    "name": "kingler",
    "id": 99,
    "gen": "generation-i",
    "regions": {
      "red-blue": 99,
      "gold-silver": 165,
      "heartgold-soulsilver": 167,
      "lets-go": 99,
      "sword-shield": 99,
      "isle-of-armor": 39
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "lets-go",
      "sword-shield",
      "isle-of-armor"
    ]
  },
  {
    "name": "voltorb",
    "id": 100,
    "gen": "generation-i",
    "regions": {
      "red-blue": 100,
      "gold-silver": 120,
      "ruby-sapphire": 84,
      "heartgold-soulsilver": 121,
      "x-y": 378,
      "omega-ruby-alpha-sapphire": 87,
      "lets-go": 100,
      "scarlet-violet": 207
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "lets-go",
      "scarlet-violet"
    ]
  },
  {
    "name": "electrode",
    "id": 101,
    "gen": "generation-i",
    "regions": {
      "red-blue": 101,
      "gold-silver": 121,
      "ruby-sapphire": 85,
      "heartgold-soulsilver": 122,
      "x-y": 379,
      "omega-ruby-alpha-sapphire": 88,
      "lets-go": 101,
      "scarlet-violet": 208
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "lets-go",
      "scarlet-violet"
    ]
  },
  {
    "name": "exeggcute",
    "id": 102,
    "gen": "generation-i",
    "regions": {
      "red-blue": 102,
      "gold-silver": 104,
      "heartgold-soulsilver": 105,
      "x-y": 289,
      "sun-moon": 269,
      "ultra-sun-ultra-moon": 355,
      "lets-go": 102,
      "isle-of-armor": 205,
      "blueberry": 3
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "blueberry"
    ]
  },
  {
    "name": "exeggutor",
    "id": 103,
    "gen": "generation-i",
    "regions": {
      "red-blue": 103,
      "gold-silver": 105,
      "heartgold-soulsilver": 106,
      "x-y": 290,
      "lets-go": 103,
      "isle-of-armor": 206,
      "blueberry": 4
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "isle-of-armor",
      "blueberry"
    ]
  },
  {
    "name": "cubone",
    "id": 104,
    "gen": "generation-i",
    "regions": {
      "red-blue": 104,
      "gold-silver": 203,
      "heartgold-soulsilver": 208,
      "x-y": 213,
      "sun-moon": 163,
      "ultra-sun-ultra-moon": 197,
      "lets-go": 104,
      "isle-of-armor": 170,
      "hyperspace": 9
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "hyperspace"
    ]
  },
  {
    "name": "marowak",
    "id": 105,
    "gen": "generation-i",
    "regions": {
      "red-blue": 105,
      "gold-silver": 204,
      "heartgold-soulsilver": 209,
      "x-y": 214,
      "lets-go": 105,
      "isle-of-armor": 171,
      "hyperspace": 10
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "isle-of-armor",
      "hyperspace"
    ]
  },
  {
    "name": "hitmonlee",
    "id": 106,
    "gen": "generation-i",
    "regions": {
      "red-blue": 106,
      "gold-silver": 144,
      "heartgold-soulsilver": 146,
      "lets-go": 106,
      "sword-shield": 108,
      "blueberry": 93
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "lets-go",
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "hitmonchan",
    "id": 107,
    "gen": "generation-i",
    "regions": {
      "red-blue": 107,
      "gold-silver": 145,
      "heartgold-soulsilver": 147,
      "lets-go": 107,
      "sword-shield": 109,
      "blueberry": 94
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "lets-go",
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "lickitung",
    "id": 108,
    "gen": "generation-i",
    "regions": {
      "red-blue": 108,
      "gold-silver": 178,
      "platinum": 161,
      "heartgold-soulsilver": 180,
      "black-2-white-2": 285,
      "x-y": 440,
      "ultra-sun-ultra-moon": 375,
      "lets-go": 108,
      "isle-of-armor": 54,
      "legends-arceus": 125
    },
    "games": [
      "red-blue",
      "gold-silver",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "legends-arceus"
    ]
  },
  {
    "name": "koffing",
    "id": 109,
    "gen": "generation-i",
    "regions": {
      "red-blue": 109,
      "gold-silver": 114,
      "ruby-sapphire": 108,
      "heartgold-soulsilver": 115,
      "black-2-white-2": 47,
      "omega-ruby-alpha-sapphire": 113,
      "lets-go": 109,
      "sword-shield": 250,
      "kitakami": 135
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "black-2-white-2",
      "omega-ruby-alpha-sapphire",
      "lets-go",
      "sword-shield",
      "kitakami"
    ]
  },
  {
    "name": "weezing",
    "id": 110,
    "gen": "generation-i",
    "regions": {
      "red-blue": 110,
      "gold-silver": 115,
      "ruby-sapphire": 109,
      "heartgold-soulsilver": 116,
      "black-2-white-2": 48,
      "omega-ruby-alpha-sapphire": 114,
      "lets-go": 110,
      "kitakami": 136
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "black-2-white-2",
      "omega-ruby-alpha-sapphire",
      "lets-go",
      "kitakami"
    ]
  },
  {
    "name": "rhyhorn",
    "id": 111,
    "gen": "generation-i",
    "regions": {
      "red-blue": 111,
      "gold-silver": 206,
      "ruby-sapphire": 169,
      "platinum": 186,
      "heartgold-soulsilver": 211,
      "x-y": 203,
      "omega-ruby-alpha-sapphire": 176,
      "lets-go": 111,
      "sword-shield": 264,
      "isle-of-armor": 183,
      "legends-arceus": 120,
      "blueberry": 5
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "lets-go",
      "sword-shield",
      "isle-of-armor",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "rhydon",
    "id": 112,
    "gen": "generation-i",
    "regions": {
      "red-blue": 112,
      "gold-silver": 207,
      "ruby-sapphire": 170,
      "platinum": 187,
      "heartgold-soulsilver": 212,
      "x-y": 204,
      "omega-ruby-alpha-sapphire": 177,
      "lets-go": 112,
      "sword-shield": 265,
      "isle-of-armor": 184,
      "legends-arceus": 121,
      "blueberry": 6
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "lets-go",
      "sword-shield",
      "isle-of-armor",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "chansey",
    "id": 113,
    "gen": "generation-i",
    "regions": {
      "red-blue": 113,
      "gold-silver": 217,
      "diamond-pearl": 97,
      "platinum": 97,
      "heartgold-soulsilver": 222,
      "sun-moon": 33,
      "ultra-sun-ultra-moon": 40,
      "lets-go": 113,
      "isle-of-armor": 7,
      "legends-arceus": 87,
      "scarlet-violet": 44,
      "blueberry": 17
    },
    "games": [
      "red-blue",
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "tangela",
    "id": 114,
    "gen": "generation-i",
    "regions": {
      "red-blue": 114,
      "gold-silver": 179,
      "platinum": 181,
      "heartgold-soulsilver": 182,
      "black-2-white-2": 218,
      "lets-go": 114,
      "isle-of-armor": 80,
      "legends-arceus": 95
    },
    "games": [
      "red-blue",
      "gold-silver",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "lets-go",
      "isle-of-armor",
      "legends-arceus"
    ]
  },
  {
    "name": "kangaskhan",
    "id": 115,
    "gen": "generation-i",
    "regions": {
      "red-blue": 115,
      "gold-silver": 205,
      "heartgold-soulsilver": 210,
      "x-y": 215,
      "sun-moon": 165,
      "ultra-sun-ultra-moon": 199,
      "lets-go": 115,
      "isle-of-armor": 172,
      "legends-za": 223
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "legends-za"
    ]
  },
  {
    "name": "horsea",
    "id": 116,
    "gen": "generation-i",
    "regions": {
      "red-blue": 116,
      "gold-silver": 186,
      "ruby-sapphire": 184,
      "heartgold-soulsilver": 190,
      "x-y": 192,
      "omega-ruby-alpha-sapphire": 193,
      "lets-go": 116,
      "isle-of-armor": 198,
      "blueberry": 52
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "lets-go",
      "isle-of-armor",
      "blueberry"
    ]
  },
  {
    "name": "seadra",
    "id": 117,
    "gen": "generation-i",
    "regions": {
      "red-blue": 117,
      "gold-silver": 187,
      "ruby-sapphire": 185,
      "heartgold-soulsilver": 191,
      "x-y": 193,
      "omega-ruby-alpha-sapphire": 194,
      "lets-go": 117,
      "isle-of-armor": 199,
      "blueberry": 53
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "lets-go",
      "isle-of-armor",
      "blueberry"
    ]
  },
  {
    "name": "goldeen",
    "id": 118,
    "gen": "generation-i",
    "regions": {
      "red-blue": 118,
      "gold-silver": 78,
      "ruby-sapphire": 50,
      "diamond-pearl": 78,
      "platinum": 78,
      "heartgold-soulsilver": 78,
      "x-y": 53,
      "omega-ruby-alpha-sapphire": 51,
      "sun-moon": 153,
      "ultra-sun-ultra-moon": 186,
      "lets-go": 118,
      "sword-shield": 146,
      "isle-of-armor": 94
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield",
      "isle-of-armor"
    ]
  },
  {
    "name": "seaking",
    "id": 119,
    "gen": "generation-i",
    "regions": {
      "red-blue": 119,
      "gold-silver": 79,
      "ruby-sapphire": 51,
      "diamond-pearl": 79,
      "platinum": 79,
      "heartgold-soulsilver": 79,
      "x-y": 54,
      "omega-ruby-alpha-sapphire": 52,
      "sun-moon": 154,
      "ultra-sun-ultra-moon": 187,
      "lets-go": 119,
      "sword-shield": 147,
      "isle-of-armor": 95
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield",
      "isle-of-armor"
    ]
  },
  {
    "name": "staryu",
    "id": 120,
    "gen": "generation-i",
    "regions": {
      "red-blue": 120,
      "gold-silver": 167,
      "ruby-sapphire": 143,
      "heartgold-soulsilver": 169,
      "black-2-white-2": 239,
      "x-y": 187,
      "omega-ruby-alpha-sapphire": 148,
      "sun-moon": 184,
      "ultra-sun-ultra-moon": 223,
      "lets-go": 120,
      "isle-of-armor": 98,
      "legends-za": 36
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "legends-za"
    ]
  },
  {
    "name": "starmie",
    "id": 121,
    "gen": "generation-i",
    "regions": {
      "red-blue": 121,
      "gold-silver": 168,
      "ruby-sapphire": 144,
      "heartgold-soulsilver": 170,
      "black-2-white-2": 240,
      "x-y": 188,
      "omega-ruby-alpha-sapphire": 149,
      "sun-moon": 185,
      "ultra-sun-ultra-moon": 224,
      "lets-go": 121,
      "isle-of-armor": 99,
      "legends-za": 37
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "legends-za"
    ]
  },
  {
    "name": "mr-mime",
    "id": 122,
    "gen": "generation-i",
    "regions": {
      "red-blue": 122,
      "gold-silver": 156,
      "diamond-pearl": 95,
      "platinum": 95,
      "heartgold-soulsilver": 158,
      "x-y": 267,
      "ultra-sun-ultra-moon": 60,
      "lets-go": 122,
      "legends-arceus": 77,
      "hyperspace": 109
    },
    "games": [
      "red-blue",
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "ultra-sun-ultra-moon",
      "lets-go",
      "legends-arceus",
      "hyperspace"
    ]
  },
  {
    "name": "scyther",
    "id": 123,
    "gen": "generation-i",
    "regions": {
      "red-blue": 123,
      "gold-silver": 110,
      "platinum": 195,
      "heartgold-soulsilver": 111,
      "x-y": 442,
      "sun-moon": 275,
      "ultra-sun-ultra-moon": 365,
      "lets-go": 123,
      "isle-of-armor": 118,
      "legends-arceus": 72,
      "scarlet-violet": 260,
      "blueberry": 19,
      "legends-za": 176
    },
    "games": [
      "red-blue",
      "gold-silver",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "jynx",
    "id": 124,
    "gen": "generation-i",
    "regions": {
      "red-blue": 124,
      "gold-silver": 153,
      "heartgold-soulsilver": 155,
      "x-y": 390,
      "ultra-sun-ultra-moon": 110,
      "lets-go": 124,
      "crown-tundra": 14
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "ultra-sun-ultra-moon",
      "lets-go",
      "crown-tundra"
    ]
  },
  {
    "name": "electabuzz",
    "id": 125,
    "gen": "generation-i",
    "regions": {
      "red-blue": 125,
      "gold-silver": 155,
      "platinum": 198,
      "heartgold-soulsilver": 157,
      "black-2-white-2": 58,
      "sun-moon": 227,
      "ultra-sun-ultra-moon": 296,
      "lets-go": 125,
      "crown-tundra": 16,
      "legends-arceus": 183,
      "blueberry": 11
    },
    "games": [
      "red-blue",
      "gold-silver",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "crown-tundra",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "magmar",
    "id": 126,
    "gen": "generation-i",
    "regions": {
      "red-blue": 126,
      "gold-silver": 151,
      "platinum": 201,
      "heartgold-soulsilver": 153,
      "black-2-white-2": 55,
      "sun-moon": 167,
      "ultra-sun-ultra-moon": 201,
      "lets-go": 126,
      "crown-tundra": 19,
      "legends-arceus": 175,
      "blueberry": 14
    },
    "games": [
      "red-blue",
      "gold-silver",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "crown-tundra",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "pinsir",
    "id": 127,
    "gen": "generation-i",
    "regions": {
      "red-blue": 127,
      "gold-silver": 112,
      "ruby-sapphire": 167,
      "heartgold-soulsilver": 113,
      "black-2-white-2": 147,
      "x-y": 283,
      "omega-ruby-alpha-sapphire": 174,
      "sun-moon": 175,
      "ultra-sun-ultra-moon": 211,
      "lets-go": 127,
      "isle-of-armor": 120,
      "legends-za": 178
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "legends-za"
    ]
  },
  {
    "name": "tauros",
    "id": 128,
    "gen": "generation-i",
    "regions": {
      "red-blue": 128,
      "gold-silver": 148,
      "heartgold-soulsilver": 150,
      "x-y": 278,
      "sun-moon": 137,
      "ultra-sun-ultra-moon": 170,
      "lets-go": 128,
      "isle-of-armor": 116,
      "blueberry": 22
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "blueberry"
    ]
  },
  {
    "name": "magikarp",
    "id": 129,
    "gen": "generation-i",
    "regions": {
      "red-blue": 129,
      "gold-silver": 76,
      "ruby-sapphire": 52,
      "diamond-pearl": 23,
      "platinum": 23,
      "heartgold-soulsilver": 76,
      "x-y": 49,
      "omega-ruby-alpha-sapphire": 53,
      "sun-moon": 91,
      "ultra-sun-ultra-moon": 111,
      "lets-go": 129,
      "sword-shield": 144,
      "isle-of-armor": 42,
      "crown-tundra": 62,
      "legends-arceus": 80,
      "scarlet-violet": 134,
      "kitakami": 43,
      "legends-za": 32
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield",
      "isle-of-armor",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "gyarados",
    "id": 130,
    "gen": "generation-i",
    "regions": {
      "red-blue": 130,
      "gold-silver": 77,
      "ruby-sapphire": 53,
      "diamond-pearl": 24,
      "platinum": 24,
      "heartgold-soulsilver": 77,
      "x-y": 50,
      "omega-ruby-alpha-sapphire": 54,
      "sun-moon": 92,
      "ultra-sun-ultra-moon": 112,
      "lets-go": 130,
      "sword-shield": 145,
      "isle-of-armor": 43,
      "crown-tundra": 63,
      "legends-arceus": 81,
      "scarlet-violet": 135,
      "kitakami": 44,
      "legends-za": 33
    },
    "games": [
      "red-blue",
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield",
      "isle-of-armor",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "lapras",
    "id": 131,
    "gen": "generation-i",
    "regions": {
      "red-blue": 131,
      "gold-silver": 219,
      "heartgold-soulsilver": 224,
      "black-2-white-2": 243,
      "x-y": 303,
      "sun-moon": 268,
      "ultra-sun-ultra-moon": 353,
      "lets-go": 131,
      "sword-shield": 361,
      "crown-tundra": 190,
      "blueberry": 145
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield",
      "crown-tundra",
      "blueberry"
    ]
  },
  {
    "name": "ditto",
    "id": 132,
    "gen": "generation-i",
    "regions": {
      "red-blue": 132,
      "gold-silver": 92,
      "heartgold-soulsilver": 92,
      "black-2-white-2": 262,
      "x-y": 444,
      "sun-moon": 209,
      "ultra-sun-ultra-moon": 271,
      "lets-go": 132,
      "sword-shield": 373,
      "isle-of-armor": 207,
      "scarlet-violet": 212
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet"
    ]
  },
  {
    "name": "eevee",
    "id": 133,
    "gen": "generation-i",
    "regions": {
      "red-blue": 133,
      "gold-silver": 180,
      "platinum": 163,
      "heartgold-soulsilver": 184,
      "black-2-white-2": 92,
      "x-y": 230,
      "sun-moon": 123,
      "ultra-sun-ultra-moon": 153,
      "lets-go": 133,
      "sword-shield": 196,
      "crown-tundra": 74,
      "legends-arceus": 25,
      "scarlet-violet": 179,
      "legends-za": 100
    },
    "games": [
      "red-blue",
      "gold-silver",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "vaporeon",
    "id": 134,
    "gen": "generation-i",
    "regions": {
      "red-blue": 134,
      "gold-silver": 181,
      "platinum": 164,
      "heartgold-soulsilver": 185,
      "black-2-white-2": 93,
      "x-y": 231,
      "sun-moon": 124,
      "ultra-sun-ultra-moon": 154,
      "lets-go": 134,
      "sword-shield": 197,
      "crown-tundra": 75,
      "legends-arceus": 26,
      "scarlet-violet": 180,
      "legends-za": 101
    },
    "games": [
      "red-blue",
      "gold-silver",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "jolteon",
    "id": 135,
    "gen": "generation-i",
    "regions": {
      "red-blue": 135,
      "gold-silver": 182,
      "platinum": 165,
      "heartgold-soulsilver": 186,
      "black-2-white-2": 94,
      "x-y": 232,
      "sun-moon": 125,
      "ultra-sun-ultra-moon": 155,
      "lets-go": 135,
      "sword-shield": 198,
      "crown-tundra": 76,
      "legends-arceus": 27,
      "scarlet-violet": 181,
      "legends-za": 102
    },
    "games": [
      "red-blue",
      "gold-silver",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "flareon",
    "id": 136,
    "gen": "generation-i",
    "regions": {
      "red-blue": 136,
      "gold-silver": 183,
      "platinum": 166,
      "heartgold-soulsilver": 187,
      "black-2-white-2": 95,
      "x-y": 233,
      "sun-moon": 126,
      "ultra-sun-ultra-moon": 156,
      "lets-go": 136,
      "sword-shield": 199,
      "crown-tundra": 77,
      "legends-arceus": 28,
      "scarlet-violet": 182,
      "legends-za": 103
    },
    "games": [
      "red-blue",
      "gold-silver",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "porygon",
    "id": 137,
    "gen": "generation-i",
    "regions": {
      "red-blue": 137,
      "gold-silver": 215,
      "platinum": 192,
      "heartgold-soulsilver": 220,
      "sun-moon": 217,
      "ultra-sun-ultra-moon": 281,
      "lets-go": 137,
      "isle-of-armor": 208,
      "legends-arceus": 133,
      "blueberry": 129,
      "hyperspace": 11
    },
    "games": [
      "red-blue",
      "gold-silver",
      "platinum",
      "heartgold-soulsilver",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "isle-of-armor",
      "legends-arceus",
      "blueberry",
      "hyperspace"
    ]
  },
  {
    "name": "omanyte",
    "id": 138,
    "gen": "generation-i",
    "regions": {
      "red-blue": 138,
      "gold-silver": 220,
      "heartgold-soulsilver": 225,
      "ultra-sun-ultra-moon": 227,
      "lets-go": 138,
      "crown-tundra": 123
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "ultra-sun-ultra-moon",
      "lets-go",
      "crown-tundra"
    ]
  },
  {
    "name": "omastar",
    "id": 139,
    "gen": "generation-i",
    "regions": {
      "red-blue": 139,
      "gold-silver": 221,
      "heartgold-soulsilver": 226,
      "ultra-sun-ultra-moon": 228,
      "lets-go": 139,
      "crown-tundra": 124
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "ultra-sun-ultra-moon",
      "lets-go",
      "crown-tundra"
    ]
  },
  {
    "name": "kabuto",
    "id": 140,
    "gen": "generation-i",
    "regions": {
      "red-blue": 140,
      "gold-silver": 222,
      "heartgold-soulsilver": 227,
      "ultra-sun-ultra-moon": 229,
      "lets-go": 140,
      "crown-tundra": 125
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "ultra-sun-ultra-moon",
      "lets-go",
      "crown-tundra"
    ]
  },
  {
    "name": "kabutops",
    "id": 141,
    "gen": "generation-i",
    "regions": {
      "red-blue": 141,
      "gold-silver": 223,
      "heartgold-soulsilver": 228,
      "ultra-sun-ultra-moon": 230,
      "lets-go": 141,
      "crown-tundra": 126
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "ultra-sun-ultra-moon",
      "lets-go",
      "crown-tundra"
    ]
  },
  {
    "name": "aerodactyl",
    "id": 142,
    "gen": "generation-i",
    "regions": {
      "red-blue": 142,
      "gold-silver": 224,
      "heartgold-soulsilver": 229,
      "x-y": 221,
      "sun-moon": 284,
      "ultra-sun-ultra-moon": 382,
      "lets-go": 142,
      "crown-tundra": 127,
      "legends-za": 192
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "crown-tundra",
      "legends-za"
    ]
  },
  {
    "name": "snorlax",
    "id": 143,
    "gen": "generation-i",
    "regions": {
      "red-blue": 143,
      "gold-silver": 225,
      "diamond-pearl": 113,
      "platinum": 113,
      "heartgold-soulsilver": 230,
      "x-y": 139,
      "sun-moon": 36,
      "ultra-sun-ultra-moon": 43,
      "lets-go": 143,
      "sword-shield": 261,
      "crown-tundra": 173,
      "legends-arceus": 52,
      "kitakami": 103
    },
    "games": [
      "red-blue",
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "kitakami"
    ]
  },
  {
    "name": "articuno",
    "id": 144,
    "gen": "generation-i",
    "regions": {
      "red-blue": 144,
      "gold-silver": 235,
      "heartgold-soulsilver": 240,
      "x-y": 304,
      "lets-go": 144
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go"
    ]
  },
  {
    "name": "zapdos",
    "id": 145,
    "gen": "generation-i",
    "regions": {
      "red-blue": 145,
      "gold-silver": 236,
      "heartgold-soulsilver": 241,
      "x-y": 305,
      "lets-go": 145
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go"
    ]
  },
  {
    "name": "moltres",
    "id": 146,
    "gen": "generation-i",
    "regions": {
      "red-blue": 146,
      "gold-silver": 237,
      "heartgold-soulsilver": 242,
      "x-y": 306,
      "lets-go": 146
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go"
    ]
  },
  {
    "name": "dratini",
    "id": 147,
    "gen": "generation-i",
    "regions": {
      "red-blue": 147,
      "gold-silver": 241,
      "heartgold-soulsilver": 246,
      "x-y": 451,
      "sun-moon": 281,
      "ultra-sun-ultra-moon": 379,
      "lets-go": 147,
      "crown-tundra": 194,
      "scarlet-violet": 348,
      "legends-za": 145
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "crown-tundra",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "dragonair",
    "id": 148,
    "gen": "generation-i",
    "regions": {
      "red-blue": 148,
      "gold-silver": 242,
      "heartgold-soulsilver": 247,
      "x-y": 452,
      "sun-moon": 282,
      "ultra-sun-ultra-moon": 380,
      "lets-go": 148,
      "crown-tundra": 195,
      "scarlet-violet": 349,
      "legends-za": 146
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "crown-tundra",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "dragonite",
    "id": 149,
    "gen": "generation-i",
    "regions": {
      "red-blue": 149,
      "gold-silver": 243,
      "heartgold-soulsilver": 248,
      "x-y": 453,
      "sun-moon": 283,
      "ultra-sun-ultra-moon": 381,
      "lets-go": 149,
      "crown-tundra": 196,
      "scarlet-violet": 350,
      "legends-za": 147
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "lets-go",
      "crown-tundra",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "mewtwo",
    "id": 150,
    "gen": "generation-i",
    "regions": {
      "red-blue": 150,
      "gold-silver": 249,
      "heartgold-soulsilver": 254,
      "x-y": 457,
      "lets-go": 150,
      "legends-za": 232
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "lets-go",
      "legends-za"
    ]
  },
  {
    "name": "mew",
    "id": 151,
    "gen": "generation-i",
    "regions": {
      "red-blue": 151,
      "gold-silver": 250,
      "heartgold-soulsilver": 255,
      "lets-go": 151
    },
    "games": [
      "red-blue",
      "gold-silver",
      "heartgold-soulsilver",
      "lets-go"
    ]
  },
  {
    "name": "chikorita",
    "id": 152,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 1,
      "heartgold-soulsilver": 1,
      "blueberry": 173,
      "legends-za": 1
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "bayleef",
    "id": 153,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 2,
      "heartgold-soulsilver": 2,
      "blueberry": 174,
      "legends-za": 2
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "meganium",
    "id": 154,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 3,
      "heartgold-soulsilver": 3,
      "blueberry": 175,
      "legends-za": 3
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "cyndaquil",
    "id": 155,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 4,
      "heartgold-soulsilver": 4,
      "legends-arceus": 4,
      "blueberry": 176
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "quilava",
    "id": 156,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 5,
      "heartgold-soulsilver": 5,
      "legends-arceus": 5,
      "blueberry": 177
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "typhlosion",
    "id": 157,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 6,
      "heartgold-soulsilver": 6,
      "blueberry": 178
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "blueberry"
    ]
  },
  {
    "name": "totodile",
    "id": 158,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 7,
      "heartgold-soulsilver": 7,
      "blueberry": 179,
      "legends-za": 7
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "croconaw",
    "id": 159,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 8,
      "heartgold-soulsilver": 8,
      "blueberry": 180,
      "legends-za": 8
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "feraligatr",
    "id": 160,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 9,
      "heartgold-soulsilver": 9,
      "blueberry": 181,
      "legends-za": 9
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "sentret",
    "id": 161,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 19,
      "heartgold-soulsilver": 19,
      "x-y": 109,
      "kitakami": 26
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "kitakami"
    ]
  },
  {
    "name": "furret",
    "id": 162,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 20,
      "heartgold-soulsilver": 20,
      "x-y": 110,
      "kitakami": 27
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "kitakami"
    ]
  },
  {
    "name": "hoothoot",
    "id": 163,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 15,
      "diamond-pearl": 106,
      "platinum": 106,
      "heartgold-soulsilver": 15,
      "x-y": 423,
      "ultra-sun-ultra-moon": 212,
      "sword-shield": 19,
      "kitakami": 45
    },
    "games": [
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "kitakami"
    ]
  },
  {
    "name": "noctowl",
    "id": 164,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 16,
      "diamond-pearl": 107,
      "platinum": 107,
      "heartgold-soulsilver": 16,
      "x-y": 424,
      "ultra-sun-ultra-moon": 213,
      "sword-shield": 20,
      "kitakami": 46
    },
    "games": [
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "kitakami"
    ]
  },
  {
    "name": "ledyba",
    "id": 165,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 30,
      "heartgold-soulsilver": 30,
      "x-y": 74,
      "sun-moon": 20,
      "ultra-sun-ultra-moon": 20
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "ledian",
    "id": 166,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 31,
      "heartgold-soulsilver": 31,
      "x-y": 75,
      "sun-moon": 21,
      "ultra-sun-ultra-moon": 21
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "spinarak",
    "id": 167,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 32,
      "heartgold-soulsilver": 32,
      "x-y": 413,
      "sun-moon": 22,
      "ultra-sun-ultra-moon": 22,
      "kitakami": 1,
      "legends-za": 58
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "ariados",
    "id": 168,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 33,
      "heartgold-soulsilver": 33,
      "x-y": 414,
      "sun-moon": 23,
      "ultra-sun-ultra-moon": 23,
      "kitakami": 2,
      "legends-za": 59
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "crobat",
    "id": 169,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 39,
      "ruby-sapphire": 65,
      "diamond-pearl": 30,
      "platinum": 30,
      "heartgold-soulsilver": 39,
      "black-2-white-2": 64,
      "x-y": 147,
      "omega-ruby-alpha-sapphire": 67,
      "sun-moon": 70,
      "ultra-sun-ultra-moon": 82,
      "crown-tundra": 146,
      "legends-arceus": 36,
      "hyperspace": 96
    },
    "games": [
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "crown-tundra",
      "legends-arceus",
      "hyperspace"
    ]
  },
  {
    "name": "chinchou",
    "id": 170,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 174,
      "ruby-sapphire": 181,
      "heartgold-soulsilver": 176,
      "x-y": 300,
      "omega-ruby-alpha-sapphire": 190,
      "sun-moon": 201,
      "ultra-sun-ultra-moon": 257,
      "sword-shield": 220,
      "isle-of-armor": 188,
      "blueberry": 78
    },
    "games": [
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "blueberry"
    ]
  },
  {
    "name": "lanturn",
    "id": 171,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 175,
      "ruby-sapphire": 182,
      "heartgold-soulsilver": 177,
      "x-y": 301,
      "omega-ruby-alpha-sapphire": 191,
      "sun-moon": 202,
      "ultra-sun-ultra-moon": 258,
      "sword-shield": 221,
      "isle-of-armor": 189,
      "blueberry": 79
    },
    "games": [
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "blueberry"
    ]
  },
  {
    "name": "pichu",
    "id": 172,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 21,
      "ruby-sapphire": 155,
      "diamond-pearl": 103,
      "platinum": 103,
      "heartgold-soulsilver": 21,
      "x-y": 35,
      "omega-ruby-alpha-sapphire": 162,
      "sun-moon": 24,
      "ultra-sun-ultra-moon": 31,
      "sword-shield": 193,
      "isle-of-armor": 84,
      "legends-arceus": 55,
      "scarlet-violet": 73,
      "kitakami": 20,
      "legends-za": 52
    },
    "games": [
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "cleffa",
    "id": 173,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 40,
      "diamond-pearl": 99,
      "platinum": 99,
      "heartgold-soulsilver": 40,
      "black-2-white-2": 89,
      "sun-moon": 210,
      "ultra-sun-ultra-moon": 272,
      "sword-shield": 254,
      "crown-tundra": 43,
      "legends-arceus": 199,
      "kitakami": 151,
      "legends-za": 55
    },
    "games": [
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "igglybuff",
    "id": 174,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 43,
      "ruby-sapphire": 137,
      "heartgold-soulsilver": 43,
      "black-2-white-2": 282,
      "x-y": 425,
      "omega-ruby-alpha-sapphire": 142,
      "sun-moon": 134,
      "ultra-sun-ultra-moon": 167,
      "isle-of-armor": 11,
      "scarlet-violet": 59,
      "hyperspace": 76
    },
    "games": [
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "togepi",
    "id": 175,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 46,
      "platinum": 173,
      "heartgold-soulsilver": 46,
      "sword-shield": 257,
      "legends-arceus": 127
    },
    "games": [
      "gold-silver",
      "platinum",
      "heartgold-soulsilver",
      "sword-shield",
      "legends-arceus"
    ]
  },
  {
    "name": "togetic",
    "id": 176,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 47,
      "platinum": 174,
      "heartgold-soulsilver": 47,
      "sword-shield": 258,
      "legends-arceus": 128
    },
    "games": [
      "gold-silver",
      "platinum",
      "heartgold-soulsilver",
      "sword-shield",
      "legends-arceus"
    ]
  },
  {
    "name": "natu",
    "id": 177,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 159,
      "ruby-sapphire": 162,
      "heartgold-soulsilver": 161,
      "omega-ruby-alpha-sapphire": 169,
      "ultra-sun-ultra-moon": 252,
      "sword-shield": 92
    },
    "games": [
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "omega-ruby-alpha-sapphire",
      "ultra-sun-ultra-moon",
      "sword-shield"
    ]
  },
  {
    "name": "xatu",
    "id": 178,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 160,
      "ruby-sapphire": 163,
      "heartgold-soulsilver": 162,
      "omega-ruby-alpha-sapphire": 170,
      "ultra-sun-ultra-moon": 253,
      "sword-shield": 93
    },
    "games": [
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "omega-ruby-alpha-sapphire",
      "ultra-sun-ultra-moon",
      "sword-shield"
    ]
  },
  {
    "name": "mareep",
    "id": 179,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 53,
      "heartgold-soulsilver": 53,
      "black-2-white-2": 26,
      "x-y": 280,
      "ultra-sun-ultra-moon": 162,
      "scarlet-violet": 101,
      "legends-za": 24
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "flaaffy",
    "id": 180,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 54,
      "heartgold-soulsilver": 54,
      "black-2-white-2": 27,
      "x-y": 281,
      "ultra-sun-ultra-moon": 163,
      "scarlet-violet": 102,
      "legends-za": 25
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "ampharos",
    "id": 181,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 55,
      "heartgold-soulsilver": 55,
      "black-2-white-2": 28,
      "x-y": 282,
      "ultra-sun-ultra-moon": 164,
      "scarlet-violet": 103,
      "legends-za": 26
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "bellossom",
    "id": 182,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 86,
      "ruby-sapphire": 91,
      "heartgold-soulsilver": 86,
      "x-y": 108,
      "omega-ruby-alpha-sapphire": 94,
      "sword-shield": 58,
      "blueberry": 65
    },
    "games": [
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "marill",
    "id": 183,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 130,
      "ruby-sapphire": 55,
      "diamond-pearl": 125,
      "platinum": 125,
      "heartgold-soulsilver": 132,
      "black-2-white-2": 32,
      "x-y": 42,
      "omega-ruby-alpha-sapphire": 56,
      "isle-of-armor": 140,
      "scarlet-violet": 47
    },
    "games": [
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "isle-of-armor",
      "scarlet-violet"
    ]
  },
  {
    "name": "azumarill",
    "id": 184,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 131,
      "ruby-sapphire": 56,
      "diamond-pearl": 126,
      "platinum": 126,
      "heartgold-soulsilver": 133,
      "black-2-white-2": 33,
      "x-y": 43,
      "omega-ruby-alpha-sapphire": 57,
      "isle-of-armor": 141,
      "scarlet-violet": 48
    },
    "games": [
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "isle-of-armor",
      "scarlet-violet"
    ]
  },
  {
    "name": "sudowoodo",
    "id": 185,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 106,
      "diamond-pearl": 93,
      "platinum": 93,
      "heartgold-soulsilver": 107,
      "x-y": 436,
      "sun-moon": 31,
      "ultra-sun-ultra-moon": 38,
      "sword-shield": 253,
      "legends-arceus": 124,
      "scarlet-violet": 88,
      "kitakami": 84
    },
    "games": [
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "legends-arceus",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "politoed",
    "id": 186,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 75,
      "heartgold-soulsilver": 75,
      "x-y": 342,
      "sun-moon": 152,
      "ultra-sun-ultra-moon": 185,
      "isle-of-armor": 145,
      "kitakami": 42
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "kitakami"
    ]
  },
  {
    "name": "hoppip",
    "id": 187,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 67,
      "heartgold-soulsilver": 67,
      "x-y": 135,
      "scarlet-violet": 16
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "scarlet-violet"
    ]
  },
  {
    "name": "skiploom",
    "id": 188,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 68,
      "heartgold-soulsilver": 68,
      "x-y": 136,
      "scarlet-violet": 17
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "scarlet-violet"
    ]
  },
  {
    "name": "jumpluff",
    "id": 189,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 69,
      "heartgold-soulsilver": 69,
      "x-y": 137,
      "scarlet-violet": 18
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "scarlet-violet"
    ]
  },
  {
    "name": "aipom",
    "id": 190,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 122,
      "diamond-pearl": 63,
      "platinum": 63,
      "heartgold-soulsilver": 123,
      "ultra-sun-ultra-moon": 368,
      "legends-arceus": 78,
      "kitakami": 47
    },
    "games": [
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "ultra-sun-ultra-moon",
      "legends-arceus",
      "kitakami"
    ]
  },
  {
    "name": "sunkern",
    "id": 191,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 102,
      "heartgold-soulsilver": 103,
      "black-2-white-2": 21,
      "scarlet-violet": 31
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "black-2-white-2",
      "scarlet-violet"
    ]
  },
  {
    "name": "sunflora",
    "id": 192,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 103,
      "heartgold-soulsilver": 104,
      "black-2-white-2": 22,
      "scarlet-violet": 32
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "black-2-white-2",
      "scarlet-violet"
    ]
  },
  {
    "name": "yanma",
    "id": 193,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 101,
      "platinum": 183,
      "heartgold-soulsilver": 101,
      "black-2-white-2": 287,
      "x-y": 240,
      "legends-arceus": 105,
      "kitakami": 3
    },
    "games": [
      "gold-silver",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "legends-arceus",
      "kitakami"
    ]
  },
  {
    "name": "wooper",
    "id": 194,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 56,
      "diamond-pearl": 117,
      "platinum": 117,
      "heartgold-soulsilver": 56,
      "x-y": 323,
      "sword-shield": 100,
      "isle-of-armor": 58,
      "kitakami": 5
    },
    "games": [
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "sword-shield",
      "isle-of-armor",
      "kitakami"
    ]
  },
  {
    "name": "quagsire",
    "id": 195,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 57,
      "diamond-pearl": 118,
      "platinum": 118,
      "heartgold-soulsilver": 57,
      "x-y": 324,
      "sword-shield": 101,
      "isle-of-armor": 59,
      "kitakami": 6
    },
    "games": [
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "sword-shield",
      "isle-of-armor",
      "kitakami"
    ]
  },
  {
    "name": "espeon",
    "id": 196,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 184,
      "platinum": 167,
      "heartgold-soulsilver": 188,
      "black-2-white-2": 96,
      "x-y": 234,
      "sun-moon": 127,
      "ultra-sun-ultra-moon": 157,
      "sword-shield": 200,
      "crown-tundra": 79,
      "legends-arceus": 29,
      "scarlet-violet": 183,
      "legends-za": 104
    },
    "games": [
      "gold-silver",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "umbreon",
    "id": 197,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 185,
      "platinum": 168,
      "heartgold-soulsilver": 189,
      "black-2-white-2": 97,
      "x-y": 235,
      "sun-moon": 128,
      "ultra-sun-ultra-moon": 158,
      "sword-shield": 201,
      "crown-tundra": 78,
      "legends-arceus": 30,
      "scarlet-violet": 184,
      "legends-za": 105
    },
    "games": [
      "gold-silver",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "murkrow",
    "id": 198,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 208,
      "diamond-pearl": 74,
      "platinum": 74,
      "heartgold-soulsilver": 213,
      "x-y": 357,
      "sun-moon": 277,
      "ultra-sun-ultra-moon": 78,
      "legends-arceus": 140,
      "scarlet-violet": 232
    },
    "games": [
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "legends-arceus",
      "scarlet-violet"
    ]
  },
  {
    "name": "slowking",
    "id": 199,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 82,
      "heartgold-soulsilver": 82,
      "x-y": 288,
      "sun-moon": 39,
      "ultra-sun-ultra-moon": 46,
      "scarlet-violet": 327,
      "blueberry": 77,
      "legends-za": 139
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "scarlet-violet",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "misdreavus",
    "id": 200,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 214,
      "diamond-pearl": 72,
      "platinum": 72,
      "heartgold-soulsilver": 219,
      "sun-moon": 66,
      "ultra-sun-ultra-moon": 372,
      "legends-arceus": 197,
      "scarlet-violet": 114
    },
    "games": [
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "legends-arceus",
      "scarlet-violet"
    ]
  },
  {
    "name": "unown",
    "id": 201,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 61,
      "diamond-pearl": 114,
      "platinum": 114,
      "heartgold-soulsilver": 61,
      "legends-arceus": 142
    },
    "games": [
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "legends-arceus"
    ]
  },
  {
    "name": "wobbuffet",
    "id": 202,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 107,
      "ruby-sapphire": 161,
      "heartgold-soulsilver": 108,
      "x-y": 272,
      "omega-ruby-alpha-sapphire": 168,
      "sword-shield": 217
    },
    "games": [
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sword-shield"
    ]
  },
  {
    "name": "girafarig",
    "id": 203,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 147,
      "ruby-sapphire": 164,
      "diamond-pearl": 121,
      "platinum": 121,
      "heartgold-soulsilver": 149,
      "omega-ruby-alpha-sapphire": 171,
      "scarlet-violet": 192,
      "blueberry": 25
    },
    "games": [
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "omega-ruby-alpha-sapphire",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "pineco",
    "id": 204,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 93,
      "heartgold-soulsilver": 93,
      "ultra-sun-ultra-moon": 268,
      "scarlet-violet": 258
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "ultra-sun-ultra-moon",
      "scarlet-violet"
    ]
  },
  {
    "name": "forretress",
    "id": 205,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 94,
      "heartgold-soulsilver": 94,
      "ultra-sun-ultra-moon": 269,
      "scarlet-violet": 259
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "ultra-sun-ultra-moon",
      "scarlet-violet"
    ]
  },
  {
    "name": "dunsparce",
    "id": 206,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 52,
      "heartgold-soulsilver": 52,
      "black-2-white-2": 36,
      "x-y": 40,
      "ultra-sun-ultra-moon": 63,
      "isle-of-armor": 52,
      "scarlet-violet": 188,
      "kitakami": 160
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "gligar",
    "id": 207,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 189,
      "platinum": 153,
      "heartgold-soulsilver": 193,
      "black-2-white-2": 222,
      "x-y": 421,
      "legends-arceus": 185,
      "kitakami": 121
    },
    "games": [
      "gold-silver",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "legends-arceus",
      "kitakami"
    ]
  },
  {
    "name": "steelix",
    "id": 208,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 63,
      "diamond-pearl": 35,
      "platinum": 35,
      "heartgold-soulsilver": 63,
      "black-2-white-2": 73,
      "x-y": 207,
      "sword-shield": 179,
      "legends-arceus": 119,
      "legends-za": 198
    },
    "games": [
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "legends-arceus",
      "legends-za"
    ]
  },
  {
    "name": "snubbull",
    "id": 209,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 123,
      "heartgold-soulsilver": 125,
      "x-y": 224,
      "sun-moon": 258,
      "ultra-sun-ultra-moon": 339,
      "blueberry": 151
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "blueberry"
    ]
  },
  {
    "name": "granbull",
    "id": 210,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 124,
      "heartgold-soulsilver": 126,
      "x-y": 225,
      "sun-moon": 259,
      "ultra-sun-ultra-moon": 340,
      "blueberry": 152
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "blueberry"
    ]
  },
  {
    "name": "qwilfish",
    "id": 211,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 161,
      "heartgold-soulsilver": 163,
      "x-y": 191,
      "sword-shield": 304,
      "scarlet-violet": 332,
      "blueberry": 146,
      "hyperspace": 37
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sword-shield",
      "scarlet-violet",
      "blueberry",
      "hyperspace"
    ]
  },
  {
    "name": "scizor",
    "id": 212,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 111,
      "platinum": 196,
      "heartgold-soulsilver": 112,
      "x-y": 443,
      "sun-moon": 276,
      "ultra-sun-ultra-moon": 366,
      "isle-of-armor": 119,
      "legends-arceus": 74,
      "scarlet-violet": 261,
      "blueberry": 20,
      "legends-za": 177
    },
    "games": [
      "gold-silver",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "shuckle",
    "id": 213,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 166,
      "heartgold-soulsilver": 168,
      "black-2-white-2": 233,
      "x-y": 320,
      "sword-shield": 227,
      "crown-tundra": 170
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "heracross",
    "id": 214,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 113,
      "ruby-sapphire": 168,
      "diamond-pearl": 62,
      "platinum": 62,
      "heartgold-soulsilver": 114,
      "black-2-white-2": 146,
      "x-y": 284,
      "omega-ruby-alpha-sapphire": 175,
      "ultra-sun-ultra-moon": 367,
      "isle-of-armor": 121,
      "legends-arceus": 75,
      "scarlet-violet": 262,
      "kitakami": 49,
      "legends-za": 179
    },
    "games": [
      "gold-silver",
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "sneasel",
    "id": 215,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 213,
      "diamond-pearl": 144,
      "platinum": 144,
      "heartgold-soulsilver": 218,
      "black-2-white-2": 253,
      "x-y": 397,
      "sun-moon": 249,
      "ultra-sun-ultra-moon": 326,
      "sword-shield": 292,
      "crown-tundra": 28,
      "scarlet-violet": 230,
      "kitakami": 170
    },
    "games": [
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "teddiursa",
    "id": 216,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 193,
      "heartgold-soulsilver": 198,
      "x-y": 438,
      "legends-arceus": 112,
      "scarlet-violet": 215
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "legends-arceus",
      "scarlet-violet"
    ]
  },
  {
    "name": "ursaring",
    "id": 217,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 194,
      "heartgold-soulsilver": 199,
      "x-y": 439,
      "legends-arceus": 113,
      "scarlet-violet": 216
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "legends-arceus",
      "scarlet-violet"
    ]
  },
  {
    "name": "slugma",
    "id": 218,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 211,
      "ruby-sapphire": 103,
      "heartgold-soulsilver": 216,
      "x-y": 318,
      "omega-ruby-alpha-sapphire": 108,
      "kitakami": 144
    },
    "games": [
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "kitakami"
    ]
  },
  {
    "name": "magcargo",
    "id": 219,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 212,
      "ruby-sapphire": 104,
      "heartgold-soulsilver": 217,
      "x-y": 319,
      "omega-ruby-alpha-sapphire": 109,
      "kitakami": 145
    },
    "games": [
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "kitakami"
    ]
  },
  {
    "name": "swinub",
    "id": 220,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 191,
      "platinum": 203,
      "heartgold-soulsilver": 195,
      "black-2-white-2": 259,
      "x-y": 382,
      "sword-shield": 75,
      "crown-tundra": 7,
      "legends-arceus": 212,
      "kitakami": 50
    },
    "games": [
      "gold-silver",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "kitakami"
    ]
  },
  {
    "name": "piloswine",
    "id": 221,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 192,
      "platinum": 204,
      "heartgold-soulsilver": 196,
      "black-2-white-2": 260,
      "x-y": 383,
      "sword-shield": 76,
      "crown-tundra": 8,
      "legends-arceus": 213,
      "kitakami": 51
    },
    "games": [
      "gold-silver",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "kitakami"
    ]
  },
  {
    "name": "corsola",
    "id": 222,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 171,
      "ruby-sapphire": 180,
      "heartgold-soulsilver": 173,
      "black-2-white-2": 238,
      "x-y": 299,
      "omega-ruby-alpha-sapphire": 189,
      "sun-moon": 112,
      "ultra-sun-ultra-moon": 135
    },
    "games": [
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "remoraid",
    "id": 223,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 172,
      "diamond-pearl": 132,
      "platinum": 132,
      "heartgold-soulsilver": 174,
      "black-2-white-2": 236,
      "x-y": 297,
      "ultra-sun-ultra-moon": 143,
      "sword-shield": 148,
      "isle-of-armor": 44,
      "legends-arceus": 146
    },
    "games": [
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "legends-arceus"
    ]
  },
  {
    "name": "octillery",
    "id": 224,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 173,
      "diamond-pearl": 133,
      "platinum": 133,
      "heartgold-soulsilver": 175,
      "black-2-white-2": 237,
      "x-y": 298,
      "ultra-sun-ultra-moon": 144,
      "sword-shield": 149,
      "isle-of-armor": 45,
      "legends-arceus": 147
    },
    "games": [
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "legends-arceus"
    ]
  },
  {
    "name": "delibird",
    "id": 225,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 190,
      "heartgold-soulsilver": 194,
      "black-2-white-2": 255,
      "x-y": 396,
      "sun-moon": 81,
      "ultra-sun-ultra-moon": 95,
      "sword-shield": 78,
      "crown-tundra": 120,
      "scarlet-violet": 355,
      "legends-za": 168
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "mantine",
    "id": 226,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 197,
      "diamond-pearl": 141,
      "platinum": 141,
      "heartgold-soulsilver": 202,
      "black-2-white-2": 235,
      "x-y": 293,
      "ultra-sun-ultra-moon": 146,
      "sword-shield": 355,
      "isle-of-armor": 47,
      "legends-arceus": 165
    },
    "games": [
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "legends-arceus"
    ]
  },
  {
    "name": "skarmory",
    "id": 227,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 198,
      "ruby-sapphire": 115,
      "heartgold-soulsilver": 203,
      "black-2-white-2": 204,
      "x-y": 418,
      "omega-ruby-alpha-sapphire": 120,
      "sun-moon": 208,
      "ultra-sun-ultra-moon": 270,
      "isle-of-armor": 153,
      "blueberry": 113,
      "legends-za": 216
    },
    "games": [
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "houndour",
    "id": 228,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 209,
      "platinum": 176,
      "heartgold-soulsilver": 214,
      "x-y": 228,
      "ultra-sun-ultra-moon": 289,
      "scarlet-violet": 25,
      "kitakami": 123,
      "legends-za": 91
    },
    "games": [
      "gold-silver",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "ultra-sun-ultra-moon",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "houndoom",
    "id": 229,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 210,
      "platinum": 177,
      "heartgold-soulsilver": 215,
      "x-y": 229,
      "ultra-sun-ultra-moon": 290,
      "scarlet-violet": 26,
      "kitakami": 124,
      "legends-za": 92
    },
    "games": [
      "gold-silver",
      "platinum",
      "heartgold-soulsilver",
      "x-y",
      "ultra-sun-ultra-moon",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "kingdra",
    "id": 230,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 188,
      "ruby-sapphire": 186,
      "heartgold-soulsilver": 192,
      "x-y": 194,
      "omega-ruby-alpha-sapphire": 195,
      "isle-of-armor": 200,
      "blueberry": 54
    },
    "games": [
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "isle-of-armor",
      "blueberry"
    ]
  },
  {
    "name": "phanpy",
    "id": 231,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 195,
      "ruby-sapphire": 165,
      "heartgold-soulsilver": 200,
      "omega-ruby-alpha-sapphire": 172,
      "scarlet-violet": 122
    },
    "games": [
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "omega-ruby-alpha-sapphire",
      "scarlet-violet"
    ]
  },
  {
    "name": "donphan",
    "id": 232,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 196,
      "ruby-sapphire": 166,
      "heartgold-soulsilver": 201,
      "omega-ruby-alpha-sapphire": 173,
      "scarlet-violet": 123
    },
    "games": [
      "gold-silver",
      "ruby-sapphire",
      "heartgold-soulsilver",
      "omega-ruby-alpha-sapphire",
      "scarlet-violet"
    ]
  },
  {
    "name": "porygon2",
    "id": 233,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 216,
      "platinum": 193,
      "heartgold-soulsilver": 221,
      "sun-moon": 218,
      "ultra-sun-ultra-moon": 282,
      "isle-of-armor": 209,
      "legends-arceus": 134,
      "blueberry": 130,
      "hyperspace": 12
    },
    "games": [
      "gold-silver",
      "platinum",
      "heartgold-soulsilver",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "legends-arceus",
      "blueberry",
      "hyperspace"
    ]
  },
  {
    "name": "stantler",
    "id": 234,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 129,
      "heartgold-soulsilver": 131,
      "legends-arceus": 49,
      "scarlet-violet": 204,
      "kitakami": 53
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "legends-arceus",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "smeargle",
    "id": 235,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 157,
      "heartgold-soulsilver": 159,
      "x-y": 124,
      "sun-moon": 58,
      "ultra-sun-ultra-moon": 70,
      "blueberry": 40
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "blueberry"
    ]
  },
  {
    "name": "tyrogue",
    "id": 236,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 143,
      "heartgold-soulsilver": 145,
      "sword-shield": 107,
      "blueberry": 92
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "hitmontop",
    "id": 237,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 146,
      "heartgold-soulsilver": 148,
      "sword-shield": 110,
      "blueberry": 95
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "smoochum",
    "id": 238,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 152,
      "heartgold-soulsilver": 154,
      "x-y": 389,
      "ultra-sun-ultra-moon": 109,
      "crown-tundra": 13
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "ultra-sun-ultra-moon",
      "crown-tundra"
    ]
  },
  {
    "name": "elekid",
    "id": 239,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 154,
      "platinum": 197,
      "heartgold-soulsilver": 156,
      "black-2-white-2": 57,
      "sun-moon": 226,
      "ultra-sun-ultra-moon": 295,
      "crown-tundra": 15,
      "legends-arceus": 182,
      "blueberry": 10
    },
    "games": [
      "gold-silver",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "crown-tundra",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "magby",
    "id": 240,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 150,
      "platinum": 200,
      "heartgold-soulsilver": 152,
      "black-2-white-2": 54,
      "sun-moon": 166,
      "ultra-sun-ultra-moon": 200,
      "crown-tundra": 18,
      "legends-arceus": 174,
      "blueberry": 13
    },
    "games": [
      "gold-silver",
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "crown-tundra",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "miltank",
    "id": 241,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 149,
      "heartgold-soulsilver": 151,
      "x-y": 279,
      "sun-moon": 138,
      "ultra-sun-ultra-moon": 171,
      "isle-of-armor": 117
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor"
    ]
  },
  {
    "name": "blissey",
    "id": 242,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 218,
      "diamond-pearl": 98,
      "platinum": 98,
      "heartgold-soulsilver": 223,
      "sun-moon": 34,
      "ultra-sun-ultra-moon": 41,
      "isle-of-armor": 8,
      "legends-arceus": 88,
      "scarlet-violet": 45,
      "blueberry": 18
    },
    "games": [
      "gold-silver",
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "raikou",
    "id": 243,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 238,
      "heartgold-soulsilver": 243
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver"
    ]
  },
  {
    "name": "entei",
    "id": 244,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 239,
      "heartgold-soulsilver": 244
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver"
    ]
  },
  {
    "name": "suicune",
    "id": 245,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 240,
      "heartgold-soulsilver": 245
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver"
    ]
  },
  {
    "name": "larvitar",
    "id": 246,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 244,
      "heartgold-soulsilver": 249,
      "black-2-white-2": 293,
      "x-y": 408,
      "ultra-sun-ultra-moon": 247,
      "sword-shield": 383,
      "crown-tundra": 139,
      "scarlet-violet": 317,
      "legends-za": 206
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "pupitar",
    "id": 247,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 245,
      "heartgold-soulsilver": 250,
      "black-2-white-2": 294,
      "x-y": 409,
      "ultra-sun-ultra-moon": 248,
      "sword-shield": 384,
      "crown-tundra": 140,
      "scarlet-violet": 318,
      "legends-za": 207
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "tyranitar",
    "id": 248,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 246,
      "heartgold-soulsilver": 251,
      "black-2-white-2": 295,
      "x-y": 410,
      "ultra-sun-ultra-moon": 249,
      "sword-shield": 385,
      "crown-tundra": 141,
      "scarlet-violet": 319,
      "legends-za": 208
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "lugia",
    "id": 249,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 247,
      "heartgold-soulsilver": 252
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver"
    ]
  },
  {
    "name": "ho-oh",
    "id": 250,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 248,
      "heartgold-soulsilver": 253
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver"
    ]
  },
  {
    "name": "celebi",
    "id": 251,
    "gen": "generation-ii",
    "regions": {
      "gold-silver": 251,
      "heartgold-soulsilver": 256
    },
    "games": [
      "gold-silver",
      "heartgold-soulsilver"
    ]
  },
  {
    "name": "treecko",
    "id": 252,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 1,
      "omega-ruby-alpha-sapphire": 1,
      "blueberry": 182,
      "hyperspace": 39
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "blueberry",
      "hyperspace"
    ]
  },
  {
    "name": "grovyle",
    "id": 253,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 2,
      "omega-ruby-alpha-sapphire": 2,
      "blueberry": 183,
      "hyperspace": 40
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "blueberry",
      "hyperspace"
    ]
  },
  {
    "name": "sceptile",
    "id": 254,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 3,
      "omega-ruby-alpha-sapphire": 3,
      "blueberry": 184,
      "hyperspace": 41
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "blueberry",
      "hyperspace"
    ]
  },
  {
    "name": "torchic",
    "id": 255,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 4,
      "omega-ruby-alpha-sapphire": 4,
      "blueberry": 185,
      "hyperspace": 42
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "blueberry",
      "hyperspace"
    ]
  },
  {
    "name": "combusken",
    "id": 256,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 5,
      "omega-ruby-alpha-sapphire": 5,
      "blueberry": 186,
      "hyperspace": 43
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "blueberry",
      "hyperspace"
    ]
  },
  {
    "name": "blaziken",
    "id": 257,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 6,
      "omega-ruby-alpha-sapphire": 6,
      "blueberry": 187,
      "hyperspace": 44
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "blueberry",
      "hyperspace"
    ]
  },
  {
    "name": "mudkip",
    "id": 258,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 7,
      "omega-ruby-alpha-sapphire": 7,
      "blueberry": 188,
      "hyperspace": 45
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "blueberry",
      "hyperspace"
    ]
  },
  {
    "name": "marshtomp",
    "id": 259,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 8,
      "omega-ruby-alpha-sapphire": 8,
      "blueberry": 189,
      "hyperspace": 46
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "blueberry",
      "hyperspace"
    ]
  },
  {
    "name": "swampert",
    "id": 260,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 9,
      "omega-ruby-alpha-sapphire": 9,
      "blueberry": 190,
      "hyperspace": 47
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "blueberry",
      "hyperspace"
    ]
  },
  {
    "name": "poochyena",
    "id": 261,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 10,
      "x-y": 350,
      "omega-ruby-alpha-sapphire": 10,
      "kitakami": 7
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "kitakami"
    ]
  },
  {
    "name": "mightyena",
    "id": 262,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 11,
      "x-y": 351,
      "omega-ruby-alpha-sapphire": 11,
      "kitakami": 8
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "kitakami"
    ]
  },
  {
    "name": "zigzagoon",
    "id": 263,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 12,
      "x-y": 12,
      "omega-ruby-alpha-sapphire": 12
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire"
    ]
  },
  {
    "name": "linoone",
    "id": 264,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 13,
      "x-y": 13,
      "omega-ruby-alpha-sapphire": 13
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire"
    ]
  },
  {
    "name": "wurmple",
    "id": 265,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 14,
      "diamond-pearl": 48,
      "platinum": 48,
      "omega-ruby-alpha-sapphire": 14,
      "legends-arceus": 18
    },
    "games": [
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "omega-ruby-alpha-sapphire",
      "legends-arceus"
    ]
  },
  {
    "name": "silcoon",
    "id": 266,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 15,
      "diamond-pearl": 49,
      "platinum": 49,
      "omega-ruby-alpha-sapphire": 15,
      "legends-arceus": 19
    },
    "games": [
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "omega-ruby-alpha-sapphire",
      "legends-arceus"
    ]
  },
  {
    "name": "beautifly",
    "id": 267,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 16,
      "diamond-pearl": 50,
      "platinum": 50,
      "omega-ruby-alpha-sapphire": 16,
      "legends-arceus": 20
    },
    "games": [
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "omega-ruby-alpha-sapphire",
      "legends-arceus"
    ]
  },
  {
    "name": "cascoon",
    "id": 268,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 17,
      "diamond-pearl": 51,
      "platinum": 51,
      "omega-ruby-alpha-sapphire": 17,
      "legends-arceus": 21
    },
    "games": [
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "omega-ruby-alpha-sapphire",
      "legends-arceus"
    ]
  },
  {
    "name": "dustox",
    "id": 269,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 18,
      "diamond-pearl": 52,
      "platinum": 52,
      "omega-ruby-alpha-sapphire": 18,
      "legends-arceus": 22
    },
    "games": [
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "omega-ruby-alpha-sapphire",
      "legends-arceus"
    ]
  },
  {
    "name": "lotad",
    "id": 270,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 19,
      "x-y": 361,
      "omega-ruby-alpha-sapphire": 19,
      "sword-shield": 36,
      "kitakami": 104
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sword-shield",
      "kitakami"
    ]
  },
  {
    "name": "lombre",
    "id": 271,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 20,
      "x-y": 362,
      "omega-ruby-alpha-sapphire": 20,
      "sword-shield": 37,
      "kitakami": 105
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sword-shield",
      "kitakami"
    ]
  },
  {
    "name": "ludicolo",
    "id": 272,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 21,
      "x-y": 363,
      "omega-ruby-alpha-sapphire": 21,
      "sword-shield": 38,
      "kitakami": 106
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sword-shield",
      "kitakami"
    ]
  },
  {
    "name": "seedot",
    "id": 273,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 22,
      "omega-ruby-alpha-sapphire": 22,
      "sword-shield": 39,
      "kitakami": 54
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "sword-shield",
      "kitakami"
    ]
  },
  {
    "name": "nuzleaf",
    "id": 274,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 23,
      "omega-ruby-alpha-sapphire": 23,
      "sword-shield": 40,
      "kitakami": 55
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "sword-shield",
      "kitakami"
    ]
  },
  {
    "name": "shiftry",
    "id": 275,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 24,
      "omega-ruby-alpha-sapphire": 24,
      "sword-shield": 41,
      "kitakami": 56
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "sword-shield",
      "kitakami"
    ]
  },
  {
    "name": "taillow",
    "id": 276,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 25,
      "x-y": 172,
      "omega-ruby-alpha-sapphire": 25
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire"
    ]
  },
  {
    "name": "swellow",
    "id": 277,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 26,
      "x-y": 173,
      "omega-ruby-alpha-sapphire": 26
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire"
    ]
  },
  {
    "name": "wingull",
    "id": 278,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 27,
      "diamond-pearl": 119,
      "platinum": 119,
      "black-2-white-2": 213,
      "x-y": 170,
      "omega-ruby-alpha-sapphire": 27,
      "sun-moon": 40,
      "ultra-sun-ultra-moon": 47,
      "sword-shield": 62,
      "isle-of-armor": 48,
      "scarlet-violet": 132
    },
    "games": [
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet"
    ]
  },
  {
    "name": "pelipper",
    "id": 279,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 28,
      "diamond-pearl": 120,
      "platinum": 120,
      "black-2-white-2": 214,
      "x-y": 171,
      "omega-ruby-alpha-sapphire": 28,
      "sun-moon": 41,
      "ultra-sun-ultra-moon": 48,
      "sword-shield": 63,
      "isle-of-armor": 49,
      "scarlet-violet": 133
    },
    "games": [
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet"
    ]
  },
  {
    "name": "ralts",
    "id": 280,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 29,
      "platinum": 157,
      "x-y": 64,
      "omega-ruby-alpha-sapphire": 29,
      "sword-shield": 120,
      "isle-of-armor": 34,
      "legends-arceus": 101,
      "scarlet-violet": 62,
      "kitakami": 57,
      "legends-za": 87
    },
    "games": [
      "ruby-sapphire",
      "platinum",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sword-shield",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "kirlia",
    "id": 281,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 30,
      "platinum": 158,
      "x-y": 65,
      "omega-ruby-alpha-sapphire": 30,
      "sword-shield": 121,
      "isle-of-armor": 35,
      "legends-arceus": 102,
      "scarlet-violet": 63,
      "kitakami": 58,
      "legends-za": 88
    },
    "games": [
      "ruby-sapphire",
      "platinum",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sword-shield",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "gardevoir",
    "id": 282,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 31,
      "platinum": 159,
      "x-y": 66,
      "omega-ruby-alpha-sapphire": 31,
      "sword-shield": 122,
      "isle-of-armor": 36,
      "legends-arceus": 103,
      "scarlet-violet": 64,
      "kitakami": 59,
      "legends-za": 89
    },
    "games": [
      "ruby-sapphire",
      "platinum",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sword-shield",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "surskit",
    "id": 283,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 32,
      "x-y": 47,
      "omega-ruby-alpha-sapphire": 33,
      "sun-moon": 139,
      "ultra-sun-ultra-moon": 172,
      "scarlet-violet": 49,
      "kitakami": 149
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "masquerain",
    "id": 284,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 33,
      "x-y": 48,
      "omega-ruby-alpha-sapphire": 34,
      "sun-moon": 140,
      "ultra-sun-ultra-moon": 173,
      "scarlet-violet": 50,
      "kitakami": 150
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "shroomish",
    "id": 285,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 34,
      "omega-ruby-alpha-sapphire": 35,
      "scarlet-violet": 106
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "scarlet-violet"
    ]
  },
  {
    "name": "breloom",
    "id": 286,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 35,
      "omega-ruby-alpha-sapphire": 36,
      "scarlet-violet": 107
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "scarlet-violet"
    ]
  },
  {
    "name": "slakoth",
    "id": 287,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 36,
      "black-2-white-2": 277,
      "omega-ruby-alpha-sapphire": 37,
      "scarlet-violet": 78,
      "blueberry": 59
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "omega-ruby-alpha-sapphire",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "vigoroth",
    "id": 288,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 37,
      "black-2-white-2": 278,
      "omega-ruby-alpha-sapphire": 38,
      "scarlet-violet": 79,
      "blueberry": 60
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "omega-ruby-alpha-sapphire",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "slaking",
    "id": 289,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 38,
      "black-2-white-2": 279,
      "omega-ruby-alpha-sapphire": 39,
      "scarlet-violet": 80,
      "blueberry": 61
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "omega-ruby-alpha-sapphire",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "nincada",
    "id": 290,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 42,
      "x-y": 111,
      "omega-ruby-alpha-sapphire": 43,
      "sword-shield": 104
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sword-shield"
    ]
  },
  {
    "name": "ninjask",
    "id": 291,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 43,
      "x-y": 112,
      "omega-ruby-alpha-sapphire": 44,
      "sword-shield": 105
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sword-shield"
    ]
  },
  {
    "name": "shedinja",
    "id": 292,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 44,
      "x-y": 113,
      "omega-ruby-alpha-sapphire": 45,
      "sword-shield": 106
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sword-shield"
    ]
  },
  {
    "name": "whismur",
    "id": 293,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 45,
      "x-y": 140,
      "omega-ruby-alpha-sapphire": 46,
      "isle-of-armor": 148
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "isle-of-armor"
    ]
  },
  {
    "name": "loudred",
    "id": 294,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 46,
      "x-y": 141,
      "omega-ruby-alpha-sapphire": 47,
      "isle-of-armor": 149
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "isle-of-armor"
    ]
  },
  {
    "name": "exploud",
    "id": 295,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 47,
      "x-y": 142,
      "omega-ruby-alpha-sapphire": 48,
      "isle-of-armor": 150
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "isle-of-armor"
    ]
  },
  {
    "name": "makuhita",
    "id": 296,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 48,
      "x-y": 248,
      "omega-ruby-alpha-sapphire": 49,
      "sun-moon": 56,
      "ultra-sun-ultra-moon": 68,
      "scarlet-violet": 116
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "scarlet-violet"
    ]
  },
  {
    "name": "hariyama",
    "id": 297,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 49,
      "x-y": 249,
      "omega-ruby-alpha-sapphire": 50,
      "sun-moon": 57,
      "ultra-sun-ultra-moon": 69,
      "scarlet-violet": 117
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "scarlet-violet"
    ]
  },
  {
    "name": "azurill",
    "id": 298,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 54,
      "diamond-pearl": 124,
      "platinum": 124,
      "black-2-white-2": 31,
      "x-y": 41,
      "omega-ruby-alpha-sapphire": 55,
      "isle-of-armor": 139,
      "scarlet-violet": 46
    },
    "games": [
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "isle-of-armor",
      "scarlet-violet"
    ]
  },
  {
    "name": "nosepass",
    "id": 299,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 60,
      "platinum": 155,
      "black-2-white-2": 165,
      "x-y": 246,
      "omega-ruby-alpha-sapphire": 61,
      "sun-moon": 198,
      "ultra-sun-ultra-moon": 254,
      "legends-arceus": 190,
      "kitakami": 107
    },
    "games": [
      "ruby-sapphire",
      "platinum",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "legends-arceus",
      "kitakami"
    ]
  },
  {
    "name": "skitty",
    "id": 300,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 61,
      "black-2-white-2": 79,
      "x-y": 78,
      "omega-ruby-alpha-sapphire": 63
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire"
    ]
  },
  {
    "name": "delcatty",
    "id": 301,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 62,
      "black-2-white-2": 80,
      "x-y": 79,
      "omega-ruby-alpha-sapphire": 64
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire"
    ]
  },
  {
    "name": "sableye",
    "id": 302,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 68,
      "x-y": 276,
      "omega-ruby-alpha-sapphire": 70,
      "sun-moon": 102,
      "ultra-sun-ultra-moon": 124,
      "sword-shield": 294,
      "crown-tundra": 174,
      "scarlet-violet": 298,
      "legends-za": 132
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "mawile",
    "id": 303,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 69,
      "x-y": 216,
      "omega-ruby-alpha-sapphire": 71,
      "ultra-sun-ultra-moon": 125,
      "sword-shield": 295,
      "crown-tundra": 175,
      "legends-za": 133
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "legends-za"
    ]
  },
  {
    "name": "aron",
    "id": 304,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 70,
      "black-2-white-2": 167,
      "x-y": 405,
      "omega-ruby-alpha-sapphire": 72,
      "crown-tundra": 191,
      "legends-za": 199
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "crown-tundra",
      "legends-za"
    ]
  },
  {
    "name": "lairon",
    "id": 305,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 71,
      "black-2-white-2": 168,
      "x-y": 406,
      "omega-ruby-alpha-sapphire": 73,
      "crown-tundra": 192,
      "legends-za": 200
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "crown-tundra",
      "legends-za"
    ]
  },
  {
    "name": "aggron",
    "id": 306,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 72,
      "black-2-white-2": 169,
      "x-y": 407,
      "omega-ruby-alpha-sapphire": 74,
      "crown-tundra": 193,
      "legends-za": 201
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "crown-tundra",
      "legends-za"
    ]
  },
  {
    "name": "meditite",
    "id": 307,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 76,
      "diamond-pearl": 86,
      "platinum": 86,
      "x-y": 143,
      "omega-ruby-alpha-sapphire": 78,
      "scarlet-violet": 161,
      "legends-za": 83
    },
    "games": [
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "medicham",
    "id": 308,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 77,
      "diamond-pearl": 87,
      "platinum": 87,
      "x-y": 144,
      "omega-ruby-alpha-sapphire": 79,
      "scarlet-violet": 162,
      "legends-za": 84
    },
    "games": [
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "electrike",
    "id": 309,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 78,
      "x-y": 226,
      "omega-ruby-alpha-sapphire": 80,
      "ultra-sun-ultra-moon": 293,
      "sword-shield": 66,
      "legends-za": 85
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "legends-za"
    ]
  },
  {
    "name": "manectric",
    "id": 310,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 79,
      "x-y": 227,
      "omega-ruby-alpha-sapphire": 81,
      "ultra-sun-ultra-moon": 294,
      "sword-shield": 67,
      "legends-za": 86
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "legends-za"
    ]
  },
  {
    "name": "plusle",
    "id": 311,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 80,
      "x-y": 96,
      "omega-ruby-alpha-sapphire": 82,
      "blueberry": 119
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "blueberry"
    ]
  },
  {
    "name": "minun",
    "id": 312,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 81,
      "x-y": 97,
      "omega-ruby-alpha-sapphire": 83,
      "blueberry": 120
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "blueberry"
    ]
  },
  {
    "name": "volbeat",
    "id": 313,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 86,
      "x-y": 133,
      "omega-ruby-alpha-sapphire": 89,
      "kitakami": 9
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "kitakami"
    ]
  },
  {
    "name": "illumise",
    "id": 314,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 87,
      "x-y": 134,
      "omega-ruby-alpha-sapphire": 90,
      "kitakami": 10
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "kitakami"
    ]
  },
  {
    "name": "roselia",
    "id": 315,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 94,
      "diamond-pearl": 26,
      "platinum": 26,
      "black-2-white-2": 135,
      "x-y": 72,
      "omega-ruby-alpha-sapphire": 98,
      "sword-shield": 60,
      "legends-arceus": 90,
      "legends-za": 30
    },
    "games": [
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sword-shield",
      "legends-arceus",
      "legends-za"
    ]
  },
  {
    "name": "gulpin",
    "id": 316,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 95,
      "x-y": 98,
      "omega-ruby-alpha-sapphire": 100,
      "scarlet-violet": 139,
      "hyperspace": 92
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "swalot",
    "id": 317,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 96,
      "x-y": 99,
      "omega-ruby-alpha-sapphire": 101,
      "scarlet-violet": 140,
      "hyperspace": 93
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "carvanha",
    "id": 318,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 97,
      "x-y": 55,
      "omega-ruby-alpha-sapphire": 102,
      "sun-moon": 264,
      "ultra-sun-ultra-moon": 345,
      "isle-of-armor": 111,
      "legends-za": 140
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "legends-za"
    ]
  },
  {
    "name": "sharpedo",
    "id": 319,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 98,
      "x-y": 56,
      "omega-ruby-alpha-sapphire": 103,
      "sun-moon": 265,
      "ultra-sun-ultra-moon": 346,
      "isle-of-armor": 112,
      "legends-za": 141
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "legends-za"
    ]
  },
  {
    "name": "wailmer",
    "id": 320,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 99,
      "black-2-white-2": 241,
      "x-y": 180,
      "omega-ruby-alpha-sapphire": 104,
      "sun-moon": 266,
      "ultra-sun-ultra-moon": 351,
      "sword-shield": 356,
      "isle-of-armor": 190
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor"
    ]
  },
  {
    "name": "wailord",
    "id": 321,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 100,
      "black-2-white-2": 242,
      "x-y": 181,
      "omega-ruby-alpha-sapphire": 105,
      "sun-moon": 267,
      "ultra-sun-ultra-moon": 352,
      "sword-shield": 357,
      "isle-of-armor": 191
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor"
    ]
  },
  {
    "name": "numel",
    "id": 322,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 101,
      "black-2-white-2": 205,
      "omega-ruby-alpha-sapphire": 106,
      "scarlet-violet": 151,
      "blueberry": 125,
      "legends-za": 116
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "omega-ruby-alpha-sapphire",
      "scarlet-violet",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "camerupt",
    "id": 323,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 102,
      "black-2-white-2": 206,
      "omega-ruby-alpha-sapphire": 107,
      "scarlet-violet": 152,
      "blueberry": 126,
      "legends-za": 117
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "omega-ruby-alpha-sapphire",
      "scarlet-violet",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "torkoal",
    "id": 324,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 105,
      "x-y": 402,
      "omega-ruby-alpha-sapphire": 110,
      "sun-moon": 223,
      "ultra-sun-ultra-moon": 287,
      "sword-shield": 300,
      "isle-of-armor": 173,
      "scarlet-violet": 150,
      "blueberry": 86
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "spoink",
    "id": 325,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 110,
      "black-2-white-2": 207,
      "x-y": 160,
      "omega-ruby-alpha-sapphire": 115,
      "scarlet-violet": 111,
      "kitakami": 125,
      "hyperspace": 84
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "scarlet-violet",
      "kitakami",
      "hyperspace"
    ]
  },
  {
    "name": "grumpig",
    "id": 326,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 111,
      "black-2-white-2": 208,
      "x-y": 161,
      "omega-ruby-alpha-sapphire": 116,
      "scarlet-violet": 112,
      "kitakami": 126,
      "hyperspace": 85
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "scarlet-violet",
      "kitakami",
      "hyperspace"
    ]
  },
  {
    "name": "spinda",
    "id": 327,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 114,
      "x-y": 437,
      "omega-ruby-alpha-sapphire": 119,
      "sun-moon": 105,
      "ultra-sun-ultra-moon": 128
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "trapinch",
    "id": 328,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 116,
      "black-2-white-2": 122,
      "x-y": 309,
      "omega-ruby-alpha-sapphire": 121,
      "sun-moon": 235,
      "ultra-sun-ultra-moon": 304,
      "sword-shield": 321,
      "blueberry": 44
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "vibrava",
    "id": 329,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 117,
      "black-2-white-2": 123,
      "x-y": 310,
      "omega-ruby-alpha-sapphire": 122,
      "sun-moon": 236,
      "ultra-sun-ultra-moon": 305,
      "sword-shield": 322,
      "blueberry": 45
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "flygon",
    "id": 330,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 118,
      "black-2-white-2": 124,
      "x-y": 311,
      "omega-ruby-alpha-sapphire": 123,
      "sun-moon": 237,
      "ultra-sun-ultra-moon": 306,
      "sword-shield": 323,
      "blueberry": 46
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "cacnea",
    "id": 331,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 119,
      "omega-ruby-alpha-sapphire": 124,
      "scarlet-violet": 252
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "scarlet-violet"
    ]
  },
  {
    "name": "cacturne",
    "id": 332,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 120,
      "omega-ruby-alpha-sapphire": 125,
      "scarlet-violet": 253
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "scarlet-violet"
    ]
  },
  {
    "name": "swablu",
    "id": 333,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 121,
      "platinum": 171,
      "black-2-white-2": 247,
      "x-y": 445,
      "omega-ruby-alpha-sapphire": 126,
      "crown-tundra": 35,
      "scarlet-violet": 219,
      "blueberry": 114,
      "legends-za": 93
    },
    "games": [
      "ruby-sapphire",
      "platinum",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "crown-tundra",
      "scarlet-violet",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "altaria",
    "id": 334,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 122,
      "platinum": 172,
      "black-2-white-2": 248,
      "x-y": 446,
      "omega-ruby-alpha-sapphire": 127,
      "crown-tundra": 36,
      "scarlet-violet": 220,
      "blueberry": 115,
      "legends-za": 94
    },
    "games": [
      "ruby-sapphire",
      "platinum",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "crown-tundra",
      "scarlet-violet",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "zangoose",
    "id": 335,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 123,
      "black-2-white-2": 187,
      "x-y": 158,
      "omega-ruby-alpha-sapphire": 128,
      "scarlet-violet": 217,
      "blueberry": 70,
      "hyperspace": 106
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "scarlet-violet",
      "blueberry",
      "hyperspace"
    ]
  },
  {
    "name": "seviper",
    "id": 336,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 124,
      "black-2-white-2": 188,
      "x-y": 159,
      "omega-ruby-alpha-sapphire": 129,
      "scarlet-violet": 218,
      "blueberry": 71,
      "hyperspace": 107
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "scarlet-violet",
      "blueberry",
      "hyperspace"
    ]
  },
  {
    "name": "lunatone",
    "id": 337,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 125,
      "black-2-white-2": 215,
      "x-y": 165,
      "omega-ruby-alpha-sapphire": 130,
      "sword-shield": 362
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sword-shield"
    ]
  },
  {
    "name": "solrock",
    "id": 338,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 126,
      "black-2-white-2": 216,
      "x-y": 166,
      "omega-ruby-alpha-sapphire": 131,
      "sword-shield": 363
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sword-shield"
    ]
  },
  {
    "name": "barboach",
    "id": 339,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 127,
      "diamond-pearl": 80,
      "platinum": 80,
      "x-y": 346,
      "omega-ruby-alpha-sapphire": 132,
      "sun-moon": 93,
      "ultra-sun-ultra-moon": 113,
      "sword-shield": 228,
      "isle-of-armor": 137,
      "crown-tundra": 60,
      "legends-arceus": 97,
      "scarlet-violet": 168,
      "kitakami": 162
    },
    "games": [
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "whiscash",
    "id": 340,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 128,
      "diamond-pearl": 81,
      "platinum": 81,
      "x-y": 347,
      "omega-ruby-alpha-sapphire": 133,
      "sun-moon": 94,
      "ultra-sun-ultra-moon": 114,
      "sword-shield": 229,
      "isle-of-armor": 138,
      "crown-tundra": 61,
      "legends-arceus": 98,
      "scarlet-violet": 169,
      "kitakami": 163
    },
    "games": [
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "corphish",
    "id": 341,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 129,
      "black-2-white-2": 280,
      "x-y": 51,
      "omega-ruby-alpha-sapphire": 134,
      "ultra-sun-ultra-moon": 357,
      "sword-shield": 102,
      "isle-of-armor": 91,
      "kitakami": 11
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "kitakami"
    ]
  },
  {
    "name": "crawdaunt",
    "id": 342,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 130,
      "black-2-white-2": 281,
      "x-y": 52,
      "omega-ruby-alpha-sapphire": 135,
      "ultra-sun-ultra-moon": 358,
      "sword-shield": 103,
      "isle-of-armor": 92,
      "kitakami": 12
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "kitakami"
    ]
  },
  {
    "name": "baltoy",
    "id": 343,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 131,
      "black-2-white-2": 170,
      "omega-ruby-alpha-sapphire": 136,
      "ultra-sun-ultra-moon": 310,
      "sword-shield": 82,
      "crown-tundra": 151
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "omega-ruby-alpha-sapphire",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "claydol",
    "id": 344,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 132,
      "black-2-white-2": 171,
      "omega-ruby-alpha-sapphire": 137,
      "ultra-sun-ultra-moon": 311,
      "sword-shield": 83,
      "crown-tundra": 152
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "omega-ruby-alpha-sapphire",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "lileep",
    "id": 345,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 133,
      "omega-ruby-alpha-sapphire": 138,
      "ultra-sun-ultra-moon": 231,
      "crown-tundra": 183
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "ultra-sun-ultra-moon",
      "crown-tundra"
    ]
  },
  {
    "name": "cradily",
    "id": 346,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 134,
      "omega-ruby-alpha-sapphire": 139,
      "ultra-sun-ultra-moon": 232,
      "crown-tundra": 184
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "ultra-sun-ultra-moon",
      "crown-tundra"
    ]
  },
  {
    "name": "anorith",
    "id": 347,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 135,
      "omega-ruby-alpha-sapphire": 140,
      "ultra-sun-ultra-moon": 233,
      "crown-tundra": 185
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "ultra-sun-ultra-moon",
      "crown-tundra"
    ]
  },
  {
    "name": "armaldo",
    "id": 348,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 136,
      "omega-ruby-alpha-sapphire": 141,
      "ultra-sun-ultra-moon": 234,
      "crown-tundra": 186
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "ultra-sun-ultra-moon",
      "crown-tundra"
    ]
  },
  {
    "name": "feebas",
    "id": 349,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 140,
      "diamond-pearl": 138,
      "platinum": 138,
      "omega-ruby-alpha-sapphire": 145,
      "sun-moon": 155,
      "ultra-sun-ultra-moon": 189,
      "sword-shield": 152,
      "crown-tundra": 188,
      "kitakami": 158,
      "hyperspace": 48
    },
    "games": [
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "kitakami",
      "hyperspace"
    ]
  },
  {
    "name": "milotic",
    "id": 350,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 141,
      "diamond-pearl": 139,
      "platinum": 139,
      "omega-ruby-alpha-sapphire": 146,
      "sun-moon": 156,
      "ultra-sun-ultra-moon": 190,
      "sword-shield": 153,
      "crown-tundra": 189,
      "kitakami": 159,
      "hyperspace": 49
    },
    "games": [
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "kitakami",
      "hyperspace"
    ]
  },
  {
    "name": "castform",
    "id": 351,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 142,
      "black-2-white-2": 164,
      "omega-ruby-alpha-sapphire": 147,
      "sun-moon": 181,
      "ultra-sun-ultra-moon": 220
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "kecleon",
    "id": 352,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 145,
      "x-y": 116,
      "omega-ruby-alpha-sapphire": 150,
      "ultra-sun-ultra-moon": 214,
      "hyperspace": 27
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "ultra-sun-ultra-moon",
      "hyperspace"
    ]
  },
  {
    "name": "shuppet",
    "id": 353,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 146,
      "black-2-white-2": 211,
      "x-y": 428,
      "omega-ruby-alpha-sapphire": 151,
      "ultra-sun-ultra-moon": 316,
      "scarlet-violet": 299,
      "legends-za": 111
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "ultra-sun-ultra-moon",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "banette",
    "id": 354,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 147,
      "black-2-white-2": 212,
      "x-y": 429,
      "omega-ruby-alpha-sapphire": 152,
      "ultra-sun-ultra-moon": 317,
      "scarlet-violet": 300,
      "legends-za": 112
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "ultra-sun-ultra-moon",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "duskull",
    "id": 355,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 148,
      "platinum": 189,
      "omega-ruby-alpha-sapphire": 153,
      "sword-shield": 135,
      "legends-arceus": 158,
      "kitakami": 139
    },
    "games": [
      "ruby-sapphire",
      "platinum",
      "omega-ruby-alpha-sapphire",
      "sword-shield",
      "legends-arceus",
      "kitakami"
    ]
  },
  {
    "name": "dusclops",
    "id": 356,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 149,
      "platinum": 190,
      "omega-ruby-alpha-sapphire": 154,
      "sword-shield": 136,
      "legends-arceus": 159,
      "kitakami": 140
    },
    "games": [
      "ruby-sapphire",
      "platinum",
      "omega-ruby-alpha-sapphire",
      "sword-shield",
      "legends-arceus",
      "kitakami"
    ]
  },
  {
    "name": "tropius",
    "id": 357,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 150,
      "platinum": 185,
      "black-2-white-2": 289,
      "omega-ruby-alpha-sapphire": 156,
      "ultra-sun-ultra-moon": 354,
      "scarlet-violet": 246
    },
    "games": [
      "ruby-sapphire",
      "platinum",
      "black-2-white-2",
      "omega-ruby-alpha-sapphire",
      "ultra-sun-ultra-moon",
      "scarlet-violet"
    ]
  },
  {
    "name": "chimecho",
    "id": 358,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 151,
      "diamond-pearl": 83,
      "platinum": 83,
      "x-y": 265,
      "omega-ruby-alpha-sapphire": 158,
      "legends-arceus": 196,
      "kitakami": 143,
      "hyperspace": 51
    },
    "games": [
      "ruby-sapphire",
      "diamond-pearl",
      "platinum",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "legends-arceus",
      "kitakami",
      "hyperspace"
    ]
  },
  {
    "name": "absol",
    "id": 359,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 152,
      "platinum": 209,
      "black-2-white-2": 217,
      "x-y": 162,
      "omega-ruby-alpha-sapphire": 159,
      "sun-moon": 245,
      "ultra-sun-ultra-moon": 322,
      "crown-tundra": 107,
      "legends-za": 134
    },
    "games": [
      "ruby-sapphire",
      "platinum",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "crown-tundra",
      "legends-za"
    ]
  },
  {
    "name": "wynaut",
    "id": 360,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 160,
      "x-y": 271,
      "omega-ruby-alpha-sapphire": 167,
      "sword-shield": 216
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sword-shield"
    ]
  },
  {
    "name": "snorunt",
    "id": 361,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 171,
      "platinum": 206,
      "omega-ruby-alpha-sapphire": 179,
      "sun-moon": 246,
      "ultra-sun-ultra-moon": 323,
      "sword-shield": 79,
      "crown-tundra": 25,
      "legends-arceus": 205,
      "scarlet-violet": 358,
      "kitakami": 172,
      "legends-za": 169
    },
    "games": [
      "ruby-sapphire",
      "platinum",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "glalie",
    "id": 362,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 172,
      "platinum": 207,
      "omega-ruby-alpha-sapphire": 180,
      "sun-moon": 247,
      "ultra-sun-ultra-moon": 324,
      "sword-shield": 80,
      "crown-tundra": 26,
      "legends-arceus": 206,
      "scarlet-violet": 359,
      "kitakami": 173,
      "legends-za": 170
    },
    "games": [
      "ruby-sapphire",
      "platinum",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "spheal",
    "id": 363,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 173,
      "black-2-white-2": 244,
      "omega-ruby-alpha-sapphire": 182,
      "crown-tundra": 159,
      "legends-arceus": 143
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "omega-ruby-alpha-sapphire",
      "crown-tundra",
      "legends-arceus"
    ]
  },
  {
    "name": "sealeo",
    "id": 364,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 174,
      "black-2-white-2": 245,
      "omega-ruby-alpha-sapphire": 183,
      "crown-tundra": 160,
      "legends-arceus": 144
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "omega-ruby-alpha-sapphire",
      "crown-tundra",
      "legends-arceus"
    ]
  },
  {
    "name": "walrein",
    "id": 365,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 175,
      "black-2-white-2": 246,
      "omega-ruby-alpha-sapphire": 184,
      "crown-tundra": 161,
      "legends-arceus": 145
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "omega-ruby-alpha-sapphire",
      "crown-tundra",
      "legends-arceus"
    ]
  },
  {
    "name": "clamperl",
    "id": 366,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 176,
      "x-y": 294,
      "omega-ruby-alpha-sapphire": 185,
      "ultra-sun-ultra-moon": 140
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "huntail",
    "id": 367,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 177,
      "x-y": 295,
      "omega-ruby-alpha-sapphire": 186,
      "ultra-sun-ultra-moon": 141
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "gorebyss",
    "id": 368,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 178,
      "x-y": 296,
      "omega-ruby-alpha-sapphire": 187,
      "ultra-sun-ultra-moon": 142
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "relicanth",
    "id": 369,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 179,
      "x-y": 195,
      "omega-ruby-alpha-sapphire": 188,
      "sun-moon": 262,
      "ultra-sun-ultra-moon": 343,
      "crown-tundra": 187
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "crown-tundra"
    ]
  },
  {
    "name": "luvdisc",
    "id": 370,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 183,
      "x-y": 182,
      "omega-ruby-alpha-sapphire": 192,
      "sun-moon": 111,
      "ultra-sun-ultra-moon": 134,
      "scarlet-violet": 333,
      "blueberry": 82
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "bagon",
    "id": 371,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 187,
      "x-y": 167,
      "omega-ruby-alpha-sapphire": 196,
      "sun-moon": 117,
      "ultra-sun-ultra-moon": 147,
      "crown-tundra": 113,
      "scarlet-violet": 276,
      "legends-za": 220
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "crown-tundra",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "shelgon",
    "id": 372,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 188,
      "x-y": 168,
      "omega-ruby-alpha-sapphire": 197,
      "sun-moon": 118,
      "ultra-sun-ultra-moon": 148,
      "crown-tundra": 114,
      "scarlet-violet": 277,
      "legends-za": 221
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "crown-tundra",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "salamence",
    "id": 373,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 189,
      "x-y": 169,
      "omega-ruby-alpha-sapphire": 198,
      "sun-moon": 119,
      "ultra-sun-ultra-moon": 149,
      "crown-tundra": 115,
      "scarlet-violet": 278,
      "legends-za": 222
    },
    "games": [
      "ruby-sapphire",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "crown-tundra",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "beldum",
    "id": 374,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 190,
      "black-2-white-2": 263,
      "omega-ruby-alpha-sapphire": 199,
      "sun-moon": 214,
      "ultra-sun-ultra-moon": 278,
      "crown-tundra": 129,
      "blueberry": 137,
      "legends-za": 225
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "crown-tundra",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "metang",
    "id": 375,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 191,
      "black-2-white-2": 264,
      "omega-ruby-alpha-sapphire": 200,
      "sun-moon": 215,
      "ultra-sun-ultra-moon": 279,
      "crown-tundra": 130,
      "blueberry": 138,
      "legends-za": 226
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "crown-tundra",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "metagross",
    "id": 376,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 192,
      "black-2-white-2": 265,
      "omega-ruby-alpha-sapphire": 201,
      "sun-moon": 216,
      "ultra-sun-ultra-moon": 280,
      "crown-tundra": 131,
      "blueberry": 139,
      "legends-za": 227
    },
    "games": [
      "ruby-sapphire",
      "black-2-white-2",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "crown-tundra",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "regirock",
    "id": 377,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 193,
      "omega-ruby-alpha-sapphire": 202,
      "crown-tundra": 197
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "crown-tundra"
    ]
  },
  {
    "name": "regice",
    "id": 378,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 194,
      "omega-ruby-alpha-sapphire": 203,
      "crown-tundra": 198
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "crown-tundra"
    ]
  },
  {
    "name": "registeel",
    "id": 379,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 195,
      "omega-ruby-alpha-sapphire": 204,
      "crown-tundra": 199
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "crown-tundra"
    ]
  },
  {
    "name": "latias",
    "id": 380,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 196,
      "omega-ruby-alpha-sapphire": 205,
      "hyperspace": 126
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "hyperspace"
    ]
  },
  {
    "name": "latios",
    "id": 381,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 197,
      "omega-ruby-alpha-sapphire": 206,
      "hyperspace": 127
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "hyperspace"
    ]
  },
  {
    "name": "kyogre",
    "id": 382,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 198,
      "omega-ruby-alpha-sapphire": 207,
      "hyperspace": 128
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "hyperspace"
    ]
  },
  {
    "name": "groudon",
    "id": 383,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 199,
      "omega-ruby-alpha-sapphire": 208,
      "hyperspace": 129
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "hyperspace"
    ]
  },
  {
    "name": "rayquaza",
    "id": 384,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 200,
      "omega-ruby-alpha-sapphire": 209,
      "hyperspace": 130
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire",
      "hyperspace"
    ]
  },
  {
    "name": "jirachi",
    "id": 385,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 201,
      "omega-ruby-alpha-sapphire": 210
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire"
    ]
  },
  {
    "name": "deoxys",
    "id": 386,
    "gen": "generation-iii",
    "regions": {
      "ruby-sapphire": 202,
      "omega-ruby-alpha-sapphire": 211
    },
    "games": [
      "ruby-sapphire",
      "omega-ruby-alpha-sapphire"
    ]
  },
  {
    "name": "turtwig",
    "id": 387,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 1,
      "platinum": 1,
      "legends-arceus": 130,
      "blueberry": 191
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "grotle",
    "id": 388,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 2,
      "platinum": 2,
      "legends-arceus": 131,
      "blueberry": 192
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "torterra",
    "id": 389,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 3,
      "platinum": 3,
      "legends-arceus": 132,
      "blueberry": 193
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "chimchar",
    "id": 390,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 4,
      "platinum": 4,
      "legends-arceus": 61,
      "blueberry": 194
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "monferno",
    "id": 391,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 5,
      "platinum": 5,
      "legends-arceus": 62,
      "blueberry": 195
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "infernape",
    "id": 392,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 6,
      "platinum": 6,
      "legends-arceus": 63,
      "blueberry": 196
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "piplup",
    "id": 393,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 7,
      "platinum": 7,
      "legends-arceus": 161,
      "blueberry": 197
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "prinplup",
    "id": 394,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 8,
      "platinum": 8,
      "legends-arceus": 162,
      "blueberry": 198
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "empoleon",
    "id": 395,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 9,
      "platinum": 9,
      "legends-arceus": 163,
      "blueberry": 199
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "starly",
    "id": 396,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 10,
      "platinum": 10,
      "x-y": 252,
      "legends-arceus": 12,
      "scarlet-violet": 97,
      "kitakami": 28,
      "hyperspace": 81
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "x-y",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "hyperspace"
    ]
  },
  {
    "name": "staravia",
    "id": 397,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 11,
      "platinum": 11,
      "x-y": 253,
      "legends-arceus": 13,
      "scarlet-violet": 98,
      "kitakami": 29,
      "hyperspace": 82
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "x-y",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "hyperspace"
    ]
  },
  {
    "name": "staraptor",
    "id": 398,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 12,
      "platinum": 12,
      "x-y": 254,
      "legends-arceus": 14,
      "scarlet-violet": 99,
      "kitakami": 30,
      "hyperspace": 83
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "x-y",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "hyperspace"
    ]
  },
  {
    "name": "bidoof",
    "id": 399,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 13,
      "platinum": 13,
      "x-y": 38,
      "legends-arceus": 10
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "x-y",
      "legends-arceus"
    ]
  },
  {
    "name": "bibarel",
    "id": 400,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 14,
      "platinum": 14,
      "x-y": 39,
      "legends-arceus": 11
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "x-y",
      "legends-arceus"
    ]
  },
  {
    "name": "kricketot",
    "id": 401,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 15,
      "platinum": 15,
      "legends-arceus": 39,
      "scarlet-violet": 33,
      "kitakami": 61
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "kricketune",
    "id": 402,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 16,
      "platinum": 16,
      "legends-arceus": 40,
      "scarlet-violet": 34,
      "kitakami": 62
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "shinx",
    "id": 403,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 17,
      "platinum": 17,
      "isle-of-armor": 25,
      "legends-arceus": 15,
      "scarlet-violet": 94,
      "kitakami": 109
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "luxio",
    "id": 404,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 18,
      "platinum": 18,
      "isle-of-armor": 26,
      "legends-arceus": 16,
      "scarlet-violet": 95,
      "kitakami": 110
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "luxray",
    "id": 405,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 19,
      "platinum": 19,
      "isle-of-armor": 27,
      "legends-arceus": 17,
      "scarlet-violet": 96,
      "kitakami": 111
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "budew",
    "id": 406,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 25,
      "platinum": 25,
      "black-2-white-2": 134,
      "x-y": 71,
      "omega-ruby-alpha-sapphire": 97,
      "sword-shield": 59,
      "legends-arceus": 89,
      "legends-za": 29
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sword-shield",
      "legends-arceus",
      "legends-za"
    ]
  },
  {
    "name": "roserade",
    "id": 407,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 27,
      "platinum": 27,
      "black-2-white-2": 136,
      "x-y": 73,
      "omega-ruby-alpha-sapphire": 99,
      "sword-shield": 61,
      "legends-arceus": 91,
      "legends-za": 31
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sword-shield",
      "legends-arceus",
      "legends-za"
    ]
  },
  {
    "name": "cranidos",
    "id": 408,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 36,
      "platinum": 36,
      "sun-moon": 188,
      "ultra-sun-ultra-moon": 235,
      "legends-arceus": 208,
      "blueberry": 107
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "rampardos",
    "id": 409,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 37,
      "platinum": 37,
      "sun-moon": 189,
      "ultra-sun-ultra-moon": 236,
      "legends-arceus": 209,
      "blueberry": 108
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "shieldon",
    "id": 410,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 38,
      "platinum": 38,
      "sun-moon": 190,
      "ultra-sun-ultra-moon": 237,
      "legends-arceus": 210,
      "blueberry": 109
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "bastiodon",
    "id": 411,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 39,
      "platinum": 39,
      "sun-moon": 191,
      "ultra-sun-ultra-moon": 238,
      "legends-arceus": 211,
      "blueberry": 110
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "burmy",
    "id": 412,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 45,
      "platinum": 45,
      "x-y": 44,
      "legends-arceus": 43
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "x-y",
      "legends-arceus"
    ]
  },
  {
    "name": "wormadam",
    "id": 413,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 46,
      "platinum": 46,
      "x-y": 45,
      "legends-arceus": 44
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "x-y",
      "legends-arceus"
    ]
  },
  {
    "name": "mothim",
    "id": 414,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 47,
      "platinum": 47,
      "x-y": 46,
      "legends-arceus": 45
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "x-y",
      "legends-arceus"
    ]
  },
  {
    "name": "combee",
    "id": 415,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 53,
      "platinum": 53,
      "black-2-white-2": 143,
      "x-y": 76,
      "sword-shield": 116,
      "isle-of-armor": 203,
      "legends-arceus": 70,
      "scarlet-violet": 38
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet"
    ]
  },
  {
    "name": "vespiquen",
    "id": 416,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 54,
      "platinum": 54,
      "black-2-white-2": 144,
      "x-y": 77,
      "sword-shield": 117,
      "isle-of-armor": 204,
      "legends-arceus": 71,
      "scarlet-violet": 39
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet"
    ]
  },
  {
    "name": "pachirisu",
    "id": 417,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 55,
      "platinum": 55,
      "x-y": 285,
      "legends-arceus": 109,
      "scarlet-violet": 201,
      "kitakami": 63
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "x-y",
      "legends-arceus",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "buizel",
    "id": 418,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 56,
      "platinum": 56,
      "black-2-white-2": 150,
      "x-y": 364,
      "legends-arceus": 41,
      "scarlet-violet": 51
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "x-y",
      "legends-arceus",
      "scarlet-violet"
    ]
  },
  {
    "name": "floatzel",
    "id": 419,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 57,
      "platinum": 57,
      "black-2-white-2": 151,
      "x-y": 365,
      "legends-arceus": 42,
      "scarlet-violet": 52
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "x-y",
      "legends-arceus",
      "scarlet-violet"
    ]
  },
  {
    "name": "cherubi",
    "id": 420,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 58,
      "platinum": 58,
      "sword-shield": 128,
      "legends-arceus": 66
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "sword-shield",
      "legends-arceus"
    ]
  },
  {
    "name": "cherrim",
    "id": 421,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 59,
      "platinum": 59,
      "sword-shield": 129,
      "legends-arceus": 67
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "sword-shield",
      "legends-arceus"
    ]
  },
  {
    "name": "shellos",
    "id": 422,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 60,
      "platinum": 60,
      "sun-moon": 260,
      "ultra-sun-ultra-moon": 341,
      "sword-shield": 230,
      "legends-arceus": 82,
      "scarlet-violet": 328
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "legends-arceus",
      "scarlet-violet"
    ]
  },
  {
    "name": "gastrodon",
    "id": 423,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 61,
      "platinum": 61,
      "sun-moon": 261,
      "ultra-sun-ultra-moon": 342,
      "sword-shield": 231,
      "legends-arceus": 83,
      "scarlet-violet": 329
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "legends-arceus",
      "scarlet-violet"
    ]
  },
  {
    "name": "ambipom",
    "id": 424,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 64,
      "platinum": 64,
      "heartgold-soulsilver": 124,
      "ultra-sun-ultra-moon": 369,
      "legends-arceus": 79,
      "kitakami": 48
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "heartgold-soulsilver",
      "ultra-sun-ultra-moon",
      "legends-arceus",
      "kitakami"
    ]
  },
  {
    "name": "drifloon",
    "id": 425,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 65,
      "platinum": 65,
      "black-2-white-2": 209,
      "x-y": 154,
      "sun-moon": 64,
      "ultra-sun-ultra-moon": 76,
      "sword-shield": 124,
      "isle-of-armor": 135,
      "legends-arceus": 37,
      "scarlet-violet": 143
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet"
    ]
  },
  {
    "name": "drifblim",
    "id": 426,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 66,
      "platinum": 66,
      "black-2-white-2": 210,
      "x-y": 155,
      "sun-moon": 65,
      "ultra-sun-ultra-moon": 77,
      "sword-shield": 125,
      "isle-of-armor": 136,
      "legends-arceus": 38,
      "scarlet-violet": 144
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet"
    ]
  },
  {
    "name": "buneary",
    "id": 427,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 67,
      "platinum": 67,
      "black-2-white-2": 81,
      "ultra-sun-ultra-moon": 24,
      "isle-of-armor": 4,
      "legends-arceus": 64,
      "legends-za": 109
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "legends-arceus",
      "legends-za"
    ]
  },
  {
    "name": "lopunny",
    "id": 428,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 68,
      "platinum": 68,
      "black-2-white-2": 82,
      "ultra-sun-ultra-moon": 25,
      "isle-of-armor": 5,
      "legends-arceus": 65,
      "legends-za": 110
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "legends-arceus",
      "legends-za"
    ]
  },
  {
    "name": "mismagius",
    "id": 429,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 73,
      "platinum": 73,
      "sun-moon": 67,
      "ultra-sun-ultra-moon": 373,
      "legends-arceus": 198,
      "scarlet-violet": 115
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "legends-arceus",
      "scarlet-violet"
    ]
  },
  {
    "name": "honchkrow",
    "id": 430,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 75,
      "platinum": 75,
      "x-y": 358,
      "sun-moon": 278,
      "ultra-sun-ultra-moon": 79,
      "legends-arceus": 141,
      "scarlet-violet": 233
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "legends-arceus",
      "scarlet-violet"
    ]
  },
  {
    "name": "glameow",
    "id": 431,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 76,
      "platinum": 76,
      "legends-arceus": 152
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus"
    ]
  },
  {
    "name": "purugly",
    "id": 432,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 77,
      "platinum": 77,
      "legends-arceus": 153
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus"
    ]
  },
  {
    "name": "chingling",
    "id": 433,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 82,
      "platinum": 82,
      "x-y": 264,
      "omega-ruby-alpha-sapphire": 157,
      "legends-arceus": 195,
      "kitakami": 142,
      "hyperspace": 50
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "legends-arceus",
      "kitakami",
      "hyperspace"
    ]
  },
  {
    "name": "stunky",
    "id": 434,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 84,
      "platinum": 84,
      "x-y": 255,
      "sword-shield": 130,
      "legends-arceus": 110,
      "scarlet-violet": 226
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "x-y",
      "sword-shield",
      "legends-arceus",
      "scarlet-violet"
    ]
  },
  {
    "name": "skuntank",
    "id": 435,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 85,
      "platinum": 85,
      "x-y": 256,
      "sword-shield": 131,
      "legends-arceus": 111,
      "scarlet-violet": 227
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "x-y",
      "sword-shield",
      "legends-arceus",
      "scarlet-violet"
    ]
  },
  {
    "name": "bronzor",
    "id": 436,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 88,
      "platinum": 88,
      "black-2-white-2": 251,
      "sword-shield": 118,
      "crown-tundra": 87,
      "legends-arceus": 180,
      "scarlet-violet": 153,
      "kitakami": 154
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "bronzong",
    "id": 437,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 89,
      "platinum": 89,
      "black-2-white-2": 252,
      "sword-shield": 119,
      "crown-tundra": 88,
      "legends-arceus": 181,
      "scarlet-violet": 154,
      "kitakami": 155
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "bonsly",
    "id": 438,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 92,
      "platinum": 92,
      "x-y": 435,
      "sun-moon": 30,
      "ultra-sun-ultra-moon": 37,
      "sword-shield": 252,
      "legends-arceus": 123,
      "scarlet-violet": 87,
      "kitakami": 83
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "legends-arceus",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "mime-jr",
    "id": 439,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 94,
      "platinum": 94,
      "x-y": 266,
      "ultra-sun-ultra-moon": 59,
      "sword-shield": 364,
      "crown-tundra": 10,
      "legends-arceus": 76,
      "hyperspace": 108
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "x-y",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "hyperspace"
    ]
  },
  {
    "name": "happiny",
    "id": 440,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 96,
      "platinum": 96,
      "sun-moon": 32,
      "ultra-sun-ultra-moon": 39,
      "isle-of-armor": 6,
      "legends-arceus": 86,
      "scarlet-violet": 43,
      "blueberry": 16
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "chatot",
    "id": 441,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 102,
      "platinum": 102,
      "x-y": 291,
      "legends-arceus": 157
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "x-y",
      "legends-arceus"
    ]
  },
  {
    "name": "spiritomb",
    "id": 442,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 108,
      "platinum": 108,
      "crown-tundra": 47,
      "legends-arceus": 139,
      "scarlet-violet": 303
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet"
    ]
  },
  {
    "name": "gible",
    "id": 443,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 109,
      "platinum": 109,
      "x-y": 312,
      "sun-moon": 238,
      "ultra-sun-ultra-moon": 307,
      "crown-tundra": 116,
      "legends-arceus": 187,
      "scarlet-violet": 126,
      "kitakami": 164,
      "legends-za": 128
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "gabite",
    "id": 444,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 110,
      "platinum": 110,
      "x-y": 313,
      "sun-moon": 239,
      "ultra-sun-ultra-moon": 308,
      "crown-tundra": 117,
      "legends-arceus": 188,
      "scarlet-violet": 127,
      "kitakami": 165,
      "legends-za": 129
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "garchomp",
    "id": 445,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 111,
      "platinum": 111,
      "x-y": 314,
      "sun-moon": 240,
      "ultra-sun-ultra-moon": 309,
      "crown-tundra": 118,
      "legends-arceus": 189,
      "scarlet-violet": 128,
      "kitakami": 166,
      "legends-za": 130
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "munchlax",
    "id": 446,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 112,
      "platinum": 112,
      "x-y": 138,
      "sun-moon": 35,
      "ultra-sun-ultra-moon": 42,
      "sword-shield": 260,
      "crown-tundra": 172,
      "legends-arceus": 51,
      "kitakami": 102
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "kitakami"
    ]
  },
  {
    "name": "riolu",
    "id": 447,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 115,
      "platinum": 115,
      "black-2-white-2": 34,
      "x-y": 62,
      "sun-moon": 279,
      "ultra-sun-ultra-moon": 377,
      "sword-shield": 298,
      "crown-tundra": 134,
      "legends-arceus": 223,
      "scarlet-violet": 163,
      "kitakami": 64,
      "legends-za": 135
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "lucario",
    "id": 448,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 116,
      "platinum": 116,
      "black-2-white-2": 35,
      "x-y": 63,
      "sun-moon": 280,
      "ultra-sun-ultra-moon": 378,
      "sword-shield": 299,
      "crown-tundra": 135,
      "legends-arceus": 224,
      "scarlet-violet": 164,
      "kitakami": 65,
      "legends-za": 136
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "hippopotas",
    "id": 449,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 122,
      "platinum": 122,
      "x-y": 201,
      "sword-shield": 314,
      "legends-arceus": 107,
      "scarlet-violet": 265,
      "legends-za": 118
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "x-y",
      "sword-shield",
      "legends-arceus",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "hippowdon",
    "id": 450,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 123,
      "platinum": 123,
      "x-y": 202,
      "sword-shield": 315,
      "legends-arceus": 108,
      "scarlet-violet": 266,
      "legends-za": 119
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "x-y",
      "sword-shield",
      "legends-arceus",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "skorupi",
    "id": 451,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 127,
      "platinum": 127,
      "black-2-white-2": 202,
      "x-y": 321,
      "sword-shield": 285,
      "isle-of-armor": 50,
      "legends-arceus": 148
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "isle-of-armor",
      "legends-arceus"
    ]
  },
  {
    "name": "drapion",
    "id": 452,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 128,
      "platinum": 128,
      "black-2-white-2": 203,
      "x-y": 322,
      "sword-shield": 286,
      "isle-of-armor": 51,
      "legends-arceus": 149
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "isle-of-armor",
      "legends-arceus"
    ]
  },
  {
    "name": "croagunk",
    "id": 453,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 129,
      "platinum": 129,
      "black-2-white-2": 291,
      "x-y": 125,
      "sword-shield": 222,
      "isle-of-armor": 82,
      "legends-arceus": 99,
      "scarlet-violet": 175
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet"
    ]
  },
  {
    "name": "toxicroak",
    "id": 454,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 130,
      "platinum": 130,
      "black-2-white-2": 292,
      "x-y": 126,
      "sword-shield": 223,
      "isle-of-armor": 83,
      "legends-arceus": 100,
      "scarlet-violet": 176
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet"
    ]
  },
  {
    "name": "carnivine",
    "id": 455,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 131,
      "platinum": 131,
      "black-2-white-2": 290,
      "x-y": 335,
      "legends-arceus": 92
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "x-y",
      "legends-arceus"
    ]
  },
  {
    "name": "finneon",
    "id": 456,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 134,
      "platinum": 134,
      "sun-moon": 108,
      "ultra-sun-ultra-moon": 131,
      "legends-arceus": 172,
      "scarlet-violet": 334,
      "blueberry": 83
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "legends-arceus",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "lumineon",
    "id": 457,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 135,
      "platinum": 135,
      "sun-moon": 109,
      "ultra-sun-ultra-moon": 132,
      "legends-arceus": 173,
      "scarlet-violet": 335,
      "blueberry": 84
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "legends-arceus",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "mantyke",
    "id": 458,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 140,
      "platinum": 140,
      "black-2-white-2": 234,
      "x-y": 292,
      "ultra-sun-ultra-moon": 145,
      "sword-shield": 354,
      "isle-of-armor": 46,
      "legends-arceus": 164
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "legends-arceus"
    ]
  },
  {
    "name": "snover",
    "id": 459,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 142,
      "platinum": 142,
      "x-y": 394,
      "sword-shield": 96,
      "crown-tundra": 31,
      "legends-arceus": 217,
      "scarlet-violet": 353,
      "blueberry": 159,
      "legends-za": 172
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "x-y",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "abomasnow",
    "id": 460,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 143,
      "platinum": 143,
      "x-y": 395,
      "sword-shield": 97,
      "crown-tundra": 32,
      "legends-arceus": 218,
      "scarlet-violet": 354,
      "blueberry": 160,
      "legends-za": 173
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "x-y",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "weavile",
    "id": 461,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 145,
      "platinum": 145,
      "black-2-white-2": 254,
      "x-y": 398,
      "sun-moon": 250,
      "ultra-sun-ultra-moon": 327,
      "sword-shield": 293,
      "crown-tundra": 29,
      "legends-arceus": 204,
      "scarlet-violet": 231,
      "kitakami": 171
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "magnezone",
    "id": 462,
    "gen": "generation-iv",
    "regions": {
      "platinum": 180,
      "black-2-white-2": 51,
      "x-y": 377,
      "omega-ruby-alpha-sapphire": 86,
      "sun-moon": 49,
      "ultra-sun-ultra-moon": 56,
      "isle-of-armor": 107,
      "legends-arceus": 179,
      "scarlet-violet": 211,
      "blueberry": 118
    },
    "games": [
      "platinum",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "lickilicky",
    "id": 463,
    "gen": "generation-iv",
    "regions": {
      "platinum": 162,
      "heartgold-soulsilver": 181,
      "black-2-white-2": 286,
      "x-y": 441,
      "ultra-sun-ultra-moon": 376,
      "isle-of-armor": 55,
      "legends-arceus": 126
    },
    "games": [
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "legends-arceus"
    ]
  },
  {
    "name": "rhyperior",
    "id": 464,
    "gen": "generation-iv",
    "regions": {
      "platinum": 188,
      "x-y": 205,
      "omega-ruby-alpha-sapphire": 178,
      "sword-shield": 266,
      "isle-of-armor": 185,
      "legends-arceus": 122,
      "blueberry": 7
    },
    "games": [
      "platinum",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sword-shield",
      "isle-of-armor",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "tangrowth",
    "id": 465,
    "gen": "generation-iv",
    "regions": {
      "platinum": 182,
      "heartgold-soulsilver": 183,
      "black-2-white-2": 219,
      "isle-of-armor": 81,
      "legends-arceus": 96
    },
    "games": [
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "isle-of-armor",
      "legends-arceus"
    ]
  },
  {
    "name": "electivire",
    "id": 466,
    "gen": "generation-iv",
    "regions": {
      "platinum": 199,
      "black-2-white-2": 59,
      "sun-moon": 228,
      "ultra-sun-ultra-moon": 297,
      "crown-tundra": 17,
      "legends-arceus": 184,
      "blueberry": 12
    },
    "games": [
      "platinum",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "crown-tundra",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "magmortar",
    "id": 467,
    "gen": "generation-iv",
    "regions": {
      "platinum": 202,
      "black-2-white-2": 56,
      "sun-moon": 168,
      "ultra-sun-ultra-moon": 202,
      "crown-tundra": 20,
      "legends-arceus": 176,
      "blueberry": 15
    },
    "games": [
      "platinum",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "crown-tundra",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "togekiss",
    "id": 468,
    "gen": "generation-iv",
    "regions": {
      "platinum": 175,
      "sword-shield": 259,
      "legends-arceus": 129
    },
    "games": [
      "platinum",
      "sword-shield",
      "legends-arceus"
    ]
  },
  {
    "name": "yanmega",
    "id": 469,
    "gen": "generation-iv",
    "regions": {
      "platinum": 184,
      "heartgold-soulsilver": 102,
      "black-2-white-2": 288,
      "x-y": 241,
      "legends-arceus": 106,
      "kitakami": 4
    },
    "games": [
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "legends-arceus",
      "kitakami"
    ]
  },
  {
    "name": "leafeon",
    "id": 470,
    "gen": "generation-iv",
    "regions": {
      "platinum": 169,
      "black-2-white-2": 98,
      "x-y": 236,
      "sun-moon": 129,
      "ultra-sun-ultra-moon": 159,
      "sword-shield": 202,
      "crown-tundra": 81,
      "legends-arceus": 31,
      "scarlet-violet": 185,
      "legends-za": 106
    },
    "games": [
      "platinum",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "glaceon",
    "id": 471,
    "gen": "generation-iv",
    "regions": {
      "platinum": 170,
      "black-2-white-2": 99,
      "x-y": 237,
      "sun-moon": 130,
      "ultra-sun-ultra-moon": 160,
      "sword-shield": 203,
      "crown-tundra": 80,
      "legends-arceus": 32,
      "scarlet-violet": 186,
      "legends-za": 107
    },
    "games": [
      "platinum",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "gliscor",
    "id": 472,
    "gen": "generation-iv",
    "regions": {
      "platinum": 154,
      "black-2-white-2": 223,
      "x-y": 422,
      "legends-arceus": 186,
      "kitakami": 122
    },
    "games": [
      "platinum",
      "black-2-white-2",
      "x-y",
      "legends-arceus",
      "kitakami"
    ]
  },
  {
    "name": "mamoswine",
    "id": 473,
    "gen": "generation-iv",
    "regions": {
      "platinum": 205,
      "heartgold-soulsilver": 197,
      "black-2-white-2": 261,
      "x-y": 384,
      "sword-shield": 77,
      "crown-tundra": 9,
      "legends-arceus": 214,
      "kitakami": 52
    },
    "games": [
      "platinum",
      "heartgold-soulsilver",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "kitakami"
    ]
  },
  {
    "name": "porygon-z",
    "id": 474,
    "gen": "generation-iv",
    "regions": {
      "platinum": 194,
      "sun-moon": 219,
      "ultra-sun-ultra-moon": 283,
      "isle-of-armor": 210,
      "legends-arceus": 135,
      "blueberry": 131,
      "hyperspace": 13
    },
    "games": [
      "platinum",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "legends-arceus",
      "blueberry",
      "hyperspace"
    ]
  },
  {
    "name": "gallade",
    "id": 475,
    "gen": "generation-iv",
    "regions": {
      "platinum": 160,
      "x-y": 67,
      "omega-ruby-alpha-sapphire": 32,
      "sword-shield": 123,
      "isle-of-armor": 37,
      "legends-arceus": 104,
      "scarlet-violet": 65,
      "kitakami": 60,
      "legends-za": 90
    },
    "games": [
      "platinum",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sword-shield",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "probopass",
    "id": 476,
    "gen": "generation-iv",
    "regions": {
      "platinum": 156,
      "black-2-white-2": 166,
      "x-y": 247,
      "omega-ruby-alpha-sapphire": 62,
      "sun-moon": 199,
      "ultra-sun-ultra-moon": 255,
      "legends-arceus": 191,
      "kitakami": 108
    },
    "games": [
      "platinum",
      "black-2-white-2",
      "x-y",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "legends-arceus",
      "kitakami"
    ]
  },
  {
    "name": "dusknoir",
    "id": 477,
    "gen": "generation-iv",
    "regions": {
      "platinum": 191,
      "omega-ruby-alpha-sapphire": 155,
      "sword-shield": 137,
      "legends-arceus": 160,
      "kitakami": 141
    },
    "games": [
      "platinum",
      "omega-ruby-alpha-sapphire",
      "sword-shield",
      "legends-arceus",
      "kitakami"
    ]
  },
  {
    "name": "froslass",
    "id": 478,
    "gen": "generation-iv",
    "regions": {
      "platinum": 208,
      "omega-ruby-alpha-sapphire": 181,
      "sun-moon": 248,
      "ultra-sun-ultra-moon": 325,
      "sword-shield": 81,
      "crown-tundra": 27,
      "legends-arceus": 207,
      "scarlet-violet": 360,
      "kitakami": 174,
      "legends-za": 171
    },
    "games": [
      "platinum",
      "omega-ruby-alpha-sapphire",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "rotom",
    "id": 479,
    "gen": "generation-iv",
    "regions": {
      "platinum": 156,
      "x-y": 374,
      "sword-shield": 372,
      "legends-arceus": 194,
      "scarlet-violet": 311,
      "blueberry": 41,
      "hyperspace": 22
    },
    "games": [
      "platinum",
      "x-y",
      "sword-shield",
      "legends-arceus",
      "scarlet-violet",
      "blueberry",
      "hyperspace"
    ]
  },
  {
    "name": "uxie",
    "id": 480,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 146,
      "platinum": 146,
      "legends-arceus": 225
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus"
    ]
  },
  {
    "name": "mesprit",
    "id": 481,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 147,
      "platinum": 147,
      "legends-arceus": 226
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus"
    ]
  },
  {
    "name": "azelf",
    "id": 482,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 148,
      "platinum": 148,
      "legends-arceus": 227
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus"
    ]
  },
  {
    "name": "dialga",
    "id": 483,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 149,
      "platinum": 149,
      "legends-arceus": 235
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus"
    ]
  },
  {
    "name": "palkia",
    "id": 484,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 150,
      "platinum": 150,
      "legends-arceus": 236
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus"
    ]
  },
  {
    "name": "heatran",
    "id": 485,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 151,
      "platinum": 151,
      "legends-arceus": 228,
      "hyperspace": 113
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus",
      "hyperspace"
    ]
  },
  {
    "name": "regigigas",
    "id": 486,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 152,
      "platinum": 152,
      "legends-arceus": 229
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus"
    ]
  },
  {
    "name": "giratina",
    "id": 487,
    "gen": "generation-iv",
    "regions": {
      "platinum": 210,
      "legends-arceus": 237
    },
    "games": [
      "platinum",
      "legends-arceus"
    ]
  },
  {
    "name": "cresselia",
    "id": 488,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 153,
      "platinum": 152,
      "legends-arceus": 230
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus"
    ]
  },
  {
    "name": "phione",
    "id": 489,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 154,
      "platinum": 152,
      "legends-arceus": 239
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus"
    ]
  },
  {
    "name": "manaphy",
    "id": 490,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 154,
      "platinum": 152,
      "legends-arceus": 240
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus"
    ]
  },
  {
    "name": "darkrai",
    "id": 491,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 156,
      "platinum": 152,
      "legends-arceus": 242,
      "hyperspace": 125
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus",
      "hyperspace"
    ]
  },
  {
    "name": "shaymin",
    "id": 492,
    "gen": "generation-iv",
    "regions": {
      "diamond-pearl": 157,
      "platinum": 152,
      "legends-arceus": 241
    },
    "games": [
      "diamond-pearl",
      "platinum",
      "legends-arceus"
    ]
  },
  {
    "name": "arceus",
    "id": 493,
    "gen": "generation-iv",
    "regions": {
      "platinum": 152,
      "legends-arceus": 238
    },
    "games": [
      "platinum",
      "legends-arceus"
    ]
  },
  {
    "name": "victini",
    "id": 494,
    "gen": "generation-v",
    "regions": {
      "black-white": 1,
      "black-2-white-2": 1
    },
    "games": [
      "black-white",
      "black-2-white-2"
    ]
  },
  {
    "name": "snivy",
    "id": 495,
    "gen": "generation-v",
    "regions": {
      "black-white": 2,
      "black-2-white-2": 2,
      "blueberry": 200
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "blueberry"
    ]
  },
  {
    "name": "servine",
    "id": 496,
    "gen": "generation-v",
    "regions": {
      "black-white": 3,
      "black-2-white-2": 3,
      "blueberry": 201
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "blueberry"
    ]
  },
  {
    "name": "serperior",
    "id": 497,
    "gen": "generation-v",
    "regions": {
      "black-white": 4,
      "black-2-white-2": 4,
      "blueberry": 202
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "blueberry"
    ]
  },
  {
    "name": "tepig",
    "id": 498,
    "gen": "generation-v",
    "regions": {
      "black-white": 5,
      "black-2-white-2": 5,
      "blueberry": 203,
      "legends-za": 4
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "pignite",
    "id": 499,
    "gen": "generation-v",
    "regions": {
      "black-white": 6,
      "black-2-white-2": 6,
      "blueberry": 204,
      "legends-za": 5
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "emboar",
    "id": 500,
    "gen": "generation-v",
    "regions": {
      "black-white": 7,
      "black-2-white-2": 7,
      "blueberry": 205,
      "legends-za": 6
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "oshawott",
    "id": 501,
    "gen": "generation-v",
    "regions": {
      "black-white": 8,
      "black-2-white-2": 8,
      "legends-arceus": 7,
      "blueberry": 206
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "dewott",
    "id": 502,
    "gen": "generation-v",
    "regions": {
      "black-white": 9,
      "black-2-white-2": 9,
      "legends-arceus": 8,
      "blueberry": 207
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "samurott",
    "id": 503,
    "gen": "generation-v",
    "regions": {
      "black-white": 10,
      "black-2-white-2": 10,
      "blueberry": 208
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "blueberry"
    ]
  },
  {
    "name": "patrat",
    "id": 504,
    "gen": "generation-v",
    "regions": {
      "black-white": 11,
      "black-2-white-2": 11,
      "x-y": 352,
      "legends-za": 27
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "watchog",
    "id": 505,
    "gen": "generation-v",
    "regions": {
      "black-white": 12,
      "black-2-white-2": 12,
      "x-y": 353,
      "legends-za": 28
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "lillipup",
    "id": 506,
    "gen": "generation-v",
    "regions": {
      "black-white": 13,
      "black-2-white-2": 23,
      "sun-moon": 120,
      "ultra-sun-ultra-moon": 150,
      "isle-of-armor": 113
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor"
    ]
  },
  {
    "name": "herdier",
    "id": 507,
    "gen": "generation-v",
    "regions": {
      "black-white": 14,
      "black-2-white-2": 24,
      "sun-moon": 121,
      "ultra-sun-ultra-moon": 151,
      "isle-of-armor": 114
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor"
    ]
  },
  {
    "name": "stoutland",
    "id": 508,
    "gen": "generation-v",
    "regions": {
      "black-white": 15,
      "black-2-white-2": 25,
      "sun-moon": 122,
      "ultra-sun-ultra-moon": 152,
      "isle-of-armor": 115
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor"
    ]
  },
  {
    "name": "purrloin",
    "id": 509,
    "gen": "generation-v",
    "regions": {
      "black-white": 16,
      "black-2-white-2": 13,
      "x-y": 348,
      "sword-shield": 44,
      "hyperspace": 53
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "hyperspace"
    ]
  },
  {
    "name": "liepard",
    "id": 510,
    "gen": "generation-v",
    "regions": {
      "black-white": 17,
      "black-2-white-2": 14,
      "x-y": 349,
      "sword-shield": 45,
      "hyperspace": 54
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "hyperspace"
    ]
  },
  {
    "name": "pansage",
    "id": 511,
    "gen": "generation-v",
    "regions": {
      "black-white": 18,
      "black-2-white-2": 38,
      "x-y": 29,
      "legends-za": 77
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "simisage",
    "id": 512,
    "gen": "generation-v",
    "regions": {
      "black-white": 19,
      "black-2-white-2": 39,
      "x-y": 30,
      "legends-za": 78
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "pansear",
    "id": 513,
    "gen": "generation-v",
    "regions": {
      "black-white": 20,
      "black-2-white-2": 40,
      "x-y": 31,
      "legends-za": 79
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "simisear",
    "id": 514,
    "gen": "generation-v",
    "regions": {
      "black-white": 21,
      "black-2-white-2": 41,
      "x-y": 32,
      "legends-za": 80
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "panpour",
    "id": 515,
    "gen": "generation-v",
    "regions": {
      "black-white": 22,
      "black-2-white-2": 42,
      "x-y": 33,
      "legends-za": 81
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "simipour",
    "id": 516,
    "gen": "generation-v",
    "regions": {
      "black-white": 23,
      "black-2-white-2": 43,
      "x-y": 34,
      "legends-za": 82
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "munna",
    "id": 517,
    "gen": "generation-v",
    "regions": {
      "black-white": 24,
      "black-2-white-2": 87,
      "sword-shield": 90,
      "hyperspace": 55
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sword-shield",
      "hyperspace"
    ]
  },
  {
    "name": "musharna",
    "id": 518,
    "gen": "generation-v",
    "regions": {
      "black-white": 25,
      "black-2-white-2": 88,
      "sword-shield": 91,
      "hyperspace": 56
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sword-shield",
      "hyperspace"
    ]
  },
  {
    "name": "pidove",
    "id": 519,
    "gen": "generation-v",
    "regions": {
      "black-white": 26,
      "black-2-white-2": 15,
      "sword-shield": 26
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sword-shield"
    ]
  },
  {
    "name": "tranquill",
    "id": 520,
    "gen": "generation-v",
    "regions": {
      "black-white": 27,
      "black-2-white-2": 16,
      "sword-shield": 27
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sword-shield"
    ]
  },
  {
    "name": "unfezant",
    "id": 521,
    "gen": "generation-v",
    "regions": {
      "black-white": 28,
      "black-2-white-2": 17,
      "sword-shield": 28
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sword-shield"
    ]
  },
  {
    "name": "blitzle",
    "id": 522,
    "gen": "generation-v",
    "regions": {
      "black-white": 29,
      "black-2-white-2": 148,
      "blueberry": 23
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "blueberry"
    ]
  },
  {
    "name": "zebstrika",
    "id": 523,
    "gen": "generation-v",
    "regions": {
      "black-white": 30,
      "black-2-white-2": 149,
      "blueberry": 24
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "blueberry"
    ]
  },
  {
    "name": "roggenrola",
    "id": 524,
    "gen": "generation-v",
    "regions": {
      "black-white": 31,
      "black-2-white-2": 69,
      "x-y": 273,
      "sun-moon": 98,
      "ultra-sun-ultra-moon": 120,
      "sword-shield": 168,
      "isle-of-armor": 154
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor"
    ]
  },
  {
    "name": "boldore",
    "id": 525,
    "gen": "generation-v",
    "regions": {
      "black-white": 32,
      "black-2-white-2": 70,
      "x-y": 274,
      "sun-moon": 99,
      "ultra-sun-ultra-moon": 121,
      "sword-shield": 169,
      "isle-of-armor": 155
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor"
    ]
  },
  {
    "name": "gigalith",
    "id": 526,
    "gen": "generation-v",
    "regions": {
      "black-white": 33,
      "black-2-white-2": 71,
      "x-y": 275,
      "sun-moon": 100,
      "ultra-sun-ultra-moon": 122,
      "sword-shield": 170,
      "isle-of-armor": 156
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor"
    ]
  },
  {
    "name": "woobat",
    "id": 527,
    "gen": "generation-v",
    "regions": {
      "black-white": 34,
      "black-2-white-2": 67,
      "x-y": 208,
      "sword-shield": 174,
      "isle-of-armor": 151
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "isle-of-armor"
    ]
  },
  {
    "name": "swoobat",
    "id": 528,
    "gen": "generation-v",
    "regions": {
      "black-white": 35,
      "black-2-white-2": 68,
      "x-y": 209,
      "sword-shield": 175,
      "isle-of-armor": 152
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "isle-of-armor"
    ]
  },
  {
    "name": "drilbur",
    "id": 529,
    "gen": "generation-v",
    "regions": {
      "black-white": 36,
      "black-2-white-2": 77,
      "sword-shield": 166,
      "blueberry": 99,
      "legends-za": 120
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sword-shield",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "excadrill",
    "id": 530,
    "gen": "generation-v",
    "regions": {
      "black-white": 37,
      "black-2-white-2": 78,
      "sword-shield": 167,
      "blueberry": 100,
      "legends-za": 121
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sword-shield",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "audino",
    "id": 531,
    "gen": "generation-v",
    "regions": {
      "black-white": 38,
      "black-2-white-2": 37,
      "x-y": 123,
      "crown-tundra": 21,
      "legends-za": 95
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "crown-tundra",
      "legends-za"
    ]
  },
  {
    "name": "timburr",
    "id": 532,
    "gen": "generation-v",
    "regions": {
      "black-white": 39,
      "black-2-white-2": 74,
      "x-y": 399,
      "sword-shield": 171,
      "crown-tundra": 57,
      "kitakami": 85
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra",
      "kitakami"
    ]
  },
  {
    "name": "gurdurr",
    "id": 533,
    "gen": "generation-v",
    "regions": {
      "black-white": 40,
      "black-2-white-2": 75,
      "x-y": 400,
      "sword-shield": 172,
      "crown-tundra": 58,
      "kitakami": 86
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra",
      "kitakami"
    ]
  },
  {
    "name": "conkeldurr",
    "id": 534,
    "gen": "generation-v",
    "regions": {
      "black-white": 41,
      "black-2-white-2": 76,
      "x-y": 401,
      "sword-shield": 173,
      "crown-tundra": 59,
      "kitakami": 87
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra",
      "kitakami"
    ]
  },
  {
    "name": "tympole",
    "id": 535,
    "gen": "generation-v",
    "regions": {
      "black-white": 42,
      "black-2-white-2": 229,
      "sword-shield": 132
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sword-shield"
    ]
  },
  {
    "name": "palpitoad",
    "id": 536,
    "gen": "generation-v",
    "regions": {
      "black-white": 43,
      "black-2-white-2": 230,
      "sword-shield": 133
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sword-shield"
    ]
  },
  {
    "name": "seismitoad",
    "id": 537,
    "gen": "generation-v",
    "regions": {
      "black-white": 44,
      "black-2-white-2": 231,
      "sword-shield": 134
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sword-shield"
    ]
  },
  {
    "name": "throh",
    "id": 538,
    "gen": "generation-v",
    "regions": {
      "black-white": 45,
      "black-2-white-2": 268,
      "x-y": 250,
      "sword-shield": 248,
      "hyperspace": 57
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "hyperspace"
    ]
  },
  {
    "name": "sawk",
    "id": 539,
    "gen": "generation-v",
    "regions": {
      "black-white": 46,
      "black-2-white-2": 269,
      "x-y": 251,
      "sword-shield": 249,
      "hyperspace": 58
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "hyperspace"
    ]
  },
  {
    "name": "sewaddle",
    "id": 540,
    "gen": "generation-v",
    "regions": {
      "black-white": 47,
      "black-2-white-2": 18,
      "kitakami": 13
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "kitakami"
    ]
  },
  {
    "name": "swadloon",
    "id": 541,
    "gen": "generation-v",
    "regions": {
      "black-white": 48,
      "black-2-white-2": 19,
      "kitakami": 14
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "kitakami"
    ]
  },
  {
    "name": "leavanny",
    "id": 542,
    "gen": "generation-v",
    "regions": {
      "black-white": 49,
      "black-2-white-2": 20,
      "kitakami": 15
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "kitakami"
    ]
  },
  {
    "name": "venipede",
    "id": 543,
    "gen": "generation-v",
    "regions": {
      "black-white": 50,
      "black-2-white-2": 44,
      "x-y": 120,
      "isle-of-armor": 74,
      "legends-za": 68
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "isle-of-armor",
      "legends-za"
    ]
  },
  {
    "name": "whirlipede",
    "id": 544,
    "gen": "generation-v",
    "regions": {
      "black-white": 51,
      "black-2-white-2": 45,
      "x-y": 121,
      "isle-of-armor": 75,
      "legends-za": 69
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "isle-of-armor",
      "legends-za"
    ]
  },
  {
    "name": "scolipede",
    "id": 545,
    "gen": "generation-v",
    "regions": {
      "black-white": 52,
      "black-2-white-2": 46,
      "x-y": 122,
      "isle-of-armor": 76,
      "legends-za": 70
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "isle-of-armor",
      "legends-za"
    ]
  },
  {
    "name": "cottonee",
    "id": 546,
    "gen": "generation-v",
    "regions": {
      "black-white": 53,
      "black-2-white-2": 83,
      "sun-moon": 87,
      "ultra-sun-ultra-moon": 105,
      "sword-shield": 262,
      "crown-tundra": 168,
      "blueberry": 56
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "blueberry"
    ]
  },
  {
    "name": "whimsicott",
    "id": 547,
    "gen": "generation-v",
    "regions": {
      "black-white": 54,
      "black-2-white-2": 84,
      "sun-moon": 88,
      "ultra-sun-ultra-moon": 106,
      "sword-shield": 263,
      "crown-tundra": 169,
      "blueberry": 57
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "blueberry"
    ]
  },
  {
    "name": "petilil",
    "id": 548,
    "gen": "generation-v",
    "regions": {
      "black-white": 55,
      "black-2-white-2": 85,
      "sun-moon": 85,
      "ultra-sun-ultra-moon": 103,
      "isle-of-armor": 201,
      "legends-arceus": 93,
      "scarlet-violet": 104,
      "kitakami": 66
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "lilligant",
    "id": 549,
    "gen": "generation-v",
    "regions": {
      "black-white": 56,
      "black-2-white-2": 86,
      "sun-moon": 86,
      "ultra-sun-ultra-moon": 104,
      "isle-of-armor": 202,
      "scarlet-violet": 105,
      "kitakami": 67
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "basculin",
    "id": 550,
    "gen": "generation-v",
    "regions": {
      "black-white": 57,
      "black-2-white-2": 105,
      "x-y": 366,
      "ultra-sun-ultra-moon": 188,
      "sword-shield": 154,
      "crown-tundra": 64,
      "legends-arceus": 166,
      "scarlet-violet": 138,
      "kitakami": 194
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "sandile",
    "id": 551,
    "gen": "generation-v",
    "regions": {
      "black-white": 58,
      "black-2-white-2": 100,
      "x-y": 196,
      "sun-moon": 232,
      "ultra-sun-ultra-moon": 301,
      "isle-of-armor": 176,
      "scarlet-violet": 267,
      "blueberry": 27,
      "legends-za": 122
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "krokorok",
    "id": 552,
    "gen": "generation-v",
    "regions": {
      "black-white": 59,
      "black-2-white-2": 101,
      "x-y": 197,
      "sun-moon": 233,
      "ultra-sun-ultra-moon": 302,
      "isle-of-armor": 177,
      "scarlet-violet": 268,
      "blueberry": 28,
      "legends-za": 123
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "krookodile",
    "id": 553,
    "gen": "generation-v",
    "regions": {
      "black-white": 60,
      "black-2-white-2": 102,
      "x-y": 198,
      "sun-moon": 234,
      "ultra-sun-ultra-moon": 303,
      "isle-of-armor": 178,
      "scarlet-violet": 269,
      "blueberry": 29,
      "legends-za": 124
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "darumaka",
    "id": 554,
    "gen": "generation-v",
    "regions": {
      "black-white": 61,
      "black-2-white-2": 103
    },
    "games": [
      "black-white",
      "black-2-white-2"
    ]
  },
  {
    "name": "darmanitan",
    "id": 555,
    "gen": "generation-v",
    "regions": {
      "black-white": 62,
      "black-2-white-2": 104
    },
    "games": [
      "black-white",
      "black-2-white-2"
    ]
  },
  {
    "name": "maractus",
    "id": 556,
    "gen": "generation-v",
    "regions": {
      "black-white": 63,
      "black-2-white-2": 120,
      "sword-shield": 296
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sword-shield"
    ]
  },
  {
    "name": "dwebble",
    "id": 557,
    "gen": "generation-v",
    "regions": {
      "black-white": 64,
      "black-2-white-2": 116,
      "x-y": 176,
      "sword-shield": 86,
      "isle-of-armor": 122
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "isle-of-armor"
    ]
  },
  {
    "name": "crustle",
    "id": 558,
    "gen": "generation-v",
    "regions": {
      "black-white": 65,
      "black-2-white-2": 117,
      "x-y": 177,
      "sword-shield": 87,
      "isle-of-armor": 123
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "isle-of-armor"
    ]
  },
  {
    "name": "scraggy",
    "id": 559,
    "gen": "generation-v",
    "regions": {
      "black-white": 66,
      "black-2-white-2": 118,
      "x-y": 100,
      "ultra-sun-ultra-moon": 335,
      "sword-shield": 224,
      "isle-of-armor": 161,
      "blueberry": 121,
      "legends-za": 184
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "scrafty",
    "id": 560,
    "gen": "generation-v",
    "regions": {
      "black-white": 67,
      "black-2-white-2": 119,
      "x-y": 101,
      "ultra-sun-ultra-moon": 336,
      "sword-shield": 225,
      "isle-of-armor": 162,
      "blueberry": 122,
      "legends-za": 185
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "sigilyph",
    "id": 561,
    "gen": "generation-v",
    "regions": {
      "black-white": 68,
      "black-2-white-2": 121,
      "x-y": 243,
      "sword-shield": 297
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield"
    ]
  },
  {
    "name": "yamask",
    "id": 562,
    "gen": "generation-v",
    "regions": {
      "black-white": 69,
      "black-2-white-2": 125,
      "hyperspace": 59
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "hyperspace"
    ]
  },
  {
    "name": "cofagrigus",
    "id": 563,
    "gen": "generation-v",
    "regions": {
      "black-white": 70,
      "black-2-white-2": 126,
      "sword-shield": 329,
      "hyperspace": 60
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sword-shield",
      "hyperspace"
    ]
  },
  {
    "name": "tirtouga",
    "id": 564,
    "gen": "generation-v",
    "regions": {
      "black-white": 71,
      "black-2-white-2": 127,
      "sun-moon": 194,
      "ultra-sun-ultra-moon": 241,
      "crown-tundra": 147
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "crown-tundra"
    ]
  },
  {
    "name": "carracosta",
    "id": 565,
    "gen": "generation-v",
    "regions": {
      "black-white": 72,
      "black-2-white-2": 128,
      "sun-moon": 195,
      "ultra-sun-ultra-moon": 242,
      "crown-tundra": 148
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "crown-tundra"
    ]
  },
  {
    "name": "archen",
    "id": 566,
    "gen": "generation-v",
    "regions": {
      "black-white": 73,
      "black-2-white-2": 129,
      "sun-moon": 192,
      "ultra-sun-ultra-moon": 239,
      "crown-tundra": 149
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "crown-tundra"
    ]
  },
  {
    "name": "archeops",
    "id": 567,
    "gen": "generation-v",
    "regions": {
      "black-white": 74,
      "black-2-white-2": 130,
      "sun-moon": 193,
      "ultra-sun-ultra-moon": 240,
      "crown-tundra": 150
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "crown-tundra"
    ]
  },
  {
    "name": "trubbish",
    "id": 568,
    "gen": "generation-v",
    "regions": {
      "black-white": 75,
      "black-2-white-2": 106,
      "x-y": 380,
      "sun-moon": 206,
      "ultra-sun-ultra-moon": 264,
      "sword-shield": 157,
      "legends-za": 49
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "legends-za"
    ]
  },
  {
    "name": "garbodor",
    "id": 569,
    "gen": "generation-v",
    "regions": {
      "black-white": 76,
      "black-2-white-2": 107,
      "x-y": 381,
      "sun-moon": 207,
      "ultra-sun-ultra-moon": 265,
      "sword-shield": 158,
      "legends-za": 50
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "legends-za"
    ]
  },
  {
    "name": "zorua",
    "id": 570,
    "gen": "generation-v",
    "regions": {
      "black-white": 77,
      "black-2-white-2": 152,
      "x-y": 430,
      "ultra-sun-ultra-moon": 28,
      "isle-of-armor": 87,
      "scarlet-violet": 228
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet"
    ]
  },
  {
    "name": "zoroark",
    "id": 571,
    "gen": "generation-v",
    "regions": {
      "black-white": 78,
      "black-2-white-2": 153,
      "x-y": 431,
      "ultra-sun-ultra-moon": 29,
      "isle-of-armor": 88,
      "scarlet-violet": 229
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet"
    ]
  },
  {
    "name": "minccino",
    "id": 572,
    "gen": "generation-v",
    "regions": {
      "black-white": 79,
      "black-2-white-2": 108,
      "ultra-sun-ultra-moon": 266,
      "sword-shield": 50,
      "blueberry": 111
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "cinccino",
    "id": 573,
    "gen": "generation-v",
    "regions": {
      "black-white": 80,
      "black-2-white-2": 109,
      "ultra-sun-ultra-moon": 267,
      "sword-shield": 51,
      "blueberry": 112
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "gothita",
    "id": 574,
    "gen": "generation-v",
    "regions": {
      "black-white": 81,
      "black-2-white-2": 137,
      "x-y": 432,
      "sword-shield": 267,
      "crown-tundra": 51,
      "scarlet-violet": 234,
      "blueberry": 101
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "gothorita",
    "id": 575,
    "gen": "generation-v",
    "regions": {
      "black-white": 82,
      "black-2-white-2": 138,
      "x-y": 433,
      "sword-shield": 268,
      "crown-tundra": 52,
      "scarlet-violet": 235,
      "blueberry": 102
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "gothitelle",
    "id": 576,
    "gen": "generation-v",
    "regions": {
      "black-white": 83,
      "black-2-white-2": 139,
      "x-y": 434,
      "sword-shield": 269,
      "crown-tundra": 53,
      "scarlet-violet": 236,
      "blueberry": 103
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "solosis",
    "id": 577,
    "gen": "generation-v",
    "regions": {
      "black-white": 84,
      "black-2-white-2": 140,
      "x-y": 268,
      "sword-shield": 270,
      "crown-tundra": 54,
      "blueberry": 148
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra",
      "blueberry"
    ]
  },
  {
    "name": "duosion",
    "id": 578,
    "gen": "generation-v",
    "regions": {
      "black-white": 85,
      "black-2-white-2": 141,
      "x-y": 269,
      "sword-shield": 271,
      "crown-tundra": 55,
      "blueberry": 149
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra",
      "blueberry"
    ]
  },
  {
    "name": "reuniclus",
    "id": 579,
    "gen": "generation-v",
    "regions": {
      "black-white": 86,
      "black-2-white-2": 142,
      "x-y": 270,
      "sword-shield": 272,
      "crown-tundra": 56,
      "blueberry": 150
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra",
      "blueberry"
    ]
  },
  {
    "name": "ducklett",
    "id": 580,
    "gen": "generation-v",
    "regions": {
      "black-white": 87,
      "black-2-white-2": 154,
      "x-y": 127,
      "kitakami": 181
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "kitakami"
    ]
  },
  {
    "name": "swanna",
    "id": 581,
    "gen": "generation-v",
    "regions": {
      "black-white": 88,
      "black-2-white-2": 155,
      "x-y": 128,
      "kitakami": 182
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "kitakami"
    ]
  },
  {
    "name": "vanillite",
    "id": 582,
    "gen": "generation-v",
    "regions": {
      "black-white": 89,
      "black-2-white-2": 256,
      "x-y": 391,
      "sun-moon": 255,
      "ultra-sun-ultra-moon": 332,
      "sword-shield": 72,
      "crown-tundra": 22,
      "legends-za": 113
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "legends-za"
    ]
  },
  {
    "name": "vanillish",
    "id": 583,
    "gen": "generation-v",
    "regions": {
      "black-white": 90,
      "black-2-white-2": 257,
      "x-y": 392,
      "sun-moon": 256,
      "ultra-sun-ultra-moon": 333,
      "sword-shield": 73,
      "crown-tundra": 23,
      "legends-za": 114
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "legends-za"
    ]
  },
  {
    "name": "vanilluxe",
    "id": 584,
    "gen": "generation-v",
    "regions": {
      "black-white": 91,
      "black-2-white-2": 258,
      "x-y": 393,
      "sun-moon": 257,
      "ultra-sun-ultra-moon": 334,
      "sword-shield": 74,
      "crown-tundra": 24,
      "legends-za": 115
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "legends-za"
    ]
  },
  {
    "name": "deerling",
    "id": 585,
    "gen": "generation-v",
    "regions": {
      "black-white": 92,
      "black-2-white-2": 160,
      "scarlet-violet": 190,
      "blueberry": 38
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "sawsbuck",
    "id": 586,
    "gen": "generation-v",
    "regions": {
      "black-white": 93,
      "black-2-white-2": 161,
      "scarlet-violet": 191,
      "blueberry": 39
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "emolga",
    "id": 587,
    "gen": "generation-v",
    "regions": {
      "black-white": 94,
      "black-2-white-2": 145,
      "x-y": 239,
      "sun-moon": 274,
      "ultra-sun-ultra-moon": 364,
      "isle-of-armor": 102,
      "legends-za": 180
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "legends-za"
    ]
  },
  {
    "name": "karrablast",
    "id": 588,
    "gen": "generation-v",
    "regions": {
      "black-white": 95,
      "black-2-white-2": 156,
      "x-y": 328,
      "sword-shield": 273,
      "isle-of-armor": 66,
      "crown-tundra": 95
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "isle-of-armor",
      "crown-tundra"
    ]
  },
  {
    "name": "escavalier",
    "id": 589,
    "gen": "generation-v",
    "regions": {
      "black-white": 96,
      "black-2-white-2": 157,
      "x-y": 329,
      "sword-shield": 274,
      "isle-of-armor": 67,
      "crown-tundra": 96
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "isle-of-armor",
      "crown-tundra"
    ]
  },
  {
    "name": "foongus",
    "id": 590,
    "gen": "generation-v",
    "regions": {
      "black-white": 97,
      "black-2-white-2": 162,
      "x-y": 359,
      "isle-of-armor": 77,
      "scarlet-violet": 205,
      "hyperspace": 111
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "isle-of-armor",
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "amoonguss",
    "id": 591,
    "gen": "generation-v",
    "regions": {
      "black-white": 98,
      "black-2-white-2": 163,
      "x-y": 360,
      "isle-of-armor": 78,
      "scarlet-violet": 206,
      "hyperspace": 112
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "isle-of-armor",
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "frillish",
    "id": 592,
    "gen": "generation-v",
    "regions": {
      "black-white": 99,
      "black-2-white-2": 181,
      "ultra-sun-ultra-moon": 318,
      "sword-shield": 305,
      "isle-of-armor": 192
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor"
    ]
  },
  {
    "name": "jellicent",
    "id": 593,
    "gen": "generation-v",
    "regions": {
      "black-white": 100,
      "black-2-white-2": 182,
      "ultra-sun-ultra-moon": 319,
      "sword-shield": 306,
      "isle-of-armor": 193
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor"
    ]
  },
  {
    "name": "alomomola",
    "id": 594,
    "gen": "generation-v",
    "regions": {
      "black-white": 101,
      "black-2-white-2": 183,
      "x-y": 302,
      "sun-moon": 157,
      "ultra-sun-ultra-moon": 191,
      "scarlet-violet": 337,
      "blueberry": 85
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "joltik",
    "id": 595,
    "gen": "generation-v",
    "regions": {
      "black-white": 102,
      "black-2-white-2": 174,
      "sword-shield": 64,
      "crown-tundra": 93,
      "blueberry": 132
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sword-shield",
      "crown-tundra",
      "blueberry"
    ]
  },
  {
    "name": "galvantula",
    "id": 596,
    "gen": "generation-v",
    "regions": {
      "black-white": 103,
      "black-2-white-2": 175,
      "sword-shield": 65,
      "crown-tundra": 94,
      "blueberry": 133
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sword-shield",
      "crown-tundra",
      "blueberry"
    ]
  },
  {
    "name": "ferroseed",
    "id": 597,
    "gen": "generation-v",
    "regions": {
      "black-white": 104,
      "black-2-white-2": 176,
      "x-y": 222,
      "sword-shield": 189,
      "crown-tundra": 179
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "ferrothorn",
    "id": 598,
    "gen": "generation-v",
    "regions": {
      "black-white": 105,
      "black-2-white-2": 177,
      "x-y": 223,
      "sword-shield": 190,
      "crown-tundra": 180
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "klink",
    "id": 599,
    "gen": "generation-v",
    "regions": {
      "black-white": 106,
      "black-2-white-2": 131,
      "sword-shield": 113
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sword-shield"
    ]
  },
  {
    "name": "klang",
    "id": 600,
    "gen": "generation-v",
    "regions": {
      "black-white": 107,
      "black-2-white-2": 132,
      "sword-shield": 114
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sword-shield"
    ]
  },
  {
    "name": "klinklang",
    "id": 601,
    "gen": "generation-v",
    "regions": {
      "black-white": 108,
      "black-2-white-2": 133,
      "sword-shield": 115
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sword-shield"
    ]
  },
  {
    "name": "tynamo",
    "id": 602,
    "gen": "generation-v",
    "regions": {
      "black-white": 109,
      "black-2-white-2": 178,
      "scarlet-violet": 342,
      "kitakami": 175,
      "blueberry": 134,
      "legends-za": 142
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "scarlet-violet",
      "kitakami",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "eelektrik",
    "id": 603,
    "gen": "generation-v",
    "regions": {
      "black-white": 110,
      "black-2-white-2": 179,
      "scarlet-violet": 343,
      "kitakami": 176,
      "blueberry": 135,
      "legends-za": 143
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "scarlet-violet",
      "kitakami",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "eelektross",
    "id": 604,
    "gen": "generation-v",
    "regions": {
      "black-white": 111,
      "black-2-white-2": 180,
      "scarlet-violet": 344,
      "kitakami": 177,
      "blueberry": 136,
      "legends-za": 144
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "scarlet-violet",
      "kitakami",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "elgyem",
    "id": 605,
    "gen": "generation-v",
    "regions": {
      "black-white": 112,
      "black-2-white-2": 189,
      "ultra-sun-ultra-moon": 275,
      "sword-shield": 277
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "ultra-sun-ultra-moon",
      "sword-shield"
    ]
  },
  {
    "name": "beheeyem",
    "id": 606,
    "gen": "generation-v",
    "regions": {
      "black-white": 113,
      "black-2-white-2": 190,
      "ultra-sun-ultra-moon": 276,
      "sword-shield": 278
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "ultra-sun-ultra-moon",
      "sword-shield"
    ]
  },
  {
    "name": "litwick",
    "id": 607,
    "gen": "generation-v",
    "regions": {
      "black-white": 114,
      "black-2-white-2": 191,
      "x-y": 371,
      "sword-shield": 287,
      "crown-tundra": 48,
      "kitakami": 146,
      "legends-za": 189
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "lampent",
    "id": 608,
    "gen": "generation-v",
    "regions": {
      "black-white": 115,
      "black-2-white-2": 192,
      "x-y": 372,
      "sword-shield": 288,
      "crown-tundra": 49,
      "kitakami": 147,
      "legends-za": 190
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "chandelure",
    "id": 609,
    "gen": "generation-v",
    "regions": {
      "black-white": 116,
      "black-2-white-2": 193,
      "x-y": 373,
      "sword-shield": 289,
      "crown-tundra": 50,
      "kitakami": 148,
      "legends-za": 191
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "axew",
    "id": 610,
    "gen": "generation-v",
    "regions": {
      "black-white": 117,
      "black-2-white-2": 184,
      "x-y": 148,
      "sword-shield": 324,
      "scarlet-violet": 155,
      "blueberry": 140
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "fraxure",
    "id": 611,
    "gen": "generation-v",
    "regions": {
      "black-white": 118,
      "black-2-white-2": 185,
      "x-y": 149,
      "sword-shield": 325,
      "scarlet-violet": 156,
      "blueberry": 141
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "haxorus",
    "id": 612,
    "gen": "generation-v",
    "regions": {
      "black-white": 119,
      "black-2-white-2": 186,
      "x-y": 150,
      "sword-shield": 326,
      "scarlet-violet": 157,
      "blueberry": 142
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "cubchoo",
    "id": 613,
    "gen": "generation-v",
    "regions": {
      "black-white": 120,
      "black-2-white-2": 196,
      "x-y": 387,
      "sword-shield": 279,
      "crown-tundra": 121,
      "scarlet-violet": 356,
      "blueberry": 153
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "beartic",
    "id": 614,
    "gen": "generation-v",
    "regions": {
      "black-white": 121,
      "black-2-white-2": 197,
      "x-y": 388,
      "sword-shield": 280,
      "crown-tundra": 122,
      "scarlet-violet": 357,
      "blueberry": 154
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "cryogonal",
    "id": 615,
    "gen": "generation-v",
    "regions": {
      "black-white": 122,
      "black-2-white-2": 198,
      "x-y": 417,
      "crown-tundra": 30,
      "scarlet-violet": 361,
      "hyperspace": 29
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "crown-tundra",
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "shelmet",
    "id": 616,
    "gen": "generation-v",
    "regions": {
      "black-white": 123,
      "black-2-white-2": 158,
      "x-y": 330,
      "sword-shield": 275,
      "isle-of-armor": 64,
      "crown-tundra": 97
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "isle-of-armor",
      "crown-tundra"
    ]
  },
  {
    "name": "accelgor",
    "id": 617,
    "gen": "generation-v",
    "regions": {
      "black-white": 124,
      "black-2-white-2": 159,
      "x-y": 331,
      "sword-shield": 276,
      "isle-of-armor": 65,
      "crown-tundra": 98
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "isle-of-armor",
      "crown-tundra"
    ]
  },
  {
    "name": "stunfisk",
    "id": 618,
    "gen": "generation-v",
    "regions": {
      "black-white": 125,
      "black-2-white-2": 232,
      "x-y": 345,
      "legends-za": 157
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "mienfoo",
    "id": 619,
    "gen": "generation-v",
    "regions": {
      "black-white": 126,
      "black-2-white-2": 220,
      "x-y": 156,
      "ultra-sun-ultra-moon": 359,
      "isle-of-armor": 163,
      "kitakami": 137
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "kitakami"
    ]
  },
  {
    "name": "mienshao",
    "id": 620,
    "gen": "generation-v",
    "regions": {
      "black-white": 127,
      "black-2-white-2": 221,
      "x-y": 157,
      "ultra-sun-ultra-moon": 360,
      "isle-of-armor": 164,
      "kitakami": 138
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "kitakami"
    ]
  },
  {
    "name": "druddigon",
    "id": 621,
    "gen": "generation-v",
    "regions": {
      "black-white": 128,
      "black-2-white-2": 271,
      "x-y": 447,
      "ultra-sun-ultra-moon": 374,
      "isle-of-armor": 63,
      "crown-tundra": 119
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "crown-tundra"
    ]
  },
  {
    "name": "golett",
    "id": 622,
    "gen": "generation-v",
    "regions": {
      "black-white": 129,
      "black-2-white-2": 272,
      "x-y": 244,
      "ultra-sun-ultra-moon": 312,
      "sword-shield": 88,
      "crown-tundra": 153,
      "blueberry": 123,
      "hyperspace": 71
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "blueberry",
      "hyperspace"
    ]
  },
  {
    "name": "golurk",
    "id": 623,
    "gen": "generation-v",
    "regions": {
      "black-white": 130,
      "black-2-white-2": 273,
      "x-y": 245,
      "ultra-sun-ultra-moon": 313,
      "sword-shield": 89,
      "crown-tundra": 154,
      "blueberry": 124,
      "hyperspace": 72
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "blueberry",
      "hyperspace"
    ]
  },
  {
    "name": "pawniard",
    "id": 624,
    "gen": "generation-v",
    "regions": {
      "black-white": 131,
      "black-2-white-2": 224,
      "x-y": 354,
      "ultra-sun-ultra-moon": 337,
      "sword-shield": 246,
      "isle-of-armor": 29,
      "scarlet-violet": 368,
      "kitakami": 186
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "bisharp",
    "id": 625,
    "gen": "generation-v",
    "regions": {
      "black-white": 132,
      "black-2-white-2": 225,
      "x-y": 355,
      "ultra-sun-ultra-moon": 338,
      "sword-shield": 247,
      "isle-of-armor": 30,
      "scarlet-violet": 369,
      "kitakami": 187
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "bouffalant",
    "id": 626,
    "gen": "generation-v",
    "regions": {
      "black-white": 133,
      "black-2-white-2": 270,
      "isle-of-armor": 53
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "isle-of-armor"
    ]
  },
  {
    "name": "rufflet",
    "id": 627,
    "gen": "generation-v",
    "regions": {
      "black-white": 134,
      "black-2-white-2": 110,
      "sun-moon": 75,
      "ultra-sun-ultra-moon": 89,
      "sword-shield": 281,
      "isle-of-armor": 179,
      "legends-arceus": 221,
      "scarlet-violet": 366,
      "blueberry": 32
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "braviary",
    "id": 628,
    "gen": "generation-v",
    "regions": {
      "black-white": 135,
      "black-2-white-2": 111,
      "sun-moon": 76,
      "ultra-sun-ultra-moon": 90,
      "sword-shield": 282,
      "isle-of-armor": 180,
      "scarlet-violet": 367,
      "blueberry": 33
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "vullaby",
    "id": 629,
    "gen": "generation-v",
    "regions": {
      "black-white": 136,
      "black-2-white-2": 112,
      "sun-moon": 77,
      "ultra-sun-ultra-moon": 91,
      "sword-shield": 283,
      "isle-of-armor": 181,
      "kitakami": 127,
      "blueberry": 34
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "kitakami",
      "blueberry"
    ]
  },
  {
    "name": "mandibuzz",
    "id": 630,
    "gen": "generation-v",
    "regions": {
      "black-white": 137,
      "black-2-white-2": 113,
      "sun-moon": 78,
      "ultra-sun-ultra-moon": 92,
      "sword-shield": 284,
      "isle-of-armor": 182,
      "kitakami": 128,
      "blueberry": 35
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "kitakami",
      "blueberry"
    ]
  },
  {
    "name": "heatmor",
    "id": 631,
    "gen": "generation-v",
    "regions": {
      "black-white": 138,
      "black-2-white-2": 194,
      "x-y": 411,
      "sword-shield": 317,
      "crown-tundra": 102
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "durant",
    "id": 632,
    "gen": "generation-v",
    "regions": {
      "black-white": 139,
      "black-2-white-2": 195,
      "x-y": 412,
      "sword-shield": 316,
      "crown-tundra": 101
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "deino",
    "id": 633,
    "gen": "generation-v",
    "regions": {
      "black-white": 140,
      "black-2-white-2": 274,
      "x-y": 448,
      "sword-shield": 386,
      "crown-tundra": 136,
      "scarlet-violet": 371
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra",
      "scarlet-violet"
    ]
  },
  {
    "name": "zweilous",
    "id": 634,
    "gen": "generation-v",
    "regions": {
      "black-white": 141,
      "black-2-white-2": 275,
      "x-y": 449,
      "sword-shield": 387,
      "crown-tundra": 137,
      "scarlet-violet": 372
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra",
      "scarlet-violet"
    ]
  },
  {
    "name": "hydreigon",
    "id": 635,
    "gen": "generation-v",
    "regions": {
      "black-white": 142,
      "black-2-white-2": 276,
      "x-y": 450,
      "sword-shield": 388,
      "crown-tundra": 138,
      "scarlet-violet": 373
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "x-y",
      "sword-shield",
      "crown-tundra",
      "scarlet-violet"
    ]
  },
  {
    "name": "larvesta",
    "id": 636,
    "gen": "generation-v",
    "regions": {
      "black-white": 143,
      "black-2-white-2": 172,
      "ultra-sun-ultra-moon": 203,
      "isle-of-armor": 186,
      "scarlet-violet": 274
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet"
    ]
  },
  {
    "name": "volcarona",
    "id": 637,
    "gen": "generation-v",
    "regions": {
      "black-white": 144,
      "black-2-white-2": 173,
      "ultra-sun-ultra-moon": 204,
      "isle-of-armor": 187,
      "scarlet-violet": 275
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet"
    ]
  },
  {
    "name": "cobalion",
    "id": 638,
    "gen": "generation-v",
    "regions": {
      "black-white": 145,
      "black-2-white-2": 226,
      "crown-tundra": 205,
      "hyperspace": 115
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "crown-tundra",
      "hyperspace"
    ]
  },
  {
    "name": "terrakion",
    "id": 639,
    "gen": "generation-v",
    "regions": {
      "black-white": 146,
      "black-2-white-2": 227,
      "crown-tundra": 206,
      "hyperspace": 116
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "crown-tundra",
      "hyperspace"
    ]
  },
  {
    "name": "virizion",
    "id": 640,
    "gen": "generation-v",
    "regions": {
      "black-white": 147,
      "black-2-white-2": 228,
      "crown-tundra": 207,
      "hyperspace": 117
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "crown-tundra",
      "hyperspace"
    ]
  },
  {
    "name": "tornadus",
    "id": 641,
    "gen": "generation-v",
    "regions": {
      "black-white": 148,
      "black-2-white-2": 199,
      "legends-arceus": 231
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "legends-arceus"
    ]
  },
  {
    "name": "thundurus",
    "id": 642,
    "gen": "generation-v",
    "regions": {
      "black-white": 149,
      "black-2-white-2": 200,
      "legends-arceus": 232
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "legends-arceus"
    ]
  },
  {
    "name": "reshiram",
    "id": 643,
    "gen": "generation-v",
    "regions": {
      "black-white": 150,
      "black-2-white-2": 296
    },
    "games": [
      "black-white",
      "black-2-white-2"
    ]
  },
  {
    "name": "zekrom",
    "id": 644,
    "gen": "generation-v",
    "regions": {
      "black-white": 151,
      "black-2-white-2": 297
    },
    "games": [
      "black-white",
      "black-2-white-2"
    ]
  },
  {
    "name": "landorus",
    "id": 645,
    "gen": "generation-v",
    "regions": {
      "black-white": 152,
      "black-2-white-2": 201,
      "legends-arceus": 233
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "legends-arceus"
    ]
  },
  {
    "name": "kyurem",
    "id": 646,
    "gen": "generation-v",
    "regions": {
      "black-white": 153,
      "black-2-white-2": 298
    },
    "games": [
      "black-white",
      "black-2-white-2"
    ]
  },
  {
    "name": "keldeo",
    "id": 647,
    "gen": "generation-v",
    "regions": {
      "black-white": 154,
      "black-2-white-2": 299,
      "hyperspace": 118
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "hyperspace"
    ]
  },
  {
    "name": "meloetta",
    "id": 648,
    "gen": "generation-v",
    "regions": {
      "black-white": 155,
      "black-2-white-2": 300,
      "hyperspace": 119
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "hyperspace"
    ]
  },
  {
    "name": "genesect",
    "id": 649,
    "gen": "generation-v",
    "regions": {
      "black-white": 156,
      "black-2-white-2": 301,
      "hyperspace": 120
    },
    "games": [
      "black-white",
      "black-2-white-2",
      "hyperspace"
    ]
  },
  {
    "name": "chespin",
    "id": 650,
    "gen": "generation-vi",
    "regions": {
      "x-y": 1,
      "blueberry": 209,
      "legends-za": 213
    },
    "games": [
      "x-y",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "quilladin",
    "id": 651,
    "gen": "generation-vi",
    "regions": {
      "x-y": 2,
      "blueberry": 210,
      "legends-za": 214
    },
    "games": [
      "x-y",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "chesnaught",
    "id": 652,
    "gen": "generation-vi",
    "regions": {
      "x-y": 3,
      "blueberry": 211,
      "legends-za": 215
    },
    "games": [
      "x-y",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "fennekin",
    "id": 653,
    "gen": "generation-vi",
    "regions": {
      "x-y": 4,
      "blueberry": 212,
      "legends-za": 217
    },
    "games": [
      "x-y",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "braixen",
    "id": 654,
    "gen": "generation-vi",
    "regions": {
      "x-y": 5,
      "blueberry": 213,
      "legends-za": 218
    },
    "games": [
      "x-y",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "delphox",
    "id": 655,
    "gen": "generation-vi",
    "regions": {
      "x-y": 6,
      "blueberry": 214,
      "legends-za": 219
    },
    "games": [
      "x-y",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "froakie",
    "id": 656,
    "gen": "generation-vi",
    "regions": {
      "x-y": 7,
      "blueberry": 215,
      "legends-za": 209
    },
    "games": [
      "x-y",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "frogadier",
    "id": 657,
    "gen": "generation-vi",
    "regions": {
      "x-y": 8,
      "blueberry": 216,
      "legends-za": 210
    },
    "games": [
      "x-y",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "greninja",
    "id": 658,
    "gen": "generation-vi",
    "regions": {
      "x-y": 9,
      "blueberry": 217,
      "legends-za": 211
    },
    "games": [
      "x-y",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "bunnelby",
    "id": 659,
    "gen": "generation-vi",
    "regions": {
      "x-y": 10,
      "sword-shield": 48,
      "legends-za": 13
    },
    "games": [
      "x-y",
      "sword-shield",
      "legends-za"
    ]
  },
  {
    "name": "diggersby",
    "id": 660,
    "gen": "generation-vi",
    "regions": {
      "x-y": 11,
      "sword-shield": 49,
      "legends-za": 14
    },
    "games": [
      "x-y",
      "sword-shield",
      "legends-za"
    ]
  },
  {
    "name": "fletchling",
    "id": 661,
    "gen": "generation-vi",
    "regions": {
      "x-y": 14,
      "sun-moon": 158,
      "ultra-sun-ultra-moon": 192,
      "isle-of-armor": 22,
      "scarlet-violet": 19,
      "blueberry": 87,
      "legends-za": 10
    },
    "games": [
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "fletchinder",
    "id": 662,
    "gen": "generation-vi",
    "regions": {
      "x-y": 15,
      "sun-moon": 159,
      "ultra-sun-ultra-moon": 193,
      "isle-of-armor": 23,
      "scarlet-violet": 20,
      "blueberry": 88,
      "legends-za": 11
    },
    "games": [
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "talonflame",
    "id": 663,
    "gen": "generation-vi",
    "regions": {
      "x-y": 16,
      "sun-moon": 160,
      "ultra-sun-ultra-moon": 194,
      "isle-of-armor": 24,
      "scarlet-violet": 21,
      "blueberry": 89,
      "legends-za": 12
    },
    "games": [
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "scatterbug",
    "id": 664,
    "gen": "generation-vi",
    "regions": {
      "x-y": 20,
      "scarlet-violet": 35,
      "legends-za": 15
    },
    "games": [
      "x-y",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "spewpa",
    "id": 665,
    "gen": "generation-vi",
    "regions": {
      "x-y": 21,
      "scarlet-violet": 36,
      "legends-za": 16
    },
    "games": [
      "x-y",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "vivillon",
    "id": 666,
    "gen": "generation-vi",
    "regions": {
      "x-y": 22,
      "scarlet-violet": 37,
      "legends-za": 17
    },
    "games": [
      "x-y",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "litleo",
    "id": 667,
    "gen": "generation-vi",
    "regions": {
      "x-y": 57,
      "ultra-sun-ultra-moon": 370,
      "scarlet-violet": 224,
      "blueberry": 36,
      "legends-za": 45
    },
    "games": [
      "x-y",
      "ultra-sun-ultra-moon",
      "scarlet-violet",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "pyroar",
    "id": 668,
    "gen": "generation-vi",
    "regions": {
      "x-y": 58,
      "ultra-sun-ultra-moon": 371,
      "scarlet-violet": 225,
      "blueberry": 37,
      "legends-za": 46
    },
    "games": [
      "x-y",
      "ultra-sun-ultra-moon",
      "scarlet-violet",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "flabebe",
    "id": 669,
    "gen": "generation-vi",
    "regions": {
      "x-y": 68,
      "ultra-sun-ultra-moon": 100,
      "scarlet-violet": 145,
      "legends-za": 38
    },
    "games": [
      "x-y",
      "ultra-sun-ultra-moon",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "floette",
    "id": 670,
    "gen": "generation-vi",
    "regions": {
      "x-y": 69,
      "ultra-sun-ultra-moon": 101,
      "scarlet-violet": 146,
      "legends-za": 39
    },
    "games": [
      "x-y",
      "ultra-sun-ultra-moon",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "florges",
    "id": 671,
    "gen": "generation-vi",
    "regions": {
      "x-y": 70,
      "ultra-sun-ultra-moon": 102,
      "scarlet-violet": 147,
      "legends-za": 40
    },
    "games": [
      "x-y",
      "ultra-sun-ultra-moon",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "skiddo",
    "id": 672,
    "gen": "generation-vi",
    "regions": {
      "x-y": 89,
      "scarlet-violet": 221,
      "legends-za": 41
    },
    "games": [
      "x-y",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "gogoat",
    "id": 673,
    "gen": "generation-vi",
    "regions": {
      "x-y": 90,
      "scarlet-violet": 222,
      "legends-za": 42
    },
    "games": [
      "x-y",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "pancham",
    "id": 674,
    "gen": "generation-vi",
    "regions": {
      "x-y": 91,
      "sun-moon": 220,
      "ultra-sun-ultra-moon": 284,
      "sword-shield": 111,
      "legends-za": 47
    },
    "games": [
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "legends-za"
    ]
  },
  {
    "name": "pangoro",
    "id": 675,
    "gen": "generation-vi",
    "regions": {
      "x-y": 92,
      "sun-moon": 221,
      "ultra-sun-ultra-moon": 285,
      "sword-shield": 112,
      "legends-za": 48
    },
    "games": [
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "legends-za"
    ]
  },
  {
    "name": "furfrou",
    "id": 676,
    "gen": "generation-vi",
    "regions": {
      "x-y": 93,
      "ultra-sun-ultra-moon": 30,
      "legends-za": 158
    },
    "games": [
      "x-y",
      "ultra-sun-ultra-moon",
      "legends-za"
    ]
  },
  {
    "name": "espurr",
    "id": 677,
    "gen": "generation-vi",
    "regions": {
      "x-y": 114,
      "sword-shield": 208,
      "blueberry": 104,
      "legends-za": 43
    },
    "games": [
      "x-y",
      "sword-shield",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "meowstic",
    "id": 678,
    "gen": "generation-vi",
    "regions": {
      "x-y": 115,
      "sword-shield": 209,
      "blueberry": 105,
      "legends-za": 44
    },
    "games": [
      "x-y",
      "sword-shield",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "honedge",
    "id": 679,
    "gen": "generation-vi",
    "regions": {
      "x-y": 117,
      "sword-shield": 330,
      "legends-za": 71
    },
    "games": [
      "x-y",
      "sword-shield",
      "legends-za"
    ]
  },
  {
    "name": "doublade",
    "id": 680,
    "gen": "generation-vi",
    "regions": {
      "x-y": 118,
      "sword-shield": 331,
      "legends-za": 72
    },
    "games": [
      "x-y",
      "sword-shield",
      "legends-za"
    ]
  },
  {
    "name": "aegislash",
    "id": 681,
    "gen": "generation-vi",
    "regions": {
      "x-y": 119,
      "sword-shield": 332,
      "legends-za": 73
    },
    "games": [
      "x-y",
      "sword-shield",
      "legends-za"
    ]
  },
  {
    "name": "spritzee",
    "id": 682,
    "gen": "generation-vi",
    "regions": {
      "x-y": 129,
      "sword-shield": 212,
      "legends-za": 96
    },
    "games": [
      "x-y",
      "sword-shield",
      "legends-za"
    ]
  },
  {
    "name": "aromatisse",
    "id": 683,
    "gen": "generation-vi",
    "regions": {
      "x-y": 130,
      "sword-shield": 213,
      "legends-za": 97
    },
    "games": [
      "x-y",
      "sword-shield",
      "legends-za"
    ]
  },
  {
    "name": "swirlix",
    "id": 684,
    "gen": "generation-vi",
    "regions": {
      "x-y": 131,
      "sword-shield": 210,
      "legends-za": 98
    },
    "games": [
      "x-y",
      "sword-shield",
      "legends-za"
    ]
  },
  {
    "name": "slurpuff",
    "id": 685,
    "gen": "generation-vi",
    "regions": {
      "x-y": 132,
      "sword-shield": 211,
      "legends-za": 99
    },
    "games": [
      "x-y",
      "sword-shield",
      "legends-za"
    ]
  },
  {
    "name": "inkay",
    "id": 686,
    "gen": "generation-vi",
    "regions": {
      "x-y": 163,
      "ultra-sun-ultra-moon": 26,
      "sword-shield": 290,
      "isle-of-armor": 108,
      "blueberry": 80,
      "legends-za": 159
    },
    "games": [
      "x-y",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "malamar",
    "id": 687,
    "gen": "generation-vi",
    "regions": {
      "x-y": 164,
      "ultra-sun-ultra-moon": 27,
      "sword-shield": 291,
      "isle-of-armor": 109,
      "blueberry": 81,
      "legends-za": 160
    },
    "games": [
      "x-y",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "blueberry",
      "legends-za"
    ]
  },
  {
    "name": "binacle",
    "id": 688,
    "gen": "generation-vi",
    "regions": {
      "x-y": 174,
      "sword-shield": 234,
      "legends-za": 34
    },
    "games": [
      "x-y",
      "sword-shield",
      "legends-za"
    ]
  },
  {
    "name": "barbaracle",
    "id": 689,
    "gen": "generation-vi",
    "regions": {
      "x-y": 175,
      "sword-shield": 235,
      "legends-za": 35
    },
    "games": [
      "x-y",
      "sword-shield",
      "legends-za"
    ]
  },
  {
    "name": "skrelp",
    "id": 690,
    "gen": "generation-vi",
    "regions": {
      "x-y": 183,
      "ultra-sun-ultra-moon": 347,
      "isle-of-armor": 194,
      "scarlet-violet": 338,
      "legends-za": 161
    },
    "games": [
      "x-y",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "dragalge",
    "id": 691,
    "gen": "generation-vi",
    "regions": {
      "x-y": 184,
      "ultra-sun-ultra-moon": 348,
      "isle-of-armor": 195,
      "scarlet-violet": 339,
      "legends-za": 162
    },
    "games": [
      "x-y",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "clauncher",
    "id": 692,
    "gen": "generation-vi",
    "regions": {
      "x-y": 185,
      "ultra-sun-ultra-moon": 349,
      "isle-of-armor": 196,
      "scarlet-violet": 340,
      "legends-za": 163
    },
    "games": [
      "x-y",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "clawitzer",
    "id": 693,
    "gen": "generation-vi",
    "regions": {
      "x-y": 186,
      "ultra-sun-ultra-moon": 350,
      "isle-of-armor": 197,
      "scarlet-violet": 341,
      "legends-za": 164
    },
    "games": [
      "x-y",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "helioptile",
    "id": 694,
    "gen": "generation-vi",
    "regions": {
      "x-y": 199,
      "sword-shield": 318,
      "legends-za": 202
    },
    "games": [
      "x-y",
      "sword-shield",
      "legends-za"
    ]
  },
  {
    "name": "heliolisk",
    "id": 695,
    "gen": "generation-vi",
    "regions": {
      "x-y": 200,
      "sword-shield": 319,
      "legends-za": 203
    },
    "games": [
      "x-y",
      "sword-shield",
      "legends-za"
    ]
  },
  {
    "name": "tyrunt",
    "id": 696,
    "gen": "generation-vi",
    "regions": {
      "x-y": 217,
      "ultra-sun-ultra-moon": 243,
      "crown-tundra": 83,
      "legends-za": 193
    },
    "games": [
      "x-y",
      "ultra-sun-ultra-moon",
      "crown-tundra",
      "legends-za"
    ]
  },
  {
    "name": "tyrantrum",
    "id": 697,
    "gen": "generation-vi",
    "regions": {
      "x-y": 218,
      "ultra-sun-ultra-moon": 244,
      "crown-tundra": 84,
      "legends-za": 194
    },
    "games": [
      "x-y",
      "ultra-sun-ultra-moon",
      "crown-tundra",
      "legends-za"
    ]
  },
  {
    "name": "amaura",
    "id": 698,
    "gen": "generation-vi",
    "regions": {
      "x-y": 219,
      "ultra-sun-ultra-moon": 245,
      "crown-tundra": 85,
      "legends-za": 195
    },
    "games": [
      "x-y",
      "ultra-sun-ultra-moon",
      "crown-tundra",
      "legends-za"
    ]
  },
  {
    "name": "aurorus",
    "id": 699,
    "gen": "generation-vi",
    "regions": {
      "x-y": 220,
      "ultra-sun-ultra-moon": 246,
      "crown-tundra": 86,
      "legends-za": 196
    },
    "games": [
      "x-y",
      "ultra-sun-ultra-moon",
      "crown-tundra",
      "legends-za"
    ]
  },
  {
    "name": "sylveon",
    "id": 700,
    "gen": "generation-vi",
    "regions": {
      "x-y": 238,
      "sun-moon": 131,
      "ultra-sun-ultra-moon": 161,
      "sword-shield": 204,
      "crown-tundra": 82,
      "legends-arceus": 33,
      "scarlet-violet": 187,
      "legends-za": 108
    },
    "games": [
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "hawlucha",
    "id": 701,
    "gen": "generation-vi",
    "regions": {
      "x-y": 242,
      "ultra-sun-ultra-moon": 96,
      "sword-shield": 320,
      "scarlet-violet": 302,
      "legends-za": 181
    },
    "games": [
      "x-y",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "dedenne",
    "id": 702,
    "gen": "generation-vi",
    "regions": {
      "x-y": 263,
      "ultra-sun-ultra-moon": 291,
      "isle-of-armor": 103,
      "scarlet-violet": 200,
      "legends-za": 51
    },
    "games": [
      "x-y",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "carbink",
    "id": 703,
    "gen": "generation-vi",
    "regions": {
      "x-y": 277,
      "sun-moon": 101,
      "ultra-sun-ultra-moon": 123,
      "crown-tundra": 128,
      "kitakami": 167,
      "legends-za": 131
    },
    "games": [
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "crown-tundra",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "goomy",
    "id": 704,
    "gen": "generation-vi",
    "regions": {
      "x-y": 325,
      "sun-moon": 178,
      "ultra-sun-ultra-moon": 217,
      "sword-shield": 389,
      "isle-of-armor": 60,
      "legends-arceus": 115,
      "scarlet-violet": 172,
      "kitakami": 178,
      "legends-za": 165
    },
    "games": [
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "legends-arceus",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "sliggoo",
    "id": 705,
    "gen": "generation-vi",
    "regions": {
      "x-y": 326,
      "sun-moon": 179,
      "ultra-sun-ultra-moon": 218,
      "sword-shield": 390,
      "isle-of-armor": 61,
      "scarlet-violet": 173,
      "kitakami": 179,
      "legends-za": 166
    },
    "games": [
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "goodra",
    "id": 706,
    "gen": "generation-vi",
    "regions": {
      "x-y": 327,
      "sun-moon": 180,
      "ultra-sun-ultra-moon": 219,
      "sword-shield": 391,
      "isle-of-armor": 62,
      "scarlet-violet": 174,
      "kitakami": 180,
      "legends-za": 167
    },
    "games": [
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "klefki",
    "id": 707,
    "gen": "generation-vi",
    "regions": {
      "x-y": 356,
      "sun-moon": 241,
      "ultra-sun-ultra-moon": 314,
      "isle-of-armor": 28,
      "scarlet-violet": 240,
      "legends-za": 188
    },
    "games": [
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "phantump",
    "id": 708,
    "gen": "generation-vi",
    "regions": {
      "x-y": 367,
      "sun-moon": 196,
      "ultra-sun-ultra-moon": 250,
      "sword-shield": 338,
      "crown-tundra": 33,
      "kitakami": 68,
      "legends-za": 182
    },
    "games": [
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "trevenant",
    "id": 709,
    "gen": "generation-vi",
    "regions": {
      "x-y": 368,
      "sun-moon": 197,
      "ultra-sun-ultra-moon": 251,
      "sword-shield": 339,
      "crown-tundra": 34,
      "kitakami": 69,
      "legends-za": 183
    },
    "games": [
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "pumpkaboo",
    "id": 710,
    "gen": "generation-vi",
    "regions": {
      "x-y": 369,
      "sword-shield": 191,
      "legends-za": 204
    },
    "games": [
      "x-y",
      "sword-shield",
      "legends-za"
    ]
  },
  {
    "name": "gourgeist",
    "id": 711,
    "gen": "generation-vi",
    "regions": {
      "x-y": 370,
      "sword-shield": 192,
      "legends-za": 205
    },
    "games": [
      "x-y",
      "sword-shield",
      "legends-za"
    ]
  },
  {
    "name": "bergmite",
    "id": 712,
    "gen": "generation-vi",
    "regions": {
      "x-y": 385,
      "sword-shield": 358,
      "crown-tundra": 142,
      "legends-arceus": 215,
      "scarlet-violet": 364,
      "legends-za": 174
    },
    "games": [
      "x-y",
      "sword-shield",
      "crown-tundra",
      "legends-arceus",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "avalugg",
    "id": 713,
    "gen": "generation-vi",
    "regions": {
      "x-y": 386,
      "sword-shield": 359,
      "crown-tundra": 143,
      "scarlet-violet": 365,
      "legends-za": 175
    },
    "games": [
      "x-y",
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "noibat",
    "id": 714,
    "gen": "generation-vi",
    "regions": {
      "x-y": 419,
      "ultra-sun-ultra-moon": 83,
      "sword-shield": 176,
      "crown-tundra": 181,
      "scarlet-violet": 304,
      "kitakami": 88,
      "legends-za": 186
    },
    "games": [
      "x-y",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "noivern",
    "id": 715,
    "gen": "generation-vi",
    "regions": {
      "x-y": 420,
      "ultra-sun-ultra-moon": 84,
      "sword-shield": 177,
      "crown-tundra": 182,
      "scarlet-violet": 305,
      "kitakami": 89,
      "legends-za": 187
    },
    "games": [
      "x-y",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "kitakami",
      "legends-za"
    ]
  },
  {
    "name": "xerneas",
    "id": 716,
    "gen": "generation-vi",
    "regions": {
      "x-y": 454,
      "legends-za": 228
    },
    "games": [
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "yveltal",
    "id": 717,
    "gen": "generation-vi",
    "regions": {
      "x-y": 455,
      "legends-za": 229
    },
    "games": [
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "zygarde",
    "id": 718,
    "gen": "generation-vi",
    "regions": {
      "x-y": 456,
      "sun-moon": 205,
      "ultra-sun-ultra-moon": 263,
      "legends-za": 230
    },
    "games": [
      "x-y",
      "sun-moon",
      "ultra-sun-ultra-moon",
      "legends-za"
    ]
  },
  {
    "name": "diancie",
    "id": 719,
    "gen": "generation-vi",
    "regions": {
      "x-y": 151,
      "legends-za": 231
    },
    "games": [
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "hoopa",
    "id": 720,
    "gen": "generation-vi",
    "regions": {
      "x-y": 152,
      "hyperspace": 121
    },
    "games": [
      "x-y",
      "hyperspace"
    ]
  },
  {
    "name": "volcanion",
    "id": 721,
    "gen": "generation-vi",
    "regions": {
      "x-y": 153,
      "hyperspace": 114
    },
    "games": [
      "x-y",
      "hyperspace"
    ]
  },
  {
    "name": "rowlet",
    "id": 722,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 1,
      "ultra-sun-ultra-moon": 1,
      "legends-arceus": 1,
      "blueberry": 218
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "dartrix",
    "id": 723,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 2,
      "ultra-sun-ultra-moon": 2,
      "legends-arceus": 2,
      "blueberry": 219
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "legends-arceus",
      "blueberry"
    ]
  },
  {
    "name": "decidueye",
    "id": 724,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 3,
      "ultra-sun-ultra-moon": 3,
      "blueberry": 220
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "blueberry"
    ]
  },
  {
    "name": "litten",
    "id": 725,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 4,
      "ultra-sun-ultra-moon": 4,
      "blueberry": 221
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "blueberry"
    ]
  },
  {
    "name": "torracat",
    "id": 726,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 5,
      "ultra-sun-ultra-moon": 5,
      "blueberry": 222
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "blueberry"
    ]
  },
  {
    "name": "incineroar",
    "id": 727,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 6,
      "ultra-sun-ultra-moon": 6,
      "blueberry": 223
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "blueberry"
    ]
  },
  {
    "name": "popplio",
    "id": 728,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 7,
      "ultra-sun-ultra-moon": 7,
      "blueberry": 224
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "blueberry"
    ]
  },
  {
    "name": "brionne",
    "id": 729,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 8,
      "ultra-sun-ultra-moon": 8,
      "blueberry": 225
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "blueberry"
    ]
  },
  {
    "name": "primarina",
    "id": 730,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 9,
      "ultra-sun-ultra-moon": 9,
      "blueberry": 226
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "blueberry"
    ]
  },
  {
    "name": "pikipek",
    "id": 731,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 10,
      "ultra-sun-ultra-moon": 10,
      "blueberry": 47
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "blueberry"
    ]
  },
  {
    "name": "trumbeak",
    "id": 732,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 11,
      "ultra-sun-ultra-moon": 11,
      "blueberry": 48
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "blueberry"
    ]
  },
  {
    "name": "toucannon",
    "id": 733,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 12,
      "ultra-sun-ultra-moon": 12,
      "blueberry": 49
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "blueberry"
    ]
  },
  {
    "name": "yungoos",
    "id": 734,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 13,
      "ultra-sun-ultra-moon": 13,
      "scarlet-violet": 27
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "scarlet-violet"
    ]
  },
  {
    "name": "gumshoos",
    "id": 735,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 14,
      "ultra-sun-ultra-moon": 14,
      "scarlet-violet": 28
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "scarlet-violet"
    ]
  },
  {
    "name": "grubbin",
    "id": 736,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 27,
      "ultra-sun-ultra-moon": 34,
      "sword-shield": 16,
      "kitakami": 112
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "kitakami"
    ]
  },
  {
    "name": "charjabug",
    "id": 737,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 28,
      "ultra-sun-ultra-moon": 35,
      "sword-shield": 17,
      "kitakami": 113
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "kitakami"
    ]
  },
  {
    "name": "vikavolt",
    "id": 738,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 29,
      "ultra-sun-ultra-moon": 36,
      "sword-shield": 18,
      "kitakami": 114
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "kitakami"
    ]
  },
  {
    "name": "crabrawler",
    "id": 739,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 59,
      "ultra-sun-ultra-moon": 71,
      "scarlet-violet": 118,
      "blueberry": 72,
      "hyperspace": 87
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "scarlet-violet",
      "blueberry",
      "hyperspace"
    ]
  },
  {
    "name": "crabominable",
    "id": 740,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 60,
      "ultra-sun-ultra-moon": 72,
      "scarlet-violet": 119,
      "blueberry": 73,
      "hyperspace": 88
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "scarlet-violet",
      "blueberry",
      "hyperspace"
    ]
  },
  {
    "name": "oricorio",
    "id": 741,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 82,
      "ultra-sun-ultra-moon": 97,
      "scarlet-violet": 100,
      "kitakami": 115,
      "blueberry": 74
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "scarlet-violet",
      "kitakami",
      "blueberry"
    ]
  },
  {
    "name": "cutiefly",
    "id": 742,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 83,
      "ultra-sun-ultra-moon": 98,
      "sword-shield": 187,
      "kitakami": 16
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "kitakami"
    ]
  },
  {
    "name": "ribombee",
    "id": 743,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 84,
      "ultra-sun-ultra-moon": 99,
      "sword-shield": 188,
      "kitakami": 17
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "kitakami"
    ]
  },
  {
    "name": "rockruff",
    "id": 744,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 103,
      "ultra-sun-ultra-moon": 126,
      "isle-of-armor": 157,
      "scarlet-violet": 89,
      "kitakami": 70
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "lycanroc",
    "id": 745,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 104,
      "ultra-sun-ultra-moon": 127,
      "isle-of-armor": 158,
      "scarlet-violet": 90,
      "kitakami": 71
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "wishiwashi",
    "id": 746,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 110,
      "ultra-sun-ultra-moon": 133,
      "sword-shield": 155,
      "isle-of-armor": 110
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor"
    ]
  },
  {
    "name": "mareanie",
    "id": 747,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 113,
      "ultra-sun-ultra-moon": 136,
      "sword-shield": 307,
      "isle-of-armor": 127,
      "scarlet-violet": 345
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet"
    ]
  },
  {
    "name": "toxapex",
    "id": 748,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 114,
      "ultra-sun-ultra-moon": 137,
      "sword-shield": 308,
      "isle-of-armor": 128,
      "scarlet-violet": 346
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet"
    ]
  },
  {
    "name": "mudbray",
    "id": 749,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 132,
      "ultra-sun-ultra-moon": 165,
      "sword-shield": 84,
      "scarlet-violet": 272,
      "kitakami": 129
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "mudsdale",
    "id": 750,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 133,
      "ultra-sun-ultra-moon": 166,
      "sword-shield": 85,
      "scarlet-violet": 273,
      "kitakami": 130
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "dewpider",
    "id": 751,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 141,
      "ultra-sun-ultra-moon": 174,
      "sword-shield": 214,
      "crown-tundra": 91,
      "blueberry": 90
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "blueberry"
    ]
  },
  {
    "name": "araquanid",
    "id": 752,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 142,
      "ultra-sun-ultra-moon": 175,
      "sword-shield": 215,
      "crown-tundra": 92,
      "blueberry": 91
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "blueberry"
    ]
  },
  {
    "name": "fomantis",
    "id": 753,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 143,
      "ultra-sun-ultra-moon": 176,
      "isle-of-armor": 17,
      "scarlet-violet": 247,
      "kitakami": 31
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "lurantis",
    "id": 754,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 144,
      "ultra-sun-ultra-moon": 177,
      "isle-of-armor": 18,
      "scarlet-violet": 248,
      "kitakami": 32
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "morelull",
    "id": 755,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 145,
      "ultra-sun-ultra-moon": 178,
      "sword-shield": 340
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield"
    ]
  },
  {
    "name": "shiinotic",
    "id": 756,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 146,
      "ultra-sun-ultra-moon": 179,
      "sword-shield": 341
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield"
    ]
  },
  {
    "name": "salandit",
    "id": 757,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 161,
      "ultra-sun-ultra-moon": 195,
      "sword-shield": 244,
      "isle-of-armor": 159,
      "scarlet-violet": 120,
      "kitakami": 168
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "salazzle",
    "id": 758,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 162,
      "ultra-sun-ultra-moon": 196,
      "sword-shield": 245,
      "isle-of-armor": 160,
      "scarlet-violet": 121,
      "kitakami": 169
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "stufful",
    "id": 759,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 169,
      "ultra-sun-ultra-moon": 205,
      "sword-shield": 94
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield"
    ]
  },
  {
    "name": "bewear",
    "id": 760,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 170,
      "ultra-sun-ultra-moon": 206,
      "sword-shield": 95
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield"
    ]
  },
  {
    "name": "bounsweet",
    "id": 761,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 171,
      "ultra-sun-ultra-moon": 207,
      "sword-shield": 52,
      "scarlet-violet": 81
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "scarlet-violet"
    ]
  },
  {
    "name": "steenee",
    "id": 762,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 172,
      "ultra-sun-ultra-moon": 208,
      "sword-shield": 53,
      "scarlet-violet": 82
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "scarlet-violet"
    ]
  },
  {
    "name": "tsareena",
    "id": 763,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 173,
      "ultra-sun-ultra-moon": 209,
      "sword-shield": 54,
      "scarlet-violet": 83
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "scarlet-violet"
    ]
  },
  {
    "name": "comfey",
    "id": 764,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 174,
      "ultra-sun-ultra-moon": 210,
      "isle-of-armor": 79,
      "blueberry": 58
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "blueberry"
    ]
  },
  {
    "name": "oranguru",
    "id": 765,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 176,
      "ultra-sun-ultra-moon": 215,
      "sword-shield": 342,
      "isle-of-armor": 89,
      "scarlet-violet": 314
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet"
    ]
  },
  {
    "name": "passimian",
    "id": 766,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 177,
      "ultra-sun-ultra-moon": 216,
      "sword-shield": 343,
      "isle-of-armor": 90,
      "scarlet-violet": 315
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet"
    ]
  },
  {
    "name": "wimpod",
    "id": 767,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 182,
      "ultra-sun-ultra-moon": 221,
      "sword-shield": 232,
      "isle-of-armor": 124,
      "hyperspace": 62
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "hyperspace"
    ]
  },
  {
    "name": "golisopod",
    "id": 768,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 183,
      "ultra-sun-ultra-moon": 222,
      "sword-shield": 233,
      "isle-of-armor": 125,
      "hyperspace": 63
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "hyperspace"
    ]
  },
  {
    "name": "sandygast",
    "id": 769,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 186,
      "ultra-sun-ultra-moon": 225,
      "isle-of-armor": 133,
      "scarlet-violet": 323,
      "hyperspace": 25
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "palossand",
    "id": 770,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 187,
      "ultra-sun-ultra-moon": 226,
      "isle-of-armor": 134,
      "scarlet-violet": 324,
      "hyperspace": 26
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "isle-of-armor",
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "pyukumuku",
    "id": 771,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 200,
      "ultra-sun-ultra-moon": 256,
      "sword-shield": 156
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield"
    ]
  },
  {
    "name": "type-null",
    "id": 772,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 203,
      "ultra-sun-ultra-moon": 259,
      "sword-shield": 381
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield"
    ]
  },
  {
    "name": "silvally",
    "id": 773,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 204,
      "ultra-sun-ultra-moon": 260,
      "sword-shield": 382
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield"
    ]
  },
  {
    "name": "minior",
    "id": 774,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 213,
      "ultra-sun-ultra-moon": 277,
      "blueberry": 106
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "blueberry"
    ]
  },
  {
    "name": "komala",
    "id": 775,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 222,
      "ultra-sun-ultra-moon": 286,
      "scarlet-violet": 316
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "scarlet-violet"
    ]
  },
  {
    "name": "turtonator",
    "id": 776,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 224,
      "ultra-sun-ultra-moon": 288,
      "sword-shield": 347
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield"
    ]
  },
  {
    "name": "togedemaru",
    "id": 777,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 225,
      "ultra-sun-ultra-moon": 292,
      "sword-shield": 348
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield"
    ]
  },
  {
    "name": "mimikyu",
    "id": 778,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 242,
      "ultra-sun-ultra-moon": 315,
      "sword-shield": 301,
      "crown-tundra": 46,
      "scarlet-violet": 239,
      "kitakami": 189,
      "hyperspace": 68
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "kitakami",
      "hyperspace"
    ]
  },
  {
    "name": "bruxish",
    "id": 779,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 243,
      "ultra-sun-ultra-moon": 320,
      "scarlet-violet": 336,
      "blueberry": 55
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "drampa",
    "id": 780,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 244,
      "ultra-sun-ultra-moon": 321,
      "sword-shield": 346,
      "legends-za": 224
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "legends-za"
    ]
  },
  {
    "name": "dhelmise",
    "id": 781,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 263,
      "ultra-sun-ultra-moon": 344,
      "sword-shield": 360,
      "crown-tundra": 162
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "jangmo-o",
    "id": 782,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 271,
      "ultra-sun-ultra-moon": 361,
      "sword-shield": 392,
      "isle-of-armor": 165,
      "kitakami": 131
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "kitakami"
    ]
  },
  {
    "name": "hakamo-o",
    "id": 783,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 272,
      "ultra-sun-ultra-moon": 362,
      "sword-shield": 393,
      "isle-of-armor": 166,
      "kitakami": 132
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "kitakami"
    ]
  },
  {
    "name": "kommo-o",
    "id": 784,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 273,
      "ultra-sun-ultra-moon": 363,
      "sword-shield": 394,
      "isle-of-armor": 167,
      "kitakami": 133
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "sword-shield",
      "isle-of-armor",
      "kitakami"
    ]
  },
  {
    "name": "tapu-koko",
    "id": 785,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 285,
      "ultra-sun-ultra-moon": 383
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "tapu-lele",
    "id": 786,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 286,
      "ultra-sun-ultra-moon": 384
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "tapu-bulu",
    "id": 787,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 287,
      "ultra-sun-ultra-moon": 385
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "tapu-fini",
    "id": 788,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 288,
      "ultra-sun-ultra-moon": 386
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "cosmog",
    "id": 789,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 289,
      "ultra-sun-ultra-moon": 387
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "cosmoem",
    "id": 790,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 290,
      "ultra-sun-ultra-moon": 388
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "solgaleo",
    "id": 791,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 291,
      "ultra-sun-ultra-moon": 389
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "lunala",
    "id": 792,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 292,
      "ultra-sun-ultra-moon": 390
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "nihilego",
    "id": 793,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 293,
      "ultra-sun-ultra-moon": 391
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "buzzwole",
    "id": 794,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 294,
      "ultra-sun-ultra-moon": 394
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "pheromosa",
    "id": 795,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 295,
      "ultra-sun-ultra-moon": 395
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "xurkitree",
    "id": 796,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 296,
      "ultra-sun-ultra-moon": 396
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "celesteela",
    "id": 797,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 297,
      "ultra-sun-ultra-moon": 397
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "kartana",
    "id": 798,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 298,
      "ultra-sun-ultra-moon": 398
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "guzzlord",
    "id": 799,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 299,
      "ultra-sun-ultra-moon": 399
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "necrozma",
    "id": 800,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 300,
      "ultra-sun-ultra-moon": 400
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "magearna",
    "id": 801,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 301,
      "ultra-sun-ultra-moon": 401,
      "hyperspace": 131
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "hyperspace"
    ]
  },
  {
    "name": "marshadow",
    "id": 802,
    "gen": "generation-vii",
    "regions": {
      "sun-moon": 302,
      "ultra-sun-ultra-moon": 402,
      "hyperspace": 122
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon",
      "hyperspace"
    ]
  },
  {
    "name": "poipole",
    "id": 803,
    "gen": "generation-vii",
    "regions": {
      "ultra-sun-ultra-moon": 261
    },
    "games": [
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "naganadel",
    "id": 804,
    "gen": "generation-vii",
    "regions": {
      "ultra-sun-ultra-moon": 262
    },
    "games": [
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "stakataka",
    "id": 805,
    "gen": "generation-vii",
    "regions": {
      "ultra-sun-ultra-moon": 392
    },
    "games": [
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "blacephalon",
    "id": 806,
    "gen": "generation-vii",
    "regions": {
      "ultra-sun-ultra-moon": 393
    },
    "games": [
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "zeraora",
    "id": 807,
    "gen": "generation-vii",
    "regions": {
      "ultra-sun-ultra-moon": 403,
      "hyperspace": 132
    },
    "games": [
      "ultra-sun-ultra-moon",
      "hyperspace"
    ]
  },
  {
    "name": "meltan",
    "id": 808,
    "gen": "generation-vii",
    "regions": {
      "lets-go": 152,
      "hyperspace": 123
    },
    "games": [
      "lets-go",
      "hyperspace"
    ]
  },
  {
    "name": "melmetal",
    "id": 809,
    "gen": "generation-vii",
    "regions": {
      "lets-go": 153,
      "hyperspace": 124
    },
    "games": [
      "lets-go",
      "hyperspace"
    ]
  },
  {
    "name": "grookey",
    "id": 810,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 1,
      "blueberry": 227
    },
    "games": [
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "thwackey",
    "id": 811,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 2,
      "blueberry": 228
    },
    "games": [
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "rillaboom",
    "id": 812,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 3,
      "blueberry": 229
    },
    "games": [
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "scorbunny",
    "id": 813,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 4,
      "blueberry": 230
    },
    "games": [
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "raboot",
    "id": 814,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 5,
      "blueberry": 231
    },
    "games": [
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "cinderace",
    "id": 815,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 6,
      "blueberry": 232
    },
    "games": [
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "sobble",
    "id": 816,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 7,
      "blueberry": 233
    },
    "games": [
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "drizzile",
    "id": 817,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 8,
      "blueberry": 234
    },
    "games": [
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "inteleon",
    "id": 818,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 9,
      "blueberry": 235
    },
    "games": [
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "skwovet",
    "id": 819,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 24,
      "isle-of-armor": 9,
      "crown-tundra": 5,
      "scarlet-violet": 29,
      "kitakami": 72
    },
    "games": [
      "sword-shield",
      "isle-of-armor",
      "crown-tundra",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "greedent",
    "id": 820,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 25,
      "isle-of-armor": 10,
      "crown-tundra": 6,
      "scarlet-violet": 30,
      "kitakami": 73
    },
    "games": [
      "sword-shield",
      "isle-of-armor",
      "crown-tundra",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "rookidee",
    "id": 821,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 21,
      "crown-tundra": 163,
      "scarlet-violet": 40,
      "hyperspace": 73
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "corvisquire",
    "id": 822,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 22,
      "crown-tundra": 164,
      "scarlet-violet": 41,
      "hyperspace": 74
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "corviknight",
    "id": 823,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 23,
      "crown-tundra": 165,
      "scarlet-violet": 42,
      "hyperspace": 75
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "blipbug",
    "id": 824,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 10,
      "isle-of-armor": 14
    },
    "games": [
      "sword-shield",
      "isle-of-armor"
    ]
  },
  {
    "name": "dottler",
    "id": 825,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 11,
      "isle-of-armor": 15
    },
    "games": [
      "sword-shield",
      "isle-of-armor"
    ]
  },
  {
    "name": "orbeetle",
    "id": 826,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 12,
      "isle-of-armor": 16
    },
    "games": [
      "sword-shield",
      "isle-of-armor"
    ]
  },
  {
    "name": "nickit",
    "id": 827,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 29,
      "hyperspace": 64
    },
    "games": [
      "sword-shield",
      "hyperspace"
    ]
  },
  {
    "name": "thievul",
    "id": 828,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 30,
      "hyperspace": 65
    },
    "games": [
      "sword-shield",
      "hyperspace"
    ]
  },
  {
    "name": "gossifleur",
    "id": 829,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 126,
      "crown-tundra": 166
    },
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "eldegoss",
    "id": 830,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 127,
      "crown-tundra": 167
    },
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "wooloo",
    "id": 831,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 34,
      "crown-tundra": 3
    },
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "dubwool",
    "id": 832,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 35,
      "crown-tundra": 4
    },
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "chewtle",
    "id": 833,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 42,
      "isle-of-armor": 56,
      "scarlet-violet": 57,
      "kitakami": 183
    },
    "games": [
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "drednaw",
    "id": 834,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 43,
      "isle-of-armor": 57,
      "scarlet-violet": 58,
      "kitakami": 184
    },
    "games": [
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "yamper",
    "id": 835,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 46,
      "crown-tundra": 155
    },
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "boltund",
    "id": 836,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 47,
      "crown-tundra": 156
    },
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "rolycoly",
    "id": 837,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 161,
      "crown-tundra": 176,
      "scarlet-violet": 91
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "scarlet-violet"
    ]
  },
  {
    "name": "carkol",
    "id": 838,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 162,
      "crown-tundra": 177,
      "scarlet-violet": 92
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "scarlet-violet"
    ]
  },
  {
    "name": "coalossal",
    "id": 839,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 163,
      "crown-tundra": 178,
      "scarlet-violet": 93
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "scarlet-violet"
    ]
  },
  {
    "name": "applin",
    "id": 840,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 205,
      "isle-of-armor": 19,
      "scarlet-violet": 108,
      "kitakami": 33
    },
    "games": [
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "flapple",
    "id": 841,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 206,
      "isle-of-armor": 20,
      "scarlet-violet": 109,
      "kitakami": 34
    },
    "games": [
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "appletun",
    "id": 842,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 207,
      "isle-of-armor": 21,
      "scarlet-violet": 110,
      "kitakami": 35
    },
    "games": [
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "silicobra",
    "id": 843,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 312,
      "isle-of-armor": 174,
      "scarlet-violet": 270
    },
    "games": [
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet"
    ]
  },
  {
    "name": "sandaconda",
    "id": 844,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 313,
      "isle-of-armor": 175,
      "scarlet-violet": 271
    },
    "games": [
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet"
    ]
  },
  {
    "name": "cramorant",
    "id": 845,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 309,
      "isle-of-armor": 93,
      "kitakami": 185
    },
    "games": [
      "sword-shield",
      "isle-of-armor",
      "kitakami"
    ]
  },
  {
    "name": "arrokuda",
    "id": 846,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 180,
      "isle-of-armor": 96,
      "scarlet-violet": 136,
      "kitakami": 90
    },
    "games": [
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "barraskewda",
    "id": 847,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 181,
      "isle-of-armor": 97,
      "scarlet-violet": 137,
      "kitakami": 91
    },
    "games": [
      "sword-shield",
      "isle-of-armor",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "toxel",
    "id": 848,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 310,
      "scarlet-violet": 198,
      "hyperspace": 102
    },
    "games": [
      "sword-shield",
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "toxtricity",
    "id": 849,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 311,
      "scarlet-violet": 199,
      "hyperspace": 103
    },
    "games": [
      "sword-shield",
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "sizzlipede",
    "id": 850,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 159,
      "crown-tundra": 99
    },
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "centiskorch",
    "id": 851,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 160,
      "crown-tundra": 100
    },
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "clobbopus",
    "id": 852,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 351,
      "isle-of-armor": 129,
      "hyperspace": 66
    },
    "games": [
      "sword-shield",
      "isle-of-armor",
      "hyperspace"
    ]
  },
  {
    "name": "grapploct",
    "id": 853,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 352,
      "isle-of-armor": 130,
      "hyperspace": 67
    },
    "games": [
      "sword-shield",
      "isle-of-armor",
      "hyperspace"
    ]
  },
  {
    "name": "sinistea",
    "id": 854,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 335,
      "crown-tundra": 132,
      "scarlet-violet": 237,
      "blueberry": 127
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "polteageist",
    "id": 855,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 336,
      "crown-tundra": 133,
      "scarlet-violet": 238,
      "blueberry": 128
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "hatenna",
    "id": 856,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 241,
      "crown-tundra": 40,
      "scarlet-violet": 282,
      "kitakami": 92
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "hattrem",
    "id": 857,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 242,
      "crown-tundra": 41,
      "scarlet-violet": 283,
      "kitakami": 93
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "hatterene",
    "id": 858,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 243,
      "crown-tundra": 42,
      "scarlet-violet": 284,
      "kitakami": 94
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "impidimp",
    "id": 859,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 238,
      "crown-tundra": 37,
      "scarlet-violet": 285,
      "kitakami": 190
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "morgrem",
    "id": 860,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 239,
      "crown-tundra": 38,
      "scarlet-violet": 286,
      "kitakami": 191
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "grimmsnarl",
    "id": 861,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 240,
      "crown-tundra": 39,
      "scarlet-violet": 287,
      "kitakami": 192
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "obstagoon",
    "id": 862,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 33,
      "crown-tundra": 73
    },
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "perrserker",
    "id": 863,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 183,
      "hyperspace": 6
    },
    "games": [
      "sword-shield",
      "hyperspace"
    ]
  },
  {
    "name": "cursola",
    "id": 864,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 237
    },
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "sirfetchd",
    "id": 865,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 219,
      "hyperspace": 8
    },
    "games": [
      "sword-shield",
      "hyperspace"
    ]
  },
  {
    "name": "mr-rime",
    "id": 866,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 366,
      "crown-tundra": 12,
      "hyperspace": 110
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "hyperspace"
    ]
  },
  {
    "name": "runerigus",
    "id": 867,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 328,
      "hyperspace": 61
    },
    "games": [
      "sword-shield",
      "hyperspace"
    ]
  },
  {
    "name": "milcery",
    "id": 868,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 185,
      "blueberry": 42
    },
    "games": [
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "alcremie",
    "id": 869,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 186,
      "blueberry": 43
    },
    "games": [
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "falinks",
    "id": 870,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 345,
      "scarlet-violet": 301,
      "legends-za": 212
    },
    "games": [
      "sword-shield",
      "scarlet-violet",
      "legends-za"
    ]
  },
  {
    "name": "pincurchin",
    "id": 871,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 353,
      "isle-of-armor": 126,
      "crown-tundra": 158,
      "scarlet-violet": 322
    },
    "games": [
      "sword-shield",
      "isle-of-armor",
      "crown-tundra",
      "scarlet-violet"
    ]
  },
  {
    "name": "snom",
    "id": 872,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 349,
      "crown-tundra": 1,
      "scarlet-violet": 351
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "scarlet-violet"
    ]
  },
  {
    "name": "frosmoth",
    "id": 873,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 350,
      "crown-tundra": 2,
      "scarlet-violet": 352
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "scarlet-violet"
    ]
  },
  {
    "name": "stonjourner",
    "id": 874,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 369,
      "crown-tundra": 89,
      "scarlet-violet": 320
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "scarlet-violet"
    ]
  },
  {
    "name": "eiscue",
    "id": 875,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 370,
      "crown-tundra": 90,
      "scarlet-violet": 321
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "scarlet-violet"
    ]
  },
  {
    "name": "indeedee",
    "id": 876,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 337,
      "crown-tundra": 171,
      "scarlet-violet": 241,
      "kitakami": 193,
      "hyperspace": 52
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "scarlet-violet",
      "kitakami",
      "hyperspace"
    ]
  },
  {
    "name": "morpeko",
    "id": 877,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 344,
      "isle-of-armor": 104,
      "crown-tundra": 157,
      "kitakami": 95,
      "hyperspace": 70
    },
    "games": [
      "sword-shield",
      "isle-of-armor",
      "crown-tundra",
      "kitakami",
      "hyperspace"
    ]
  },
  {
    "name": "cufant",
    "id": 878,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 302,
      "crown-tundra": 108,
      "scarlet-violet": 124
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "scarlet-violet"
    ]
  },
  {
    "name": "copperajah",
    "id": 879,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 303,
      "crown-tundra": 109,
      "scarlet-violet": 125
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "scarlet-violet"
    ]
  },
  {
    "name": "dracozolt",
    "id": 880,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 374
    },
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "arctozolt",
    "id": 881,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 375
    },
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "dracovish",
    "id": 882,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 376
    },
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "arctovish",
    "id": 883,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 377
    },
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "duraludon",
    "id": 884,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 371,
      "blueberry": 161
    },
    "games": [
      "sword-shield",
      "blueberry"
    ]
  },
  {
    "name": "dreepy",
    "id": 885,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 395,
      "crown-tundra": 110,
      "scarlet-violet": 306
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "scarlet-violet"
    ]
  },
  {
    "name": "drakloak",
    "id": 886,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 396,
      "crown-tundra": 111,
      "scarlet-violet": 307
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "scarlet-violet"
    ]
  },
  {
    "name": "dragapult",
    "id": 887,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 397,
      "crown-tundra": 112,
      "scarlet-violet": 308
    },
    "games": [
      "sword-shield",
      "crown-tundra",
      "scarlet-violet"
    ]
  },
  {
    "name": "zacian",
    "id": 888,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 398
    },
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "zamazenta",
    "id": 889,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 399
    },
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "eternatus",
    "id": 890,
    "gen": "generation-viii",
    "regions": {
      "sword-shield": 400
    },
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "kubfu",
    "id": 891,
    "gen": "generation-viii",
    "regions": {
      "isle-of-armor": 100
    },
    "games": [
      "isle-of-armor"
    ]
  },
  {
    "name": "urshifu",
    "id": 892,
    "gen": "generation-viii",
    "regions": {
      "isle-of-armor": 101
    },
    "games": [
      "isle-of-armor"
    ]
  },
  {
    "name": "zarude",
    "id": 893,
    "gen": "generation-viii",
    "regions": {
      "isle-of-armor": 211
    },
    "games": [
      "isle-of-armor"
    ]
  },
  {
    "name": "regieleki",
    "id": 894,
    "gen": "generation-viii",
    "regions": {
      "crown-tundra": 200
    },
    "games": [
      "crown-tundra"
    ]
  },
  {
    "name": "regidrago",
    "id": 895,
    "gen": "generation-viii",
    "regions": {
      "crown-tundra": 201
    },
    "games": [
      "crown-tundra"
    ]
  },
  {
    "name": "glastrier",
    "id": 896,
    "gen": "generation-viii",
    "regions": {
      "crown-tundra": 208
    },
    "games": [
      "crown-tundra"
    ]
  },
  {
    "name": "spectrier",
    "id": 897,
    "gen": "generation-viii",
    "regions": {
      "crown-tundra": 209
    },
    "games": [
      "crown-tundra"
    ]
  },
  {
    "name": "calyrex",
    "id": 898,
    "gen": "generation-viii",
    "regions": {
      "crown-tundra": 210
    },
    "games": [
      "crown-tundra"
    ]
  },
  {
    "name": "wyrdeer",
    "id": 899,
    "gen": "generation-viii",
    "regions": {
      "legends-arceus": 50
    },
    "games": [
      "legends-arceus"
    ]
  },
  {
    "name": "kleavor",
    "id": 900,
    "gen": "generation-viii",
    "regions": {
      "legends-arceus": 73,
      "blueberry": 21,
      "hyperspace": 69
    },
    "games": [
      "legends-arceus",
      "blueberry",
      "hyperspace"
    ]
  },
  {
    "name": "ursaluna",
    "id": 901,
    "gen": "generation-viii",
    "regions": {
      "legends-arceus": 114,
      "kitakami": 196
    },
    "games": [
      "legends-arceus",
      "kitakami"
    ]
  },
  {
    "name": "basculegion",
    "id": 902,
    "gen": "generation-viii",
    "regions": {
      "legends-arceus": 167,
      "kitakami": 195
    },
    "games": [
      "legends-arceus",
      "kitakami"
    ]
  },
  {
    "name": "sneasler",
    "id": 903,
    "gen": "generation-viii",
    "regions": {
      "legends-arceus": 203
    },
    "games": [
      "legends-arceus"
    ]
  },
  {
    "name": "overqwil",
    "id": 904,
    "gen": "generation-viii",
    "regions": {
      "legends-arceus": 85,
      "blueberry": 147,
      "hyperspace": 38
    },
    "games": [
      "legends-arceus",
      "blueberry",
      "hyperspace"
    ]
  },
  {
    "name": "enamorus",
    "id": 905,
    "gen": "generation-viii",
    "regions": {
      "legends-arceus": 234
    },
    "games": [
      "legends-arceus"
    ]
  },
  {
    "name": "sprigatito",
    "id": 906,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 1
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "floragato",
    "id": 907,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 2
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "meowscarada",
    "id": 908,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 3
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "fuecoco",
    "id": 909,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 4
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "crocalor",
    "id": 910,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 5
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "skeledirge",
    "id": 911,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 6
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "quaxly",
    "id": 912,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 7
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "quaxwell",
    "id": 913,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 8
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "quaquaval",
    "id": 914,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 9
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "lechonk",
    "id": 915,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 10
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "oinkologne",
    "id": 916,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 11
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "tarountula",
    "id": 917,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 12
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "spidops",
    "id": 918,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 13
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "nymble",
    "id": 919,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 14
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "lokix",
    "id": 920,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 15
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "pawmi",
    "id": 921,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 22
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "pawmo",
    "id": 922,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 23
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "pawmot",
    "id": 923,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 24
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "tandemaus",
    "id": 924,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 71,
      "kitakami": 97
    },
    "games": [
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "maushold",
    "id": 925,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 72,
      "kitakami": 98
    },
    "games": [
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "fidough",
    "id": 926,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 76,
      "hyperspace": 79
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "dachsbun",
    "id": 927,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 77,
      "hyperspace": 80
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "smoliv",
    "id": 928,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 84
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "dolliv",
    "id": 929,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 85
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "arboliva",
    "id": 930,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 86
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "squawkabilly",
    "id": 931,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 113,
      "hyperspace": 86
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "nacli",
    "id": 932,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 129,
      "hyperspace": 89
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "naclstack",
    "id": 933,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 130,
      "hyperspace": 90
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "garganacl",
    "id": 934,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 131,
      "hyperspace": 91
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "charcadet",
    "id": 935,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 165,
      "hyperspace": 97
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "armarouge",
    "id": 936,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 166,
      "hyperspace": 98
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "ceruledge",
    "id": 937,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 167,
      "hyperspace": 99
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "tadbulb",
    "id": 938,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 170
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "bellibolt",
    "id": 939,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 171
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "wattrel",
    "id": 940,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 177
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "kilowattrel",
    "id": 941,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 178
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "maschiff",
    "id": 942,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 196,
      "hyperspace": 100
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "mabosstiff",
    "id": 943,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 197,
      "hyperspace": 101
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "shroodle",
    "id": 944,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 202,
      "hyperspace": 104
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "grafaiai",
    "id": 945,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 203,
      "hyperspace": 105
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "bramblin",
    "id": 946,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 242
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "brambleghast",
    "id": 947,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 243
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "toedscool",
    "id": 948,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 244,
      "kitakami": 74
    },
    "games": [
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "toedscruel",
    "id": 949,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 245,
      "kitakami": 75
    },
    "games": [
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "klawf",
    "id": 950,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 249
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "capsakid",
    "id": 951,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 250,
      "hyperspace": 14
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "scovillain",
    "id": 952,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 251,
      "hyperspace": 15
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "rellor",
    "id": 953,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 254,
      "blueberry": 30
    },
    "games": [
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "rabsca",
    "id": 954,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 255,
      "blueberry": 31
    },
    "games": [
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "flittle",
    "id": 955,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 263
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "espathra",
    "id": 956,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 264
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "tinkatink",
    "id": 957,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 279,
      "hyperspace": 16
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "tinkatuff",
    "id": 958,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 280,
      "hyperspace": 17
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "tinkaton",
    "id": 959,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 281,
      "hyperspace": 18
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "wiglett",
    "id": 960,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 288
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "wugtrio",
    "id": 961,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 289
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "bombirdier",
    "id": 962,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 290,
      "kitakami": 134
    },
    "games": [
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "finizen",
    "id": 963,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 291
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "palafin",
    "id": 964,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 292
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "varoom",
    "id": 965,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 294
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "revavroom",
    "id": 966,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 295
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "cyclizar",
    "id": 967,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 296,
      "hyperspace": 19
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "orthworm",
    "id": 968,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 297,
      "kitakami": 96
    },
    "games": [
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "glimmet",
    "id": 969,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 309,
      "kitakami": 156,
      "hyperspace": 20
    },
    "games": [
      "scarlet-violet",
      "kitakami",
      "hyperspace"
    ]
  },
  {
    "name": "glimmora",
    "id": 970,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 310,
      "kitakami": 157,
      "hyperspace": 21
    },
    "games": [
      "scarlet-violet",
      "kitakami",
      "hyperspace"
    ]
  },
  {
    "name": "greavard",
    "id": 971,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 312,
      "hyperspace": 23
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "houndstone",
    "id": 972,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 313,
      "hyperspace": 24
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "flamigo",
    "id": 973,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 347,
      "hyperspace": 28
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "cetoddle",
    "id": 974,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 362
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "cetitan",
    "id": 975,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 363
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "veluza",
    "id": 976,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 374
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "dondozo",
    "id": 977,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 375,
      "hyperspace": 30
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "tatsugiri",
    "id": 978,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 376,
      "hyperspace": 31
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "annihilape",
    "id": 979,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 160,
      "kitakami": 101,
      "hyperspace": 3
    },
    "games": [
      "scarlet-violet",
      "kitakami",
      "hyperspace"
    ]
  },
  {
    "name": "clodsire",
    "id": 980,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 54
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "farigiraf",
    "id": 981,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 193,
      "blueberry": 26
    },
    "games": [
      "scarlet-violet",
      "blueberry"
    ]
  },
  {
    "name": "dudunsparce",
    "id": 982,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 189,
      "kitakami": 161
    },
    "games": [
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "kingambit",
    "id": 983,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 370,
      "kitakami": 188
    },
    "games": [
      "scarlet-violet",
      "kitakami"
    ]
  },
  {
    "name": "great-tusk",
    "id": 984,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 377
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "scream-tail",
    "id": 985,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 378
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "brute-bonnet",
    "id": 986,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 379
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "flutter-mane",
    "id": 987,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 380
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "slither-wing",
    "id": 988,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 381
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "sandy-shocks",
    "id": 989,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 382
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "iron-treads",
    "id": 990,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 383
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "iron-bundle",
    "id": 991,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 384
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "iron-hands",
    "id": 992,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 385
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "iron-jugulis",
    "id": 993,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 386
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "iron-moth",
    "id": 994,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 387
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "iron-thorns",
    "id": 995,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 388
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "frigibax",
    "id": 996,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 389,
      "hyperspace": 32
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "arctibax",
    "id": 997,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 390,
      "hyperspace": 33
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "baxcalibur",
    "id": 998,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 391,
      "hyperspace": 34
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "gimmighoul",
    "id": 999,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 392,
      "hyperspace": 35
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "gholdengo",
    "id": 1000,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 393,
      "hyperspace": 36
    },
    "games": [
      "scarlet-violet",
      "hyperspace"
    ]
  },
  {
    "name": "wo-chien",
    "id": 1001,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 394
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "chien-pao",
    "id": 1002,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 395
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "ting-lu",
    "id": 1003,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 396
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "chi-yu",
    "id": 1004,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 397
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "roaring-moon",
    "id": 1005,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 398
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "iron-valiant",
    "id": 1006,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 399
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "koraidon",
    "id": 1007,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 400
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "miraidon",
    "id": 1008,
    "gen": "generation-ix",
    "regions": {
      "scarlet-violet": 401
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "walking-wake",
    "id": 1009,
    "gen": "generation-ix",
    "regions": {
      "blueberry": 241
    },
    "games": [
      "blueberry"
    ]
  },
  {
    "name": "iron-leaves",
    "id": 1010,
    "gen": "generation-ix",
    "regions": {
      "blueberry": 242
    },
    "games": [
      "blueberry"
    ]
  },
  {
    "name": "dipplin",
    "id": 1011,
    "gen": "generation-ix",
    "regions": {
      "kitakami": 36
    },
    "games": [
      "kitakami"
    ]
  },
  {
    "name": "poltchageist",
    "id": 1012,
    "gen": "generation-ix",
    "regions": {
      "kitakami": 76
    },
    "games": [
      "kitakami"
    ]
  },
  {
    "name": "sinistcha",
    "id": 1013,
    "gen": "generation-ix",
    "regions": {
      "kitakami": 77
    },
    "games": [
      "kitakami"
    ]
  },
  {
    "name": "okidogi",
    "id": 1014,
    "gen": "generation-ix",
    "regions": {
      "kitakami": 197
    },
    "games": [
      "kitakami"
    ]
  },
  {
    "name": "munkidori",
    "id": 1015,
    "gen": "generation-ix",
    "regions": {
      "kitakami": 198
    },
    "games": [
      "kitakami"
    ]
  },
  {
    "name": "fezandipiti",
    "id": 1016,
    "gen": "generation-ix",
    "regions": {
      "kitakami": 199
    },
    "games": [
      "kitakami"
    ]
  },
  {
    "name": "ogerpon",
    "id": 1017,
    "gen": "generation-ix",
    "regions": {
      "kitakami": 200
    },
    "games": [
      "kitakami"
    ]
  },
  {
    "name": "archaludon",
    "id": 1018,
    "gen": "generation-ix",
    "regions": {
      "blueberry": 162
    },
    "games": [
      "blueberry"
    ]
  },
  {
    "name": "hydrapple",
    "id": 1019,
    "gen": "generation-ix",
    "regions": {
      "blueberry": 163
    },
    "games": [
      "blueberry"
    ]
  },
  {
    "name": "gouging-fire",
    "id": 1020,
    "gen": "generation-ix",
    "regions": {
      "blueberry": 236
    },
    "games": [
      "blueberry"
    ]
  },
  {
    "name": "raging-bolt",
    "id": 1021,
    "gen": "generation-ix",
    "regions": {
      "blueberry": 237
    },
    "games": [
      "blueberry"
    ]
  },
  {
    "name": "iron-boulder",
    "id": 1022,
    "gen": "generation-ix",
    "regions": {
      "blueberry": 239
    },
    "games": [
      "blueberry"
    ]
  },
  {
    "name": "iron-crown",
    "id": 1023,
    "gen": "generation-ix",
    "regions": {
      "blueberry": 238
    },
    "games": [
      "blueberry"
    ]
  },
  {
    "name": "terapagos",
    "id": 1024,
    "gen": "generation-ix",
    "regions": {
      "blueberry": 240
    },
    "games": [
      "blueberry"
    ]
  },
  {
    "name": "pecharunt",
    "id": 1025,
    "gen": "generation-ix",
    "regions": {
      "blueberry": 243
    },
    "games": [
      "blueberry"
    ]
  }
];
export const variantPokemons = [
  {
    "name": "growlithe-hisui",
    "id": 10229,
    "labelId": 58,
    "regions": {
      "legends-arceus": 150
    },
    "games": [
      "legends-arceus"
    ]
  },
  {
    "name": "arcanine-hisui",
    "id": 10230,
    "labelId": 59,
    "regions": {
      "legends-arceus": 151
    },
    "games": [
      "legends-arceus"
    ]
  },
  {
    "name": "voltorb-hisui",
    "id": 10231,
    "labelId": 100,
    "regions": {
      "legends-arceus": 192
    },
    "games": [
      "legends-arceus"
    ]
  },
  {
    "name": "electrode-hisui",
    "id": 10232,
    "labelId": 101,
    "regions": {
      "legends-arceus": 193
    },
    "games": [
      "legends-arceus"
    ]
  },
  {
    "name": "typhlosion-hisui",
    "id": 10233,
    "labelId": 157,
    "regions": {
      "legends-arceus": 6
    },
    "games": [
      "legends-arceus"
    ]
  },
  {
    "name": "qwilfish-hisui",
    "id": 10234,
    "labelId": 211,
    "regions": {
      "legends-arceus": 84
    },
    "games": [
      "legends-arceus"
    ]
  },
  {
    "name": "sneasel-hisui",
    "id": 10235,
    "labelId": 215,
    "regions": {
      "legends-arceus": 202
    },
    "games": [
      "legends-arceus"
    ]
  },
  {
    "name": "samurott-hisui",
    "id": 10236,
    "labelId": 503,
    "regions": {
      "legends-arceus": 9
    },
    "games": [
      "legends-arceus"
    ]
  },
  {
    "name": "lilligant-hisui",
    "id": 10237,
    "labelId": 549,
    "regions": {
      "legends-arceus": 94
    },
    "games": [
      "legends-arceus"
    ]
  },
  {
    "name": "zorua-hisui",
    "id": 10238,
    "labelId": 570,
    "regions": {
      "legends-arceus": 219
    },
    "games": [
      "legends-arceus"
    ]
  },
  {
    "name": "zoroark-hisui",
    "id": 10239,
    "labelId": 571,
    "regions": {
      "legends-arceus": 220
    },
    "games": [
      "legends-arceus"
    ]
  },
  {
    "name": "braviary-hisui",
    "id": 10240,
    "labelId": 628,
    "regions": {
      "legends-arceus": 222
    },
    "games": [
      "legends-arceus"
    ]
  },
  {
    "name": "sliggoo-hisui",
    "id": 10241,
    "labelId": 705,
    "regions": {
      "legends-arceus": 116
    },
    "games": [
      "legends-arceus"
    ]
  },
  {
    "name": "goodra-hisui",
    "id": 10242,
    "labelId": 706,
    "regions": {
      "legends-arceus": 117
    },
    "games": [
      "legends-arceus"
    ]
  },
  {
    "name": "avalugg-hisui",
    "id": 10243,
    "labelId": 713,
    "regions": {
      "legends-arceus": 216
    },
    "games": [
      "legends-arceus"
    ]
  },
  {
    "name": "decidueye-hisui",
    "id": 10244,
    "labelId": 724,
    "regions": {
      "legends-arceus": 3
    },
    "games": [
      "legends-arceus"
    ]
  },
  {
    "name": "rattata-alola",
    "id": 10091,
    "labelId": 19,
    "regions": {
      "sun-moon": 15,
      "ultra-sun-ultra-moon": 15
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "raticate-alola",
    "id": 10092,
    "labelId": 20,
    "regions": {
      "sun-moon": 16,
      "ultra-sun-ultra-moon": 16
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "raichu-alola",
    "id": 10100,
    "labelId": 26,
    "regions": {
      "sun-moon": 26,
      "ultra-sun-ultra-moon": 33
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "sandshrew-alola",
    "id": 10101,
    "labelId": 27,
    "regions": {
      "sun-moon": 251,
      "ultra-sun-ultra-moon": 328
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "sandslash-alola",
    "id": 10102,
    "labelId": 28,
    "regions": {
      "sun-moon": 252,
      "ultra-sun-ultra-moon": 329
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "vulpix-alola",
    "id": 10103,
    "labelId": 37,
    "regions": {
      "sun-moon": 253,
      "ultra-sun-ultra-moon": 330
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "ninetales-alola",
    "id": 10104,
    "labelId": 38,
    "regions": {
      "sun-moon": 254,
      "ultra-sun-ultra-moon": 331
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "diglett-alola",
    "id": 10105,
    "labelId": 50,
    "regions": {
      "sun-moon": 71,
      "ultra-sun-ultra-moon": 85
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "dugtrio-alola",
    "id": 10106,
    "labelId": 51,
    "regions": {
      "sun-moon": 72,
      "ultra-sun-ultra-moon": 86
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "meowth-alola",
    "id": 10107,
    "labelId": 52,
    "regions": {
      "sun-moon": 45,
      "ultra-sun-ultra-moon": 52
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "persian-alola",
    "id": 10108,
    "labelId": 53,
    "regions": {
      "sun-moon": 46,
      "ultra-sun-ultra-moon": 53
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "geodude-alola",
    "id": 10109,
    "labelId": 74,
    "regions": {
      "sun-moon": 229,
      "ultra-sun-ultra-moon": 298
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "graveler-alola",
    "id": 10110,
    "labelId": 75,
    "regions": {
      "sun-moon": 230,
      "ultra-sun-ultra-moon": 299
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "golem-alola",
    "id": 10111,
    "labelId": 76,
    "regions": {
      "sun-moon": 231,
      "ultra-sun-ultra-moon": 300
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "grimer-alola",
    "id": 10112,
    "labelId": 88,
    "regions": {
      "sun-moon": 50,
      "ultra-sun-ultra-moon": 57
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "muk-alola",
    "id": 10113,
    "labelId": 89,
    "regions": {
      "sun-moon": 51,
      "ultra-sun-ultra-moon": 58
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "exeggutor-alola",
    "id": 10114,
    "labelId": 103,
    "regions": {
      "sun-moon": 270,
      "ultra-sun-ultra-moon": 356
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "marowak-alola",
    "id": 10115,
    "labelId": 105,
    "regions": {
      "sun-moon": 164,
      "ultra-sun-ultra-moon": 198
    },
    "games": [
      "sun-moon",
      "ultra-sun-ultra-moon"
    ]
  },
  {
    "name": "meowth-galar",
    "id": 10161,
    "labelId": 52,
    "regions": {
      "sword-shield": 182
    },
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "ponyta-galar",
    "id": 10162,
    "labelId": 77,
    "regions": {
      "sword-shield": 333,
      "crown-tundra": 105
    },
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "rapidash-galar",
    "id": 10163,
    "labelId": 78,
    "regions": {
      "sword-shield": 334,
      "crown-tundra": 106
    },
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "slowpoke-galar",
    "id": 10164,
    "labelId": 79,
    "regions": {
      "isle-of-armor": 1
    },
    "games": [
      "isle-of-armor"
    ]
  },
  {
    "name": "slowbro-galar",
    "id": 10165,
    "labelId": 80,
    "regions": {
      "isle-of-armor": 2
    },
    "games": [
      "isle-of-armor"
    ]
  },
  {
    "name": "slowbro-mega",
    "id": 10071,
    "labelId": 80,
    "games": [
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "farfetchd-galar",
    "id": 10166,
    "labelId": 83,
    "regions": {
      "sword-shield": 218
    },
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "weezing-galar",
    "id": 10167,
    "labelId": 110,
    "regions": {
      "sword-shield": 251
    },
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "mr-mime-galar",
    "labelName": "mr-mime",
    "id": 10168,
    "labelId": 122,
    "regions": {
      "sword-shield": 365,
      "crown-tundra": 11
    },
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "articuno-galar",
    "id": 10169,
    "labelId": 144,
    "regions": {
      "crown-tundra": 202
    },
    "games": [
      "crown-tundra"
    ]
  },
  {
    "name": "zapdos-galar",
    "id": 10170,
    "labelId": 145,
    "regions": {
      "crown-tundra": 203
    },
    "games": [
      "crown-tundra"
    ]
  },
  {
    "name": "moltres-galar",
    "id": 10171,
    "labelId": 146,
    "regions": {
      "crown-tundra": 204
    },
    "games": [
      "crown-tundra"
    ]
  },
  {
    "name": "slowking-galar",
    "id": 10172,
    "labelId": 199,
    "regions": {
      "isle-of-armor": 3
    },
    "games": [
      "isle-of-armor"
    ]
  },
  {
    "name": "corsola-galar",
    "id": 10173,
    "labelId": 222,
    "regions": {
      "sword-shield": 236
    },
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "zigzagoon-galar",
    "id": 10174,
    "labelId": 263,
    "regions": {
      "sword-shield": 31,
      "crown-tundra": 71
    },
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "linoone-galar",
    "id": 10175,
    "labelId": 264,
    "regions": {
      "sword-shield": 32,
      "crown-tundra": 72
    },
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "darumaka-galar",
    "id": 10176,
    "labelId": 554,
    "regions": {
      "sword-shield": 367,
      "crown-tundra": 103
    },
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "darmanitan-galar",
    "id": 10177,
    "labelId": 555,
    "regions": {
      "sword-shield": 368,
      "crown-tundra": 104
    },
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "yamask-galar",
    "id": 10179,
    "labelId": 562,
    "regions": {
      "sword-shield": 327
    },
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "stunfisk-galar",
    "id": 10180,
    "labelId": 618,
    "regions": {
      "sword-shield": 226
    },
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "tauros-paldea-combat-breed",
    "id": 10250,
    "labelId": 128,
    "regions": {
      "scarlet-violet": 223
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "tauros-paldea-blaze-breed",
    "id": 10251,
    "labelId": 128,
    "regions": {},
    "games": []
  },
  {
    "name": "tauros-paldea-aqua-breed",
    "id": 10252,
    "labelId": 128,
    "regions": {},
    "games": []
  },
  {
    "name": "wooper-paldea",
    "id": 10253,
    "labelId": 194,
    "regions": {
      "scarlet-violet": 53
    },
    "games": [
      "scarlet-violet"
    ]
  },
  {
    "name": "falinks-mega",
    "id": 10303,
    "labelId": 870,
    "gen": "generation-viii",
    "regions": {},
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "duraludon-gmax",
    "id": 10225,
    "labelId": 884,
    "regions": {},
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "baxcalibur-mega",
    "id": 10325,
    "labelId": 998,
    "regions": {},
    "games": [
      "hyperspace"
    ]
  },
  {
    "name": "tatsugiri-curly-mega",
    "id": 10322,
    "labelId": 978,
    "regions": {},
    "games": [
      "hyperspace"
    ]
  },
  {
    "name": "tatsugiri-droopy-mega",
    "id": 10323,
    "labelId": 978,
    "regions": {},
    "games": [
      "hyperspace"
    ]
  },
  {
    "name": "tatsugiri-stretchy-mega",
    "id": 10324,
    "labelId": 978,
    "regions": {},
    "games": [
      "hyperspace"
    ]
  },
  {
    "name": "tatsugiri-stretchy-mega",
    "id": 10324,
    "labelId": 978,
    "regions": {},
    "games": [
      "hyperspace"
    ]
  },
  {
    "name": "scovillain-mega",
    "id": 10320,
    "labelId": 952,
    "regions": {},
    "games": [
      "hyperspace"
    ]
  },
  {
    "name": "glimmora-mega",
    "id": 10321,
    "labelId": 970,
    "regions": {},
    "games": [
      "hyperspace"
    ]
  },
  {
    "name": "copperajah-gmax",
    "id": 10224,
    "labelId": 879,
    "regions": {},
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "alcremie-gmax",
    "id": 10223,
    "labelId": 869,
    "regions": {},
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "grimmsnarl-gmax",
    "id": 10222,
    "labelId": 861,
    "regions": {},
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "Centiskorch-gmax",
    "id": 10221,
    "labelId": 858,
    "regions": {},
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "Centiskorch-gmax",
    "id": 10220,
    "labelId": 851,
    "regions": {},
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "toxtricity-amped-gmax",
    "id": 10219,
    "labelId": 849,
    "regions": {},
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "toxtricity-low-key-gmax",
    "id": 10228,
    "labelId": 849,
    "regions": {},
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "sandaconda-gmax",
    "id": 10218,
    "labelId": 844,
    "regions": {},
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "appletun-gmax",
    "id": 10217,
    "labelId": 842,
    "regions": {},
    "games": [
      "sword-shield",
      "isle-of-armor"
    ]
  },
  {
    "name": "flapple-gmax",
    "id": 10216,
    "labelId": 841,
    "regions": {},
    "games": [
      "sword-shield",
      "isle-of-armor"
    ]
  },
  {
    "name": "coalossal-gmax",
    "id": 10215,
    "labelId": 839,
    "regions": {},
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "drednaw-gmax",
    "id": 10214,
    "labelId": 834,
    "regions": {},
    "games": [
      "sword-shield",
      "isle-of-armor"
    ]
  },
  {
    "name": "orbeetle-gmax",
    "id": 10213,
    "labelId": 826,
    "regions": {},
    "games": [
      "sword-shield",
      "isle-of-armor"
    ]
  },
  {
    "name": "corviknight-gmax",
    "id": 10212,
    "labelId": 823,
    "regions": {},
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "inteleon-gmax",
    "id": 10211,
    "labelId": 818,
    "regions": {},
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "cinderace-gmax",
    "id": 10210,
    "labelId": 815,
    "regions": {},
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "rillaboom-gmax",
    "id": 10209,
    "labelId": 812,
    "regions": {},
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "Melmetal-gmax",
    "id": 10208,
    "labelId": 809,
    "regions": {},
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "zeraora-mega",
    "id": 10319,
    "labelId": 807,
    "regions": {},
    "games": [
      "hyperspace"
    ]
  },
  {
    "name": "magearna-mega",
    "id": 10317,
    "labelId": 801,
    "regions": {},
    "games": [
      "hyperspace"
    ]
  },
  {
    "name": "drampa-mega",
    "id": 10302,
    "labelId": 780,
    "regions": {},
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "pyroar-mega",
    "id": 10295,
    "labelId": 668,
    "regions": {},
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "golisopod-mega",
    "id": 10316,
    "labelId": 768,
    "regions": {},
    "games": [
      "hyperspace"
    ]
  },
  {
    "name": "crabominable-mega",
    "id": 10315,
    "labelId": 740,
    "regions": {},
    "games": [
      "hyperspace"
    ]
  },
  {
    "name": "pyroar-mega",
    "id": 10075,
    "labelId": 719,
    "regions": {},
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "zygarde-mega",
    "id": 10301,
    "labelId": 718,
    "regions": {},
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "hawlucha-mega",
    "id": 10300,
    "labelId": 701,
    "regions": {},
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "dragalge-mega",
    "id": 10299,
    "labelId": 691,
    "regions": {},
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "barbaracle-mega",
    "id": 10298,
    "labelId": 689,
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "malamar-mega",
    "id": 10297,
    "labelId": 687,
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "meowstic-mega",
    "id": 10314,
    "labelId": 678,
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "floette-eternal",
    "id": 10061,
    "labelId": 670,
    "games": [
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "floette-mega",
    "id": 10296,
    "labelId": 670,
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "greninja-battle-bond",
    "id": 10116,
    "labelId": 670,
    "games": [
      "x-y",
    ]
  },
  {
    "name": "greninja-mega",
    "id": 10294,
    "labelId": 670,
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "delphox-mega",
    "id": 10293,
    "labelId": 655,
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "chesnaught-mega",
    "id": 10292,
    "labelId": 652,
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "golurk-mega",
    "id": 10313,
    "labelId": 623,
    "games": [
      "hyperspace"
    ]
  },
  {
    "name": "chandelure-mega",
    "id": 10291,
    "labelId": 609,
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "eelektross-mega",
    "id": 10290,
    "labelId": 604,
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "garbodor-gmax",
    "id": 10207,
    "labelId": 569,
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "scrafty-mega",
    "id": 10289,
    "labelId": 560,
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "scolipede-mega",
    "id": 10288,
    "labelId": 545,
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "audino-mega",
    "id": 10069,
    "labelId": 531,
    "games": [
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "excadrill-mega",
    "id": 10287,
    "labelId": 530,
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "emboar-mega",
    "id": 10286,
    "labelId": 500,
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "darkrai-mega",
    "id": 10312,
    "labelId": 491,
    "games": [
      "hyperspace"
    ]
  },
  {
    "name": "heatran-mega",
    "id": 10311,
    "labelId": 485,
    "games": [
      "hyperspace"
    ]
  },
  {
    "name": "froslass-mega",
    "id": 10285,
    "labelId": 478,
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "gallade-mega",
    "id": 10068,
    "labelId": 475,
    "games": [
      "x-y",
      "omega-ruby-alpha-sapphire",
      "legends-za"
    ]
  },
  {
    "name": "gardevoir-mega",
    "id": 10051,
    "labelId": 282,
    "games": [
      "x-y",
      "omega-ruby-alpha-sapphire",
      "legends-za"
    ]
  },
  {
    "name": "abomasnow-mega",
    "id": 10060,
    "labelId": 460,
    "games": [
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "lucario-mega",
    "id": 10059,
    "labelId": 448,
    "games": [
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "lucario-mega-z",
    "id": 10310,
    "labelId": 448,
    "games": [
      "hyperspace"
    ]
  },
  {
    "name": "garchomp-mega",
    "id": 10058,
    "labelId": 445,
    "games": [
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "garchomp-mega-z",
    "id": 10309,
    "labelId": 445,
    "games": [
      "hyperspace"
    ]
  },
  {
    "name": "lopunny-mega",
    "id": 10088,
    "labelId": 428,
    "games": [
      "omega-ruby-alpha-sapphire",
      "legends-za",
      "hyperspace"
    ]
  },
  {
    "name": "staraptor-mega",
    "id": 10308,
    "labelId": 398,
    "games": [
      "hyperspace"
    ]
  },
  {
    "name": "rayquaza-mega",
    "id": 10079,
    "labelId": 384,
    "games": [
      "omega-ruby-alpha-sapphire",
      "hyperspace"
    ]
  },
  {
    "name": "latios-mega",
    "id": 10063,
    "labelId": 381,
    "games": [
      "omega-ruby-alpha-sapphire",
      "hyperspace"
    ]
  },
  {
    "name": "latias-mega",
    "id": 10062,
    "labelId": 380,
    "games": [
      "omega-ruby-alpha-sapphire",
      "hyperspace"
    ]
  },
  {
    "name": "metagross-mega",
    "id": 10076,
    "labelId": 376,
    "games": [
      "omega-ruby-alpha-sapphire",
      "legends-za"
    ]
  },
  {
    "name": "metagross-mega",
    "id": 10089,
    "labelId": 373,
    "games": [
      "omega-ruby-alpha-sapphire",
      "legends-za"
    ]
  },
  {
    "name": "metagross-mega",
    "id": 10089,
    "labelId": 373,
    "games": [
      "omega-ruby-alpha-sapphire",
      "legends-za"
    ]
  },
  {
    "name": "glalie-mega",
    "id": 10074,
    "labelId": 362,
    "games": [
      "omega-ruby-alpha-sapphire",
      "legends-za"
    ]
  },
  {
    "name": "absol-mega",
    "id": 10057,
    "labelId": 359,
    "games": [
      "x-y",
      "omega-ruby-alpha-sapphire",
      "legends-za"
    ]
  },
  {
    "name": "absol-mega-z",
    "id": 10307,
    "labelId": 359,
    "games": [
      "hyperspace"
    ]
  },
  {
    "name": "chimecho-mega",
    "id": 10306,
    "labelId": 358,
    "games": [
      "hyperspace"
    ]
  },
  {
    "name": "banette-mega",
    "id": 10056,
    "labelId": 354,
    "games": [
      "x-y",
      "omega-ruby-alpha-sapphire",
      "legends-za"
    ]
  },
  {
    "name": "altaria-mega",
    "id": 10067,
    "labelId": 334,
    "games": [
      "x-y",
      "omega-ruby-alpha-sapphire",
      "legends-za"
    ]
  },
  {
    "name": "camerupt-mega",
    "id": 10087,
    "labelId": 323,
    "games": [
      "x-y",
      "omega-ruby-alpha-sapphire",
      "legends-za"
    ]
  },
  {
    "name": "sharpedo-mega",
    "id": 10070,
    "labelId": 319,
    "games": [
      "x-y",
      "omega-ruby-alpha-sapphire",
      "legends-za"
    ]
  },
  {
    "name": "manectric-mega",
    "id": 10055,
    "labelId": 310,
    "games": [
      "x-y",
      "omega-ruby-alpha-sapphire",
      "legends-za"
    ]
  },
  {
    "name": "medicham-mega",
    "id": 10054,
    "labelId": 308,
    "games": [
      "x-y",
      "omega-ruby-alpha-sapphire",
      "legends-za"
    ]
  },
  {
    "name": "aggron-mega",
    "id": 10053,
    "labelId": 306,
    "games": [
      "x-y",
      "omega-ruby-alpha-sapphire",
      "legends-za"
    ]
  },
  {
    "name": "mawile-mega",
    "id": 10052,
    "labelId": 303,
    "games": [
      "x-y",
      "omega-ruby-alpha-sapphire",
      "legends-za"
    ]
  },
  {
    "name": "sableye-mega",
    "id": 10066,
    "labelId": 302,
    "games": [
      "x-y",
      "omega-ruby-alpha-sapphire",
      "legends-za"
    ]
  },
  {
    "name": "swampert-mega",
    "id": 10064,
    "labelId": 260,
    "games": [
      "omega-ruby-alpha-sapphire",
      "hyperspace"
    ]
  },
  {
    "name": "blaziken-mega",
    "id": 10050,
    "labelId": 257,
    "games": [
      "omega-ruby-alpha-sapphire",
      "hyperspace"
    ]
  },
  {
    "name": "sceptile-mega",
    "id": 10065,
    "labelId": 254,
    "games": [
      "omega-ruby-alpha-sapphire",
      "hyperspace"
    ]
  },
  {
    "name": "tyranitar-mega",
    "id": 10049,
    "labelId": 248,
    "games": [
      "x-y",
      "hyperspace"
    ]
  },
  {
    "name": "houndoom-mega",
    "id": 10048,
    "labelId": 229,
    "games": [
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "skarmory-mega",
    "id": 10284,
    "labelId": 227,
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "heracross-mega",
    "id": 10047,
    "labelId": 214,
    "games": [
      "x-y",
      "omega-ruby-alpha-sapphire",
      "legends-za"
    ]
  },
  {
    "name": "scizor-mega",
    "id": 10046,
    "labelId": 212,
    "games": [
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "steelix-mega",
    "id": 10072,
    "labelId": 208,
    "games": [
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "ampharos-mega",
    "id": 10045,
    "labelId": 181,
    "games": [
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "feraligatr-mega",
    "id": 10283,
    "labelId": 160,
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "meganium-mega",
    "id": 10282,
    "labelId": 154,
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "mewtwo-mega-x",
    "id": 10043,
    "labelId": 150,
    "games": [
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "mewtwo-mega-y",
    "id": 10044,
    "labelId": 150,
    "games": [
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "dragonite-mega",
    "id": 10281,
    "labelId": 149,
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "snorlax-gmax",
    "id": 10206,
    "labelId": 143,
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "aerodactyl-gmax",
    "id": 10042,
    "labelId": 142,
    "games": [
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "eevee-gmax",
    "id": 10205,
    "labelId": 133,
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "lapras-gmax",
    "id": 10204,
    "labelId": 131,
    "games": [
      "sword-shield",
      "crown-tundra"
    ]
  },
  {
    "name": "gyarados-mega",
    "id": 10041,
    "labelId": 130,
    "games": [
      "x-y",
      "omega-ruby-alpha-sapphire",
      "legends-za"
    ]
  },
  {
    "name": "pinsir-mega",
    "id": 10040,
    "labelId": 127,
    "games": [
      "x-y",
      "omega-ruby-alpha-sapphire",
      "legends-za"
    ]
  },
  {
    "name": "starmie-mega",
    "id": 10280,
    "labelId": 121,
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "kangaskhan-mega",
    "id": 10039,
    "labelId": 115,
    "games": [
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "kingler-gmax",
    "id": 10203,
    "labelId": 99,
    "games": [
      "sword-shield",
      "isle-of-armor"
    ]
  },
  {
    "name": "gengar-mega",
    "id": 10038,
    "labelId": 94,
    "games": [
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "gengar-gmax",
    "id": 10202,
    "labelId": 94,
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "victreebel-mega",
    "id": 10279,
    "labelId": 71,
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "machamp-gmax",
    "id": 10201,
    "labelId": 68,
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "alakazam-mega",
    "id": 10037,
    "labelId": 65,
    "games": [
      "x-y",
      "omega-ruby-alpha-sapphire",
      "legends-za"
    ]
  },
  {
    "name": "meowth-gmax",
    "id": 10200,
    "labelId": 52,
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "clefable-mega",
    "id": 10278,
    "labelId": 36,
    "games": [
      "legends-za"
    ]
  },
  {
    "name": "raichu-mega-x",
    "id": 10304,
    "labelId": 26,
    "games": [
      "hyperspace"
    ]
  },
  {
    "name": "raichu-mega-y",
    "id": 10305,
    "labelId": 26,
    "games": [
      "hyperspace"
    ]
  },
  {
    "name": "pidgeot-mega",
    "id": 10073,
    "labelId": 18,
    "games": [
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "beedrill-mega",
    "id": 10090,
    "labelId": 15,
    "games": [
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "butterfree-gmax",
    "id": 10198,
    "labelId": 12,
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "blastoise-mega",
    "id": 10036,
    "labelId": 9,
    "games": [
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "blastoise-gmax",
    "id": 10197,
    "labelId": 9,
    "games": [
      "isle-of-armor"
    ]
  },
  {
    "name": "venusaur-mega",
    "id": 10033,
    "labelId": 3,
    "games": [
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "venusaur-gmax",
    "id": 10195,
    "labelId": 3,
    "games": [
      "isle-of-armor"
    ]
  },
  {
    "name": "charizard-mega-x",
    "id": 10034,
    "labelId": 6,
    "games": [
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "charizard-mega-y",
    "id": 10035,
    "labelId": 6,
    "games": [
      "x-y",
      "legends-za"
    ]
  },
  {
    "name": "charizard-gmax",
    "id": 10196,
    "labelId": 6,
    "games": [
      "sword-shield"
    ]
  },
  {
    "name": "groudon-primal",
    "id": 10078,
    "labelId": 383,
    "games": [
      "omega-ruby-alpha-sapphire"
    ]
  },
  {
    "name": "kyogre-primal",
    "id": 10077,
    "labelId": 382,
    "games": [
      "omega-ruby-alpha-sapphire"
    ]
  },
];