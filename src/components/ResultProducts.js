import axios from "axios";
import React, { useEffect, useState } from "react";
import ResultProductCard from "./ResultProductCard";
const fetchData = async (url, setData, setIsLoading, setError) => {
	try {
		const response = await axios.get(url);
		setData(response.data.items);
		setIsLoading(false);
	} catch (err) {
		setError(err);
		setIsLoading(false);
	}
};
function ResultProducts() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState();
	const [error, setError] = useState("");
	const apiUrl =
		"https://findify-assets.s3.amazonaws.com/test-task/test_response.json";

	useEffect(() => {
		fetchData(apiUrl, setData, setIsLoading, setError);
	}, [apiUrl]);

	return (
		<div className='w-full flex justify-center xxl:justify-normal xxl: '>
			<div className=' grid xs:grid-cols-2 xs:gap-2 xs:px-2 sm:grid-cols-3 sm:gap-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4 xxl:grid-cols-6 xxl:w-full xxl:gap-6  gap-y-6'>
				{data.map((product, key) => (
					<ResultProductCard
						product={product}
						key={key}
						className='cursor-pointer'
					/>
				))}
			</div>
		</div>
	);
}

export default ResultProducts;
