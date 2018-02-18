let getTransformedArray = (arr, callback) => {
	let transformedArray = [];
	forEach(arr, el => {
		transformedArray.push(callback(el));
	});
	return transformedArray;
}