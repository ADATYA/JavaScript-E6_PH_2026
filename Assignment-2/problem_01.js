function matchWinner(teamAGoals, teamBGoals) {
    // Write your code here...
    // 1. Check if both inputs are valid numbers
    if (typeof teamAGoals !== 'number' || typeof teamBGoals !== 'number') {
        return "Invalid";
    }

    // 2. Compare goals and return result
    if (teamAGoals > teamBGoals) {
        return "Team A Won";
    } else if (teamBGoals > teamAGoals) {
        return "Team B Won";
    } else {
        return "Draw";
    }
}

console.log(matchWinner(2,1)); //team A winner
console.log(matchWinner(1,3)); //team B winner
console.log(matchWinner(2,2)); //Draw
console.log(matchWinner("3",2)); //Invalid information
console.log(matchWinner(5,null)); // Invalid information

