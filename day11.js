//ARRAYS
/*
Organizing and storing data is a foundational concept of programming.

One way we organize data in real life is by making lists. Let’s make one here:

New Year's Resolutions:

1. Keep a journal 
2. Take a falconry class
3. Learn to juggle


*/

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

/*
Arrays are JavaScript’s way of making lists. Arrays can store any data types (including strings, numbers, and booleans). Like lists, arrays are ordered, meaning each item has a numbered position.

Here’s an array of the concepts we’ll cover:

let concepts = ['creating arrays', 'array structures', 'array manipulation'];

*/

//CREATE AN ARRAY

//declare a variable 'hobbies'
const hobbies = ['Gaming', 'Football', 'Music'];
console.log(hobbies);



//ASSESSING ELEMENTS IN AN ARRAY
/*
Each element in an array has a numbered position known as its index. 
We can access individual items using their index, which is similar to referencing an item in a list based on the item’s position.

Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1. 
Therefore, the first item in an array will be at position 0. Let’s see how we could access an element in an array:

*/
const hello = 'Hello World';
console.log(hello[6]);
// Output: W




//EXERCISE
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

//create listitem variable
let listItem = famousSayings[0];
console.log(listItem);

console.log(famousSayings[2]);

console.log(famousSayings[3]);


//UPDATE ELEMENT IN AN ARRAY

/*
In the previous exercise, you learned how to access elements inside an array or a string by using an index.
 Once you have access to an element in an array, you can update its value.

*/

let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
 
seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']




//EXERCISE
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';






//ARRAYS WITH LET AND CONST

/*
You may recall that you can declare variables with both the let and const keywords. Variables declared with let can be reassigned.

Variables declared with the const keyword cannot be reassigned. However, elements in an array declared with const remain mutable. 
Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.

*/

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

 
condiments = ['Mayo'];
console.log(condiments);


utensils[3] = 'Spoon';
console.log(utensils);


//THE .LENGTH PROPERTY

/*
One of an array’s built-in properties is length and it returns the number of items in the array. 
We access the .length property just like we do with strings. Check the example below:

*/
const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];
 
console.log(newYearsResolutions.length);
// Output: 2


//EXERCISES

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length); //prnts 3




//THE .PUSH() METHOD

/*
The.push() method is used to add new elements to an array. 

Let’s learn about some built-in JavaScript methods that make working with arrays easier. 
These methods are specifically called on arrays to make common tasks, like adding and removing elements, more straightforward.

One method, .push(), allows us to add items to the end of an array. 
*/

const itemTracker = ['item 0', 'item 1', 'item 2'];
 
itemTracker.push('item 3', 'item 4');
 
console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];



//EXERCISES
const chores = ['wash dishes', 'do laundry', 'take out trash'];

//ADD TWO ELEMMENTS
chores.push('water garden', 'buy coffee');
console.log(chores);



//THE .POP() METHOD

/*
The.pop() method is used to remove the last element from an array. 

Let’s learn about some built-in JavaScript methods that make working with arrays easier.

*/
const newItemTracker = ['item 0', 'item 1', 'item 2'];
 
const removed = newItemTracker.pop();
 
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2


//EXERCISES
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();

console.log(chores);

/*
More Array Methods
There are many more array methods than just .push() and .pop(). You can read about these array methods on the Docs entry for JavaScript Arrays.

.pop() and .push() mutate the array on which they’re called. However, there are times that we don’t want to mutate the original array and we can use non-mutating array methods.
 Be sure to check MDN to understand the behavior of the method you are using.

Some arrays methods that are available to JavaScript developers include: .join(), .slice(), .splice(), .shift(), .unshift(), and .concat() amongst many others. 
Using these built-in methods make it easier to do some common tasks when working with arrays.

*/

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

//removing first item from list
groceryList.shift();
console.log(groceryList);

//adding item to beginning of list
groceryList.unshift('popcorn');
console.log(groceryList);

//single out some items
console.log(groceryList.slice(1, 4));

//log array
console.log(groceryList);

//finding the index of 'pasta'
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);



//ARRAYS AND FUNCTIONS
/*
Throughout the lesson we went over arrays being mutable, or changeable. 
Well what happens if we try to change an array inside a function? Does the array keep the change after the function call or is it scoped to inside the function?

Take a look at the following example where we call .push() on an array inside a function. Recall, the .push() method mutates, or changes, an array:



*/

function changeArray(array) {
  array.push('change');
  console.log(array);
  return array;
}



const flowers = ['peony', 'daffodil', 'marigold'];
 
function addFlower(arr) {
  arr.push('lily');
}
 
addFlower(flowers);
 
console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

/*
Let’s go over what happened in the example:

The flowers array that has 3 elements.
The function addFlower() has a parameter of arr uses .push() to add a 'lily' element into arr.
We call addFlower() with an argument of flowers which will execute the code inside addFlower.
We check the value of flowers and it now includes the 'lily' element! The array was mutated!

*/


//EXERCISE
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr) {
  newArr.pop();
}

removeElement(concept);

console.log(concept);




//NESTED ARRAYS
/*

The nested array is an array of arrays.
Earlier we mentioned that arrays can store other arrays. 
When an array contains another array it is known as a nested array.
 Examine the example below:

*/

const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]

/*
Notice that nestedArr[1] will grab the element in index 1 which is the array [2, 3].
 Then, if we wanted to access the elements within the nested array we can chain, or add on, more bracket notation with index values.


*/
const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2





/*
In the second console.log() statement, we have two bracket notations chained to nestedArr. 
We know that nestedArr[1] is the array [2, 3]. Then to grab the first element from that array, we use nestedArr[1][0] and we get the value of 2.

*/



//EXERCISES
const numberClusters = [[1, 2], [3, 4], [5, 6]];

const target = numberClusters[2][1];
console.log(target); //output '6










