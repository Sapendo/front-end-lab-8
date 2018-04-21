import style from '../styles/styles.css';
import calculatingModule from './calculating-module';
import interfaceModule from './interface-module';

interfaceModule();

let inputs = document.getElementsByTagName('input'),
    operatorsArea = Array.from(document.getElementById('operatorsArea').children),
    result = document.getElementById('result'),
    error = document.getElementById('error');
    
operatorsArea.forEach( el => {
    el.addEventListener('click', (event) => {
        result.innerHTML = '';
        let values = getValue(inputs);
        if ( arrayIsNumber(values, error )) {
            let action = event.target.dataset.act;
            result.innerHTML = `<p>Result: ${calculatingModule[action](+values[0],+values[1])}</p>`;
        }
    });
});

function getValue(arr) {
    let values = [];
    for (let val of arr) {
        values.push(val.value);
    }
    return values;
}

function arrayIsNumber(arr, error) {
    let check = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].trim() != '' && typeof +arr[i].value === 'number' && !Number.isNaN(+arr[i])){
            error.innerHTML = '';
        } else {
            error.innerHTML = 'You input incorrect value! Value must be a number!';
            return false;
        }
    }
    return check;
}
