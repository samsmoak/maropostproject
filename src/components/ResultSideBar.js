import React, { useState } from "react";
import FilterMaterial from "./FilterMaterial";
import FilterColor from "./FilterColor";
import FilterPrize from "./FilterPrize";

function ResultSideBar(props) {
	const [selectedOptions, setSelectedOptions] = useState([]);
	const [selectedOption2, setSelectedOption2] = useState(null);
	const [sliderValue, setSliderValue] = useState(50);

	const handleSelectedOptionsChange = (newSelectedOptions) => {
		setSelectedOptions(newSelectedOptions);
	};
	const handleSelectedOptionChange2 = (newSelectedOption2) => {
		setSelectedOption2(newSelectedOption2);
	}; // Define a callback function to update sliderValue
	const handleSliderChange = (newValue) => {
		setSliderValue(newValue);
	};
	const handleSelectedOptionClick = (optionValue) => {
		// When a selected option is clicked, uncheck the corresponding checkbox
		setSelectedOptions(
			selectedOptions.filter((value) => value !== optionValue)
		);
	};
	const handleSelectedOptionClick2 = () => {
		// When a selected option is clicked, unselect it (set to null)
		setSelectedOption2(null);
	};
	const handleRangeClick = () => {
		// Reset the input range value to the initial value
		setSliderValue(50);
	};

	return (
		<div className='w-full md:w-96 px-5 xxl:w-big  space-y-3 font-Roboto uppercase'>
			<div className='shadow-sm font-semibold '>Filters</div>
			<div className='space-y-1 w-full'>
				<FilterMaterial
					selectedOptions={selectedOptions}
					onSelectedOptionsChange={handleSelectedOptionsChange}
				/>
				<FilterColor
					selectedOption2={selectedOption2}
					onSelectedOptionChange2={handleSelectedOptionChange2}
				/>
				<FilterPrize onSliderChange={handleSliderChange} />
			</div>
			<div className='flex space-x-2 mt-5 font-light'>
				<div className='md:hidden space-y-1'>
					{selectedOptions.map((i, v) => {
						return (
							<div
								className='flex justify-between items-center text-xs px-1 bg-slate-200 w-fit'
								onClick={() => handleSelectedOptionClick(i)}
							>
								<div>{i} </div>
								<div>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='currentColor'
										class='w-4 h-4'
									>
										<path
											fill-rule='evenodd'
											d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
											clip-rule='evenodd'
										/>
									</svg>
								</div>
							</div>
						);
					})}
				</div>
				<div className='md:hidden space-y-1'>
					<div className='flex justify-between items-center text-xs px-1 bg-slate-200 w-fit h-fit'>
						<div>{selectedOption2}</div>
						<div>
							{selectedOption2 !== null ? (
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
									class='w-4 h-4 cursor-pointer'
									onClick={handleSelectedOptionClick2}
								>
									<path
										fill-rule='evenodd'
										d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
										clip-rule='evenodd'
									/>
								</svg>
							) : (
								" "
							)}
						</div>
					</div>
				</div>
				{sliderValue && (
					<div
						className={`flex justify-between items-center text-xs pl-1 bg-slate-200 w-fit h-fit md:hidden `}
					>
						<div>
							{`${sliderValue !== null ? " $" : " "}`}
							{sliderValue}
						</div>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								class='w-4 h-4 cursor-pointer'
								onClick={handleRangeClick}
							>
								<path
									fill-rule='evenodd'
									d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
									clip-rule='evenodd'
								/>
							</svg>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default ResultSideBar;
