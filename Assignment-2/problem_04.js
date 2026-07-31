function topRatedRestaurant(restaurants) {
    // 1. Check if input is a valid non-empty array
    if (!Array.isArray(restaurants) || restaurants.length === 0) {
        return "Invalid";
    }

    // 2. Track the restaurant with the highest rating
    let topRestaurant = restaurants[0];

    for (let i = 1; i < restaurants.length; i++) {
        if (restaurants[i].rating > topRestaurant.rating) {
            topRestaurant = restaurants[i];
        }
    }

    // 3. Return the name in uppercase
    return topRestaurant.name.toUpperCase();
}

// Ans showing code here...

console.log(topRatedRestaurant([{"name":"Chillox","rating":4.5},{"name":"Sultan's Dine","rating":4.8}])); 
// Output: "SULTAN'S DINE"

console.log(topRatedRestaurant([{"name":"KFC","rating":4.2},{"name":"Pizza Hut","rating":4.6}])); 
// Output: "PIZZA HUT"

console.log(topRatedRestaurant([])); 
// Output: "Invalid"

console.log(topRatedRestaurant("restaurants")); 
// Output: "Invalid"

console.log(topRatedRestaurant([{"name":"Burger King","rating":3.9}])); 
// Output: "BURGER KING"
