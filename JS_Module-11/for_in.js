const numbers = [11,22,45,32,45,43,65,76,12];
for(const number of numbers){
    console.log(number)
}

const student = {
    name: "Sporsho",
    age:24,
    id:'1234',
    fevSub: ["Overthinking","anger","mentorship","maturity"]
}

//for_ of = array
//for_ in = Object

for(const key in student){
    console.log(key);

    // const key1 = 'name';
    const value = student[key];
    console.log(key, value);
}

const keys = Object.keys(student);
console.log(keys);