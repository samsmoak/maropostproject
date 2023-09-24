import axios from "axios";
import React, { useEffect, useState } from "react";
const fetchData = async (url, setData, setIsLoading, setError) => {
	try {
		// const cachedData = localStorage.getItem(url);
		// if (cachedData) {
		// 	setData(JSON.parse(cachedData));
		// 	setIsLoading(false);
		// } else {
		const response = await axios.get(url);
		// localStorage.setItem(url, JSON.stringify(response.data.facets));
		setData(response.data.facets);
		setIsLoading(false);
		// }
	} catch (err) {
		setError(err);
		setIsLoading(false);
	}
};
function FilterColor() {
	const [open, setOpen] = useState(false);
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState();
	const [error, setError] = useState("");
	const [displayedValues, setDisplayedValues] = useState([]);
	const [startIndex, setStartIndex] = useState(0);
	const [selectedOption, setSelectedOption] = useState(null);
	const itemsPerPage = 6;
	const endOfList = startIndex + itemsPerPage >= data[1]?.values.length;
	const apiUrl =
		"https://findify-assets.s3.amazonaws.com/test-task/test_response.json";

	useEffect(() => {
		fetchData(apiUrl, setData, setIsLoading, setError);
	}, [apiUrl]);

	useEffect(() => {
		// Update the displayed values when facetsData changes
		if (data.length > 0) {
			const nextValues = data[1].values.slice(
				startIndex,
				startIndex + itemsPerPage
			);
			setDisplayedValues((prevValues) => [...prevValues, ...nextValues]);
		}
	}, [data, startIndex]);

	const handleLoadMore = () => {
		// Increment the startIndex by itemsPerPage to load more elements
		setStartIndex(startIndex + itemsPerPage);
	};
	const handleLoadLess = () => {
		// Set the startIndex back to 0 to load the first six elements
		setDisplayedValues([]);
		setStartIndex(0);
	};

	const handleOptionChange = (value) => {
		setSelectedOption(value);
	};

	return (
		<div className='shadow-sm'>
			<div>
				<button
					className='flex w-full justify-between py-3 '
					onClick={() => {
						setOpen(!open);
					}}
				>
					<div>Material</div>
					{open ? (
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								class='w-6 h-6'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M19.5 12h-15'
								/>
							</svg>
						</div>
					) : (
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								class='w-6 h-6'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M12 4.5v15m7.5-7.5h-15'
								/>
							</svg>
						</div>
					)}
				</button>
			</div>
			<div>
				{displayedValues.map((i, d) => (
					<div className={`w-full mt-4 ${!open && "hidden"}`}>
						<div className='flex w-full justify-between '>
							<div className='space-x-6'>
								<div>
									<input
										type='radio'
										value={i.value}
										checked={selectedOption === i.value}
										onChange={() => handleOptionChange(i.value)}
										className='absolute h-6 w-6 '
									/>
								</div>
								<div>
									<label
										htmlFor={`myCheckbox+${d}`}
										className={`cursor-pointer w-full ml-2
								}`}
									>
										{i.value}
									</label>
								</div>
							</div>

							<div>(num) </div>
						</div>
					</div>
				))}
				<div className={`w-full mt-4 ${!open && "hidden"}`}>
					{endOfList && startIndex > 0 && (
						<button onClick={handleLoadLess}>Load Less</button>
					)}
					{data.length > 0 &&
						startIndex + itemsPerPage < data[1].values.length && (
							<button onClick={handleLoadMore}>Load More</button>
						)}
				</div>
			</div>
		</div>
	);
}

export default FilterColor;
