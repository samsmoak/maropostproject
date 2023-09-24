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
				<div className='w-full'>
					<div>
						<input
							id='small-range'
							type='range'
							class='w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700'
							min='0'
							max='50'
						/>
					</div>

					<div className='flex space-x-4 font-light items-center w-full justify-center'>
						<div className='flex space-x-2 items-center'>
							<button className='py-2 px-3 border'>$299</button>
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

							<button className='py-2 px-3 border'>$1266</button>
						</div>
						<div className='text-lg font-medium'>go</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FilterPrize;
