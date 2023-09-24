import React from "react";
import FilterMaterial from "./FilterMaterial";
import FilterColor from "./FilterColor";
import FilterPrize from "./FilterPrize";

function ResultSideBar(props) {
	return (
		<div className='w-96 px-5 space-y-3'>
			<div className='shadow-sm '>Filters</div>
			<div className='space-y-1'>
				<FilterMaterial data={props.data} />
				<FilterColor />
				<FilterPrize />
			</div>
		</div>
	);
}

export default ResultSideBar;
