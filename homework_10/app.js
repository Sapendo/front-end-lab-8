class Input {
	constructor(placeHolder) {
		this.placeHolder = placeHolder || "Type...";
		this._value = "";
	}

	get value() {
		return this._value;
	}

	setValue(newValue) {
		this._value = newValue;
	}
}

class NumberInput extends Input {
	constructor(placeHolder) {
		super(placeHolder);
		this.type = "number";
	}
}

const AddRequiredValidation = function (instance) {
	if(instance.valid === false) return;
	instance.valid = (instance._value.trim() !== '');
	if (!instance.valid) {
		console.log('You must type some information!')
	}
}
const AddMaxLengthValidation = function (instance, maxLength) {
	if(instance.valid === false) return;
	instance.valid = (instance._value.toString().length < maxLength);
	if (!instance.valid) {
		console.log(`You cannot type more symbols then ${maxLength}`);
	}
}

const AddNumberValidation = function (instance) {
	if(instance.valid === false) return;
	instance.valid = (!isNaN(parseFloat(instance._value)) && isFinite(instance._value) && (typeof instance._value === instance.type));
	if (!instance.valid) {
		console.log('You must type a number');
	}
}



let numberInput = new NumberInput("Type numbers...");
let numberInput_1 = new NumberInput("Type numbers...");
let numberInput_2 = new NumberInput("Type numbers...");
let numberInput_3 = new NumberInput("Type numbers...");
let numberInput_4 = new NumberInput("Type numbers...");

AddRequiredValidation(numberInput);
console.log(numberInput.valid);

numberInput_1.setValue("1");
AddNumberValidation(numberInput_1);
console.log(numberInput_1.valid);

numberInput_2.setValue(1);
AddNumberValidation(numberInput_2);
console.log(numberInput_2.valid);

numberInput_3.setValue(1111111111111111111111111111);
AddNumberValidation(numberInput_3);
AddMaxLengthValidation(numberInput_3, 30);
console.log(numberInput_3.valid);

numberInput_4.setValue('1111111111111111111111111111');
AddNumberValidation(numberInput_4);
AddMaxLengthValidation(numberInput_4, 30);
console.log(numberInput_4.valid);
