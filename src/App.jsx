// icons

import Header from "./component/Header";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<div className="relative bg-white dark:bg-gray-950 dark:text-slate-200 min-h-full">
			<Header />
			<main className="mx-auto pt-20 min-h-full">
				<Outlet />
			</main>
			{/* <CountryCard /> */}
		</div>
	);
}

export default App;
