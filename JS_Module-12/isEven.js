function isEven(number){
    console.log(number, "Devided by 2 result:",number%2);
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
const result = isEven(57);
console.log("The result is :",result);