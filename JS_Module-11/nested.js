const college = {
    name: "QCSC",
    address: "Natore",
    students:'1000',
    events: ['21feb','Independent Day','Vectory Day'],
    people:{
        count:300,
        principal:{
            name:"Tarek Rahaman",
            yearsOfExperience: 12,
            positionHold:1,
            degree: "Computer Science Engineer",
        }
    }
}

console.log(college);
console.log(college.people);
console.log(college.students);

console.log(college.people.count);

console.log(college.people.principal.name);

console.log(college['people']['principal'].name);


//Changing the value of event
college.event[2] = "Durga puja holidays";
console.log(college.events);
