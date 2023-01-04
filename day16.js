// THE .FILTER() METHOD:
/*
Another useful iterator method is .filter(). Like .map(), .filter() returns a new array. 
However, .filter() returns an array of elements after filtering out certain elements from the original array. 
The callback function for the .filter() method should return true or false depending on the element that is passed to it. 
The elements that cause the callback function to return true are added to the new array. Take a look at the following example:



*/
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
const shortWords = words.filter(word => {
  return word.length < 6;
});

/*
words is an array that contains string elements.
const shortWords = declares a new variable that will store the returned array from invoking .filter().
The callback function is an arrow function that has a single parameter, word. Each element in the words array will be passed to this function as an argument.
word.length < 6; is the condition in the callback function. Any word from the words array that has fewer than 6 characters will be added to the shortWords array.

*/


console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']





//EXERCISE
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(randomNumber => {
  return randomNumber < 250;
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(favoriteWord => {
  return favoriteWord.length > 7;
});



//THE .FINDINDEX METHODS
/*
We sometimes want to find the location of an element in an array. 
That’s where the .findIndex() method comes in! Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.

jumbledNums is an array that contains elements that are numbers.
const lessThanTen = declares a new variable that stores the returned index number from invoking .findIndex().
The callback function is an arrow function that has a single parameter, num. Each element in the jumbledNums array will be passed to this function as an argument.
num < 10; is the condition that elements are checked against. .findIndex() will return the index of the first element which evaluates to true for that condition.
*/

console.log(lessThanTen); // Output: 3 

console.log(jumbledNums[3]); // Output: 5

const greaterThan1000 = jumbledNums.findIndex(num => {
    return num > 1000;
  });
   
  console.log(greaterThan1000); // Output: -1





  //EXERCISE
  const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

//INVOKE .FINDiNDEX
const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});



//THE .REDUCE() METHOD
/*
Another widely used iteration method is .reduce(). 
The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array. Take a look at the example below:







Now let’s go over the use of .reduce() from the example below:

numbers is an array that contains numbers.
summedNums is a variable that stores the returned value of invoking .reduce() on numbers.
numbers.reduce() calls the .reduce() method on the numbers array and takes in a callback function as argument.
The callback function has two parameters, accumulator and currentValue. The value of accumulator starts off as the value of the first element in the array and the currentValue starts as the second element. 
To see the value of accumulator and currentValue change, review the chart above.
As .reduce() iterates through the array, the return value of the callback function becomes the accumulator value for the next iteration, currentValue takes on the value of the current element in the looping process.

*/
const numbers = [1, 2, 4, 10];
 
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
 
console.log(summedNums) // Output: 17




const numbers = [1, 2, 4, 10];
 
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()
 
console.log(summedNums); // Output: 117




//EXERCISES
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);



//  EXERCISES
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter((word) => {return word.length > 5});


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {return word.length > 5}));




//EXERCISES

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);
