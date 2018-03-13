let collectIds = arr => {
	let filterArray = [],
		IdArray = [];
	filterArray = getFilteredArray(arr, el => el.rating > 3);
	IdArray = getTransformedArray(filterArray, el => el.id);
	return IdArray;
}