const numbers = [1,3,4,5,6,8,9]

let sum =0;
for(const num of numbers){
    sum = sum + num;
    console.log("The number is",num, "The sum value is:",sum);

}
//console.log(sum);

//Type -2

const odds = [23,13,71,25,37];

let sumOdds =0;
for (const num of odds){
    sumOdds = sumOdds + num;

}
 const evens = [24,94,54,3,5,34];

let sumEvens = 0;
for (const num of evens){
    sumEvens = sumEvens + num;
}
function sumOfArray(array){
    console.log("Inside the function",array);
    let sum = 0;   //same jagay same name e variable declear kora jay nah but but function er vetor e variable hidabe declear kora jay.
    for(const num of array){
        console.log(num)
        sum = sum + num;
        //return sum;
    }
    return sum;
}
const result = sumOfArray(numbers);
console.log("Sum of array", result);
console.log("############ ------------ ###########");
const resultOdd = sumOfArray(odds);
console.log("Sum of odd numbers", resultOdd);

const resultEven = sumOfArray(evens);
console.log("Sum of even numbers:",resultEven);