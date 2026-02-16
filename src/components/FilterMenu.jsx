import { useState } from 'react'
import { genArray, gameArray } from "../store/collection"

function FilterMenu({ onFilterelect, currentFilter, currentFavourites, setFavourites }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleSelectChange = (e) => {
    onFilterelect(e.target.value, e.target.className);
  };
  let favouritesCount = currentFavourites.length;
  console.log(currentFavourites.length);
  const genValue = currentFilter.type === 'gen-selector' ? currentFilter.value : '';
  const gameValue = currentFilter.type === 'game-selector' ? currentFilter.value : '';

  const onFilterSelect = (e) => {
    handleSelectChange(e);
    setIsMenuOpen(false);
  }

  return (
    <>
      <div className="openContainer"><span className="openMenu" onClick={() => setIsMenuOpen(true)}></span></div>
      <div className={`filterContainer ${isMenuOpen ? "open" : "closed"}`}>
        <div className="filterMenu">
          <h3>Choose your gen</h3>
          <select value={genValue} onChange={onFilterSelect} className="gen-selector">
            <option value="" disabled hidden>Choose your gen</option>
            <option value="all">All</option>
            {genArray[0].map((l, q) => {
              let genIndex = genArray[0][q];
              let gen = genArray[1][q];
              return (
                <option value={`${genIndex}`} key={`${genIndex}-${q}`}>
                  {gen}
                </option>
              );
            })}
          </select>
        </div>
        <div className="filterMenu">
          <h3>Choose your regiondex</h3>
          <select value={gameValue} onChange={onFilterSelect} className="game-selector">
            <option value="" disabled hidden>Choose your regiondex</option>
            <option value="all">National Dex</option>
            {gameArray[0].map((l, q) => {
              let gameIndex = gameArray[0][q];
              let game = gameArray[1][q];
              return (
                <option value={`${gameIndex}`} key={`${gameIndex}-${q}`}>
                  {game}
                </option>
              );
            })}
          </select>
        </div>
        <div
          className='favourites'
          onClick={() => {
            onFilterelect('favourites', 'special');
            setIsMenuOpen(false)
          }}
        >Favourites</div>
        {favouritesCount > 0 && (
          <div
            className='clearFavourites'
            onClick={() => {
              setFavourites([]);
              setIsMenuOpen(false)
            }}
          >Clear Favourites</div>
        )}
        {currentFilter.type === 'special' && (
          <div
            className='clearFavourites'
            onClick={() => {
              onFilterelect('', 'all');
              setIsMenuOpen(false)
            }}
          >View all pokemon</div>
        )}
        <span className="closeMenu" onClick={() => setIsMenuOpen(false)}>Close</span>
      </div>
    </>
  );
}

export default FilterMenu;