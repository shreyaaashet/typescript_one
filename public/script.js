"use strict";
const character = "abc";
console.log(character);
const character2 = "xyzz";
console.log(character2);
const character4 = "sh";
console.log(character4);
const input = document.querySelectorAll("input");
console.log(input);
input.forEach((i) => {
    console.log(i);
});
let character3 = "qwe";
let age = 3;
let notcoming = true;
character3 = "w"; // but character3 cant be num now 
// circumference of circle
const circle = (diameter) => {
    // we can define it like this that the input data will be inte he so string n boolean cant be used as  input
    return diameter * Math.PI;
};
console.log(circle(2));
//  array  it get defined by the first defiend type
let words = ['abc', 'sdf', 'fgh'];
words[0] = 'opo';
//words[1]=90; // will give errror
let mix = [12, 'ad', 44, 'rty']; // for mixed it doesnt matter 
mix[2] = "ert";
// object 
let object1 = {
    name: "asddd",
    age: 50,
    work: "plumber"
};
//object1.age="45" // error
object1.name = "qwre";
// we cant add new properties if object has already defined
// error if newly defined old objebt doesnt follow old format
// object1={
//     name:"sss",
//     age:0,
// }
//  EXPLICIT TYPES
let id_name;
let id_number;
let logged_or_not;
let array = []; // we are defining it as empty array by [] cox just string[] means it is saying array will hve string but we cant add in it
array.push('shreya');
// for mixed array which has all the types
//we use union type and define it like this : 
let union = [];
union.push(true);
union.push(34);
union.push("eee");
console.log(union);
let normalvar;
normalvar = "we";
// how to explicit var as object
let object2;
object2 = { name: "noo", age: 45, attending: false };
// any type: it can be of any type
let age1 = 30;
// so age can be num , string, bool
age1 = 3;
console.log(age1);
age1 = "ddd";
console.log(age1);
age1 = false;
console.log(age1);
let mixed3 = [];
mixed3.push(8);
mixed3.push("ds");
mixed3.push(true);
console.log(mixed3);
// function::
let hello;
hello = () => {
    console.log("heloo SHREYYAA");
};
const add = (a, b) => {
    console.log(a * b);
};
add(3, 4);
const add1 = (a, b, c) => {
    console.log(a - b);
    console.log(c);
};
add1(3, 4, true);
const minus1 = (a, b) => {
    console.log(a + b);
};
minus1("shreya", "shet");
console.log(minus1);
const details = (uid, item) => {
    console.log(`${item} has uid of ${uid}`);
};
const greeet = (user) => {
    console.log(`${user}`);
};
//function signature:
//let name1:Function;
// example 1 based on upper way:
let name1;
// we can therefore write:
name1 = (name, place) => {
    console.log(`${name} stays in ${place}`);
};
// example 2:
let calc;
calc = (numone, numtwo, three) => {
    if (three === "add") {
        return numone + numtwo;
    }
    else {
        return numone - numtwo;
    }
};
// example 3:
let logDetails;
logDetails = (object1) => {
    console.log(`${object1.name} is at ${object1.age} years old`);
};
