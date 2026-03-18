export const VARIANT_EVO_MAP = {
  "19" :{ //kanto rattata
    path: [
      { id: "19", name: "rattata", evolution_details: [] },
      { id: "20", name: "raticate", evolution_details: [{ trigger: "level-up", min_level: 20 }] }
    ]
  },
  "20" :{ //kanto raticate
    path: [
      { id: "19", name: "rattata", evolution_details: [] },
      { id: "20", name: "raticate", evolution_details: [{ trigger: "level-up", min_level: 20 }] }
    ]
  },
  "10091" :{ //alolan rattata
    path: [
      { id: "10091", name: "rattata", evolution_details: [] },
      { id: "10092", name: "raticate", evolution_details: [{ trigger: "level-up", min_level: 20, time_of_day: "night", region: "Alola" }] }
    ]
  },
  "10092" :{ //alolan raticate
    path: [
      { id: "10091", name: "rattata", evolution_details: [] },
      { id: "10092", name: "raticate", evolution_details: [{ trigger: "level-up", min_level: 20, time_of_day: "night", region: "Alola" }] }
    ]
  },
  "10199" :{ //kanto pikachu gmax
    path: [
      { id: "172", name: "pichu", evolution_details: [] },
      { id: "25", name: "pikachu", evolution_details: [{ trigger: "level-up", min_happiness: 220 }] },
      { id: "10199", name: "pikachu-gmax", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "26" :{ //kanto raichu 
    path: [
      { id: "172", name: "pichu", evolution_details: [] },
      { id: "25", name: "pikachu", evolution_details: [{ trigger: "level-up", min_happiness: 220 }] },
      { id: "26", name: "raichu", evolution_details: [{ trigger: "use-item", item: "thunder-stone" }] }
    ]
  },
  "10304": { //kanto raichu mega x
    path: [
      { id: "172", name: "pichu", trigger: null },
      { id: "25", name: "pikachu", evolution_details: [{ trigger: "level-up", min_happiness: 220 }] },
      { id: "26", name: "raichu", evolution_details: [{ trigger: "use-item", item: "thunder-stone" }] },
      { id: "10304", name: "raichu-mega-x", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10305": { //kanto raichu mega y
    path: [
      { id: "172", name: "pichu", trigger: null },
      { id: "25", name: "pikachu", evolution_details: [{ trigger: "level-up", min_happiness: 220 }] },
      { id: "26", name: "raichu", evolution_details: [{ trigger: "use-item", item: "thunder-stone" }] },
      { id: "10305", name: "raichu-mega-y", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10100" :{ //alolan raichu
    path: [
      { id: "172", name: "pichu", evolution_details: [] },
      { id: "25", name: "pikachu", evolution_details: [{ trigger: "level-up", min_happiness: 220 }] },
      { id: "10100", name: "raichu", evolution_details: [{ trigger: "use-item", item: "thunder-stone", region: "Alola" }] }
    ]
  },
  "27" :{ //kanto sandshrew
    path: [
      { id: "27", name: "sandshrew", evolution_details: [] },
      { id: "28", name: "sandslash", evolution_details: [{ trigger: "level-up", min_level: 22 }] }
    ]
  },
  "28" :{ //kanto sandslash
    path: [
      { id: "27", name: "sandshrew", evolution_details: [] },
      { id: "28", name: "sandslash", evolution_details: [{ trigger: "level-up", min_level: 22 }] }
    ]
  },
  "10101" :{ //alolan sandshrew
    path: [
      { id: "10101", name: "sandshrew", evolution_details: [] },
      { id: "10102", name: "sandslash", evolution_details: [{ trigger: "use-item", item: "ice-stone", region: "Alola" }] }
    ]
  },
  "10102" :{ //alolan sandslash
    path: [
      { id: "10101", name: "sandshrew", evolution_details: [] },
      { id: "10102", name: "sandslash", evolution_details: [{ trigger: "use-item", item: "ice-stone", region: "Alola" }] }
    ]
  },
  "37" :{ //kanto vulpix
    path: [
      { id: "37", name: "vulpix", evolution_details: [] },
      { id: "38", name: "ninetales", evolution_details: [{ trigger: "use-item", item: "fire-stone" }] }
    ]
  },
  "38" :{ //kanto ninetales
    path: [
      { id: "37", name: "vulpix", evolution_details: [] },
      { id: "38", name: "ninetales", evolution_details: [{ trigger: "use-item", item: "fire-stone" }] }
    ]
  },
  "10103" :{ //alolan vulpix
    path: [
      { id: "10103", name: "vulpix", evolution_details: [] },
      { id: "10104", name: "ninetales", evolution_details: [{ trigger: "use-item", item: "ice-stone", region: "Alola" }] }
    ]
  },
  "10104" :{ //alolan ninetales
    path: [
      { id: "10103", name: "vulpix", evolution_details: [] },
      { id: "10104", name: "ninetales", evolution_details: [{ trigger: "use-item", item: "ice-stone", region: "Alola" }] }
    ]
  },
  "50" :{ //kanto diglett
    path: [
      { id: "50", name: "diglett", evolution_details: [] },
      { id: "51", name: "dugtrio", evolution_details: [{ trigger: "level-up", min_level: 26 }] }
    ]
  },
  "51" :{ //kanto dugtrio
    path: [
      { id: "50", name: "diglett", evolution_details: [] },
      { id: "51", name: "dugtrio", evolution_details: [{ trigger: "level-up", min_level: 26 }] }
    ]
  },
  "10105" :{ //alolan diglett
    path: [
      { id: "10105", name: "diglett", evolution_details: [] },
      { id: "10106", name: "dugtrio", evolution_details: [{ trigger: "level-up", min_level: 26, region: "Alola" }] }
    ]
  },
  "10106" :{ //alolan dugtrio
    path: [
      { id: "10105", name: "diglett", evolution_details: [] },
      { id: "10106", name: "dugtrio", evolution_details: [{ trigger: "level-up", min_level: 26, region: "Alola" }] }
    ]
  },
  "52" :{ //kanto meowth
    path: [
      { id: "52", name: "meowth", evolution_details: [] },
      { id: "53", name: "persian", evolution_details: [{ trigger: "level-up", min_level: 28 }] }
    ]
  },
  "10200" :{ //kanto meowth gmax
    path: [
      { id: "52", name: "meowth", evolution_details: [] },
      { id: "10200", name: "meowth-gmax", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "53" :{ //kanto persian
    path: [
      { id: "52", name: "meowth", evolution_details: [] },
      { id: "53", name: "persian", evolution_details: [{ trigger: "level-up", min_level: 28 }] }
    ]
  },
  "10107" :{ //alolan meowth
    path: [
      { id: "10107", name: "meowth", evolution_details: [] },
      { id: "10108", name: "persian", evolution_details: [{ trigger: "level-up", min_happiness: 160, region: "Alola" }] }
    ]
  },
  "10108" :{ //alolan persian
    path: [
      { id: "10107", name: "meowth", evolution_details: [] },
      { id: "10108", name: "persian", evolution_details: [{ trigger: "level-up", min_happiness: 160, region: "Alola" }] }
    ]
  },
  "10161" :{ //galar meowth
    path: [
      { id: "10161", name: "meowth", evolution_details: [] },
      { id: "863", name: "perrserker", evolution_details: [{ trigger: "level-up", min_level: 28, region: "Galar" }] }
    ]
  },
  "863" :{ //galar perrserker
    path: [
      { id: "10161", name: "meowth", evolution_details: [] },
      { id: "863", name: "perrserker", evolution_details: [{ trigger: "level-up", min_level: 28, region: "Galar" }] }
    ]
  },
  "74" :{ //kanto geodude
    path: [
      { id: "74", name: "geodude", evolution_details: [] },
      { id: "75", name: "graveler", evolution_details: [{ trigger: "level-up", min_level: 25 }] },
      { id: "76", name: "golem", evolution_details: [{ trigger: "trade" }] }
    ]
  },
  "75" :{ //kanto graveler
    path: [
      { id: "74", name: "geodude", evolution_details: [] },
      { id: "75", name: "graveler", evolution_details: [{ trigger: "level-up", min_level: 25 }] },
      { id: "76", name: "golem", evolution_details: [{ trigger: "trade" }] }
    ]
  },
  "76" :{ //kanto golem
    path: [
      { id: "74", name: "geodude", evolution_details: [] },
      { id: "75", name: "graveler", evolution_details: [{ trigger: "level-up", min_level: 25 }]},
      { id: "76", name: "golem", evolution_details: [{ trigger: "trade" }] }
    ]
  },
  "10109" :{ //alolan geodude
    path: [
      { id: "10109", name: "geodude", evolution_details: [] },
      { id: "10110", name: "graveler", evolution_details: [{ trigger: "level-up", min_level: 25, region: "Alola" }] },
      { id: "10111", name: "golem", evolution_details: [{ trigger: "trade", region: "Alola" }] }
    ]
  },
  "10110" :{ //alolan graveler
    path: [
      { id: "10109", name: "geodude", evolution_details: [] },
      { id: "10110", name: "graveler", evolution_details: [{ trigger: "level-up", min_level: 25, region: "Alola" }] },
      { id: "10111", name: "golem", evolution_details: [{ trigger: "trade", region: "Alola" }] }
    ]
  },
  "10111" :{ //alolan golem
    path: [
      { id: "10109", name: "geodude", evolution_details: [] },
      { id: "10110", name: "graveler", evolution_details: [{ trigger: "level-up", min_level: 25, region: "Alola" }] },
      { id: "10111", name: "golem", evolution_details: [{ trigger: "trade", region: "Alola" }] }
    ]
  },
  "88" :{ //kanto grimer
    path: [
      { id: "88", name: "grimer", evolution_details: [] },
      { id: "89", name: "muk", evolution_details: [{ trigger: "level-up", min_level: 38 }] }
    ]
  },
  "89" :{ //alolan muk
    path: [
      { id: "88", name: "grimer", evolution_details: [] },
      { id: "89", name: "muk", evolution_details: [{ trigger: "level-up", min_level: 38, region: "Alola" }] }
    ]
  },
  "10112" :{ //alolan grimer
    path: [
      { id: "10112", name: "grimer", evolution_details: [] },
      { id: "10113", name: "muk", evolution_details: [{ trigger: "level-up", min_level: 38, region: "Alola" }] }
    ]
  },
  "10113" :{ //alolan muk
    path: [
      { id: "10112", name: "grimer", evolution_details: [] },
      { id: "10113", name: "muk", evolution_details: [{ trigger: "level-up", min_level: 38, region: "Alola" }] }
    ]
  },
  "103" :{ //kanto exeggutor
    path: [
      { id: "102", name: "exeggcute", evolution_details: [] },
      { id: "103", name: "exeggutor", evolution_details: [{ trigger: "use-item", item: "leaf-stone" }] }
    ]
  },
  "10114" :{ //alolan exeggutor
    path: [
      { id: "102", name: "exeggcute", evolution_details: [] },
      { id: "10114", name: "exeggutor", evolution_details: [{ trigger: "use-item", item: "leaf-stone", region: "Alola" }] }
    ]
  },
  "105" :{ //kanto marowak
    path: [
      { id: "104", name: "cubone", evolution_details: [] },
      { id: "105", name: "marowak", evolution_details: [{ trigger: "level-up", min_level: 28 }] }
    ]
  },
  "10115" :{ //alolan marowak
    path: [
      { id: "104", name: "cubone", evolution_details: [] },
      { id: "10115", name: "marowak", evolution_details: [{ trigger: "level-up", min_level: 28, time_of_day: "night", region: "Alola" }] }
    ]
  },
  "77" :{ //kanto ponyta
    path: [
      { id: "77", name: "ponyta", evolution_details: [] },
      { id: "78", name: "rapidash", evolution_details: [{ trigger: "level-up", min_level: 40 }] }
    ]
  },
  "78" :{ //alolan rapidash
    path: [
      { id: "77", name: "ponyta", evolution_details: [] },
      { id: "78", name: "rapidash", evolution_details: [{ trigger: "level-up", min_level: 40 }] }
    ]
  },
  "10162" :{ //galar ponyta
    path: [
      { id: "10162", name: "ponyta", evolution_details: [] },
      { id: "10163", name: "rapidash", evolution_details: [{ trigger: "level-up", min_level: 40, region: "Galar" }] }
    ]
  },
  "10163" :{ //galar rapidash
    path: [
      { id: "10162", name: "ponyta", evolution_details: [] },
      { id: "10163", name: "rapidash", evolution_details: [{ trigger: "level-up", min_level: 40, region: "Galar" }] }
    ]
  },
  "83" :{ //kanto farfetchd
    path: [
      { id: "83", name: "farfetchd", evolution_details: [] }
    ]
  },
  "10166" :{ //galar farfetchd
    path: [
      { id: "10166", name: "farfetchd", evolution_details: [] },
      { id: "865", name: "sirfetchd", evolution_details: [{ trigger: "three-critical-hits", region: "Galar" }] }
    ]
  },
  "865" :{ //galar sirfetchd
    path: [
      { id: "10166", name: "farfetchd", evolution_details: [] },
      { id: "865", name: "sirfetchd", evolution_details: [{ trigger: "three-critical-hits", region: "Galar" }] }
    ]
  },
  "110" :{ //galar weezing
    path: [
      { id: "109", name: "koffing", evolution_details: [] },
      { id: "110", name: "weezing", evolution_details: [{ trigger: "level-up", min_level: 35 }] }
    ]
  },
  "10167" :{ //galar weezing
    path: [
      { id: "109", name: "koffing", evolution_details: [] },
      { id: "10167", name: "weezing", evolution_details: [{ trigger: "level-up", min_level: 35, region: "Galar" }] }
    ]
  },
  "439" :{ //sinnoh mimejr
    path: [
      { id: "439", name: "mime-jr", evolution_details: [] },
      { id: "122", name: "mr-mime", evolution_details: [{ trigger: "level-up", known_move: "mimic" }] }
    ]
  },
  "122" :{ //kanto mrmime
    path: [
      { id: "439", name: "mime-jr", evolution_details: [] },
      { id: "122", name: "mr-mime", evolution_details: [{ trigger: "level-up", known_move: "mimic" }] }
    ]
  },
  "10168" :{ //galar mrmime
    path: [
      { id: "439", name: "mime-jr", evolution_details: [] },
      { id: "10168", name: "mr-mime", evolution_details: [{ trigger: "level-up", known_move: "mimic", region: "Galar" }] },
      { id: "866", name: "mr-rime", evolution_details: [{ trigger: "level-up", min_level: 42, region: "Galar" }] }
    ]
  },
  "866" :{ //galar mrrime
    path: [
      { id: "439", name: "mime-jr", evolution_details: [] },
      { id: "10168", name: "mr-mime", evolution_details: [{ trigger: "level-up", known_move: "mimic", region: "Galar" }] },
      { id: "866", name: "mr-rime", evolution_details: [{ trigger: "level-up", min_level: 42, region: "Galar" }] }
    ]
  },
  "222" :{ //johto corsola
    path: [
      { id: "222", name: "corsola", evolution_details: [] }
    ]
  },
  "10173" :{ //galar corsola
    path: [
      { id: "10173", name: "corsola", evolution_details: [] },
      { id: "864", name: "cursola", evolution_details: [{ trigger: "level-up", min_level: 38, region: "Galar" }] }
    ]
  },
  "864" :{ //galar cursola
    path: [
      { id: "10173", name: "corsola", evolution_details: [] },
      { id: "864", name: "cursola", evolution_details: [{ trigger: "level-up", min_level: 38, region: "Galar" }] }
    ]
  },
  "263" :{ //hoenn zigzagoon
    path: [
      { id: "263", name: "zigzagoon", evolution_details: [] },
      { id: "264", name: "linoone", evolution_details: [{ trigger: "level-up", min_level: 20 }] }
    ]
  },
  "264" :{ //hoenn linoone
    path: [
      { id: "263", name: "zigzagoon", evolution_details: [] },
      { id: "264", name: "linoone", evolution_details: [{ trigger: "level-up", min_level: 20 }] }
    ]
  },
  "10174" :{ //galar zigzagoon
    path: [
      { id: "10174", name: "zigzagoon", evolution_details: [] },
      { id: "10175", name: "linoone", evolution_details: [{ trigger: "level-up", min_level: 20, region: "Galar" }] },
      { id: "862", name: "obstagoon", evolution_details: [{ trigger: "level-up", min_level: 35, time_of_day: "night", region: "Galar" }] }
    ]
  },
  "10175" :{ //galar linoone
    path: [
      { id: "10174", name: "zigzagoon", evolution_details: [] },
      { id: "10175", name: "linoone", evolution_details: [{ trigger: "level-up", min_level: 20, region: "Galar" }] },
      { id: "862", name: "obstagoon", evolution_details: [{ trigger: "level-up", min_level: 35, time_of_day: "night", region: "Galar" }] }
    ]
  },
  "862" :{ //galar obstagoon
    path: [
      { id: "10174", name: "zigzagoon", evolution_details: [] },
      { id: "10175", name: "linoone", evolution_details: [{ trigger: "level-up", min_level: 20, region: "Galar" }] },
      { id: "862", name: "obstagoon", evolution_details: [{ trigger: "level-up", min_level: 35, time_of_day: "night", region: "Galar" }] }
    ]
  },
  "554" :{ //sinnoh darumaka
    path: [
      { id: "554", name: "darumaka", evolution_details: [] },
      { id: "555", name: "darmanitan", evolution_details: [{ trigger: "level-up", min_level: 35 }] }
    ]
  },
  "555" :{ //sinnoh darmanitan
    path: [
      { id: "554", name: "darumaka", evolution_details: [] },
      { id: "555", name: "darmanitan", evolution_details: [{ trigger: "level-up", min_level: 35 }] }
    ]
  },
  "10017" :{ //sinnoh darmanitan-zen
    path: [
      { id: "554", name: "darumaka", evolution_details: [] },
      { id: "555", name: "darmanitan", evolution_details: [{ trigger: "level-up", min_level: 35 }] }
    ]
  },
  "10176" :{ //galar darumaka
    path: [
      { id: "10176", name: "darumaka", evolution_details: [] },
      { id: "10177", name: "darmanitan", evolution_details: [{ trigger: "use-item", item: "ice-stone", region: "Galar" }] }
    ]
  },
  "10177" :{ //galar darmanitan
    path: [
      { id: "10176", name: "darumaka", evolution_details: [] },
      { id: "10177", name: "darmanitan", evolution_details: [{ trigger: "use-item", item: "ice-stone", region: "Galar" }] }
    ]
  },
  "10178" :{ //galar darmanitan-zen
    path: [
      { id: "10176", name: "darumaka", evolution_details: [] },
      { id: "10177", name: "darmanitan", evolution_details: [{ trigger: "use-item", item: "ice-stone", region: "Galar" }] }
    ]
  },
  "562" :{ //sinnoh yamask
    path: [
      { id: "562", name: "yamask", evolution_details: [] },
      { id: "563", name: "cofagrigus", evolution_details: [{ trigger: "level-up", min_level: 34 }] }
    ]
  },
  "563" :{ //sinnoh cofagrigus
    path: [
      { id: "562", name: "yamask", evolution_details: [] },
      { id: "563", name: "cofagrigus", evolution_details: [{ trigger: "level-up", min_level: 34 }] }
    ]
  },
  "10179" :{ //galar yamask
    path: [
      { id: "10179", name: "yamask", evolution_details: [] },
      { id: "867", name: "runerigus", evolution_details: [{ trigger: "take-damage", min_damage_taken: 49, location: "Dusty Bowl Bridge", region: "Galar" }] }
    ]
  },
  "867" :{ //galar runerigus
    path: [
      { id: "10179", name: "yamask", evolution_details: [] },
      { id: "867", name: "runerigus", evolution_details: [{ trigger: "take-damage", min_damage_taken: 49, location: "Dusty Bowl Bridge", region: "Galar" }] }
    ]
  },
  "79" :{ //kanto slowpoke
    path: [
      { id: "79", name: "slowpoke", evolution_details: [] },
      [
        { id: "80", name: "slowbro", evolution_details: [{ trigger: "level-up", min_level: 34 }] },
        { id: "199", name: "slowking", evolution_details: [{ trigger: "trade", held_item: "kings-rock" }] }
      ]
    ]
  },
  "80" :{ //kanto slowbro
    path: [
      { id: "79", name: "slowpoke", evolution_details: [] },
      [
        { id: "80", name: "slowbro", evolution_details: [{ trigger: "level-up", min_level: 34 }] },
        { id: "199", name: "slowking", evolution_details: [{ trigger: "trade", held_item: "kings-rock" }] }
      ]
    ]
  },
  "10071" :{ //kanto slowbro mega
    path: [
      { id: "79", name: "slowpoke", evolution_details: [] },
      [
        { id: "80", name: "slowbro", evolution_details: [{ trigger: "level-up", min_level: 34 }], evolves_to: [{ id: "10071", name: "slowbro-mega", evolution_details: [{ trigger: "battle" }] }] },
        { id: "199", name: "slowking", evolution_details: [{ trigger: "trade", held_item: "kings-rock" }] }
      ]
    ]
  },
  "199" :{ //johto slowking
    path: [
      { id: "79", name: "slowpoke", evolution_details: [] },
      [
        { id: "80", name: "slowbro", evolution_details: [{ trigger: "level-up", min_level: 34 }] },
        { id: "199", name: "slowking", evolution_details: [{ trigger: "trade", held_item: "kings-rock" }] }
      ]
    ]
  },
  "10164" :{ //galar slowpoke
    path: [
      { id: "10164", name: "slowpoke", evolution_details: [] },
      [
        { id: "10165", name: "slowbro", evolution_details: [{ trigger: "use-item", item: "galarica-cuff", region: "Galar" }] },
        { id: "10172", name: "slowking", evolution_details: [{ trigger: "use-item", item: "galarica-wreath", region: "Galar" }] }
      ]
    ]
  },
  "10165" :{ //galar slowbro
    path: [
      { id: "10164", name: "slowpoke", evolution_details: [] },
      [
        { id: "10165", name: "slowbro", evolution_details: [{ trigger: "use-item", item: "galarica-cuff", region: "Galar" }] },
        { id: "10172", name: "slowking", evolution_details: [{ trigger: "use-item", item: "galarica-wreath", region: "Galar" }] }
      ]
    ]
  },
  "10172" :{ //galar slowking
    path: [
      { id: "10164", name: "slowpoke", evolution_details: [] },
      [
        { id: "10165", name: "slowbro", evolution_details: [{ trigger: "use-item", item: "galarica-cuff", region: "Galar" }] },
        { id: "10172", name: "slowking", evolution_details: [{ trigger: "use-item", item: "galarica-wreath", region: "Galar" }] }
      ]
    ]
  },
  "58" :{ //kanto growlithe
    path: [
      { id: "58", name: "growlithe", evolution_details: [] },
      { id: "59", name: "arcanine", evolution_details: [{ trigger: "use-item", item: "fire-stone" }] }
    ]
  },
  "59" :{ //kanto arcanine
    path: [
      { id: "58", name: "growlithe", evolution_details: [] },
      { id: "59", name: "arcanine", evolution_details: [{ trigger: "use-item", item: "fire-stone" }] }
    ]
  },
  "10229" :{ //hisuian growlithe
    path: [
      { id: "10229", name: "growlithe", evolution_details: [] },
      { id: "10230", name: "arcanine", evolution_details: [{ trigger: "use-item", item: "fire-stone", region: "Hisui" }] }
    ]
  },
  "10230" :{ //hisuian arcanine
    path: [
      { id: "10229", name: "growlithe", evolution_details: [] },
      { id: "10230", name: "arcanine", evolution_details: [{ trigger: "use-item", item: "fire-stone", region: "Hisui" }] }
    ]
  },
  "100" :{ //kanto voltorb
    path: [
      { id: "100", name: "voltorb", evolution_details: [] },
      { id: "101", name: "electrode", evolution_details: [{ trigger: "level-up", min_level: 30 }] }
    ]
  },
  "101" :{ //kanto electrode
    path: [
      { id: "100", name: "voltorb", evolution_details: [] },
      { id: "101", name: "electrode", evolution_details: [{ trigger: "level-up", min_level: 30 }] }
    ]
  },
  "10231" :{ //hisuian voltorb
    path: [
      { id: "10231", name: "voltorb", evolution_details: [] },
      { id: "10232", name: "electrode", evolution_details: [{ trigger: "level-up", min_level: 30, region: "Hisui" }] }
    ]
  },
  "10232" :{ //hisuian electrode
    path: [
      { id: "10231", name: "voltorb", evolution_details: [] },
      { id: "10232", name: "electrode", evolution_details: [{ trigger: "level-up", min_level: 30, region: "Hisui" }] }
    ]
  },
  "155" :{ //johto cyndaquil
    path: [
      { id: "155", name: "cyndaquil", evolution_details: [] },
      { id: "156", name: "quilava", evolution_details: [{ trigger: "level-up", min_level: 14 }] },
      { id: "157", name: "typhlosion", evolution_details: [{ trigger: "level-up", min_level: 36 }] }
    ]
  },
  "156" :{ //johto quilava
    path: [
      { id: "155", name: "cyndaquil", evolution_details: [] },
      { id: "156", name: "quilava", evolution_details: [{ trigger: "level-up", min_level: 14 }] },
      { id: "157", name: "typhlosion", evolution_details: [{ trigger: "level-up", min_level: 36 }] }
    ]
  },
  "157" :{ //johto typhlosion
    path: [
      { id: "155", name: "cyndaquil", evolution_details: [] },
      { id: "156", name: "quilava", evolution_details: [{ trigger: "level-up", min_level: 14 }] },
      { id: "157", name: "typhlosion", evolution_details: [{ trigger: "level-up", min_level: 36 }] }
    ]
  },
  "10233" :{ //hisuian typhlosion
    path: [
      { id: "155", name: "cyndaquil", evolution_details: [] },
      { id: "156", name: "quilava", evolution_details: [{ trigger: "level-up", min_level: 14 }] },
      { id: "10233", name: "typhlosion", evolution_details: [{ trigger: "level-up", min_level: 36, region: "Hisui" }] }
    ]
  },
  "211" :{ //johto qwilfish
    path: [
      { id: "211", name: "qwilfish", evolution_details: [] }
    ]
  },
  "10234" :{ //hisuian qwilfish
    path: [
      { id: "10234", name: "qwilfish", evolution_details: [] },
      { id: "904", name: "overqwil", evolution_details: [{ trigger: "use-move", used_move: "barb-barrage", min_move_count: 20, region: "Hisui" }] }
    ]
  },
  "904" :{ //hisuian overqwil
    path: [
      { id: "10234", name: "qwilfish", evolution_details: [] },
      { id: "904", name: "overqwil", evolution_details: [{ trigger: "use-move", used_move: "barb-barrage", min_move_count: 20, region: "Hisui" }] }
    ]
  },
  "215" :{ //johto sneasel
    path: [
      { id: "215", name: "sneasel", evolution_details: [] },
      { id: "461", name: "weavile", evolution_details: [{ trigger: "level-up", held_item: "razor-claw", time_of_day: "night" }] }
    ]
  },
  "461" :{ //sinnoh weavile
    path: [
      { id: "215", name: "sneasel", evolution_details: [] },
      { id: "461", name: "weavile", evolution_details: [{ trigger: "level-up", held_item: "razor-claw", time_of_day: "night" }] }
    ]
  },
  "10235" :{ //hisuian sneasel
    path: [
      { id: "10235", name: "sneasel", evolution_details: [] },
      { id: "903", name: "sneasler", evolution_details: [{ trigger: "level-up", held_item: "razor-claw", time_of_day: "day", region: "Hisui" }] }
    ]
  },
  "903" :{ //hisuian sneasler
    path: [
      { id: "10235", name: "sneasel", evolution_details: [] },
      { id: "903", name: "sneasler", evolution_details: [{ trigger: "level-up", held_item: "razor-claw", time_of_day: "day", region: "Hisui" }] }
    ]
  },
  "501" :{ //unova oshawott
    path: [
      { id: "501", name: "oshawott", evolution_details: [] },
      { id: "502", name: "dewott", evolution_details: [{ trigger: "level-up", min_level: 17 }] },
      { id: "503", name: "samurott", evolution_details: [{ trigger: "level-up", min_level: 36 }] }
    ]
  },
  "502" :{ //unova dewott
    path: [
      { id: "501", name: "oshawott", evolution_details: [] },
      { id: "502", name: "dewott", evolution_details: [{ trigger: "level-up", min_level: 17 }] },
      { id: "503", name: "samurott", evolution_details: [{ trigger: "level-up", min_level: 36 }] }
    ]
  },
  "503" :{ //unova samurott
    path: [
      { id: "501", name: "oshawott", evolution_details: [] },
      { id: "502", name: "dewott", evolution_details: [{ trigger: "level-up", min_level: 17 }] },
      { id: "503", name: "samurott", evolution_details: [{ trigger: "level-up", min_level: 36 }] }
    ]
  },
  "10236" :{ //hisuian samurott
    path: [
      { id: "501", name: "oshawott", evolution_details: [] },
      { id: "502", name: "dewott", evolution_details: [{ trigger: "level-up", min_level: 17 }] },
      { id: "10236", name: "samurott", evolution_details: [{ trigger: "level-up", min_level: 36, region: "Hisui" }] }
    ]
  },
  "548" :{ //unova petilil
    path: [
      { id: "548", name: "petilil", evolution_details: [] },
      { id: "549", name: "lilligant", evolution_details: [{ trigger: "use-item", item: "sun-stone" }] }
    ]
  },
  "549" :{ //unova lilligant
    path: [
      { id: "548", name: "petilil", evolution_details: [] },
      { id: "549", name: "lilligant", evolution_details: [{ trigger: "use-item", item: "sun-stone" }] }
    ]
  },
  "10237" :{ //hisuian lilligant
    path: [
      { id: "548", name: "petilil", evolution_details: [] },
      { id: "10237", name: "lilligant", evolution_details: [{ trigger: "use-item", item: "sun-stone", region: "Hisui" }] }
    ]
  },
  "570" :{ //hisuian zorua
    path: [
      { id: "570", name: "zorua", evolution_details: [] },
      { id: "571", name: "zoroark", evolution_details: [{ trigger: "level-up", min_level: 30 }] }
    ]
  },
  "571" :{ //unova zoroark
    path: [
      { id: "570", name: "zorua", evolution_details: [] },
      { id: "571", name: "zoroark", evolution_details: [{ trigger: "level-up", min_level: 30 }] }
    ]
  },
  "10238" :{ //hisuian zorua
    path: [
      { id: "10238", name: "zorua", evolution_details: [] },
      { id: "10239", name: "zoroark", evolution_details: [{ trigger: "level-up", min_level: 30, region: "Hisui" }] }
    ]
  },
  "10239" :{ //hisuian zoroark
    path: [
      { id: "10238", name: "zorua", evolution_details: [] },
      { id: "10239", name: "zoroark", evolution_details: [{ trigger: "level-up", min_level: 30, region: "Hisui" }] }
    ]
  },
  "627" :{ //unova rufflet
    path: [
      { id: "627", name: "rufflet", evolution_details: [] },
      { id: "571", name: "braviary", evolution_details: [{ trigger: "level-up", min_level: 54 }] }
    ]
  },
  "628" :{ //unova braviary
    path: [
      { id: "10238", name: "rufflet", evolution_details: [] },
      { id: "10239", name: "braviary", evolution_details: [{ trigger: "level-up", min_level: 54 }] }
    ]
  },
  "10240" :{ //hisuian braviary
    path: [
      { id: "627", name: "rufflet", evolution_details: [] },
      { id: "10240", name: "braviary", evolution_details: [{ trigger: "level-up", min_level: 54, region: "Hisui" }] }
    ]
  },
  "704" :{ //unova goomy
    path: [
      { id: "704", name: "goomy", evolution_details: [] },
      { id: "705", name: "sligoo", evolution_details: [{ trigger: "level-up", min_level: 40 }] },
      { id: "706", name: "goodra", evolution_details: [{ trigger: "level-up", min_level: 50, needs_overworld_rain: true }] }
    ]
  },
  "705" :{ //unova sligoo
    path: [
      { id: "704", name: "goomy", evolution_details: [] },
      { id: "705", name: "sligoo", evolution_details: [{ trigger: "level-up", min_level: 40 }] },
      { id: "706", name: "goodra", evolution_details: [{ trigger: "level-up", min_level: 50, needs_overworld_rain: true }] }
    ]
  },
  "706" :{ //unova goodra
    path: [
      { id: "704", name: "goomy", evolution_details: [] },
      { id: "705", name: "sligoo", evolution_details: [{ trigger: "level-up", min_level: 40 }] },
      { id: "706", name: "goodra", evolution_details: [{ trigger: "level-up", min_level: 50, needs_overworld_rain: true }] }
    ]
  },
  "10241" :{ //hisuian sligoo
    path: [
      { id: "704", name: "goomy", evolution_details: [] },
      { id: "10241", name: "sligoo", evolution_details: [{ trigger: "level-up", min_level: 40, region: "Hisui" }] },
      { id: "10242", name: "goodra", evolution_details: [{ trigger: "level-up", min_level: 50, needs_overworld_rain: true, region: "Hisui" }] }
    ]
  },
  "10242" :{ //hisuian goodra
    path: [
      { id: "704", name: "goomy", evolution_details: [] },
      { id: "10241", name: "sligoo", evolution_details: [{ trigger: "level-up", min_level: 40, region: "Hisui" }] },
      { id: "10242", name: "goodra", evolution_details: [{ trigger: "level-up", min_level: 50, needs_overworld_rain: true, region: "Hisui" }] }
    ]
  },
  "712" :{ //unova bergmite
    path: [
      { id: "712", name: "bergmite", evolution_details: [] },
      { id: "713", name: "avalugg", evolution_details: [{ trigger: "level-up", min_level: 37 }] }
    ]
  },
  "713" :{ //unova avalugg
    path: [
      { id: "712", name: "bergmite", evolution_details: [] },
      { id: "713", name: "avalugg", evolution_details: [{ trigger: "level-up", min_level: 37 }] }
    ]
  },
  "10243" :{ //hisuian avalugg
    path: [
      { id: "712", name: "bergmite", evolution_details: [] },
      { id: "10243", name: "avalugg", evolution_details: [{ trigger: "level-up", min_level: 37, region: "Hisui" }] }
    ]
  },
  "722" :{ //alolan rowlet
    path: [
      { id: "722", name: "rowlet", evolution_details: [] },
      { id: "723", name: "dartrix", evolution_details: [{ trigger: "level-up", min_level: 17 }] },
      { id: "724", name: "decidueye", evolution_details: [{ trigger: "level-up", min_level: 34 }] }
    ]
  },
  "723" :{ //alolan dartrix
    path: [
      { id: "722", name: "rowlet", evolution_details: [] },
      { id: "723", name: "dartrix", evolution_details: [{ trigger: "level-up", min_level: 17 }] },
      { id: "724", name: "decidueye", evolution_details: [{ trigger: "level-up", min_level: 34 }] }
    ]
  },
  "724" :{ //alolan decidueye
    path: [
      { id: "722", name: "rowlet", evolution_details: [] },
      { id: "723", name: "dartrix", evolution_details: [{ trigger: "level-up", min_level: 17 }] },
      { id: "724", name: "decidueye", evolution_details: [{ trigger: "level-up", min_level: 34 }] }
    ]
  },
  "10244" :{ //hisuian decidueye
    path: [
      { id: "722", name: "rowlet", evolution_details: [] },
      { id: "723", name: "dartrix", evolution_details: [{ trigger: "level-up", min_level: 17 }] },
      { id: "10244", name: "decidueye", evolution_details: [{ trigger: "level-up", min_level: 34, region: "Hisui" }] }
    ]
  },
  "194" :{ //johto wooper
    path: [
      { id: "194", name: "wooper", evolution_details: [] },
      { id: "195", name: "quagsire", evolution_details: [{ trigger: "level-up", min_level: 20 }] }
    ]
  },
  "195" :{ //johto quagsire
    path: [
      { id: "194", name: "wooper", evolution_details: [] },
      { id: "195", name: "quagsire", evolution_details: [{ trigger: "level-up", min_level: 20 }] }
    ]
  },
  "10253" :{ //paldean wooper
    path: [
      { id: "10253", name: "wooper", evolution_details: [] },
      { id: "980", name: "clodsire", evolution_details: [{ trigger: "level-up", min_level: 20, region: "Paldea" }] }
    ]
  },
  "980" :{ //paldean clodsire
    path: [
      { id: "10253", name: "wooper", evolution_details: [] },
      { id: "980", name: "clodsire", evolution_details: [{ trigger: "level-up", min_level: 20, region: "Paldea" }] }
    ]
  },
  "808": { // meltan
    path: [
      { id: "808", name: "meltan", trigger: null },
      { id: "809", name: "melmetal", evolution_details: [{ trigger: "use-item", "item": "candy", item_count: 400 }] }
    ]
  },
  "809": { //melmetal
    path: [
      { id: "808", name: "meltan", trigger: null },
      { id: "809", name: "melmetal", evolution_details: [{ trigger: "use-item", "item": "thunder-stone" }] }
    ]
  },
  "10208": { //melmetal gmax
    path: [
      { id: "808", name: "meltan", trigger: null },
      { id: "809", name: "melmetal", evolution_details: [{ trigger: "use-item", "item": "thunder-stone" }] },
      { id: "10208", name: "melmetal", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "299": { //nosepass
    path: [
      { id: "299", name: "nosepass", trigger: null },
      { id: "476", name: "probopass", evolution_details: [{ trigger: "use-item", "item": "thunder-stone" }] }
    ]
  },
  "476": { //probopass
    path: [
      { id: "299", name: "nosepass", trigger: null },
      { id: "476", name: "probopass", evolution_details: [{ trigger: "use-item", "item": "thunder-stone" }] }
    ]
  },
  "739": { //crabrawler
    path: [
      { id: "739", name: "crabrawler", trigger: null },
      { id: "740", name: "crabominable", evolution_details: [{ trigger: "use-item", "item": "ice-stone" }] }
    ]
  },
  "740": { //crabominable
    path: [
      { id: "739", name: "crabrawler", trigger: null },
      { id: "740", name: "crabominable", evolution_details: [{ trigger: "use-item", "item": "ice-stone" }] }
    ]
  },
  "10315": { //crabominable mega
    path: [
      { id: "739", name: "crabrawler", trigger: null },
      { id: "740", name: "crabominable", evolution_details: [{ trigger: "use-item", "item": "ice-stone" }] },
      { id: "10315", name: "crabominable-mega", evolution_details: [{ trigger: "battle" }]}
    ]
  },
  "854": { //sinistea
    path: [
      { id: "854", name: "sinistea", trigger: null },
      [
        { id: "855", name: "polteageist", evolution_details: [{ trigger: "use-item", item: "cracked-pot" }] },
        { id: "855", name: "polteageist", evolution_details: [{ trigger: "use-item", item: "chipped-pot" }] }
      ]
    ]
  },
  "855": { //polteageist
    path: [
      { id: "854", name: "sinistea", trigger: null },
      [
        { id: "855", name: "polteageist", evolution_details: [{ trigger: "use-item", item: "cracked-pot" }] },
        { id: "855", name: "polteageist", evolution_details: [{ trigger: "use-item", item: "chipped-pot" }] }
      ]
    ]
  },
  "840": { //applin
    path: [
      { id: "840", name: "applin", trigger: null },
      [
        { id: "841", name: "flapple", evolution_details: [{ trigger: "use-item", item: "tart-apple" }] },
        { id: "842", name: "appletun", evolution_details: [{ trigger: "use-item", item: "sweet-apple" }] },
        { id: "1011", name: "dipplin", evolution_details: [{ trigger: "use-item", item: "syrupy-apple" }], evolves_to: [{ id: "1019", name: "hydrapple", evolution_details: [{ trigger: "level-up", known_move: "dragon-cheer" }] }] },
      ]
    ]
  },
  "841": { //flapple
    path: [
      { id: "840", name: "applin", trigger: null },
      [
        { id: "841", name: "flapple", evolution_details: [{ trigger: "use-item", item: "tart-apple" }] },
        { id: "842", name: "appletun", evolution_details: [{ trigger: "use-item", item: "sweet-apple" }] },
        { id: "1011", name: "dipplin", evolution_details: [{ trigger: "use-item", item: "syrupy-apple" }], evolves_to: [{ id: "1019", name: "hydrapple", evolution_details: [{ trigger: "level-up", known_move: "dragon-cheer" }] }] },
      ]
    ]
  },
  "842": { //appletun
    path: [
      { id: "840", name: "applin", trigger: null },
      [
        { id: "841", name: "flapple", evolution_details: [{ trigger: "use-item", item: "tart-apple" }] },
        { id: "842", name: "appletun", evolution_details: [{ trigger: "use-item", item: "sweet-apple" }] },
        { id: "1011", name: "dipplin", evolution_details: [{ trigger: "use-item", item: "syrupy-apple" }], evolves_to: [{ id: "1019", name: "hydrapple", evolution_details: [{ trigger: "level-up", known_move: "dragon-cheer" }] }] },
      ]
    ]
  },
  "10217": { //appletun gmax
    path: [
      { id: "840", name: "applin", trigger: null },
      [
        { id: "841", name: "flapple", evolution_details: [{ trigger: "use-item", item: "tart-apple" }] },
        { id: "842", name: "appletun", evolution_details: [{ trigger: "use-item", item: "sweet-apple" }], evolves_to: [{ id: "10217", name: "appletun-gmax", evolution_details: [{ trigger: "battle" }] }] },
        { id: "1011", name: "dipplin", evolution_details: [{ trigger: "use-item", item: "syrupy-apple" }], evolves_to: [{ id: "1019", name: "hydrapple", evolution_details: [{ trigger: "level-up", known_move: "dragon-cheer" }] }] },
      ]
    ]
  },
  "10216": { //flapple gmax
    path: [
      { id: "840", name: "applin", trigger: null },
      [
        { id: "841", name: "flapple", evolution_details: [{ trigger: "use-item", item: "tart-apple" }], evolves_to: [{ id: "10216", name: "flapple-gmax", evolution_details: [{ trigger: "battle" }] }] },
        { id: "842", name: "appletun", evolution_details: [{ trigger: "use-item", item: "sweet-apple" }] },
        { id: "1011", name: "dipplin", evolution_details: [{ trigger: "use-item", item: "syrupy-apple" }], evolves_to: [{ id: "1019", name: "hydrapple", evolution_details: [{ trigger: "level-up", known_move: "dragon-cheer" }] }] },
      ]
    ]
  },
  "1011": { //dipplin
    path: [
      { id: "840", name: "applin", trigger: null },
      [
        { id: "841", name: "flapple", evolution_details: [{ trigger: "use-item", item: "tart-apple" }] },
        { id: "842", name: "appletun", evolution_details: [{ trigger: "use-item", item: "sweet-apple" }] },
        { id: "1011", name: "dipplin", evolution_details: [{ trigger: "use-item", item: "syrupy-apple" }], evolves_to: [{ id: "1019", name: "hydrapple", evolution_details: [{ trigger: "level-up", known_move: "dragon-cheer" }] }] },
      ]
    ]
  },
  "1019": { //hydrapple
    path: [
      { id: "840", name: "applin", trigger: null },
      [
        { id: "841", name: "flapple", evolution_details: [{ trigger: "use-item", item: "tart-apple" }] },
        { id: "842", name: "appletun", evolution_details: [{ trigger: "use-item", item: "sweet-apple" }] },
        { id: "1011", name: "dipplin", evolution_details: [{ trigger: "use-item", item: "syrupy-apple" }], evolves_to: [{ id: "1019", name: "hydrapple", evolution_details: [{ trigger: "level-up", known_move: "dragon-cheer" }] }] },
      ]
    ]
  },
  "1012": { //poltchageist
    path: [
      { id: "1012", name: "poltchageist", trigger: null },
      [
        { id: "1013", name: "sinistcha", evolution_details: [{ trigger: "use-item", item: "masterpiece-teacup" }] },
        { id: "1013", name: "sinistcha", evolution_details: [{ trigger: "use-item", item: "unremarkable-teacup" }] }
      ]
    ]
  },
  "1013": { //sinistcha
    path: [
      { id: "1012", name: "poltchageist", trigger: null },
      [
        { id: "1013", name: "sinistcha", evolution_details: [{ trigger: "use-item", item: "masterpiece-teacup" }] },
        { id: "1013", name: "sinistcha", evolution_details: [{ trigger: "use-item", item: "unremarkable-teacup" }] }
      ]
    ]
  },
  "133": { //eevee
    path: [
      { id: "133", name: "eevee", trigger: null },
      [
        { id: "134", name: "vaporeon", evolution_details: [{ trigger: "use-item", item: "water-stone" }] },
        { id: "135", name: "jolteon", evolution_details: [{ trigger: "use-item", item: "thunder-stone" }] },
        { id: "136", name: "flareon", evolution_details: [{ trigger: "use-item", item: "fire-stone" }] },
        { id: "196", name: "espeon", evolution_details: [{ trigger: "level-up", min_happiness: 160, time_of_day: "day" }] },
        { id: "197", name: "umbreon", evolution_details: [{ trigger: "level-up", min_happiness: 160, time_of_day: "night" }] },
        { id: "470", name: "leafeon", evolution_details: [{ trigger: "use-item", item: "leaf-stone" }] },
        { id: "471", name: "glaceon", evolution_details: [{ trigger: "use-item", item: "ice-stone" }] },
        { id: "700", name: "sylveon", evolution_details: [{ trigger: "level-up", min_happiness: 160, known_move_type: "fairy" }] }
      ]
    ]
  },
  "10205": { //eevee gmax
    path: [
      { id: "133", name: "eevee", trigger: null },
        { id: "10205", name: "eevee-gmax", evolution_details: [{ trigger: "battle" }] },
      
    ]
  },
  "134": { //vaporeon
    path: [
      { id: "133", name: "eevee", trigger: null },
      [
        { id: "134", name: "vaporeon", evolution_details: [{ trigger: "use-item", item: "water-stone" }] },
        { id: "135", name: "jolteon", evolution_details: [{ trigger: "use-item", item: "thunder-stone" }] },
        { id: "136", name: "flareon", evolution_details: [{ trigger: "use-item", item: "fire-stone" }] },
        { id: "196", name: "espeon", evolution_details: [{ trigger: "level-up", min_happiness: 160, time_of_day: "day" }] },
        { id: "197", name: "umbreon", evolution_details: [{ trigger: "level-up", min_happiness: 160, time_of_day: "night" }] },
        { id: "470", name: "leafeon", evolution_details: [{ trigger: "use-item", item: "leaf-stone" }] },
        { id: "471", name: "glaceon", evolution_details: [{ trigger: "use-item", item: "ice-stone" }] },
        { id: "700", name: "sylveon", evolution_details: [{ trigger: "level-up", min_happiness: 160, known_move_type: "fairy" }] }
      ]
    ]
  },
  "135": { //jolteon
    path: [
      { id: "133", name: "eevee", trigger: null },
      [
        { id: "134", name: "vaporeon", evolution_details: [{ trigger: "use-item", item: "water-stone" }] },
        { id: "135", name: "jolteon", evolution_details: [{ trigger: "use-item", item: "thunder-stone" }] },
        { id: "136", name: "flareon", evolution_details: [{ trigger: "use-item", item: "fire-stone" }] },
        { id: "196", name: "espeon", evolution_details: [{ trigger: "level-up", min_happiness: 160, time_of_day: "day" }] },
        { id: "197", name: "umbreon", evolution_details: [{ trigger: "level-up", min_happiness: 160, time_of_day: "night" }] },
        { id: "470", name: "leafeon", evolution_details: [{ trigger: "use-item", item: "leaf-stone" }] },
        { id: "471", name: "glaceon", evolution_details: [{ trigger: "use-item", item: "ice-stone" }] },
        { id: "700", name: "sylveon", evolution_details: [{ trigger: "level-up", min_happiness: 160, known_move_type: "fairy" }] }
      ]
    ]
  },
  "136": { //flareon
    path: [
      { id: "133", name: "eevee", trigger: null },
      [
        { id: "134", name: "vaporeon", evolution_details: [{ trigger: "use-item", item: "water-stone" }] },
        { id: "135", name: "jolteon", evolution_details: [{ trigger: "use-item", item: "thunder-stone" }] },
        { id: "136", name: "flareon", evolution_details: [{ trigger: "use-item", item: "fire-stone" }] },
        { id: "196", name: "espeon", evolution_details: [{ trigger: "level-up", min_happiness: 160, time_of_day: "day" }] },
        { id: "197", name: "umbreon", evolution_details: [{ trigger: "level-up", min_happiness: 160, time_of_day: "night" }] },
        { id: "470", name: "leafeon", evolution_details: [{ trigger: "use-item", item: "leaf-stone" }] },
        { id: "471", name: "glaceon", evolution_details: [{ trigger: "use-item", item: "ice-stone" }] },
        { id: "700", name: "sylveon", evolution_details: [{ trigger: "level-up", min_happiness: 160, known_move_type: "fairy" }] }
      ]
    ]
  },
  "196": { //espeon
    path: [
      { id: "133", name: "eevee", trigger: null },
      [
        { id: "134", name: "vaporeon", evolution_details: [{ trigger: "use-item", item: "water-stone" }] },
        { id: "135", name: "jolteon", evolution_details: [{ trigger: "use-item", item: "thunder-stone" }] },
        { id: "136", name: "flareon", evolution_details: [{ trigger: "use-item", item: "fire-stone" }] },
        { id: "196", name: "espeon", evolution_details: [{ trigger: "level-up", min_happiness: 160, time_of_day: "day" }] },
        { id: "197", name: "umbreon", evolution_details: [{ trigger: "level-up", min_happiness: 160, time_of_day: "night" }] },
        { id: "470", name: "leafeon", evolution_details: [{ trigger: "use-item", item: "leaf-stone" }] },
        { id: "471", name: "glaceon", evolution_details: [{ trigger: "use-item", item: "ice-stone" }] },
        { id: "700", name: "sylveon", evolution_details: [{ trigger: "level-up", min_happiness: 160, known_move_type: "fairy" }] }
      ]
    ]
  },
  "197": { //umbreon
    path: [
      { id: "133", name: "eevee", trigger: null },
      [
        { id: "134", name: "vaporeon", evolution_details: [{ trigger: "use-item", item: "water-stone" }] },
        { id: "135", name: "jolteon", evolution_details: [{ trigger: "use-item", item: "thunder-stone" }] },
        { id: "136", name: "flareon", evolution_details: [{ trigger: "use-item", item: "fire-stone" }] },
        { id: "196", name: "espeon", evolution_details: [{ trigger: "level-up", min_happiness: 160, time_of_day: "day" }] },
        { id: "197", name: "umbreon", evolution_details: [{ trigger: "level-up", min_happiness: 160, time_of_day: "night" }] },
        { id: "470", name: "leafeon", evolution_details: [{ trigger: "use-item", item: "leaf-stone" }] },
        { id: "471", name: "glaceon", evolution_details: [{ trigger: "use-item", item: "ice-stone" }] },
        { id: "700", name: "sylveon", evolution_details: [{ trigger: "level-up", min_happiness: 160, known_move_type: "fairy" }] }
      ]
    ]
  },
  "470": { //leafeon
    path: [
      { id: "133", name: "eevee", trigger: null },
      [
        { id: "134", name: "vaporeon", evolution_details: [{ trigger: "use-item", item: "water-stone" }] },
        { id: "135", name: "jolteon", evolution_details: [{ trigger: "use-item", item: "thunder-stone" }] },
        { id: "136", name: "flareon", evolution_details: [{ trigger: "use-item", item: "fire-stone" }] },
        { id: "196", name: "espeon", evolution_details: [{ trigger: "level-up", min_happiness: 160, time_of_day: "day" }] },
        { id: "197", name: "umbreon", evolution_details: [{ trigger: "level-up", min_happiness: 160, time_of_day: "night" }] },
        { id: "470", name: "leafeon", evolution_details: [{ trigger: "use-item", item: "leaf-stone" }] },
        { id: "471", name: "glaceon", evolution_details: [{ trigger: "use-item", item: "ice-stone" }] },
        { id: "700", name: "sylveon", evolution_details: [{ trigger: "level-up", min_happiness: 160, known_move_type: "fairy" }] }
      ]
    ]
  },
  "471": { //glaceon
    path: [
      { id: "133", name: "eevee", trigger: null },
      [
        { id: "134", name: "vaporeon", evolution_details: [{ trigger: "use-item", item: "water-stone" }] },
        { id: "135", name: "jolteon", evolution_details: [{ trigger: "use-item", item: "thunder-stone" }] },
        { id: "136", name: "flareon", evolution_details: [{ trigger: "use-item", item: "fire-stone" }] },
        { id: "196", name: "espeon", evolution_details: [{ trigger: "level-up", min_happiness: 160, time_of_day: "day" }] },
        { id: "197", name: "umbreon", evolution_details: [{ trigger: "level-up", min_happiness: 160, time_of_day: "night" }] },
        { id: "470", name: "leafeon", evolution_details: [{ trigger: "use-item", item: "leaf-stone" }] },
        { id: "471", name: "glaceon", evolution_details: [{ trigger: "use-item", item: "ice-stone" }] },
        { id: "700", name: "sylveon", evolution_details: [{ trigger: "level-up", min_happiness: 160, known_move_type: "fairy" }] }
      ]
    ]
  },
  "700": { //sylveon
    path: [
      { id: "133", name: "eevee", trigger: null },
      [
        { id: "134", name: "vaporeon", evolution_details: [{ trigger: "use-item", item: "water-stone" }] },
        { id: "135", name: "jolteon", evolution_details: [{ trigger: "use-item", item: "thunder-stone" }] },
        { id: "136", name: "flareon", evolution_details: [{ trigger: "use-item", item: "fire-stone" }] },
        { id: "196", name: "espeon", evolution_details: [{ trigger: "level-up", min_happiness: 160, time_of_day: "day" }] },
        { id: "197", name: "umbreon", evolution_details: [{ trigger: "level-up", min_happiness: 160, time_of_day: "night" }] },
        { id: "470", name: "leafeon", evolution_details: [{ trigger: "use-item", item: "leaf-stone" }] },
        { id: "471", name: "glaceon", evolution_details: [{ trigger: "use-item", item: "ice-stone" }] },
        { id: "700", name: "sylveon", evolution_details: [{ trigger: "level-up", min_happiness: 160, known_move_type: "fairy" }] }
      ]
    ]
  },
  "349": { //feebas
    path: [
      { id: "349", name: "feebas", trigger: null },
      { id: "350", name: "milotic", evolution_details: [{ trigger: "trade", held_item: "prism-scale" }] }
    ]
  },
  "350": { //milotic
    path: [
      { id: "349", name: "feebas", trigger: null },
      { id: "350", name: "milotic", evolution_details: [{ trigger: "trade", held_item: "prism-scale" }] }
    ]
  },
  "10116": { //greninja
    path: [
      { id: "656", name: "froakie", trigger: null },
      { id: "657", name: "frogadier", evolution_details: [{ trigger: "level-up", min_level: 16 }] },
      { id: "10116", name: "greninja-battle-bond", evolution_details: [{ trigger: "level-up", min_level: 36 }] }
    ]
  },
  "10294": { //greninja mega
    path: [
      { id: "656", name: "froakie", trigger: null },
      { id: "657", name: "frogadier", evolution_details: [{ trigger: "level-up", min_level: 16 }] },
      { id: "658", name: "greninja", evolution_details: [{ trigger: "level-up", min_level: 36 }] },
      { id: "10294", name: "greninja-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "677": { //espurr
    path: [
      { id: "677", name: "espurr", trigger: null },
      [
        { id: "678", name: "meowstic", evolution_details: [{ trigger: "level-up", min_level: 25, gender: 2 }] },
        { id: "10025", name: "meowstic", evolution_details: [{ trigger: "level-up", min_level: 25, gender: 1 }] }
      ]
    ]
  },
  "678": { //meowstic
    path: [
      { id: "677", name: "espurr", trigger: null },
      [
        { id: "678", name: "meowstic", evolution_details: [{ trigger: "level-up", min_level: 25, gender: 2 }] },
        { id: "10025", name: "meowstic", evolution_details: [{ trigger: "level-up", min_level: 25, gender: 1 }] }
      ]
    ]
  },
  "10025": { //meowstic
    path: [
      { id: "677", name: "espurr", trigger: null },
      [
        { id: "678", name: "meowstic", evolution_details: [{ trigger: "level-up", min_level: 25, gender: 2 }] },
        { id: "10025", name: "meowstic", evolution_details: [{ trigger: "level-up", min_level: 25, gender: 1 }] }
      ]
    ]
  },
  "10314": { //meowstic mega
    path: [
      { id: "677", name: "espurr", trigger: null },
      [
        { id: "678", name: "meowstic", evolution_details: [{ trigger: "level-up", min_level: 25, gender: 2 }] },
        { id: "10025", name: "meowstic", evolution_details: [{ trigger: "level-up", min_level: 25, gender: 1 }] }
      ],
      { id: "10314", name: "meowstic-mega", evolution_details: [{ trigger: "battle"}] }
    ]
  },
  "10061": { //floette eternal
    path: [
      { id: "669", name: "flabebe", trigger: null },
      { id: "10061", name: "floette-eternal", evolution_details: [{ trigger: "level-up", min_level: 19 }] }
    ]
  },
  "10296": { //floette mega
    path: [
      { id: "669", name: "flabebe", trigger: null },
      { id: "10061", name: "floette-eternal", evolution_details: [{ trigger: "level-up", min_level: 19 }] },
      { id: "10296", name: "floette-mega", evolution_details: [{ trigger: "battle"}] }
    ]
  },
  "744": { //rockruff
    path: [
      { id: "744", name: "rockruff", trigger: null },
      [
        { id: "745", name: "lycanroc", evolution_details: [{ trigger: "level-up", min_level: 25, time_of_day: "day" }] },
        { id: "10126", name: "lycanroc", evolution_details: [{ trigger: "level-up", min_level: 25, time_of_day: "night" }] },
        { id: "10152", name: "lycanroc", evolution_details: [{ trigger: "level-up", min_level: 25, time_of_day: "dusk" }] }
      ]
    ]
  },
  "745": { //lycanroc
    path: [
      { id: "744", name: "rockruff", trigger: null },
      [
        { id: "745", name: "lycanroc", evolution_details: [{ trigger: "level-up", min_level: 25, time_of_day: "day" }] },
        { id: "10126", name: "lycanroc", evolution_details: [{ trigger: "level-up", min_level: 25, time_of_day: "night" }] },
        { id: "10152", name: "lycanroc", evolution_details: [{ trigger: "level-up", min_level: 25, time_of_day: "dusk" }] }
      ]
    ]
  },
  "10126": { //lycanroc
    path: [
      { id: "744", name: "rockruff", trigger: null },
      [
        { id: "745", name: "lycanroc", evolution_details: [{ trigger: "level-up", min_level: 25, time_of_day: "day" }] },
        { id: "10126", name: "lycanroc", evolution_details: [{ trigger: "level-up", min_level: 25, time_of_day: "night" }] },
        { id: "10152", name: "lycanroc", evolution_details: [{ trigger: "level-up", min_level: 25, time_of_day: "dusk" }] }
      ]
    ]
  },
  "10152": { //lycanroc
    path: [
      { id: "744", name: "rockruff", trigger: null },
      [
        { id: "745", name: "lycanroc", evolution_details: [{ trigger: "level-up", min_level: 25, time_of_day: "day" }] },
        { id: "10126", name: "lycanroc", evolution_details: [{ trigger: "level-up", min_level: 25, time_of_day: "night" }] },
        { id: "10152", name: "lycanroc", evolution_details: [{ trigger: "level-up", min_level: 25, time_of_day: "dusk" }] }
      ]
    ]
  },
  "81": { //magnemite
    path: [
      { id: "81", name: "magnemite", trigger: null },
      { id: "82", name: "magneton", evolution_details: [{ trigger: "level-up", min_level: 30 }] },
      { id: "462", name: "magnezone", evolution_details: [{ trigger: "use-item", item: "thunder-stone" }] }
    ]
  },
  "82": { //magneton
    path: [
      { id: "81", name: "magnemite", trigger: null },
      { id: "82", name: "magneton", evolution_details: [{ trigger: "level-up", min_level: 30 }] },
      { id: "462", name: "magnezone", evolution_details: [{ trigger: "use-item", item: "thunder-stone" }] }
    ]
  },
  "462": { //magnezone
    path: [
      { id: "81", name: "magnemite", trigger: null },
      { id: "82", name: "magneton", evolution_details: [{ trigger: "level-up", min_level: 30 }] },
      { id: "462", name: "magnezone", evolution_details: [{ trigger: "use-item", item: "thunder-stone" }] }
    ]
  },
  "736": { //grubbin
    path: [
      { id: "736", name: "grubbin", trigger: null },
      { id: "737", name: "charjabug", evolution_details: [{ trigger: "level-up", min_level: 20 }] },
      { id: "738", name: "vikavolt", evolution_details: [{ trigger: "use-item", item: "thunder-stone" }] }
    ]
  },
  "737": { //charjabug
    path: [
      { id: "736", name: "grubbin", trigger: null },
      { id: "737", name: "charjabug", evolution_details: [{ trigger: "level-up", min_level: 20 }] },
      { id: "738", name: "vikavolt", evolution_details: [{ trigger: "use-item", item: "thunder-stone" }] }
    ]
  },
  "738": { //vikavolt
    path: [
      { id: "736", name: "grubbin", trigger: null },
      { id: "737", name: "charjabug", evolution_details: [{ trigger: "level-up", min_level: 20 }] },
      { id: "738", name: "vikavolt", evolution_details: [{ trigger: "use-item", item: "thunder-stone" }] }
    ]
  },
  "884": { //duraludon
    path: [
      { id: "884", name: "duraludon", trigger: null },
      { id: "1018", name: "archaludon", evolution_details: [{ trigger: "use-item", item: "metal-alloy" }] }
    ]
  },
  "10225": { //duraludon gmax
    path: [
      { id: "884", name: "duraludon", trigger: null },
      { id: "10225", name: "duraludon-gmax", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "1018": { //archaludon
    path: [
      { id: "884", name: "duraludon", trigger: null },
      { id: "1018", name: "archaludon", evolution_details: [{ trigger: "use-item", item: "metal-alloy" }] }
    ]
  },
  "891": { //kubfu
    path: [
      { id: "891", name: "kubfu", trigger: null },
      [
        { id: "892", name: "urshifu", evolution_details: [{ trigger: "tower-of-darkness" }] },
        { id: "10191", name: "urshifu", evolution_details: [{ trigger: "tower-of-waters" }] }
      ]
    ]
  },
  "892": { //urshifu
    path: [
      { id: "891", name: "kubfu", trigger: null },
      [
        { id: "892", name: "urshifu", evolution_details: [{ trigger: "tower-of-darkness" }] },
        { id: "10191", name: "urshifu", evolution_details: [{ trigger: "tower-of-waters" }] }
      ]
    ]
  },
  "10191": { //urshifu
    path: [
      { id: "891", name: "kubfu", trigger: null },
      [
        { id: "892", name: "urshifu", evolution_details: [{ trigger: "tower-of-darkness" }] },
        { id: "10191", name: "urshifu", evolution_details: [{ trigger: "tower-of-waters" }] }
      ]
    ]
  },
  "10226": { //urshifu single strike gmax
    path: [
      { id: "891", name: "kubfu", trigger: null },
      [
        { id: "892", name: "urshifu", evolution_details: [{ trigger: "tower-of-darkness" }], evolves_to: [{ id: "10226", name: "urshifu-single-strike-pose", evolution_details: [{ trigger: "battle" }] }] },
        { id: "10191", name: "urshifu", evolution_details: [{ trigger: "tower-of-waters" }], evolves_to: [{ id: "10227", name: "urshifu-rapid-strike-pose", evolution_details: [{ trigger: "battle" }] }] }
      ]
    ]
  },
  "10227": { //urshifu rapid strike gmax
    path: [
      { id: "891", name: "kubfu", trigger: null },
      [
        { id: "892", name: "urshifu", evolution_details: [{ trigger: "tower-of-darkness" }], evolves_to: [{ id: "10226", name: "urshifu-single-strike-pose", evolution_details: [{ trigger: "battle" }] }] },
        { id: "10191", name: "urshifu", evolution_details: [{ trigger: "tower-of-waters" }], evolves_to: [{ id: "10227", name: "urshifu-rapid-strike-pose", evolution_details: [{ trigger: "battle" }] }] }
      ]
    ]
  },
  "10224": { //copperajah gmax
    path: [
      { id: "878", name: "cufant", trigger: null },
      { id: "879", name: "copperajah", evolution_details: [{ trigger: "level-up", min_level: 34 }] },
      { id: "10224", name: "copperajah-gmax", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10303": { //falinks mega
    path: [
      { id: "870", name: "falinks", trigger: null },
      { id: "10303", name: "falinks-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10223": { //alcremie gmax
    path: [
      { id: "868", name: "milcery", trigger: null },
      { id: "869", name: "alcremie", evolution_details: [{ trigger: "spin", held_item: "sweet-item" }] },
      { id: "10223", name: "alcremie-gmax", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10325": { //baxcalibur mega
    path: [
      { id: "996", name: "frigibax", trigger: null },
      { id: "997", name: "arctibax", evolution_details: [{ trigger: "level-up", min_level: 35 }] },
      { id: "998", name: "baxcalibur", evolution_details: [{ trigger: "level-up", min_level: 54 }] },
      { id: "10325", name: "baxcalibur-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10321": { //glimmora mega
    path: [
      { id: "969", name: "glimmet", trigger: null },
      { id: "970", name: "glimmora", evolution_details: [{ trigger: "level-up", min_level: 35 }] },
      { id: "10321", name: "glimmora-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10322": { //tatsugiri curly mega
    path: [
      { id: "978", name: "tatsugiri-curly", trigger: null },
      { id: "10322", name: "tatsugiri-curly-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10323": { //tatsugiri droopy mega
    path: [
      { id: "10258", name: "tatsugiri-droopy", trigger: null },
      { id: "10323", name: "tatsugiri-droopy-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10324": { //tatsugiri stretchy mega
    path: [
      { id: "10259", name: "tatsugiri-stretchy", trigger: null },
      { id: "10324", name: "tatsugiri-stretchy-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10320": { //scovillain mega
    path: [
      { id: "951", name: "capsakid", trigger: null },
      { id: "952", name: "scovillain", evolution_details: [{ trigger: "use-item", item: "fire-stone" }] },
      { id: "10320", name: "scovillain-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10222": { //grimmsnarl mega
    path: [
      { id: "859", name: "impidimp", trigger: null },
      { id: "860", name: "morgrem", evolution_details: [{ trigger: "level-up", min_level: 32 }] },
      { id: "861", name: "grimmsnarl", evolution_details: [{ trigger: "level-up", min_level: 42 }] },
      { id: "10222", name: "grimmsnarl-gmax", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10221": { //hatterene mega
    path: [
      { id: "856", name: "hatenna", trigger: null },
      { id: "857", name: "hattrem", evolution_details: [{ trigger: "level-up", min_level: 32 }] },
      { id: "858", name: "hatterene", evolution_details: [{ trigger: "level-up", min_level: 42 }] },
      { id: "10221", name: "hatterene-gmax", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10220": { //hatterene mega
    path: [
      { id: "850", name: "sizzlipede", trigger: null },
      { id: "851", name: "centiskorch", evolution_details: [{ trigger: "level-up", min_level: 28 }] },
      { id: "10220", name: "centiskorch-gmax", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "848": { //toxel
    path: [
      { id: "848", name: "toxel", trigger: null },[
        { id: "849", name: "toxtricity", evolution_details: [{ trigger: "level-up", min_level: 30 }] },
        { id: "10184", name: "toxtricity", evolution_details: [{ trigger: "level-up", min_level: 30 }] }
      ]
    ]
  },
  "849": { //toxtricity amped
    path: [
      { id: "848", name: "toxel", trigger: null },[
        { id: "849", name: "toxtricity", evolution_details: [{ trigger: "level-up", min_level: 30 }] },
        { id: "10184", name: "toxtricity", evolution_details: [{ trigger: "level-up", min_level: 30 }] }
      ]
    ]
  },
  "10184": { //toxtricity low key
    path: [
      { id: "848", name: "toxel", trigger: null },[
        { id: "849", name: "toxtricity", evolution_details: [{ trigger: "level-up", min_level: 30 }] },
        { id: "10184", name: "toxtricity", evolution_details: [{ trigger: "level-up", min_level: 30 }] }
      ]
    ]
  },
  "10228": { //toxtricity low key gmax
    path: [
      { id: "848", name: "toxel", trigger: null },[
        { id: "849", name: "toxtricity", evolution_details: [{ trigger: "level-up", min_level: 30 }] },
        { id: "10184", name: "toxtricity", evolution_details: [{ trigger: "battle" }], evolves_to: [{id: "10228", name: "toxtricity-low-key-gmax", evolution_details: [{trigger: "battle"}] }] }
      ]
    ]
  },
  "10219": { //toxtricity amped gmax
    path: [
      { id: "848", name: "toxel", trigger: null },[
        { id: "849", name: "toxtricity", evolution_details: [{ trigger: "level-up", min_level: 30 }], evolves_to: [{id: "10219", name: "toxtricity-amped-gmax", evolution_details: [{trigger: "battle"}] }] },
        { id: "10184", name: "toxtricity", evolution_details: [{ trigger: "battle" }] }
      ]
    ]
  },
  "843": { //silicobra
    path: [
      { id: "843", name: "silicobra", trigger: null },
      { id: "844", name: "sandaconda", evolution_details: [{ trigger: "level-up", min_level: 36 }] }
    ]
  },
  "844": { //sandaconda
    path: [
      { id: "843", name: "silicobra", trigger: null },
      { id: "844", name: "sandaconda", evolution_details: [{ trigger: "level-up", min_level: 36 }] }
    ]
  },
  "10218": { //sandaconda gmax
    path: [
      { id: "843", name: "silicobra", trigger: null },
      { id: "844", name: "sandaconda", evolution_details: [{ trigger: "level-up", min_level: 36 }] },
      { id: "10218", name: "sandaconda-gmax", evolution_details: [{ trigger: "battle" }]}
    ]
  },
  "10215": { //coalossal gmax
    path: [
      { id: "837", name: "rolycoly", trigger: null },
      { id: "838", name: "carkol", evolution_details: [{ trigger: "level-up", min_level: 18 }] },
      { id: "839", name: "coalossal", evolution_details: [{ trigger: "level-up", min_level: 34 }] },
      { id: "10215", name: "coalossal-gmax", evolution_details: [{ trigger: "battle" }]}
    ]
  },
  "10214": { //drednaw gmax
    path: [
      { id: "833", name: "chewtle", trigger: null },
      { id: "834", name: "drednaw", evolution_details: [{ trigger: "level-up", min_level: 22 }] },
      { id: "10214", name: "drednaw-gmax", evolution_details: [{ trigger: "battle" }]}
    ]
  },
  "10213": { //orbeetle gmax
    path: [
      { id: "824", name: "blipbug", trigger: null },
      { id: "825", name: "dottler", evolution_details: [{ trigger: "level-up", min_level: 10 }] },
      { id: "826", name: "orbeetle", evolution_details: [{ trigger: "level-up", min_level: 30 }] },
      { id: "10213", name: "orbeetle-gmax", evolution_details: [{ trigger: "battle" }]}
    ]
  },
  "10212": { //orbeetle gmax
    path: [
      { id: "821", name: "rookidee", trigger: null },
      { id: "822", name: "corvisquire", evolution_details: [{ trigger: "level-up", min_level: 18 }] },
      { id: "823", name: "corviknight", evolution_details: [{ trigger: "level-up", min_level: 38 }] },
      { id: "10212", name: "corviknight-gmax", evolution_details: [{ trigger: "battle" }]}
    ]
  },
  "10211": { //inteleon gmax
    path: [
      { id: "816", name: "sobble", trigger: null },
      { id: "817", name: "drizzile", evolution_details: [{ trigger: "level-up", min_level: 16 }] },
      { id: "818", name: "inteleon", evolution_details: [{ trigger: "level-up", min_level: 35 }] },
      { id: "10211", name: "inteleon-gmax", evolution_details: [{ trigger: "battle" }]}
    ]
  },
  "10210": { //cinderace gmax
    path: [
      { id: "813", name: "scorbunny", trigger: null },
      { id: "814", name: "raboot", evolution_details: [{ trigger: "level-up", min_level: 16 }] },
      { id: "815", name: "cinderace", evolution_details: [{ trigger: "level-up", min_level: 35 }] },
      { id: "10210", name: "cinderace-gmax", evolution_details: [{ trigger: "battle" }]}
    ]
  },
  "10209": { //rillaboom gmax
    path: [
      { id: "810", name: "grookey", trigger: null },
      { id: "811", name: "thwackey", evolution_details: [{ trigger: "level-up", min_level: 16 }] },
      { id: "812", name: "rillaboom", evolution_details: [{ trigger: "level-up", min_level: 35 }] },
      { id: "10209", name: "rillaboom-gmax", evolution_details: [{ trigger: "battle" }]}
    ]
  },
  "10319": { //zeraora mega
    path: [
      { id: "807", name: "zeraora", trigger: null },
      { id: "10319", name: "zeraora-mega", evolution_details: [{ trigger: "battle" }]}
    ]
  },
  "10317": { //magearna mega
    path: [
      { id: "801", name: "magearna", trigger: null },
      { id: "10317", name: "magearna-mega", evolution_details: [{ trigger: "battle" }]}
    ]
  },
  "10302": { //drampa mega
    path: [
      { id: "780", name: "drampa", trigger: null },
      { id: "10302", name: "drampa-mega", evolution_details: [{ trigger: "battle" }]}
    ]
  },
  "10316": { //golisopod mega
    path: [
      { id: "767", name: "wimpod", trigger: null },
      { id: "768", name: "golisopod", evolution_details: [{ trigger: "level-up", min_level: 30 }] },
      { id: "10316", name: "golisopod-mega", evolution_details: [{ trigger: "battle" }]}
    ]
  },
  "10075": { //diancie mega
    path: [
      { id: "719", name: "diancie", trigger: null },
      { id: "10075", name: "diancie-mega", evolution_details: [{ trigger: "battle" }]}
    ]
  },
  "10301": { //zygarde mega
    path: [
      { id: "10120", name: "zygarde", trigger: null },
      { id: "10301", name: "zygarde-mega", evolution_details: [{ trigger: "battle" }]}
    ]
  },
  "10300": { //hawlucha mega
    path: [
      { id: "701", name: "hawlucha", trigger: null },
      { id: "10300", name: "hawlucha-mega", evolution_details: [{ trigger: "battle" }]}
    ]
  },
  "10299": { //dragalge mega
    path: [
      { id: "690", name: "skrelp", trigger: null },
      { id: "691", name: "dragalge", evolution_details: [{ trigger: "level-up", min_level: 48 }] },
      { id: "10299", name: "dragalge-mega", evolution_details: [{ trigger: "battle" }]}
    ]
  },
  "10298": { //barbaracle mega
    path: [
      { id: "688", name: "binacle", trigger: null },
      { id: "689", name: "barbaracle", evolution_details: [{ trigger: "level-up", min_level: 39 }] },
      { id: "10299", name: "barbaracle-mega", evolution_details: [{ trigger: "battle" }]}
    ]
  },
  "10297": { //malamar mega
    path: [
      { id: "686", name: "inkay", trigger: null },
      { id: "687", name: "malamar", evolution_details: [{ trigger: "level-up", min_level: 30, turn_upside_down: true }] },
      { id: "10297", name: "malamar-mega", evolution_details: [{ trigger: "battle" }]}
    ]
  },
  "10293": { //delphox mega
    path: [
      { id: "653", name: "fennekin", trigger: null },
      { id: "654", name: "braixen", evolution_details: [{ trigger: "level-up", min_level: 16 }] },
      { id: "655", name: "delphox", evolution_details: [{ trigger: "level-up", min_level: 36 }] },
      { id: "10293", name: "delphox-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10292": { //chesnaught mega
    path: [
      { id: "650", name: "chespin", trigger: null },
      { id: "651", name: "quilladin", evolution_details: [{ trigger: "level-up", min_level: 16 }] },
      { id: "652", name: "chesnaught", evolution_details: [{ trigger: "level-up", min_level: 36 }] },
      { id: "10292", name: "chesnaught-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10313": { //golurk mega
    path: [
      { id: "622", name: "golett", trigger: null },
      { id: "623", name: "golurk", evolution_details: [{ trigger: "level-up", min_level: 43 }] },
      { id: "10313", name: "golurk-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10291": { //chandelure mega
    path: [
      { id: "607", name: "litwick", trigger: null },
      { id: "608", name: "lampent", evolution_details: [{ trigger: "level-up", min_level: 41 }] },
      { id: "609", name: "chandelure", evolution_details: [{ trigger: "use-item", item: "dusk-stone" }] },
      { id: "10291", name: "chandelure-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10290": { //eelektross mega
    path: [
      { id: "602", name: "tynamo", trigger: null },
      { id: "603", name: "eelektrik", evolution_details: [{ trigger: "level-up", min_level: 39 }] },
      { id: "604", name: "eelektross", evolution_details: [{ trigger: "use-item", item: "thunder-stone" }] },
      { id: "10290", name: "eelektross-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10207": { //garbodor gmax
    path: [
      { id: "568", name: "trubbish", trigger: null },
      { id: "569", name: "garbodor", evolution_details: [{ trigger: "level-up", min_level: 36 }] },
      { id: "10207", name: "garbodor-gmax", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10289": { //scrafty mega
    path: [
      { id: "559", name: "scraggy", trigger: null },
      { id: "560", name: "scrafty", evolution_details: [{ trigger: "level-up", min_level: 39 }] },
      { id: "10289", name: "scrafty-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10288": { //scolipede mega
    path: [
      { id: "543", name: "venipede", trigger: null },
      { id: "544", name: "whirlipede", evolution_details: [{ trigger: "level-up", min_level: 22 }] },
      { id: "545", name: "scolipede", evolution_details: [{ trigger: "level-up", min_level: 30 }] },
      { id: "10289", name: "scolipede-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10069": { //audino mega
    path: [
      { id: "531", name: "audino", trigger: null },
      { id: "10069", name: "audino-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10287": { //excadrill mega
    path: [
      { id: "529", name: "drilbur", trigger: null },
      { id: "530", name: "excadrill", evolution_details: [{ trigger: "level-up", min_level: 31 }] },
      { id: "10287", name: "excadrill-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10286": { //emboar mega
    path: [
      { id: "498", name: "tepig", trigger: null },
      { id: "499", name: "pignite", evolution_details: [{ trigger: "level-up", min_level: 17 }] },
      { id: "500", name: "emboar", evolution_details: [{ trigger: "level-up", min_level: 36 }] },
      { id: "10286", name: "emboar-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10312": { //darkrai mega
    path: [
      { id: "491", name: "darkrai", trigger: null },
      { id: "10312", name: "darkrai-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10311": { //heatran mega
    path: [
      { id: "485", name: "heatran", trigger: null },
      { id: "10311", name: "heatran-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10074": { //froslass mega
    path: [
      { id: "361", name: "snorunt", trigger: null },[
      { id: "362", name: "glalie", evolution_details: [{ trigger: "level-up", min_level: 17 }], evolves_to: [{ id: "10074", name: "glalie-mega", evolution_details: [{ trigger: "battle" }] }] },
      { id: "478", name: "froslass", evolution_details: [{ trigger: "use-item", item: "dawn-stone", gender: 1 }] }      
      ]
    ]
  },
  "10285": { //froslass mega
    path: [
      { id: "361", name: "snorunt", trigger: null },[
      { id: "362", name: "glalie", evolution_details: [{ trigger: "level-up", min_level: 17 }] },
      { id: "478", name: "froslass", evolution_details: [{ trigger: "use-item", item: "dawn-stone", gender: 1 }], evolves_to: [{ id: "10285", name: "froslass-mega", evolution_details: [{ trigger: "battle" }] }] }      
      ]
    ]
  },
  "10051": { //gardevoir mega
    path: [
      { id: "280", name: "ralts", trigger: null },
      { id: "281", name: "kirlia", evolution_details: [{ trigger: "level-up", min_level: 20 }] },[
      { id: "282", name: "gardevoir", evolution_details: [{ trigger: "level-up", min_level: 30 }], evolves_to: [{ id: "10051", name: "gardevoir-mega", evolution_details: [{ trigger: "battle" }] }] },
      { id: "475", name: "gallade", evolution_details: [{ trigger: "use-item", item: "dawn-stone", gender: 2 }] }      
      ]
    ]
  },
  "10068": { //gallade mega
    path: [
      { id: "280", name: "ralts", trigger: null },
      { id: "281", name: "kirlia", evolution_details: [{ trigger: "level-up", min_level: 20 }] },[
      { id: "282", name: "gardevoir", evolution_details: [{ trigger: "level-up", min_level: 30 }] },
      { id: "475", name: "gallade", evolution_details: [{ trigger: "use-item", item: "dawn-stone", gender: 2 }], evolves_to: [{ id: "10068", name: "gallade-mega", evolution_details: [{ trigger: "battle" }] }] }      
      ]
    ]
  },
  "10060": { //abomasnow mega
    path: [
      { id: "459", name: "snover", trigger: null },
      { id: "460", name: "abomasnow", evolution_details: [{ trigger: "level-up", min_level: 40 }] },
      { id: "10060", name: "abomasnow-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10059": { //lucario mega
    path: [
      { id: "447", name: "riolu", trigger: null },
      { id: "448", name: "lucario", evolution_details: [{ trigger: "level-up", time_of_day: "day", min_happiness: 160 }] },
      { id: "10059", name: "lucario-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10310": { //lucario mega z
    path: [
      { id: "447", name: "riolu", trigger: null },
      { id: "448", name: "lucario", evolution_details: [{ trigger: "level-up", time_of_day: "day", min_happiness: 160 }] },
      { id: "10310", name: "lucario-mega-z", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10058": { //garchomp mega
    path: [
      { id: "443", name: "gible", trigger: null },
      { id: "444", name: "gabite", evolution_details: [{ trigger: "level-up", min_level: 24 }] },
      { id: "445", name: "garchomp", evolution_details: [{ trigger: "level-up", min_level: 48 }] },
      { id: "10058", name: "garchomp-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10309": { //garchomp mega z
    path: [
      { id: "443", name: "gible", trigger: null },
      { id: "444", name: "gabite", evolution_details: [{ trigger: "level-up", min_level: 24 }] },
      { id: "445", name: "garchomp", evolution_details: [{ trigger: "level-up", min_level: 48 }] },
      { id: "10309", name: "garchomp-mega-z", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10088": { //lopunny mega
    path: [
      { id: "427", name: "buneary", trigger: null },
      { id: "428", name: "lopunny", evolution_details: [{ trigger: "level-up", min_happiness: 160 }] },
      { id: "10088", name: "lopunny-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10308": { //staraptor mega
    path: [
      { id: "396", name: "starly", trigger: null },
      { id: "397", name: "staravia", evolution_details: [{ trigger: "level-up", min_level: 14 }] },
      { id: "398", name: "staraptor", evolution_details: [{ trigger: "level-up", min_level: 34 }] },
      { id: "10308", name: "staraptor-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10079": { //rayquaza mega
    path: [
      { id: "384", name: "rayquaza", trigger: null },
      { id: "10079", name: "rayquaza-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10063": { //latios mega
    path: [
      { id: "381", name: "latios", trigger: null },
      { id: "10063", name: "latios-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10062": { //latias mega
    path: [
      { id: "380", name: "latias", trigger: null },
      { id: "10062", name: "latias-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10076": { //metagross mega
    path: [
      { id: "374", name: "beldum", trigger: null },
      { id: "375", name: "metang", evolution_details: [{ trigger: "level-up", min_level: 20 }] },
      { id: "376", name: "metagross", evolution_details: [{ trigger: "level-up", min_level: 45 }] },
      { id: "10076", name: "metagross-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10089": { //salamence mega
    path: [
      { id: "371", name: "bagon", trigger: null },
      { id: "372", name: "shelgon", evolution_details: [{ trigger: "level-up", min_level: 30 }] },
      { id: "373", name: "salamence", evolution_details: [{ trigger: "level-up", min_level: 50 }] },
      { id: "10089", name: "salamence-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10057": { //lucario mega
    path: [
      { id: "359", name: "absol", trigger: null },
      { id: "10057", name: "absol-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10307": { //lucario mega z
    path: [
      { id: "359", name: "absol", trigger: null },
      { id: "10307", name: "absol-mega-z", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10306": { //salamence mega
    path: [
      { id: "433", name: "chingling", trigger: null },
      { id: "358", name: "chimecho", evolution_details: [{ trigger: "level-up", time_of_day: "night", min_happiness: 220 }] },
      { id: "10306", name: "chimecho-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10056": { //banette mega
    path: [
      { id: "353", name: "shuppet", trigger: null },
      { id: "354", name: "banette", evolution_details: [{ trigger: "level-up", min_level: 37 }] },
      { id: "10056", name: "banette-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10067": { //altaria mega
    path: [
      { id: "333", name: "swablu", trigger: null },
      { id: "334", name: "altaria", evolution_details: [{ trigger: "level-up", min_level: 35 }] },
      { id: "10067", name: "altaria-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10087": { //camerupt mega
    path: [
      { id: "322", name: "numel", trigger: null },
      { id: "323", name: "camerupt", evolution_details: [{ trigger: "level-up", min_level: 33 }] },
      { id: "10087", name: "camerupt-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10070": { //sharpedo mega
    path: [
      { id: "322", name: "carvanha", trigger: null },
      { id: "323", name: "sharpedo", evolution_details: [{ trigger: "level-up", min_level: 30 }] },
      { id: "10070", name: "sharpedo-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10055": { //sharpedo mega
    path: [
      { id: "309", name: "electrike", trigger: null },
      { id: "310", name: "manectric", evolution_details: [{ trigger: "level-up", min_level: 26 }] },
      { id: "10055", name: "manectric-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10054": { //medicham mega
    path: [
      { id: "307", name: "meditite", trigger: null },
      { id: "308", name: "medicham", evolution_details: [{ trigger: "level-up", min_level: 37 }] },
      { id: "10054", name: "medicham-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10053": { //aggron mega
    path: [
      { id: "304", name: "aron", trigger: null },
      { id: "305", name: "lairon", evolution_details: [{ trigger: "level-up", min_level: 32 }] },
      { id: "306", name: "aggron", evolution_details: [{ trigger: "level-up", min_level: 42 }] },
      { id: "10053", name: "aggron-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10052": { //mawile mega
    path: [
      { id: "303", name: "mawile", trigger: null },
      { id: "10052", name: "mawile-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10066": { //sableye mega
    path: [
      { id: "302", name: "sableye", trigger: null },
      { id: "10066", name: "sableye-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10064": { //swampert mega
    path: [
      { id: "258", name: "mudkip", trigger: null },
      { id: "259", name: "marshtomp", evolution_details: [{ trigger: "level-up", min_level: 16 }] },
      { id: "260", name: "swampert", evolution_details: [{ trigger: "level-up", min_level: 36 }] },
      { id: "10064", name: "swampert-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10050": { //blaziken mega
    path: [
      { id: "255", name: "torchic", trigger: null },
      { id: "256", name: "combusken", evolution_details: [{ trigger: "level-up", min_level: 16 }] },
      { id: "257", name: "blaziken", evolution_details: [{ trigger: "level-up", min_level: 36 }] },
      { id: "10050", name: "blaziken-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10065": { //sceptile mega
    path: [
      { id: "252", name: "treecko", trigger: null },
      { id: "253", name: "grovyle", evolution_details: [{ trigger: "level-up", min_level: 16 }] },
      { id: "254", name: "sceptile", evolution_details: [{ trigger: "level-up", min_level: 36 }] },
      { id: "10065", name: "sceptile-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10049": { //tyranitar mega
    path: [
      { id: "246", name: "larvitar", trigger: null },
      { id: "247", name: "pupitar", evolution_details: [{ trigger: "level-up", min_level: 30 }] },
      { id: "248", name: "tyranitar", evolution_details: [{ trigger: "level-up", min_level: 55 }] },
      { id: "10049", name: "tyranitar-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10048": { //houndoom mega
    path: [
      { id: "228", name: "houndour", trigger: null },
      { id: "229", name: "houndoom", evolution_details: [{ trigger: "level-up", min_level: 24 }] },
      { id: "10048", name: "houndoom-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10284": { //skarmory mega
    path: [
      { id: "227", name: "skarmory", trigger: null },
      { id: "10284", name: "skarmory-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10047": { //heracross mega
    path: [
      { id: "214", name: "heracross", trigger: null },
      { id: "10047", name: "heracross-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10046": { //scizor mega
    path: [
      { id: "123", name: "scyther", trigger: null },[
      { id: "212", name: "scizor", evolution_details: [{ trigger: "trade", held_item: "metal-coat" }], evolves_to: [{id: "10046", name: "scizor-mega", evolution_details: [{ trigger: "battle" }]}] },
      { id: "900", name: "kleavor", evolution_details: [{ trigger: "use-item", item: "black-augurite" }] }
      ]
    ]
  },
  "10072": { //steelix mega
    path: [
      { id: "95", name: "onix", trigger: null },
      { id: "208", name: "steelix", evolution_details: [{ trigger: "trade", held_item: "metal-coat" }] },
      { id: "10072", name: "steelix-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10045": { //ampharos mega
    path: [
      { id: "179", name: "mareep", trigger: null },
      { id: "180", name: "flaaffy", evolution_details: [{ trigger: "level-up", min_level: 15 }] },
      { id: "181", name: "ampharos", evolution_details: [{ trigger: "level-up", min_level: 30 }] },
      { id: "10045", name: "ampharos-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10283": { //feraligatr mega
    path: [
      { id: "158", name: "totodile", trigger: null },
      { id: "159", name: "croconaw", evolution_details: [{ trigger: "level-up", min_level: 18 }] },
      { id: "160", name: "feraligatr", evolution_details: [{ trigger: "level-up", min_level: 30 }] },
      { id: "10283", name: "feraligatr-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10282": { //meganium mega
    path: [
      { id: "152", name: "chikorita", trigger: null },
      { id: "153", name: "bayleef", evolution_details: [{ trigger: "level-up", min_level: 16 }] },
      { id: "154", name: "meganium", evolution_details: [{ trigger: "level-up", min_level: 32 }] },
      { id: "10282", name: "meganium-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10043": { //mewtwo mega x
    path: [
      { id: "150", name: "mewtwo", trigger: null },
      { id: "10043", name: "mewtwo-mega-x", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10044": { //mewtwo mega y
    path: [
      { id: "150", name: "mewtwo", trigger: null },
      { id: "10044", name: "mewtwo-mega-y", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10281": { //dragonite mega
    path: [
      { id: "147", name: "dratini", trigger: null },
      { id: "148", name: "dragonair", evolution_details: [{ trigger: "level-up", min_level: 30 }] },
      { id: "149", name: "dragonite", evolution_details: [{ trigger: "level-up", min_level: 55 }] },
      { id: "10281", name: "dragonite-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10206": { //snorlax gmax
    path: [
      { id: "446", name: "munchlax", trigger: null },
      { id: "143", name: "snorlax", evolution_details: [{ trigger: "level-up", min_happiness: 160 }] },
      { id: "10206", name: "snorlax-gmax", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10042": { //aerodactyl mega
    path: [
      { id: "142", name: "aerodactyl", trigger: null },
      { id: "10042", name: "aerodactyl-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10204": { //lapras gmax
    path: [
      { id: "131", name: "lapras", trigger: null },
      { id: "10204", name: "lapras-gmax", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10041": { //gyarados mega
    path: [
      { id: "129", name: "magikarp", trigger: null },
      { id: "130", name: "gyarados", evolution_details: [{ trigger: "level-up", min_level: 20 }] },
      { id: "10041", name: "gyarados-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10040": { //pinsir mega
    path: [
      { id: "127", name: "pinsir", trigger: null },
      { id: "10040", name: "pinsir-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10280": { //starmie mega
    path: [
      { id: "120", name: "staryu", trigger: null },
      { id: "121", name: "starmie", evolution_details: [{ trigger: "use-item", item: "water-stone" }] },
      { id: "10280", name: "starmie-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10039": { //kangaskhan mega
    path: [
      { id: "115", name: "kangaskhan", trigger: null },
      { id: "10039", name: "kangaskhan-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10203": { //kingler gmax
    path: [
      { id: "98", name: "krabby", trigger: null },
      { id: "99", name: "kingler", evolution_details: [{ trigger: "level-up", min_level: 28 }] },
      { id: "10203", name: "kingler-gmax", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10038": { //gengar mega
    path: [
      { id: "92", name: "gastly", trigger: null },
      { id: "93", name: "haunter", evolution_details: [{ trigger: "level-up", min_level: 25 }] },
      { id: "94", name: "gengar", evolution_details: [{ trigger: "trade" }] },
      { id: "10038", name: "gengar-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10202": { //gengar gmax
    path: [
      { id: "92", name: "gastly", trigger: null },
      { id: "93", name: "haunter", evolution_details: [{ trigger: "level-up", min_level: 25 }] },
      { id: "94", name: "gengar", evolution_details: [{ trigger: "trade" }] },
      { id: "10202", name: "gengar-gmax", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10279": { //victreebel mega
    path: [
      { id: "69", name: "bellsprout", trigger: null },
      { id: "70", name: "weepinbell", evolution_details: [{ trigger: "level-up", min_level: 21 }] },
      { id: "71", name: "victreebel", evolution_details: [{ trigger: "use-item", item: "leaf-stone" }] },
      { id: "10279", name: "victreebel-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10201": { //machamp gmax
    path: [
      { id: "66", name: "machop", trigger: null },
      { id: "67", name: "machoke", evolution_details: [{ trigger: "level-up", min_level: 28 }] },
      { id: "68", name: "machamp", evolution_details: [{ trigger: "trade" }] },
      { id: "10201", name: "machamp-gmax", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10037": { //alakazam gmax
    path: [
      { id: "63", name: "abra", trigger: null },
      { id: "64", name: "kadabra", evolution_details: [{ trigger: "level-up", min_level: 16 }] },
      { id: "65", name: "alakazam", evolution_details: [{ trigger: "trade" }] },
      { id: "10037", name: "alakazam-gmax", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10278": { //clefable mega
    path: [
      { id: "173", name: "cleffa", trigger: null },
      { id: "35", name: "clefairy", evolution_details: [{ trigger: "level-up", min_happiness: 160 }] },
      { id: "36", name: "clefable", evolution_details: [{ trigger: "use-item", item: "moon-stone" }] },
      { id: "10278", name: "clefable-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10073": { //pidgeot mega
    path: [
      { id: "16", name: "pidgey", trigger: null },
      { id: "17", name: "pidgeotto", evolution_details: [{ trigger: "level-up", min_level: 18 }] },
      { id: "18", name: "pidgeot", evolution_details: [{ trigger: "level-up", min_level: 36 }] },
      { id: "10073", name: "pidgeot-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10090": { //beedrill mega
    path: [
      { id: "13", name: "weedle", trigger: null },
      { id: "14", name: "kakuna", evolution_details: [{ trigger: "level-up", min_level: 7 }] },
      { id: "15", name: "beedrill", evolution_details: [{ trigger: "level-up", min_level: 10 }] },
      { id: "10090", name: "beedrill-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10198": { //butterfree gmax
    path: [
      { id: "10", name: "caterpie", trigger: null },
      { id: "11", name: "metapod", evolution_details: [{ trigger: "level-up", min_level: 7 }] },
      { id: "12", name: "butterfree", evolution_details: [{ trigger: "level-up", min_level: 10 }] },
      { id: "10198", name: "butterfree-gmax", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10036": { //blastoise mega
    path: [
      { id: "7", name: "squirtle", trigger: null },
      { id: "8", name: "wartortle", evolution_details: [{ trigger: "level-up", min_level: 16 }] },
      { id: "9", name: "blastoise", evolution_details: [{ trigger: "level-up", min_level: 36 }] },
      { id: "10036", name: "blastoise-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10197": { //blastoise gmax
    path: [
      { id: "7", name: "squirtle", trigger: null },
      { id: "8", name: "wartortle", evolution_details: [{ trigger: "level-up", min_level: 16 }] },
      { id: "9", name: "blastoise", evolution_details: [{ trigger: "level-up", min_level: 36 }] },
      { id: "10197", name: "blastoise-gmax", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10033": { //venusaur mega
    path: [
      { id: "1", name: "bulbasaur", trigger: null },
      { id: "2", name: "ivysaur", evolution_details: [{ trigger: "level-up", min_level: 16 }] },
      { id: "3", name: "venusaur", evolution_details: [{ trigger: "level-up", min_level: 32 }] },
      { id: "10033", name: "venusaur-mega", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10195": { //venusaur gmax
    path: [
      { id: "1", name: "bulbasaur", trigger: null },
      { id: "2", name: "ivysaur", evolution_details: [{ trigger: "level-up", min_level: 16 }] },
      { id: "3", name: "venusaur", evolution_details: [{ trigger: "level-up", min_level: 32 }] },
      { id: "10195", name: "venusaur-gmax", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10034": { //charizard mega x
    path: [
      { id: "4", name: "charmander", trigger: null },
      { id: "5", name: "charmeleon", evolution_details: [{ trigger: "level-up", min_level: 16 }] },
      { id: "6", name: "charizard", evolution_details: [{ trigger: "level-up", min_level: 36 }] },
      { id: "10034", name: "charizard-mega-x", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10035": { //charizard mega y
    path: [
      { id: "4", name: "charmander", trigger: null },
      { id: "5", name: "charmeleon", evolution_details: [{ trigger: "level-up", min_level: 16 }] },
      { id: "6", name: "charizard", evolution_details: [{ trigger: "level-up", min_level: 36 }] },
      { id: "10035", name: "charizard-mega-y", evolution_details: [{ trigger: "battle" }] }
    ]
  },
  "10196": { //charizard gmax
    path: [
      { id: "4", name: "charmander", trigger: null },
      { id: "5", name: "charmeleon", evolution_details: [{ trigger: "level-up", min_level: 16 }] },
      { id: "6", name: "charizard", evolution_details: [{ trigger: "level-up", min_level: 36 }] },
      { id: "10196", name: "charizard-gmax", evolution_details: [{ trigger: "battle" }] }
    ]
  }
}