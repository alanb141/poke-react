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
const formBracket = ["alola", "paldea", "galar", "hisui", "hero", "eternamax", "sunny", "rainy", "snowy", "attack", "defense", "speed", "sandy", "trash", "origin", "sky", "ash", "bond" ,"mask", "segment", "stretchy", "droopy", "plumage", "female", "male", "bloodmoon", "strike", "shadow", "ice", "dada", "crowned", "hangry", "noice", "gulping", "gorging", "dusk", "dawn", "midnight", "midday", "ultra", "busted", "minior", "oricorio", "unbound", "zygarde", "pumpkaboo", "gourgeist", "eternal", "meloetta", "resolute", "therian", "striped"];
const excludedVariants = ["totem", "star", "belle", "phd", "libre", "cosplay", "cap", "starter", "mega", "gmax", "construct", "mode", "build"];


function ViewPokemon({ theme, pokemonByGame }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name: urlName } = useParams();
  const initialId = urlName.split("-").pop();
  const { pokemonByName, status, error } = useSelector((state) => state.pokeData);
  const [activeId, setActiveId] = useState(initialId);
  const currentPokemon = pokemonByName[activeId];
  const [formVarieties, setFormVarieties] = useState([]);
  const [isTransforming, setIsTransforming] = useState(false);
  const [morphTargetId, setMorphTargetId] = useState(null);
  const [oldId, setOldId] = useState(activeId);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    const newUrlId = urlName.split("-").pop();
    setActiveId(newUrlId);
  }, [urlName]);

  useEffect(() => {
    if(pokemonByName[activeId] && pokemonByName[activeId].species.length) {
      const images = [];
      images.push({
        original: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${activeId}.png`,
        thumbnail: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${activeId}.png`,
        originalAlt: pokemonByName[activeId].name,
        thumbnailAlt: `${pokemonByName[activeId].name} thumbnail`,
        originalTitle: pokemonByName[activeId].name,
        thumbnailTitle: `${pokemonByName[activeId].name} thumbnail`
      });
      images.push({
        original: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${activeId}.png`,
        thumbnail: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${activeId}.png`,
        originalAlt: `${pokemonByName[activeId].name} (Shiny)`,
        thumbnailAlt: `${pokemonByName[activeId].name} thumbnail (Shiny)`,
        originalTitle: `${pokemonByName[activeId].name} (Shiny)`,
        thumbnailTitle: `${pokemonByName[activeId].name} thumbnail (Shiny)`
      });
      setFormVarieties(images);
    }
  }, [pokemonByName, activeId]);

  useEffect(() => {
    if (!pokemonByName[activeId]) {
      dispatch(fetchPokemonByName(activeId));
    }
  }, [dispatch, activeId, pokemonByName]);

  const damageRelations = useMemo(() => {
    if (!pokemonByName[activeId]) return null;

    const type1 = pokemonByName[activeId].types[0];
    const type2 = pokemonByName[activeId].types[1] || '';

    return calculateDamageRelations(type1, type2);
  }, [pokemonByName, activeId]);

  const gameAppearances = useMemo(() => {
    if (!pokemonByName[activeId]) return null;

    const altId = pokemonByName[pokemonByName[activeId].labelId];
    return pokemonByGame.filter(pokemon => activeId === pokemon.id.toString()).length > 0
      ? pokemonByGame.filter(pokemon => activeId === pokemon.id.toString())[0].games 
      : pokemonByGame.filter(pokemon => altId.id === pokemon.id)[0].games;
  }, [pokemonByName, activeId, pokemonByGame]);

  const handleImageError = useCallback((event) => {
    const failedUrl = event.target.src;
    setFormVarieties(prev => prev.filter(img => img.original !== failedUrl));
  }, []);

  const changeForm = useCallback(async (newId) => {
    setOldId(activeId);
    setMorphTargetId(newId);
    setIsTransforming(true);
    const minDelay = 800;

    const fetchData = pokemonByName[newId]
    ? Promise.resolve()
    : dispatch(fetchPokemonByName(newId));

    await new Promise(resolve => setTimeout(resolve, minDelay));

    try {
      await fetchData;
      setActiveId(newId);
    } catch (error) {
      console.error("transformation failed", error);
    }
    await new Promise(resolve => setTimeout(resolve, minDelay));
    setIsTransforming(false);
    setMorphTargetId(null);
  }, [dispatch, pokemonByName, activeId]);

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

  if (status === 'loading' && !currentPokemon && !isTransforming) {
    return <Loading />;
  }
  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  if (!pokemonByName[activeId]) {
    return <div>No Pokémon data available</div>;
  }

  const primaryType = currentPokemon.types[0];

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
  if (formBracket.some(ex => currentPokemon.name.includes(ex))) {
    const nameSplit = currentPokemon.name.split("-");
    
    displayName = currentPokemon.name === "mr-mime-galar" 
    ? `${nameSplit[0]} ${nameSplit[1]} (${nameSplit[2]})` 
    : nameSplit.length > 2 
    ? `${nameSplit[0]} (${nameSplit.slice(1).join(' ')})`
    : `${nameSplit[0]} (${nameSplit[1] === "noice" ? "no ice" : nameSplit[1]})`;
  }
  //NAME CHANGE
  const pokemonForms = currentPokemon.species || [];
  const regionalVariants = pokemonForms.filter(form => 
    !excludedVariants.some(ex => form.pokemon.name.includes(ex))
  );
  // const battleForms = pokemonForms.filter(form => 
  //   ["mega", "gmax"].some(ex => form.pokemon.name.includes(ex))
  // );
  
  return (
    <>
      <div className={`transformationMask ${isTransforming ? 'active' : ''}`}>
        <div className="morphContainer">
          <img 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${oldId}.png`}
            className="silhouette old"
            alt="morph-out"
          />
          {morphTargetId && (
            <img 
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${morphTargetId}.png`}
              className="silhouette new"
              alt="morph-in"
            />
          )}
        </div>
        <div className="sparkles">
          {[...Array(15)].map((_, i) => {
            const randomStyle = {
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 0.8}s`,
              animationDuration: `${0.5 + Math.random()}s`
            };

            return (
              <span 
                key={i} 
                className="sparkle" 
                style={randomStyle} 
              />
            );
          })}
        </div>
      </div>
      {/* <div className='transformSelector'>
        { battleForms.length > 0 && currentPokemon.species.map(form => {
          if (!["mega", "gmax"].some(ex => form.pokemon.name.includes(ex))) return null;

          return (
            <>
            <p>{form.pokemon.name}</p>
            <img src={`/images/transform/${form.pokemon.name}.webp`} title={form.pokemon.name} alt={form.pokemon.name} width={45} height={45} />
            </>
          )
        }) }
      </div> */}
      <div className="viewPokemon">
        <div className="topInfo">
          <div className="mainTopInfo">
            <button type="button" className="return_button" onClick={() => navigate('/')} aria-label='Return' style={{ "--return-image": "url('/images/masterball.webp')" }}>Return!</button>
            <div className="nameType">
              <h1>#{currentPokemon.labelId}: <span>{displayName[0].toUpperCase() + displayName.slice(1)}</span></h1>
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
            <div className="spriteSelector">
              {regionalVariants.length > 1 && currentPokemon.species.map(form => {
                if (excludedVariants.some(ex => form.pokemon.name.includes(ex))) return null;

                const formId = form.pokemon.url.split('/').filter(Boolean).pop();
                
                return (
                  <button 
                    key={formId} 
                    className={`sprite-btn ${activeId === formId ? 'active' : ''}`}
                    onClick={() => changeForm(formId)}
                    style={{ "--type-colour": `var(--type-${primaryType})` }}
                  >
                    <img 
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${formId}.png`} 
                      alt={form.pokemon.name} 
                    />
                    <span>{form.is_default ? "Base" : form.pokemon.name.split('-').pop()}</span>
                  </button>
                );
              })}
            </div>
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
        {currentPokemon.evoChain.evolves_to.length > 0 &&
          (<div className="evolutions">
            <h2>Evolution 2</h2>
            <EvoChain chain={currentPokemon.evoChain} mainColour={`var(--type-${primaryType})`} isRoot={true} />
          </div>)
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