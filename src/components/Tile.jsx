import { Link } from 'react-router-dom';
import "../style/Tile.scss"
import { replaceDash } from "../store/collection"

function Tile({ img, name, id, labelId, noName = false, type, toggleFavourites, isFavorite, index }) {

  //NAME CHANGE
  let displayName = name;
  if (name === "nidoran-f") {
    displayName = name.slice(0, name.indexOf('-')) + String.fromCodePoint(9792);
  }
  if (name === "nidoran-m") {
    displayName = name.slice(0, name.indexOf('-')) + String.fromCodePoint(9794);
  }
  if (name === "type-null") {
    displayName = name.replace("-", ": ");
  }
  if (replaceDash.includes(name)) {
    displayName = name.replace("-", " ");
  }
  //NAME CHANGE
  const nameLabelId = `pokemon-name-${id}`;
  return (
    !noName ?
      <div
        className="card"
        role="group"
        aria-labelledby={nameLabelId}
        name={displayName}
        data-pokeno={id}
        data-type={type}
      >
        <Link to={`/${name}-${id}`}>
          <button
            className={`fav-button ${isFavorite ? 'active' : ''}`}
            onClick={(e) => toggleFavourites(e, name)}
            aria-label={`Favorite ${displayName}`}
            name={"favorite"}
          >
            ★
          </button>
          <div className='lazyImg'>
            <img
              src={img}
              width={96} height={96}
              alt={displayName}
              title={displayName}
              loading={index < 20 ? "eager" : "lazy"}
              fetchpriority={index < 20 ? "high" : "low"}
              decoding={index < 20 ? "sync" : "async"}
            />
          </div>
          <div className="types-container">
            {type && type.map((t, index) => {
              const typeName = t.type ? t.type.name : t;
              const typeImage = `/images/types/${typeName}.webp`;
              return (
                <div
                  key={typeName + "-" + index}
                  style={{ "--bg-img": `url(${typeImage})` }}
                  className="pokeType"
                  alt={typeName}
                  title={typeName}
                />
              )
            })}
          </div>
          <p id={nameLabelId}>#{labelId}: <span>{displayName[0].toUpperCase() + displayName.slice(1)}</span></p>
        </Link>
      </div>
      :
      <div className="card" name={displayName} data-pokeno={id}>
        <Link to={`/${name}-${id}`}>
          <img
            src={img}
            width={120} height={120}
            alt={displayName}
            title={displayName}
            loading='lazy'
          />
        </Link>
      </div>

  );
}

export default Tile;