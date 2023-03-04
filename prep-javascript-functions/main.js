function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const addTwoNumbersResult = addTwoNumbers(4, 2);
console.log('addTwoNumbersResult: ', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const convertHoursToMinutesResult = convertHoursToMinutes(3);
console.log('convertHoursToMinutesResult: ', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hi there, ' + name;
}
const getGreetingResult = getGreeting('Sarah');
console.log('getGreetingResult: ', getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return ((num1 + num2) * 5);
}
const addAndMultiplyBy5Result = addAndMultiplyBy5(3, 6);
console.log('addAndMultiplyBy5Result: ', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return ((num1 * num2) / 5);
}
const multiplyAndDivideBy5Result = multiplyAndDivideBy5(2, 5);
console.log('multiplyAndDivideBy5Result:', multiplyAndDivideBy5Result);

function substractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const substractTwoNumbersResult = substractTwoNumbers(10, 3);
console.log('subtractTwoNumbersResult: ', substractTwoNumbersResult);

function getCircleCircumference(radius) {
  return (2 * radius * Math.PI);
}
const getCircleCircumferenceResult = getCircleCircumference(4);
console.log('getCricleCircumferenceResult: ', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + lastName;
}
const getFullNameResult = getFullName('Sarah ', 'You');
console.log('getFullNameResult: ', getFullNameResult);

function cube(number) {
  return number * number * number;
}
const cubeResult = cube(6);
console.log('cubeResult: ', cubeResult);
