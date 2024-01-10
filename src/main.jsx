import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CountryInfo from "./component/CountryInfo.jsx";
import CountriesContainer from "./component/CountriesContainer.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
    
		children: [
      {
        path:'',
        element:<CountriesContainer />
      },
			{
				path: "/country/:countryName",
				element: <CountryInfo />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
