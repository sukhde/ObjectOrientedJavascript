// This function returns a random element from a given array
const randomElement = function(array) {
  return array[Math.floor(Math.random()*array.length)]
}


const brands = ["Apple", "Dell", "Asus", "Acer", "Samsung", "HP", "BenQ"];
const cpus = ["Core i7", "Xeon", "Pentium", "Athlon", "ARM", "Celeron"];
const ram = [4, 8, 12, 16, 32, 128, 16];
const hardDrive = ["1TB", "500GB", "30MB", "500MB", "512KB", "32GB", "128GB"];
const computerTypes = ["Desktop", "Laptop"];
const price = [125, 899, 1999, 5000, 300, 1000000]
const computers = [];

for(let x = 0; x < 10; x++) {
  // Create an array of new objects here
  // Add them to the array of 'computers' created above
  
  // Eeach object should be created using object literal syntax
  // Each object should have a random CPU, a random amount of RAM and a random size
  // Hard Disk Drive (HDD), and a random brand assigned, using the function randomElement
  // declared above.

  // each computer should also have a function called boot() that will set a property
  // each computer should also have a function called shutdown() that will set the property of
  // 'running' to false
}

for(const computer of computers) {
  // Ooops, I forgot, some computers are Laptops and some are Desktops
  // We better at that now
  // You should try using the square bracket notation '[]' you learned in udacity to 
  // add a random computer type to computer
}

// Great, lets see what you got!

console.log(...computers)

// ^----- This doesn't print very nice, just a bunch of objects.
// Maybe loop through each object and print out the following properties
// using a template literal 
// The properties are: brand, ram, cpu, harddrive
// Maybe make a sentence like this:
// "Computers for sale:
// 1. Desktop computer - cpu Brand w/ XXGB of RAM, XXXGB HDD, 
// 2......
// ...
// 10...."

// I almost forgot! I need to be able to remove some hardware from computers
// to help reduce the price. Write this function that accepts a string 'component'
// computer object, and deletes that property from the object
// using bracket notation. Lucky, you don't have to return the object when your done
// because objects are passed by reference!
// Oh, if your going to remove some hardware, you better also reduce the price - 
// we'll slash 25% off the current price.
function removeComponent(component, computer) {

}

// Another computer just landed arrived, I need to add it to the current inventory
// Please add another one using the object constructor notation.
// It has the following properties: 
// It's an Apple, Core 2 Duo w/ 2GB of RAM and 250GB HardDrive
// oh, and it's a laptop.

const newComputer = new Object(); // Here, I even got your object started

// make sure you add it to the computers array!!!



for(let x = 0; x < 3; x++) {
  // Some of our prices are too high, select 3 computers at random and remove a any component you want
  // from each. This can help reduce our prices!
}

// Before we sell these things though. Let's turn them all on, and make sure that they work!
// Loop through each computer again and boot it up!

// Print out the state of each computer! Like this:

// Computer #1 - The 'insert brand name here' turned on!
// ...
// Computer #11 - The 'insert brand name here' turned on!

// Finally, I need a duplicate
// Select one computer at random and make me a copy
// Make sure the 2 of them have exactly the the same properties
// Just to make sure, we should compare them - and print the result out

console.log(`The new computer ${newComputer === oldComputer ? "is" : "is not" } the old computer`);

// Woah, why didn't that work?
// They aren't the same computer! They just have the same components and stuff.
// Comparing objects mean your comparing  if the are THE SAME OBJECT 
// Not that they just look the same or sound the same, or have the same components,
// but that they actually refer to the same thing! 

// Let's make them THEM SAME computer, shall we!
newComputer = oldComputer;

// Now both of those variables refer to the SAME computer! Check it out.

console.log(`The new computer ${newComputer === oldComputer ? "is " : "is not " } the old computer`);

// And if I add a component to one

oldComputer.gpu = "128GB";

// It's added to the other

console.log(newComputer.gpu);

// why? because ITS THE SAME ONE!

// Go ahead, remove the gpu from the newComputer and print out the gpu property from the oldComputer

// Go ahead, remove the gpu from the newComputer and print out the gpu property from the oldComputer

// And now for the last time..
// Loop through the computers and print out the following properties
// using a template literal 
// The properties are: brand, ram, cpu, harddrive
// Maybe make a sentence like this:
// "Computers for sale:
// 1. Desktop computer - cpu Brand w/ XXGB of RAM, XXXGB HDD, 
// 2......
// ...
// 10...."
