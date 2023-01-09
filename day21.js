//ADVANCED JS OBJECTS

//THE THIS KEYWORD
/*
Objects are collections of related data and functionality. We store that functionality in methods on our objects:







*/

const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    }
  };

  //In our goat object we have a .makeSound() method. We can invoke the .makeSound() method on goat.

  goat.makeSound(); // Prints baaa

  /*
Nice, we have a goat object that can print baaa to the console. Everything seems to be working fine. 
What if we wanted to add a new method to our goat object called .diet() that prints the goat‘s dietType?


  */

const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet() {
      console.log(dietType);
    }
  };
  goat.diet(); 
  // Output will be "ReferenceError: dietType is not defined"


  /*
That’s strange, why is dietType not defined even though it’s a property of goat? That’s because inside the scope of the .diet() method, 
we don’t automatically have access to other properties of the goat object.

Here’s where the this keyword comes to the rescue. If we change the .diet() method to use the this, the .diet() works! :




  */

const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet() {
      console.log(this.dietType);
    }
  };
   
  goat.diet(); 
  // Output: herbivore


  /*
The this keyword references the calling object which provides access to the calling object’s properties.
In the example above, the calling object is goat and by using this we’re accessing the goat object itself, and then the dietType property of goat by using property dot notation.



  */


//EXERCISE
const robot = {
    model : '1E78V2',
    energyLevel : 100,
  
    provideInfo() {
      return(`I am ${this.model} and my current energy level is ${this.energyLevel}.`)
    }
    
  };
  
  console.log(robot.provideInfo());



  //ARROW FUNCTIONS AND THE THIS KEYWORD
  /*
Arrow Functions and this
We saw in the previous exercise that for a method, the calling object is the object the method belongs to.
 If we use the this keyword in a method then the value of this is the calling object. 
However, it becomes a bit more complicated when we start using arrow functions for methods. Take a look at the example below:


  */
const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet: () => {
      console.log(this.dietType);
    }
  };
   
  goat.diet(); // Prints undefined


  /*
In the comment, you can see that goat.diet() would log undefined. So what happened? Notice that the .diet() method is defined using an arrow function.

Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object.
 In the code snippet above, the value of this is the global object, or an object that exists in the global scope, which doesn’t have a dietType property and therefore returns undefined.



  */


 //EXERCISE
 const robot = {
    energyLevel: 100,
    checkEnergy() {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  robot.checkEnergy();