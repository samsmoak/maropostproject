import React, { useState } from "react";

function FilterColor() {
	const [open, setOpen] = useState(false);
	const [isChecked, setIsChecked] = useState(false);
	const toggleCheckbox = () => {
		setIsChecked(!isChecked);
	};

	return (
		<div>
			<div>
				<button
					className='flex w-full justify-between'
					onClick={() => {
						setOpen(!open);
					}}
				>
					<div>Color</div>
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
			{open && (
				<div className='w-full'>
					<div className='flex '>
						<div className='flex items-center space-x-2 w-full'>
							<input
								type='checkbox'
								id='myCheckbox'
								className='hidden'
								value=''
								checked={isChecked}
								onChange={toggleCheckbox}
							/>
							<label
								htmlFor='myCheckbox'
								className={`flex items-center cursor-pointer ${"bg-white border-gray-200 hover:border-gray-500"} border  w-6 h-6`}
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke={isChecked ? "white" : "black"}
									className='w-5 h-6'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M5.75 12.25l5.5 5.5L18.25 7.75'
									/>
								</svg>
							</label>
							<label
								htmlFor='myCheckbox'
								className={`cursor-pointer w-full
								}`}
							>
								Material
							</label>
						</div>
						<div>(num)</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default FilterColor;
