/* এই ফাংশনের সব বাগ খুঁজে ঠিক করো — নাম পরিবর্তন করবে না */
function averageResponseTime(times) {
  if (Array.isArray(times) === false) {
        return "Invalid";
   }

   if (times.length === 0) {
        return "Invalid";
    }

   let total = 0;
   for (let i = 0; i < times.length; i++) {
        if (typeof times[i] !== "number") {
            return "Invalid";
        }
        total = total + times[i];
   }

  return total / times.length;
}

//Ans of this code..

// 🔻 Output চেক করার জন্য Test Cases:
console.log(averageResponseTime([120, 200, 150, 130])); // Output: 150
console.log(averageResponseTime([100, 100]));           // Output: 100
console.log(averageResponseTime([]));                  // Output: "Invalid"
console.log(averageResponseTime("logs"));               // Output: "Invalid"
console.log(averageResponseTime([120, "200", 150]));    // Output: "Invalid"
console.log(averageResponseTime([250]));