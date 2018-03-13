let getFilteredArray = (arr, callback) => {
	let transformedArray = [];
	forEach(arr, el => {
		if(callback(el)){
			transformedArray.push(el);
		}		
	});
	return transformedArray;
}
