// Step 1: Declare variables using 'let' and assign initial string values
let adjective = "friendly";
let noun = "dragon";
let verb = "excited";
let place = "cave";
let adjective2 = "smoky";
let noun2 = "tacos";

// Step 2: Build the first story using template literals
let firstStory = `Once upon a time, there was a(n) ${adjective} ${noun} who loved to eat ${noun2}. The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`;

// Step 3: Log the first story to the console
console.log(`First story: ${firstStory}`);

// Step 4: Reassign new values to the variables for the second story
adjective = "grumpy";
noun = "wizard";
verb = "angry";
place = "castle";
adjective2 = "glowing";
noun2 = "apples";

// Step 5: Build the second story using the reassigned variables
let secondStory = `Once upon a time, there was a(n) ${adjective} ${noun} who loved to eat ${noun2}. The ${noun} lived in a ${place} and had ${adjective2} nostrils that blew fire when it was ${verb}.`;

// Step 6: Log the second story to the console
console.log(`Second story: ${secondStory}`);


/// Output:

console.log("First story: " + firstStory);

console.log("Second story: " + secondStory);