let operators = {
    addition: '&#43;',
    subtraction: '&minus;',
    multiplication: '&times;',
    division: '&divide;'
},
    inputsArea = document.getElementById('inputsArea'),
    operatorsArea = document.getElementById('operatorsArea');
    export default function() {
        for (let i = 0; i < 2; i++){
            let input = document.createElement('input');
            input.classList = 'input';
            input.setAttribute('placeholder',`Enter the number`)
            inputsArea.appendChild(input);
        }
        for (let operator in operators) {
            if (operators.hasOwnProperty(operator)) {
                let button = document.createElement('button');
                button.innerHTML = operators[operator];
                button.dataset.act = operator;
                button.classList = 'btn';
                operatorsArea.appendChild(button);
            }
        }
    }
