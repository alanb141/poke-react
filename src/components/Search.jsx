import { useState, useRef } from 'react'

function Search({ change }) {
	const [searchValue, setSearchValue] = useState("");
	const inputRef = useRef(null);
	return (
		<div
			className="searchContainer">
			<input
				type="text"
				className="search"
				ref={inputRef}
				onChange={(event) => {
					setSearchValue(event.target.value);
					change(event);
				}}
				title="searchBox"
				placeholder="Search that Pokemon"
			/>

			{searchValue !== "" && (
				<div
					id="resetSearch"
					onClick={() => {
						setSearchValue("");
						change({ target: { value: "" } });
						inputRef.current.value = "";
					}}>X</div>
			)}
		</div>
	);
}

export default Search;