// objects creating by {}
const person1 = {
  firstName: "James",
  lastName: "Bond",
  age: 45,
  eyeColor: "blue",
};

person1.hasGun = true;

const person2 = {
  firstName: "James",
  lastName: "Bond",
  age: 45,
  eyeColor: "blue",
};

const person3 = {
  firstName: "James",
  lastName: "Bond",
  age: 45,
  eyeColor: "blue",
};

// objects creating by {}

const person4 = new Object();
person4.firstName = "Jack";
person4.lastName = "Sparrow";
person4.isPirate = true;

const person5 = new Object();
person5.firstName = "Jack";
person5.lastName = "Sparrow";
person5.isPirate = true;

const person6 = new Object();
person6.firstName = "Jack";
person6.lastName = "Sparrow";
person6.isPirate = true;
// objects creating by another object

const person7 = Object(person1);
person7.age = 18; //overwriting the age

// creating of Engineer based on Person

const engineer1 = Object(person1);
engineer1.skill = "Skill 1";

// creating of QA Engineer based on Engineer
const qaEngineer1 = Object(engineer1);

console.log(engineer1);
console.log(qaEngineer1);

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);
console.log(person6);
console.log(person7);
