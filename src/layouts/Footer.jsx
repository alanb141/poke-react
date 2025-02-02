function Foot({canPlay, handleToggleChange}) {
    return (
        <footer>
            <div>
                {/* <div className="t1">Turn audio {canPlay ? 'off' : 'on'}</div> */}
                <div className='toggle-container' onClick={handleToggleChange}>
                {/* //</footer> onClick={handleToggleChange}> */}
                    <div className={`toggle-btn ${!canPlay ? "disable" : ""}`}>
                        {/* {canPlay ? "ON" : "OFF"} */}
                        <img src={canPlay ? require("../images/sound.png") : require("../images/mute.png")} alt="audio toggle" title="audio toggle" />
                    </div>
                </div>
            </div>
            <span>Powered by <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
            <img src={require("../images/pokeapi.png")} alt="pokeAPI" title="pokeAPI" />
            </a></span>
        </footer>
    );
  }
  
  export default Foot;