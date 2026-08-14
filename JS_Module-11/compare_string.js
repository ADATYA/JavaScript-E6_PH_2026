// Practice -00
const subject ="Computer Science and Engineeing";
const book = "Computer Science and engineeing";
console.log(subject.toLowerCase());
if(subject === book){
    console.log("I love to write and understanding coding knowladge");

}

else{
    console.log("I did not understand programming language");
}

// Practice -01
const emailUserPorvided = "bikromRoy123@gmail.com";
const emailSavedDatabase= "Bikromroy123@gmail.Com";

if(emailSavedDatabase.toLowerCase() === emailUserPorvided.toLowerCase()){
    console.log("emailUserProvided");
}else{
    console.log('This is show validarion error');
}

//Practice -02
const emailUser = "bikromroy12@gmail.com";
const emailid =  "   bikromroy12@gmail.com ";
console.log(emailid.trim());

if(emailUser === emailid){
    console.log("Welcome to new page");
}else{
    console.log("Sorry !! Login unsuccessfull");
}

/**
 * This is case sensitive
 * trim , trimStart , trimEnd
*/