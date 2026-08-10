//Reverse an array Type-1
const number = [12,3,4,5,6,7,89,13];

const reversed = number.reverse();
console.log(reversed);

//Reverse an array Type-2
const friends =["adi","sporsho","ankita","Bireswer","Nomita"];
const afterReverse = [];
for(const friend of friends){
    console.log("The name is:",friend);
    afterReverse.unshift(friend); //unshift korar karon holo eita array er shuru theke add kore, jate kore array reverse hoye jai.
    console.log("After reverse:",afterReverse);
}

//Reverse an array Type-3
const digits = [23,54,23,6,4,47,56];

for(let a = 0;a<digits.length;a++){
    console.log("The serial number is:",a,"and the digit value is:",digits[a]);
}

//Reverse for loop to get array elements in reverse order
for(let s =digits.length -1; s>=0;s--){
    console.log(s,digits[s]);
}