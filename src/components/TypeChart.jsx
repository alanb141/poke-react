import { useState, useMemo } from 'react';
import { types } from "../store/collection";
import { calculateDamageRelations } from "../utils/typeMath";
import DamageGrid from '../components/DamageGrid';
import "../style/Types.scss";

function TypeChart({ primaryTypeState, secondaryTypeState, handleTypeSelect, isTypeMenuOpen, setIsTypeMenuOpen }) {
	const [addSecondaryType, setAddSecondaryType] = useState(false);
  const onTypeSelect = (e) => {
    handleTypeSelect(e.target.value, e.target.classList[0]);
  }
  const damageRelations = useMemo(() => {
    if (!primaryTypeState) return null;
    return calculateDamageRelations(primaryTypeState, secondaryTypeState);
  }, [primaryTypeState, secondaryTypeState]);
  return (
    <div  className={`chartPopup ${isTypeMenuOpen ? "open" : "closed"}`}>
      <div className="typeChartMask blur" onClick={() => setIsTypeMenuOpen(false)}></div>
      <div className='typeChartContainer'>
        <h2>Choose a type to see its strengths and weaknesses</h2>
        <div
          className="typeChart">
          <select value={primaryTypeState} onChange={e => onTypeSelect(e)} className="primary-type-selector type-selector">
            <option value="" disabled hidden>Choose your type</option>
            {types.map((typeName) => {
              return (
                <option value={typeName.toLowerCase()} key={typeName} disabled={typeName.toLowerCase() === secondaryTypeState}>
                  {typeName}
                </option>
              );
            })}
          </select>
          {addSecondaryType && (
            <div className='second-type'>
              <select value={secondaryTypeState} onChange={e => onTypeSelect(e)} className="secondary-type-selector type-selector">
                <option value="" disabled hidden>Choose your type</option>
                {types.map((typeName) => {
                  return (
                    <option value={typeName.toLowerCase()} key={typeName} disabled={typeName.toLowerCase() === primaryTypeState}>
                      {typeName}
                    </option>
                  );
                })}
              </select>
              <button className="secondary-type-selector removeType" onClick={(e) => {setAddSecondaryType(false); handleTypeSelect('', e.target.classList[0])}}>X</button>
            </div>
          )}
          {primaryTypeState !== '' && !addSecondaryType && <p className='addType' onClick={() => setAddSecondaryType(true)}>Add secondary type +</p>}
          <DamageGrid relations={damageRelations} />
        </div>
      </div>
    </div>
  );
}

export default TypeChart;