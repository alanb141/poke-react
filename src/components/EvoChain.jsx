import Tile from './Tile';
import "../style/Evolution.scss"
import { applinFamily, wurmpleFamily, evolutionExceptions } from "../store/collection"

const generateEvolveDetails = (detail, name, ind) => {
  return (
    <>
      {detail.trigger.name === "use-item" && (
        <span
          key={`use-${detail.trigger.name}-${ind}`}
          className="item-use"
        >
          <img
            src={require(`../images/evolutions/${detail.item.name}.png`)}
            alt={`Use ${detail.item.name.replace("-", " ")}`}
            title={`Use ${detail.item.name.replace("-", " ")}`}
          />
          {detail.gender && (
            <img
              src={require(`../images/evolutions/${detail.gender}.png`)}
              alt={`Use item as ${detail.gender === 2 ? "male" : "female"}`}
              title={`Use item as ${detail.gender === 2 ? "male" : "female"}`}
            />
          )}
          {detail.time_of_day && (
            <img
              src={require(`../images/evolutions/${detail.time_of_day}.png`)}
              alt={`at ${detail.time_of_day}`}
              title={`at ${detail.time_of_day}`}
            />)
          }
          <p
            className='special'
            title={`level up with ${detail.item.name.replace("-", " ")}`}>
            {`Use ${detail.item.name.replace("-", " ")}`} {detail.time_of_day&& `during ${detail.time_of_day}`} {detail.gender&& `on ${detail.gender === 2 ? "male" : "female"}`}
          </p>
        </span>
      )}
      {(detail.trigger.name === "tower-of-waters" || detail.trigger.name === "tower-of-darkness") && (
        <span
          key={`use-${detail.trigger.name}-${ind}`}
          className="kubfu-item"
        >
          <img
            src={require(`../images/evolutions/${detail.trigger.name}.png`)}
            alt={`Use ${detail.trigger.name.replaceAll("-", " ")}`}
            title={`Use ${detail.trigger.name.replaceAll("-", " ")}`}
          />
            <p
            title={`Use ${detail.trigger.name.replaceAll("-", " ")}`}>
              {`Use ${detail.trigger.name.replaceAll("-", " ")}`}
            </p>
        </span>
      )}
      {detail.trigger.name === "trade" && (
        <span
          key={`trade-${detail.trigger.name}-${ind}`}
          className="trade"
        >
          <img
            src={require("../images/evolutions/trade.png")}
            alt="Trade"
            title="Trade"
          />
          {detail.held_item && (
            <img
              src={require(`../images/evolutions/${detail.held_item.name}.png`)}
              alt={`trade item ${detail.held_item.name.replace("-", " ")}`}
              title={`trade item ${detail.held_item.name.replace("-", " ")}`}
            />
          )}
          {detail.trade_species && (
            <img
              src={require(`../images/evolutions/${detail.trade_species.name}.png`)}
              alt={`trade with ${detail.trade_species.name}`}
              title={`trade with ${detail.trade_species.name}`}
            />
          )}
          <p
            className='special'
            title={`trade ${(detail.trade_species ? `with ${detail.trade_species.name}` : '') || (detail.held_item ? `with ${detail.held_item.name.replace("-", " ")}` : '')}`}
            >
            {`trade ${(detail.trade_species ? `with ${detail.trade_species.name}` : '') || (detail.held_item ? `with ${detail.held_item.name.replace("-", " ")}` : '')}`}
          </p>
        </span>
      )}
      {(detail.trigger.name === "level-up") && (
        <span
          key={`level-${detail.trigger.name}-${ind}`}
          className="level-up"
        >
          Lv.
          {detail.min_level}
          {detail.min_happiness && (
            <span
              key={`happiness-${ind}`}
              className="happiness"
            >
              <img
                src={require("../images/evolutions/happiness.png")}
                alt={`level up with happiness ${detail.min_happiness}`}
                title={`level up with happiness ${detail.min_happiness}`}
              />
              {detail.time_of_day && (
                <img
                  src={require(`../images/evolutions/${detail.time_of_day}.png`)}
                  alt={`at ${detail.time_of_day}`}
                  title={`at ${detail.time_of_day}`}
                />
              )}
              <p
              className='happiness-txt'
              alt={`Happiness at ${detail.min_happiness}`}
              title={`Happiness at ${detail.min_happiness}`}>
                {`Happiness ${detail.min_happiness}`}
              </p>
              {detail.known_move_type && (
                <p className='move-type'
                title={`must know ${detail.known_move_type.name} type move`}>
                  {`must know ${detail.known_move_type.name} type move`}
                </p>
              )}
            </span>
          )}
          {detail.min_beauty && (
            <span
              key={`beauty-${ind}`}
              className="beauty">
              <img
                src={require("../images/evolutions/beauty.png")}
                alt={`level up with beauty ${detail.min_beauty}`}
                title={`level up with beauty ${detail.min_beauty}`}
              />
              <p
                className='special'
                title={`level up with beauty ${detail.min_beauty}`}>
                {`Beauty ${detail.min_beauty}`}
              </p>
            </span>
          )}
          {detail.turn_upside_down && (
            <span
              key={`upside-down-${ind}`}
              className="upside-down"
            >
              <img
                src={require("../images/evolutions/upside-down.png")}
                alt="level up with console upside down"
                title="level up with console upside down"
              />
              <p
              alt="level up with console upside down"
              title="level up with console upside down">
                level up with console upside down
              </p>
            </span>
          )}
          {detail.gender && (
            <span
              key={`happiness-${ind}`}
              className="gender"
            >
              <img
                src={require(`../images/evolutions/${detail.gender}.png`)}
                alt={`Level up as ${
                  detail.gender === 2 ? "male" :
                  "female"
                }`}
                title={`Level up as ${
                  detail.gender === 2 ? "male" :
                  "female" 
                }`}
              />
              <p
              alt={`Level up as ${
                  detail.gender === 2 ? "male" :
                  "female" 
                }`}
              title={`Level up as ${
                  detail.gender === 2 ? "male" :
                  "female" 
                }`}>
                {`Level up ${detail.gender === 2 ? "male" : "female"}`}
              </p>
            </span>
          )}
          {detail.held_item && (
            <span
              key={`time-${ind}`}
              className="time">
              <img
                src={require(`../images/evolutions/${detail.held_item.name}.png`)}
                alt={`level up with ${detail.held_item.name.replace("-", " ")}`}
                title={`level up with ${detail.held_item.name.replace("-", " ")}`}
              />
              {detail.time_of_day && (
                <img
                  src={require(`../images/evolutions/${detail.time_of_day}.png`)}
                  alt={`at ${detail.time_of_day}`}
                  title={`at ${detail.time_of_day}`}
                />
              )}
              <p
                className='special'
                title={`level up with ${detail.held_item.name.replace("-", " ")}`}>
                {`Holding ${detail.held_item.name.replace("-", " ")}`} {detail.time_of_day&& `during ${detail.time_of_day}`}
              </p>
            </span>
          )}
          {detail.time_of_day && !detail.min_happiness && !detail.held_item && (
            <span
              key={`time-${ind}`}
              className="time">
              <img
                src={require(`../images/evolutions/${detail.time_of_day}.png`)}
                alt={`at ${detail.time_of_day}`}
                title={`at ${detail.time_of_day}`}
              />
              <p
                className='special'
                title={`at ${detail.time_of_day}`}>
                {detail.time_of_day}
              </p>
            </span>
          )}
          {detail.party_species && (
            <img
              src={require(`../images/evolutions/${detail.party_species.name}.png`)}
              alt={`with ${detail.party_species.name} in party`}
              title={`with ${detail.party_species.name} in party`}
            />
          )}
          {detail.relative_physical_stats !== null && detail.relative_physical_stats > -2 && (
            <p 
            className='special'
            title={`${
              detail.relative_physical_stats === 0 ? "Attack equals Defence" :
              detail.relative_physical_stats === 1 ? "Attack greater than Defence" :
              "Attack less than Defence"
            }`}>
              {detail.relative_physical_stats === 0
              ? "Attack=Defence"
              :detail.relative_physical_stats === 1
              ? "Attack>Defence"
              : "Attack<Defence"}
            </p>
          )}
          {detail.needs_overworld_rain && (
            <p 
            className='special'
            title="Level up in Rain">
              Level up in Rain
            </p>
          )}
          {detail.party_type && (
            <p
            className='special'
            title={`Have ${detail.party_type.name.replaceAll("-", " ")} type in party`}>
              {`Have ${detail.party_type.name.replaceAll("-", " ")} type in party`}
            </p>
          )}
          {detail.known_move && (
            <p 
            className='learn'
            title={`Level up after learning ${detail.known_move.name.replaceAll("-", " ")}`}>
              {`Learn ${detail.known_move.name.replaceAll("-", " ")}`}
            </p>
          )}
          {detail.min_steps && (
            <p className='min-steps'
            title={`Walk ${detail.min_steps} steps in go mode`}>
              {`Walk ${detail.min_steps} steps in go mode`}
            </p>
          )}
          {detail.known_move_type && !detail.min_happiness && (
            <p className='know-move-type'
            title={`Must know ${detail.known_move_type.name} type move`}>
              {`Must know ${detail.known_move_type.name} type move`}
            </p>
          )}
        </span>
      )}
      {detail.trigger.name === "spin" && (
        <span
          key={`spin-${detail.trigger.name}-${ind}`}
          className="spin"
        >
          <img
            src={require("../images/evolutions/sweet.png")}
            alt="Spin while holding sweet item"
            title="Spin while holding sweet item"
          />
          <p
          alt="Spin while holding sweet item"
          title="Spin while holding sweet item">
            Spin while holding sweet item
          </p>
        </span>
      )}
      {detail.trigger.name === "agile-style-move" && (
        <span
          key={`agile-style-${detail.trigger.name}-${ind}`}
          className="agile-style"
        >
          <p 
          title="Use Psyshield bash 20x in Agile Style">
            Use Psyshield bash 20x in Agile Style
          </p>
        </span>
      )}
      {detail.trigger.name === "strong-style-move" && (
        <span
          key={`strong-style-${detail.used_move.name}-${ind}`}
          className="strong-style"
        >
          <p 
          title={`Use ${detail.used_move.name.replace("-", " ")} ${detail.min_move_count}x in Strong Style`}>
            {`Use ${detail.used_move.name.replace("-", " ")} ${detail.min_move_count}x in Strong Style`}
          </p>
        </span>
      )}
      {detail.trigger.name === "recoil-damage" && (
        <span
          key={`recoil-damage-${detail.trigger.name}-${ind}`}
          className="recoil-damage"
        >
          <p 
          title="Recieve 294 recoil damage in battle">
            Recieve 294 recoil damage in battle
          </p>
        </span>
      )}
      {detail.trigger.name === "shed" && (
        <span
          key={`shed-${detail.trigger.name}-${ind}`}
          className="shed"
        >
          <img
            src={require("../images/evolutions/pokeball.png")}
            alt="Evolve Nincada with an empty spot in your party, and a Pokéball in bag"
            title="Evolve Nincada with an empty spot in your party, and a Pokéball in bag"
          />
          <p
          alt="Evolve Nincada with an empty spot in your party, and a Pokéball in bag"
          title="Evolve Nincada with an empty spot in your party, and a Pokéball in bag">
            Evolve Nincada with pokeball and empty spot in party
          </p>
        </span>
      )}
      {detail.trigger.name === "take-damage" && (
        <span
          key={`take-damage-${detail.trigger.name}-${ind}`}
          className="take-damage"
        >
          <p
          alt="Have 49+ damage taken by Yamask in one battle and walk under stone sculpture in Dusty Bowl Wild Area"
          title="Have 49+ damage taken by Yamask in one battle and walk under stone sculpture in Dusty Bowl Wild Area">
            Take 49+ Damage in battle, walk under Dusty Bowl bridge
          </p>
        </span>
      )}
      {detail.trigger.name === "three-critical-hits" && (
        <span
          key={`three-critical-${detail.trigger.name}-${ind}`}
          className="three-critical"
        >
          <p
          alt="Get 3 crits in a single battle"
          title="Get 3 crits in a single battle">
            3 critical hits in one battle
          </p>
        </span>
      )}
      {detail.trigger.name === "use-move" && (
        <span
          key={`${detail.trigger.name}-${ind}`}
          className={`${detail.trigger.name}`}
        >
          <p
          alt={`Use ${detail.used_move.name.replace("-", " ")} ${detail.min_move_count}x`}
          title={`Use ${detail.used_move.name.replace("-", " ")} ${detail.min_move_count}x`}>
            {`Use ${detail.used_move.name.replace("-", " ")} ${detail.min_move_count}x`}
          </p>
        </span>
      )}
      {detail.trigger.name === "gimmmighoul-coins" && (
        <span
          key={`${detail.trigger.name}-${ind}`}
          className={`${detail.trigger.name}`}
        >
          <img
              src={require("../images/evolutions/coin-bag.png")}
              alt={`Gain 999 ${detail.trigger.name.replace("-", " ")}`}
              title={`Gain 999 ${detail.trigger.name.replace("-", " ")}`}
            />
          <p
          className='coins'
          alt={`Gain 999 ${detail.trigger.name.replace("-", " ")}`}
          title={`Gain 999 ${detail.trigger.name.replace("-", " ")}`}>
            {`Gain 999 ${detail.trigger.name.replace("-", " ")}`}
          </p>
        </span>
      )}
      {detail.trigger.name === "three-defeated-bisharp" && (
        <span
          key={`${detail.trigger.name}-${ind}`}
          className={`${detail.trigger.name}`}
        >
          <img
              src={require("../images/evolutions/leaders-crest.png")}
              alt="Defeat 3 Bisharp that hold a Leader's Crest then level up"
              title="Defeat 3 Bisharp that hold a Leader's Crest then level up"
            />
          <p
            className='leader'
            alt="Defeat 3 Bisharp that hold a Leader's Crest then level up"
            title="Defeat 3 Bisharp that hold a Leader's Crest then level up">
            Defeat 3 Bisharp that hold a Leader's Crest then level up
          </p>
        </span>
      )}
    </>
  );
}

function EvoChain({ chain, mainColour, name }) {
  return (
    <div className={applinFamily.includes(name) 
    ? "multiEvolutionContainer applinFamily"
    : wurmpleFamily.includes(name) 
    ? "multiEvolutionContainer wurmpleFamily"
    : "multiEvolutionContainer"} >
      {
        chain.map((item, index) => {
          let evolutionDetail = [...item.evolution_details];
          if (evolutionExceptions.includes(name)) {
            evolutionDetail = evolutionDetail.slice(-1);
          }
          if (item.species.name === "probopass") {
            evolutionDetail = [
              {
                "item": {
                  "name": "thunder-stone"
                },
                "trigger": {
                  "name": "use-item"
                },
              }
            ]
          }
          if (item.species.name === "crabominable") {
            evolutionDetail = [
              {
                "item": {
                  "name": "ice-stone"
                },
                "trigger": {
                  "name": "use-item"
                },
              }
            ]
          }
          if (item.species.name === "dipplin") {
            evolutionDetail = [
              {
                "item": {
                  "name": "syrupy-apple"
                },
                "trigger": {
                  "name": "use-item"
                },
              }
            ]
          }
          if (item.species.name === "hydrapple") {
            evolutionDetail = [
              {
                "known_move": {
                  "name": "dragon-cheer"
                },
                "trigger": {
                  "name": "level-up",
                },
              }
            ]
          }
          if (item.species.name === "sinistcha") {
            evolutionDetail = [
              {
                "item": {
                  "name": "masterpiece-teacup"
                },
                "trigger": {
                  "name": "use-item"
                },
              },
              {
                "item": {
                  "name": "unremarkable-teacup"
                },
                "trigger": {
                  "name": "use-item"
                },
              }
            ]
          }
          const fullRand = item.species.url.split('/')[6];
          const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${fullRand}.png`;

          return (
            <div className="evoChain" key={`evoChain-${index}`}>
              {evolutionDetail.length > 0 && (
                <div className="evolveParamsContainer">
                  {evolutionDetail.map((detail, ind) => (
                    <div className="evolveType" key={`evolveType-${ind}`} style={{ "--main-colour": mainColour }}>
                      {generateEvolveDetails(detail, item.species.name)}
                    </div>
                  ))}
                </div>
              )}
              <Tile
                key={`${item.species.name}-${index}`}
                img={img}
                name={item.species.name}
                id={fullRand}
                url={item.species.url}
                noName={true}
              />
            </div>
          );
        })
      }
    </div>
  );
}
export default EvoChain;
