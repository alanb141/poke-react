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
  "172" :{ //johto pichu
    path: [
      { id: "172", name: "pichu", evolution_details: [] },
      { id: "25", name: "pikachu", evolution_details: [{ trigger: "level-up", min_happiness: 220 }] },
      { id: "26", name: "raichu", evolution_details: [{ trigger: "use-item", item: "thunder-stone" }] }
    ]
  },
  "25" :{ //kanto pikachu
    path: [
      { id: "172", name: "pichu", evolution_details: [] },
      { id: "25", name: "pikachu", evolution_details: [{ trigger: "level-up", min_happiness: 220 }] },
      { id: "26", name: "raichu", evolution_details: [{ trigger: "use-item", item: "thunder-stone" }] }
    ]
  },
  "26" :{ //kanto raichu 
    path: [
      { id: "172", name: "pichu", evolution_details: [] },
      { id: "25", name: "pikachu", evolution_details: [{ trigger: "level-up", min_happiness: 220 }] },
      { id: "26", name: "raichu", evolution_details: [{ trigger: "use-item", item: "thunder-stone" }] }
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
  "1018": { //archaludon
    path: [
      { id: "884", name: "duraludon", trigger: null },
      { id: "1018", name: "archaludon", evolution_details: [{ trigger: "use-item", item: "metal-alloy" }] }
    ]
  }
}