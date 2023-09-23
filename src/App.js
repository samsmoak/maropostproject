import React from "react";
import MainLayout from "./components/MainLayout";
import { BrowserRouter } from "react-router-dom";

function App() {
	return (
		<div>
			<BrowserRouter>
				<MainLayout />
			</BrowserRouter>
		</div>
	);
}

export default App;
