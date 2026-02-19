import { types } from "../store/collection";
import "../style/Types.scss";

function TypeChart({ typeState, doubleTo, halfTo, doubleFrom, halfFrom, noDamageFrom, noDamageTo, handleTypeSelect, isTypeMenuOpen, setIsTypeMenuOpen }) {
  const onTypeSelect = (e) => {
    handleTypeSelect(e.target.value);
  }
  return (
    <div id="chartPopup" className={isTypeMenuOpen ? "open" : "closed"}>
      <div class="typeChartMask" onClick={() => setIsTypeMenuOpen(false)}></div>
      <div id='typeChartContainer'>
        <h2>Choose a type to see its strengths and weaknesses</h2>
        <div
          className="typeChart">
          <select value={typeState} onChange={e => onTypeSelect(e)} className="type-selector">
            <option value="" disabled hidden>Choose your type</option>
            {types.map((typeName) => {
              return (
                <option value={typeName} key={typeName}>
                  {typeName}
                </option>
              );
            })}
          </select>
          <div id='damageContainer'>
            {doubleTo.length > 0 && (
              <div id="doubleTo" className='damageInfo'>
                <p className='damageTitle'><span className='greenSpan'>2X</span> DAMAGE TO</p>
                <div className='damageTypeContainer'>
                  {doubleTo.map((type, i) => {
                    const typeImage = require(`../images/types/${type}.png`);
                    return (
                      <div
                        style={{ "--bg-img": `url(${typeImage})` }}
                        className="pokeType"
                        alt={type}
                        title={type}
                        key={`${type}-${i}`}
                      >
                        {type.toUpperCase()}</div>
                    );
                  })}
                </div>
              </div>
            )}
            {halfTo.length > 0 && (
              <div id="halfTo" className='damageInfo'>
                <p className='damageTitle'><span className='redSpan'>&#189;</span> DAMAGE TO</p>
                <div className='damageTypeContainer'>
                  {halfTo.map((type, i) => {
                    const typeImage = require(`../images/types/${type}.png`);
                    return (
                      <div
                        style={{ "--bg-img": `url(${typeImage})` }}
                        className="pokeType"
                        alt={type}
                        title={type}
                        key={`${type}-${i}`}
                      >
                        {type.toUpperCase()}</div>
                    );
                  })}
                </div>
              </div>
            )}
            {doubleFrom.length > 0 && (
              <div id="doubleFrom" className='damageInfo'>
                <p className='damageTitle'><span className='redSpan'>2X</span> DAMAGE FROM</p>
                <div className='damageTypeContainer'>
                  {doubleFrom.map((type, i) => {
                    const typeImage = require(`../images/types/${type}.png`);
                    return (
                      <div
                        style={{ "--bg-img": `url(${typeImage})` }}
                        className="pokeType"
                        alt={type}
                        title={type}
                        key={`${type}-${i}`}
                      >
                        {type.toUpperCase()}</div>
                    );
                  })}
                </div>
              </div>
            )}
            {halfFrom.length > 0 && (
              <div id="halfFrom" className='damageInfo'>
                <p className='damageTitle'><span className='greenSpan'>&#189;</span> DAMAGE FROM</p>
                <div className='damageTypeContainer'>
                  {halfFrom.map((type, i) => {
                    const typeImage = require(`../images/types/${type}.png`);
                    return (
                      <div
                        style={{ "--bg-img": `url(${typeImage})` }}
                        className="pokeType"
                        alt={type}
                        title={type}
                        key={`${type}-${i}`}
                      >
                        {type.toUpperCase()}</div>
                    );
                  })}
                </div>
              </div>
            )}
            {noDamageTo.length > 0 && (
              <div id="noDamageFrom" className='damageInfo'>
                <div className='damageTypeContainer'>
                  <p className='damageTitle'>CANNOT DAMAGE</p>
                  {noDamageTo.map((type, i) => {
                    const typeImage = require(`../images/types/${type}.png`);
                    return (
                      <div
                        style={{ "--bg-img": `url(${typeImage})` }}
                        className="pokeType"
                        alt={type}
                        title={type}
                        key={`${type}-${i}`}
                      >
                        {type.toUpperCase()}</div>
                    );
                  })}
                </div>
              </div>
            )}
            {noDamageFrom.length > 0 && (
              <div id="noDamageTo" className='damageInfo'>
                <div className='damageTypeContainer'>
                  <p className='damageTitle'>IMMUNE TO</p>
                  {noDamageFrom.map((type, i) => {
                    const typeImage = require(`../images/types/${type}.png`);
                    return (
                      <div
                        style={{ "--bg-img": `url(${typeImage})` }}
                        className="pokeType"
                        alt={type}
                        title={type}
                        key={`${type}-${i}`}
                      >
                        {type.toUpperCase()}</div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TypeChart;