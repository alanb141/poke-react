import React, { useState } from 'react'
import Button from"../components/Button"
import Search from"../components/Search"

function Body({data}) {
	const [state, setState] = useState(data);
    let displayedContacts = data
    function searchHandler (event) {
        let search = event.target.value.toLowerCase()
        displayedContacts = data.filter((el) => {
            let pokeno = el.url.split("/");
            let searchValue = el.name.toLowerCase()+"|"+pokeno[6];
            return searchValue.indexOf(search) !== -1;
        })
        setState(displayedContacts)
      }
    return (
        <>
            <Search change={searchHandler} />
            <Button data={state} />
        </>
    );
}
  
export default Body;