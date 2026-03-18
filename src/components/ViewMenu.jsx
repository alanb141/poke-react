import { useEffect, useState, useRef } from 'react'

function ViewMenu ({pokemonForms, name, navigate, changeForm, activeId}) {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  
  useEffect(() => {
    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      if (scrollY < 50) {
        setIsScrollingUp(true);
        lastScrollY.current = scrollY;
        ticking.current = false;
        return;
      }

      if (Math.abs(scrollY - lastScrollY.current) < 10) {
        ticking.current = false;
        return;
      }
      setIsScrollingUp(scrollY < lastScrollY.current);
      lastScrollY.current = scrollY > 0 ? scrollY : 0;
      ticking.current = false;
    };
    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollDir);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const bf = pokemonForms.filter(form => 
    ["-mega", "-gmax"].some(ex => form.pokemon.name.includes(ex))
  );
  const battleForms = name.includes("magearna") ? 
    bf.filter(e => e.pokemon.name !== "magearna-original-mega")
    : bf.length > 1 && ((!name.includes("-mega") && !name.includes("-gmax")) || name.includes("toxtricity")) ? 
    bf.filter(e => e.pokemon.name.includes(name))
    :name === "floette" || name === "greninja-battle-bond" || name.includes("galar") ?
    []
    : bf;
  return(
    <div className={`returnMenu blur ${isScrollingUp ? "menuDown" : "menuUp"}`}>
      <button type="button" className="return_button" onClick={() => navigate('/')} aria-label='Return' style={{ "--return-image": "url('/images/masterball.webp')" }}>Return!</button>

      <div className='transformSelector'>
        { battleForms.length > 0 && battleForms.map((form, index) => {
          const formId = form.pokemon.url.split('/').filter(Boolean).pop();
          const megaStoneImg = form.pokemon.name.includes("mega") ?
            form.pokemon.name.includes("tatsugiri") ? 
            `${name.split("-")[0]}-mega`
            : form.pokemon.name
            :
            "gmax";
          return (
            <button 
              key={index} 
              className={`transformBtn${activeId === formId ? ' active' : ''}`}
              onClick={() => changeForm(formId, form.pokemon.name.includes("-mega")?true:false, form.pokemon.name.includes("-gmax")?true:false)}
              disabled={activeId === formId}
            >
              {form.pokemon.name.includes("gmax") && (
                <>
                  <div className="energy-core"></div>
                  <div className="swirl-cloud cloud-1"></div>
                  <div className="swirl-cloud cloud-2"></div>
                </>
              )}
              {form.pokemon.name.includes("mega") && activeId === formId && (
                <>
                  <div className="mega-glow"></div>
                  <div className="wisps-container">
                    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360].map((deg, i) => (
                      <span 
                        key={i} 
                        className="wisp" 
                        style={{ 
                          '--rotation': `${deg}deg`, 
                          '--delay': `${((i * 7) % 10) * 0.25}s` 
                        }}
                      ></span>
                    ))}
                  </div>
                </>
              )}
              <img 
                className={form.pokemon.name.includes("mega") ? "megaStone" : "gmaxEvo"}
                key={index}
                src={`/images/transform/${megaStoneImg}.webp`} 
                title={form.pokemon.name} 
                alt={form.pokemon.name} 
                width={form.pokemon.name.includes("mega") ? 45 : 86} 
                height={form.pokemon.name.includes("mega") ? 45 : 86} />
            </button>
          )
        }) }
      </div>
    </div>
  );
}

export default ViewMenu;