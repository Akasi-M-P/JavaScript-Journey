//FACTORY FUNCTIONS

/*So far we’ve been creating objects individually, but there are times where we want to create many instances of an object quickly. 
Here’s where factory functions come in. A real world factory manufactures multiple copies of an item quickly and on a massive scale. 
A factory function is a function that returns an object and can be reused to make multiple object instances. 
Factory functions can also have parameters allowing us to customize the object that gets returned.
*/

const monsterFactory = (name, age, energySource, catchPhrase) => {
    return { 
      name: name,
      age: age, 
      energySource: energySource,
      scare() {
        console.log(catchPhrase);
      } 
    }
  };


  /*
In the monsterFactory function above, it has four parameters and returns an object that has the properties: name, age, energySource, and scare(). 
To make an object that represents a specific monster like a ghost, we can call monsterFactory with the necessary arguments and assign the return value to a variable:





  */
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'



//EXERCISE

const robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
  
      beep() {
        console.log('Beep Boop');
      }
    }
  
  };
  
  const tinCan = robotFactory('P-500', true);
  tinCan.beep();
  
//PROPERTY VALUE SHORTHAND
/*
ES6 introduced some new shortcuts for assigning properties to variables known as destructuring.

In the previous exercise, we created a factory function that helped us create objects. 
We had to assign each property a key and value even though the key name was the same as the parameter name we assigned to it. 
To remind ourselves, here’s a truncated version of the factory function:



*/
const monsterFactory = (name, age) => {
    return { 
      name: name,
      age: age
    }
  };


  /*Imagine if we had to include more properties, that process would quickly become tedious! But we can use a destructuring technique, 
  called property value shorthand, to save ourselves some keystrokes. 
  The example below works exactly like the example above:

  */

  const monsterFactory = (name, age) => {
    return { 
      name,
      age 
    }
  };


  //EXERCISE
  const robotFactory = (model, mobile) => {
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // To check that the property value shorthand technique worked:
  const newRobot = robotFactory('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)


  //DESTRUCTURED ASSIGNMENT
  const robotFactory = (model, mobile) => {
    return {
      model,
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // To check that the property value shorthand technique worked:
  const newRobot = robotFactory('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)



  const residence = vampire.residence; 
  console.log(residence); // Prints 'Transylvania' 


  const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'


const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'



//EXERCISE
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  
  const {functionality} = robot;
  
  functionality.beep();
  