import { useMemo } from 'react';
import Tile from './Tile';
import "../style/Evolution.scss"
import { applinFamily, wurmpleFamily, evolutionExceptions } from "../store/collection"
import { generateEvolveDetails } from '../utils/evolutionHelpers';

const EVOLUTION_OVERRIDES = {
  probopass: [{ trigger: { name: "use-item" }, item: { name: "thunder-stone" } }],
  crabominable: [{ trigger: { name: "use-item" }, item: { name: "ice-stone" } }],
  dipplin: [{ trigger: { name: "use-item" }, item: { name: "syrupy-apple" } }],
  hydrapple: [{ trigger: { name: "level-up" }, item: { name: "dragon-cheer" } }],
  sinistcha: [
    { trigger: { name: "use-item" }, item: { name: "masterpiece-teacup" } },
    { trigger: { name: "use-item" }, item: { name: "unremarkable-teacup" } } 
  ]
};

function EvoChain({ chain, mainColour, name }) {
  const processedChain = useMemo(() => {
    return chain.map(item => {
      let evolution_details = [...item.evolution_details];
      if (evolutionExceptions.includes(name)) {
        evolution_details = evolution_details.slice(-1);
      }

      if(EVOLUTION_OVERRIDES[item.species.name]) {
        evolution_details = EVOLUTION_OVERRIDES[item.species.name];
      }

      return {
        ...item,
        evolution_details,
        pokemonId: item.species.url.split('/')[6]
      };
    });
  }, [chain, name]);
  return (
    <div className={applinFamily.includes(name) 
    ? "multiEvolutionContainer applinFamily"
    : wurmpleFamily.includes(name) 
    ? "multiEvolutionContainer wurmpleFamily"
    : "multiEvolutionContainer"} >
      {processedChain.map((item, index) => {
        const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.pokemonId}.png`;

        return (
          <div className="evoChain" key={`evoChain-${index}`}>
            {item.evolution_details.length > 0 && (
              <div className="evolveParamsContainer">
                {item.evolution_details.map((detail, ind) => (
                  <div className="evolveType" key={`evolveType-${ind}`} style={{ "--main-colour": mainColour }}>
                    {generateEvolveDetails(detail, ind)}
                  </div>
                ))}
              </div>
            )}
            <Tile
              key={`${item.species.name}-${index}`}
              img={img}
              name={item.species.name}
              id={item.pokemonId}
              url={item.species.url}
              noName={true}
            />
          </div>
        );
      })}
    </div>
  );
}
export default EvoChain;
