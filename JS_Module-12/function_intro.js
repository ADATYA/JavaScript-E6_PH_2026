/**
 * ---------
 * FUNCTION 
 * ---------
 * Function
 * give a valid name
 * give two bracket
 * after finis first brackt put second bracket
 * Inside the second bracket // put all the code for function.
*/

//Decleartion of the function....

function buyCar(){
    console.log("Name of the car is BMW");
    console.log("The color of the car is pure Black");
    console.log("Model of the car is M5 latest edition");
}

function myCarBmw(){
    console.log("1: I love to drive my core soo fast");
    console.log("2: Wash my care evey single day");
}

// Call the function...
// Write the fuction name and then two first breackts

myCarBmw()


//// ---------
//// PRACTICE
////----------
let number1 =12;
let number2 =12;

function addNmuber(){
    if(number1 = number2){
        console.log("Print Successfull");
    }else{
        console.log("ERROR");
    }
    console.log("Final line exit");
}
addNmuber()


//// ---------
//// PRACTICE 2
////----------

function addSum (b,s){
    const result = b+s;
    return result;
}
const total = addSum(3,7);
console.log(total);

//// ---------
//// PRACTICE 3
////----------

function fishCurry(fish,vegetable,spices){
    console.log("boil mastedroil carefully");
    console.log("fry the spices in dry condition");
    console.log("put the vagitables");
    console.log(fish +" "+ "Served");

    return "The delicious fishCurry was ready";

}

const result = fishCurry("Hilsha", "Poteto","Garlic", "Onion");
console.log(result);