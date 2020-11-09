// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  const strRev = str.split("").reverse().join("");
  return strRev

  //or use decrement for loop method:
  // var newString = "";
  // for (var i = str.length - 1; i >= 0; i--) {
  //     newString += str[i];
  // }
  // return newString;
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  const strRev = str.split("").reverse().join("");
  return str === strRev? true : false;

}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  const intRev = int.toString().split("").reverse().join("")
  return Number(intRev);
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  const strArr = str.toLowerCase().split(' ')
  for (i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1)
  //first item = first item capitalize the first letter + first item the rest of the letters
  //then the second item
  //then the third item....so on
    console.log(strArr)
    
  }  
  return strArr.join(' ')
   
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  let output = ""
  for (let i = 1; i <= 100; i++) {

    if( i % 15 === 0) {
      output += "FizzBuzz"
    } else if (i % 3 === 0){
      output += "Fizz"
    } else if ( i % 2 === 0) {
      output += "Buzz"
    } else {
      output += i
    } 
  }
  return output
}



// Call Function
const output = capitalizeLetters('i loVe javascript');

console.log(output);
