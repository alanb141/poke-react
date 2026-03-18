import Tile from "./Tile";
import { generateEvolveDetails } from "../utils/evolutionHelpers";

const EvoChainItem = ({ stage, mainColour, showArrow }) => {
  const spriteUrl = `https://wsrv.nl/?url=raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${stage.id}.png&q=80`;

  return (
    <div className={`evoChain${!showArrow ? " chainBase" : ""}`}>
      {showArrow && (
        <div className="evolveParamsContainer">
          <div className={`evolveType${stage.evolution_details[0].trigger === "battle" ? " battleEvo" : ""}`} style={{ "--main-colour": mainColour }}>
            {generateEvolveDetails(stage.evolution_details[0], stage.id)}
          </div>
        </div>
      )}

      <Tile
        key={`${stage.name}-${stage.id}`}
        img={spriteUrl}
        name={stage.name}
        id={stage.id}
        noName={true}
      />
    </div>
  );
};
export default EvoChainItem;