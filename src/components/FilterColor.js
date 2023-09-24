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
	const handleRadioChange = (optionId) => {
		setSelectedOption(optionId);
	};
	const Color = [
		{ name: "Black", value: "bg-black" },
		{ name: "Blue", value: "bg-blue-500" },
		{ name: "Grey", value: "bg-gray-500" },
		{ name: "White", value: "bg-white" },
		{ name: "Multicolor", value: "bg-fuchsia-500" },
		{ name: "Beige", value: "bg-amber-300" },
		{ name: "Green", value: "bg-green-500" },
		{ name: "brown", value: "bg-yellow-950" },
		{ name: "yellow", value: "bg-yellow-500" },
		{ name: "Red", value: "	bg-red-500" },
		{ name: "Maroon", value: "bg-rose-950" },
		{ name: "Pink", value: "bg-pink-500" },
		{ name: "Orange", value: "bg-orange-500" },
		{ name: "Purple", value: "bg-purple-500 " },
	];

	return (
		<div className='shadow-sm'>
			<div>
				<button
					className='flex w-full justify-between py-3 '
					onClick={() => {
						setOpen(!open);
					}}
				>
					<div>Colors</div>
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
						{/* <div className='flex w-full justify-between '>
							<div className='space-x-6'>
								<div>
									<input
										type='radio'
										value={i.value}
										checked={selectedOption === i.value}
										onChange={() => handleOptionChange(i.value)}
										className='absolute h-5 w-5 checked:bg-red-400 '
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

							<div>{i.count} </div>
						</div> */}
						{
							<div className='flex justify-between'>
								<label
									key={d}
									className={`relative flex cursor-pointer select-none inline-block mr-4 ${
										selectedOption === d ? "text-gray-500" : "text-red-500"
									}`}
								>
									<input
										type='radio'
										name='radioGroup'
										value={d}
										checked={selectedOption === d}
										onChange={() => handleRadioChange(d)}
										className='hidden'
									/>
									<span
										className={`w-6 h-6 border-2 flex items-center justify-center rounded-full inline-block mr-2 ${
											selectedOption === d ? "bg-gray-300 " : Color[d].value
										}`}
									>
										{selectedOption === d && (
											<svg
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 24 24'
												fill='currentColor'
												class='w-6 h-6 text-black'
											>
												<path
													fill-rule='evenodd'
													d='M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z'
													clip-rule='evenodd'
												/>
											</svg>
										)}
									</span>
									<div className='text-black text-sm font-light capitalize'>
										{i.value}
									</div>
								</label>
								<div className='text-sm text-gray-500'>({i.count}) </div>
							</div>
						}
					</div>
				))}
				<div className={`w-full mt-4 ${!open && "hidden"}`}>
					{endOfList && startIndex > 0 && (
						<button
							onClick={handleLoadLess}
							className='font-normal w-full text-sm flex justify-center items-center'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								class='w-4 h-4'
							>
								<path
									fill-rule='evenodd'
									d='M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z'
									clip-rule='evenodd'
								/>
							</svg>
							Less
						</button>
					)}
					{data.length > 0 &&
						startIndex + itemsPerPage < data[1].values.length && (
							<button
								onClick={handleLoadMore}
								className='font-normal w-full text-sm flex justify-center items-center'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
									class='w-4 h-4'
								>
									<path
										fill-rule='evenodd'
										d='M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z'
										clip-rule='evenodd'
									/>
								</svg>
								More
							</button>
						)}
				</div>
			</div>
		</div>
	);
}

export default FilterColor;
