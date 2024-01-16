import axios from "axios";
import { useEffect, useState } from "react";

function Select({ regions, setFilteredCountries, countries }) {
	const [regionn, setRegion] = useState("");

	const handleChange = (e) => {
		console.log(e.target.value);
		const reg = e.target.value;
		setFilteredCountries(countries.filter((country) => country.region == reg))
		
	};

	return (
		<form action="">
			<select
				name=""
				id=""
				className="py-3 w-40 px-2 rounded-lg dark:bg-gray-700"
				onChange={handleChange}
			>
				<option value="0" selected disabled>
					select region
				</option>
				{regions.map((region, index) => (
					<option key={index} value={region}>
						{region}
					</option>
				))}
			</select>
		</form>
	);
}

export default Select;
