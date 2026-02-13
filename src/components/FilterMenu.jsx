import { useState } from 'react'
import { genArray, gameArray } from "../store/collection"

function FilterMenu({onFilterelect, currentFilter}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleSelectChange = (e) => {
    onFilterelect(e.target.value, e.target.className);
  };

  const genValue = currentFilter.type === 'gen-selector' ? currentFilter.value : 'all';
  const gameValue = currentFilter.type === 'game-selector' ? currentFilter.value : 'all';
  
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
          <h3>Choose your pokedex</h3>
          <select value={gameValue} onChange={onFilterSelect} className="game-selector">
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
        <span className="closeMenu" onClick={() => setIsMenuOpen(false)}>Close</span>
      </div>
    </>
  );
}
  
export default FilterMenu;