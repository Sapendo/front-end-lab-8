let operators = {
    addition: '+',
    subtraction: '-',
    multiplication: '*',
    division: '/'
},
    inputsArea = document.getElementById('inputsArea'),
    operatorsArea = document.getElementById('operatorsArea');
    export default function() {
        for (let i = 0; i < 2; i++){
            let input = document.createElement('input');
            inputsArea.appendChild(input);
        }
        for (let operator in operators) {
            if (operators.hasOwnProperty(operator)) {
                let button = document.createElement('button');
                button.innerHTML = operators[operator];
                button.dataset.act = operator;
                operatorsArea.appendChild(button);
            }
        }
    }
