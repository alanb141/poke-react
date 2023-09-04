import React, { useState } from 'react'
import Button from"../components/Button"
import Search from"../components/Search"
import Detail from"../components/Detail"

function Body({data, getPokemon}) {
	const [state, setState] = useState(data.results);
	const [page, setPage] = useState(true);
	const [url, setUrl] = useState("");
	const [test, setTest] = useState("");
    function searchHandler (event) {
        let search = event.target.value.toLowerCase(),
            displayedContacts = data.results.filter((el) => {
                let pokeno = el.url.split("/");
                let searchValue = el.name.toLowerCase()+"|"+pokeno[6];
                return searchValue.indexOf(search) !== -1;
            })
        setState(displayedContacts)
    }
    if (state === undefined && data.results !== undefined) {
        setState(data.results)
    } else {
        if (page) {
            return (
                <>
                    <Search change={searchHandler} />
                    <Button data={state} setPage={setPage} setUrl={setUrl} />
                </>
            );
        }else {
            return (
                <>
                    <Detail setUrl={setUrl} url={url} setPage={setPage} />
                </>
            );
        }
    }
}
  
export default Body;