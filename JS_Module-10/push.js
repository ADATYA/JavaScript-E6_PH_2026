//### AddRemove Elements from Arrays Using push, pop, shift & unshift

//All about Push Method...
const friends = ["Prince", "Pranto", "Manob"];
console.log(friends);
friends.push("Akash","Ankur") // I am adding multiple elements in one array list in the end of the main list.
friends.push('Alamin');
friends.push('Rohit');
friends.push('Rahul');
console.log(friends);

//All about Pop Method...

const number = [1,2,3,4,5,6,7,8,9];
console.log(number);
const firstOut = number.pop();
console.log(number); //Pop method removes the last element from the array list.
console.log(number);
const secondOut = number.pop();
console.log(number);
console.log(firstOut, secondOut); //I am printing the removed elements from the array list.
