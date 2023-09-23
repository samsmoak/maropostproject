import React from "react";
import Navbar from "./Navbar";
import Routess from "../Routess";
import { BrowserRouter, useLocation } from "react-router-dom";
function MainLayout() {
	const location = useLocation();
	return (
		<div className=''>
			<Navbar />
			<div className='w-full h-full'>
				<Routess />
			</div>
		</div>
	);
}

export default MainLayout;
