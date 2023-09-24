import React from "react";
import MainLayout from "./components/MainLayout";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
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
