import React from "react";
import FilterMaterial from "./FilterMaterial";
import FilterColor from "./FilterColor";
import FilterPrize from "./FilterPrize";

function ResultSideBar() {
	return (
		<div className='w-96 px-5 space-y-5'>
			<div>Filters</div>
			<FilterMaterial />
			<FilterColor />
			<FilterPrize />
		</div>
	);
}

export default ResultSideBar;
