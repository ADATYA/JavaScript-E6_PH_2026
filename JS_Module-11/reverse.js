const commitment = "I will work hard and will never give up in any cost";
const parts = commitment.split(' ');
console.log(parts); // Normal output

const reversparts = parts.reverse(); //reverse method
console.log(reversparts);

const reveseCommitment = reversparts.join(' '); //join file with single array line.
console.log(reveseCommitment);

let reverseCom = ' ';
for(const letter of commitment){
    reverseCom = reverseCom + letter;
    console.log(letter, '=>', reverseCom);
}