import React, { useState, useEffect  } from 'react'
import Tile from "../components/Tile"
import Search from "../components/Search"
import FilterMenu from "../components/FilterMenu"
import { useLocation } from 'react-router-dom';

function Body({data, onLongDrag}) {
	const [pokeData, setPokeData] = useState(data);
  const location = useLocation();

	useEffect(() => {
		let savedScrollY = JSON.parse(localStorage.getItem('scrollY')) || [];
    const scrollDoc = document.getElementById("root");
	
		if (savedScrollY.length > 1) {
			if (savedScrollY[savedScrollY.length - 2] < 1) {
				scrollDoc.scrollTo(0, savedScrollY[savedScrollY.length - 3]);
			} else {
				scrollDoc.scrollTo(0, savedScrollY[savedScrollY.length - 2]);
			}
		} else if (savedScrollY.length === 1) {
			scrollDoc.scrollTo(0, savedScrollY[0]);
		}
	
		const handleScroll = () => {
			const currentScrollY = Math.floor(scrollDoc.scrollTop);
			savedScrollY = [...savedScrollY, currentScrollY].slice(-3);
			localStorage.setItem('scrollY', JSON.stringify(savedScrollY));
		};
	
		scrollDoc.addEventListener('scroll', handleScroll);
	
		return () => {
			handleScroll();
			scrollDoc.removeEventListener('scroll', handleScroll);
		};
	}, [location]);
	

  const handleGetScrollPosition = (index) => {
		const myElementRef = document.querySelectorAll('[data-pokeno]');
		const rootRef = document.getElementById('root');
    const position = myElementRef[index].getBoundingClientRect().top
		if (!myElementRef[index]) return null;
    return position + rootRef.scrollTop - 150;
  };

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

	if (pokeData && pokeData.length > 0) {
		return (
			<>
				<Search change={searchHandler} />
				<FilterMenu handleGetScrollPosition={handleGetScrollPosition} />
				<div className="cardList">
				{
					pokeData.map(items => {
						let name = items.name;
            return (
              <Tile
                key={items.id}
                img={items.sprite}
                name={name}
                id={items.id}
                url={items.url}
                sound={items.cry}
                onLongDrag={onLongDrag}
              />
            );
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