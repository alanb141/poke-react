import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EvoChain from '../components/EvoChain';
import { fetchPokemonByName } from '../store/dataSlice';
import { Chart, RadialLinearScale, Tooltip, Legend, LineElement, PointElement, Filler } from 'chart.js';
import { Radar } from "react-chartjs-2";
import Loading from '../components/Loading';
import "../style/View.scss"
import { replaceDash, excludedNames, pokeTypeColours, radarColours } from "../store/collection"
import "react-image-gallery/styles/scss/image-gallery.scss";
import ImageGallery from "react-image-gallery";

let globalAudio = new Audio('your-audio-file.mp3');

Chart.register(RadialLinearScale, Tooltip, Legend, LineElement, PointElement, Filler);

function ViewPokemon() {
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

  //STAT INFORMATION/SETUP
  const statLabels = [];
  const baseStat = [];
  currentPokemon.stats.forEach(stat => {
    let statName = replaceStatNames(stat.stat.name, { "hp": "HP", "special-attack": "sp. Atk", "special-defense": "sp. Def" })
    statName = statName[0].toUpperCase() + statName.slice(1)
    statLabels.push(statName);
    baseStat.push(stat.base_stat);
  });

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
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
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
      },
      tooltip: {
        enabled: true, // Disable tooltips
      },
    },
    hover: {
      mode: 'none',
    },
    interaction: {
      mode: 'none',
    },
  };

  const displayPointValuesPlugin = {
    id: 'displayPointValues',
    afterDatasetsDraw(chart) {
      const { ctx } = chart;
      chart.data.datasets.forEach((dataset, datasetIndex) => {
        const meta = chart.getDatasetMeta(datasetIndex);
        meta.data.forEach((point, index) => {
          const value = dataset.data[index];
          ctx.fillStyle = 'black';
          ctx.font = '12px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(value, point.x, point.y - 10);
        });
      });
    },
  };
  Chart.register(displayPointValuesPlugin);
  //STAT INFORMATION/SETUP

  //EVOLUTION SETUP
  const evolutions = [[currentPokemon.evoChain.chain]];
  if (currentPokemon.evoChain.chain.evolves_to.length) {
    evolutions.push(currentPokemon.evoChain.chain.evolves_to);
    if (currentPokemon.evoChain.chain.evolves_to[0].evolves_to.length) {
      evolutions.push(currentPokemon.evoChain.chain.evolves_to[0].evolves_to);
    }
    if (currentPokemon.evoChain.chain.evolves_to[1]?.evolves_to.length) {
      evolutions.push(currentPokemon.evoChain.chain.evolves_to[1].evolves_to);
    }
    if (currentPokemon.evoChain.chain.evolves_to[2]?.evolves_to.length) {
      evolutions.push(currentPokemon.evoChain.chain.evolves_to[2].evolves_to);
    }
  }
  //EVOLUTION SETUP
  // console.log(currentPokemon);
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

  if (currentPokemon.species.varieties.length) {
    currentPokemon.species.varieties.forEach(variety => {
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
  console.log(currentPokemon);
  return (
    <div id="viewPokemon">
      <div id="topInfo">
        <div className="mainTopInfo">
          <button type="button" className="return_button" onClick={returnMain}>Return!</button>
          <div id="nameType">
            <h1>#{currentPokemon.id}: <span>{displayName[0].toUpperCase() + displayName.slice(1)}</span></h1>
            <div className='viewTypeContainer'>
              {
                currentPokemon.types.map((type, index) => {
                  const typeImage = require(`../images/types/${type.type.name}.png`);
                  return (
                    <div className='typeEl' key={type + "-" + index} style={{ "--bg-img": `url(${typeImage})` }} alt={type.type.name} title={type.type.name}>{type.type.name.toUpperCase()}</div>
                  )
                })
              }
            </div>
          </div>
          <div style={{ "--border-colour": pokeTypeColours[currentPokemon.types[0].type.name], "maxWidth": "375px" }} >
            <ImageGallery items={formVarieties} showNav={false} showFullscreenButton={false} showPlayButton={false} onErrorImageURL={fallbackImage} />
          </div>
        </div>
        <div id="infoContainer">
          <div id="pokeAbility">
            <h2>Abilities</h2>
            {
              currentPokemon.abilities.map((ability, index) => {
                let flavourText = currentPokemon.fullAbilities[ability.ability.name].effect_entries.length ?
                  currentPokemon.fullAbilities[ability.ability.name].effect_entries.filter(item => item.language.name === "en")[0].effect
                  :
                  currentPokemon.fullAbilities[ability.ability.name].flavor_text_entries.filter(item => item.language.name === "en")[0].flavor_text
                const abilityName = ability.ability.name.split("-")
                return (
                  <div key={ability + "-" + index} className="abilityList">
                    <h3 style={{ "--bg-color": pokeTypeColours[currentPokemon.types[0].type.name] }}>
                      {
                        ability.is_hidden && <span className="secretAbility">Secret</span>
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
          <div id="pokeCry">
            <h2>Cry</h2>
            <div className="playBtnContainer">
              {Object.keys(currentPokemon.cries).map((e, i) => currentPokemon.cries[e] !== null && <React.Fragment key={`${e}-${i}`}>{e.toUpperCase()} <div className='playBtn' style={{ "--play-color": pokeTypeColours[currentPokemon.types[0].type.name] }} onClick={() => { globalAudio = new Audio(currentPokemon.cries[e]); globalAudio.play() }}><span>Play</span></div></React.Fragment>)}
            </div>
          </div>
        </div>
      </div>
      {evolutions.length > 1 ?
        (<div id="evolutions">
          <h2>Evolution</h2>
          <div className="evoContainer">
            {evolutions.map((evo, index) => (
              <EvoChain chain={evo} key={`evolution-${index}`} mainColour={pokeTypeColours[currentPokemon.types[0].type.name]} name={displayName} />
            ))}
          </div>
        </div>)
        : null
      }
      <div id="radarChart" style={{ "--radar-colour": radarColours[currentPokemon.types[0].type.name] }}>
        <h3>Stats</h3>
        <div className="radarContainer"><Radar data={statData} options={radarOptions} /></div>
      </div>
    </div>
  )
}
export default ViewPokemon;