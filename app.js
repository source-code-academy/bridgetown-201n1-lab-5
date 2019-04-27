'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
1. Write a function called sum() - DONE
2. that takes in two numbers as arguments - DONE
3. and then returns an array - DONE
4. where the first element is the sum of those numbers - DONE
5. and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
// function sum(a, b) {
//   // Input
//   //eslint-disable-line
//   var total = a + b; //processing
//   var string = 'The sum of ' + a + ' and ' + b + ' is ' + total + '.';
//   return [total, string]; //Output
// }

// I -> P -> O

// Here is the test for sum(); uncomment it to run it
// testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() - DONE
that takes in two numbers as arguments  - DONE
and returns an array - DONE
 where the first element is the product of those numbers, - DONE
  and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:;

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) {
  //eslint-disable-line
  return [a * b, `The product of ${a} and ${b} is ${a * b}.`];
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5, 9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array
 where the first element is the sum of those three numbers, t
 he second element is the product of those three numbers,  
 and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
// function sumAndMultiply(a, b, c) {
//   //eslint-disable-line
//   //Calculate the sum of the first two values and assign the returned array to sum results
//   var sumResults = sum(a, b);
//   console.log({ sumResults: sumResults });
//   //Assign calculated number to a temporary variable called subtotal
//   var subtotal = sumResults[0];
//   console.log({ subtotal: subtotal });
//   //Calculate the sum of the subtotal and the last value and assign returned array to totalResults
//   var totalResults = sum(subtotal, c);
//   console.log({ totalResults: totalResults });
//   //Access first element in the array and assigning to a variable called total.
//   var total = totalResults[0];

//   var sumStr = a + ' and ' + b + ' and ' + c + ' sum to ' + total + '.';

//   var product = multiply(multiply(a, b)[0], c)[0];
//   var prodStr = `The product of ${a} and ${b} and ${c} is ${product}.`;
//   return [total, product, sumStr, prodStr];
// }

// Here is the test for sumAndMultiply(); uncomment it to run it
// testSumAndMultiply(4, 7, 5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
1. Write a function called sumArray() that takes in an array of numbers as its single argument - Done
2a. and then returns an array where the first element is the sum of the numbers in the array - Done
2b. and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum." - Done

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
// var testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) {
  // eslint-disable-line
  // Break down array into 3 separate numbers
  sumArr = [sumArr[0], sumArr[1], sumArr[2]];
  console.log('First number is ' + sumArr[0] + ', second number is ' + sumArr[1] + ' and third number is ' + sumArr[2] + '.');
  // Calculate the sum of the first two variables and assign the returned array to sum_2_numbers
  var sum_2_Numbers = sum(sumArr[0], sumArr[1]);
  console.log('Sum of first 2 numbers is: ' + sum_2_Numbers[0] + '.');
  // Calculate sum of first 2 numbers and third number and assign returned array to sum_3_numbers
  var sum_3_numbers = sum(sum_2_Numbers[0], sumArr[2]);
  //Access first element in the returned array and assign to a variable called total
  var total = sum_3_numbers[0];
  var string = sumArr[0] + ',' + sumArr[1] + ',' + sumArr[2] + ' was passed in as an array of numbers, and ' + total + ' is their sum.';
  console.log(string);
  return [total, string];
}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
1. Write a function called multiplyArray() - Done
2. that takes an array of numbers as its argument - Done
3. and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) {
  //eslint-disable-line
  // Break down array into 3 separate numbers
  multArr = [multArr[0], multArr[1], multArr[2]];
  console.log('First number is ' + multArr[0] + ', second number is ' + multArr[1] + ' and third number is ' + multArr[2] + '.');
  // Calculate the sum of the first two variables and assign the returned array to prod_2
  var prod_2 = multiply(multArr[0], multArr[1]);
  console.log('Product of first 2 numbers is ' + prod_2[0] + '.');
  // Calculate the product of the first 2 numbers and the 3rd number and assign the returned array to prod_3
  var prod_3 = multiply(prod_2[0], multArr[2]);
  // Access first element in the returned array and assign to a variable called prod_total
  var prod_total = prod_3[0];
  var multi_string = 'The numbers ' + multArr[0] + ',' + multArr[1] + ',' + multArr[2] + ' have a product of ' + prod_total + '.';
  console.log(multi_string);
  return [prod_total, multi_string]
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop.

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
1. Write a function called multiplyAnyArray() -Done
2. that takes an array of numbers of any length as its argument -Done
3. and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var testDynamicArray = [1, 2, 3, 4, 5]; //eslint-disable-line
function multiplyAnyArray(dynamArr) {
  //eslint-disable-line
  var dynamProd = 1;
  for (var i = 0; i < dynamArr.length; i++) {
    dynamProd = multiply(dynamProd, dynamArr[i])[0];
    console.log(dynamProd);
  }
  console.log('The numbers ' + dynamArr + ' have a product of ' + dynamProd + '.');
  var dynamString = 'The numbers ' + dynamArr + ' have a product of ' + dynamProd + '.';
  return [dynamProd, dynamString];
};


// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
