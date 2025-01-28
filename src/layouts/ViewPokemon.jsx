import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import EvoChain from '../components/EvoChain';
import { fetchPokemonByName } from '../store/dataSlice';
import { Chart, RadialLinearScale, Tooltip, Legend, LineElement, PointElement, Filler } from 'chart.js';
import { Radar } from "react-chartjs-2";
import Loading from '../components/Loading';
import "../style/View.scss"

Chart.register(RadialLinearScale, Tooltip, Legend, LineElement, PointElement, Filler);
// const pokeTypes = {
//   "normal": "1",
//   "fighting": "2",
//   "flying": "3",
//   "poison": "4",
//   "ground": "5",
//   "rock": "6",
//   "bug": "7",
//   "ghost": "8",
//   "steel": "9",
//   "fire": "10",
//   "water": "11",
//   "grass": "12",
//   "electric": "13",
//   "psychic": "14",
//   "ice": "15",
//   "dragon": "16",
//   "dark": "17",
//   "fairy": "18",
//   "stellar": "19",
// }
const pokeTypeColours = {
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
  "fairy": "#f8bef8",
  "stellar": "#fff",
}

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
  const fullImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+currentPokemon.id+".png";

  // const groupedByVersion = currentPokemon.moves.reduce((acc, obj) => {
  //   obj.version_group_details.forEach(detail => {
  //     const versionName = detail.version_group.name;
  //     if (!acc[versionName]) {
  //       acc[versionName] = [];
  //     }
  //     acc[versionName].push(obj);
  //   });
  //   return acc;
  // }, {});

  // const groupedData = Object.entries(groupedByVersion).reduce((acc, [key, group]) => {
  //   acc[key] = group.map(obj => ({
  //     ...obj,
  //     version_group_details: obj.version_group_details.filter(detail => detail.version_group.name === key.toString())
  //   }));
  //   return acc;
  // }, {});

  // const gameGens = Object.keys(currentPokemon.sprites.versions);
  // const moveGens = Object.keys(groupedData);

  //STAT INFORMATION/SETUP
  const statLabels = [];
  const baseStat = [];
  currentPokemon.stats.forEach(stat => {
    let statName = replaceStatNames(stat.stat.name, {"hp": "HP", "special-attack": "sp. Atk", "special-defense": "sp. Def"})
    statName = statName[0].toUpperCase()+statName.slice(1)
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
      // const { ctx, chartArea: { top, left, right, bottom }, scales: { r } } = chart;
      const { ctx } = chart;
      chart.data.datasets.forEach((dataset, datasetIndex) => {
        const meta = chart.getDatasetMeta(datasetIndex);
        meta.data.forEach((point, index) => {
          const value = dataset.data[index];
          ctx.fillStyle = 'black'; // Set the color of the text
          ctx.font = '12px Arial'; // Set the font style
          ctx.textAlign = 'center'; // Align text to the center
          ctx.fillText(value, point.x, point.y - 10); // Display value slightly above the point
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
    if (currentPokemon.evoChain.chain.evolves_to[2]?.evolves_to.length) {
      evolutions.push(currentPokemon.evoChain.chain.evolves_to[2].evolves_to);
    }
  }
  //EVOLUTION SETUP
  console.log(evolutions);

  //NAME CHANGE
	let displayName = currentPokemon.name;
	if (currentPokemon.name === "nidoran-f") {
		displayName = currentPokemon.name.slice(0, currentPokemon.name.indexOf('-'))+String.fromCodePoint(9792);
	}
  if (currentPokemon.name === "nidoran-m") {
		displayName = currentPokemon.name.slice(0, currentPokemon.name.indexOf('-'))+String.fromCodePoint(9794);
	}
  if (currentPokemon.name === "type-null") {
		displayName = currentPokemon.name.replace("-", ": ");
	}
  if (["great-tusk", "scream-tail", "brute-bonnet", "flutter-mane", "slither-wing", "sandy-shocks", "walking-wake", "gouging-fire", "raging-bolt", "iron-treads", "iron-bundle","iron-hands","iron-jugulis","iron-moth","iron-thorns","iron-valiant","iron-leaves","iron-boulder","iron-crown", "mr-mime", "mime-jr", "mr-rime"].includes(currentPokemon.name)) {
		displayName = currentPokemon.name.replace("-", " ");
	}
  if (["oinkologne-male", "mousehold-family-of-four", "squawkabilly-green-plumage", "palafin-zero", "tatsugiri-curly", "dudunsparce-two-segment"].includes(currentPokemon.name)) {
		displayName = currentPokemon.name.split("-")[0];
	}
  //NAME CHANGE

  return (
    <div id="viewPokemon">
      <div id="topInfo">
        <div className="mainTopInfo">
          <button type="button" onClick={returnMain}>Return!</button>
          <div id="nameType">
            <h1>#{currentPokemon.id}: <span>{displayName[0].toUpperCase()+displayName.slice(1)}</span></h1>
            {
              currentPokemon.types.map((type, index) => {
                const typeImage = require(`../images/types/${type.type.name}.png`);
                const myComponentStyle = {
                  backgroundImage: `url(${typeImage})`,
                  backgroundSize: "144px",
                  height: "28px",
                  width: "44px",
                  backgroundColor: `${pokeTypeColours[type.type.name]}`,
                  borderRadius: "50px",
                  marginTop: "7px"
                }
                return (
                  <div key={type+"-"+index} style={myComponentStyle} alt={type.type.name} title={type.type.name}/>
                )
              })
            }
          </div>
          <img src={fullImg} alt={displayName} title={displayName} height="300px" width="300px"/>
        </div>
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
                <div key={ability+"-"+index} className="abilityList">
                  <h3 style={{ backgroundColor: pokeTypeColours[currentPokemon.types[0].type.name] }}>
                    {
                      ability.is_hidden &&<span className="secretAbility">Secret</span>
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
      </div>
      {evolutions.length > 1 ? 
        (<div id="evolutions">
            <h2>Evolution</h2>
            <div className="evoContainer">
              {evolutions.map((evo, index) => (
                <EvoChain chain={evo} key={`evolution-${index}`} mainColour={pokeTypeColours[currentPokemon.types[0].type.name]} name={displayName}/>
              ))}
            </div>
        </div>)
        : null
      }      
      <div id="radarChart">
        <h3>Stats</h3>
        <div className="radarContainer"><Radar data={statData} options={radarOptions} /></div>
      </div>
      {/* <div id="pokeSprites">
        <Tabs>
          <TabList>
            {gameGens.map((ver, ind) => {
              return <Tab key={ver+ind}>{ver}</Tab>
            })}
          </TabList>
          
          {gameGens.map(ver => {
            const gameVer = Object.keys(currentPokemon.sprites.versions[ver]);
            return (
              <TabPanel key={ver}>
                {gameVer.map(version => {
                  const sprites = currentPokemon.sprites.versions[ver][version];
                  return (
                    <div key={version}>
                      <h2>{version}</h2>
                      {Object.entries(sprites).map(([key, value]) => {
                        if (value && typeof value === 'object') {
                          return (
                              Object.entries(value).map(([subKey, subValue]) => {
                                if (!subValue) return null;
                                return (
                                  <img
                                    key={`${key}-${subKey}`}
                                    src={subValue}
                                    alt={`pokeSprite-${key}-${subKey}`}
                                  />
                                );
                              })
                          );
                        }
                        if (value) {
                          return (
                            <img
                              key={key}
                              src={value}
                              alt={`pokeSprite-${key}`}
                            />
                          );
                        }
                        return null;
                      })}
                    </div>)
                })}
              </TabPanel>
            )
          })}
        </Tabs>
      </div> */}
      {/* <div id="pokeMoves">
        <Tabs>
          <TabList>
            {moveGens.map((ver, ind) => {
              return <Tab key={ver+ind}>{ver}</Tab>
            })}
          </TabList>
          
          {moveGens.map(ver => {
            let levelUp = groupedData[ver].filter(move => move.version_group_details[0].move_learn_method.name === "level-up");
            let machine = groupedData[ver].filter(move => move.version_group_details[0].move_learn_method.name === "machine");
            let tutor = groupedData[ver].filter(move => move.version_group_details[0].move_learn_method.name === "tutor");
            let egg = groupedData[ver].filter(move => move.version_group_details[0].move_learn_method.name === "egg");
            levelUp = levelUp.filter((value, index, self) =>
              index === self.findIndex((t) => (
                t.move.name === value.move.name
              ))
            );
            let sortedLevelUp = levelUp.sort((a,b) => b.version_group_details[0].level_learned_at - a.version_group_details[0].level_learned_at);
            return (
              <TabPanel key={ver}>
                <h3>Level Up</h3>
                {sortedLevelUp.reverse().map((move, index) => {
                  return (
                    <div key={move.move.name+index}>{move.move.name} + {move.version_group_details[0].level_learned_at}</div>
                  )
                })}
                {machine.length ?
                  <>
                  <h3>Machine Attacks</h3>
                  {machine.map((move, index) => {
                    return (
                      <div key={move.move.name+index}>{move.move.name}</div>
                    )
                  })}
                  </>
                :
                ""}
                {tutor.length ?
                  <>
                  <h3>Move Tutor Attacks</h3>
                  {tutor.map((move, index) => {
                    return (
                      <div key={move.move.name+index}>{move.move.name}</div>
                    )
                  })}
                  </>
                :
                ""}
                {egg.length ?
                  <>
                  <h3>Egg Moves</h3>
                  {egg.map((move, index) => {
                    return (
                      <div key={move.move.name+index}>{move.move.name}</div>
                    )
                  })}
                  </>
                :
                ""}
              </TabPanel>
            )
          })}
        </Tabs>
      </div> */}
    </div>
  )
}
export default ViewPokemon;