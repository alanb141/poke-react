import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../style/Tile.scss"
import { replaceDash } from "../store/collection"

function Tile({ img, name, id, noName = false, type, toggleFavourites, isFavorite }) {

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
          >
            ★
          </button>
          <div className='lazyImg'>
            <LazyLoadImage
              src={img}
              width={96} height={96}
              alt={displayName}
              title={displayName}
            />
          </div>
          <div className="types-container">
            {type && type.map((t, index) => {
              const typeName = t.type ? t.type.name : t;
              const typeImage = require(`../images/types/${typeName}.png`);
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
          <p id={nameLabelId}>#{id}: <span>{displayName[0].toUpperCase() + displayName.slice(1)}</span></p>
        </Link>
      </div>
      :
      <div className="card" name={displayName} data-pokeno={id}>
        <Link to={`/${name}-${id}`}>
          <LazyLoadImage
            src={img}
            width={120} height={120}
            alt={displayName}
            title={displayName}
          />
        </Link>
      </div>

  );
}

export default Tile;