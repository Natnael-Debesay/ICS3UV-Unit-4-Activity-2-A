/**
 * @author Natnael Debesay
 * @version 1.0.0
 * @date 2025-12-16
 * @fileoverview This program calculates average.
 */

// variables
let markAsString: string = "";
let markAsNumber: number = 0;
let sum: number = 0;
let average: number = 0;
let numberOfMarks: number = 0;

// input number
markAsString = prompt("Please enter the test mark. To quit enter a -1: ") || "Nothing entered";
markAsNumber = parseInt(markAsString);

// keep looking until the user enters -1 to quit
while (markAsNumber != -1) {
  // check if the input is a valid number AND between - and 100
  // "isNaN" means "is Not a Number"
  if (!isNaN(markAsNumber) && markAsNumber >= 0 && markAsNumber <= 100) {
    // add the mark to our running total
    sum += markAsNumber;
    // count this as a vaild mark
    numberOfMarks++;
  } else if (!isNaN(markAsNumber)) {
    // if it's a number but not in the valid range (0-100)
    console.log("Invalid mark. Please enter a mark between 0 and 100.");
  } else {
    // is the input is text (noot a number at all)
    console.log("Invalid input. Text will not be counted.");
  }
  // ask for the next mark
  markAsString = prompt("Please enter the test mark. To quit enter a -1: ") || "Nothing entered";
  // convert the text input to a number
  markAsNumber = parseInt(markAsString);
}

// calculate average
if (numberOfMarks > 0) {
  average = sum / numberOfMarks;
  console.log();
  console.log("The average is: " + average.toFixed(0) + "%");
  console.log("The number of marks entered is " + numberOfMarks);
} else {
  console.log("No marks were entered.");
}

console.log("\nDone.");
