//Return

function cutHalf(number){
    const half = number /2;
    return half;
    console.log("after return any value:",half);

}

console.log("---------------------");
let result = cutHalf(200);  // function er value ta ke akta veriable er vetor rakha holo.
console.log(result);  // Regult publish kora hobe eita diye.

const number2 = cutHalf(70);

function add(num1,num2){
    const sum = num1 + num2;
    return sum;
}

const total = add(3,7);
console.log("Value of total 1 is :",total);

const total2 =add(result,number2);
console.log("Value of totoal2 is:",total2);