import React, { useEffect } from "react";
import ResultSideBar from "../../components/ResultSideBar";
import ResultProduct from "../../components/ResultProduct";

function ResultPage() {
	useEffect(() => {}, []);
	return (
		<div className='w-screen flex'>
			<ResultSideBar />
			<ResultProduct />
		</div>
	);
}

export default ResultPage;
