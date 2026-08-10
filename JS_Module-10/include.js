const numbers = [12,14,16,18,20];
const numbers1 = [1,2,3];
const hasItem = numbers.includes(14); //true
console.log(hasItem);

// Checking value using if conditions..

if(numbers.includes(15)){
    console.log("Item is present in the array list");
}
console.log("End the condition...");

//This is case sensitive method, so it will return false if the value is not present in the array list.

