var a = 0,
    b = 0,
    c = 0,
    type = '',
    catheter_1 = 0,
    catheter_2 = 0,
    semiperimeter = 0,
    base = 0,
    side = 0,
    area = 0;

do {
    a = +prompt('Input the first side of triangle');
} while (!(!isNaN(parseFloat(a)) && isFinite(a)));
do {
    b = +prompt('Input the second side of triangle');
} while (!(!isNaN(parseFloat(a)) && isFinite(a)));
do {
    c = +prompt('Input the third side of triangle');
} while (!(!isNaN(parseFloat(a)) && isFinite(a)));

if (a === b && a === c) {
    type = 'equilateral';
} else if ((a === b && a !== c) || (a === c && a !== b) || (c === b && a !== a)) {
    type = 'isosceles';
} else if ((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) === 0 || (Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(b, 2)) === 0 || (Math.pow(c, 2) + Math.pow(b, 2) - Math.pow(a, 2)) === 0) {
    type = 'right triangle';
} else {
    type = 'scalene';
}

switch (type) {
    case 'equilateral':
        area = Math.sqrt(3) / 4 * Math.pow(a, 2);
        break;
    case 'isosceles':
        if (a === b && a !== c) {
            base = c;
            side = a;
        } else if (a === c && a !== b) {
            base = b;
            side = a;
        } else {
            base = a;
            side = b;
        }
        area = (base * Math.sqrt(Math.pow(side, 2) - (Math.pow(base, 2) / 4))) / 2;
        break;
    case 'right triangle':
        if (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2) === 0) {
            catheter_1 = a;
            catheter_2 = b;
        } else if (Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(b, 2)) {
            catheter_1 = a;
            catheter_2 = c;
        } else {
            catheter_1 = b;
            catheter_2 = c;
        }
        area = 1 / 2 * catheter_1 * catheter_2;
        break;
    default:
        semiperimeter = (a + b + c) / 2;
        area = Math.sqrt(semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c));
}
if (area > 0 && a > 0 && b > 0 && c > 0) {
    area = Math.round(area * 100) / 100;
    console.log('Type of triangle is ' + type + ' and square is ' + area);
} else {
    console.log('Incorrect data');
}