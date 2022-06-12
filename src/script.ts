const character = "abc"
console.log(character);
const character2 = "xyzz"
console.log(character2);

const character4 = "sh"
console.log(character4);

const input = document.querySelectorAll("input");
console.log(input);
input.forEach((i) => {
    console.log(i)
})
let character3 = "qwe";
let age = 3;
let notcoming = true;
character3 = "w"; // but character3 cant be num now 


// circumference of circle
const circle = (diameter: number) => {
    // we can define it like this that the input data will be inte he so string n boolean cant be used as  input
    return diameter * Math.PI;
}
console.log(circle(2));

//  array  it get defined by the first defiend type
let words = ['abc', 'sdf', 'fgh'];
words[0] = 'opo';
//words[1]=90; // will give errror


let mix = [12, 'ad', 44, 'rty']; // for mixed it doesnt matter 
mix[2] = "ert"


// object 

let object1 = {
    name: "asddd",
    age: 50,
    work: "plumber"
};
//object1.age="45" // error
object1.name = "qwre"
// we cant add new properties if object has already defined
// error if newly defined old objebt doesnt follow old format


// object1={
//     name:"sss",
//     age:0,

// }

//  EXPLICIT TYPES

let id_name: string;
let id_number: number;
let logged_or_not: boolean;
let array: string[] = []; // we are defining it as empty array by [] cox just string[] means it is saying array will hve string but we cant add in it

array.push('shreya')


// for mixed array which has all the types
//we use union type and define it like this : 
let union: (string | number | boolean)[] = [];
union.push(true);
union.push(34);
union.push("eee");
console.log(union)


let normalvar: string | boolean | number;
normalvar = "we"


// how to explicit var as object
let object2: {
    name: string,
    age: number,
    attending: boolean,
}
object2 = { name: "noo", age: 45, attending: false }


// any type: it can be of any type

let age1: any = 30;

// so age can be num , string, bool
age1 = 3;
console.log(age1);
age1 = "ddd";
console.log(age1);
age1 = false
console.log(age1);

let mixed3: any[] = [];
mixed3.push(8)
mixed3.push("ds");
mixed3.push(true);
console.log(mixed3);


// function::
let hello: Function;
hello = () => {
    console.log("heloo SHREYYAA")
}
const add = (a: number, b: number) => {
    console.log(a * b)
}
add(3, 4)

const add1 = (a: number, b: number, c?: number | boolean) => {
    console.log(a - b)
    console.log(c)
}
add1(3, 4, true)


const minus1 = (a: string, b: string) => {
    console.log(a + b)

}
minus1("shreya", "shet")
console.log(minus1)


// type aliasies
// we define the types before 
type StringOrNum = string | number;
type objwithSting = { name: string, uid: StringOrNum }

const details = (uid: StringOrNum, item: string) => {
    console.log(`${item} has uid of ${uid}`);
}

const greeet = (user: objwithSting) => {
    console.log(`${user}`)
}


//function signature:

//let name1:Function;

// example 1 based on upper way:
let name1: (a: string, b: string) => void

// we can therefore write:
name1 = (name: string, place: string) => {
    console.log(`${name} stays in ${place}`);
}

// example 2:
let calc: (a: number, b: number, c: string) => number;

calc = (numone: number, numtwo: number, three: string) => {
    if (three === "add") {
        return numone + numtwo
    } else {
        return numone - numtwo
    }
}

// example 3:
 let logDetails:(obj:{name:string,age:string})=>void;

 type person={name:string,age:string};

 logDetails=(object1:person)=>{
     console.log(`${object1.name} is at ${object1.age} years old`);
 }