import React from 'react'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../style/Tile.scss"
import { replaceDash, cutDash } from "../store/collection"

function Tile({img, name, id, noName=false}) {
  //NAME CHANGE
	let displayName = name;
	if (name === "nidoran-f") {
		displayName = name.slice(0, name.indexOf('-'))+String.fromCodePoint(9792);
	}
  if (name === "nidoran-m") {
		displayName = name.slice(0, name.indexOf('-'))+String.fromCodePoint(9794);
	}
  if (name === "type-null") {
		displayName = name.replace("-", ": ");
	}
	
  if (replaceDash.includes(name)) {
		displayName = name.replace("-", " ");
	}
	
  if (cutDash.includes(name)) {
		displayName = name.split("-")[0];
	}
  //NAME CHANGE
	return (
		<div className="card" name={displayName} data-pokeno={id}> 
			{!noName ? <p>#{id}: <span>{displayName[0].toUpperCase()+displayName.slice(1)}</span></p> : null}
      <Link to={`/${name}-${id}`}>
				<LazyLoadImage 
					src={img}
					width={144} height={144}
					alt={displayName}
					title={displayName}
				/>
      </Link>
		</div>
	);
}

export default Tile;