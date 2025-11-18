//object.assign
// source object-এর properties target object-এ copy করে।
const target = { a: 1 };
const source = { b: 2, c: 3 };

Object.assign(target, source);

console.log(target);


//object.create
// নতুন object তৈরি করে এবং এর prototype set করে।
const person = {
  greet() { console.log("Hello!"); }
};

const student = Object.create(person);
student.greet();

//object.entries
// object-এর key/value pair return করে array আকারে
const obj = { name: "Mim", age: 22 };
console.log(Object.entries(obj));

// Object.create(proto)
// নতুন object তৈরি করে এবং এর prototype set করে।
const person1 = {
  greet() { console.log("Hello!"); }
};

const student1 = Object.create(person);
student.greet();

// Object.fromEntries(array)
// key/value pair-এর array থেকে object তৈরি করে
const entries = [["name","Mim"], ["age",22]];
const obj1 = Object.fromEntries(entries);

console.log(obj); 