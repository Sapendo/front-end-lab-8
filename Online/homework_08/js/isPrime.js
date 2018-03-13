var isPrime = (num) => {
	let bord = Math.ceil(num/2);
	if ( num <= 1) {
		return false;
	} else if (num === 2) {
		return true;
	}
	for (let i = 2; i <= bord; i++){
		if( num % i === 0 ){
			return false;
		}
	}
	return true;
}