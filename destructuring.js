/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john =  ages[0];
// let mary =  ages[1];
// let joe =  ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);



// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
}
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);



// Destructuring subsets

// Array Subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages; // First two values assigned
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages; // Commas skip first two items
console.log(maryNative, marySecondary)

// Object Subsets
let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};
let { firstLanguage, thirdLanguage } = languages2 // objects can be destructured by using their property names
console.log(firstLanguage, thirdLanguage);



// Using rest parameter syntax

// Arrays
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favourite, secondFavourite, ...others] = fruits; //rest parameter does not need to be named 'rest'
console.log(favourite);
console.log(secondFavourite);
console.log(others);

// Objects
let favouriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: 'steak',
};
let {brian, anna, ...rest} = favouriteFoods
console.log(brian);
console.log(anna);
console.log(rest);