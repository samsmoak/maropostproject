import React from "react";

function ResultProductCard({ product }) {
	const redirectToLink = (url) => {
		window.location.href = url;
	};
	return (
		<div
			onClick={() => redirectToLink(product.product_url)}
			className='cursor-pointer'
		>
			<div className='w-full  md:w-56 font-Roboto  '>
				<div className='relative h-80 sm:h-64 md:h-80 flex items-start justify-start'>
					<img
						src={product.image_url}
						alt=''
						className='h-full w-full object-fill '
					/>
					{product.compare_at && (
						<div className='w-full absolute top-0 right-0 left-0'>
							<div className='h-10 flex items-center justify-between text-white'>
								<div className='flex items-center justify-start'>
									<div className='text-left  uppercase bg-[#82b8d9] py-1 pr-6'>
										14% off
									</div>
									<div className='bg-[#82b8d9] w-6 h-6 rotate-45 -translate-x-3'></div>
								</div>
								<div className='text-center  uppercase bg-[#82b8d9] py-1 px-2'>
									sale
								</div>
							</div>
						</div>
					)}
				</div>
				<div className='w-full flex flex-col items-center mt-4 space-y-4 '>
					<div className='uppercase text-sm text-center font-Roboto'>
						{product.title}
					</div>
					<div className='flex space-x-4 font-Roboto'>
						<div className='font-light text-gray-500 line-through'>
							{`${product.compare_at !== null ? "$ " : " "}`}
							{product.compare_at}
						</div>
						<div className='font-Roboto'>$ {product.price}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ResultProductCard;
