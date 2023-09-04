import React, { useState } from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../style/Detail.scss"

function Detail({url, setPage}) {
	const [attribute, setAttribute] = useState();
    function attText (url) {
        console.log(url)
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            {data.effect_entries.map((effect) => {
                if (Object.values(effect.language).indexOf('en') > -1) {
                    setAttribute(effect.effect);
                    return effect;
                }
            })}
        })
        .catch((err) => {
            console.log(err.message);
        });
    }
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
        const stats = Object.keys(pokemon.stats)
        // const dream_world = Object.keys(pokemon.sprites.other.dream_world)
        // const home = Object.keys(pokemon.sprites.other.home)
        const official_artwork = Object.keys(pokemon.sprites.other['official-artwork'])
        return (
            <div className="pokeDetail" key={pokemon.name}>
                <div className="leftPoke">
                    <h1>#{pokemon.id} <span>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span></h1>
                    <button onClick={() => setPage(true)}>X</button>
                    <div className="pokePic">
                        {official_artwork.map((keys, index) => {
                            if (index <= 7 && pokemon.sprites.other['official-artwork'][keys]){
                                return <img key={index} src={pokemon.sprites.other['official-artwork'][keys]} alt={keys} title={keys}/>
                            }
                        })}
                    </div>
                    <div className="pokeAttr">
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
                                if (attribute === undefined) {
                                    attText(ability.ability.url)
                                } else {
                                    return <li key={index} className={ability.is_hidden ? "is_hidden" : null}>{ability.ability.name} - {attribute}</li>
                                }
                            })}
                        </ul>
                    </div>
                    {pokemon.stats.map((keys, index) => {
                        console.log(keys)
                        return <><p key={index}>{keys.stat.name}:</p> <p key="index">{keys.base_stat}</p></>
                    })}
                    {/* <h2>Sprites</h2>
                    {sprites.map((keys, index) => {
                        if (index <= 7 && pokemon.sprites[keys]){
                            return <img key={index} src={pokemon.sprites[keys]} alt={keys} title={keys}/>
                        }
                    })}
                    {dream_world.map((keys, index) => {
                        if (index <= 7 && pokemon.sprites.other.dream_world[keys]){
                            return <img key={index} src={pokemon.sprites.other.dream_world[keys]} alt={keys} title={keys}/>
                        }
                    })}
                    {home.map((keys, index) => {
                        if (index <= 7 && pokemon.sprites.other.home[keys]){
                            return <img key={index} src={pokemon.sprites.other.home[keys]} alt={keys} title={keys}/>
                        }
                    })} */}
                </div>

                <div className="rightPoke">
                    {pokemon.moves.map((keys, index) => {
                        // console.log(keys)
                        // return <><p key={index}>{keys.stat.name}:</p> <p key="index">{keys.base_stat}</p></>
                    })}
                </div>
            </div>
        );
    }
}
  
  export default Detail;