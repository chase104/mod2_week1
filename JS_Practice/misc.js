

const addTwo = (num1, num2) => {
    console.log(num1+num1);
}


addTwo(2,3);
addTwo(12,5);
addTwo(1,1);
addTwo(7,3);


// JavaScript Quiz: Return Values with Spread & Ternary Operators

// 1. What is the final value of 'status'?
let grade = 85;
let status = grade >= 50 ? "Pass" : "Fail";
// Answer: _________

// 2. What is the final value of 'moreNums'?
let nums = [1, 2, 3];
let moreNums = [4, ...nums, 5];
// Answer: _________

// 3. What is the final value of 'price'?
let hasDiscount = true;
let price = hasDiscount ? 50 : 100;
// Answer: _________

// 4. What are the final values of 'array2' and 'array3'?
let array1 = [1, 2, 3];
let array2 = array1;
let array3 = [...array1];
array1.push(4);
// Answer array2: _________
// Answer array3: _________

// 5. What is the final value of 'activity'?
let day = "Saturday";
let activity = day === "Sunday" ? "Relax" : "Work";
// Answer: _________

// 6. What is the final value of 'allFruits'?
let fruits = ["Apple", "Banana"];
let allFruits = [...fruits, "Cherry"];
// Answer: _________

// 7. What is the final value of 'rating'?
let score = 300;
let rating = score > 500 ? "Gold" : score > 250 ? "Silver" : "Bronze";
// Answer: _________

// 8. What is the final value of 'x'?
let x = [10, 20];
let y = [...x];
y[0] = 30;
// Answer: _________

// 9. What is the final value of 'time'?
let isNight = false;
let time = isNight ? "8PM" : "8AM";
// Answer: _________

// 10. What is the final value of 'allLetters'?
let letters = ["a", "b"];
let allLetters = ["c", ...letters, "d"];
// Answer: _________

// 11. What is the final value of 'canDrink'?
let age = 19;
let canDrink = age >= 21 ? "Yes" : "No";
// Answer: _________

// 12. What is the final value of 'arr3'?
let arr1 = [1, 2];
let arr2 = [3, ...arr1, 4];
let arr3 = [...arr2, 5, 6];
// Answer: _________

// 13. What is the final value of 'mood'?
let weather = "rainy";
let mood = weather === "sunny" ? "Happy" : "Sad";
// Answer: _________

// 14. What is the final value of 'moreNumbers'?
let numbers = [5, 6];
let moreNumbers = [...numbers, 7, 8];
// Answer: _________

// 15. What is the final value of 'limit'?
let speed = 60;
let limit = speed > 100 ? "Over Limit" : "Within Limit";
// Answer: _________




// Make a js file (THIS HAS NOTHING TO DO WITH REACT)
// 1. make a class called User that will make objects with email, username, and password properties. 
// 2. use the class to create 3 users that have different information.



let pet = "tiger";
// name = "tiger"

pet = "Super Tiger"
// name = "Super Tiger"







const returnSomething = () => {
    return {name: "simo"}
}


let returnedPerson = returnSomething()

const returnNothing = () => {
    console.log("hi");
}

const returnValue = returnNothing()

const returnNumber = (num) => num>15 && number<30;

let numberIsGood = returnNumberIsGood(2);









let user = {
    email: "chase@gmail.com"
}



if (user.email) {
    // do this
} else {
    // do that
}