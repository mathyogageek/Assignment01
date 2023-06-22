// Function to convert a specific part of a string to camel case
function convertPartToCamelCase(str, startIndex, endIndex) {
  var words = str.split(/[-_\s]+/);
  for (var i = startIndex; i <= endIndex; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.slice(0, startIndex).join(' ') + ' ' + words.slice(startIndex).join('');
}

// Get the original strings
var originalString1 = "let some_month";
var originalString2 = "function the Month()";
var originalString3 = "let current-month";
var originalString4 = "let summer_month";
var originalString5 = "let MyLibrary-function";

// Examples of literal expressions
var numericLiteral = 42;
var stringLiteral = "Hello, world!";
var booleanLiteral = true;
var nullLiteral = null;

// Examples of complex/variable expressions
var complexExpression1 = numericLiteral * 2 + 5;
var complexExpression2 = stringLiteral.toUpperCase() + " OpenAI";

// Declare variables using Camel Casing and Hungarian Notation
var strFirstName, strLastName, strAddress, strCity, strState, strZipCode, nYourAge, strReferralSource, bMayWeContactYou;

// Declare and assign values to variables using different methods
strFirstName = "John"; // Method 1: Declare and assign value in separate statements
strLastName = "Doe"; // Method 2: Declare and assign value in a single statement using var keyword
strAddress = "123 Main St"; // Method 3: Declare and assign value in a single statement using let keyword
var strCity = "New York";
var strState = "NY";
var strZipCode = "12345";
var YourAge = 25;
var MayWeContactYou = true;
// Check and fix the validity of the string literal
let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
window.console.log(someString);

// Coerce a number and a string and display the coerced result in the browser's console window
var coercedResult1 = booleanLiteral + stringLiteral;
console.log("Coerced Result 1: " + coercedResult1);

// Coerce a number and a Boolean and display the coerced result in the browser's console window
var coercedResult2 = numericLiteral + booleanLiteral;
console.log("Coerced Result 2: " + coercedResult2);

// Display the values of the variables in the output div
var outputDiv = document.getElementById("output");
outputDiv.innerHTML =
  "Converted String 1: " + convertPartToCamelCase(originalString1, 1, 2) + "<br>" +
  "Converted String 2: " + convertPartToCamelCase(originalString2, 1, 2) + "<br>" +
  "Converted String 3: " + convertPartToCamelCase(originalString3, 1, 2) + "<br>" +
  "Converted String 4: " + convertPartToCamelCase(originalString4, 1, 2) + "<br>" +
  "Converted String 5: " + convertPartToCamelCase(originalString5, 1, 2) + "<br><br>" +
  "Examples of Literal Expressions:" + "<br>" +
  "Numeric Literal: " + numericLiteral + "<br>" +
  "String Literal: " + stringLiteral + "<br>" +
  "Boolean Literal: " + booleanLiteral + "<br>" +
  "Null Literal: " + nullLiteral + "<br><br>" +
  "Examples of Complex/Variable Expressions:" + "<br>" +
  "Complex Expression 1: " + complexExpression1 + "<br>" +
  "Complex Expression 2: " + complexExpression2 + "<br><br>" +
  "Variables for Identifiers:" + "<br>" +
  "First Name: " + strFirstName + "<br>" +
  "Last Name: " + strLastName + "<br>" +
  "Address: " + strAddress + "<br>" +
  "City: "   + strCity + "<br>" +
  "State: "  + strState + "<br>" +
  "Zip Code: " + strZipCode + "<br>" +
  "Your Age: " + YourAge + "<br>" +
  "May We Contact You: " + MayWeContactYou + "<br>" +
  "Some String: " + someString;

// Task 9: Create a variable with a null value
var nullVariable = null;
console.log(nullVariable);

// Task 9: Create a variable with an undefined value
var undefinedVariable;
console.log(undefinedVariable);

// Task 10: Use typeof operator on various literals
console.log(typeof "Hello");       // string
console.log(typeof 42);            // number
console.log(typeof true);          // boolean
console.log(typeof { name: "John" }); // object
console.log(typeof undefined);     // undefined

// Task 11: Display text in an alert box with concatenation
var yourName = prompt("Please enter your name:"); // Task 15: Prompt the user for their name
alert("Hello " + yourName + ", welcome to the JavaScript class!"); // Task 12: Use the name variable in the alert

var course = prompt("Please enter the name of the class you are taking:"); // Task 16: Prompt the user for the class they are taking
alert("Hello " + yourName + ".\nWelcome to the " + course + " class!"); // Task 13: Use the course variable in the alert with line break

// Task 17: Declare variables x and y, and display their sum in the console window
let x = 10;
let y = 20;
console.log(x + y);

// Task 18: Declare a variable x, add and assign 20 to it, and display the result in the console window
x = 20;
x += 20;
console.log(x);

// Task 19: Declare a variable x, multiply and assign 5 to it, and display the result in the console window
x = 20;
x *= 5;
console.log(x);

// Task 20: Declare a variable x and assign it the remainder of 20 divided by 3, then divide and assign 1 to it, and display the result in the console window
x = 20 % 3;
x /= 1;
console.log(x);

// Task 21: Using Comparison and Logical operators, evaluate an expression that results in true and display the result in the console window
let expression1 = (5 > 3) && (10 < 20);
console.log(expression1);

// Task 22: Using Comparison and Logical operators, evaluate an expression that results in false and display the result in the console window
let expression2 = (7 <= 4) || (8 === 8);
console.log(expression2);
