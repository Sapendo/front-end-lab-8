/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_styles_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calculating_module__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interface_module__ = __webpack_require__(3);




Object(__WEBPACK_IMPORTED_MODULE_2__interface_module__["a" /* default */])();

let inputs = document.getElementsByTagName('input'),
    operatorsArea = Array.from(document.getElementById('operatorsArea').children),
    result = document.getElementById('result'),
    error = document.getElementById('error');

operatorsArea.forEach(el => {
    el.addEventListener('click', event => {
        let values = getValue(inputs);
        if (arrayIsNumber(values, error)) {
            let action = event.target.dataset.act;
            result.innerHTML = __WEBPACK_IMPORTED_MODULE_1__calculating_module__["a" /* default */][action](+values[0], +values[1]);
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
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].trim() != '' && typeof +arr[i].value === 'number' && !Number.isNaN(+arr[i])) {
            error.innerHTML = '';
            return true;
        } else {
            error.innerHTML = 'You input incorrect value! Value must be a number!';
            return false;
        }
    }
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function addition(a, b) {
    return a + b;
}
function subtraction(a, b) {
    return a - b;
}
function multiplication(a, b) {
    return a * b;
}
function division(a, b) {
    if (b === 0) {
        return 'Cannot divide by zero!';
    }
    return a / b;
}

/* harmony default export */ __webpack_exports__["a"] = ({
    addition,
    subtraction,
    multiplication,
    division
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let operators = {
    addition: '+',
    subtraction: '-',
    multiplication: '*',
    division: '/'
},
    inputsArea = document.getElementById('inputsArea'),
    operatorsArea = document.getElementById('operatorsArea');
/* harmony default export */ __webpack_exports__["a"] = (function () {
    for (let i = 0; i < 2; i++) {
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
});

/***/ })
/******/ ]);