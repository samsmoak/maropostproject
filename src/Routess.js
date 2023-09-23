import React from "react";
import { useRoutes } from "react-router-dom";
import ResultPage from "./Pages/ResultPage/ResultPage";

function Routess() {
	const routes = useRoutes([
		{
			path: "/",
			element: <ResultPage />,
		},
	]);
	return routes;
}

export default Routess;
