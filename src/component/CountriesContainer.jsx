import { TailSpin } from "react-loader-spinner";
import SearchInput from "./SearchInput";
import Select from "./Select";
import CountryCard from "./CountryCard";
import { useEffect, useState } from "react";
import axios from "axios";

function CountriesContainer() {
	const [countries, setCountries] = useState([]);
	const [filteredCountries, setFilteredCountries] = useState([]);
	const [regions, setRegions] = useState([]);
	const [loading, setLoading] = useState(false);

	// fetch country api
	const fetchData = async () => {
		try {
			setLoading(true);
			const [responceAll, responceRegions] = await Promise.all([
				axios.get("https://restcountries.com/v3.1/all"),
				axios.get("https://restcountries.com/v3.1/all?fields=region"),
			]);
			const data = responceAll.data;
			let regions = responceRegions.data.map((region) => region.region);
			setCountries(data);
			setFilteredCountries(data);

			// here i turn it to Set in order to get a unique values
			// in then return to array in order to map over it
			regions = Array.from(new Set(regions));
			setRegions(regions);
		} catch (err) {
			console.error("fetch Countries error: ", err);
		} finally {
			setLoading(false);
		}
	};

	// the search functionality
	const handleSearch = (txt) => {
		if (txt) {
			const tmp = countries.filter((val) =>
				val.name.common
					.toLowerCase()
					.toLowerCase()
					.toLowerCase()
					.includes(txt.toLowerCase())
			);
			setFilteredCountries(tmp)
		}else{
			setFilteredCountries(countries)
		}
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div className="">
			<div className="filters px-12 py-5 flex justify-between items-center">
				<SearchInput handleSearch={handleSearch} />
				<Select regions={regions} />
			</div>
			<div className="countries ">
				{loading ? (
					<div className="flex flex-col items-center justify-center">
						<TailSpin
							color="red"
							radius={"8px"}
							strokeWidth={5}
							className=""
						/>
						<p>...loading</p>
					</div>
				) : (
					<div className="flex gap-10 flex-wrap justify-center items-center">
						{filteredCountries.map((country, index) => (
							<CountryCard key={index} country={country} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default CountriesContainer;
