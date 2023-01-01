//NESTED LOOPS
/*
When we have a loop running inside another loop, we call that a nested loop. 
One use for a nested for loop is to compare the elements in two arrays. For each round of the outer for loop, the inner for loop will run completely.


*/

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}

/*
Let’s think about what’s happening in the nested loop in our example. 
For each element in the outer loop array, myArray, the inner loop will run in its entirety comparing 
the current element from the outer array, myArray[i], to each element in the inner array, yourArray[j]. 
When it finds a match, it prints a string to the console.

*/

//EXERCISE
// Write your code below
let bobsFollowers = ['Jay', 'Don', 'Shane', 'Degray'];
let tinasFollowers = ['Jane', 'Don', 'Jay'];
let mutualFollowers = [];

//create a loop
for (let b = 0; b < bobsFollowers.length; b++) {
  for (let t = 0; t < tinasFollowers.length; t++) {

    if (bobsFollowers[b] === tinasFollowers[t]) {
      mutualFollowers.push(bobsFollowers[b]);   
    }
  }
};


//THE WHILE LOOP

//You’re doing great! We’re going to teach you about a different type of loop: the while loop. To start, let’s convert a for loop into a while loop:
// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
    console.log(counterOne);
  }
   
  // A while loop that prints 1, 2, and 3
  let counterTwo = 1;
  while (counterTwo < 4) {
    console.log(counterTwo);
    counterTwo++;
  }




  //EXERCISE
  const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}



//DO WHILE LOOP
/*
In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run. This is where the do...while statement comes in.

A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met. The syntax for a do...while statement looks like this:


*/
let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString);

/*
In this example, the code block makes changes to the countString variable by appending the string form of the i variable to it. 
First, the code block after the do keyword is executed once. Then the condition is evaluated. If the condition evaluates to true, the block will execute again. 
The looping stops when the condition evaluates to false.

Note that the while and do...while loop are different! Unlike the while loop, do...while will run at least once whether or not the condition evaluates to true.


*/

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 
 
// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);
 
// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};
 


//EXERCISE
// Write your code below
let cupsOfSugarNeeded = 10;
let cupsAdded = 0;

//create do...while loop
do {
  cupsAdded++
  console.log(cupsAdded + ' cup was added')
} while (cupsAdded < cupsOfSugarNeeded);



//THE BREAK KEYWORD
/*
Imagine we’re looking to adopt a dog. We plan to go to the shelter every day for a year and then give up. 
But what if we meet our dream dog on day 65? We don’t want to keep going to the shelter for the next 300 days just because our original plan was to go for a whole year. 
In our code, when we want to stop a loop from continuing to execute even though the original stopping condition we wrote for our loop hasn’t been met, we can use the keyword break.

The break keyword allows programs to “break” out of the loop from within the loop’s block.

Let’s check out the syntax of a break keyword:

*/

for (let i = 0; i < 99; i++) {
    if (i > 2 ) {
       break;
    }
    console.log('Banana.');
  }
   
  console.log('Orange you glad I broke out the loop!');

  /*
This is the output for the above code:

Banana.
Banana.
Banana.
Orange you glad I broke out the loop!


  */


//EXERCISES
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  
   if(rapperArray[i] === 'Notorious B.I.G.') {
      break;
   }
}



console.log("And if you don't know, now you know.");


