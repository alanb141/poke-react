const toggleTheme = (setTheme) => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  localStorage.setItem('pokedex-theme', newTheme);
  document.documentElement.setAttribute('data-theme', newTheme);
};

function Foot({ theme, setTheme }) {
    return (
        <footer>
            <span>Powered by <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
                <img src={require("../images/pokeapi.png")} alt="pokeAPI" title="pokeAPI" />
            </a></span>
            <button className="theme-toggle" onClick={() => toggleTheme(setTheme)} aria-label="Toggle Theme">
              <p>{theme.toUpperCase()} MODE</p>
              <div className="sun-moon-container">
                <div className="sun-rays"></div>
                <div className="main-circle"></div>
              </div>
            </button>
        </footer>
    );
}

export default Foot;