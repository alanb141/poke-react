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
export const replaceDash = ["great-tusk", "scream-tail", "brute-bonnet", "flutter-mane", "slither-wing", "sandy-shocks", "walking-wake", "gouging-fire", "raging-bolt", "iron-treads", "iron-bundle","iron-hands","iron-jugulis","iron-moth","iron-thorns","iron-valiant","iron-leaves","iron-boulder","iron-crown", "mr-mime", "mime-jr", "mr-rime"];

export const applinFamily = ["applin", "flapple", "appletun", "dipplin", "hydrapple"];

export const wurmpleFamily = ["wurmple", "silcoon", "cascoon", "beautify", "dustox"];

export const evolutionExceptions = ["eevee", "vaporeon", "jolteon", "flareon", "espeon", "umbreon", "leafeon", "glaceon", "sylveon", "magnemite", "magneton", "magnezone", "grubbin", "charjabug", "vikavolt"];

export const pokeTypeColours = {
  "normal": "#d3d4d3",
  "fighting": "#ffc58a",
  "flying": "#c5dff8",
  "poison": "#cca7e8",
  "ground": "#cdaf99",
  "rock": "#dad8c6",
  "bug": "#cdd495",
  "ghost": "#bda8bd",
  "steel": "#b6d4de",
  "fire": "#f49c9d",
  "water": "#9dc5f8",
  "grass": "#a8d49d",
  "electric": "#fde28a",
  "psychic": "#f8a8c2",
  "ice": "#a7edff",
  "dragon": "#afb7f1",
  "dark": "#afa8a7",
  "fairy": "#f8bef8"
};
export const radarColours = {
  "normal": "rgb(211 212 211 / 20%)",
  "fighting": "rgb(255 197 138 / 20%)",
  "flying": "rgb(197 223 248 / 20%)",
  "poison": "rgb(204 167 232 / 20%)",
  "ground": "rgb(205 175 153 / 20%)",
  "rock": "rgb(218 216 198 / 20%)",
  "bug": "rgb(205 212 149 / 20%)",
  "ghost": "rgb(189 168 189 / 20%)",
  "steel": "rgb(182 212 222 / 20%)",
  "fire": "rgb(244 156 157 / 20%)",
  "water": "rgb(157 197 248 / 20%)",
  "grass": "rgb(168 212 157 / 20%)",
  "electric": "rgb(253 226 138 / 20%)",
  "psychic": "rgb(248 168 194 / 20%)",
  "ice": "rgb(167 237 255 / 20%)",
  "dragon": "rgb(175 183 241 / 20%)",
  "dark": "rgb(175 168 167 / 20%)",
  "fairy": "rgb(248 190 248 / 20%)"
};
export const genArray = [
    ["generation-i", "generation-ii", "generation-iii", "generation-iv", "generation-v", "generation-vi", "generation-vii", "generation-viii", "generation-ix" ],
    ["Generation I", "Generation II", "Generation III", "Generation IV", "Generation V", "Generation VI", "Generation VII", "Generation VIII", "Generation IX" ]
];
export const gameArray = [
    ["red-blue", "gold-silver", "ruby-sapphire", "diamond-pearl", "platinum", "black-white", "heartgold-soulsilver", "black-2-white-2", "x-y", "sun-moon", "ultra-sun-ultra-moon", "omega-ruby-alpha-sapphire", "sword-shield", "scarlet-violet"],
    ["Red / Blue", "Gold / Silver", "Ruby / Sapphire", "Diamond / Pearl", "Platinum", "Black / White", "HeartGold / SoulSilver", "Black 2 / White 2", "X / Y",  "Sun / Moon", "Ultra Sun / Ultra Moon", "Omega Ruby / Alpha Sapphire", "Sword / Shield", "Scarlet / Violet"]
];

  
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
      "url": "https://pokeapi.co/api/v2/pokemon/1/",
      "id": 1,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1.ogg"
  },
  {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/",
      "id": 2,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/2.ogg"
  },
  {
      "name": "venusaur",
      "url": "https://pokeapi.co/api/v2/pokemon/3/",
      "id": 3,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/3.ogg"
  },
  {
      "name": "charmander",
      "url": "https://pokeapi.co/api/v2/pokemon/4/",
      "id": 4,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/4.ogg"
  },
  {
      "name": "charmeleon",
      "url": "https://pokeapi.co/api/v2/pokemon/5/",
      "id": 5,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/5.ogg"
  },
  {
      "name": "charizard",
      "url": "https://pokeapi.co/api/v2/pokemon/6/",
      "id": 6,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/6.ogg"
  },
  {
      "name": "squirtle",
      "url": "https://pokeapi.co/api/v2/pokemon/7/",
      "id": 7,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/7.ogg"
  },
  {
      "name": "wartortle",
      "url": "https://pokeapi.co/api/v2/pokemon/8/",
      "id": 8,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/8.ogg"
  },
  {
      "name": "blastoise",
      "url": "https://pokeapi.co/api/v2/pokemon/9/",
      "id": 9,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/9.ogg"
  },
  {
      "name": "caterpie",
      "url": "https://pokeapi.co/api/v2/pokemon/10/",
      "id": 10,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/10.ogg"
  },
  {
      "name": "metapod",
      "url": "https://pokeapi.co/api/v2/pokemon/11/",
      "id": 11,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/11.ogg"
  },
  {
      "name": "butterfree",
      "url": "https://pokeapi.co/api/v2/pokemon/12/",
      "id": 12,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/12.ogg"
  },
  {
      "name": "weedle",
      "url": "https://pokeapi.co/api/v2/pokemon/13/",
      "id": 13,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/13.ogg"
  },
  {
      "name": "kakuna",
      "url": "https://pokeapi.co/api/v2/pokemon/14/",
      "id": 14,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/14.ogg"
  },
  {
      "name": "beedrill",
      "url": "https://pokeapi.co/api/v2/pokemon/15/",
      "id": 15,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/15.ogg"
  },
  {
      "name": "pidgey",
      "url": "https://pokeapi.co/api/v2/pokemon/16/",
      "id": 16,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/16.ogg"
  },
  {
      "name": "pidgeotto",
      "url": "https://pokeapi.co/api/v2/pokemon/17/",
      "id": 17,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/17.ogg"
  },
  {
      "name": "pidgeot",
      "url": "https://pokeapi.co/api/v2/pokemon/18/",
      "id": 18,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/18.ogg"
  },
  {
      "name": "rattata",
      "url": "https://pokeapi.co/api/v2/pokemon/19/",
      "id": 19,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/19.ogg"
  },
  {
      "name": "raticate",
      "url": "https://pokeapi.co/api/v2/pokemon/20/",
      "id": 20,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/20.ogg"
  },
  {
      "name": "spearow",
      "url": "https://pokeapi.co/api/v2/pokemon/21/",
      "id": 21,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/21.ogg"
  },
  {
      "name": "fearow",
      "url": "https://pokeapi.co/api/v2/pokemon/22/",
      "id": 22,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/22.ogg"
  },
  {
      "name": "ekans",
      "url": "https://pokeapi.co/api/v2/pokemon/23/",
      "id": 23,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/23.ogg"
  },
  {
      "name": "arbok",
      "url": "https://pokeapi.co/api/v2/pokemon/24/",
      "id": 24,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/24.ogg"
  },
  {
      "name": "pikachu",
      "url": "https://pokeapi.co/api/v2/pokemon/25/",
      "id": 25,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/25.ogg"
  },
  {
      "name": "raichu",
      "url": "https://pokeapi.co/api/v2/pokemon/26/",
      "id": 26,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/26.ogg"
  },
  {
      "name": "sandshrew",
      "url": "https://pokeapi.co/api/v2/pokemon/27/",
      "id": 27,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/27.ogg"
  },
  {
      "name": "sandslash",
      "url": "https://pokeapi.co/api/v2/pokemon/28/",
      "id": 28,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/28.ogg"
  },
  {
      "name": "nidoran-f",
      "url": "https://pokeapi.co/api/v2/pokemon/29/",
      "id": 29,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/29.ogg"
  },
  {
      "name": "nidorina",
      "url": "https://pokeapi.co/api/v2/pokemon/30/",
      "id": 30,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/30.ogg"
  },
  {
      "name": "nidoqueen",
      "url": "https://pokeapi.co/api/v2/pokemon/31/",
      "id": 31,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/31.ogg"
  },
  {
      "name": "nidoran-m",
      "url": "https://pokeapi.co/api/v2/pokemon/32/",
      "id": 32,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/32.ogg"
  },
  {
      "name": "nidorino",
      "url": "https://pokeapi.co/api/v2/pokemon/33/",
      "id": 33,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/33.ogg"
  },
  {
      "name": "nidoking",
      "url": "https://pokeapi.co/api/v2/pokemon/34/",
      "id": 34,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/34.ogg"
  },
  {
      "name": "clefairy",
      "url": "https://pokeapi.co/api/v2/pokemon/35/",
      "id": 35,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/35.ogg"
  },
  {
      "name": "clefable",
      "url": "https://pokeapi.co/api/v2/pokemon/36/",
      "id": 36,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/36.ogg"
  },
  {
      "name": "vulpix",
      "url": "https://pokeapi.co/api/v2/pokemon/37/",
      "id": 37,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/37.ogg"
  },
  {
      "name": "ninetales",
      "url": "https://pokeapi.co/api/v2/pokemon/38/",
      "id": 38,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/38.ogg"
  },
  {
      "name": "jigglypuff",
      "url": "https://pokeapi.co/api/v2/pokemon/39/",
      "id": 39,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/39.ogg"
  },
  {
      "name": "wigglytuff",
      "url": "https://pokeapi.co/api/v2/pokemon/40/",
      "id": 40,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/40.ogg"
  },
  {
      "name": "zubat",
      "url": "https://pokeapi.co/api/v2/pokemon/41/",
      "id": 41,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/41.ogg"
  },
  {
      "name": "golbat",
      "url": "https://pokeapi.co/api/v2/pokemon/42/",
      "id": 42,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/42.ogg"
  },
  {
      "name": "oddish",
      "url": "https://pokeapi.co/api/v2/pokemon/43/",
      "id": 43,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/43.ogg"
  },
  {
      "name": "gloom",
      "url": "https://pokeapi.co/api/v2/pokemon/44/",
      "id": 44,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/44.ogg"
  },
  {
      "name": "vileplume",
      "url": "https://pokeapi.co/api/v2/pokemon/45/",
      "id": 45,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/45.ogg"
  },
  {
      "name": "paras",
      "url": "https://pokeapi.co/api/v2/pokemon/46/",
      "id": 46,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/46.ogg"
  },
  {
      "name": "parasect",
      "url": "https://pokeapi.co/api/v2/pokemon/47/",
      "id": 47,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/47.ogg"
  },
  {
      "name": "venonat",
      "url": "https://pokeapi.co/api/v2/pokemon/48/",
      "id": 48,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/48.ogg"
  },
  {
      "name": "venomoth",
      "url": "https://pokeapi.co/api/v2/pokemon/49/",
      "id": 49,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/49.ogg"
  },
  {
      "name": "diglett",
      "url": "https://pokeapi.co/api/v2/pokemon/50/",
      "id": 50,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/50.ogg"
  },
  {
      "name": "dugtrio",
      "url": "https://pokeapi.co/api/v2/pokemon/51/",
      "id": 51,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/51.ogg"
  },
  {
      "name": "meowth",
      "url": "https://pokeapi.co/api/v2/pokemon/52/",
      "id": 52,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/52.ogg"
  },
  {
      "name": "persian",
      "url": "https://pokeapi.co/api/v2/pokemon/53/",
      "id": 53,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/53.ogg"
  },
  {
      "name": "psyduck",
      "url": "https://pokeapi.co/api/v2/pokemon/54/",
      "id": 54,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/54.ogg"
  },
  {
      "name": "golduck",
      "url": "https://pokeapi.co/api/v2/pokemon/55/",
      "id": 55,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/55.ogg"
  },
  {
      "name": "mankey",
      "url": "https://pokeapi.co/api/v2/pokemon/56/",
      "id": 56,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/56.ogg"
  },
  {
      "name": "primeape",
      "url": "https://pokeapi.co/api/v2/pokemon/57/",
      "id": 57,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/57.ogg"
  },
  {
      "name": "growlithe",
      "url": "https://pokeapi.co/api/v2/pokemon/58/",
      "id": 58,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/58.ogg"
  },
  {
      "name": "arcanine",
      "url": "https://pokeapi.co/api/v2/pokemon/59/",
      "id": 59,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/59.ogg"
  },
  {
      "name": "poliwag",
      "url": "https://pokeapi.co/api/v2/pokemon/60/",
      "id": 60,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/60.ogg"
  },
  {
      "name": "poliwhirl",
      "url": "https://pokeapi.co/api/v2/pokemon/61/",
      "id": 61,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/61.ogg"
  },
  {
      "name": "poliwrath",
      "url": "https://pokeapi.co/api/v2/pokemon/62/",
      "id": 62,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/62.ogg"
  },
  {
      "name": "abra",
      "url": "https://pokeapi.co/api/v2/pokemon/63/",
      "id": 63,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/63.ogg"
  },
  {
      "name": "kadabra",
      "url": "https://pokeapi.co/api/v2/pokemon/64/",
      "id": 64,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/64.ogg"
  },
  {
      "name": "alakazam",
      "url": "https://pokeapi.co/api/v2/pokemon/65/",
      "id": 65,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/65.ogg"
  },
  {
      "name": "machop",
      "url": "https://pokeapi.co/api/v2/pokemon/66/",
      "id": 66,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/66.ogg"
  },
  {
      "name": "machoke",
      "url": "https://pokeapi.co/api/v2/pokemon/67/",
      "id": 67,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/67.ogg"
  },
  {
      "name": "machamp",
      "url": "https://pokeapi.co/api/v2/pokemon/68/",
      "id": 68,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/68.ogg"
  },
  {
      "name": "bellsprout",
      "url": "https://pokeapi.co/api/v2/pokemon/69/",
      "id": 69,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/69.ogg"
  },
  {
      "name": "weepinbell",
      "url": "https://pokeapi.co/api/v2/pokemon/70/",
      "id": 70,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/70.ogg"
  },
  {
      "name": "victreebel",
      "url": "https://pokeapi.co/api/v2/pokemon/71/",
      "id": 71,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/71.ogg"
  },
  {
      "name": "tentacool",
      "url": "https://pokeapi.co/api/v2/pokemon/72/",
      "id": 72,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/72.ogg"
  },
  {
      "name": "tentacruel",
      "url": "https://pokeapi.co/api/v2/pokemon/73/",
      "id": 73,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/73.ogg"
  },
  {
      "name": "geodude",
      "url": "https://pokeapi.co/api/v2/pokemon/74/",
      "id": 74,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/74.ogg"
  },
  {
      "name": "graveler",
      "url": "https://pokeapi.co/api/v2/pokemon/75/",
      "id": 75,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/75.ogg"
  },
  {
      "name": "golem",
      "url": "https://pokeapi.co/api/v2/pokemon/76/",
      "id": 76,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/76.ogg"
  },
  {
      "name": "ponyta",
      "url": "https://pokeapi.co/api/v2/pokemon/77/",
      "id": 77,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/77.ogg"
  },
  {
      "name": "rapidash",
      "url": "https://pokeapi.co/api/v2/pokemon/78/",
      "id": 78,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/78.ogg"
  },
  {
      "name": "slowpoke",
      "url": "https://pokeapi.co/api/v2/pokemon/79/",
      "id": 79,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/79.ogg"
  },
  {
      "name": "slowbro",
      "url": "https://pokeapi.co/api/v2/pokemon/80/",
      "id": 80,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/80.ogg"
  },
  {
      "name": "magnemite",
      "url": "https://pokeapi.co/api/v2/pokemon/81/",
      "id": 81,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/81.ogg"
  },
  {
      "name": "magneton",
      "url": "https://pokeapi.co/api/v2/pokemon/82/",
      "id": 82,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/82.ogg"
  },
  {
      "name": "farfetchd",
      "url": "https://pokeapi.co/api/v2/pokemon/83/",
      "id": 83,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/83.ogg"
  },
  {
      "name": "doduo",
      "url": "https://pokeapi.co/api/v2/pokemon/84/",
      "id": 84,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/84.ogg"
  },
  {
      "name": "dodrio",
      "url": "https://pokeapi.co/api/v2/pokemon/85/",
      "id": 85,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/85.ogg"
  },
  {
      "name": "seel",
      "url": "https://pokeapi.co/api/v2/pokemon/86/",
      "id": 86,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/86.ogg"
  },
  {
      "name": "dewgong",
      "url": "https://pokeapi.co/api/v2/pokemon/87/",
      "id": 87,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/87.ogg"
  },
  {
      "name": "grimer",
      "url": "https://pokeapi.co/api/v2/pokemon/88/",
      "id": 88,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/88.ogg"
  },
  {
      "name": "muk",
      "url": "https://pokeapi.co/api/v2/pokemon/89/",
      "id": 89,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/89.ogg"
  },
  {
      "name": "shellder",
      "url": "https://pokeapi.co/api/v2/pokemon/90/",
      "id": 90,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/90.ogg"
  },
  {
      "name": "cloyster",
      "url": "https://pokeapi.co/api/v2/pokemon/91/",
      "id": 91,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/91.ogg"
  },
  {
      "name": "gastly",
      "url": "https://pokeapi.co/api/v2/pokemon/92/",
      "id": 92,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/92.ogg"
  },
  {
      "name": "haunter",
      "url": "https://pokeapi.co/api/v2/pokemon/93/",
      "id": 93,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/93.ogg"
  },
  {
      "name": "gengar",
      "url": "https://pokeapi.co/api/v2/pokemon/94/",
      "id": 94,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/94.ogg"
  },
  {
      "name": "onix",
      "url": "https://pokeapi.co/api/v2/pokemon/95/",
      "id": 95,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/95.ogg"
  },
  {
      "name": "drowzee",
      "url": "https://pokeapi.co/api/v2/pokemon/96/",
      "id": 96,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/96.ogg"
  },
  {
      "name": "hypno",
      "url": "https://pokeapi.co/api/v2/pokemon/97/",
      "id": 97,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/97.ogg"
  },
  {
      "name": "krabby",
      "url": "https://pokeapi.co/api/v2/pokemon/98/",
      "id": 98,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/98.ogg"
  },
  {
      "name": "kingler",
      "url": "https://pokeapi.co/api/v2/pokemon/99/",
      "id": 99,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/99.ogg"
  },
  {
      "name": "voltorb",
      "url": "https://pokeapi.co/api/v2/pokemon/100/",
      "id": 100,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/100.ogg"
  },
  {
      "name": "electrode",
      "url": "https://pokeapi.co/api/v2/pokemon/101/",
      "id": 101,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/101.ogg"
  },
  {
      "name": "exeggcute",
      "url": "https://pokeapi.co/api/v2/pokemon/102/",
      "id": 102,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/102.ogg"
  },
  {
      "name": "exeggutor",
      "url": "https://pokeapi.co/api/v2/pokemon/103/",
      "id": 103,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/103.ogg"
  },
  {
      "name": "cubone",
      "url": "https://pokeapi.co/api/v2/pokemon/104/",
      "id": 104,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/104.ogg"
  },
  {
      "name": "marowak",
      "url": "https://pokeapi.co/api/v2/pokemon/105/",
      "id": 105,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/105.ogg"
  },
  {
      "name": "hitmonlee",
      "url": "https://pokeapi.co/api/v2/pokemon/106/",
      "id": 106,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/106.ogg"
  },
  {
      "name": "hitmonchan",
      "url": "https://pokeapi.co/api/v2/pokemon/107/",
      "id": 107,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/107.ogg"
  },
  {
      "name": "lickitung",
      "url": "https://pokeapi.co/api/v2/pokemon/108/",
      "id": 108,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/108.ogg"
  },
  {
      "name": "koffing",
      "url": "https://pokeapi.co/api/v2/pokemon/109/",
      "id": 109,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/109.ogg"
  },
  {
      "name": "weezing",
      "url": "https://pokeapi.co/api/v2/pokemon/110/",
      "id": 110,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/110.ogg"
  },
  {
      "name": "rhyhorn",
      "url": "https://pokeapi.co/api/v2/pokemon/111/",
      "id": 111,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/111.ogg"
  },
  {
      "name": "rhydon",
      "url": "https://pokeapi.co/api/v2/pokemon/112/",
      "id": 112,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/112.ogg"
  },
  {
      "name": "chansey",
      "url": "https://pokeapi.co/api/v2/pokemon/113/",
      "id": 113,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/113.ogg"
  },
  {
      "name": "tangela",
      "url": "https://pokeapi.co/api/v2/pokemon/114/",
      "id": 114,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/114.ogg"
  },
  {
      "name": "kangaskhan",
      "url": "https://pokeapi.co/api/v2/pokemon/115/",
      "id": 115,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/115.ogg"
  },
  {
      "name": "horsea",
      "url": "https://pokeapi.co/api/v2/pokemon/116/",
      "id": 116,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/116.ogg"
  },
  {
      "name": "seadra",
      "url": "https://pokeapi.co/api/v2/pokemon/117/",
      "id": 117,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/117.ogg"
  },
  {
      "name": "goldeen",
      "url": "https://pokeapi.co/api/v2/pokemon/118/",
      "id": 118,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/118.ogg"
  },
  {
      "name": "seaking",
      "url": "https://pokeapi.co/api/v2/pokemon/119/",
      "id": 119,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/119.ogg"
  },
  {
      "name": "staryu",
      "url": "https://pokeapi.co/api/v2/pokemon/120/",
      "id": 120,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/120.ogg"
  },
  {
      "name": "starmie",
      "url": "https://pokeapi.co/api/v2/pokemon/121/",
      "id": 121,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/121.ogg"
  },
  {
      "name": "mr-mime",
      "url": "https://pokeapi.co/api/v2/pokemon/122/",
      "id": 122,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/122.ogg"
  },
  {
      "name": "scyther",
      "url": "https://pokeapi.co/api/v2/pokemon/123/",
      "id": 123,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/123.ogg"
  },
  {
      "name": "jynx",
      "url": "https://pokeapi.co/api/v2/pokemon/124/",
      "id": 124,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/124.ogg"
  },
  {
      "name": "electabuzz",
      "url": "https://pokeapi.co/api/v2/pokemon/125/",
      "id": 125,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/125.ogg"
  },
  {
      "name": "magmar",
      "url": "https://pokeapi.co/api/v2/pokemon/126/",
      "id": 126,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/126.ogg"
  },
  {
      "name": "pinsir",
      "url": "https://pokeapi.co/api/v2/pokemon/127/",
      "id": 127,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/127.ogg"
  },
  {
      "name": "tauros",
      "url": "https://pokeapi.co/api/v2/pokemon/128/",
      "id": 128,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/128.ogg"
  },
  {
      "name": "magikarp",
      "url": "https://pokeapi.co/api/v2/pokemon/129/",
      "id": 129,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/129.ogg"
  },
  {
      "name": "gyarados",
      "url": "https://pokeapi.co/api/v2/pokemon/130/",
      "id": 130,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/130.ogg"
  },
  {
      "name": "lapras",
      "url": "https://pokeapi.co/api/v2/pokemon/131/",
      "id": 131,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/131.ogg"
  },
  {
      "name": "ditto",
      "url": "https://pokeapi.co/api/v2/pokemon/132/",
      "id": 132,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/132.ogg"
  },
  {
      "name": "eevee",
      "url": "https://pokeapi.co/api/v2/pokemon/133/",
      "id": 133,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/133.ogg"
  },
  {
      "name": "vaporeon",
      "url": "https://pokeapi.co/api/v2/pokemon/134/",
      "id": 134,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/134.ogg"
  },
  {
      "name": "jolteon",
      "url": "https://pokeapi.co/api/v2/pokemon/135/",
      "id": 135,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/135.ogg"
  },
  {
      "name": "flareon",
      "url": "https://pokeapi.co/api/v2/pokemon/136/",
      "id": 136,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/136.ogg"
  },
  {
      "name": "porygon",
      "url": "https://pokeapi.co/api/v2/pokemon/137/",
      "id": 137,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/137.ogg"
  },
  {
      "name": "omanyte",
      "url": "https://pokeapi.co/api/v2/pokemon/138/",
      "id": 138,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/138.ogg"
  },
  {
      "name": "omastar",
      "url": "https://pokeapi.co/api/v2/pokemon/139/",
      "id": 139,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/139.ogg"
  },
  {
      "name": "kabuto",
      "url": "https://pokeapi.co/api/v2/pokemon/140/",
      "id": 140,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/140.ogg"
  },
  {
      "name": "kabutops",
      "url": "https://pokeapi.co/api/v2/pokemon/141/",
      "id": 141,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/141.ogg"
  },
  {
      "name": "aerodactyl",
      "url": "https://pokeapi.co/api/v2/pokemon/142/",
      "id": 142,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/142.ogg"
  },
  {
      "name": "snorlax",
      "url": "https://pokeapi.co/api/v2/pokemon/143/",
      "id": 143,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/143.ogg"
  },
  {
      "name": "articuno",
      "url": "https://pokeapi.co/api/v2/pokemon/144/",
      "id": 144,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/144.ogg"
  },
  {
      "name": "zapdos",
      "url": "https://pokeapi.co/api/v2/pokemon/145/",
      "id": 145,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/145.ogg"
  },
  {
      "name": "moltres",
      "url": "https://pokeapi.co/api/v2/pokemon/146/",
      "id": 146,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/146.ogg"
  },
  {
      "name": "dratini",
      "url": "https://pokeapi.co/api/v2/pokemon/147/",
      "id": 147,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/147.ogg"
  },
  {
      "name": "dragonair",
      "url": "https://pokeapi.co/api/v2/pokemon/148/",
      "id": 148,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/148.ogg"
  },
  {
      "name": "dragonite",
      "url": "https://pokeapi.co/api/v2/pokemon/149/",
      "id": 149,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/149.ogg"
  },
  {
      "name": "mewtwo",
      "url": "https://pokeapi.co/api/v2/pokemon/150/",
      "id": 150,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/150.ogg"
  },
  {
      "name": "mew",
      "url": "https://pokeapi.co/api/v2/pokemon/151/",
      "id": 151,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/151.ogg"
  },
  {
      "name": "chikorita",
      "url": "https://pokeapi.co/api/v2/pokemon/152/",
      "id": 152,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/152.ogg"
  },
  {
      "name": "bayleef",
      "url": "https://pokeapi.co/api/v2/pokemon/153/",
      "id": 153,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/153.ogg"
  },
  {
      "name": "meganium",
      "url": "https://pokeapi.co/api/v2/pokemon/154/",
      "id": 154,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/154.ogg"
  },
  {
      "name": "cyndaquil",
      "url": "https://pokeapi.co/api/v2/pokemon/155/",
      "id": 155,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/155.ogg"
  },
  {
      "name": "quilava",
      "url": "https://pokeapi.co/api/v2/pokemon/156/",
      "id": 156,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/156.ogg"
  },
  {
      "name": "typhlosion",
      "url": "https://pokeapi.co/api/v2/pokemon/157/",
      "id": 157,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/157.ogg"
  },
  {
      "name": "totodile",
      "url": "https://pokeapi.co/api/v2/pokemon/158/",
      "id": 158,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/158.ogg"
  },
  {
      "name": "croconaw",
      "url": "https://pokeapi.co/api/v2/pokemon/159/",
      "id": 159,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/159.ogg"
  },
  {
      "name": "feraligatr",
      "url": "https://pokeapi.co/api/v2/pokemon/160/",
      "id": 160,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/160.ogg"
  },
  {
      "name": "sentret",
      "url": "https://pokeapi.co/api/v2/pokemon/161/",
      "id": 161,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/161.ogg"
  },
  {
      "name": "furret",
      "url": "https://pokeapi.co/api/v2/pokemon/162/",
      "id": 162,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/162.ogg"
  },
  {
      "name": "hoothoot",
      "url": "https://pokeapi.co/api/v2/pokemon/163/",
      "id": 163,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/163.ogg"
  },
  {
      "name": "noctowl",
      "url": "https://pokeapi.co/api/v2/pokemon/164/",
      "id": 164,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/164.ogg"
  },
  {
      "name": "ledyba",
      "url": "https://pokeapi.co/api/v2/pokemon/165/",
      "id": 165,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/165.ogg"
  },
  {
      "name": "ledian",
      "url": "https://pokeapi.co/api/v2/pokemon/166/",
      "id": 166,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/166.ogg"
  },
  {
      "name": "spinarak",
      "url": "https://pokeapi.co/api/v2/pokemon/167/",
      "id": 167,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/167.ogg"
  },
  {
      "name": "ariados",
      "url": "https://pokeapi.co/api/v2/pokemon/168/",
      "id": 168,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/168.ogg"
  },
  {
      "name": "crobat",
      "url": "https://pokeapi.co/api/v2/pokemon/169/",
      "id": 169,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/169.ogg"
  },
  {
      "name": "chinchou",
      "url": "https://pokeapi.co/api/v2/pokemon/170/",
      "id": 170,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/170.ogg"
  },
  {
      "name": "lanturn",
      "url": "https://pokeapi.co/api/v2/pokemon/171/",
      "id": 171,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/171.ogg"
  },
  {
      "name": "pichu",
      "url": "https://pokeapi.co/api/v2/pokemon/172/",
      "id": 172,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/172.ogg"
  },
  {
      "name": "cleffa",
      "url": "https://pokeapi.co/api/v2/pokemon/173/",
      "id": 173,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/173.ogg"
  },
  {
      "name": "igglybuff",
      "url": "https://pokeapi.co/api/v2/pokemon/174/",
      "id": 174,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/174.ogg"
  },
  {
      "name": "togepi",
      "url": "https://pokeapi.co/api/v2/pokemon/175/",
      "id": 175,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/175.ogg"
  },
  {
      "name": "togetic",
      "url": "https://pokeapi.co/api/v2/pokemon/176/",
      "id": 176,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/176.ogg"
  },
  {
      "name": "natu",
      "url": "https://pokeapi.co/api/v2/pokemon/177/",
      "id": 177,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/177.ogg"
  },
  {
      "name": "xatu",
      "url": "https://pokeapi.co/api/v2/pokemon/178/",
      "id": 178,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/178.ogg"
  },
  {
      "name": "mareep",
      "url": "https://pokeapi.co/api/v2/pokemon/179/",
      "id": 179,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/179.ogg"
  },
  {
      "name": "flaaffy",
      "url": "https://pokeapi.co/api/v2/pokemon/180/",
      "id": 180,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/180.ogg"
  },
  {
      "name": "ampharos",
      "url": "https://pokeapi.co/api/v2/pokemon/181/",
      "id": 181,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/181.ogg"
  },
  {
      "name": "bellossom",
      "url": "https://pokeapi.co/api/v2/pokemon/182/",
      "id": 182,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/182.ogg"
  },
  {
      "name": "marill",
      "url": "https://pokeapi.co/api/v2/pokemon/183/",
      "id": 183,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/183.ogg"
  },
  {
      "name": "azumarill",
      "url": "https://pokeapi.co/api/v2/pokemon/184/",
      "id": 184,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/184.ogg"
  },
  {
      "name": "sudowoodo",
      "url": "https://pokeapi.co/api/v2/pokemon/185/",
      "id": 185,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/185.ogg"
  },
  {
      "name": "politoed",
      "url": "https://pokeapi.co/api/v2/pokemon/186/",
      "id": 186,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/186.ogg"
  },
  {
      "name": "hoppip",
      "url": "https://pokeapi.co/api/v2/pokemon/187/",
      "id": 187,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/187.ogg"
  },
  {
      "name": "skiploom",
      "url": "https://pokeapi.co/api/v2/pokemon/188/",
      "id": 188,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/188.ogg"
  },
  {
      "name": "jumpluff",
      "url": "https://pokeapi.co/api/v2/pokemon/189/",
      "id": 189,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/189.ogg"
  },
  {
      "name": "aipom",
      "url": "https://pokeapi.co/api/v2/pokemon/190/",
      "id": 190,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/190.ogg"
  },
  {
      "name": "sunkern",
      "url": "https://pokeapi.co/api/v2/pokemon/191/",
      "id": 191,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/191.ogg"
  },
  {
      "name": "sunflora",
      "url": "https://pokeapi.co/api/v2/pokemon/192/",
      "id": 192,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/192.ogg"
  },
  {
      "name": "yanma",
      "url": "https://pokeapi.co/api/v2/pokemon/193/",
      "id": 193,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/193.ogg"
  },
  {
      "name": "wooper",
      "url": "https://pokeapi.co/api/v2/pokemon/194/",
      "id": 194,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/194.ogg"
  },
  {
      "name": "quagsire",
      "url": "https://pokeapi.co/api/v2/pokemon/195/",
      "id": 195,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/195.ogg"
  },
  {
      "name": "espeon",
      "url": "https://pokeapi.co/api/v2/pokemon/196/",
      "id": 196,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/196.ogg"
  },
  {
      "name": "umbreon",
      "url": "https://pokeapi.co/api/v2/pokemon/197/",
      "id": 197,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/197.ogg"
  },
  {
      "name": "murkrow",
      "url": "https://pokeapi.co/api/v2/pokemon/198/",
      "id": 198,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/198.ogg"
  },
  {
      "name": "slowking",
      "url": "https://pokeapi.co/api/v2/pokemon/199/",
      "id": 199,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/199.ogg"
  },
  {
      "name": "misdreavus",
      "url": "https://pokeapi.co/api/v2/pokemon/200/",
      "id": 200,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/200.ogg"
  },
  {
      "name": "unown",
      "url": "https://pokeapi.co/api/v2/pokemon/201/",
      "id": 201,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/201.ogg"
  },
  {
      "name": "wobbuffet",
      "url": "https://pokeapi.co/api/v2/pokemon/202/",
      "id": 202,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/202.ogg"
  },
  {
      "name": "girafarig",
      "url": "https://pokeapi.co/api/v2/pokemon/203/",
      "id": 203,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/203.ogg"
  },
  {
      "name": "pineco",
      "url": "https://pokeapi.co/api/v2/pokemon/204/",
      "id": 204,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/204.ogg"
  },
  {
      "name": "forretress",
      "url": "https://pokeapi.co/api/v2/pokemon/205/",
      "id": 205,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/205.ogg"
  },
  {
      "name": "dunsparce",
      "url": "https://pokeapi.co/api/v2/pokemon/206/",
      "id": 206,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/206.ogg"
  },
  {
      "name": "gligar",
      "url": "https://pokeapi.co/api/v2/pokemon/207/",
      "id": 207,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/207.ogg"
  },
  {
      "name": "steelix",
      "url": "https://pokeapi.co/api/v2/pokemon/208/",
      "id": 208,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/208.ogg"
  },
  {
      "name": "snubbull",
      "url": "https://pokeapi.co/api/v2/pokemon/209/",
      "id": 209,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/209.ogg"
  },
  {
      "name": "granbull",
      "url": "https://pokeapi.co/api/v2/pokemon/210/",
      "id": 210,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/210.ogg"
  },
  {
      "name": "qwilfish",
      "url": "https://pokeapi.co/api/v2/pokemon/211/",
      "id": 211,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/211.ogg"
  },
  {
      "name": "scizor",
      "url": "https://pokeapi.co/api/v2/pokemon/212/",
      "id": 212,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/212.ogg"
  },
  {
      "name": "shuckle",
      "url": "https://pokeapi.co/api/v2/pokemon/213/",
      "id": 213,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/213.ogg"
  },
  {
      "name": "heracross",
      "url": "https://pokeapi.co/api/v2/pokemon/214/",
      "id": 214,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/214.ogg"
  },
  {
      "name": "sneasel",
      "url": "https://pokeapi.co/api/v2/pokemon/215/",
      "id": 215,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/215.ogg"
  },
  {
      "name": "teddiursa",
      "url": "https://pokeapi.co/api/v2/pokemon/216/",
      "id": 216,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/216.ogg"
  },
  {
      "name": "ursaring",
      "url": "https://pokeapi.co/api/v2/pokemon/217/",
      "id": 217,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/217.ogg"
  },
  {
      "name": "slugma",
      "url": "https://pokeapi.co/api/v2/pokemon/218/",
      "id": 218,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/218.ogg"
  },
  {
      "name": "magcargo",
      "url": "https://pokeapi.co/api/v2/pokemon/219/",
      "id": 219,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/219.ogg"
  },
  {
      "name": "swinub",
      "url": "https://pokeapi.co/api/v2/pokemon/220/",
      "id": 220,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/220.ogg"
  },
  {
      "name": "piloswine",
      "url": "https://pokeapi.co/api/v2/pokemon/221/",
      "id": 221,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/221.ogg"
  },
  {
      "name": "corsola",
      "url": "https://pokeapi.co/api/v2/pokemon/222/",
      "id": 222,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/222.ogg"
  },
  {
      "name": "remoraid",
      "url": "https://pokeapi.co/api/v2/pokemon/223/",
      "id": 223,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/223.ogg"
  },
  {
      "name": "octillery",
      "url": "https://pokeapi.co/api/v2/pokemon/224/",
      "id": 224,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/224.ogg"
  },
  {
      "name": "delibird",
      "url": "https://pokeapi.co/api/v2/pokemon/225/",
      "id": 225,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/225.ogg"
  },
  {
      "name": "mantine",
      "url": "https://pokeapi.co/api/v2/pokemon/226/",
      "id": 226,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/226.ogg"
  },
  {
      "name": "skarmory",
      "url": "https://pokeapi.co/api/v2/pokemon/227/",
      "id": 227,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/227.ogg"
  },
  {
      "name": "houndour",
      "url": "https://pokeapi.co/api/v2/pokemon/228/",
      "id": 228,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/228.ogg"
  },
  {
      "name": "houndoom",
      "url": "https://pokeapi.co/api/v2/pokemon/229/",
      "id": 229,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/229.ogg"
  },
  {
      "name": "kingdra",
      "url": "https://pokeapi.co/api/v2/pokemon/230/",
      "id": 230,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/230.ogg"
  },
  {
      "name": "phanpy",
      "url": "https://pokeapi.co/api/v2/pokemon/231/",
      "id": 231,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/231.ogg"
  },
  {
      "name": "donphan",
      "url": "https://pokeapi.co/api/v2/pokemon/232/",
      "id": 232,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/232.ogg"
  },
  {
      "name": "porygon2",
      "url": "https://pokeapi.co/api/v2/pokemon/233/",
      "id": 233,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/233.ogg"
  },
  {
      "name": "stantler",
      "url": "https://pokeapi.co/api/v2/pokemon/234/",
      "id": 234,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/234.ogg"
  },
  {
      "name": "smeargle",
      "url": "https://pokeapi.co/api/v2/pokemon/235/",
      "id": 235,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/235.ogg"
  },
  {
      "name": "tyrogue",
      "url": "https://pokeapi.co/api/v2/pokemon/236/",
      "id": 236,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/236.ogg"
  },
  {
      "name": "hitmontop",
      "url": "https://pokeapi.co/api/v2/pokemon/237/",
      "id": 237,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/237.ogg"
  },
  {
      "name": "smoochum",
      "url": "https://pokeapi.co/api/v2/pokemon/238/",
      "id": 238,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/238.ogg"
  },
  {
      "name": "elekid",
      "url": "https://pokeapi.co/api/v2/pokemon/239/",
      "id": 239,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/239.ogg"
  },
  {
      "name": "magby",
      "url": "https://pokeapi.co/api/v2/pokemon/240/",
      "id": 240,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/240.ogg"
  },
  {
      "name": "miltank",
      "url": "https://pokeapi.co/api/v2/pokemon/241/",
      "id": 241,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/241.ogg"
  },
  {
      "name": "blissey",
      "url": "https://pokeapi.co/api/v2/pokemon/242/",
      "id": 242,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/242.ogg"
  },
  {
      "name": "raikou",
      "url": "https://pokeapi.co/api/v2/pokemon/243/",
      "id": 243,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/243.ogg"
  },
  {
      "name": "entei",
      "url": "https://pokeapi.co/api/v2/pokemon/244/",
      "id": 244,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/244.ogg"
  },
  {
      "name": "suicune",
      "url": "https://pokeapi.co/api/v2/pokemon/245/",
      "id": 245,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/245.ogg"
  },
  {
      "name": "larvitar",
      "url": "https://pokeapi.co/api/v2/pokemon/246/",
      "id": 246,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/246.ogg"
  },
  {
      "name": "pupitar",
      "url": "https://pokeapi.co/api/v2/pokemon/247/",
      "id": 247,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/247.ogg"
  },
  {
      "name": "tyranitar",
      "url": "https://pokeapi.co/api/v2/pokemon/248/",
      "id": 248,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/248.ogg"
  },
  {
      "name": "lugia",
      "url": "https://pokeapi.co/api/v2/pokemon/249/",
      "id": 249,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/249.ogg"
  },
  {
      "name": "ho-oh",
      "url": "https://pokeapi.co/api/v2/pokemon/250/",
      "id": 250,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/250.ogg"
  },
  {
      "name": "celebi",
      "url": "https://pokeapi.co/api/v2/pokemon/251/",
      "id": 251,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/251.ogg"
  },
  {
      "name": "treecko",
      "url": "https://pokeapi.co/api/v2/pokemon/252/",
      "id": 252,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/252.ogg"
  },
  {
      "name": "grovyle",
      "url": "https://pokeapi.co/api/v2/pokemon/253/",
      "id": 253,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/253.ogg"
  },
  {
      "name": "sceptile",
      "url": "https://pokeapi.co/api/v2/pokemon/254/",
      "id": 254,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/254.ogg"
  },
  {
      "name": "torchic",
      "url": "https://pokeapi.co/api/v2/pokemon/255/",
      "id": 255,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/255.ogg"
  },
  {
      "name": "combusken",
      "url": "https://pokeapi.co/api/v2/pokemon/256/",
      "id": 256,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/256.ogg"
  },
  {
      "name": "blaziken",
      "url": "https://pokeapi.co/api/v2/pokemon/257/",
      "id": 257,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/257.ogg"
  },
  {
      "name": "mudkip",
      "url": "https://pokeapi.co/api/v2/pokemon/258/",
      "id": 258,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/258.ogg"
  },
  {
      "name": "marshtomp",
      "url": "https://pokeapi.co/api/v2/pokemon/259/",
      "id": 259,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/259.ogg"
  },
  {
      "name": "swampert",
      "url": "https://pokeapi.co/api/v2/pokemon/260/",
      "id": 260,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/260.ogg"
  },
  {
      "name": "poochyena",
      "url": "https://pokeapi.co/api/v2/pokemon/261/",
      "id": 261,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/261.ogg"
  },
  {
      "name": "mightyena",
      "url": "https://pokeapi.co/api/v2/pokemon/262/",
      "id": 262,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/262.ogg"
  },
  {
      "name": "zigzagoon",
      "url": "https://pokeapi.co/api/v2/pokemon/263/",
      "id": 263,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/263.ogg"
  },
  {
      "name": "linoone",
      "url": "https://pokeapi.co/api/v2/pokemon/264/",
      "id": 264,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/264.ogg"
  },
  {
      "name": "wurmple",
      "url": "https://pokeapi.co/api/v2/pokemon/265/",
      "id": 265,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/265.ogg"
  },
  {
      "name": "silcoon",
      "url": "https://pokeapi.co/api/v2/pokemon/266/",
      "id": 266,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/266.ogg"
  },
  {
      "name": "beautifly",
      "url": "https://pokeapi.co/api/v2/pokemon/267/",
      "id": 267,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/267.ogg"
  },
  {
      "name": "cascoon",
      "url": "https://pokeapi.co/api/v2/pokemon/268/",
      "id": 268,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/268.ogg"
  },
  {
      "name": "dustox",
      "url": "https://pokeapi.co/api/v2/pokemon/269/",
      "id": 269,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/269.ogg"
  },
  {
      "name": "lotad",
      "url": "https://pokeapi.co/api/v2/pokemon/270/",
      "id": 270,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/270.ogg"
  },
  {
      "name": "lombre",
      "url": "https://pokeapi.co/api/v2/pokemon/271/",
      "id": 271,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/271.ogg"
  },
  {
      "name": "ludicolo",
      "url": "https://pokeapi.co/api/v2/pokemon/272/",
      "id": 272,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/272.ogg"
  },
  {
      "name": "seedot",
      "url": "https://pokeapi.co/api/v2/pokemon/273/",
      "id": 273,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/273.ogg"
  },
  {
      "name": "nuzleaf",
      "url": "https://pokeapi.co/api/v2/pokemon/274/",
      "id": 274,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/274.ogg"
  },
  {
      "name": "shiftry",
      "url": "https://pokeapi.co/api/v2/pokemon/275/",
      "id": 275,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/275.ogg"
  },
  {
      "name": "taillow",
      "url": "https://pokeapi.co/api/v2/pokemon/276/",
      "id": 276,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/276.ogg"
  },
  {
      "name": "swellow",
      "url": "https://pokeapi.co/api/v2/pokemon/277/",
      "id": 277,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/277.ogg"
  },
  {
      "name": "wingull",
      "url": "https://pokeapi.co/api/v2/pokemon/278/",
      "id": 278,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/278.ogg"
  },
  {
      "name": "pelipper",
      "url": "https://pokeapi.co/api/v2/pokemon/279/",
      "id": 279,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/279.ogg"
  },
  {
      "name": "ralts",
      "url": "https://pokeapi.co/api/v2/pokemon/280/",
      "id": 280,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/280.ogg"
  },
  {
      "name": "kirlia",
      "url": "https://pokeapi.co/api/v2/pokemon/281/",
      "id": 281,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/281.ogg"
  },
  {
      "name": "gardevoir",
      "url": "https://pokeapi.co/api/v2/pokemon/282/",
      "id": 282,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/282.ogg"
  },
  {
      "name": "surskit",
      "url": "https://pokeapi.co/api/v2/pokemon/283/",
      "id": 283,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/283.ogg"
  },
  {
      "name": "masquerain",
      "url": "https://pokeapi.co/api/v2/pokemon/284/",
      "id": 284,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/284.ogg"
  },
  {
      "name": "shroomish",
      "url": "https://pokeapi.co/api/v2/pokemon/285/",
      "id": 285,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/285.ogg"
  },
  {
      "name": "breloom",
      "url": "https://pokeapi.co/api/v2/pokemon/286/",
      "id": 286,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/286.ogg"
  },
  {
      "name": "slakoth",
      "url": "https://pokeapi.co/api/v2/pokemon/287/",
      "id": 287,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/287.ogg"
  },
  {
      "name": "vigoroth",
      "url": "https://pokeapi.co/api/v2/pokemon/288/",
      "id": 288,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/288.ogg"
  },
  {
      "name": "slaking",
      "url": "https://pokeapi.co/api/v2/pokemon/289/",
      "id": 289,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/289.ogg"
  },
  {
      "name": "nincada",
      "url": "https://pokeapi.co/api/v2/pokemon/290/",
      "id": 290,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/290.ogg"
  },
  {
      "name": "ninjask",
      "url": "https://pokeapi.co/api/v2/pokemon/291/",
      "id": 291,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/291.ogg"
  },
  {
      "name": "shedinja",
      "url": "https://pokeapi.co/api/v2/pokemon/292/",
      "id": 292,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/292.ogg"
  },
  {
      "name": "whismur",
      "url": "https://pokeapi.co/api/v2/pokemon/293/",
      "id": 293,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/293.ogg"
  },
  {
      "name": "loudred",
      "url": "https://pokeapi.co/api/v2/pokemon/294/",
      "id": 294,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/294.ogg"
  },
  {
      "name": "exploud",
      "url": "https://pokeapi.co/api/v2/pokemon/295/",
      "id": 295,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/295.ogg"
  },
  {
      "name": "makuhita",
      "url": "https://pokeapi.co/api/v2/pokemon/296/",
      "id": 296,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/296.ogg"
  },
  {
      "name": "hariyama",
      "url": "https://pokeapi.co/api/v2/pokemon/297/",
      "id": 297,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/297.ogg"
  },
  {
      "name": "azurill",
      "url": "https://pokeapi.co/api/v2/pokemon/298/",
      "id": 298,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/298.ogg"
  },
  {
      "name": "nosepass",
      "url": "https://pokeapi.co/api/v2/pokemon/299/",
      "id": 299,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/299.ogg"
  },
  {
      "name": "skitty",
      "url": "https://pokeapi.co/api/v2/pokemon/300/",
      "id": 300,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/300.ogg"
  },
  {
      "name": "delcatty",
      "url": "https://pokeapi.co/api/v2/pokemon/301/",
      "id": 301,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/301.ogg"
  },
  {
      "name": "sableye",
      "url": "https://pokeapi.co/api/v2/pokemon/302/",
      "id": 302,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/302.ogg"
  },
  {
      "name": "mawile",
      "url": "https://pokeapi.co/api/v2/pokemon/303/",
      "id": 303,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/303.ogg"
  },
  {
      "name": "aron",
      "url": "https://pokeapi.co/api/v2/pokemon/304/",
      "id": 304,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/304.ogg"
  },
  {
      "name": "lairon",
      "url": "https://pokeapi.co/api/v2/pokemon/305/",
      "id": 305,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/305.ogg"
  },
  {
      "name": "aggron",
      "url": "https://pokeapi.co/api/v2/pokemon/306/",
      "id": 306,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/306.ogg"
  },
  {
      "name": "meditite",
      "url": "https://pokeapi.co/api/v2/pokemon/307/",
      "id": 307,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/307.ogg"
  },
  {
      "name": "medicham",
      "url": "https://pokeapi.co/api/v2/pokemon/308/",
      "id": 308,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/308.ogg"
  },
  {
      "name": "electrike",
      "url": "https://pokeapi.co/api/v2/pokemon/309/",
      "id": 309,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/309.ogg"
  },
  {
      "name": "manectric",
      "url": "https://pokeapi.co/api/v2/pokemon/310/",
      "id": 310,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/310.ogg"
  },
  {
      "name": "plusle",
      "url": "https://pokeapi.co/api/v2/pokemon/311/",
      "id": 311,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/311.ogg"
  },
  {
      "name": "minun",
      "url": "https://pokeapi.co/api/v2/pokemon/312/",
      "id": 312,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/312.ogg"
  },
  {
      "name": "volbeat",
      "url": "https://pokeapi.co/api/v2/pokemon/313/",
      "id": 313,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/313.ogg"
  },
  {
      "name": "illumise",
      "url": "https://pokeapi.co/api/v2/pokemon/314/",
      "id": 314,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/314.ogg"
  },
  {
      "name": "roselia",
      "url": "https://pokeapi.co/api/v2/pokemon/315/",
      "id": 315,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/315.ogg"
  },
  {
      "name": "gulpin",
      "url": "https://pokeapi.co/api/v2/pokemon/316/",
      "id": 316,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/316.ogg"
  },
  {
      "name": "swalot",
      "url": "https://pokeapi.co/api/v2/pokemon/317/",
      "id": 317,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/317.ogg"
  },
  {
      "name": "carvanha",
      "url": "https://pokeapi.co/api/v2/pokemon/318/",
      "id": 318,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/318.ogg"
  },
  {
      "name": "sharpedo",
      "url": "https://pokeapi.co/api/v2/pokemon/319/",
      "id": 319,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/319.ogg"
  },
  {
      "name": "wailmer",
      "url": "https://pokeapi.co/api/v2/pokemon/320/",
      "id": 320,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/320.ogg"
  },
  {
      "name": "wailord",
      "url": "https://pokeapi.co/api/v2/pokemon/321/",
      "id": 321,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/321.ogg"
  },
  {
      "name": "numel",
      "url": "https://pokeapi.co/api/v2/pokemon/322/",
      "id": 322,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/322.ogg"
  },
  {
      "name": "camerupt",
      "url": "https://pokeapi.co/api/v2/pokemon/323/",
      "id": 323,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/323.ogg"
  },
  {
      "name": "torkoal",
      "url": "https://pokeapi.co/api/v2/pokemon/324/",
      "id": 324,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/324.ogg"
  },
  {
      "name": "spoink",
      "url": "https://pokeapi.co/api/v2/pokemon/325/",
      "id": 325,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/325.ogg"
  },
  {
      "name": "grumpig",
      "url": "https://pokeapi.co/api/v2/pokemon/326/",
      "id": 326,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/326.ogg"
  },
  {
      "name": "spinda",
      "url": "https://pokeapi.co/api/v2/pokemon/327/",
      "id": 327,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/327.ogg"
  },
  {
      "name": "trapinch",
      "url": "https://pokeapi.co/api/v2/pokemon/328/",
      "id": 328,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/328.ogg"
  },
  {
      "name": "vibrava",
      "url": "https://pokeapi.co/api/v2/pokemon/329/",
      "id": 329,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/329.ogg"
  },
  {
      "name": "flygon",
      "url": "https://pokeapi.co/api/v2/pokemon/330/",
      "id": 330,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/330.ogg"
  },
  {
      "name": "cacnea",
      "url": "https://pokeapi.co/api/v2/pokemon/331/",
      "id": 331,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/331.ogg"
  },
  {
      "name": "cacturne",
      "url": "https://pokeapi.co/api/v2/pokemon/332/",
      "id": 332,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/332.ogg"
  },
  {
      "name": "swablu",
      "url": "https://pokeapi.co/api/v2/pokemon/333/",
      "id": 333,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/333.ogg"
  },
  {
      "name": "altaria",
      "url": "https://pokeapi.co/api/v2/pokemon/334/",
      "id": 334,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/334.ogg"
  },
  {
      "name": "zangoose",
      "url": "https://pokeapi.co/api/v2/pokemon/335/",
      "id": 335,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/335.ogg"
  },
  {
      "name": "seviper",
      "url": "https://pokeapi.co/api/v2/pokemon/336/",
      "id": 336,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/336.ogg"
  },
  {
      "name": "lunatone",
      "url": "https://pokeapi.co/api/v2/pokemon/337/",
      "id": 337,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/337.ogg"
  },
  {
      "name": "solrock",
      "url": "https://pokeapi.co/api/v2/pokemon/338/",
      "id": 338,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/338.ogg"
  },
  {
      "name": "barboach",
      "url": "https://pokeapi.co/api/v2/pokemon/339/",
      "id": 339,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/339.ogg"
  },
  {
      "name": "whiscash",
      "url": "https://pokeapi.co/api/v2/pokemon/340/",
      "id": 340,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/340.ogg"
  },
  {
      "name": "corphish",
      "url": "https://pokeapi.co/api/v2/pokemon/341/",
      "id": 341,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/341.ogg"
  },
  {
      "name": "crawdaunt",
      "url": "https://pokeapi.co/api/v2/pokemon/342/",
      "id": 342,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/342.ogg"
  },
  {
      "name": "baltoy",
      "url": "https://pokeapi.co/api/v2/pokemon/343/",
      "id": 343,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/343.ogg"
  },
  {
      "name": "claydol",
      "url": "https://pokeapi.co/api/v2/pokemon/344/",
      "id": 344,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/344.ogg"
  },
  {
      "name": "lileep",
      "url": "https://pokeapi.co/api/v2/pokemon/345/",
      "id": 345,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/345.ogg"
  },
  {
      "name": "cradily",
      "url": "https://pokeapi.co/api/v2/pokemon/346/",
      "id": 346,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/346.ogg"
  },
  {
      "name": "anorith",
      "url": "https://pokeapi.co/api/v2/pokemon/347/",
      "id": 347,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/347.ogg"
  },
  {
      "name": "armaldo",
      "url": "https://pokeapi.co/api/v2/pokemon/348/",
      "id": 348,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/348.ogg"
  },
  {
      "name": "feebas",
      "url": "https://pokeapi.co/api/v2/pokemon/349/",
      "id": 349,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/349.ogg"
  },
  {
      "name": "milotic",
      "url": "https://pokeapi.co/api/v2/pokemon/350/",
      "id": 350,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/350.ogg"
  },
  {
      "name": "castform",
      "url": "https://pokeapi.co/api/v2/pokemon/351/",
      "id": 351,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/351.ogg"
  },
  {
      "name": "kecleon",
      "url": "https://pokeapi.co/api/v2/pokemon/352/",
      "id": 352,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/352.ogg"
  },
  {
      "name": "shuppet",
      "url": "https://pokeapi.co/api/v2/pokemon/353/",
      "id": 353,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/353.ogg"
  },
  {
      "name": "banette",
      "url": "https://pokeapi.co/api/v2/pokemon/354/",
      "id": 354,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/354.ogg"
  },
  {
      "name": "duskull",
      "url": "https://pokeapi.co/api/v2/pokemon/355/",
      "id": 355,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/355.ogg"
  },
  {
      "name": "dusclops",
      "url": "https://pokeapi.co/api/v2/pokemon/356/",
      "id": 356,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/356.ogg"
  },
  {
      "name": "tropius",
      "url": "https://pokeapi.co/api/v2/pokemon/357/",
      "id": 357,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/357.ogg"
  },
  {
      "name": "chimecho",
      "url": "https://pokeapi.co/api/v2/pokemon/358/",
      "id": 358,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/358.ogg"
  },
  {
      "name": "absol",
      "url": "https://pokeapi.co/api/v2/pokemon/359/",
      "id": 359,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/359.ogg"
  },
  {
      "name": "wynaut",
      "url": "https://pokeapi.co/api/v2/pokemon/360/",
      "id": 360,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/360.ogg"
  },
  {
      "name": "snorunt",
      "url": "https://pokeapi.co/api/v2/pokemon/361/",
      "id": 361,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/361.ogg"
  },
  {
      "name": "glalie",
      "url": "https://pokeapi.co/api/v2/pokemon/362/",
      "id": 362,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/362.ogg"
  },
  {
      "name": "spheal",
      "url": "https://pokeapi.co/api/v2/pokemon/363/",
      "id": 363,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/363.ogg"
  },
  {
      "name": "sealeo",
      "url": "https://pokeapi.co/api/v2/pokemon/364/",
      "id": 364,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/364.ogg"
  },
  {
      "name": "walrein",
      "url": "https://pokeapi.co/api/v2/pokemon/365/",
      "id": 365,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/365.ogg"
  },
  {
      "name": "clamperl",
      "url": "https://pokeapi.co/api/v2/pokemon/366/",
      "id": 366,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/366.ogg"
  },
  {
      "name": "huntail",
      "url": "https://pokeapi.co/api/v2/pokemon/367/",
      "id": 367,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/367.ogg"
  },
  {
      "name": "gorebyss",
      "url": "https://pokeapi.co/api/v2/pokemon/368/",
      "id": 368,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/368.ogg"
  },
  {
      "name": "relicanth",
      "url": "https://pokeapi.co/api/v2/pokemon/369/",
      "id": 369,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/369.ogg"
  },
  {
      "name": "luvdisc",
      "url": "https://pokeapi.co/api/v2/pokemon/370/",
      "id": 370,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/370.ogg"
  },
  {
      "name": "bagon",
      "url": "https://pokeapi.co/api/v2/pokemon/371/",
      "id": 371,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/371.ogg"
  },
  {
      "name": "shelgon",
      "url": "https://pokeapi.co/api/v2/pokemon/372/",
      "id": 372,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/372.ogg"
  },
  {
      "name": "salamence",
      "url": "https://pokeapi.co/api/v2/pokemon/373/",
      "id": 373,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/373.ogg"
  },
  {
      "name": "beldum",
      "url": "https://pokeapi.co/api/v2/pokemon/374/",
      "id": 374,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/374.ogg"
  },
  {
      "name": "metang",
      "url": "https://pokeapi.co/api/v2/pokemon/375/",
      "id": 375,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/375.ogg"
  },
  {
      "name": "metagross",
      "url": "https://pokeapi.co/api/v2/pokemon/376/",
      "id": 376,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/376.ogg"
  },
  {
      "name": "regirock",
      "url": "https://pokeapi.co/api/v2/pokemon/377/",
      "id": 377,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/377.ogg"
  },
  {
      "name": "regice",
      "url": "https://pokeapi.co/api/v2/pokemon/378/",
      "id": 378,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/378.ogg"
  },
  {
      "name": "registeel",
      "url": "https://pokeapi.co/api/v2/pokemon/379/",
      "id": 379,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/379.ogg"
  },
  {
      "name": "latias",
      "url": "https://pokeapi.co/api/v2/pokemon/380/",
      "id": 380,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/380.ogg"
  },
  {
      "name": "latios",
      "url": "https://pokeapi.co/api/v2/pokemon/381/",
      "id": 381,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/381.ogg"
  },
  {
      "name": "kyogre",
      "url": "https://pokeapi.co/api/v2/pokemon/382/",
      "id": 382,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/382.ogg"
  },
  {
      "name": "groudon",
      "url": "https://pokeapi.co/api/v2/pokemon/383/",
      "id": 383,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/383.ogg"
  },
  {
      "name": "rayquaza",
      "url": "https://pokeapi.co/api/v2/pokemon/384/",
      "id": 384,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/384.ogg"
  },
  {
      "name": "jirachi",
      "url": "https://pokeapi.co/api/v2/pokemon/385/",
      "id": 385,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/385.ogg"
  },
  {
      "name": "deoxys",
      "url": "https://pokeapi.co/api/v2/pokemon/386/",
      "id": 386,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/386.ogg"
  },
  {
      "name": "turtwig",
      "url": "https://pokeapi.co/api/v2/pokemon/387/",
      "id": 387,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/387.ogg"
  },
  {
      "name": "grotle",
      "url": "https://pokeapi.co/api/v2/pokemon/388/",
      "id": 388,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/388.ogg"
  },
  {
      "name": "torterra",
      "url": "https://pokeapi.co/api/v2/pokemon/389/",
      "id": 389,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/389.ogg"
  },
  {
      "name": "chimchar",
      "url": "https://pokeapi.co/api/v2/pokemon/390/",
      "id": 390,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/390.ogg"
  },
  {
      "name": "monferno",
      "url": "https://pokeapi.co/api/v2/pokemon/391/",
      "id": 391,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/391.ogg"
  },
  {
      "name": "infernape",
      "url": "https://pokeapi.co/api/v2/pokemon/392/",
      "id": 392,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/392.ogg"
  },
  {
      "name": "piplup",
      "url": "https://pokeapi.co/api/v2/pokemon/393/",
      "id": 393,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/393.ogg"
  },
  {
      "name": "prinplup",
      "url": "https://pokeapi.co/api/v2/pokemon/394/",
      "id": 394,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/394.ogg"
  },
  {
      "name": "empoleon",
      "url": "https://pokeapi.co/api/v2/pokemon/395/",
      "id": 395,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/395.ogg"
  },
  {
      "name": "starly",
      "url": "https://pokeapi.co/api/v2/pokemon/396/",
      "id": 396,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/396.ogg"
  },
  {
      "name": "staravia",
      "url": "https://pokeapi.co/api/v2/pokemon/397/",
      "id": 397,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/397.ogg"
  },
  {
      "name": "staraptor",
      "url": "https://pokeapi.co/api/v2/pokemon/398/",
      "id": 398,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/398.ogg"
  },
  {
      "name": "bidoof",
      "url": "https://pokeapi.co/api/v2/pokemon/399/",
      "id": 399,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/399.ogg"
  },
  {
      "name": "bibarel",
      "url": "https://pokeapi.co/api/v2/pokemon/400/",
      "id": 400,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/400.ogg"
  },
  {
      "name": "kricketot",
      "url": "https://pokeapi.co/api/v2/pokemon/401/",
      "id": 401,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/401.ogg"
  },
  {
      "name": "kricketune",
      "url": "https://pokeapi.co/api/v2/pokemon/402/",
      "id": 402,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/402.ogg"
  },
  {
      "name": "shinx",
      "url": "https://pokeapi.co/api/v2/pokemon/403/",
      "id": 403,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/403.ogg"
  },
  {
      "name": "luxio",
      "url": "https://pokeapi.co/api/v2/pokemon/404/",
      "id": 404,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/404.ogg"
  },
  {
      "name": "luxray",
      "url": "https://pokeapi.co/api/v2/pokemon/405/",
      "id": 405,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/405.ogg"
  },
  {
      "name": "budew",
      "url": "https://pokeapi.co/api/v2/pokemon/406/",
      "id": 406,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/406.ogg"
  },
  {
      "name": "roserade",
      "url": "https://pokeapi.co/api/v2/pokemon/407/",
      "id": 407,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/407.ogg"
  },
  {
      "name": "cranidos",
      "url": "https://pokeapi.co/api/v2/pokemon/408/",
      "id": 408,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/408.ogg"
  },
  {
      "name": "rampardos",
      "url": "https://pokeapi.co/api/v2/pokemon/409/",
      "id": 409,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/409.ogg"
  },
  {
      "name": "shieldon",
      "url": "https://pokeapi.co/api/v2/pokemon/410/",
      "id": 410,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/410.ogg"
  },
  {
      "name": "bastiodon",
      "url": "https://pokeapi.co/api/v2/pokemon/411/",
      "id": 411,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/411.ogg"
  },
  {
      "name": "burmy",
      "url": "https://pokeapi.co/api/v2/pokemon/412/",
      "id": 412,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/412.ogg"
  },
  {
      "name": "wormadam",
      "url": "https://pokeapi.co/api/v2/pokemon/413/",
      "id": 413,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/413.ogg"
  },
  {
      "name": "mothim",
      "url": "https://pokeapi.co/api/v2/pokemon/414/",
      "id": 414,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/414.ogg"
  },
  {
      "name": "combee",
      "url": "https://pokeapi.co/api/v2/pokemon/415/",
      "id": 415,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/415.ogg"
  },
  {
      "name": "vespiquen",
      "url": "https://pokeapi.co/api/v2/pokemon/416/",
      "id": 416,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/416.ogg"
  },
  {
      "name": "pachirisu",
      "url": "https://pokeapi.co/api/v2/pokemon/417/",
      "id": 417,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/417.ogg"
  },
  {
      "name": "buizel",
      "url": "https://pokeapi.co/api/v2/pokemon/418/",
      "id": 418,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/418.ogg"
  },
  {
      "name": "floatzel",
      "url": "https://pokeapi.co/api/v2/pokemon/419/",
      "id": 419,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/419.ogg"
  },
  {
      "name": "cherubi",
      "url": "https://pokeapi.co/api/v2/pokemon/420/",
      "id": 420,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/420.ogg"
  },
  {
      "name": "cherrim",
      "url": "https://pokeapi.co/api/v2/pokemon/421/",
      "id": 421,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/421.ogg"
  },
  {
      "name": "shellos",
      "url": "https://pokeapi.co/api/v2/pokemon/422/",
      "id": 422,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/422.ogg"
  },
  {
      "name": "gastrodon",
      "url": "https://pokeapi.co/api/v2/pokemon/423/",
      "id": 423,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/423.ogg"
  },
  {
      "name": "ambipom",
      "url": "https://pokeapi.co/api/v2/pokemon/424/",
      "id": 424,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/424.ogg"
  },
  {
      "name": "drifloon",
      "url": "https://pokeapi.co/api/v2/pokemon/425/",
      "id": 425,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/425.ogg"
  },
  {
      "name": "drifblim",
      "url": "https://pokeapi.co/api/v2/pokemon/426/",
      "id": 426,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/426.ogg"
  },
  {
      "name": "buneary",
      "url": "https://pokeapi.co/api/v2/pokemon/427/",
      "id": 427,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/427.ogg"
  },
  {
      "name": "lopunny",
      "url": "https://pokeapi.co/api/v2/pokemon/428/",
      "id": 428,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/428.ogg"
  },
  {
      "name": "mismagius",
      "url": "https://pokeapi.co/api/v2/pokemon/429/",
      "id": 429,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/429.ogg"
  },
  {
      "name": "honchkrow",
      "url": "https://pokeapi.co/api/v2/pokemon/430/",
      "id": 430,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/430.ogg"
  },
  {
      "name": "glameow",
      "url": "https://pokeapi.co/api/v2/pokemon/431/",
      "id": 431,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/431.ogg"
  },
  {
      "name": "purugly",
      "url": "https://pokeapi.co/api/v2/pokemon/432/",
      "id": 432,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/432.ogg"
  },
  {
      "name": "chingling",
      "url": "https://pokeapi.co/api/v2/pokemon/433/",
      "id": 433,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/433.ogg"
  },
  {
      "name": "stunky",
      "url": "https://pokeapi.co/api/v2/pokemon/434/",
      "id": 434,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/434.ogg"
  },
  {
      "name": "skuntank",
      "url": "https://pokeapi.co/api/v2/pokemon/435/",
      "id": 435,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/435.ogg"
  },
  {
      "name": "bronzor",
      "url": "https://pokeapi.co/api/v2/pokemon/436/",
      "id": 436,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/436.ogg"
  },
  {
      "name": "bronzong",
      "url": "https://pokeapi.co/api/v2/pokemon/437/",
      "id": 437,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/437.ogg"
  },
  {
      "name": "bonsly",
      "url": "https://pokeapi.co/api/v2/pokemon/438/",
      "id": 438,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/438.ogg"
  },
  {
      "name": "mime-jr",
      "url": "https://pokeapi.co/api/v2/pokemon/439/",
      "id": 439,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/439.ogg"
  },
  {
      "name": "happiny",
      "url": "https://pokeapi.co/api/v2/pokemon/440/",
      "id": 440,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/440.ogg"
  },
  {
      "name": "chatot",
      "url": "https://pokeapi.co/api/v2/pokemon/441/",
      "id": 441,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/441.ogg"
  },
  {
      "name": "spiritomb",
      "url": "https://pokeapi.co/api/v2/pokemon/442/",
      "id": 442,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/442.ogg"
  },
  {
      "name": "gible",
      "url": "https://pokeapi.co/api/v2/pokemon/443/",
      "id": 443,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/443.ogg"
  },
  {
      "name": "gabite",
      "url": "https://pokeapi.co/api/v2/pokemon/444/",
      "id": 444,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/444.ogg"
  },
  {
      "name": "garchomp",
      "url": "https://pokeapi.co/api/v2/pokemon/445/",
      "id": 445,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/445.ogg"
  },
  {
      "name": "munchlax",
      "url": "https://pokeapi.co/api/v2/pokemon/446/",
      "id": 446,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/446.ogg"
  },
  {
      "name": "riolu",
      "url": "https://pokeapi.co/api/v2/pokemon/447/",
      "id": 447,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/447.ogg"
  },
  {
      "name": "lucario",
      "url": "https://pokeapi.co/api/v2/pokemon/448/",
      "id": 448,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/448.ogg"
  },
  {
      "name": "hippopotas",
      "url": "https://pokeapi.co/api/v2/pokemon/449/",
      "id": 449,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/449.ogg"
  },
  {
      "name": "hippowdon",
      "url": "https://pokeapi.co/api/v2/pokemon/450/",
      "id": 450,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/450.ogg"
  },
  {
      "name": "skorupi",
      "url": "https://pokeapi.co/api/v2/pokemon/451/",
      "id": 451,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/451.ogg"
  },
  {
      "name": "drapion",
      "url": "https://pokeapi.co/api/v2/pokemon/452/",
      "id": 452,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/452.ogg"
  },
  {
      "name": "croagunk",
      "url": "https://pokeapi.co/api/v2/pokemon/453/",
      "id": 453,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/453.ogg"
  },
  {
      "name": "toxicroak",
      "url": "https://pokeapi.co/api/v2/pokemon/454/",
      "id": 454,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/454.ogg"
  },
  {
      "name": "carnivine",
      "url": "https://pokeapi.co/api/v2/pokemon/455/",
      "id": 455,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/455.ogg"
  },
  {
      "name": "finneon",
      "url": "https://pokeapi.co/api/v2/pokemon/456/",
      "id": 456,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/456.ogg"
  },
  {
      "name": "lumineon",
      "url": "https://pokeapi.co/api/v2/pokemon/457/",
      "id": 457,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/457.ogg"
  },
  {
      "name": "mantyke",
      "url": "https://pokeapi.co/api/v2/pokemon/458/",
      "id": 458,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/458.ogg"
  },
  {
      "name": "snover",
      "url": "https://pokeapi.co/api/v2/pokemon/459/",
      "id": 459,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/459.ogg"
  },
  {
      "name": "abomasnow",
      "url": "https://pokeapi.co/api/v2/pokemon/460/",
      "id": 460,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/460.ogg"
  },
  {
      "name": "weavile",
      "url": "https://pokeapi.co/api/v2/pokemon/461/",
      "id": 461,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/461.ogg"
  },
  {
      "name": "magnezone",
      "url": "https://pokeapi.co/api/v2/pokemon/462/",
      "id": 462,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/462.ogg"
  },
  {
      "name": "lickilicky",
      "url": "https://pokeapi.co/api/v2/pokemon/463/",
      "id": 463,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/463.ogg"
  },
  {
      "name": "rhyperior",
      "url": "https://pokeapi.co/api/v2/pokemon/464/",
      "id": 464,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/464.ogg"
  },
  {
      "name": "tangrowth",
      "url": "https://pokeapi.co/api/v2/pokemon/465/",
      "id": 465,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/465.ogg"
  },
  {
      "name": "electivire",
      "url": "https://pokeapi.co/api/v2/pokemon/466/",
      "id": 466,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/466.ogg"
  },
  {
      "name": "magmortar",
      "url": "https://pokeapi.co/api/v2/pokemon/467/",
      "id": 467,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/467.ogg"
  },
  {
      "name": "togekiss",
      "url": "https://pokeapi.co/api/v2/pokemon/468/",
      "id": 468,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/468.ogg"
  },
  {
      "name": "yanmega",
      "url": "https://pokeapi.co/api/v2/pokemon/469/",
      "id": 469,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/469.ogg"
  },
  {
      "name": "leafeon",
      "url": "https://pokeapi.co/api/v2/pokemon/470/",
      "id": 470,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/470.ogg"
  },
  {
      "name": "glaceon",
      "url": "https://pokeapi.co/api/v2/pokemon/471/",
      "id": 471,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/471.ogg"
  },
  {
      "name": "gliscor",
      "url": "https://pokeapi.co/api/v2/pokemon/472/",
      "id": 472,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/472.ogg"
  },
  {
      "name": "mamoswine",
      "url": "https://pokeapi.co/api/v2/pokemon/473/",
      "id": 473,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/473.ogg"
  },
  {
      "name": "porygon-z",
      "url": "https://pokeapi.co/api/v2/pokemon/474/",
      "id": 474,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/474.ogg"
  },
  {
      "name": "gallade",
      "url": "https://pokeapi.co/api/v2/pokemon/475/",
      "id": 475,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/475.ogg"
  },
  {
      "name": "probopass",
      "url": "https://pokeapi.co/api/v2/pokemon/476/",
      "id": 476,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/476.ogg"
  },
  {
      "name": "dusknoir",
      "url": "https://pokeapi.co/api/v2/pokemon/477/",
      "id": 477,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/477.ogg"
  },
  {
      "name": "froslass",
      "url": "https://pokeapi.co/api/v2/pokemon/478/",
      "id": 478,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/478.ogg"
  },
  {
      "name": "rotom",
      "url": "https://pokeapi.co/api/v2/pokemon/479/",
      "id": 479,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/479.ogg"
  },
  {
      "name": "uxie",
      "url": "https://pokeapi.co/api/v2/pokemon/480/",
      "id": 480,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/480.ogg"
  },
  {
      "name": "mesprit",
      "url": "https://pokeapi.co/api/v2/pokemon/481/",
      "id": 481,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/481.ogg"
  },
  {
      "name": "azelf",
      "url": "https://pokeapi.co/api/v2/pokemon/482/",
      "id": 482,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/482.ogg"
  },
  {
      "name": "dialga",
      "url": "https://pokeapi.co/api/v2/pokemon/483/",
      "id": 483,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/483.ogg"
  },
  {
      "name": "palkia",
      "url": "https://pokeapi.co/api/v2/pokemon/484/",
      "id": 484,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/484.ogg"
  },
  {
      "name": "heatran",
      "url": "https://pokeapi.co/api/v2/pokemon/485/",
      "id": 485,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/485.ogg"
  },
  {
      "name": "regigigas",
      "url": "https://pokeapi.co/api/v2/pokemon/486/",
      "id": 486,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/486.ogg"
  },
  {
      "name": "giratina",
      "url": "https://pokeapi.co/api/v2/pokemon/487/",
      "id": 487,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/487.ogg"
  },
  {
      "name": "cresselia",
      "url": "https://pokeapi.co/api/v2/pokemon/488/",
      "id": 488,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/488.ogg"
  },
  {
      "name": "phione",
      "url": "https://pokeapi.co/api/v2/pokemon/489/",
      "id": 489,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/489.ogg"
  },
  {
      "name": "manaphy",
      "url": "https://pokeapi.co/api/v2/pokemon/490/",
      "id": 490,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/490.ogg"
  },
  {
      "name": "darkrai",
      "url": "https://pokeapi.co/api/v2/pokemon/491/",
      "id": 491,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/491.ogg"
  },
  {
      "name": "shaymin",
      "url": "https://pokeapi.co/api/v2/pokemon/492/",
      "id": 492,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/492.ogg"
  },
  {
      "name": "arceus",
      "url": "https://pokeapi.co/api/v2/pokemon/493/",
      "id": 493,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/493.ogg"
  },
  {
      "name": "victini",
      "url": "https://pokeapi.co/api/v2/pokemon/494/",
      "id": 494,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/494.ogg"
  },
  {
      "name": "snivy",
      "url": "https://pokeapi.co/api/v2/pokemon/495/",
      "id": 495,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/495.ogg"
  },
  {
      "name": "servine",
      "url": "https://pokeapi.co/api/v2/pokemon/496/",
      "id": 496,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/496.ogg"
  },
  {
      "name": "serperior",
      "url": "https://pokeapi.co/api/v2/pokemon/497/",
      "id": 497,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/497.ogg"
  },
  {
      "name": "tepig",
      "url": "https://pokeapi.co/api/v2/pokemon/498/",
      "id": 498,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/498.ogg"
  },
  {
      "name": "pignite",
      "url": "https://pokeapi.co/api/v2/pokemon/499/",
      "id": 499,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/499.ogg"
  },
  {
      "name": "emboar",
      "url": "https://pokeapi.co/api/v2/pokemon/500/",
      "id": 500,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/500.ogg"
  },
  {
      "name": "oshawott",
      "url": "https://pokeapi.co/api/v2/pokemon/501/",
      "id": 501,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/501.ogg"
  },
  {
      "name": "dewott",
      "url": "https://pokeapi.co/api/v2/pokemon/502/",
      "id": 502,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/502.ogg"
  },
  {
      "name": "samurott",
      "url": "https://pokeapi.co/api/v2/pokemon/503/",
      "id": 503,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/503.ogg"
  },
  {
      "name": "patrat",
      "url": "https://pokeapi.co/api/v2/pokemon/504/",
      "id": 504,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/504.ogg"
  },
  {
      "name": "watchog",
      "url": "https://pokeapi.co/api/v2/pokemon/505/",
      "id": 505,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/505.ogg"
  },
  {
      "name": "lillipup",
      "url": "https://pokeapi.co/api/v2/pokemon/506/",
      "id": 506,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/506.ogg"
  },
  {
      "name": "herdier",
      "url": "https://pokeapi.co/api/v2/pokemon/507/",
      "id": 507,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/507.ogg"
  },
  {
      "name": "stoutland",
      "url": "https://pokeapi.co/api/v2/pokemon/508/",
      "id": 508,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/508.ogg"
  },
  {
      "name": "purrloin",
      "url": "https://pokeapi.co/api/v2/pokemon/509/",
      "id": 509,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/509.ogg"
  },
  {
      "name": "liepard",
      "url": "https://pokeapi.co/api/v2/pokemon/510/",
      "id": 510,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/510.ogg"
  },
  {
      "name": "pansage",
      "url": "https://pokeapi.co/api/v2/pokemon/511/",
      "id": 511,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/511.ogg"
  },
  {
      "name": "simisage",
      "url": "https://pokeapi.co/api/v2/pokemon/512/",
      "id": 512,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/512.ogg"
  },
  {
      "name": "pansear",
      "url": "https://pokeapi.co/api/v2/pokemon/513/",
      "id": 513,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/513.ogg"
  },
  {
      "name": "simisear",
      "url": "https://pokeapi.co/api/v2/pokemon/514/",
      "id": 514,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/514.ogg"
  },
  {
      "name": "panpour",
      "url": "https://pokeapi.co/api/v2/pokemon/515/",
      "id": 515,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/515.ogg"
  },
  {
      "name": "simipour",
      "url": "https://pokeapi.co/api/v2/pokemon/516/",
      "id": 516,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/516.ogg"
  },
  {
      "name": "munna",
      "url": "https://pokeapi.co/api/v2/pokemon/517/",
      "id": 517,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/517.ogg"
  },
  {
      "name": "musharna",
      "url": "https://pokeapi.co/api/v2/pokemon/518/",
      "id": 518,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/518.ogg"
  },
  {
      "name": "pidove",
      "url": "https://pokeapi.co/api/v2/pokemon/519/",
      "id": 519,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/519.ogg"
  },
  {
      "name": "tranquill",
      "url": "https://pokeapi.co/api/v2/pokemon/520/",
      "id": 520,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/520.ogg"
  },
  {
      "name": "unfezant",
      "url": "https://pokeapi.co/api/v2/pokemon/521/",
      "id": 521,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/521.ogg"
  },
  {
      "name": "blitzle",
      "url": "https://pokeapi.co/api/v2/pokemon/522/",
      "id": 522,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/522.ogg"
  },
  {
      "name": "zebstrika",
      "url": "https://pokeapi.co/api/v2/pokemon/523/",
      "id": 523,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/523.ogg"
  },
  {
      "name": "roggenrola",
      "url": "https://pokeapi.co/api/v2/pokemon/524/",
      "id": 524,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/524.ogg"
  },
  {
      "name": "boldore",
      "url": "https://pokeapi.co/api/v2/pokemon/525/",
      "id": 525,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/525.ogg"
  },
  {
      "name": "gigalith",
      "url": "https://pokeapi.co/api/v2/pokemon/526/",
      "id": 526,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/526.ogg"
  },
  {
      "name": "woobat",
      "url": "https://pokeapi.co/api/v2/pokemon/527/",
      "id": 527,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/527.ogg"
  },
  {
      "name": "swoobat",
      "url": "https://pokeapi.co/api/v2/pokemon/528/",
      "id": 528,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/528.ogg"
  },
  {
      "name": "drilbur",
      "url": "https://pokeapi.co/api/v2/pokemon/529/",
      "id": 529,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/529.ogg"
  },
  {
      "name": "excadrill",
      "url": "https://pokeapi.co/api/v2/pokemon/530/",
      "id": 530,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/530.ogg"
  },
  {
      "name": "audino",
      "url": "https://pokeapi.co/api/v2/pokemon/531/",
      "id": 531,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/531.ogg"
  },
  {
      "name": "timburr",
      "url": "https://pokeapi.co/api/v2/pokemon/532/",
      "id": 532,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/532.ogg"
  },
  {
      "name": "gurdurr",
      "url": "https://pokeapi.co/api/v2/pokemon/533/",
      "id": 533,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/533.ogg"
  },
  {
      "name": "conkeldurr",
      "url": "https://pokeapi.co/api/v2/pokemon/534/",
      "id": 534,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/534.ogg"
  },
  {
      "name": "tympole",
      "url": "https://pokeapi.co/api/v2/pokemon/535/",
      "id": 535,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/535.ogg"
  },
  {
      "name": "palpitoad",
      "url": "https://pokeapi.co/api/v2/pokemon/536/",
      "id": 536,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/536.ogg"
  },
  {
      "name": "seismitoad",
      "url": "https://pokeapi.co/api/v2/pokemon/537/",
      "id": 537,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/537.ogg"
  },
  {
      "name": "throh",
      "url": "https://pokeapi.co/api/v2/pokemon/538/",
      "id": 538,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/538.ogg"
  },
  {
      "name": "sawk",
      "url": "https://pokeapi.co/api/v2/pokemon/539/",
      "id": 539,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/539.ogg"
  },
  {
      "name": "sewaddle",
      "url": "https://pokeapi.co/api/v2/pokemon/540/",
      "id": 540,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/540.ogg"
  },
  {
      "name": "swadloon",
      "url": "https://pokeapi.co/api/v2/pokemon/541/",
      "id": 541,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/541.ogg"
  },
  {
      "name": "leavanny",
      "url": "https://pokeapi.co/api/v2/pokemon/542/",
      "id": 542,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/542.ogg"
  },
  {
      "name": "venipede",
      "url": "https://pokeapi.co/api/v2/pokemon/543/",
      "id": 543,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/543.ogg"
  },
  {
      "name": "whirlipede",
      "url": "https://pokeapi.co/api/v2/pokemon/544/",
      "id": 544,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/544.ogg"
  },
  {
      "name": "scolipede",
      "url": "https://pokeapi.co/api/v2/pokemon/545/",
      "id": 545,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/545.ogg"
  },
  {
      "name": "cottonee",
      "url": "https://pokeapi.co/api/v2/pokemon/546/",
      "id": 546,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/546.ogg"
  },
  {
      "name": "whimsicott",
      "url": "https://pokeapi.co/api/v2/pokemon/547/",
      "id": 547,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/547.ogg"
  },
  {
      "name": "petilil",
      "url": "https://pokeapi.co/api/v2/pokemon/548/",
      "id": 548,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/548.ogg"
  },
  {
      "name": "lilligant",
      "url": "https://pokeapi.co/api/v2/pokemon/549/",
      "id": 549,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/549.ogg"
  },
  {
      "name": "basculin",
      "url": "https://pokeapi.co/api/v2/pokemon/550/",
      "id": 550,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/550.ogg"
  },
  {
      "name": "sandile",
      "url": "https://pokeapi.co/api/v2/pokemon/551/",
      "id": 551,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/551.ogg"
  },
  {
      "name": "krokorok",
      "url": "https://pokeapi.co/api/v2/pokemon/552/",
      "id": 552,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/552.ogg"
  },
  {
      "name": "krookodile",
      "url": "https://pokeapi.co/api/v2/pokemon/553/",
      "id": 553,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/553.ogg"
  },
  {
      "name": "darumaka",
      "url": "https://pokeapi.co/api/v2/pokemon/554/",
      "id": 554,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/554.ogg"
  },
  {
      "name": "darmanitan",
      "url": "https://pokeapi.co/api/v2/pokemon/555/",
      "id": 555,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/555.ogg"
  },
  {
      "name": "maractus",
      "url": "https://pokeapi.co/api/v2/pokemon/556/",
      "id": 556,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/556.ogg"
  },
  {
      "name": "dwebble",
      "url": "https://pokeapi.co/api/v2/pokemon/557/",
      "id": 557,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/557.ogg"
  },
  {
      "name": "crustle",
      "url": "https://pokeapi.co/api/v2/pokemon/558/",
      "id": 558,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/558.ogg"
  },
  {
      "name": "scraggy",
      "url": "https://pokeapi.co/api/v2/pokemon/559/",
      "id": 559,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/559.ogg"
  },
  {
      "name": "scrafty",
      "url": "https://pokeapi.co/api/v2/pokemon/560/",
      "id": 560,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/560.ogg"
  },
  {
      "name": "sigilyph",
      "url": "https://pokeapi.co/api/v2/pokemon/561/",
      "id": 561,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/561.ogg"
  },
  {
      "name": "yamask",
      "url": "https://pokeapi.co/api/v2/pokemon/562/",
      "id": 562,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/562.ogg"
  },
  {
      "name": "cofagrigus",
      "url": "https://pokeapi.co/api/v2/pokemon/563/",
      "id": 563,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/563.ogg"
  },
  {
      "name": "tirtouga",
      "url": "https://pokeapi.co/api/v2/pokemon/564/",
      "id": 564,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/564.ogg"
  },
  {
      "name": "carracosta",
      "url": "https://pokeapi.co/api/v2/pokemon/565/",
      "id": 565,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/565.ogg"
  },
  {
      "name": "archen",
      "url": "https://pokeapi.co/api/v2/pokemon/566/",
      "id": 566,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/566.ogg"
  },
  {
      "name": "archeops",
      "url": "https://pokeapi.co/api/v2/pokemon/567/",
      "id": 567,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/567.ogg"
  },
  {
      "name": "trubbish",
      "url": "https://pokeapi.co/api/v2/pokemon/568/",
      "id": 568,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/568.ogg"
  },
  {
      "name": "garbodor",
      "url": "https://pokeapi.co/api/v2/pokemon/569/",
      "id": 569,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/569.ogg"
  },
  {
      "name": "zorua",
      "url": "https://pokeapi.co/api/v2/pokemon/570/",
      "id": 570,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/570.ogg"
  },
  {
      "name": "zoroark",
      "url": "https://pokeapi.co/api/v2/pokemon/571/",
      "id": 571,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/571.ogg"
  },
  {
      "name": "minccino",
      "url": "https://pokeapi.co/api/v2/pokemon/572/",
      "id": 572,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/572.ogg"
  },
  {
      "name": "cinccino",
      "url": "https://pokeapi.co/api/v2/pokemon/573/",
      "id": 573,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/573.ogg"
  },
  {
      "name": "gothita",
      "url": "https://pokeapi.co/api/v2/pokemon/574/",
      "id": 574,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/574.ogg"
  },
  {
      "name": "gothorita",
      "url": "https://pokeapi.co/api/v2/pokemon/575/",
      "id": 575,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/575.ogg"
  },
  {
      "name": "gothitelle",
      "url": "https://pokeapi.co/api/v2/pokemon/576/",
      "id": 576,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/576.ogg"
  },
  {
      "name": "solosis",
      "url": "https://pokeapi.co/api/v2/pokemon/577/",
      "id": 577,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/577.ogg"
  },
  {
      "name": "duosion",
      "url": "https://pokeapi.co/api/v2/pokemon/578/",
      "id": 578,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/578.ogg"
  },
  {
      "name": "reuniclus",
      "url": "https://pokeapi.co/api/v2/pokemon/579/",
      "id": 579,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/579.ogg"
  },
  {
      "name": "ducklett",
      "url": "https://pokeapi.co/api/v2/pokemon/580/",
      "id": 580,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/580.ogg"
  },
  {
      "name": "swanna",
      "url": "https://pokeapi.co/api/v2/pokemon/581/",
      "id": 581,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/581.ogg"
  },
  {
      "name": "vanillite",
      "url": "https://pokeapi.co/api/v2/pokemon/582/",
      "id": 582,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/582.ogg"
  },
  {
      "name": "vanillish",
      "url": "https://pokeapi.co/api/v2/pokemon/583/",
      "id": 583,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/583.ogg"
  },
  {
      "name": "vanilluxe",
      "url": "https://pokeapi.co/api/v2/pokemon/584/",
      "id": 584,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/584.ogg"
  },
  {
      "name": "deerling",
      "url": "https://pokeapi.co/api/v2/pokemon/585/",
      "id": 585,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/585.ogg"
  },
  {
      "name": "sawsbuck",
      "url": "https://pokeapi.co/api/v2/pokemon/586/",
      "id": 586,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/586.ogg"
  },
  {
      "name": "emolga",
      "url": "https://pokeapi.co/api/v2/pokemon/587/",
      "id": 587,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/587.ogg"
  },
  {
      "name": "karrablast",
      "url": "https://pokeapi.co/api/v2/pokemon/588/",
      "id": 588,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/588.ogg"
  },
  {
      "name": "escavalier",
      "url": "https://pokeapi.co/api/v2/pokemon/589/",
      "id": 589,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/589.ogg"
  },
  {
      "name": "foongus",
      "url": "https://pokeapi.co/api/v2/pokemon/590/",
      "id": 590,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/590.ogg"
  },
  {
      "name": "amoonguss",
      "url": "https://pokeapi.co/api/v2/pokemon/591/",
      "id": 591,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/591.ogg"
  },
  {
      "name": "frillish",
      "url": "https://pokeapi.co/api/v2/pokemon/592/",
      "id": 592,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/592.ogg"
  },
  {
      "name": "jellicent",
      "url": "https://pokeapi.co/api/v2/pokemon/593/",
      "id": 593,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/593.ogg"
  },
  {
      "name": "alomomola",
      "url": "https://pokeapi.co/api/v2/pokemon/594/",
      "id": 594,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/594.ogg"
  },
  {
      "name": "joltik",
      "url": "https://pokeapi.co/api/v2/pokemon/595/",
      "id": 595,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/595.ogg"
  },
  {
      "name": "galvantula",
      "url": "https://pokeapi.co/api/v2/pokemon/596/",
      "id": 596,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/596.ogg"
  },
  {
      "name": "ferroseed",
      "url": "https://pokeapi.co/api/v2/pokemon/597/",
      "id": 597,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/597.ogg"
  },
  {
      "name": "ferrothorn",
      "url": "https://pokeapi.co/api/v2/pokemon/598/",
      "id": 598,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/598.ogg"
  },
  {
      "name": "klink",
      "url": "https://pokeapi.co/api/v2/pokemon/599/",
      "id": 599,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/599.ogg"
  },
  {
      "name": "klang",
      "url": "https://pokeapi.co/api/v2/pokemon/600/",
      "id": 600,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/600.ogg"
  },
  {
      "name": "klinklang",
      "url": "https://pokeapi.co/api/v2/pokemon/601/",
      "id": 601,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/601.ogg"
  },
  {
      "name": "tynamo",
      "url": "https://pokeapi.co/api/v2/pokemon/602/",
      "id": 602,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/602.ogg"
  },
  {
      "name": "eelektrik",
      "url": "https://pokeapi.co/api/v2/pokemon/603/",
      "id": 603,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/603.ogg"
  },
  {
      "name": "eelektross",
      "url": "https://pokeapi.co/api/v2/pokemon/604/",
      "id": 604,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/604.ogg"
  },
  {
      "name": "elgyem",
      "url": "https://pokeapi.co/api/v2/pokemon/605/",
      "id": 605,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/605.ogg"
  },
  {
      "name": "beheeyem",
      "url": "https://pokeapi.co/api/v2/pokemon/606/",
      "id": 606,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/606.ogg"
  },
  {
      "name": "litwick",
      "url": "https://pokeapi.co/api/v2/pokemon/607/",
      "id": 607,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/607.ogg"
  },
  {
      "name": "lampent",
      "url": "https://pokeapi.co/api/v2/pokemon/608/",
      "id": 608,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/608.ogg"
  },
  {
      "name": "chandelure",
      "url": "https://pokeapi.co/api/v2/pokemon/609/",
      "id": 609,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/609.ogg"
  },
  {
      "name": "axew",
      "url": "https://pokeapi.co/api/v2/pokemon/610/",
      "id": 610,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/610.ogg"
  },
  {
      "name": "fraxure",
      "url": "https://pokeapi.co/api/v2/pokemon/611/",
      "id": 611,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/611.ogg"
  },
  {
      "name": "haxorus",
      "url": "https://pokeapi.co/api/v2/pokemon/612/",
      "id": 612,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/612.ogg"
  },
  {
      "name": "cubchoo",
      "url": "https://pokeapi.co/api/v2/pokemon/613/",
      "id": 613,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/613.ogg"
  },
  {
      "name": "beartic",
      "url": "https://pokeapi.co/api/v2/pokemon/614/",
      "id": 614,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/614.ogg"
  },
  {
      "name": "cryogonal",
      "url": "https://pokeapi.co/api/v2/pokemon/615/",
      "id": 615,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/615.ogg"
  },
  {
      "name": "shelmet",
      "url": "https://pokeapi.co/api/v2/pokemon/616/",
      "id": 616,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/616.ogg"
  },
  {
      "name": "accelgor",
      "url": "https://pokeapi.co/api/v2/pokemon/617/",
      "id": 617,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/617.ogg"
  },
  {
      "name": "stunfisk",
      "url": "https://pokeapi.co/api/v2/pokemon/618/",
      "id": 618,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/618.ogg"
  },
  {
      "name": "mienfoo",
      "url": "https://pokeapi.co/api/v2/pokemon/619/",
      "id": 619,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/619.ogg"
  },
  {
      "name": "mienshao",
      "url": "https://pokeapi.co/api/v2/pokemon/620/",
      "id": 620,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/620.ogg"
  },
  {
      "name": "druddigon",
      "url": "https://pokeapi.co/api/v2/pokemon/621/",
      "id": 621,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/621.ogg"
  },
  {
      "name": "golett",
      "url": "https://pokeapi.co/api/v2/pokemon/622/",
      "id": 622,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/622.ogg"
  },
  {
      "name": "golurk",
      "url": "https://pokeapi.co/api/v2/pokemon/623/",
      "id": 623,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/623.ogg"
  },
  {
      "name": "pawniard",
      "url": "https://pokeapi.co/api/v2/pokemon/624/",
      "id": 624,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/624.ogg"
  },
  {
      "name": "bisharp",
      "url": "https://pokeapi.co/api/v2/pokemon/625/",
      "id": 625,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/625.ogg"
  },
  {
      "name": "bouffalant",
      "url": "https://pokeapi.co/api/v2/pokemon/626/",
      "id": 626,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/626.ogg"
  },
  {
      "name": "rufflet",
      "url": "https://pokeapi.co/api/v2/pokemon/627/",
      "id": 627,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/627.ogg"
  },
  {
      "name": "braviary",
      "url": "https://pokeapi.co/api/v2/pokemon/628/",
      "id": 628,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/628.ogg"
  },
  {
      "name": "vullaby",
      "url": "https://pokeapi.co/api/v2/pokemon/629/",
      "id": 629,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/629.ogg"
  },
  {
      "name": "mandibuzz",
      "url": "https://pokeapi.co/api/v2/pokemon/630/",
      "id": 630,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/630.ogg"
  },
  {
      "name": "heatmor",
      "url": "https://pokeapi.co/api/v2/pokemon/631/",
      "id": 631,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/631.ogg"
  },
  {
      "name": "durant",
      "url": "https://pokeapi.co/api/v2/pokemon/632/",
      "id": 632,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/632.ogg"
  },
  {
      "name": "deino",
      "url": "https://pokeapi.co/api/v2/pokemon/633/",
      "id": 633,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/633.ogg"
  },
  {
      "name": "zweilous",
      "url": "https://pokeapi.co/api/v2/pokemon/634/",
      "id": 634,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/634.ogg"
  },
  {
      "name": "hydreigon",
      "url": "https://pokeapi.co/api/v2/pokemon/635/",
      "id": 635,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/635.ogg"
  },
  {
      "name": "larvesta",
      "url": "https://pokeapi.co/api/v2/pokemon/636/",
      "id": 636,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/636.ogg"
  },
  {
      "name": "volcarona",
      "url": "https://pokeapi.co/api/v2/pokemon/637/",
      "id": 637,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/637.ogg"
  },
  {
      "name": "cobalion",
      "url": "https://pokeapi.co/api/v2/pokemon/638/",
      "id": 638,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/638.ogg"
  },
  {
      "name": "terrakion",
      "url": "https://pokeapi.co/api/v2/pokemon/639/",
      "id": 639,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/639.ogg"
  },
  {
      "name": "virizion",
      "url": "https://pokeapi.co/api/v2/pokemon/640/",
      "id": 640,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/640.ogg"
  },
  {
      "name": "tornadus",
      "url": "https://pokeapi.co/api/v2/pokemon/641/",
      "id": 641,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/641.ogg"
  },
  {
      "name": "thundurus",
      "url": "https://pokeapi.co/api/v2/pokemon/642/",
      "id": 642,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/642.ogg"
  },
  {
      "name": "reshiram",
      "url": "https://pokeapi.co/api/v2/pokemon/643/",
      "id": 643,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/643.ogg"
  },
  {
      "name": "zekrom",
      "url": "https://pokeapi.co/api/v2/pokemon/644/",
      "id": 644,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/644.ogg"
  },
  {
      "name": "landorus",
      "url": "https://pokeapi.co/api/v2/pokemon/645/",
      "id": 645,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/645.ogg"
  },
  {
      "name": "kyurem",
      "url": "https://pokeapi.co/api/v2/pokemon/646/",
      "id": 646,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/646.ogg"
  },
  {
      "name": "keldeo",
      "url": "https://pokeapi.co/api/v2/pokemon/647/",
      "id": 647,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/647.ogg"
  },
  {
      "name": "meloetta",
      "url": "https://pokeapi.co/api/v2/pokemon/648/",
      "id": 648,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/648.ogg"
  },
  {
      "name": "genesect",
      "url": "https://pokeapi.co/api/v2/pokemon/649/",
      "id": 649,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/649.ogg"
  },
  {
      "name": "chespin",
      "url": "https://pokeapi.co/api/v2/pokemon/650/",
      "id": 650,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/650.ogg"
  },
  {
      "name": "quilladin",
      "url": "https://pokeapi.co/api/v2/pokemon/651/",
      "id": 651,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/651.ogg"
  },
  {
      "name": "chesnaught",
      "url": "https://pokeapi.co/api/v2/pokemon/652/",
      "id": 652,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/652.ogg"
  },
  {
      "name": "fennekin",
      "url": "https://pokeapi.co/api/v2/pokemon/653/",
      "id": 653,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/653.ogg"
  },
  {
      "name": "braixen",
      "url": "https://pokeapi.co/api/v2/pokemon/654/",
      "id": 654,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/654.ogg"
  },
  {
      "name": "delphox",
      "url": "https://pokeapi.co/api/v2/pokemon/655/",
      "id": 655,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/655.ogg"
  },
  {
      "name": "froakie",
      "url": "https://pokeapi.co/api/v2/pokemon/656/",
      "id": 656,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/656.ogg"
  },
  {
      "name": "frogadier",
      "url": "https://pokeapi.co/api/v2/pokemon/657/",
      "id": 657,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/657.ogg"
  },
  {
      "name": "greninja",
      "url": "https://pokeapi.co/api/v2/pokemon/658/",
      "id": 658,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/658.ogg"
  },
  {
      "name": "bunnelby",
      "url": "https://pokeapi.co/api/v2/pokemon/659/",
      "id": 659,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/659.ogg"
  },
  {
      "name": "diggersby",
      "url": "https://pokeapi.co/api/v2/pokemon/660/",
      "id": 660,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/660.ogg"
  },
  {
      "name": "fletchling",
      "url": "https://pokeapi.co/api/v2/pokemon/661/",
      "id": 661,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/661.ogg"
  },
  {
      "name": "fletchinder",
      "url": "https://pokeapi.co/api/v2/pokemon/662/",
      "id": 662,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/662.ogg"
  },
  {
      "name": "talonflame",
      "url": "https://pokeapi.co/api/v2/pokemon/663/",
      "id": 663,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/663.ogg"
  },
  {
      "name": "scatterbug",
      "url": "https://pokeapi.co/api/v2/pokemon/664/",
      "id": 664,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/664.ogg"
  },
  {
      "name": "spewpa",
      "url": "https://pokeapi.co/api/v2/pokemon/665/",
      "id": 665,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/665.ogg"
  },
  {
      "name": "vivillon",
      "url": "https://pokeapi.co/api/v2/pokemon/666/",
      "id": 666,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/666.ogg"
  },
  {
      "name": "litleo",
      "url": "https://pokeapi.co/api/v2/pokemon/667/",
      "id": 667,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/667.ogg"
  },
  {
      "name": "pyroar",
      "url": "https://pokeapi.co/api/v2/pokemon/668/",
      "id": 668,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/668.ogg"
  },
  {
      "name": "flabebe",
      "url": "https://pokeapi.co/api/v2/pokemon/669/",
      "id": 669,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/669.ogg"
  },
  {
      "name": "floette",
      "url": "https://pokeapi.co/api/v2/pokemon/670/",
      "id": 670,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/670.ogg"
  },
  {
      "name": "florges",
      "url": "https://pokeapi.co/api/v2/pokemon/671/",
      "id": 671,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/671.ogg"
  },
  {
      "name": "skiddo",
      "url": "https://pokeapi.co/api/v2/pokemon/672/",
      "id": 672,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/672.ogg"
  },
  {
      "name": "gogoat",
      "url": "https://pokeapi.co/api/v2/pokemon/673/",
      "id": 673,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/673.ogg"
  },
  {
      "name": "pancham",
      "url": "https://pokeapi.co/api/v2/pokemon/674/",
      "id": 674,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/674.ogg"
  },
  {
      "name": "pangoro",
      "url": "https://pokeapi.co/api/v2/pokemon/675/",
      "id": 675,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/675.ogg"
  },
  {
      "name": "furfrou",
      "url": "https://pokeapi.co/api/v2/pokemon/676/",
      "id": 676,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/676.ogg"
  },
  {
      "name": "espurr",
      "url": "https://pokeapi.co/api/v2/pokemon/677/",
      "id": 677,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/677.ogg"
  },
  {
      "name": "meowstic",
      "url": "https://pokeapi.co/api/v2/pokemon/678/",
      "id": 678,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/678.ogg"
  },
  {
      "name": "honedge",
      "url": "https://pokeapi.co/api/v2/pokemon/679/",
      "id": 679,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/679.ogg"
  },
  {
      "name": "doublade",
      "url": "https://pokeapi.co/api/v2/pokemon/680/",
      "id": 680,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/680.ogg"
  },
  {
      "name": "aegislash",
      "url": "https://pokeapi.co/api/v2/pokemon/681/",
      "id": 681,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/681.ogg"
  },
  {
      "name": "spritzee",
      "url": "https://pokeapi.co/api/v2/pokemon/682/",
      "id": 682,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/682.ogg"
  },
  {
      "name": "aromatisse",
      "url": "https://pokeapi.co/api/v2/pokemon/683/",
      "id": 683,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/683.ogg"
  },
  {
      "name": "swirlix",
      "url": "https://pokeapi.co/api/v2/pokemon/684/",
      "id": 684,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/684.ogg"
  },
  {
      "name": "slurpuff",
      "url": "https://pokeapi.co/api/v2/pokemon/685/",
      "id": 685,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/685.ogg"
  },
  {
      "name": "inkay",
      "url": "https://pokeapi.co/api/v2/pokemon/686/",
      "id": 686,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/686.ogg"
  },
  {
      "name": "malamar",
      "url": "https://pokeapi.co/api/v2/pokemon/687/",
      "id": 687,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/687.ogg"
  },
  {
      "name": "binacle",
      "url": "https://pokeapi.co/api/v2/pokemon/688/",
      "id": 688,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/688.ogg"
  },
  {
      "name": "barbaracle",
      "url": "https://pokeapi.co/api/v2/pokemon/689/",
      "id": 689,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/689.ogg"
  },
  {
      "name": "skrelp",
      "url": "https://pokeapi.co/api/v2/pokemon/690/",
      "id": 690,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/690.ogg"
  },
  {
      "name": "dragalge",
      "url": "https://pokeapi.co/api/v2/pokemon/691/",
      "id": 691,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/691.ogg"
  },
  {
      "name": "clauncher",
      "url": "https://pokeapi.co/api/v2/pokemon/692/",
      "id": 692,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/692.ogg"
  },
  {
      "name": "clawitzer",
      "url": "https://pokeapi.co/api/v2/pokemon/693/",
      "id": 693,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/693.ogg"
  },
  {
      "name": "helioptile",
      "url": "https://pokeapi.co/api/v2/pokemon/694/",
      "id": 694,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/694.ogg"
  },
  {
      "name": "heliolisk",
      "url": "https://pokeapi.co/api/v2/pokemon/695/",
      "id": 695,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/695.ogg"
  },
  {
      "name": "tyrunt",
      "url": "https://pokeapi.co/api/v2/pokemon/696/",
      "id": 696,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/696.ogg"
  },
  {
      "name": "tyrantrum",
      "url": "https://pokeapi.co/api/v2/pokemon/697/",
      "id": 697,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/697.ogg"
  },
  {
      "name": "amaura",
      "url": "https://pokeapi.co/api/v2/pokemon/698/",
      "id": 698,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/698.ogg"
  },
  {
      "name": "aurorus",
      "url": "https://pokeapi.co/api/v2/pokemon/699/",
      "id": 699,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/699.ogg"
  },
  {
      "name": "sylveon",
      "url": "https://pokeapi.co/api/v2/pokemon/700/",
      "id": 700,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/700.ogg"
  },
  {
      "name": "hawlucha",
      "url": "https://pokeapi.co/api/v2/pokemon/701/",
      "id": 701,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/701.ogg"
  },
  {
      "name": "dedenne",
      "url": "https://pokeapi.co/api/v2/pokemon/702/",
      "id": 702,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/702.ogg"
  },
  {
      "name": "carbink",
      "url": "https://pokeapi.co/api/v2/pokemon/703/",
      "id": 703,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/703.ogg"
  },
  {
      "name": "goomy",
      "url": "https://pokeapi.co/api/v2/pokemon/704/",
      "id": 704,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/704.ogg"
  },
  {
      "name": "sliggoo",
      "url": "https://pokeapi.co/api/v2/pokemon/705/",
      "id": 705,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/705.ogg"
  },
  {
      "name": "goodra",
      "url": "https://pokeapi.co/api/v2/pokemon/706/",
      "id": 706,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/706.ogg"
  },
  {
      "name": "klefki",
      "url": "https://pokeapi.co/api/v2/pokemon/707/",
      "id": 707,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/707.ogg"
  },
  {
      "name": "phantump",
      "url": "https://pokeapi.co/api/v2/pokemon/708/",
      "id": 708,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/708.ogg"
  },
  {
      "name": "trevenant",
      "url": "https://pokeapi.co/api/v2/pokemon/709/",
      "id": 709,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/709.ogg"
  },
  {
      "name": "pumpkaboo",
      "url": "https://pokeapi.co/api/v2/pokemon/710/",
      "id": 710,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/710.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/710.ogg"
  },
  {
      "name": "gourgeist",
      "url": "https://pokeapi.co/api/v2/pokemon/711/",
      "id": 711,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/711.ogg"
  },
  {
      "name": "bergmite",
      "url": "https://pokeapi.co/api/v2/pokemon/712/",
      "id": 712,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/712.ogg"
  },
  {
      "name": "avalugg",
      "url": "https://pokeapi.co/api/v2/pokemon/713/",
      "id": 713,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/713.ogg"
  },
  {
      "name": "noibat",
      "url": "https://pokeapi.co/api/v2/pokemon/714/",
      "id": 714,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/714.ogg"
  },
  {
      "name": "noivern",
      "url": "https://pokeapi.co/api/v2/pokemon/715/",
      "id": 715,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/715.ogg"
  },
  {
      "name": "xerneas",
      "url": "https://pokeapi.co/api/v2/pokemon/716/",
      "id": 716,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/716.ogg"
  },
  {
      "name": "yveltal",
      "url": "https://pokeapi.co/api/v2/pokemon/717/",
      "id": 717,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/717.ogg"
  },
  {
      "name": "zygarde",
      "url": "https://pokeapi.co/api/v2/pokemon/718/",
      "id": 718,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/718.ogg"
  },
  {
      "name": "diancie",
      "url": "https://pokeapi.co/api/v2/pokemon/719/",
      "id": 719,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/719.ogg"
  },
  {
      "name": "hoopa",
      "url": "https://pokeapi.co/api/v2/pokemon/720/",
      "id": 720,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/720.ogg"
  },
  {
      "name": "volcanion",
      "url": "https://pokeapi.co/api/v2/pokemon/721/",
      "id": 721,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/721.ogg"
  },
  {
      "name": "rowlet",
      "url": "https://pokeapi.co/api/v2/pokemon/722/",
      "id": 722,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/722.ogg"
  },
  {
      "name": "dartrix",
      "url": "https://pokeapi.co/api/v2/pokemon/723/",
      "id": 723,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/723.ogg"
  },
  {
      "name": "decidueye",
      "url": "https://pokeapi.co/api/v2/pokemon/724/",
      "id": 724,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/724.ogg"
  },
  {
      "name": "litten",
      "url": "https://pokeapi.co/api/v2/pokemon/725/",
      "id": 725,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/725.ogg"
  },
  {
      "name": "torracat",
      "url": "https://pokeapi.co/api/v2/pokemon/726/",
      "id": 726,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/726.ogg"
  },
  {
      "name": "incineroar",
      "url": "https://pokeapi.co/api/v2/pokemon/727/",
      "id": 727,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/727.ogg"
  },
  {
      "name": "popplio",
      "url": "https://pokeapi.co/api/v2/pokemon/728/",
      "id": 728,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/728.ogg"
  },
  {
      "name": "brionne",
      "url": "https://pokeapi.co/api/v2/pokemon/729/",
      "id": 729,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/729.ogg"
  },
  {
      "name": "primarina",
      "url": "https://pokeapi.co/api/v2/pokemon/730/",
      "id": 730,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/730.ogg"
  },
  {
      "name": "pikipek",
      "url": "https://pokeapi.co/api/v2/pokemon/731/",
      "id": 731,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/731.ogg"
  },
  {
      "name": "trumbeak",
      "url": "https://pokeapi.co/api/v2/pokemon/732/",
      "id": 732,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/732.ogg"
  },
  {
      "name": "toucannon",
      "url": "https://pokeapi.co/api/v2/pokemon/733/",
      "id": 733,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/733.ogg"
  },
  {
      "name": "yungoos",
      "url": "https://pokeapi.co/api/v2/pokemon/734/",
      "id": 734,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/734.ogg"
  },
  {
      "name": "gumshoos",
      "url": "https://pokeapi.co/api/v2/pokemon/735/",
      "id": 735,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/735.ogg"
  },
  {
      "name": "grubbin",
      "url": "https://pokeapi.co/api/v2/pokemon/736/",
      "id": 736,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/736.ogg"
  },
  {
      "name": "charjabug",
      "url": "https://pokeapi.co/api/v2/pokemon/737/",
      "id": 737,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/737.ogg"
  },
  {
      "name": "vikavolt",
      "url": "https://pokeapi.co/api/v2/pokemon/738/",
      "id": 738,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/738.ogg"
  },
  {
      "name": "crabrawler",
      "url": "https://pokeapi.co/api/v2/pokemon/739/",
      "id": 739,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/739.ogg"
  },
  {
      "name": "crabominable",
      "url": "https://pokeapi.co/api/v2/pokemon/740/",
      "id": 740,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/740.ogg"
  },
  {
      "name": "oricorio",
      "url": "https://pokeapi.co/api/v2/pokemon/741/",
      "id": 741,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/741.ogg"
  },
  {
      "name": "cutiefly",
      "url": "https://pokeapi.co/api/v2/pokemon/742/",
      "id": 742,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/742.ogg"
  },
  {
      "name": "ribombee",
      "url": "https://pokeapi.co/api/v2/pokemon/743/",
      "id": 743,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/743.ogg"
  },
  {
      "name": "rockruff",
      "url": "https://pokeapi.co/api/v2/pokemon/744/",
      "id": 744,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/744.ogg"
  },
  {
      "name": "lycanroc",
      "url": "https://pokeapi.co/api/v2/pokemon/745/",
      "id": 745,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/745.ogg"
  },
  {
      "name": "wishiwashi",
      "url": "https://pokeapi.co/api/v2/pokemon/746/",
      "id": 746,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/746.ogg"
  },
  {
      "name": "mareanie",
      "url": "https://pokeapi.co/api/v2/pokemon/747/",
      "id": 747,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/747.ogg"
  },
  {
      "name": "toxapex",
      "url": "https://pokeapi.co/api/v2/pokemon/748/",
      "id": 748,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/748.ogg"
  },
  {
      "name": "mudbray",
      "url": "https://pokeapi.co/api/v2/pokemon/749/",
      "id": 749,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/749.ogg"
  },
  {
      "name": "mudsdale",
      "url": "https://pokeapi.co/api/v2/pokemon/750/",
      "id": 750,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/750.ogg"
  },
  {
      "name": "dewpider",
      "url": "https://pokeapi.co/api/v2/pokemon/751/",
      "id": 751,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/751.ogg"
  },
  {
      "name": "araquanid",
      "url": "https://pokeapi.co/api/v2/pokemon/752/",
      "id": 752,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/752.ogg"
  },
  {
      "name": "fomantis",
      "url": "https://pokeapi.co/api/v2/pokemon/753/",
      "id": 753,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/753.ogg"
  },
  {
      "name": "lurantis",
      "url": "https://pokeapi.co/api/v2/pokemon/754/",
      "id": 754,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/754.ogg"
  },
  {
      "name": "morelull",
      "url": "https://pokeapi.co/api/v2/pokemon/755/",
      "id": 755,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/755.ogg"
  },
  {
      "name": "shiinotic",
      "url": "https://pokeapi.co/api/v2/pokemon/756/",
      "id": 756,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/756.ogg"
  },
  {
      "name": "salandit",
      "url": "https://pokeapi.co/api/v2/pokemon/757/",
      "id": 757,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/757.ogg"
  },
  {
      "name": "salazzle",
      "url": "https://pokeapi.co/api/v2/pokemon/758/",
      "id": 758,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/758.ogg"
  },
  {
      "name": "stufful",
      "url": "https://pokeapi.co/api/v2/pokemon/759/",
      "id": 759,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/759.ogg"
  },
  {
      "name": "bewear",
      "url": "https://pokeapi.co/api/v2/pokemon/760/",
      "id": 760,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/760.ogg"
  },
  {
      "name": "bounsweet",
      "url": "https://pokeapi.co/api/v2/pokemon/761/",
      "id": 761,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/761.ogg"
  },
  {
      "name": "steenee",
      "url": "https://pokeapi.co/api/v2/pokemon/762/",
      "id": 762,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/762.ogg"
  },
  {
      "name": "tsareena",
      "url": "https://pokeapi.co/api/v2/pokemon/763/",
      "id": 763,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/763.ogg"
  },
  {
      "name": "comfey",
      "url": "https://pokeapi.co/api/v2/pokemon/764/",
      "id": 764,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/764.ogg"
  },
  {
      "name": "oranguru",
      "url": "https://pokeapi.co/api/v2/pokemon/765/",
      "id": 765,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/765.ogg"
  },
  {
      "name": "passimian",
      "url": "https://pokeapi.co/api/v2/pokemon/766/",
      "id": 766,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/766.ogg"
  },
  {
      "name": "wimpod",
      "url": "https://pokeapi.co/api/v2/pokemon/767/",
      "id": 767,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/767.ogg"
  },
  {
      "name": "golisopod",
      "url": "https://pokeapi.co/api/v2/pokemon/768/",
      "id": 768,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/768.ogg"
  },
  {
      "name": "sandygast",
      "url": "https://pokeapi.co/api/v2/pokemon/769/",
      "id": 769,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/769.ogg"
  },
  {
      "name": "palossand",
      "url": "https://pokeapi.co/api/v2/pokemon/770/",
      "id": 770,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/770.ogg"
  },
  {
      "name": "pyukumuku",
      "url": "https://pokeapi.co/api/v2/pokemon/771/",
      "id": 771,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/771.ogg"
  },
  {
      "name": "type-null",
      "url": "https://pokeapi.co/api/v2/pokemon/772/",
      "id": 772,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/772.ogg"
  },
  {
      "name": "silvally",
      "url": "https://pokeapi.co/api/v2/pokemon/773/",
      "id": 773,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/773.ogg"
  },
  {
      "name": "minior",
      "url": "https://pokeapi.co/api/v2/pokemon/774/",
      "id": 774,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/774.ogg"
  },
  {
      "name": "komala",
      "url": "https://pokeapi.co/api/v2/pokemon/775/",
      "id": 775,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/775.ogg"
  },
  {
      "name": "turtonator",
      "url": "https://pokeapi.co/api/v2/pokemon/776/",
      "id": 776,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/776.ogg"
  },
  {
      "name": "togedemaru",
      "url": "https://pokeapi.co/api/v2/pokemon/777/",
      "id": 777,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/777.ogg"
  },
  {
      "name": "mimikyu",
      "url": "https://pokeapi.co/api/v2/pokemon/778/",
      "id": 778,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/778.ogg"
  },
  {
      "name": "bruxish",
      "url": "https://pokeapi.co/api/v2/pokemon/779/",
      "id": 779,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/779.ogg"
  },
  {
      "name": "drampa",
      "url": "https://pokeapi.co/api/v2/pokemon/780/",
      "id": 780,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/780.ogg"
  },
  {
      "name": "dhelmise",
      "url": "https://pokeapi.co/api/v2/pokemon/781/",
      "id": 781,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/781.ogg"
  },
  {
      "name": "jangmo-o",
      "url": "https://pokeapi.co/api/v2/pokemon/782/",
      "id": 782,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/782.ogg"
  },
  {
      "name": "hakamo-o",
      "url": "https://pokeapi.co/api/v2/pokemon/783/",
      "id": 783,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/783.ogg"
  },
  {
      "name": "kommo-o",
      "url": "https://pokeapi.co/api/v2/pokemon/784/",
      "id": 784,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/784.ogg"
  },
  {
      "name": "tapu-koko",
      "url": "https://pokeapi.co/api/v2/pokemon/785/",
      "id": 785,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/785.ogg"
  },
  {
      "name": "tapu-lele",
      "url": "https://pokeapi.co/api/v2/pokemon/786/",
      "id": 786,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/786.ogg"
  },
  {
      "name": "tapu-bulu",
      "url": "https://pokeapi.co/api/v2/pokemon/787/",
      "id": 787,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/787.ogg"
  },
  {
      "name": "tapu-fini",
      "url": "https://pokeapi.co/api/v2/pokemon/788/",
      "id": 788,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/788.ogg"
  },
  {
      "name": "cosmog",
      "url": "https://pokeapi.co/api/v2/pokemon/789/",
      "id": 789,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/789.ogg"
  },
  {
      "name": "cosmoem",
      "url": "https://pokeapi.co/api/v2/pokemon/790/",
      "id": 790,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/790.ogg"
  },
  {
      "name": "solgaleo",
      "url": "https://pokeapi.co/api/v2/pokemon/791/",
      "id": 791,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/791.ogg"
  },
  {
      "name": "lunala",
      "url": "https://pokeapi.co/api/v2/pokemon/792/",
      "id": 792,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/792.ogg"
  },
  {
      "name": "nihilego",
      "url": "https://pokeapi.co/api/v2/pokemon/793/",
      "id": 793,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/793.ogg"
  },
  {
      "name": "buzzwole",
      "url": "https://pokeapi.co/api/v2/pokemon/794/",
      "id": 794,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/794.ogg"
  },
  {
      "name": "pheromosa",
      "url": "https://pokeapi.co/api/v2/pokemon/795/",
      "id": 795,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/795.ogg"
  },
  {
      "name": "xurkitree",
      "url": "https://pokeapi.co/api/v2/pokemon/796/",
      "id": 796,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/796.ogg"
  },
  {
      "name": "celesteela",
      "url": "https://pokeapi.co/api/v2/pokemon/797/",
      "id": 797,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/797.ogg"
  },
  {
      "name": "kartana",
      "url": "https://pokeapi.co/api/v2/pokemon/798/",
      "id": 798,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/798.ogg"
  },
  {
      "name": "guzzlord",
      "url": "https://pokeapi.co/api/v2/pokemon/799/",
      "id": 799,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/799.ogg"
  },
  {
      "name": "necrozma",
      "url": "https://pokeapi.co/api/v2/pokemon/800/",
      "id": 800,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/800.ogg"
  },
  {
      "name": "magearna",
      "url": "https://pokeapi.co/api/v2/pokemon/801/",
      "id": 801,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/801.ogg"
  },
  {
      "name": "marshadow",
      "url": "https://pokeapi.co/api/v2/pokemon/802/",
      "id": 802,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/802.ogg"
  },
  {
      "name": "poipole",
      "url": "https://pokeapi.co/api/v2/pokemon/803/",
      "id": 803,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/803.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/803.ogg"
  },
  {
      "name": "naganadel",
      "url": "https://pokeapi.co/api/v2/pokemon/804/",
      "id": 804,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/804.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/804.ogg"
  },
  {
      "name": "stakataka",
      "url": "https://pokeapi.co/api/v2/pokemon/805/",
      "id": 805,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/805.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/805.ogg"
  },
  {
      "name": "blacephalon",
      "url": "https://pokeapi.co/api/v2/pokemon/806/",
      "id": 806,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/806.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/806.ogg"
  },
  {
      "name": "zeraora",
      "url": "https://pokeapi.co/api/v2/pokemon/807/",
      "id": 807,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/807.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/807.ogg"
  },
  {
      "name": "meltan",
      "url": "https://pokeapi.co/api/v2/pokemon/808/",
      "id": 808,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/808.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/808.ogg"
  },
  {
      "name": "melmetal",
      "url": "https://pokeapi.co/api/v2/pokemon/809/",
      "id": 809,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/809.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/809.ogg"
  },
  {
      "name": "grookey",
      "url": "https://pokeapi.co/api/v2/pokemon/810/",
      "id": 810,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/810.ogg"
  },
  {
      "name": "thwackey",
      "url": "https://pokeapi.co/api/v2/pokemon/811/",
      "id": 811,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/811.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/811.ogg"
  },
  {
      "name": "rillaboom",
      "url": "https://pokeapi.co/api/v2/pokemon/812/",
      "id": 812,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/812.ogg"
  },
  {
      "name": "scorbunny",
      "url": "https://pokeapi.co/api/v2/pokemon/813/",
      "id": 813,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/813.ogg"
  },
  {
      "name": "raboot",
      "url": "https://pokeapi.co/api/v2/pokemon/814/",
      "id": 814,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/814.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/814.ogg"
  },
  {
      "name": "cinderace",
      "url": "https://pokeapi.co/api/v2/pokemon/815/",
      "id": 815,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/815.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/815.ogg"
  },
  {
      "name": "sobble",
      "url": "https://pokeapi.co/api/v2/pokemon/816/",
      "id": 816,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/816.ogg"
  },
  {
      "name": "drizzile",
      "url": "https://pokeapi.co/api/v2/pokemon/817/",
      "id": 817,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/817.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/817.ogg"
  },
  {
      "name": "inteleon",
      "url": "https://pokeapi.co/api/v2/pokemon/818/",
      "id": 818,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/818.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/818.ogg"
  },
  {
      "name": "skwovet",
      "url": "https://pokeapi.co/api/v2/pokemon/819/",
      "id": 819,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/819.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/819.ogg"
  },
  {
      "name": "greedent",
      "url": "https://pokeapi.co/api/v2/pokemon/820/",
      "id": 820,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/820.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/820.ogg"
  },
  {
      "name": "rookidee",
      "url": "https://pokeapi.co/api/v2/pokemon/821/",
      "id": 821,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/821.ogg"
  },
  {
      "name": "corvisquire",
      "url": "https://pokeapi.co/api/v2/pokemon/822/",
      "id": 822,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/822.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/822.ogg"
  },
  {
      "name": "corviknight",
      "url": "https://pokeapi.co/api/v2/pokemon/823/",
      "id": 823,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/823.ogg"
  },
  {
      "name": "blipbug",
      "url": "https://pokeapi.co/api/v2/pokemon/824/",
      "id": 824,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/824.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/824.ogg"
  },
  {
      "name": "dottler",
      "url": "https://pokeapi.co/api/v2/pokemon/825/",
      "id": 825,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/825.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/825.ogg"
  },
  {
      "name": "orbeetle",
      "url": "https://pokeapi.co/api/v2/pokemon/826/",
      "id": 826,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/826.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/826.ogg"
  },
  {
      "name": "nickit",
      "url": "https://pokeapi.co/api/v2/pokemon/827/",
      "id": 827,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/827.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/827.ogg"
  },
  {
      "name": "thievul",
      "url": "https://pokeapi.co/api/v2/pokemon/828/",
      "id": 828,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/828.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/828.ogg"
  },
  {
      "name": "gossifleur",
      "url": "https://pokeapi.co/api/v2/pokemon/829/",
      "id": 829,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/829.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/829.ogg"
  },
  {
      "name": "eldegoss",
      "url": "https://pokeapi.co/api/v2/pokemon/830/",
      "id": 830,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/830.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/830.ogg"
  },
  {
      "name": "wooloo",
      "url": "https://pokeapi.co/api/v2/pokemon/831/",
      "id": 831,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/831.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/831.ogg"
  },
  {
      "name": "dubwool",
      "url": "https://pokeapi.co/api/v2/pokemon/832/",
      "id": 832,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/832.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/832.ogg"
  },
  {
      "name": "chewtle",
      "url": "https://pokeapi.co/api/v2/pokemon/833/",
      "id": 833,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/833.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/833.ogg"
  },
  {
      "name": "drednaw",
      "url": "https://pokeapi.co/api/v2/pokemon/834/",
      "id": 834,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/834.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/834.ogg"
  },
  {
      "name": "yamper",
      "url": "https://pokeapi.co/api/v2/pokemon/835/",
      "id": 835,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/835.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/835.ogg"
  },
  {
      "name": "boltund",
      "url": "https://pokeapi.co/api/v2/pokemon/836/",
      "id": 836,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/836.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/836.ogg"
  },
  {
      "name": "rolycoly",
      "url": "https://pokeapi.co/api/v2/pokemon/837/",
      "id": 837,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/837.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/837.ogg"
  },
  {
      "name": "carkol",
      "url": "https://pokeapi.co/api/v2/pokemon/838/",
      "id": 838,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/838.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/838.ogg"
  },
  {
      "name": "coalossal",
      "url": "https://pokeapi.co/api/v2/pokemon/839/",
      "id": 839,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/839.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/839.ogg"
  },
  {
      "name": "applin",
      "url": "https://pokeapi.co/api/v2/pokemon/840/",
      "id": 840,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/840.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/840.ogg"
  },
  {
      "name": "flapple",
      "url": "https://pokeapi.co/api/v2/pokemon/841/",
      "id": 841,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/841.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/841.ogg"
  },
  {
      "name": "appletun",
      "url": "https://pokeapi.co/api/v2/pokemon/842/",
      "id": 842,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/842.ogg"
  },
  {
      "name": "silicobra",
      "url": "https://pokeapi.co/api/v2/pokemon/843/",
      "id": 843,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/843.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/843.ogg"
  },
  {
      "name": "sandaconda",
      "url": "https://pokeapi.co/api/v2/pokemon/844/",
      "id": 844,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/844.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/844.ogg"
  },
  {
      "name": "cramorant",
      "url": "https://pokeapi.co/api/v2/pokemon/845/",
      "id": 845,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/845.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/845.ogg"
  },
  {
      "name": "arrokuda",
      "url": "https://pokeapi.co/api/v2/pokemon/846/",
      "id": 846,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/846.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/846.ogg"
  },
  {
      "name": "barraskewda",
      "url": "https://pokeapi.co/api/v2/pokemon/847/",
      "id": 847,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/847.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/847.ogg"
  },
  {
      "name": "toxel",
      "url": "https://pokeapi.co/api/v2/pokemon/848/",
      "id": 848,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/848.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/848.ogg"
  },
  {
      "name": "toxtricity",
      "url": "https://pokeapi.co/api/v2/pokemon/849/",
      "id": 849,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/849.ogg"
  },
  {
      "name": "sizzlipede",
      "url": "https://pokeapi.co/api/v2/pokemon/850/",
      "id": 850,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/850.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/850.ogg"
  },
  {
      "name": "centiskorch",
      "url": "https://pokeapi.co/api/v2/pokemon/851/",
      "id": 851,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/851.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/851.ogg"
  },
  {
      "name": "clobbopus",
      "url": "https://pokeapi.co/api/v2/pokemon/852/",
      "id": 852,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/852.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/852.ogg"
  },
  {
      "name": "grapploct",
      "url": "https://pokeapi.co/api/v2/pokemon/853/",
      "id": 853,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/853.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/853.ogg"
  },
  {
      "name": "sinistea",
      "url": "https://pokeapi.co/api/v2/pokemon/854/",
      "id": 854,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/854.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/854.ogg"
  },
  {
      "name": "polteageist",
      "url": "https://pokeapi.co/api/v2/pokemon/855/",
      "id": 855,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/855.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/855.ogg"
  },
  {
      "name": "hatenna",
      "url": "https://pokeapi.co/api/v2/pokemon/856/",
      "id": 856,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/856.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/856.ogg"
  },
  {
      "name": "hattrem",
      "url": "https://pokeapi.co/api/v2/pokemon/857/",
      "id": 857,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/857.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/857.ogg"
  },
  {
      "name": "hatterene",
      "url": "https://pokeapi.co/api/v2/pokemon/858/",
      "id": 858,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/858.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/858.ogg"
  },
  {
      "name": "impidimp",
      "url": "https://pokeapi.co/api/v2/pokemon/859/",
      "id": 859,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/859.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/859.ogg"
  },
  {
      "name": "morgrem",
      "url": "https://pokeapi.co/api/v2/pokemon/860/",
      "id": 860,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/860.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/860.ogg"
  },
  {
      "name": "grimmsnarl",
      "url": "https://pokeapi.co/api/v2/pokemon/861/",
      "id": 861,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/861.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/861.ogg"
  },
  {
      "name": "obstagoon",
      "url": "https://pokeapi.co/api/v2/pokemon/862/",
      "id": 862,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/862.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/862.ogg"
  },
  {
      "name": "perrserker",
      "url": "https://pokeapi.co/api/v2/pokemon/863/",
      "id": 863,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/863.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/863.ogg"
  },
  {
      "name": "cursola",
      "url": "https://pokeapi.co/api/v2/pokemon/864/",
      "id": 864,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/864.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/864.ogg"
  },
  {
      "name": "sirfetchd",
      "url": "https://pokeapi.co/api/v2/pokemon/865/",
      "id": 865,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/865.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/865.ogg"
  },
  {
      "name": "mr-rime",
      "url": "https://pokeapi.co/api/v2/pokemon/866/",
      "id": 866,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/866.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/866.ogg"
  },
  {
      "name": "runerigus",
      "url": "https://pokeapi.co/api/v2/pokemon/867/",
      "id": 867,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/867.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/867.ogg"
  },
  {
      "name": "milcery",
      "url": "https://pokeapi.co/api/v2/pokemon/868/",
      "id": 868,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/868.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/868.ogg"
  },
  {
      "name": "alcremie",
      "url": "https://pokeapi.co/api/v2/pokemon/869/",
      "id": 869,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/869.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/869.ogg"
  },
  {
      "name": "falinks",
      "url": "https://pokeapi.co/api/v2/pokemon/870/",
      "id": 870,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/870.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/870.ogg"
  },
  {
      "name": "pincurchin",
      "url": "https://pokeapi.co/api/v2/pokemon/871/",
      "id": 871,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/871.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/871.ogg"
  },
  {
      "name": "snom",
      "url": "https://pokeapi.co/api/v2/pokemon/872/",
      "id": 872,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/872.ogg"
  },
  {
      "name": "frosmoth",
      "url": "https://pokeapi.co/api/v2/pokemon/873/",
      "id": 873,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/873.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/873.ogg"
  },
  {
      "name": "stonjourner",
      "url": "https://pokeapi.co/api/v2/pokemon/874/",
      "id": 874,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/874.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/874.ogg"
  },
  {
      "name": "eiscue",
      "url": "https://pokeapi.co/api/v2/pokemon/875/",
      "id": 875,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/875.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/875.ogg"
  },
  {
      "name": "indeedee",
      "url": "https://pokeapi.co/api/v2/pokemon/876/",
      "id": 876,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/876.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/876.ogg"
  },
  {
      "name": "morpeko",
      "url": "https://pokeapi.co/api/v2/pokemon/877/",
      "id": 877,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/877.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/877.ogg"
  },
  {
      "name": "cufant",
      "url": "https://pokeapi.co/api/v2/pokemon/878/",
      "id": 878,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/878.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/878.ogg"
  },
  {
      "name": "copperajah",
      "url": "https://pokeapi.co/api/v2/pokemon/879/",
      "id": 879,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/879.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/879.ogg"
  },
  {
      "name": "dracozolt",
      "url": "https://pokeapi.co/api/v2/pokemon/880/",
      "id": 880,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/880.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/880.ogg"
  },
  {
      "name": "arctozolt",
      "url": "https://pokeapi.co/api/v2/pokemon/881/",
      "id": 881,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/881.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/881.ogg"
  },
  {
      "name": "dracovish",
      "url": "https://pokeapi.co/api/v2/pokemon/882/",
      "id": 882,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/882.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/882.ogg"
  },
  {
      "name": "arctovish",
      "url": "https://pokeapi.co/api/v2/pokemon/883/",
      "id": 883,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/883.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/883.ogg"
  },
  {
      "name": "duraludon",
      "url": "https://pokeapi.co/api/v2/pokemon/884/",
      "id": 884,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/884.ogg"
  },
  {
      "name": "dreepy",
      "url": "https://pokeapi.co/api/v2/pokemon/885/",
      "id": 885,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/885.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/885.ogg"
  },
  {
      "name": "drakloak",
      "url": "https://pokeapi.co/api/v2/pokemon/886/",
      "id": 886,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/886.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/886.ogg"
  },
  {
      "name": "dragapult",
      "url": "https://pokeapi.co/api/v2/pokemon/887/",
      "id": 887,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/887.ogg"
  },
  {
      "name": "zacian",
      "url": "https://pokeapi.co/api/v2/pokemon/888/",
      "id": 888,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/888.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/888.ogg"
  },
  {
      "name": "zamazenta",
      "url": "https://pokeapi.co/api/v2/pokemon/889/",
      "id": 889,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/889.ogg"
  },
  {
      "name": "eternatus",
      "url": "https://pokeapi.co/api/v2/pokemon/890/",
      "id": 890,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/890.ogg"
  },
  {
      "name": "kubfu",
      "url": "https://pokeapi.co/api/v2/pokemon/891/",
      "id": 891,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/891.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/891.ogg"
  },
  {
      "name": "urshifu",
      "url": "https://pokeapi.co/api/v2/pokemon/892/",
      "id": 892,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/892.ogg"
  },
  {
      "name": "zarude",
      "url": "https://pokeapi.co/api/v2/pokemon/893/",
      "id": 893,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/893.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/893.ogg"
  },
  {
      "name": "regieleki",
      "url": "https://pokeapi.co/api/v2/pokemon/894/",
      "id": 894,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/894.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/894.ogg"
  },
  {
      "name": "regidrago",
      "url": "https://pokeapi.co/api/v2/pokemon/895/",
      "id": 895,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/895.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/895.ogg"
  },
  {
      "name": "glastrier",
      "url": "https://pokeapi.co/api/v2/pokemon/896/",
      "id": 896,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/896.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/896.ogg"
  },
  {
      "name": "spectrier",
      "url": "https://pokeapi.co/api/v2/pokemon/897/",
      "id": 897,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/897.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/897.ogg"
  },
  {
      "name": "calyrex",
      "url": "https://pokeapi.co/api/v2/pokemon/898/",
      "id": 898,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/898.ogg"
  },
  {
      "name": "wyrdeer",
      "url": "https://pokeapi.co/api/v2/pokemon/899/",
      "id": 899,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/899.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/899.ogg"
  },
  {
      "name": "kleavor",
      "url": "https://pokeapi.co/api/v2/pokemon/900/",
      "id": 900,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/900.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/900.ogg"
  },
  {
      "name": "ursaluna",
      "url": "https://pokeapi.co/api/v2/pokemon/901/",
      "id": 901,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/901.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/901.ogg"
  },
  {
      "name": "basculegion",
      "url": "https://pokeapi.co/api/v2/pokemon/902/",
      "id": 902,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/902.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/902.ogg"
  },
  {
      "name": "sneasler",
      "url": "https://pokeapi.co/api/v2/pokemon/903/",
      "id": 903,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/903.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/903.ogg"
  },
  {
      "name": "overqwil",
      "url": "https://pokeapi.co/api/v2/pokemon/904/",
      "id": 904,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/904.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/904.ogg"
  },
  {
      "name": "enamorus",
      "url": "https://pokeapi.co/api/v2/pokemon/905/",
      "id": 905,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/905.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/905.ogg"
  },
  {
      "name": "sprigatito",
      "url": "https://pokeapi.co/api/v2/pokemon/906/",
      "id": 906,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/906.ogg"
  },
  {
      "name": "floragato",
      "url": "https://pokeapi.co/api/v2/pokemon/907/",
      "id": 907,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/907.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/907.ogg"
  },
  {
      "name": "meowscarada",
      "url": "https://pokeapi.co/api/v2/pokemon/908/",
      "id": 908,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/908.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/908.ogg"
  },
  {
      "name": "fuecoco",
      "url": "https://pokeapi.co/api/v2/pokemon/909/",
      "id": 909,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/909.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/909.ogg"
  },
  {
      "name": "crocalor",
      "url": "https://pokeapi.co/api/v2/pokemon/910/",
      "id": 910,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/910.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/910.ogg"
  },
  {
      "name": "skeledirge",
      "url": "https://pokeapi.co/api/v2/pokemon/911/",
      "id": 911,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/911.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/911.ogg"
  },
  {
      "name": "quaxly",
      "url": "https://pokeapi.co/api/v2/pokemon/912/",
      "id": 912,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/912.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/912.ogg"
  },
  {
      "name": "quaxwell",
      "url": "https://pokeapi.co/api/v2/pokemon/913/",
      "id": 913,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/913.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/913.ogg"
  },
  {
      "name": "quaquaval",
      "url": "https://pokeapi.co/api/v2/pokemon/914/",
      "id": 914,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/914.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/914.ogg"
  },
  {
      "name": "lechonk",
      "url": "https://pokeapi.co/api/v2/pokemon/915/",
      "id": 915,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/915.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/915.ogg"
  },
  {
      "name": "oinkologne",
      "url": "https://pokeapi.co/api/v2/pokemon/916/",
      "id": 916,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/916.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/916.ogg"
  },
  {
      "name": "tarountula",
      "url": "https://pokeapi.co/api/v2/pokemon/917/",
      "id": 917,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/917.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/917.ogg"
  },
  {
      "name": "spidops",
      "url": "https://pokeapi.co/api/v2/pokemon/918/",
      "id": 918,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/918.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/918.ogg"
  },
  {
      "name": "nymble",
      "url": "https://pokeapi.co/api/v2/pokemon/919/",
      "id": 919,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/919.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/919.ogg"
  },
  {
      "name": "lokix",
      "url": "https://pokeapi.co/api/v2/pokemon/920/",
      "id": 920,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/920.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/920.ogg"
  },
  {
      "name": "pawmi",
      "url": "https://pokeapi.co/api/v2/pokemon/921/",
      "id": 921,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/921.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/921.ogg"
  },
  {
      "name": "pawmo",
      "url": "https://pokeapi.co/api/v2/pokemon/922/",
      "id": 922,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/922.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/922.ogg"
  },
  {
      "name": "pawmot",
      "url": "https://pokeapi.co/api/v2/pokemon/923/",
      "id": 923,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/923.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/923.ogg"
  },
  {
      "name": "tandemaus",
      "url": "https://pokeapi.co/api/v2/pokemon/924/",
      "id": 924,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/924.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/924.ogg"
  },
  {
      "name": "maushold",
      "url": "https://pokeapi.co/api/v2/pokemon/925/",
      "id": 925,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/925.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/925.ogg"
  },
  {
      "name": "fidough",
      "url": "https://pokeapi.co/api/v2/pokemon/926/",
      "id": 926,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/926.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/926.ogg"
  },
  {
      "name": "dachsbun",
      "url": "https://pokeapi.co/api/v2/pokemon/927/",
      "id": 927,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/927.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/927.ogg"
  },
  {
      "name": "smoliv",
      "url": "https://pokeapi.co/api/v2/pokemon/928/",
      "id": 928,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/928.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/928.ogg"
  },
  {
      "name": "dolliv",
      "url": "https://pokeapi.co/api/v2/pokemon/929/",
      "id": 929,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/929.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/929.ogg"
  },
  {
      "name": "arboliva",
      "url": "https://pokeapi.co/api/v2/pokemon/930/",
      "id": 930,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/930.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/930.ogg"
  },
  {
      "name": "squawkabilly",
      "url": "https://pokeapi.co/api/v2/pokemon/931/",
      "id": 931,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/931.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/931.ogg"
  },
  {
      "name": "nacli",
      "url": "https://pokeapi.co/api/v2/pokemon/932/",
      "id": 932,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/932.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/932.ogg"
  },
  {
      "name": "naclstack",
      "url": "https://pokeapi.co/api/v2/pokemon/933/",
      "id": 933,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/933.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/933.ogg"
  },
  {
      "name": "garganacl",
      "url": "https://pokeapi.co/api/v2/pokemon/934/",
      "id": 934,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/934.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/934.ogg"
  },
  {
      "name": "charcadet",
      "url": "https://pokeapi.co/api/v2/pokemon/935/",
      "id": 935,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/935.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/935.ogg"
  },
  {
      "name": "armarouge",
      "url": "https://pokeapi.co/api/v2/pokemon/936/",
      "id": 936,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/936.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/936.ogg"
  },
  {
      "name": "ceruledge",
      "url": "https://pokeapi.co/api/v2/pokemon/937/",
      "id": 937,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/937.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/937.ogg"
  },
  {
      "name": "tadbulb",
      "url": "https://pokeapi.co/api/v2/pokemon/938/",
      "id": 938,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/938.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/938.ogg"
  },
  {
      "name": "bellibolt",
      "url": "https://pokeapi.co/api/v2/pokemon/939/",
      "id": 939,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/939.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/939.ogg"
  },
  {
      "name": "wattrel",
      "url": "https://pokeapi.co/api/v2/pokemon/940/",
      "id": 940,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/940.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/940.ogg"
  },
  {
      "name": "kilowattrel",
      "url": "https://pokeapi.co/api/v2/pokemon/941/",
      "id": 941,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/941.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/941.ogg"
  },
  {
      "name": "maschiff",
      "url": "https://pokeapi.co/api/v2/pokemon/942/",
      "id": 942,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/942.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/942.ogg"
  },
  {
      "name": "mabosstiff",
      "url": "https://pokeapi.co/api/v2/pokemon/943/",
      "id": 943,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/943.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/943.ogg"
  },
  {
      "name": "shroodle",
      "url": "https://pokeapi.co/api/v2/pokemon/944/",
      "id": 944,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/944.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/944.ogg"
  },
  {
      "name": "grafaiai",
      "url": "https://pokeapi.co/api/v2/pokemon/945/",
      "id": 945,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/945.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/945.ogg"
  },
  {
      "name": "bramblin",
      "url": "https://pokeapi.co/api/v2/pokemon/946/",
      "id": 946,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/946.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/946.ogg"
  },
  {
      "name": "brambleghast",
      "url": "https://pokeapi.co/api/v2/pokemon/947/",
      "id": 947,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/947.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/947.ogg"
  },
  {
      "name": "toedscool",
      "url": "https://pokeapi.co/api/v2/pokemon/948/",
      "id": 948,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/948.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/948.ogg"
  },
  {
      "name": "toedscruel",
      "url": "https://pokeapi.co/api/v2/pokemon/949/",
      "id": 949,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/949.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/949.ogg"
  },
  {
      "name": "klawf",
      "url": "https://pokeapi.co/api/v2/pokemon/950/",
      "id": 950,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/950.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/950.ogg"
  },
  {
      "name": "capsakid",
      "url": "https://pokeapi.co/api/v2/pokemon/951/",
      "id": 951,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/951.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/951.ogg"
  },
  {
      "name": "scovillain",
      "url": "https://pokeapi.co/api/v2/pokemon/952/",
      "id": 952,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/952.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/952.ogg"
  },
  {
      "name": "rellor",
      "url": "https://pokeapi.co/api/v2/pokemon/953/",
      "id": 953,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/953.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/953.ogg"
  },
  {
      "name": "rabsca",
      "url": "https://pokeapi.co/api/v2/pokemon/954/",
      "id": 954,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/954.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/954.ogg"
  },
  {
      "name": "flittle",
      "url": "https://pokeapi.co/api/v2/pokemon/955/",
      "id": 955,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/955.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/955.ogg"
  },
  {
      "name": "espathra",
      "url": "https://pokeapi.co/api/v2/pokemon/956/",
      "id": 956,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/956.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/956.ogg"
  },
  {
      "name": "tinkatink",
      "url": "https://pokeapi.co/api/v2/pokemon/957/",
      "id": 957,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/957.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/957.ogg"
  },
  {
      "name": "tinkatuff",
      "url": "https://pokeapi.co/api/v2/pokemon/958/",
      "id": 958,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/958.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/958.ogg"
  },
  {
      "name": "tinkaton",
      "url": "https://pokeapi.co/api/v2/pokemon/959/",
      "id": 959,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/959.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/959.ogg"
  },
  {
      "name": "wiglett",
      "url": "https://pokeapi.co/api/v2/pokemon/960/",
      "id": 960,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/960.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/960.ogg"
  },
  {
      "name": "wugtrio",
      "url": "https://pokeapi.co/api/v2/pokemon/961/",
      "id": 961,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/961.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/961.ogg"
  },
  {
      "name": "bombirdier",
      "url": "https://pokeapi.co/api/v2/pokemon/962/",
      "id": 962,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/962.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/962.ogg"
  },
  {
      "name": "finizen",
      "url": "https://pokeapi.co/api/v2/pokemon/963/",
      "id": 963,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/963.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/963.ogg"
  },
  {
      "name": "palafin",
      "url": "https://pokeapi.co/api/v2/pokemon/964/",
      "id": 964,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/964.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/964.ogg"
  },
  {
      "name": "varoom",
      "url": "https://pokeapi.co/api/v2/pokemon/965/",
      "id": 965,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/965.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/965.ogg"
  },
  {
      "name": "revavroom",
      "url": "https://pokeapi.co/api/v2/pokemon/966/",
      "id": 966,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/966.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/966.ogg"
  },
  {
      "name": "cyclizar",
      "url": "https://pokeapi.co/api/v2/pokemon/967/",
      "id": 967,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/967.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/967.ogg"
  },
  {
      "name": "orthworm",
      "url": "https://pokeapi.co/api/v2/pokemon/968/",
      "id": 968,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/968.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/968.ogg"
  },
  {
      "name": "glimmet",
      "url": "https://pokeapi.co/api/v2/pokemon/969/",
      "id": 969,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/969.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/969.ogg"
  },
  {
      "name": "glimmora",
      "url": "https://pokeapi.co/api/v2/pokemon/970/",
      "id": 970,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/970.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/970.ogg"
  },
  {
      "name": "greavard",
      "url": "https://pokeapi.co/api/v2/pokemon/971/",
      "id": 971,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/971.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/971.ogg"
  },
  {
      "name": "houndstone",
      "url": "https://pokeapi.co/api/v2/pokemon/972/",
      "id": 972,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/972.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/972.ogg"
  },
  {
      "name": "flamigo",
      "url": "https://pokeapi.co/api/v2/pokemon/973/",
      "id": 973,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/973.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/973.ogg"
  },
  {
      "name": "cetoddle",
      "url": "https://pokeapi.co/api/v2/pokemon/974/",
      "id": 974,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/974.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/974.ogg"
  },
  {
      "name": "cetitan",
      "url": "https://pokeapi.co/api/v2/pokemon/975/",
      "id": 975,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/975.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/975.ogg"
  },
  {
      "name": "veluza",
      "url": "https://pokeapi.co/api/v2/pokemon/976/",
      "id": 976,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/976.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/976.ogg"
  },
  {
      "name": "dondozo",
      "url": "https://pokeapi.co/api/v2/pokemon/977/",
      "id": 977,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/977.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/977.ogg"
  },
  {
      "name": "tatsugiri",
      "url": "https://pokeapi.co/api/v2/pokemon/978/",
      "id": 978,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/978.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/978.ogg"
  },
  {
      "name": "annihilape",
      "url": "https://pokeapi.co/api/v2/pokemon/979/",
      "id": 979,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/979.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/979.ogg"
  },
  {
      "name": "clodsire",
      "url": "https://pokeapi.co/api/v2/pokemon/980/",
      "id": 980,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/980.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/980.ogg"
  },
  {
      "name": "farigiraf",
      "url": "https://pokeapi.co/api/v2/pokemon/981/",
      "id": 981,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/981.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/981.ogg"
  },
  {
      "name": "dudunsparce",
      "url": "https://pokeapi.co/api/v2/pokemon/982/",
      "id": 982,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/982.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/982.ogg"
  },
  {
      "name": "kingambit",
      "url": "https://pokeapi.co/api/v2/pokemon/983/",
      "id": 983,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/983.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/983.ogg"
  },
  {
      "name": "great-tusk",
      "url": "https://pokeapi.co/api/v2/pokemon/984/",
      "id": 984,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/984.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/984.ogg"
  },
  {
      "name": "scream-tail",
      "url": "https://pokeapi.co/api/v2/pokemon/985/",
      "id": 985,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/985.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/985.ogg"
  },
  {
      "name": "brute-bonnet",
      "url": "https://pokeapi.co/api/v2/pokemon/986/",
      "id": 986,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/986.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/986.ogg"
  },
  {
      "name": "flutter-mane",
      "url": "https://pokeapi.co/api/v2/pokemon/987/",
      "id": 987,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/987.ogg"
  },
  {
      "name": "slither-wing",
      "url": "https://pokeapi.co/api/v2/pokemon/988/",
      "id": 988,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/988.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/988.ogg"
  },
  {
      "name": "sandy-shocks",
      "url": "https://pokeapi.co/api/v2/pokemon/989/",
      "id": 989,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/989.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/989.ogg"
  },
  {
      "name": "iron-treads",
      "url": "https://pokeapi.co/api/v2/pokemon/990/",
      "id": 990,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/990.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/990.ogg"
  },
  {
      "name": "iron-bundle",
      "url": "https://pokeapi.co/api/v2/pokemon/991/",
      "id": 991,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/991.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/991.ogg"
  },
  {
      "name": "iron-hands",
      "url": "https://pokeapi.co/api/v2/pokemon/992/",
      "id": 992,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/992.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/992.ogg"
  },
  {
      "name": "iron-jugulis",
      "url": "https://pokeapi.co/api/v2/pokemon/993/",
      "id": 993,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/993.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/993.ogg"
  },
  {
      "name": "iron-moth",
      "url": "https://pokeapi.co/api/v2/pokemon/994/",
      "id": 994,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/994.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/994.ogg"
  },
  {
      "name": "iron-thorns",
      "url": "https://pokeapi.co/api/v2/pokemon/995/",
      "id": 995,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/995.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/995.ogg"
  },
  {
      "name": "frigibax",
      "url": "https://pokeapi.co/api/v2/pokemon/996/",
      "id": 996,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/996.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/996.ogg"
  },
  {
      "name": "arctibax",
      "url": "https://pokeapi.co/api/v2/pokemon/997/",
      "id": 997,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/997.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/997.ogg"
  },
  {
      "name": "baxcalibur",
      "url": "https://pokeapi.co/api/v2/pokemon/998/",
      "id": 998,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/998.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/998.ogg"
  },
  {
      "name": "gimmighoul",
      "url": "https://pokeapi.co/api/v2/pokemon/999/",
      "id": 999,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/999.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/999.ogg"
  },
  {
      "name": "gholdengo",
      "url": "https://pokeapi.co/api/v2/pokemon/1000/",
      "id": 1000,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1000.ogg"
  },
  {
      "name": "wo-chien",
      "url": "https://pokeapi.co/api/v2/pokemon/1001/",
      "id": 1001,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1001.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1001.ogg"
  },
  {
      "name": "chien-pao",
      "url": "https://pokeapi.co/api/v2/pokemon/1002/",
      "id": 1002,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1002.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1002.ogg"
  },
  {
      "name": "ting-lu",
      "url": "https://pokeapi.co/api/v2/pokemon/1003/",
      "id": 1003,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1003.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1003.ogg"
  },
  {
      "name": "chi-yu",
      "url": "https://pokeapi.co/api/v2/pokemon/1004/",
      "id": 1004,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1004.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1004.ogg"
  },
  {
      "name": "roaring-moon",
      "url": "https://pokeapi.co/api/v2/pokemon/1005/",
      "id": 1005,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1005.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1005.ogg"
  },
  {
      "name": "iron-valiant",
      "url": "https://pokeapi.co/api/v2/pokemon/1006/",
      "id": 1006,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1006.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1006.ogg"
  },
  {
      "name": "koraidon",
      "url": "https://pokeapi.co/api/v2/pokemon/1007/",
      "id": 1007,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1007.ogg"
  },
  {
      "name": "miraidon",
      "url": "https://pokeapi.co/api/v2/pokemon/1008/",
      "id": 1008,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1008.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1008.ogg"
  },
  {
      "name": "walking-wake",
      "url": "https://pokeapi.co/api/v2/pokemon/1009/",
      "id": 1009,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1009.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1009.ogg"
  },
  {
      "name": "iron-leaves",
      "url": "https://pokeapi.co/api/v2/pokemon/1010/",
      "id": 1010,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1010.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1010.ogg"
  },
  {
      "name": "dipplin",
      "url": "https://pokeapi.co/api/v2/pokemon/1011/",
      "id": 1011,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1011.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1011.ogg"
  },
  {
      "name": "poltchageist",
      "url": "https://pokeapi.co/api/v2/pokemon/1012/",
      "id": 1012,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1012.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1012.ogg"
  },
  {
      "name": "sinistcha",
      "url": "https://pokeapi.co/api/v2/pokemon/1013/",
      "id": 1013,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1013.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1013.ogg"
  },
  {
      "name": "okidogi",
      "url": "https://pokeapi.co/api/v2/pokemon/1014/",
      "id": 1014,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1014.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1014.ogg"
  },
  {
      "name": "munkidori",
      "url": "https://pokeapi.co/api/v2/pokemon/1015/",
      "id": 1015,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1015.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1015.ogg"
  },
  {
      "name": "fezandipiti",
      "url": "https://pokeapi.co/api/v2/pokemon/1016/",
      "id": 1016,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1016.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1016.ogg"
  },
  {
      "name": "ogerpon",
      "url": "https://pokeapi.co/api/v2/pokemon/1017/",
      "id": 1017,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1017.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1017.ogg"
  },
  {
      "name": "archaludon",
      "url": "https://pokeapi.co/api/v2/pokemon/1018/",
      "id": 1018,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1018.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1018.ogg"
  },
  {
      "name": "hydrapple",
      "url": "https://pokeapi.co/api/v2/pokemon/1019/",
      "id": 1019,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1019.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1019.ogg"
  },
  {
      "name": "gouging-fire",
      "url": "https://pokeapi.co/api/v2/pokemon/1020/",
      "id": 1020,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1020.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1020.ogg"
  },
  {
      "name": "raging-bolt",
      "url": "https://pokeapi.co/api/v2/pokemon/1021/",
      "id": 1021,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1021.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1021.ogg"
  },
  {
      "name": "iron-boulder",
      "url": "https://pokeapi.co/api/v2/pokemon/1022/",
      "id": 1022,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1022.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1022.ogg"
  },
  {
      "name": "iron-crown",
      "url": "https://pokeapi.co/api/v2/pokemon/1023/",
      "id": 1023,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1023.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1023.ogg"
  },
  {
      "name": "terapagos",
      "url": "https://pokeapi.co/api/v2/pokemon/1024/",
      "id": 1024,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1024.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1024.ogg"
  },
  {
      "name": "pecharunt",
      "url": "https://pokeapi.co/api/v2/pokemon/1025/",
      "id": 1025,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1025.png",
      "cry": "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1025.ogg"
  }
];