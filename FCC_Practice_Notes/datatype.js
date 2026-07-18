//Integer example.. [Topic-01]
console.log(3);
console.log(-37);

// Floting Point..
console.log(3.1416);
console.log(-13.14);

//String value...
console.log("I love to solving code and write the code"); // String dobble "" cote using.
console.log('I love my country'); //Single '' line of code

//Boolean type
const isordenary = false;
console.log(isordenary);

let ordenary = true;
console.log(ordenary);

var extraordenary = true;
console.log(extraordenary);


var extraordenary = true;
console.log(typeof extraordenary);

// "undefined" means a variable has been declared but hasn't been given a value yet. You will learn more about this in the next lesson.

// "null" means the variable has been intentionally set to "nothing" and does not hold any value. We will explore more on how this works in future lessons.

const person = {
    name:"Bikrom Roy",
    age: 24,
    home:"Natore"
}
console.log(person); //Direct declear variable and show ans as set version.

// Note: 1st error: variable declear kori nai. 2nd error: object er vetore ; na bose , comma bosbe.
console.log(person.name);   // Dot Notation
console.log(person.age);    // Dot Notation
console.log(person.home);   // Dot Notation

console.log(person["name"]); // Bracket Notation
console.log(person["age"]);  // Bracket Notation
console.log(person["home"]); // Bracket Notation

// A Symbol is a special type of value in JavaScript that is always unique and cannot be changed. It's often used to create unique labels or identifiers for properties:
Symbol('mySymbole');

// Note : "Symbol" and "BigInt" are two types that are "less commonly" used, but they are still important to know about.

let age;
console.log(age); // undefined

let age1 = 20;
console.log(age1); // defined

// Bad variable names
let x = 10;
let y = "John";

// Good variable names
let age2 = 30;
console.log(age2);

// ------ XXXXX -----  00000000  -----

// String Immutability.. [Topic-02]
let singlequotes = 'This is a single cote of string';
console.log(singlequotes);

let dubolequotes="This is double line strings set"
console.log(dubolequotes);

// const improperStr = "Do not do this'; 
// console.log(improperStr);    //error occurred

let developer = "Sporsho";
console.log(developer);

developer = "Adatya";
console.log(developer);

//String Concatenation and how you concatenate strings with variables? (part-2)

let firstname = "Bikrom Adatya";
let lastname = "Roy";
let fullname = firstname +" "+lastname;
console.log(fullname);


let firstname1 = "Adatya";
let lastname1 = "Roy";
let fullname1 = firstname1 + lastname1;
console.log(fullname1);

let gretting = "Hello Everyone";
gretting += ", I am an Engineer!";  //The += operator is useful when building up a string step by step or appending new content to an existing string variable.
console.log(gretting);

// Another way you can "concatenate strings" is to use the "concat()" method.

const str1 = "Hello developers";
const str2 = "Wellcome to the conferance.";
const result = str1.concat(' ',str2);
console.log(result);