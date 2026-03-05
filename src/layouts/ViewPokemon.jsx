import { useEffect, useMemo, Suspense, lazy, useState, useCallback, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EvoChain from '../components/EvoChain';
import { fetchPokemonByName } from '../store/dataSlice';
import Loading from '../components/Loading';
import "../style/View.scss"
import { replaceDash, excludedNames } from "../store/collection"
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from "react-image-gallery";
import { calculateDamageRelations } from "../utils/typeMath";
import DamageGrid from '../components/DamageGrid';

const StatChart = lazy(() => import("../components/StatChart"));

const GAME_CONFIG = {
  "red-blue": {
    games: [
      { id: "redblue", alt: "Red & Blue", width: 364, height: 182 },
      { id: "yellow", alt: "Yellow", width: 182, height: 182 },
      { id: "fireleaf", alt: "Fire Red & Leaf Green", width: 364, height: 182 }
    ]
  },
  "gold-silver": {
    games: [
      { id: "goldsilver", alt: "Gold & Silver", width: 364, height: 182 },
      { id: "crystal", alt: "Crystal", width: 182, height: 182 }
    ]
  },
  "ruby-sapphire": {
    games: [
      { id: "rubysapphire", alt: "Ruby & Sapphire", width: 364, height: 182 },
      { id: "emerald", alt: "Emerald", width: 182, height: 182 }
    ]
  },
  "diamond-pearl": {
    games: [
      { id: "diamondpearl", alt: "Diamond  & Pearl", width: 407, height: 182 },
      { id: "brilliantshining", alt: "Brilliant Diamond  & Shining Pearl", width: 374, height: 182 }
    ]
  },
  "platinum": {
    games: [
      { id: "platinum", alt: "Platinum", width: 203, height: 182 }
    ]
  },
  "heartgold-soulsilver": {
    games: [
      { id: "heartsoul", alt: "HeartGold  & SoulSilver", width: 399, height: 182 }
    ]
  },
  "black-white": {
    games: [
      { id: "blackwhite", alt: "Black  & White", width: 407, height: 182 }
    ]
  },
  "black-2-white-2": {
    games: [
      { id: "black2white2", alt: "Black 2  & White 2", width: 407, height: 182 }
    ]
  },
  "x-y": {
    games: [
      { id: "xy", alt: "X  & Y", width: 415, height: 182 }
    ]
  },
  "omega-ruby-alpha-sapphire": {
    games: [
      { id: "alphaomega", alt: "Alpha Sapphire  & Omega Ruby", width: 407, height: 182 }
    ]
  },
  "sun-moon": {
    games: [
      { id: "sunmoon", alt: "Sun  & Moon", width: 407, height: 182 }
    ]
  },
  "ultra-sun-ultra-moon": {
    games: [
      { id: "ultra", alt: "Ultra Sun  & Ultra Moon", width: 407, height: 182 }
    ]
  },
  "lets-go": {
    games: [
      { id: "letsgo", alt: "Let's Go Pikachu / Eevee", width: 364, height: 182 }
    ]
  },
  "sword-shield": {
    games: [
      { id: "swordshield", alt: "Sword  & Shield", width: 364, height: 182 }
    ]
  },
  "isle-of-armor": {
    games: [
      { id: "armor", alt: "Sword  & Shield: The Isle of Armor", width: 129, height: 182 }
    ]
  },
  "crown-tundra": {
    games: [
      { id: "tundra", alt: "Sword  & Shield: The Crown Tundra", width: 129, height: 182 }
    ]
  },
  "legends-arceus": {
    games: [
      { id: "arceus", alt: "Legends: Arceus", width: 182, height: 182 }
    ]
  },
  "scarlet-violet": {
    games: [
      { id: "scarletviolet", alt: "Scarlet  & Violet", width: 323, height: 182 }
    ]
  },
  "kitakami": {
    games: [
      { id: "tealmask", alt: "Scarlet  & Violet: The Teal Mask", width: 364, height: 182 }
    ]
  },
  "blueberry": {
    games: [
      { id: "indigodisk", alt: "Scarlet  & Violet: The Indigo Disk", width: 324, height: 182 }
    ]
  },
  "legends-za": {
    games: [
      { id: "za", alt: "Legends: Z-A", width: 270, height: 182 }
    ]
  },
  "hyperspace": {
    games: [
      { id: "hyperspace", alt: "Legends: Z-A - The Mega Dimension", width: 323, height: 182 }
    ]
  }
}

const MELTAN__MELMETAL_EVOLUTION_DETAILS = [
  [
    {
      "evolution_details": [],
      "evolves_to": [
        {
          "evolution_details": [
            {
              "base_form_id": null,
              "gender": null,
              "held_item": null,
              "item": {
                "name": "candy"
              },
              "known_move": null,
              "known_move_type": null,
              "location": null,
              "min_affection": null,
              "min_beauty": null,
              "min_damage_taken": null,
              "min_happiness": null,
              "min_level": null,
              "min_move_count": null,
              "min_steps": null,
              "needs_multiplayer": false,
              "needs_overworld_rain": false,
              "party_species": null,
              "party_type": null,
              "region_id": null,
              "relative_physical_stats": null,
              "time_of_day": "",
              "trade_species": null,
              "trigger": {
                "name": "use-item",
                "url": "https://pokeapi.co/api/v2/evolution-trigger/3/"
              },
              "turn_upside_down": false,
              "used_move": null
            }
          ],
          "evolves_to": [],
          "is_baby": false,
          "species": {
            "name": "melmetal",
            "url": "https://pokeapi.co/api/v2/pokemon-species/809/"
          }
        }
      ],
      "is_baby": false,
      "species": {
        "name": "meltan",
        "url": "https://pokeapi.co/api/v2/pokemon-species/808/"
      }
    }
  ],
  [
    {
      "evolution_details": [
        {
          "base_form_id": null,
          "gender": null,
          "held_item": null,
          "item": {
            "name": "candy"
          },
          "known_move": null,
          "known_move_type": null,
          "location": null,
          "min_affection": null,
          "min_beauty": null,
          "min_damage_taken": null,
          "min_happiness": null,
          "min_level": null,
          "min_move_count": null,
          "min_steps": null,
          "needs_multiplayer": false,
          "needs_overworld_rain": false,
          "party_species": null,
          "party_type": null,
          "region_id": null,
          "relative_physical_stats": null,
          "time_of_day": "",
          "trade_species": null,
          "trigger": {
            "name": "use-item",
            "url": "https://pokeapi.co/api/v2/evolution-trigger/3/"
          },
          "turn_upside_down": false,
          "used_move": null
        }
      ],
      "evolves_to": [],
      "is_baby": false,
      "species": {
        "name": "melmetal",
        "url": "https://pokeapi.co/api/v2/pokemon-species/809/"
      }
    }
  ]
];

function ViewPokemon({ theme, pokemonByGame }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name } = useParams();
  const id = name.split("-").pop();
  const { pokemonByName, status, error } = useSelector((state) => state.pokeData);
  const currentPokemon = pokemonByName[id];
  const [formVarieties, setFormVarieties] = useState([]);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    if(currentPokemon && currentPokemon.species.length) {
      const images = [];
      currentPokemon.species.forEach(variety => {
        const fullRand = variety.pokemon.url.split("/")[6];

        images.push({
          original: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${fullRand}.png`,
          thumbnail: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${fullRand}.png`,
          originalAlt: variety.pokemon.name,
          thumbnailAlt: `${variety.pokemon.name} thumbnail`,
          originalTitle: variety.pokemon.name,
          thumbnailTitle: `${variety.pokemon.name} thumbnail`
        });
        images.push({
          original: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${fullRand}.png`,
          thumbnail: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${fullRand}.png`,
          originalAlt: `${variety.pokemon.name} (Shiny)`,
          thumbnailAlt: `${variety.pokemon.name} thumbnail (Shiny)`,
          originalTitle: `${variety.pokemon.name} (Shiny)`,
          thumbnailTitle: `${variety.pokemon.name} thumbnail (Shiny)`
        });
        setFormVarieties(images);
      })
    }
  }, [currentPokemon]);

  useEffect(() => {
    if (!pokemonByName[id]) {
      dispatch(fetchPokemonByName(id));
    }
  }, [dispatch, id, pokemonByName]);

  const damageRelations = useMemo(() => {
    if (!pokemonByName[id]) return null;

    const type1 = pokemonByName[id].types[0];
    const type2 = pokemonByName[id].types[1] || '';

    return calculateDamageRelations(type1, type2);
  }, [pokemonByName, id]);

  const gameAppearances = useMemo(() => {
    if (!pokemonByName[id]) return null;

    return Object.entries(pokemonByGame).filter(([game, list]) => list.includes(pokemonByName[id].name)).map(([game]) => game);
  }, [pokemonByName, id, pokemonByGame]);

  const handleImageError = useCallback((event) => {
    const failedUrl = event.target.src;
    setFormVarieties(prev => prev.filter(img => img.original !== failedUrl));
  }, []);

  const playCry = useCallback(url => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    audioRef.current.src = url;
    audioRef.current.play().catch(error => {
      if(error.name === "AbortError") {
        console.log("Playback swapper; request aborted.")
      } else {
        console.error("playback failed:", error);
      }
    });
  }, []);

  if (status === 'loading') {
    return <Loading />;
  }
  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  if (!pokemonByName[id]) {
    return <div>No Pokémon data available</div>;
  }

  const primaryType = currentPokemon.types[0];

  //EVOLUTION SETUP
  let evolutions = [[currentPokemon.evoChain]];
  if (currentPokemon.evoChain.evolves_to.length) {
    evolutions.push(currentPokemon.evoChain.evolves_to);
    if (currentPokemon.evoChain.evolves_to[0].evolves_to.length) {
      evolutions.push(currentPokemon.evoChain.evolves_to[0].evolves_to);
    }
    if (currentPokemon.evoChain.evolves_to[1]?.evolves_to.length) {
      evolutions.push(currentPokemon.evoChain.evolves_to[1].evolves_to);
    }
    if (currentPokemon.evoChain.evolves_to[2]?.evolves_to.length) {
      evolutions.push(currentPokemon.evoChain.evolves_to[2].evolves_to);
    }
  }
  if (pokemonByName[id].name === "meltan" || pokemonByName[id].name === "melmetal") {
    evolutions = MELTAN__MELMETAL_EVOLUTION_DETAILS;
  }
  //EVOLUTION SETUP
  //NAME CHANGE
  let displayName = currentPokemon.name;
  if (currentPokemon.name === "nidoran-f") {
    displayName = currentPokemon.name.slice(0, currentPokemon.name.indexOf('-')) + String.fromCodePoint(9792);
  }
  if (currentPokemon.name === "nidoran-m") {
    displayName = currentPokemon.name.slice(0, currentPokemon.name.indexOf('-')) + String.fromCodePoint(9794);
  }
  if (currentPokemon.name === "type-null") {
    displayName = currentPokemon.name.replace("-", ": ");
  }
  if (replaceDash.includes(currentPokemon.name)) {
    displayName = currentPokemon.name.replace("-", " ");
  }
  if (excludedNames.includes(currentPokemon.name)) {
    displayName = currentPokemon.name.split("-")[0];
  }
  //NAME CHANGE
  return (
    <>
      <div className="viewPokemon">
        <div className="topInfo">
          <div className="mainTopInfo">
            <button type="button" className="return_button" onClick={() => navigate('/')} aria-label='Return' style={{ "--return-image": "url('/images/masterball.webp')" }}>Return!</button>
            <div className="nameType">
              <h1>#{currentPokemon.id}: <span>{displayName[0].toUpperCase() + displayName.slice(1)}</span></h1>
              <div className='viewTypeContainer'>
                {
                  currentPokemon.types.map((type, index) => {
                    const typeImage = `/images/types/${type}.webp`;
                    return (
                      <div className='typeEl' key={type + "-" + index} style={{ "--bg-img": `url(${typeImage})` }} alt={type} title={type}>{type.toUpperCase()}</div>
                    )
                  })
                }
              </div>
            </div>
            <div className='pokeGallery' style={{ "--border-colour": `var(--type-${primaryType})` }} >
              <ImageGallery
                items={formVarieties}
                showNav={false}
                showFullscreenButton={false}
                showPlayButton={false}
                onImageError={handleImageError}
              />
            </div>
          </div>
          <div className="infoContainer">
            <div className="pokeAbility">
              <h2>Abilities</h2>
              {
                currentPokemon.abilities.map((ability, index) => {
                  let flavourText = ability.effect;
                  const abilityName = ability.name.split("-");
                  return (
                    <div key={ability + "-" + index} className="abilityList">
                      <h3 style={{ "--bg-color": `var(--type-${primaryType})` }} >
                        {
                          ability.isHidden && (
                            <span className="secretAbility">Secret</span>
                          )
                        }
                        {
                          abilityName.map((name, index) => {
                            const formattedName = name[0].toUpperCase() + name.slice(1);
                            return index < abilityName.length - 1 ? `${formattedName} ` : formattedName;
                          })
                        }:
                      </h3>
                      <p>{flavourText}</p>
                    </div>
                  )
                })
              }
            </div>
            <div className="pokeCry">
              <h2>Cry</h2>
              <div className="playBtnContainer">
                {Object.keys(currentPokemon.cries).map((e, i) => {
                  return (currentPokemon.cries[e] !== null && (
                    <div className="pokeCry" key={`${e}-${i}`}>
                      {e.toUpperCase()}
                      <div className='playBtn' aria-label='Play Cry' style={{ "--play-color": `var(--type-${primaryType})` }} onClick={() => playCry(currentPokemon.cries[e])}>
                        <span>Play</span>
                      </div>
                    </div>
                  ))
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='typeEffectiveness'>
          <h2>Type Matchups</h2>
          <DamageGrid relations={damageRelations} />
        </div>
        {evolutions.length > 1 ?
          (<div className="evolutions">
            <h2>Evolution</h2>
            <div className="evoContainer">
              {evolutions.map((evo, index) => (
                <EvoChain chain={evo} key={`evolution-${index}`} mainColour={`var(--type-${primaryType})`} name={displayName} />
              ))}
            </div>
          </div>)
          : null
        }
      </div>
      <div className="radarChart" style={{ "--radar-colour": `var(--radar-${primaryType})` }}>
        <h2>Stats</h2>
        <div className="radarContainer">
          <Suspense fallback={<div>Loading Stats...</div>}>
            <StatChart currentPokemon={currentPokemon} theme={theme} primaryType={primaryType} />
          </Suspense>
        </div>
      </div>
      <div className='viewPokemon'>
        <h2>Game appearances</h2>
        <div className='gameAppearanceBoxArt'>
          {Object.keys(GAME_CONFIG).map(genKey => {
            if (!gameAppearances.includes(genKey)) return null;

            const group = GAME_CONFIG[genKey];
            return (
              <div className='gameGroup' key={genKey}>
                {group.games.map(game => {
                  return (
                    <figure key={game.id}>
                      <img
                        src={`/images/games/${game.id}.webp`}
                        alt={game.alt}
                        title={game.alt}
                        width={game.width} height={game.height}
                        loading='lazy'
                      />
                      <figcaption>{game.alt}</figcaption>
                    </figure>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}
export default ViewPokemon;