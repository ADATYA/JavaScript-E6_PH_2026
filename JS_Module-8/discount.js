const totlaAmount =50000;

if(totlaAmount > 50000){
    const discount = 30;
    const discountAmount = totlaAmount /100 * discount;
    const payment = totlaAmount - discountAmount;
    console.log(payment);
}
else if(totlaAmount > 20000){
    const discount = 20;
    const discountAmount = totlaAmount /100 * discount;
    const payment = totlaAmount - discountAmount;
    console.log(payment);
}
else if(totlaAmount > 10000){
    const discount = 10;
    const discountAmount = totlaAmount /100 * discount;
    const payment = totlaAmount - discountAmount;
    console.log(payment);
}
else {
    console.log("This show and error thats why else show in outpute");
}