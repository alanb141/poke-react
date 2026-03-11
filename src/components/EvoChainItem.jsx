import Tile from "./Tile";
import { generateEvolveDetails } from "../utils/evolutionHelpers";

const EvoChainItem = ({ stage, mainColour, showArrow }) => {
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${stage.id}.png`;

  return (
    <div className={`evoChain${!showArrow ? " chainBase" : ""}`}>
      {showArrow && (
        <div className="evolveParamsContainer">
          <div className="evolveType" style={{ "--main-colour": mainColour }}>
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