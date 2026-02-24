import React, { useEffect, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EvoChain from '../components/EvoChain';
import { fetchPokemonByName } from '../store/dataSlice';
import { Chart, RadialLinearScale, Tooltip, Legend, LineElement, PointElement, Filler } from 'chart.js';
import { Radar } from "react-chartjs-2";
import Loading from '../components/Loading';
import "../style/View.scss"
import { replaceDash, excludedNames } from "../store/collection"
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from "react-image-gallery";
import { calculateDamageRelations } from "../utils/typeMath";
import DamageGrid from '../components/DamageGrid';


Chart.register(RadialLinearScale, Tooltip, Legend, LineElement, PointElement, Filler);

function ViewPokemon({ theme }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name } = useParams();
  const id = name.split("-").pop();
  const { pokemonByName, status, error } = useSelector((state) => state.pokeData);

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

  const formVarieties = [];
  const returnMain = () => {
    navigate('/');
  }

  if (status === 'loading') {
    return <Loading />;
  }
  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }
  if (!pokemonByName[id]) {
    return <div>No Pokémon data available</div>;
  }

  const currentPokemon = pokemonByName[id];
  const primaryType = currentPokemon.types[0];

  //STAT INFORMATION/SETUP
  const statLabels = [];
  const baseStat = [];
  currentPokemon.stats.forEach(stat => {
    let statName = replaceStatNames(stat.name, { "hp": "HP", "special-attack": "sp. Atk", "special-defense": "sp. Def" })
    statName = statName[0].toUpperCase() + statName.slice(1)
    statLabels.push(statName);
    baseStat.push(stat.value);
  });

  const getThemeColor = (variableName) => {
    // This looks at the :root or body to find the current value of the CSS variable
    return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
  };

  function replaceStatNames(str, obj) {
    for (const x in obj) {
      str = str.replace(new RegExp(x, 'g'), obj[x]);
    }
    return str;
  };

  const statSum = baseStat.reduce((partialSum, a) => partialSum + a, 0);

  const statData = {
    labels: statLabels,
    datasets: [{
      label: `Base Stat Total: ${statSum}`,
      data: baseStat,
      fill: true,
      backgroundColor: getThemeColor(`--radar-${primaryType}`),
      borderColor: getThemeColor(`--type-${primaryType}`),
      pointBackgroundColor: getThemeColor(`--type-${primaryType}`),
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: getThemeColor(`--type-${primaryType}`)
    }]
  }

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 255,
          stepSize: 51,
          count: 4,
          display: false
        },
        pointLabels: {
          color: getThemeColor('--font-color'),
          font: {
            family: 'Oswald',
            size: 14
          }
        },
        grid: {
          color: getThemeColor('--shadow'),
        },
        angleLines: {
          color: getThemeColor('--shadow'),
        },
        suggestedMin: 0,
        suggestedMax: 255,
      },
    },
    elements: {
      line: {
        borderWidth: 3,
      },
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: getThemeColor('--font-color'),
          font: {
            family: 'Oswald',
            size: 14
          }
        }
      },
      tooltip: {
        enabled: true,
      },
    },
    hover: {
      mode: 'none',
    },
    interaction: {
      mode: 'none',
    },
    animation: {
      duration: 500,
      easing: 'easeOutQuart'
    }
  };

  const displayPointValuesPlugin = {
    id: 'displayPointValues',
    afterDatasetsDraw(chart) {
      const { ctx } = chart;
      chart.data.datasets.forEach((dataset, datasetIndex) => {
        const meta = chart.getDatasetMeta(datasetIndex);
        meta.data.forEach((point, index) => {
          const value = dataset.data[index];
          ctx.fillStyle = getThemeColor('--font-color');
          ctx.font = '12px Oswald';
          ctx.textAlign = 'center';
          ctx.fillText(value, point.x, point.y - 10);
        });
      });
    },
  };
  Chart.register(displayPointValuesPlugin);
  //STAT INFORMATION/SETUP

  //EVOLUTION SETUP
  const evolutions = [[currentPokemon.evoChain]];
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
  //FORM VARIETIES
  const fallbackImage = (require("../images/unkown.png"));
  
  if (currentPokemon.species.length) {
    currentPokemon.species.forEach(variety => {
      const fullRand = variety.pokemon.url.split("/")[6];
      const image = {
        original: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${fullRand}.png`,
        thumbnail: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${fullRand}.png`,
        originalAlt: `${variety.pokemon.name}`,
        thumbnailAlt: `${variety.pokemon.name}-thumbnail`,
        originalTitle: `${variety.pokemon.name}`,
        thumbnailTitle: `${variety.pokemon.name}-thumbnail`
      }
      formVarieties.push(image)
      const shinyImage = {
        original: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${fullRand}.png`,
        thumbnail: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${fullRand}.png`,
        originalAlt: `${variety.pokemon.name}`,
        thumbnailAlt: `${variety.pokemon.name}-thumbnail`,
        originalTitle: `${variety.pokemon.name}`,
        thumbnailTitle: `${variety.pokemon.name}-thumbnail`
      }
      formVarieties.push(shinyImage)
    })
  }



  return (
    <>
      <div className="viewPokemon">
        <div className="topInfo">
          <div className="mainTopInfo">
            <button type="button" className="return_button" onClick={returnMain}>Return!</button>
            <div className="nameType">
              <h1>#{currentPokemon.id}: <span>{displayName[0].toUpperCase() + displayName.slice(1)}</span></h1>
              <div className='viewTypeContainer'>
                {
                  currentPokemon.types.map((type, index) => {
                    const typeImage = require(`../images/types/${type}.png`);
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
                onErrorImageURL={fallbackImage}
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
                      <div className='playBtn' style={{ "--play-color": `var(--type-${primaryType})` }} onClick={() => { let globalAudio = new Audio(currentPokemon.cries[e]); globalAudio.play() }}>
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
        <h3>Stats</h3>
        <div className="radarContainer"><Radar key={theme} data={statData} options={radarOptions} /></div>
      </div>
    </>
  )
}
export default ViewPokemon;