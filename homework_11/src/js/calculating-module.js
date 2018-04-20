function addition( a, b ) {
    return a + b;
}
function subtraction( a, b ) {
    return a - b;
}
function multiplication( a, b ) {
    return a * b;
}
function division( a, b ) {
    if ( b === 0 ){
        return 'Cannot divide by zero!';
    }
    return a / b;
}

export default {
    addition,
    subtraction,
    multiplication,
    division
}