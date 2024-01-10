import { Link } from "react-router-dom";

function CountryCard({ country }) {
	return (
		<Link to={`/country/${country.name.common}`}>
			<div className="country-card border rounded-md min-w-60 w-72 max-w-80">
				<div className="card_img w-full h-40 border">
					<img
						src={country.flags.png}
						alt=""
						className="object-cover h-full w-full"
					/>
				</div>
				<div className="card_text text-start py-2 px-2">
					<h1 className="text-2xl font-bold py-2">
						{country.name.common} {country.flag}
					</h1>
					<p>
						<span className="font-semibold">Region: </span>
						{country.region}
					</p>
					<p>
						<span className="font-semibold">Capital: </span>
						{country.capital}
					</p>
					<p className="">
						<span className="font-semibold">Population: </span>
						{country.population}
					</p>
				</div>
			</div>
		</Link>
	);
}

export default CountryCard;
