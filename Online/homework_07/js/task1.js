var symbol = '[~]',
	space = ' ',
	num_row = 0,
	piramid = '';
do {
	num_row = +prompt('Enter the number from 1 to 20 inclusive');
	if (!Number.isInteger(num_row) || num_row <= 0 || num_row > 20) {
		console.log('Incorrect!');
	}
} while (!Number.isInteger(num_row) || num_row <= 0 || num_row > 20)
for (var i = 0, k = num_row * 3-3; i < num_row; i++, k-=3){
	for(let j = 0; j < k; j++){
        piramid += space;
    }
    for(let j = 0; j < 2 * i + 1; j++){
        piramid += symbol;
    }
	piramid += '\n';
}
console.log(piramid);