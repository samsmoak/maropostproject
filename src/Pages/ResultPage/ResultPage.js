import React, { useEffect } from "react";
import ResultSideBar from "../../components/ResultSideBar";
import { QueryClient, useQuery } from "react-query";
import axios from "axios";
import ResultProducts from "../../components/ResultProducts";

function ResultPage() {
	return (
		<div className='w-screen flex  flex-col items-center md:flex  md:flex-row md:items-start'>
			<ResultSideBar data='' />
			<ResultProducts />
		</div>
	);
}

export default ResultPage;
