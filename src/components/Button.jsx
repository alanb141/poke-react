import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../style/Button.scss"

function Button({data}) {
    const excludedNames = ['deoxys-normal', 'wormadam-plant', 'giratina-altered', 'shaymin-land', 'basculin-red-striped', 'darmanitan-standard', 'tornadus-incarnate', 'thundurus-incarnate', 'landorus-incarnate', 'keldeo-ordinary', 'meloetta-aria', 'meowstic-male', 'aegislash-shield', 'pumpkaboo-average', 'gourgeist-average', 'zygarde-50', 'oricorio-baile', 'lycanroc-midday', 'wishiwashi-solo', 'minior-red-meteor', 'mimikyu-disguised', 'toxtricity-amped', 'eiscue-ice', 'indeedee-male', 'morpeko-full-belly', 'urshifu-single-strike', 'basculegion-male', 'enamorus-incarnate', '']
    

    if (data.length > 0){
        return (
            <div className="cardList">
                {
                    data.map((items, index) => {
                        const fullRand = items.url.split("/");
                        let name = items.name;
                        if (excludedNames.includes(items.name)) {
                            name = items.name.slice(0, items.name.indexOf('-'));
                        }
                        else if (items.name === "nidoran-f") {
                            name = items.name.slice(0, items.name.indexOf('-'))+String.fromCodePoint(9792);
                        }else  if (items.name === "nidoran-m") {
                            name = items.name.slice(0, items.name.indexOf('-'))+String.fromCodePoint(9794);
                        }
    
                        if (fullRand[6] < 10000){
                            const key = index+1
                            const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+fullRand[6]+".png";
                            return <div className="card" key={index} name={name} pokeno={key} >
                                {/* <a href={items.url}> */}
                                    <p>#{fullRand[6]}: <span>{name[0].toUpperCase()+name.slice(1)}</span></p>
                                    <LazyLoadImage 
                                    src={url}
                                    width={144} height={144}
                                    alt={name}
                                    />
                                {/* </a> */}
                            </div>
                        }
                    })
                }
            </div>
        );
    } else {
        return (
            <div className="noResults"><span>No results,</span><span>Please check your spelling or try again</span></div>
        )
    }
  }
  
  export default Button;