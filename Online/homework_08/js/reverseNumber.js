let reverseNumber = (num) => {
	let sign = Math.sign(num);
	num = num.toString().split('').reverse().join('');
	return parseInt(num) * sign;
}