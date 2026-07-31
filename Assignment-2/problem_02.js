function isElevatorSafe(weights) {
    // 1. Check if the input is a valid array
    if (!Array.isArray(weights)) {
        return "Invalid";
    }

    // 2. Calculate the total weight
    let totalWeight = 0;
    for (let i = 0; i < weights.length; i++) {
        totalWeight += weights[i];
    }

    // 3. Return true if <= 400, else false
    return totalWeight <= 400;
}

// Showcase the output of the answer and checking demo functioanlity of answer.

console.log(isElevatorSafe([60, 75, 50]));       // Output: true
console.log(isElevatorSafe([90, 100, 95, 120]));  // Output: false
console.log(isElevatorSafe([400]));              // Output: true
console.log(isElevatorSafe("60,75,50"));         // Output: "Invalid"
console.log(isElevatorSafe([]));                 // Output: true
console.log(isElevatorSafe({"weight": 60}));     // Output: "Invalid"