import { useState } from 'react'
import { genArray } from "../store/collection"

function FilterMenu({handleGetScrollPosition}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = document.getElementById("root");
  return (
    <>
      <div className="openContainer"><span className="openMenu" onClick={() => setIsMenuOpen(true)}></span></div>
      <div className={`filterContainer ${isMenuOpen ? "open" : "closed"}`}>
        <div className="filterMenu">
          {genArray[0].map((l, q) => {
              let genIndex = genArray[0][q];
              let gen = genArray[1][q];
              return (<div key={`${gen}-${genIndex}`} className="filterButton" onClick={() => {
                scrollRef.scroll({
                  top: genIndex === 0 ? 0 : handleGetScrollPosition(genIndex),
                  behavior: 'smooth'
                });
              }}>
              {gen}
            </div>);
          })}
        </div>
        <span className="closeMenu" onClick={() => setIsMenuOpen(false)}>Close</span>
      </div>
    </>
  );
}
  
export default FilterMenu;