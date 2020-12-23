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
// ex. maxCharacter('javascripttttt') == 't'

function maxCharacter(str) {
  const charMap = {}
  let maxNum = 0;
  let maxChar = '';
  
  str.split('').forEach(function(char) {// loop and set each array item into key/value pair
    if(charMap[char]) { //if the char exist in the charMap as key
      charMap[char]++; //the value goes up
    } else {
      charMap[char] = 1; //if it doesn't appear more than once, then set to just 1
    }
  });
    console.log(charMap) // gives { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 5 }
  
  for(let char in charMap){ //looping the object which each letter (char) is the keys,

    if(charMap[char] > maxNum){ //during the loop, it looks at the value and compare with 0 to begin with
      // console.log(charMap[char]) // gives 1 2 5, which is the values of 
      maxNum = charMap[char]; //set the 0 to the highest charMap value which is 5
      maxChar = char;
    }

  } //because this is a loop, so the value only compares with the maxNum if it's greater
  
  return maxChar;

}



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
const output = maxCharacter('javascripttttt');

console.log(output);

module.exports = {
  reverseString,
  isPalindrome,
  reverseInt,
  capitalizeLetters,
  maxCharacter
};
