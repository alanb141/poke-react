import React from 'react'

function Search({change}) {
	return (
		<>
			<label></label>
			<input type="text" className="search" onChange={change} title="searchBox" placeholder="Search that Pokemon"/>
		</>
	);
}
  
export default Search;