import { useState } from "react";
import { FaSearch } from "react-icons/fa";
function SearchInput({handleSearch}) {
	return (
		<div className="search relative">
			<div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
				<FaSearch class="w-4 h-4 text-gray-500 dark:text-gray-400" />
			</div>
			<input
				type="text"
				id="input-group-1"
				className="bg-gray-50 border border-gray-300 focus:outline-none text-gray-900 text-sm rounded-lg block ps-10 p-2.5 dark:bg-gray-700 dark:text-slate-300"
				placeholder="Search a country"
				// value={searchedValue}
				onChange={(e) => handleSearch(e.target.value)}
			></input>
		</div>
	);
}

export default SearchInput;
