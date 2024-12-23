import React, { useEffect } from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemon } from '../store/dataSlice';
import "../style/Tile.scss"

function Tile({img, name, id, url}) {
	const dispatch = useDispatch();
	const { items, error, retries } = useSelector((state) => state.pokemon);
	const getPokemon = () => {
		if (retries < 3 && !items[name]) {
			dispatch(fetchPokemon(url));
		} else if (items[name]) {
			alert("it exists so now lets change a state to give us a new view")
		}
	}
	return (
		<div className="card" name={name} pokeno={id} onClick={getPokemon}>
			<p>#{id}: <span>{name[0].toUpperCase()+name.slice(1)}</span></p>
			<LazyLoadImage 
				src={img}
				width={144} height={144}
				alt={name}
			/>
		</div>
	);
}

export default Tile;