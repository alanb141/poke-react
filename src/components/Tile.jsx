import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../style/Tile.scss"
import { replaceDash } from "../store/collection"

function Tile({img, name, id, noName=false, sound, onLongDrag}) {
  // DRAGGING
  const [isDragging, setIsDragging] = useState(false);
  const dragTimeout = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);

    dragTimeout.current = setTimeout(() => {
      onLongDrag(e, name, id, sound);
    }, 500);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (dragTimeout.current) {
      clearTimeout(dragTimeout.current);
      dragTimeout.current = null;
    }
  };
  // DRAGGING

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
  //NAME CHANGE
	return (
    !noName ? 
      <div className="card" name={displayName} data-pokeno={id}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        // onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      > 
        <p>#{id}: <span>{displayName[0].toUpperCase()+displayName.slice(1)}</span></p> 
        <Link to={`/${name}-${id}`}>
          <LazyLoadImage 
            src={img}
            width={144} height={144}
            alt={displayName}
            title={displayName}
          />
        </Link>
      </div>
    : 
      <div className="card" name={displayName} data-pokeno={id}> 
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