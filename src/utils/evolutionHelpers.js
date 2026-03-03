export const generateEvolveDetails = (detail, ind) => {
  const baseImgPath = "/images/evolutions";
  return (
    <>
      {detail.trigger.name === "use-item" && (
        <span
          key={`use-${detail.trigger.name}-${ind}`}
          className="item-use"
        >
          <img
            src={`${baseImgPath}/${detail.item.name}.webp`}
            alt={`Use ${detail.item.name.replace("-", " ")}`}
            title={`Use ${detail.item.name.replace("-", " ")}`}
            loading="lazy"
          />
          {detail.gender && (
            <img
              src={`${baseImgPath}/${detail.gender}.webp`}
              alt={`Use item as ${detail.gender === 2 ? "male" : "female"}`}
              title={`Use item as ${detail.gender === 2 ? "male" : "female"}`}
              loading="lazy"
            />
          )}
          {detail.time_of_day && (
            <img
              src={`${baseImgPath}/${detail.time_of_day}.webp`}
              alt={`at ${detail.time_of_day}`}
              title={`at ${detail.time_of_day}`}
              loading="lazy"
            />)
          }
          <p
            className='special'
            title={`level up with ${detail.item.name.replace("-", " ")}`}>
            {`Use ${detail.item.name.replace("-", " ")}`} {detail.time_of_day && `during ${detail.time_of_day}`} {detail.gender && `on ${detail.gender === 2 ? "male" : "female"}`}
          </p>
        </span>
      )}
      {(detail.trigger.name === "tower-of-waters" || detail.trigger.name === "tower-of-darkness") && (
        <span
          key={`use-${detail.trigger.name}-${ind}`}
          className="kubfu-item"
        >
          <img
            src={`${baseImgPath}/${detail.trigger.name}.webp`}
            alt={`Use ${detail.trigger.name.replaceAll("-", " ")}`}
            title={`Use ${detail.trigger.name.replaceAll("-", " ")}`}
            loading="lazy"
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
            src={`${baseImgPath}/trade.webp`}
            alt="Trade"
            title="Trade"
            loading="lazy"
          />
          {detail.held_item && (
            <img
              src={`${baseImgPath}/${detail.held_item.name}.webp`}
              alt={`trade item ${detail.held_item.name.replace("-", " ")}`}
              title={`trade item ${detail.held_item.name.replace("-", " ")}`}
              loading="lazy"
            />
          )}
          {detail.trade_species && (
            <img
              src={`${baseImgPath}/${detail.trade_species.name}.webp`}
              alt={`trade with ${detail.trade_species.name}`}
              title={`trade with ${detail.trade_species.name}`}
              loading="lazy"
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
                src={`${baseImgPath}/happiness.webp`}
                alt={`level up with happiness ${detail.min_happiness}`}
                title={`level up with happiness ${detail.min_happiness}`}
                loading="lazy"
              />
              {detail.time_of_day && (
                <img
                  src={`${baseImgPath}/${detail.time_of_day}.webp`}
                  alt={`at ${detail.time_of_day}`}
                  title={`at ${detail.time_of_day}`}
                  loading="lazy"
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
                src={`${baseImgPath}/beauty.webp`}
                alt={`level up with beauty ${detail.min_beauty}`}
                title={`level up with beauty ${detail.min_beauty}`}
                loading="lazy"
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
                src={`${baseImgPath}/upside-down.webp`}
                alt="level up with console upside down"
                title="level up with console upside down"
                loading="lazy"
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
                src={`${baseImgPath}/${detail.gender}.webp`}
                alt={`Level up as ${detail.gender === 2 ? "male" :
                  "female"
                  }`}
                title={`Level up as ${detail.gender === 2 ? "male" :
                  "female"
                  }`}
                loading="lazy"
              />
              <p
                alt={`Level up as ${detail.gender === 2 ? "male" :
                  "female"
                  }`}
                title={`Level up as ${detail.gender === 2 ? "male" :
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
                src={`${baseImgPath}/${detail.held_item.name}.webp`}
                alt={`level up with ${detail.held_item.name.replace("-", " ")}`}
                title={`level up with ${detail.held_item.name.replace("-", " ")}`}
                loading="lazy"
              />
              {detail.time_of_day && (
                <img
                  src={`${baseImgPath}/${detail.time_of_day}.webp`}
                  alt={`at ${detail.time_of_day}`}
                  title={`at ${detail.time_of_day}`}
                  loading="lazy"
                />
              )}
              <p
                className='special'
                title={`level up with ${detail.held_item.name.replace("-", " ")}`}>
                {`Holding ${detail.held_item.name.replace("-", " ")}`} {detail.time_of_day && `during ${detail.time_of_day}`}
              </p>
            </span>
          )}
          {detail.time_of_day && !detail.min_happiness && !detail.held_item && (
            <span
              key={`time-${ind}`}
              className="time">
              <img
                src={`${baseImgPath}/${detail.time_of_day}.webp`}
                alt={`at ${detail.time_of_day}`}
                title={`at ${detail.time_of_day}`}
                loading="lazy"
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
              src={`${baseImgPath}/${detail.party_species.name}.webp`}
              alt={`with ${detail.party_species.name} in party`}
              title={`with ${detail.party_species.name} in party`}
              loading="lazy"
            />
          )}
          {detail.relative_physical_stats !== null && detail.relative_physical_stats > -2 && (
            <p
              className='special'
              title={`${detail.relative_physical_stats === 0 ? "Attack equals Defence" :
                detail.relative_physical_stats === 1 ? "Attack greater than Defence" :
                  "Attack less than Defence"
                }`}>
              {detail.relative_physical_stats === 0
                ? "Attack=Defence"
                : detail.relative_physical_stats === 1
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
            src={`${baseImgPath}/sweet.webp`}
            alt="Spin while holding sweet item"
            title="Spin while holding sweet item"
            loading="lazy"
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
            src={`${baseImgPath}/pokeball.webp`}
            alt="Evolve Nincada with an empty spot in your party, and a Pokéball in bag"
            title="Evolve Nincada with an empty spot in your party, and a Pokéball in bag"
            loading="lazy"
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
            src={`${baseImgPath}/coin-bag.webp`}
            alt={`Gain 999 ${detail.trigger.name.replace("-", " ")}`}
            title={`Gain 999 ${detail.trigger.name.replace("-", " ")}`}
            loading="lazy"
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
            src={`${baseImgPath}/leaders-crest.webp`}
            alt="Defeat 3 Bisharp that hold a Leader's Crest then level up"
            title="Defeat 3 Bisharp that hold a Leader's Crest then level up"
            loading="lazy"
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