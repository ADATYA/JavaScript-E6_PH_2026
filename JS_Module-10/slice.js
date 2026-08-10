const numbers = [1,3,4,6,8,9,3,46,5];
 const slice = numbers.slice(3,9);
 console.log(slice);
 // array ar akta ongsho copy kore.
 //Slice method kono array value change kore nah!!!
// akta notun array return kore.
 const parts = numbers.splice(2,3);
 console.log(parts);