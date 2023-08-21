import React, { useState } from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../style/Detail.scss"

function Detail({url, setPage}) {
	const [pokemon, setPokemon] = useState();
    if (pokemon === undefined) {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem('pokemon', JSON.stringify(data));
            setPokemon(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }
    if (pokemon !== undefined) {
        console.log(pokemon)
        const sprites = Object.keys(pokemon.sprites)
        return (
            <>
                <h1>#{pokemon.id} <span>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span></h1>
                <h2>Type</h2>
                <ul>
                    {pokemon.types.map((type, index) => {
                        return <li key={index}>{type.type.name}</li>
                    })}
                </ul>
                {pokemon.held_items.length > 0 ? <h2>Held Items</h2> : null}
                <ul>
                    {pokemon.held_items.map((item, index) => {
                        return <li key={index} >{item.item.name}</li>
                    })}
                </ul>
                <h2>Abilities</h2>
                <ul>
                    {pokemon.abilities.map((ability, index) => {
                        return <li key={index} className={ability.is_hidden ? "is_hidden" : null}>{ability.ability.name}</li>
                    })}
                </ul>
                <h2>Sprites</h2>
                {sprites.map((keys, index) => {
                    if (index <= 7 && pokemon.sprites[keys]){
                        return <img key={index} src={pokemon.sprites[keys]} alt={keys} title={keys}/>
                    }
                })}
            </>
        );
    }
}
  
  export default Detail;