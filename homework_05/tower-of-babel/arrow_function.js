var inputs = process.argv.slice(2);
var result = inputs.map(idx => idx[0]).reduce((result, idx) => result + idx);
console.log(result);