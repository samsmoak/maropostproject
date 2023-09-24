import React, { useState } from "react";
import FilterMaterial from "./FilterMaterial";
import FilterColor from "./FilterColor";
import FilterPrize from "./FilterPrize";

function ResultSideBar(props) {
	const [selectedOptions, setSelectedOptions] = useState([]);
	const [selectedOption2, setSelectedOption2] = useState([]);

	const handleSelectedOptionsChange = (newSelectedOptions) => {
		setSelectedOptions(newSelectedOptions);
	};
	const handleSelectedOptionChange2 = (newSelectedOption2) => {
		setSelectedOption2(newSelectedOption2);
	};

	return (
		<div className='w-full md:w-96 px-5 space-y-3 font-Roboto uppercase'>
			<div className='shadow-sm font-semibold '>Filters</div>
			<div className='space-y-1'>
				<FilterMaterial
					selectedOptions={selectedOptions}
					onSelectedOptionsChange={handleSelectedOptionsChange}
				/>
				<FilterColor
					selectedOption2={selectedOption2}
					onSelectedOptionChange2={handleSelectedOptionChange2}
				/>
				<FilterPrize />
			</div>
			<div className='flex space-x-2 mt-5 font-light'>
				<div className='md:hidden space-y-1'>
					{selectedOptions.map((i, v) => {
						return (
							<div className='text-xs px-1 bg-slate-200 w-fit'>
								{i} {} x
							</div>
						);
					})}
				</div>
				<div className='md:hidden space-y-1'>
					<div className='text-xs px-1 bg-slate-200 w-fit h-fit'>
						{selectedOption2}
					</div>
				</div>
				<div className='text-xs px-1 bg-slate-200 w-fit h-fit md:hidden'>
					$1 - $99
				</div>
			</div>
		</div>
	);
}

export default ResultSideBar;
