import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";

function CountryInfo() {
	const [country, setCountry] = useState();

	const { countryName } = useParams();

	// fetch country data
	const getCountry = async () => {
		const response = await axios.get(
			`https://restcountries.com/v3.1/name/${countryName}?fullText=true`
		);
		const data = response.data;
		setCountry(data[0]);
	};

	useEffect(() => {
		getCountry();
	}, [countryName]);
	console.log("country ", country);
	return (
		<section className="h-2/3">
			<NavLink
				to={"/"}
				className="flex items-center content-center justify-center gap-2 bg-blue-800 px-3 py-2 text-white hover:bg-blue-950 w-fit my-10 ms-44 dark:bg-blue-950 dark:hover:bg-blue-800"
			>
				<FaArrowLeft /> Back
			</NavLink>
			{country && (
				<div className="flex justify-center content-stretch gap-20 flex-wrap">
					<div className="img h-64 ">
						<img
							src={country.flags.png}
							className="h-full"
							alt=""
						/>
					</div>
					<div className="txt">
						<h1 className="text-3xl py-3 font-bold">
							{country.name.common}
						</h1>
						<div className="flex gap-10 py-5">
							<div className="b1">
								<p>
									<span className="font-bold">
										Native Name:{" "}
									</span>
									{country.name.common}
								</p>
								<p>
									<span className="font-bold">
										population:{" "}
									</span>
									{country.population}
								</p>
								<p>
									<span className="font-bold">region: </span>
									{country.region}
								</p>
								<p>
									<span className="font-bold">
										sub region:{" "}
									</span>
									{country.subregion}
								</p>
								<p>
									<span className="font-bold">capital: </span>
									{country.capital}
								</p>
							</div>
							<div className="b2">
								<p>
									<span className="font-bold">
										top level domain :{" "}
									</span>
									{country.tld.join(", ")}
								</p>
								<p>
									<span className="font-bold">
										Currencies :{" "}
									</span>
									{/* {Object.values().join(", ")} */}
								</p>
								<p>
									<span className="font-bold">
										languages :{" "}
									</span>
									{Object.values(country.languages).map(
										(lang, index) => (
											<span key={index}>{lang} </span>
										)
									)}
								</p>
							</div>
						</div>
						<p>
							<span className="fw-bold ">Border countries: </span>
							{/* {Object.values(country.borders).map(
								(br, index) => (
									<span
										key={index}
										className="py-1 px-2 me-1 text-gray-600 border"
									>
										{br}
									</span>
								)
							)} */}
						</p>
					</div>
				</div>
			)}
		</section>
	);
}

export default CountryInfo;
