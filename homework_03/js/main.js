function Company(props) {
    let _name = props.name || '',
        _owner = props.owner || '',
        _maxCount = props.maxCompanySize || 0,
        _employees = [],
        _log = '';
    createCompany();

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function createCompany() {
        _log += `${_name.toUpperCase()} was created in ${new Date()}\n`;
    }

    function _filterEmployees() {
        let minSalary = _employees[0].getSalary(),
            indexOfWorker = 0;
        for (let i = 1; i < _employees.length; i++) {
            if (minSalary > _employees[i].getSalary()) {
                minSalary = _employees[i].getSalary();
                indexOfWorker = i;
            }
        }
        return indexOfWorker;
    }

    this.addNewEmployee = function(employee) {
        if (employee instanceof Employee) {
            if (employee.isWork()) {
                console.error('The worker has the job now.'); // or we can use throw('......')
				return;
            }
            if (_employees.length < _maxCount) {
                _employees.push(employee);
                _log += `${employee.getName()} starts working at ${_name} in ${new Date()}\n`;
                employee.hire(_name);
            } else {
                this.removeEmployee(_filterEmployees());
                _employees.push(employee);
                employee.hire(_name);
            }
        } else {
            console.error('Please try to add Employee instance.'); // or we can use throw('......')
			return;
        }
    };
    this.removeEmployee = function(id) {
        if (!isNumeric(id)) {
            console.error('The argument have to be a number.'); // or we can use throw('......')
			return;
        }
        _log += `${_employees[id].getName()} ends working at ${_name} in ${new Date()}\n`;
        _employees[id].fire(_name);
        _employees.splice(id, 1);
    };
    this.getAverageSalary = function() {
        return avarageSalary = _employees.reduce(function(sum, elem) {
            return sum + elem.getSalary();
        }, 0) / _employees.length;
    };
    this.getEmployees = function() {
        let allEmployees = [];
        for (let i = 0; i < _employees.length; i++) {
            allEmployees.push({
                name: _employees[i].getName(),
                age: _employees[i].getAge(),
                salary: _employees[i].getSalary(),
                primarySkill: _employees[i].getPrimarySkill()
            });
        }
        return allEmployees;
    };
    this.getFormattedListOfEmployee = function() {
        return _employees.forEach(function(el) {
            console.log(`${el.getName()} -  works in ${_name} ${el.getTimeInCompany() / 1000} seconds`);
        });
    };
    this.getAverageAge = function() {
        return avarageSalary = _employees.reduce(function(sum, elem) {
            return sum + elem.getAge();
        }, 0) / _employees.length;
    };
    this.getHistory = function() {
        return _log;
    };
}

function Employee(props) {
    let _name = props.name || '',
        _age = props.age || 0,
        _salary = props.salary || 0,
        _primarySkill = props.primarySkill || '',
        _isWork = false,
        _startWork = 0,
        _totalRunTime = 0,
        _log = '';

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    this.isWork = function() {
        return _isWork;
    }
    this.getName = function() {
        return _name;
    };
    this.getSalary = function() {
        return _salary;
    };
    this.getAge = function() {
        return _age;
    };
    this.getPrimarySkill = function() {
        return _primarySkill;
    };
    this.setSalary = function(salary) {
        if (!isNumeric(salary)) {
            console.error ('The argument have to be a number.'); // or we can use throw('......')
			return;
        } else if (salary < _salary) {
            _log += `try to change salary from ${_salary} to ${salary} \n`;
            console.error('You can not change the salary in the smaller party!'); // or we can use throw('......')
			return;
        }
        _log += `change salary from ${_salary} to ${salary} \n`;
        _salary = salary;
    };
    this.getWorkTimeInSeconds = function() {
        let _runTime = _totalRunTime;
        if (_isWork) {
            _runTime += this.getTimeInCompany();
        }
        return _runTime / 1000;
    };
    this.hire = function(company) {
        _isWork = true;
        _startWork = new Date();
        _log += `${_name} is hired to ${company} in ${_startWork} \n`;
    };
    this.fire = function(company) {
        _isWork = false;
        _totalRunTime += this.getTimeInCompany();
        _log += `${_name} is fired from ${company} in ${new Date()} \n`;
    };
    this.getTimeInCompany = function() {
        return (new Date() - _startWork);
    };
    this.getHistory = function() {
        return _log;
    };
}


let artem = new Employee({
    name: "Artem",
    age: 15,
    salary: 1000,
    primarySkill: "UX"
});
let vova = new Employee({
    name: "Vova",
    age: 16,
    salary: 2000,
    primarySkill: "BE"
});
let vasyl = new Employee({
    name: "Vasyl",
    age: 25,
    salary: 1000,
    primarySkill: "FE"
});
let ivan = new Employee({
    name: "Ivan",
    age: 35,
    salary: 5000,
    primarySkill: "FE"
});
let orest = new Employee({
    name: "Orest",
    age: 29,
    salary: 300,
    primarySkill: "AT"
});
let anton = new Employee({
    name: "Anton",
    age: 19,
    salary: 500,
    primarySkill: "Manager"
});
let epam = new Company({
    name: "Epam",
    owner: "Arkadii",
    maxCompanySize: 10
});
epam.addNewEmployee(artem);
epam.addNewEmployee(vova);
epam.addNewEmployee(vasyl);
epam.addNewEmployee(ivan);
epam.addNewEmployee(orest);
epam.addNewEmployee(anton);
console.log(epam.getHistory());
epam.removeEmployee(2);
console.log(vasyl.getHistory());
console.log(epam.getAverageSalary());
console.log(epam.getAverageAge());
epam.addNewEmployee(5, 6, 9, 5);
setTimeout(() => {
    epam.removeEmployee(1);
    console.log(artem.getWorkTimeInSeconds());
}, 5000);
vova.setSalary(900);
vova.setSalary(2200);
console.log(vova.getHistory());