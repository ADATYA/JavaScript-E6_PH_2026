// Introduction To Conditionals

/**
 * Conditionals
 * if you go with us in the trip 
 *          then I also go with you :)
 * 
 * -----------------------------
 *           STRUCTURE
 * -----------------------------
 * if(condition){
 *  [I put here multiple line of code..]
 * }
 */

if(true){
    console.log("If the condition was TRUE then the O/P displayed");
}

if(false){
    console.log("If this condition was FALSE then O/P not showend"); // Output show hobe nah eikhane!!
}

//-----

if(7>3){
    console.log("This condition is checking the value");
    console.log("7 is gretter then 3");
}

//-----

const price = 1400;
if(price > 500){
    console.log("Price is greter then values");
    console.log("This is condtional value");
}

const money = 1700;
if(price < money){
    console.log("I will by the porduct!!");
}

const name = "Alu";
if(name  == 'Alu'){
    console.log("Hi, I am mr. Potato");
}

const isPoor = true;
if(isPoor === true){
    console.log("If he is poor then showing the result");
}

const name1 = "Sporsho";
if(name1 == "Sporsho"){
    console.log("Hello my name is",name1); // jodi vaidable data dekhte cahi    
    console.log("Hello my name is" + '',name1);     
    console.log(`Hello my name is ${name1}`); //Best Practice **** 

}