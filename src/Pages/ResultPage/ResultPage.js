import React, { useEffect } from "react";
import ResultSideBar from "../../components/ResultSideBar";
import ResultProduct from "../../components/ResultProduct";
import { QueryClient, useQuery } from "react-query";
import axios from "axios";

function ResultPage() {
	return (
		<div className='w-screen flex'>
			<ResultSideBar data='' />
			<ResultProduct />
		</div>
	);
}

export default ResultPage;
