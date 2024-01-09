import { useEffect, useState } from "react";
// icons
import { FaSearch } from "react-icons/fa";

import axios from "axios";

import CountryCard from "./component/CountryCard";
import Header from "./component/Header";
import SearchInput from "./component/SearchInput";
import Select from "./component/Select";
import { Loader } from "rsuite";
import { TailSpin } from "react-loader-spinner";

function App() {
	const [countries, setCountries] = useState([]);
	const [loading, setLoading] = useState(false);

	// fetch country api
	const fetchCountrie = async () => {
		try {
			setLoading(true);
			const responce = await axios.get(
				"https://restcountries.com/v3.1/all"
			);
			const data = responce.data;
			setCountries(data);
		} catch (err) {
			console.error("fetch Countries error: ", err);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchCountrie();
	}, []);

	return (
		<div className="relative ">
			<Header />
			<main className="mx-auto pt-20 ">
				<div className="filters px-12 py-5 flex justify-between items-center">
					<SearchInput />
					<Select />
				</div>
				<div className="countries ">
					{loading ? (
						<TailSpin color="red" radius={"8px"} strokeWidth={5} className=""/>
					) : (
						<div className="flex gap-10 flex-wrap justify-center items-center">
							{countries.map((country, index) => (
								<CountryCard key={index} country={country} />
							))}
						</div>
					)}
				</div>
			</main>
			{/* <CountryCard /> */}
		</div>
	);
}

export default App;
