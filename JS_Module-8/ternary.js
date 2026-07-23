/**
 * ----------------------------------
 * If-Else Shorthand Ternary Operator
 * -----------------------------------
 * 
 * Binary = 2/two
 * Ternary = 3/ three
 * 
 * ------------------------------
 * condition ? if true : if false
 * ------------------------------ 
 */

//Way -01

const age = 20;
if(age >=18){
    console.log("Congratualtion Your are able to be a voter")
}
else{
    console.log("Better luck next time")
}

// Way -02 (Ternery way is sort form to write multiline code to reduce in just single line of code)

age>=18 ? console.log("Welldone New Voter") : console.log("Grow up at fitst kid")

// ----------- ================== --------------------- ======================== ------------------------- =========================


let price = 700;
const isLeader  =true;
//const isLeader  =false;

if(isLeader){
    price =0;
}
else{
     price = price + 300;
}

console.log("The total price is :",price);

// way-02

//price = condition? "true": "false"
price = isLeader? 0 : price + 300;

console.log("Now update price is:",price);