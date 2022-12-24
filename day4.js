/*
Dog Years

Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. 
In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
Before you start doing the math in your head, let a computer take care of it! With your knowledge of math operators and variables, use JavaScript to convert your human age into dog years.
*/




//create variable 'myAge' and assign to a value
const myAge = 50;

//create variable 'earlyYears' and assign to a value
let earlyYears = 2;

//multiply earlyYears by 10.5 and reasign value to it
earlyYears *= 10.5;

//create variable 'laterYears' and myAge result above to it
let laterYears = myAge - 2;

//multiply laterYears by 4 and reassign the value to it
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//add earlyYears and laterYears to myAgeInDogYears
let myAgeInDogYears = earlyYears + laterYears;

//create myName and assign a value
let myName = 'Peter Akasi'.toLowerCase();

//log your name and age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`)


//OUTPUT
/*
21
192
My name is peter akasi. I am 50 years old in human years which is 213 years old in dog years
*/