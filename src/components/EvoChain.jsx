import React from 'react';
import Tile from './Tile';
import "../style/Evolution.scss"

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
              alt={`Use item as ${detail.min_beauty}`}
              title={`Use item as ${detail.min_beauty}`}
            />
          )}
          {detail.time_of_day && (<img
            src={require(`../images/evolutions/${detail.time_of_day}.png`)}
            alt={`at ${detail.time_of_day}`}
            title={`at ${detail.time_of_day}`}
          />)}
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
          {detail.held_item && (<img
            src={require(`../images/evolutions/${detail.held_item.name}.png`)}
            alt={`trade item ${detail.held_item.name.replace("-", " ")}`}
            title={`trade item ${detail.held_item.name.replace("-", " ")}`}
          />)}
          {detail.trade_species && (<img
            src={require(`../images/evolutions/${detail.trade_species.name}.png`)}
            alt={`trade with ${detail.trade_species.name}`}
            title={`trade with ${detail.trade_species.name}`}
          />)}
        </span>
      )}
      {detail.trigger.name === "level-up" && (
        <span
          key={`level-${detail.trigger.name}-${ind}`}
          className="level-up"
        >
          Lv.
          {detail.min_level}
          {detail.min_happiness && (
            <img
              src={require("../images/evolutions/happiness.png")}
              alt={`level up with happiness ${detail.min_happiness}`}
              title={`level up with happiness ${detail.min_happiness}`}
            />
          )}
          {detail.min_beauty && (
            <img
              src={require("../images/evolutions/beauty.png")}
              alt={`level up with beauty ${detail.min_beauty}`}
              title={`level up with beauty ${detail.min_beauty}`}
            />
          )}
          {detail.turn_upside_down && (
            <img
              src={require("../images/evolutions/upside-down.png")}
              alt="level up with console upside down"
              title="level up with console upside down"
            />
          )}
          {detail.gender && (
            <img
              src={require(`../images/evolutions/${detail.gender}.png`)}
              alt={`Level up as ${
                detail.gender === "2" ? "male" :
                detail.gender === "1" ? "female" :
                "unknown gender"
              }`}
              title={`Level up as ${
                detail.gender === "2" ? "male" :
                detail.gender === "1" ? "female" :
                "unknown gender"
              }`}
            />
          )}
          {detail.held_item && (<img
            src={require(`../images/evolutions/${detail.held_item.name}.png`)}
            alt={`level up with ${detail.held_item.name.replace("-", " ")}`}
            title={`level up with ${detail.held_item.name.replace("-", " ")}`}
          />)}
          {detail.time_of_day && (<img
            src={require(`../images/evolutions/${detail.time_of_day}.png`)}
            alt={`at ${detail.time_of_day}`}
            title={`at ${detail.time_of_day}`}
          />)}
          {detail.party_species && (<img
            src={require(`../images/evolutions/${detail.party_species.name}.png`)}
            alt={`with ${detail.party_species.name} in party`}
            title={`with ${detail.party_species.name} in party`}
          />)}
          {detail.relative_physical_stats !== null && detail.relative_physical_stats > -2 && (
            <p 
            title={`${
              detail.relative_physical_stats === 0 ? "Attack equals Defence" :
              detail.relative_physical_stats === 1 ? "Attack greater than Defence" :
              "Attack less than Defence"
            }`}>
              {detail.relative_physical_stats === 0
              ? "A=D"
              :detail.relative_physical_stats === 1
              ? "A>D"
              : "A<D"}
            </p>
          )}
          {detail.needs_overworld_rain && (
            <p 
            title="Level up in Rain">
              Rain
            </p>
          )}
          {detail.party_type && (
            <p 
            title={`Have ${detail.party_type.name.replaceAll("-", " ")} type in party`}>
              {detail.party_type.name.toUpperCase().replaceAll("-", " ")}
            </p>
          )}
          {detail.known_move && (
            <p 
            title={`Level up after learning ${detail.known_move.name.replaceAll("-", " ")}`}>
              {detail.known_move.name.toUpperCase().replaceAll("-", " ")}
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
        </span>
      )}
      {detail.trigger.name === "agile-style-move" && (
        <span
          key={`agile-style-${detail.trigger.name}-${ind}`}
          className="agile-style"
        >
          <p 
          title="Use Psyshield bash 20 times in Agile Style">
            Agile Style
          </p>
        </span>
      )}
      {detail.trigger.name === "strong-style-move" && (
        <span
          key={`strong-style-${detail.trigger.name}-${ind}`}
          className="strong-style"
        >
          <p 
          title={`Use ${detail.known_move.name.replace("-", " ")} 20 times in Strong Style`}>
            Strong Style
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
            Recoil
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
            49+ Damage
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
            3 CRITS
          </p>
        </span>
      )}
      {detail.trigger.name === "other" && (
        <span
          key={`other-${detail.trigger.name}-${ind}`}
          className="other"
        >
          {name === "annihilape" 
          ? <p
            alt="Use Rage fist 20 times"
            title="Use Rage fist 20 times">
              RAGE FIST
            </p>
          : ["pawmot", "rabsca", "brambleghast"].includes(name)
          ? 
            <p
            alt="Walk 1,000 steps in go mode"
            title="Walk 1,000 steps in go mode">
              1,000 STEPS
            </p>
          : name === "gholdengo" 
          ? <img
              src={require("../images/evolutions/coin-bag.png")}
              alt="Collect 999 coins from roaming Gimmighoul form"
              title="Collect 999 coins from roaming Gimmighoul form"
            />
          : null}
        </span>
      )}
    </>
  );
}

function EvoChain({ chain, mainColour, name }) {
  return (
    <div className={["applin", "flapple", "appletun", "dipplin", "hydrapple"].includes(name) ? "multiEvolutionContainer applinFamily" : "multiEvolutionContainer"} >
      {
        chain.map((item, index) => {
          const evolutionExceptions = ["eevee", "vaporeon", "jolteon", "flareon", "espeon", "umbreon", "leafeon", "glaceon", "sylveon", "magnemite", "magneton", "magnezone", "grubbin", "charjabug", "vikavolt"]
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
          if (item.species.name === "milotic") {
            evolutionDetail = evolutionDetail.slice(1);
          }
          const fullRand = item.species.url.split('/')[6];
          const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${fullRand}.png`;

          return (
            <div className="evoChain" key={`evoChain-${index}`}>
              <div className="evolveParamsContainer">
                {evolutionDetail.length > 0 && evolutionDetail.map((detail, ind) => (
                  <div className="evolveType" key={`evolveType-${ind}`} style={{ "--main-colour": mainColour }}>
                    {generateEvolveDetails(detail, item.species.name)}
                  </div>
                ))}
              </div>
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
