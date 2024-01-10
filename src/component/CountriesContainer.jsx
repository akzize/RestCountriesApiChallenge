import { TailSpin } from "react-loader-spinner";
import SearchInput from "./SearchInput";
import Select from "./Select";
import CountryCard from "./CountryCard";
import { useEffect, useState } from "react";
import axios from "axios";

function CountriesContainer() {
	const [countries, setCountries] = useState([]);
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
			const regions = responceRegions.data.map((region) => region.region);
			setCountries(data);
			setRegions(new Set(regions));
		} catch (err) {
			console.error("fetch Countries error: ", err);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div className="">
			<div className="filters px-12 py-5 flex justify-between items-center">
				<SearchInput />
				<Select regions={regions} />
			</div>
			<div className="countries ">
				{loading ? (
					<TailSpin
						color="red"
						radius={"8px"}
						strokeWidth={5}
						className=""
					/>
				) : (
					<div className="flex gap-10 flex-wrap justify-center items-center">
						{countries.map((country, index) => (
							<CountryCard key={index} country={country} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default CountriesContainer;
