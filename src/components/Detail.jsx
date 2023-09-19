import React from 'react';

export default class Detail extends React.Component {
    constructor(props) {
        super(props);
console.log(props)
        this.state = {
            count: 0,
        }
    }
    render() {
        return (
            <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={() => this.setState({count: this.state.count + 1})}>
                tt
            </button>
            </div>
        )
    }
}

// import React, { useState } from 'react'
// // import { LazyLoadImage } from "react-lazy-load-image-component";
// import "../style/Detail.scss"

// function Detail({url, setPage}) {
// 	const [attribute, setAttribute] = useState();
    
//     function attText (url) {
//         fetch(url)
//         .then((response) => response.json())
//         .then((data) => {
//             data.effect_entries.map((effect) => {
//                 if (Object.values(effect.language).indexOf('en') > -1) {
//                     setAttribute(effect.effect);
//                 }
//             })
//         })
//         .catch((err) => {
//             console.log(err.message);
//         });
//     }

//     function sortByLevel(property) {
//         var sortOrder = 1;
//         if(property[0] === "-") {
//             sortOrder = -1;
//             property = property.substr(1);
//         }
//         return function (a,b) {
//             var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
//             return result * sortOrder;
//         }
//     }
    
// 	const [showLevel, setShowLevel] = useState(true);
//     function moveType(e, moveType) {
//         if (moveType !== "level") {
//             setShowLevel(false);
//         }else {
//             setShowLevel(true);
//         }
//         var i, tabcontent, tablinks;
//         tabcontent = document.getElementsByClassName("tabcontent");
//         for (i = 0; i < tabcontent.length; i++) {
//           tabcontent[i].style.display = "none";
//         }
      
//         tablinks = document.getElementsByClassName("tablinks");
//         for (i = 0; i < tablinks.length; i++) {
//           tablinks[i].className = tablinks[i].className.replace(" active", "");
//         }
      
//         document.getElementById(moveType).style.display = "table-row-group";
//         e.target.className += " active";
//     }

//     // function thing(e) {
//     //     // console.log(e)
//     //     return e.move_learn_method.name === "level-up"
//     //     // if(e.move_learn_method.name === "level-up"){
//     //     // }
//     // }

// 	const [pokemon, setPokemon] = useState();
//     if (pokemon === undefined) {
//         fetch(url)
//         .then((response) => response.json())
//         .then((data) => {
//             localStorage.setItem('pokemon', JSON.stringify(data));
//             setPokemon(data);
//         })
//         .catch((err) => {
//             console.log(err.message);
//         });
//     }
//     if (pokemon !== undefined) {
//         let levelUp = [];
//         let tutor = [];
//         let tm = [];
//         let eggMove = [];
        
//         console.log(pokemon)
//         pokemon.moves.map((keys, index) => {
//             // const l = keys.version_group_details.length - 1;
//             keys.version_group_details.map(e => {
//                 let obj = {
//                     'level': e.level_learned_at,
//                     'name': keys.move.name.replace(/-/g, " "),
//                     'method': e.move_learn_method.name,
//                     'version': e.version_group.name.replace(/-/g, " ")
//                 }
//             if (obj.method === "level-up"){
//                 levelUp.push(obj);
//             } else if (obj.method === "tutor") {
//                 tutor.push(obj);
//             } else if (obj.method === "machine") {
//                 tm.push(obj);
//             } else {
//                 eggMove.push(obj);
//             }
//             })
//         });
//         levelUp.sort(sortByLevel("level"));
//         // const stats = Object.keys(pokemon.stats)
//         // const dream_world = Object.keys(pokemon.sprites.other.dream_world)
//         // const home = Object.keys(pokemon.sprites.other.home)
//         const official_artwork = Object.keys(pokemon.sprites.other['official-artwork'])
        
//         return (
//             <div className="pokeDetail" key={pokemon.name}>
//                 <div className="leftPoke">
//                     <h1>#{pokemon.id} <span>{pokemon.name}</span></h1>
//                     <button onClick={() => setPage(true)}>X</button>
//                     <div className="pokePic">
//                         {official_artwork.map((keys, index) => {
//                             if (index <= 7 && pokemon.sprites.other['official-artwork'][keys]){
//                                 return <img key={index} src={pokemon.sprites.other['official-artwork'][keys]} alt={keys} title={keys}/>
//                             }
//                         })}
//                     </div>
//                     <div className="pokeAttr">
//                         <h2>Type</h2>
//                         <ul>
//                             {pokemon.types.map((type, index) => {
//                                 return <li key={index}>{type.type.name}</li>
//                             })}
//                         </ul>
//                         {pokemon.held_items.length > 0 ? 
//                             <>
//                             <h2>Held Items</h2> 
//                             <ul>
//                                 {pokemon.held_items.map((item, index) => {
//                                     return <li key={index} >{item.item.name}</li>
//                                 })}
//                             </ul>
//                             </>
//                             : 
//                             null
//                         }
//                         {pokemon.game_indices.length > 0 ? 
//                             <>
//                             <h2>Games Available</h2>
//                             <ul>
//                                 {pokemon.game_indices.map((game, index) => {
//                                     return <li key={index} >{game.version.name.replace(/-/g, " ")}</li>
//                                 })}
//                             </ul>
//                             </>
//                             : 
//                             null
//                         }
//                     </div>
//                     <div className="pokeAbil">
//                         <h2>Abilities</h2>
//                         <ul>
//                             {pokemon.abilities.map((ability, index) => {
//                                 console.log(attribute)
//                                 if (attribute === undefined) {
//                                     attText(ability.ability.url)
//                                 }
//                                 return <li key={index} className={ability.is_hidden ? "is_hidden" : null}>{ability.ability.name} - {attribute}</li>
//                             })}
//                         </ul>
//                     </div>
//                     <div className="pokeStats">
//                         {pokemon.stats.map((keys, index) => {
//                             return <div key={index}><p>{keys.stat.name}:</p> <p key="index">{keys.base_stat}</p></div>
//                         })}
//                     </div>
//                     {/* <h2>Sprites</h2>
//                     {sprites.map((keys, index) => {
//                         if (index <= 7 && pokemon.sprites[keys]){
//                             return <img key={index} src={pokemon.sprites[keys]} alt={keys} title={keys}/>
//                         }
//                     })}
//                     {dream_world.map((keys, index) => {
//                         if (index <= 7 && pokemon.sprites.other.dream_world[keys]){
//                             return <img key={index} src={pokemon.sprites.other.dream_world[keys]} alt={keys} title={keys}/>
//                         }
//                     })}
//                     {home.map((keys, index) => {
//                         if (index <= 7 && pokemon.sprites.other.home[keys]){
//                             return <img key={index} src={pokemon.sprites.other.home[keys]} alt={keys} title={keys}/>
//                         }
//                     })} */}
//                 </div>

//                 <div className="rightPoke">
//                     <div className="tab">
//                         {levelUp.length > 0 ? 
//                             <button className="tablinks active" onClick={(e) => moveType(e, 'level')}>Level-Up</button>
//                             :
//                             ""
//                         }
//                         {tm.length > 0 ? 
//                             <button className="tablinks" onClick={(e) => moveType(e, 'tm')}>TM/HM</button>
//                             :
//                             ""
//                         }
//                         {tutor.length > 0 ? 
//                             <button className="tablinks" onClick={(e) => moveType(e, 'tutor')}>Tutor</button>
//                             :
//                             ""
//                         }
//                         {eggMove.length > 0 ? 
//                             <button className="tablinks" onClick={(e) => moveType(e, 'egg')}>Egg Moves</button>
//                             :
//                             ""
//                         }
//                     </div>
//                     <table>
//                         <thead>
//                             <tr>
//                                 {showLevel ? <th>level</th> : null}
//                                 <th>name</th>
//                                 <th>version</th>
//                             </tr>
//                         </thead>
//                         <tbody id="level" className="tabcontent">
//                             {levelUp.map((keys, index) => {
//                                 return <tr key={index}>
//                                     <td>{keys.level <= 1 ? "-" : keys.level}</td>
//                                     <td>{keys.name}</td>
//                                     <td>{keys.version}</td>
//                                 </tr>
//                             })}
//                         </tbody>
//                         <tbody id="tm" className="tabcontent">
//                             {tm.map((keys, index) => {
//                                 return <tr key={index}>
//                                     <td>{keys.name}</td>
//                                     <td>{keys.version}</td>
//                                 </tr>
//                             })}
//                         </tbody>
//                         <tbody id="tutor" className="tabcontent">
//                             {tutor.map((keys, index) => {
//                                 return <tr key={index}>
//                                     <td>{keys.name}</td>
//                                     <td>{keys.version}</td>
//                                 </tr>
//                             })}
//                         </tbody>
//                         <tbody id="egg" className="tabcontent">
//                             {eggMove.map((keys, index) => {
//                                 return <tr key={index}>
//                                     <td>{keys.name}</td>
//                                     <td>{keys.version}</td>
//                                 </tr>
//                             })}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         );
//     }
// }
  
//   export default Detail;