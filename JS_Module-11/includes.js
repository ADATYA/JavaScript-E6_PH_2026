//Practice -00
const email = "foodmanue@gmail.com";
if(email.includes('@')){
    console.log("TRUE");
}

//Practice -01
const email1 = "foodmama@gmail.com";
if(email1.includes('@gmail.com')){
    console.log("Successfull run the code");
}else{
    console.log("ERROR");
}
//NOTE : This is case sensitive 


/**
 * ----------------------
 * endsWith and StartWith
 * ----------------------
*/

const fileName = "My Assignment of javaScript part2.pdf";
if(fileName.endsWith('.pdf')){
    console.log("This file is PDF format");
}else{
    console.log('Show an Error!!');
}

const userName = "@bikrom5711"
if(userName.startsWith('@')){
    console.log("Hello user, welcome");
}else{
    console.log('Show error');
}