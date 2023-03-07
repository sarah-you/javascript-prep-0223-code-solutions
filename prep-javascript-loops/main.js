function whileLoop1() {
  const array = [];
  let i = 0;
  while (i < 10) {
    array.push(i);
    i++;
  }
  return array;
}
console.log(whileLoop1());

function whileLoop2() {
  const array = [];
  let i = 0;
  while (i < 20) {
    array.push(i);
    i += 1;
    i++;
  }
  return array;
}
console.log(whileLoop2());

function forLoop1() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i);
  }
  return array;
}
console.log(forLoop1());

function forLoop2() {
  for (let i = 100; i >= 0; i--) {
    console.log('Time till explosion: ' + i + '!');
  }
}
console.log(forLoop2());

function forInLoop1(object) {
  const array = [];
  for (const x in object) {
    array.push(x);
  }
  return array;
}
const object1 = {
  name: 'Ada Lovelace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine'
};
console.log(forInLoop1(object1));

function forInLoop2(object) {
  const array = [];
  for (const x in object) {
    array.push(object[x]);
  }
  return array;
}
console.log(forInLoop2(object1));
