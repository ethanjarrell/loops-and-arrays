// 1.
// Without logging the values, list the value of `sports` and `total`
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
// A:
// sports = soccer, baseball, football, swimming
// total = 4
//I also ran the same function with different paramaters.  I don't understand why it gives you a value of 4.  So I did the same thing with eggs, and it gave me the value of 'blue', when I expected a number.  But as an array, it gave me all three values as strings, which I did expect.
// var sports = ['soccer', 'baseball'];
// var total = sports.push('football', 'swimming');
// console.log(sports);
// console.log(total);
// var eggs = ('red', 'green', 'blue');
// console.log(eggs);
// var eggs = ['red', 'green', 'blue'];
// console.log(eggs);


// 2.
// Using the `strings` array, wrte a function `longestString()`
// that accepts an array argument and returns the longest string in the array

var strings = ['this','is','a','collection','of','words'];

function longestString(array){
  let longest = "";
  for (let i = 0; i < array.length; i++) {
    if (anyArray[i].length > longest.length) {
      longest = anyArray[i];
   }
 }
 return longest;
}

longestString(strings);


console.assert(longestString(strings) === 'collection', {"message": "longestString should return 'collection'"});


// Use the `numbers` array for questions 3 - 8.
var numbers = [1,12,4,18,9,7,11,3,101,5,6];


// 3.
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
// A:

var numbers = [12,4,18,9,7,11,3,101,5,6,1];

function smallestNumber(array){
  let smallest = 1;
  for (var i = 0; i < array.length; i++){
    if ( array[i] < smallest){
      smallest = array[i];
    } else {
      ;
    }
  }
  return smallest;
}

smallestNumber(numbers);

console.assert(smallestNumber(numbers) === 1, {"message": "smallestNumber should return 1"});


// 4.
// Write a function `getEvens()` that accepts an array
// and returns only the even numbers in the array.
// A:

var numbers = [1,12,4,18,9,7,11,3,101,5,6];

function getEvens(anArray){

  for (var i = 0; i < anArray.length; i++) {

  while (anArray[i] % 2) {
            anArray.splice(i, 1);
}}

return anArray;

}

getEvens(numbers);

console.assert(getEvens(numbers).toString() === '12,4,18,6', {'message': 'getEvens should return "12,4,18,6"'});


// 5.
// Write a function that accepts an array argument
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// A:

function reverse(a) {

  var counter = a.length - 1;

  for (var i = 0; i < a.length; i++) {

    var temp = a[i];
    a[i] = a[counter];
    counter--;

  }

  return a;

}

reverse(numbers);

console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', {'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"'});


// 6.
// Write a function that accepts an array argument
// and returns the sum of all of the numbers in the array
// A:

var numbers = [1,12,4,18,9,7,11,3,101,5,6];

function sum(array) {

  var arraySum = 0;

  for (var i = 0; i < array.length; i++) {

  arraySum += array[i];

}

  return arraySum;

}

sum(numbers);


console.assert(sumArrayOfNumbers(numbers) === 177, {'message': 'sumArrayOfNumbers should return 177'});


// 7.
// Write a function that accepts an array argument
// and returns an array of only the numbers greater than 10
// A:


var numbers = [1,12,4,18,9,7,11,3,101,5,6];

function greaterThanTen(array) {

  var greater = [];

  for (var i = 0; i < array.length; i++) {

  if (array[i] > 10){
    greater.push(array[i]);
  }

}

  return greater;

}

greaterThanTen(numbers);


console.assert(numbersOver10(numbers).toString() === "12,18,11,101", {'message': 'numbersOver10 should return "12,18,11,101"'});


// 8.
// Write a function that accepts both an array and number argument
// and returns an array of only the numbers greater than the number passed to the function
// A:

var numbers = [1,12,4,18,9,7,11,3,101,5,6];

function greaterThanNumber(array, number){

  var greater = [];

  for (var i = 0; i < array.length; i++){

    if(array[i] > number) {
      greater.push(array[i]);
    }

  }

  return greater;

}

greaterThanNumber(numbers, 14);


console.assert(numbersOverX(numbers, 15).toString() === "18,101", {'message': 'numbersOverX should return "18,101"'});

// 9.
// Write a function `joinArrays()` that takes an array of arrays,
// and returns a single array with the contents of the second array
// listed after the contents of the first array



var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var numbersTwo = [33,56,72,2,5,66,90,21,42];
// A:


function joinArrays(array1, array2){

  for (var i = 0; i < array2.length; i++){

    array1.push(array2[i]);

  }

  return array1;

}

joinArrays(numbers, numbersTwo);

//The question confused me a little, because the part about "an array of arrays" made it sound like a nested array, not two separate arrays.  I may be off track in my understanding of the question, and in my answer.


console.assert(joinArrays([numbers, numbersTwo]).toString() === '1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42', {'message': 'joinArrays should return "1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42"'});


// 10.
// Using the `instructors` array, comment the value of each variable below
var instructors = [
    ['JD','JavaScript'],
    ['Tim','JavaScript'],
    ['Brit','Ruby'],
    ['Joe','iOS'],
    ['Dan','JavaScript'],
    ['Will','JavaScript'],
    ['Calvin','JavaScript'],
    ['James','Ruby']
];

var instructorNameDiscipline = instructors[5];
// greenvIlleInstructor = <your answer>

var instructorOne = instructors[4][0];
// instructorOne = <your answer>

var instructorTwo = instructors[0][1];
// instructorTwo = <your answer>

var instructorThree = instructors[2][0];
// instructorThree = <your answer>
