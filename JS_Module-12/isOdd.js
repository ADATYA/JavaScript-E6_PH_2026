function isOdd(number){
    console.log(number,"Divided by 2 result is : ", number %2);
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
const result = isOdd(47)
console.log("Is even:", result);