import React from 'react'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../style/Tile.scss"

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
  if (["great-tusk", "scream-tail", "brute-bonnet", "flutter-mane", "slither-wing", "sandy-shocks", "walking-wake", "gouging-fire", "raging-bolt", "iron-treads", "iron-bundle","iron-hands","iron-jugulis","iron-moth","iron-thorns","iron-valiant","iron-leaves","iron-boulder","iron-crown", "mr-mime", "mime-jr", "mr-rime"].includes(name)) {
		displayName = name.replace("-", " ");
	}
  if (["oinkologne-male", "mousehold-family-of-four", "squawkabilly-green-plumage", "palafin-zero", "tatsugiri-curly", "dudunsparce-two-segment"].includes(name)) {
		displayName = name.split("-")[0];
	}
  //NAME CHANGE
	return (
		<div className="card" name={displayName} pokeno={id}> 
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