import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Tile from "../components/Tile";
import Search from "../components/Search";
import FilterMenu from "../components/FilterMenu";
import { FixedSizeGrid as Grid } from 'react-window';
import TypeChart from '../components/TypeChart';

import '../style/Main.scss';

function useContainerSize() {
	const [size, setSize] = useState({ width: 0, height: 0 });
	const ref = useRef(null);
	useLayoutEffect(() => {
		const element = ref.current;
		if (!element) return;

		const observer = new ResizeObserver((entries) => {
			const { width, height } = entries[0].contentRect;
			setSize({ width, height });
		});

		observer.observe(element);
		return () => observer.disconnect();
	}, []);

	return { ref, width: size.width, height: size.height };
}

const PokemonCell = ({ columnIndex, rowIndex, style, data }) => {
	const { list, columnCount, favourites, toggleFavourites } = data;
	const index = rowIndex * columnCount + columnIndex;
	const item = list[index];

	if (!item) return null;
	return (
		<div style={style}>
			<div style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
				<Tile
					key={item.id}
					img={item.sprite}
					name={item.name}
					id={item.id}
					url={item.url}
					type={item.type}
					toggleFavourites={toggleFavourites}
					isFavorite={favourites.includes(item.name)}
				/>
			</div>
		</div>
	);
}

function Body({ data, onFilterelect, currentFilter, toggleFavourites, favourites }) {
	const [pokeData, setPokeData] = useState(data);
	const gridRef = useRef(null);
	const outerRef = useRef(null);
	const isFirstRender = useRef(true);

	const [primaryTypeState, setPrimaryTypeState] = useState('');
	const [secondaryTypeState, setSecondaryTypeState] = useState('');

	const [isTypeMenuOpen, setIsTypeMenuOpen] = useState(false);

	const scrollToSmooth = () => {
		if (outerRef.current) {
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					requestAnimationFrame(() => {
						outerRef.current?.scrollTo({
							top: 0,
							behavior: 'smooth'
						});
					});
				});
			});
			sessionStorage.setItem('poke_scroll', 0);
		}
	};

	const { ref: containerRef, width: containerWidth, height: containerHeight } = useContainerSize();
	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}
		setPokeData(data);
		scrollToSmooth();
	}, [data]);

	let displayedContacts = data;
	function searchHandler(event) {
		let search = event.target.value.toLowerCase();
		displayedContacts = data.filter((el) => {
			const searchValue = `${el.name.toLowerCase()}|${el.id}|${el.type.join("|")}`;
			return searchValue.indexOf(search) !== -1;
		})
		setPokeData(displayedContacts);
		scrollToSmooth();
	}

  const handleTypeSelect = (TypeValue, typeClass) => {
    if (typeClass === 'primary-type-selector') {
      setPrimaryTypeState(TypeValue);
    } else if (typeClass === 'secondary-type-selector') {
      setSecondaryTypeState(TypeValue); 
    }
  };

	const CARD_WIDTH = 175;
	const CARD_HEIGHT = 200;
	const columnCount = containerWidth > 0 ? Math.floor(containerWidth / CARD_WIDTH) : 3;
	const rowCount = Math.ceil(pokeData.length / columnCount);
	const initialScroll = parseInt(sessionStorage.getItem('poke_scroll') || "0");
	return (
		<>
			<Search change={searchHandler} />
			<FilterMenu
				onFilterelect={onFilterelect}
				currentFilter={currentFilter}
				setIsTypeMenuOpen={setIsTypeMenuOpen}
			/>
			<TypeChart
				primaryTypeState={primaryTypeState}
        secondaryTypeState={secondaryTypeState}
        handleTypeSelect={handleTypeSelect}
				isTypeMenuOpen={isTypeMenuOpen}
				setIsTypeMenuOpen={setIsTypeMenuOpen}
			/>
			<div ref={containerRef} className='cardList'>
				{pokeData && pokeData.length > 0 && containerWidth > 0 && containerHeight > 0 ? (
					<Grid
						ref={gridRef}
						outerRef={outerRef}
						initialScrollTop={initialScroll}
						onScroll={({ scrollTop }) => {
							sessionStorage.setItem('poke_scroll', scrollTop);
						}}
						columnCount={columnCount}
						columnWidth={containerWidth / columnCount}
						height={containerHeight}
						rowCount={rowCount}
						rowHeight={CARD_HEIGHT}
						width={containerWidth}
						itemData={{ list: pokeData, columnCount, favourites, toggleFavourites }}
					>
						{PokemonCell}
					</Grid>
				) : (
					<div className="noResults">
						{currentFilter.type === 'special'
							? <p>No favourites added, check back once you've added some Pokemon to your favourites list. <span onClick={() => onFilterelect('', 'all')}>View all Pokemon</span></p>
							: <p>No results, Please check your spelling or try again.</p>
						}
					</div>
				)}
			</div>
		</>
	);
}

export default Body;