function roy (name){
    const fullName = name + ' ' + "Roy";
    return fullName;
}

const bikromRo = roy("Bikrom Adatya");
console.log(bikromRo);

console.log("####################")

//Practice-02

function fullName(firstName ,lastName){
    const fullName = firstName + ' ' + lastName;
    return fullName;

}

const adi = fullName("Bikrom","Adatya");
console.log(adi);

//Practice -3 (using bollean value)

function doubleOrHalf(price, isDouble){
    if(isDouble === true){
        const askingPrice = price * 2;
        return askingPrice;
    }
    else{
        const askingPrice = price /2;
        return askingPrice;
    }
}

const myPrice = doubleOrHalf(100, true);
console.log("Price for local people:", myPrice);

const leaderPrice = doubleOrHalf(100, false);
console.log("Price for leaders:",leaderPrice);


function  firstElementDouble(array){
    console.log("Get the peremeter values:",array);
    const firstElement = array[0];
    const double = firstElement * 2;
    return double;

}

const number = [40,4,5,6,7,6,8,9];
const double = firstElementDouble(number);

console.log("Double of the first elements", double);

const student ={
    name: "Bikrom Adatya Roy",
    id:15,
    marks: 90
}
function isStudentAPlus(student){
    console.log("Get the student", student)
    const marks = student.marks;
    console.log("The students mark is:", marks);
    if(marks >=80){
        return true;
    }
    else{
        return false;
    }


}

const isAPlus = isStudentAPlus(student)