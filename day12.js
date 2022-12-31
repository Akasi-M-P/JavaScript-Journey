//LOOPS
/*
A loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition is reached. 
As a programmer, you’ll find that you rely on loops all the time! You’ll hear the generic term iterate when referring to loops; iterate simply means “to repeat”.

When we need to reuse a task in our code, we often bundle that action in a function. 
Similarly, when we see that a process has to repeat multiple times in a row, we write a loop. 
Loops allow us to create efficient code that automates processes to make scalable, manageable programs.


Repeating Tasks Manually
Before we write our own loops let’s take a moment to develop an appreciation for loops. 
The best way to do that is by showing you how cumbersome it would be if a repeated task required you to type out the same code every single time.


*/

// Write your code below
const vacationSpots = ['France', 'Canada', 'Sweden'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);







//THE FOR LOOP
/*
Instead of writing out the same code over and over, loops allow us to tell computers to repeat a given block of code on its own. One way to give computers these instructions is with a for loop.

The typical for loop includes an iterator variable that usually appears in all three expressions. The iterator variable is initialized, checked against the stopping condition, and assigned a new value on each loop iteration. Iterator variables can have any name, but it’s best practice to use a descriptive variable name.

A for loop contains three expressions separated by ; inside the parentheses:

an initialization starts the loop and can also be used to declare the iterator variable.
a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
an iteration statement is used to update the iterator variable on each loop.
*/

for (let counter = 0; counter < 4; counter++) {
    console.log(counter);
  }

/*OUTPUT 
0
1
2
3
*/

//EXERCISES
// Write your code below
for (let idNumber = 5; idNumber < 11; idNumber++) {
    console.log(idNumber);
  }
  
/*OUTPUT 
5
6
7
8
9
10

*/


/*
LOOPING IN REVERSE

What if we want the for loop to log 3, 2, 1, and then 0? With simple modifications to the expressions, we can make our loop run backward!

To run a backward for loop, we must:

Set the iterator variable to the highest desired value in the initialization expression.
Set the stopping condition for when the iterator variable is less than the desired amount.
The iterator should decrease in intervals after each iteration.


*/

/*
Make a for loop that loops backwards printing 3 to 0 to the console. 
Use the >= comparison operator in your stopping condition and the -- operator in your iteration statement.
*/
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
  }



//LOOPING THROUGH ARRAYS

/*for loops are very handy for iterating over data structures. For example, we can use a for loop to perform the same operation on each element on an array. Arrays hold lists of data, like customer names or product information. Imagine we owned a store and wanted to increase the price of every product in our catalog. That could be a lot of repeating code, but by using a for loop to iterate through the array we could accomplish this task easily.

To loop through each element in an array, a for loop should use the array’s .length property in its condition.

Check out the example below to see how for loops iterate on arrays:
*/

const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}
/*OUTPUT:
Grizzly Bear
Sloth
Sea Lion

*/


/*
Write a for loop that iterates through our vacationSpots array using i as the iterator variable.

Inside the block of the for loop, use console.log() to log each element in the vacationSpots array after the string 'I would love to visit '. 
For example, the first round of the loop should print 'I would love to visit Bali' to the console.

*/

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i]);
}