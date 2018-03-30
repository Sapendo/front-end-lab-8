const max = process.argv[2];
let fibonacci = function*() {
    let num = 0;
    while (++num <= max) {
        let val = num;
        if (num % 3 === 0 && num % 5 === 0) {
            val = 'FizzBuzz';
        } else if (num % 3 === 0) {
            val = 'Fizz';
        } else if (num % 5 === 0) {
            val = 'Buzz';
        }
        yield val;
    }
}();

for (var n of fibonacci) {
    console.log(n);
}