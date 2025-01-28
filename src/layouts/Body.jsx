import React, { useState } from 'react'
import Tile from "../components/Tile"
import Search from "../components/Search"

function Body({data}) {
	const [pokeData, setPokeData] = useState(data);

	let displayedContacts = data
	function searchHandler (event) {
		let search = event.target.value.toLowerCase()
		displayedContacts = data.filter((el) => {
			let pokeno = el.url.split("/");
			let searchValue = el.name.toLowerCase()+"|"+pokeno[6];
			return searchValue.indexOf(search) !== -1;
		})
		setPokeData(displayedContacts)
	}

	
	const excludedNames = ['deoxys-normal', 'wormadam-plant', 'giratina-altered', 'shaymin-land', 'basculin-red-striped', 'darmanitan-standard', 'tornadus-incarnate', 'thundurus-incarnate', 'landorus-incarnate', 'keldeo-ordinary', 'meloetta-aria', 'meowstic-male', 'aegislash-shield', 'pumpkaboo-average', 'gourgeist-average', 'zygarde-50', 'oricorio-baile', 'lycanroc-midday', 'wishiwashi-solo', 'minior-red-meteor', 'mimikyu-disguised', 'toxtricity-amped', 'eiscue-ice', 'indeedee-male', 'morpeko-full-belly', 'urshifu-single-strike', 'basculegion-male', 'enamorus-incarnate', '']
	if (pokeData && pokeData.length > 0) {
		return (
			<>
				<Search change={searchHandler} />
				<div className="cardList">
				{
					pokeData.map(items => {
						const fullRand = items.url.split("/")[6];
						let name = items.name;
						if (excludedNames.includes(items.name)) {
							name = items.name.slice(0, items.name.indexOf('-'));
						}
	
						if (fullRand && fullRand < 10000) {
							const img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+fullRand+".png";
							return (
								<Tile
									key={fullRand}
									img={img}
									name={name}
									id={fullRand}
									url={items.url}
								/>
							);
						} else {
							return null;
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