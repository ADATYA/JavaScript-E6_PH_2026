// OBJECT er second Class..

const person={
    name: "Bikrom",
    age: 24,
    profession: "student",
    isSingle:true,
}

console.log(person);

const status = person.age;
console.log(status);

person.age = 26;
console.log(person.age);

person.isSingle = false;
console.log(person.isSingle);
console.log(person);

/**
 * -----------------
 * BRACKET FUNCTION
 * -----------------
*/


const person1={
    name1: "Adatya Roy",
    age1: 27,
    profession1: "student",
    isSingle1:true,
    'home address': "Rajshashi",
    'parent:name' : "Bireswer Roy", 
}
console.log(person1['age1']);
console.log(person1['name1']);
console.log(person1['profession1']);
console.log(person1['isSingle1']);
person['isSingle'] = false;
console.log(person['isSingle']);
console.log(person1);

console.log(person['home address']);
console.log(person['parent:name']);

person['age'] = 100;
console.log(person['age']);
console.log(person);

/*  
| Dot `.`                          | Bracket `[]`                  |
| -------------------------------- | ----------------------------- |
| `person.name`                    | `person["name"]`              |
| Key সরাসরি লিখতে হয়              | Key String হিসেবে লিখতে পারি  |
| Dynamic key-এর জন্য সুবিধাজনক নয় | ✅ Dynamic key ব্যবহার করা যায় |
| Simple & clean                   | More flexible                 |
*/