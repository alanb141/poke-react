function DamageGrid({ relations }) {
  if (!relations) return null;
  const { doubleTo, halfTo, doubleFrom, halfFrom, quadFrom, quarterFrom, noDamageFrom, noDamageTo, type2 } = relations;
  return (
  <div className='damageContainer'>
    {doubleTo.length > 0 && (
      <div className='doubleTo damageInfo'>
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
      <div className='halfTo damageInfo'>
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
    {quadFrom.length > 0 && (
      <div className='quadFrom damageInfo'>
        <p className='damageTitle'><span className='redSpan'>4X</span> DAMAGE FROM</p>
        <div className='damageTypeContainer'>
          {quadFrom.map((type, i) => {
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
      <div className='doubleFrom damageInfo'>
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
      <div className='halfFrom damageInfo'>
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
    {quarterFrom.length > 0 && (
      <div className='quarterFrom damageInfo'>
        <p className='damageTitle'><span className='greenSpan'>&#188;</span> DAMAGE FROM</p>
        <div className='damageTypeContainer'>
          {quarterFrom.map((type, i) => {
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
      <div className='noDamageTo damageInfo'>
        <p className='damageTitle'>CANNOT DAMAGE</p>
        <div className='damageTypeContainer'>
          {noDamageTo.map((item, i) => {
            const typeImage = require(`../images/types/${item.target}.png`);
            return (
              <div 
                className="noDamageContainer"
                key={`${item.source}-${item.target}-${i}`} 
              >
                {type2 && (
                  <>
                    <span className="damagelessParent">
                      {item.source.toUpperCase()} MOVES
                    </span>
                    <span> ➔ </span>
                  </>
                )}
                <div
                  style={{ "--bg-img": `url(${typeImage})` }}
                  className="pokeType"
                  alt={item.target}
                  title={item.target}
                >
                  {item.target.toUpperCase()}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    )}
    {noDamageFrom.length > 0 && (
      <div className='noDamageFrom damageInfo'>
        <p className='damageTitle'>IMMUNE FROM</p>
        <div className='damageTypeContainer'>
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
  )
}

export default DamageGrid;