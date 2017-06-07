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

// ======== FIRST ATTEMPT UNSUCESSFUL ======= //

// A: function longestString (x){
//   if (strings.length[0] > strings.length[1] || strings.length[0] > strings.length[2] || strings.length[0] > strings.length[3] || strings.length[0] > strings.length[4] || strings.length[0] > strings.length[5])
//   {return strings[0]}
//   else if (strings.length[1] > strings.length[0] || strings.length[1] > strings.length[2] || strings.length[1] > strings.length[3] || strings.length[1] > strings.length[4] || strings.length[1] > strings.length[5])
//   {return strings[1]}
//   else if (strings.length[2] > strings.length[0] || strings.length[2] > strings.length[1] || strings.length[2] > strings.length[3] || strings.length[2] > strings.length[4] || strings.length[2] > strings.length[5])
//   {return strings[2]}
//   else if (strings.length[3] > strings.length[0] || strings.length[3] > strings.length[1] || strings.length[3] > strings.length[2] || strings.length[3] > strings.length[4] || strings.length[3] > strings.length[5])
//   {return strings[3]}
//   else if (strings.length[4] > strings.length[0] || strings.length[4] > strings.length[1] || strings.length[4] > strings.length[2] || strings.length[4] > strings.length[3] || strings.length[4] > strings.length[5])
//   {return strings[4]}
//   else {return strings[5]}
// }

// longestString(strings);

// ======== SECOND ATTEMPT UNSUCCESSFUL ===== //



// var strings = ['this','is','a','collection','of','words'];
// var longestWord = 0;
//
// for (var i = 0; i < strings.length; i++){
//   if(strings[i].length > longestword)
//   {longestword = strings[i].length;}
//
// return longestword;
// }

// ========== THIRD ATTEMPT ========== //

//THIS IS GIVING ME UNDEFINED AND I DON'T KNOW WHAT'S GOING ON ANYMORE.

// var strings = [‘this’,‘is’,‘a’,‘collection’,‘of’,‘words’];
//
// function longestString(anyArray){
//   let longest = “”;
//   for (let i = 0; i < anyArray.length; i++) {
//     if (anyArray[i].length > longest.length) {
//       longest = anyArray[i];
//    }
//  }
//  return longest;
// }

// ========== FOURTH ATTEMPT ========= //

// I hadn't called the function.  I'm honestly really lost and frustrated and about to cry.

var strings = ['this','is','a','collection','of','words'];

function longestString(anyArray){
  let longest = "";
  for (let i = 0; i < anyArray.length; i++) {
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


console.assert(smallestNumber(numbers) === 1, {"message": "smallestNumber should return 1"});


// 4.
// Write a function `getEvens()` that accepts an array
// and returns only the even numbers in the array.
// A:


console.assert(getEvens(numbers).toString() === '12,4,18,6', {'message': 'getEvens should return "12,4,18,6"'});


// 5.
// Write a function that accepts an array argument
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// A:


console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', {'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"'});


// 6.
// Write a function that accepts an array argument
// and returns the sum of all of the numbers in the array
// A:


console.assert(sumArrayOfNumbers(numbers) === 177, {'message': 'sumArrayOfNumbers should return 177'});


// 7.
// Write a function that accepts an array argument
// and returns an array of only the numbers greater than 10
// A:


console.assert(numbersOver10(numbers).toString() === "12,18,11,101", {'message': 'numbersOver10 should return "12,18,11,101"'});


// 8.
// Write a function that accepts both an array and number argument
// and returns an array of only the numbers greater than the number passed to the function
// A:


console.assert(numbersOverX(numbers, 15).toString() === "18,101", {'message': 'numbersOverX should return "18,101"'});

// 9.
// Write a function `joinArrays()` that takes an array of arrays,
// and returns a single array with the contents of the second array
// listed after the contents of the first array
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var numbersTwo = [33,56,72,2,5,66,90,21,42];
// A:


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
