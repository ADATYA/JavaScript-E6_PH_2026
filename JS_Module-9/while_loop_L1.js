/**
 * for(let a =300; a<=700;a++){
 * further coder add here...
 * }
 * --------------------
 * WHILE LOOP STRUCTURE
 * --------------------
 * Initial value declearation..
 * let count = 300;
 * while(count <=700){
 * console.log("This is while loop values",count);
 * count ++;
 * }
 * 
*/

let a = 10;
while(a <20){
    console.log("This is inside while loop value : ",a);
    a++;
}

//Exercise:::

let number = 10;
while (number <=13){
    console.log("This is exercise while loop practice final value :",number);
    number ++;
}

/**Why const variable not work in while loop value ?
 * Ans: const Variable-এর Value পরিবর্তন (reassign) করা যায় না, কিন্তু while Loop-এ সাধারণত প্রতিবার Variable-এর Value Update করতে হয় (যেমন i++)।
 * তাই while Loop-এর Counter হিসেবে const ব্যবহার করলে "Assignment to constant variable" Error হয়; এর বদলে let ব্যবহার করতে হবে।
*/
