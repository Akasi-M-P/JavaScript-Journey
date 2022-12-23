/*
Kelvin Weather
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.

*/




// create variable 'kelvin' and assign value to it
const kelvin = 293; 

// create variable 'celsius' and assign value to it
const celsius = kelvin - 273; 

// create variable 'fahrenheit' and assign value to it
let fahrenheit = celsius * (9 / 5) + 32;

// Rounding down fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

// Print temperature in fahrenheit using string interpolation
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)



/*
Convert celsius to the Newton scale using the equation below
Newton = Celsius * (33/100)

Round down the Newton temperature using the .floor() method
Use console.log and string interpolation to log the temperature in newton to the console

*/


//create variable 'kelvin' and assign a value to it
const kelvin = 293;

//create variable 'celsius' and assign a value to it
let celsius = kelvin - 273;


//create variable 'newton' and assign a value to it
let newton = celsius * (33 / 100);

//round down Newton temperature
newton = Math.floor(newton);

//print temperature in newton using string interpolation
console.log(`The temperature is ${newton} degrees Newton`)



