let decypherPhrase = (obj, str) => {
	let reverseObj = {};
	for (let key in obj) {
		reverseObj[obj[key]] = key;
	}
	return cypherPhrase(reverseObj, str);
}