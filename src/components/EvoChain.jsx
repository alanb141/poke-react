import "../style/Evolution.scss"
import EvoChainItem from './EvoChainItem';

function EvoChain({ chain, mainColour, isRoot = false }) {
  const stage = Array.isArray(chain) ? chain[0] : chain; 
  return (
    <div className={`chainContainer${isRoot ? " evoContainer" : ""}`}>
      <EvoChainItem stage={stage} mainColour={mainColour} showArrow={!isRoot} />
      {stage.evolves_to && stage.evolves_to.length > 0 && (
        <div className="multiEvolutionContainer">
          {stage.evolves_to.map((childNode, index) => (
            <EvoChain chain={childNode} mainColour={mainColour} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EvoChain;
