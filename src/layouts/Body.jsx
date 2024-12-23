import React, { useState } from 'react'
import Tile from"../components/Tile"
import Search from"../components/Search"

function Body({data}) {
	const [state, setState] = useState(data);
	let displayedContacts = data
	function searchHandler (event) {
		let search = event.target.value.toLowerCase()
		displayedContacts = data.filter((el) => {
			let pokeno = el.url.split("/");
			let searchValue = el.name.toLowerCase()+"|"+pokeno[6];
			return searchValue.indexOf(search) !== -1;
		})
		setState(displayedContacts)
	}
	
	const excludedNames = ['deoxys-normal', 'wormadam-plant', 'giratina-altered', 'shaymin-land', 'basculin-red-striped', 'darmanitan-standard', 'tornadus-incarnate', 'thundurus-incarnate', 'landorus-incarnate', 'keldeo-ordinary', 'meloetta-aria', 'meowstic-male', 'aegislash-shield', 'pumpkaboo-average', 'gourgeist-average', 'zygarde-50', 'oricorio-baile', 'lycanroc-midday', 'wishiwashi-solo', 'minior-red-meteor', 'mimikyu-disguised', 'toxtricity-amped', 'eiscue-ice', 'indeedee-male', 'morpeko-full-belly', 'urshifu-single-strike', 'basculegion-male', 'enamorus-incarnate', '']
	if (state && state.length > 0) {
		return (
			<>
				<Search change={searchHandler} />
				<div className="cardList">
				{
					state.map((items, index) => {
						const fullRand = items.url.split("/");
						let name = items.name;
						if (excludedNames.includes(items.name)) {
							name = items.name.slice(0, items.name.indexOf('-'));
						}
						else if (items.name === "nidoran-f") {
							name = items.name.slice(0, items.name.indexOf('-'))+String.fromCodePoint(9792);
						}else  if (items.name === "nidoran-m") {
							name = items.name.slice(0, items.name.indexOf('-'))+String.fromCodePoint(9794);
						}
	
						if (fullRand.length && fullRand[6] < 10000){
							const img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+fullRand[6]+".png";
							return (
								<Tile key={fullRand[6]} img={img} name={name} id={fullRand[6]} url={items.url} />
							);
						} 
					})
				}
				</div>
			</>
		);
	} else {
		return (
			<>
			<Search change={searchHandler} />
			<div className="noResults"><span>No results,</span><span>Please check your spelling or try again</span></div>
			</>
		)
	}
}
  
export default Body;