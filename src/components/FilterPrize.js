import React, { useState } from "react";

function FilterPrize() {
	const [open, setOpen] = useState(false);

	return (
		<div className='shadow-sm'>
			<div>
				<button
					className='flex w-full justify-between py-3  '
					onClick={() => {
						setOpen(!open);
					}}
				>
					<div>Prize</div>
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

			<div className={`w-full mt-4 ${!open && "hidden"}`}>
				<div className='flex w-full justify-between '>
					<div className='space-x-6'>
						<div>
							<input
								type='checkbox'
								id='myCheckbox'
								className='absolute h-6 w-6 accent-gray-50 focus:border-black focus:border-4 ring-white  bg-grey-800 text-white bg cursor-pointer'
							/>
						</div>
						<div>
							<label
								htmlFor='myCheckbox'
								className={`cursor-pointer w-full ml-2
								}`}
							>
								Prize
							</label>
						</div>
					</div>

					<div>(num) </div>
				</div>
			</div>
		</div>
	);
}

export default FilterPrize;
