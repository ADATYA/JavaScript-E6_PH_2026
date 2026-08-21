/**
 * 1.Loop through the array to get each elemets
 * 2. Identify even numbers
 * 3.
 */

const evens =[];
const number =[12,87,14,51,36,46];

for(const num of number){
    console.log(num);
   
    if(num %2 === 0){
        console.log("Even number is:",num);
        evens.push(num);
    }
}

function getEvenNumbers (array){
    const evens = [];
    for(const num of array){
        if(num %2 === 0){
            evens.push(num);
        }

    }
            return evens;

}

const result = getEvenNumbers(number);
console.log("Final result is:",result);