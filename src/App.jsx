// icons

import Header from "./component/Header";
import { Outlet } from "react-router-dom";

function App() {
	

	return (
		<div className="relative ">
			<Header />
			<main className="mx-auto pt-20 ">
				<Outlet />
			</main>
			{/* <CountryCard /> */}
		</div>
	);
}

export default App;
