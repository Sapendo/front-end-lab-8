let cypherPhrase = (obj, str) => {
	let arrOfKeys = Object.keys(obj),
		arrFromStr = str.split(''),
		newArray = [];
	newArray = getTransformedArray(arrFromStr, el => arrOfKeys.indexOf(el) !== -1 ? obj[el] : el);
	return newArray.join('');
}