//alt +shift + A

/**
 * Nested If Else conditions..
 * 
 * 
*/

const salary = 25000;
const isBCS = true;
const hasCar = true;

if (salary > 5000){
    console.log("Well grum for bride")
}
else {
    console.log("What is your problem about arrange marriage?")
}
//----
// OR
//----

//Amara if statement er vetor e ak sathe value add korte pari && / or diye. &&
if(salary > 70000 && isBCS === true) {
    console.log("This is nested loop")
}
else {
    console.log("This is show that the else loop ")
}

// Aksathe 2 ta beshi value add kora jay.. &&
if(salary > 6000 && isBCS === true && hasCar) {
    console.log("This is show the final resule")
}
else {
    console.log("This is show that the else loop ")
}
//------
//  AND
//------

if(salary > 6000 || isBCS === true ) {
    console.log("Bolo baba Argentina jitbe")
}
else {
    console.log("Tou beta fule akta")
}

if(salary > 6000 || isBCS === true || hasCar ) {
    console.log("Bolo baba Germany jitbe")
}
else {
    console.log("Tou beta fule akta")
}

/**
 * -----------------
 * COMPLEX CONDITION
 * -----------------
 */

if((salary > 70000 && hasCar) || isBCS){
    //write here multiple line of this code;
}

if(20<30 || (20 === 20 && hasCar) || isBCS){
    //write mulitple line of code here..
}
