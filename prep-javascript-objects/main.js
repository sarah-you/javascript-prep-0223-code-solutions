const person = {
  firstName: 'Sarah ',
  lastName: 'You',
  hobby: 'watching Netflix'
};
console.log(person);
const fullName = person.firstName + person.lastName;
console.log(fullName);
person.job = 'student';
console.log(person.job);
person['previousJob'] = 'Marketing Assistant';
console.log(person['previousJob']);
console.log(person);
