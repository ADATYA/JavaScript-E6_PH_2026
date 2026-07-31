function calculateAiCost(tokensUsed) {
    // 1. Check if input is a valid non-negative number
    if (typeof tokensUsed !== 'number' || tokensUsed < 0) {
        return "Invalid";
    }

    // 2. Return 0 if tokens used are within the free limit (500)
    if (tokensUsed <= 500) {
        return 0;
    }

    // 3. Calculate cost for extra tokens
    const extraTokens = tokensUsed - 500;
    const extraBlocks = Math.floor(extraTokens / 100);
    const totalCost = extraBlocks * 5;

    return totalCost;
}

console.log(calculateAiCost(300));   // Output: 0
console.log(calculateAiCost(500));   // Output: 0
console.log(calculateAiCost(650));   // Output: 5
console.log(calculateAiCost(1000));  // Output: 25
console.log(calculateAiCost(-10));   // Output: "Invalid"
console.log(calculateAiCost("500")); // Output: "Invalid"
console.log(calculateAiCost(599));   // Output: 0
console.log(calculateAiCost(700));   // Output: 10