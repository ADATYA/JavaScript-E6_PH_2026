//My code..

const age =22;
const hasVoterId = true;

if(age > 18){
    if(hasVoterId){
        console.log("Vote for the Change")
    }
    else{
        console.log("Get your id card first")
    }
}
// ---------------- ============= ------------------------------

// Code from Gemini 

// A list of voters with their age and registration status
let voters = [
  { name: "Alice", age: 20, isRegistered: true },
  { name: "Bob", age: 16, isRegistered: true },
  { name: "Charlie", age: 22, isRegistered: false }
];

// Loop through each person one by one
for (let i = 0; i < voters.length; i++) {
  let person = voters[i];

  // Condition 1: Check age AND registration status
  if (person.age >= 18 && person.isRegistered === true) {
    console.log(person.name + " CAN vote! ✅");
  } 
  // Condition 2: If they are under 18
  else if (person.age < 18) {
    console.log(person.name + " CANNOT vote (Too young) ❌");
  } 
  // Condition 3: If they aren't registered
  else {
    console.log(person.name + " CANNOT vote (Not registered) ❌");
  }
}

