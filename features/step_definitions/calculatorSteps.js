const { Given, When, Then } = require('@cucumber/cucumber');
const { addNumbers } = require('../../src/utils');

let number1, number2, result;

Given('I have two numbers {int} and {int}', function (int1, int2) {
  number1 = int1;
  number2 = int2;
});

When('I add the numbers', function () {
  result = addNumbers(number1, number2);
});

Then('I should get the result {int}', function (expectedResult) {
  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});
