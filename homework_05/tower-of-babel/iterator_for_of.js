 const max = process.argv[2];
 let FizzBuzz = {
     [Symbol.iterator]() {
         let num = 1;
         return {
             next() {
				 let val = num;
				 if(num > max) {
                     return {
                         done: true
                     };
                 }
                 if (num % 3 === 0 && num % 5 === 0) {
						 val = 'FizzBuzz'
                 } else if (num % 3 === 0) {
						 val = 'Fizz'
                 } else if (num % 5 === 0) {
						 val = 'Buzz'
                 } 
				 num++;
				 return {done: false, value: val};
             }
         }
     }
 }
 for (var n of FizzBuzz) {
     console.log(n);
 }