const person={
    name: "Bikrom",
    age: 24,
    profession: "student",
    isSingle:true,
}

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

//DELETE Vlaues:

//way-01
delete person.isSingle;

//way02
delete person['profession']

console.log(person);

console.log(Object.entries(person));