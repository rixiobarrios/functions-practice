/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1: DONE
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */
function sayHello() {
  sayHello = "hello world";
  console.log(sayHello);
}
sayHello();
/*
 * Prompt 2: DONE
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */
function print(message) {
  console.log(message);
}
print("carpe diem");
/*
 * Prompt 3: DONE
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 */
function printMessage(message) {
  return `Today's message is ${message}`;
}
console.log(printMessage("no message"));
/*
 * Prompt 4: DONE
 *
 * Fix the following function:
 */

// /** Original Problem - do not modify */
// function (a) {
//   return a ** 2
// }

/** Your Solution */
function myNum(a) {
  return a ** 2;
}
console.log(myNum(3));
/*
 * Prompt 5: DONE
 *
 * Create a function called reverseMessage. This function should take
 * a parameter called message. When invoked and passed a string, print the
 * string in reverse. (hint: look up some ways of doing this.)
 */
let reverseMessage = function(message) {
  return message
    .split("")
    .reverse("")
    .join("");
};
console.log(reverseMessage("hey Jude"));
/*
 * Prompt 6: DONE
 *
 * Create a function called multiply that takes two parameters: a and b. When
 * invoked, multiply a times b. If b an argument is not passed in for b, then
 * double a (i.e. multiply it by two).
 *
 * Hint: use a default parameter.
 */
function multiply(a, b = 2) {
  console.log(a * b);
}
multiply(8, 2);
multiply(8);
/*
 * Prompt 7: DONE
 *
 * Fix the following code.
 */

// /** Original Problem - do not modify */
// function makePerson(firstname, lastname) {
//   firstname: firstname,
//     lastname: lastname
// }

// const zakk = makePerson('Zakk', 'F')
// const jimmy = makePerson('Jimmy', 'B')

/** Your Solution */
function makePerson(firstname, lastname) {
  this.firstName = firstname;
  this.lastName = lastname;
}

const zakk = new makePerson("Zakk", "F");
const jimmy = new makePerson("Jimmy", "B");

console.log(zakk);
console.log(jimmy);

/*
 * Prompt 8: DONE
 *
 * Write a function that returns an object. The object can be anything.
 */
function returnObject(parameter1, parameter2) {
  let object = {
    peace: parameter1,
    whos: parameter2
  };
  return object;
}
console.log(returnObject("sells", "buying"));

/*
 * Prompt 9: DONE
 *
 * Write a function that returns an array. The array can be of anything.
 */
function returnArray(city, miles) {
  let array = [city, miles];
  return array;
}
returnArray("Indianapolis", 500);
console.log(returnArray("Indianapolis", 500));
/*
 * Prompt 10:
 *
 * Write a function that, when called, adds a number passed in as a parameter to
 * the sum variable below. Invoke your method a few times and then print the sum
 */
// /** Starter Code */
// let sum = 0;

// /** Your Solution */
// let sum = 0;
// function myFunc
/*
 * Prompt 11: DONE
 *
 * Write a function that takes an array of number values and returns the sum.
 * Test it out to make sure it works.
 */
var array = [2, 4, 6, 8];
var sum = 0;
for (var i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log(sum);
// sum = 10
/*
 * Prompt 12: DONE
 *
 * Write a function that takes a string and returns an array of every word in
 * the string.
 */
function string() {
  var string = "baby its cold outside";
  var res = string.split(" ");
  return res;
}
console.log(string());
/*
 * Prompt 13: DONE
 *
 * How can you write a function so that this expression works? It should print
 * the string "this works!"
 */

// /** Starter Code */
// testFunc()();

// /** Your Solution */
let testFunc = word1 => word2 => word1 + word2;
console.log(testFunc("this ")("works!"));

/*
 * Prompt 14: DONE
 *
 * Write a function that takes the add function below as a parameter and invokes
 * it, passing in 2 and 4.
 */

// /** Starter Code */
// function add(a, b) {
//   a + b;
// }

/** Your Solution */
function add(a, b) {
  return a + b;
}
add(2, 4);
console.log(add(2, 4));
/*
 * Prompt 15:
 *
 * Write a function that returns another function. Have the inner function print
 * the string "hello world"
 */
// function myFunction() {
//   var greeting = "hello world";
//   return;
// }
// console.log(myFunction());
