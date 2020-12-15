// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  const senArr = sen.split(' ')
  const sortedArr = senArr.sort((a, b) => b.length - a.length)
  const longestWords = sortedArr.filter(word => word.length === sortedArr[0].length)

  return longestWords
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  const bigArray = [];
  let i = 0;

  while(i < arr.length) {

    bigArray.push(arr.slice(i, i + len)) //second time we want to start index 3 to 6 which is increment by amound of len
    i += len
  }

  return bigArray

}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {

  //my solution 1:
  const mergedArr = [].concat.apply([], arrays)
  //my solution 2:

  // const mergedArr = arrays.flat(1)
  return mergedArr

}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  return cleanText(str1) === cleanText(str2) ? true : false
}

function cleanText(text) {
  const cleanedText = text
    .replace(/[^\w]/g, '')       //replace any non alphanumber character with nothing
    .toLowerCase()
    .split('')
    .sort()
    .join('')
  console.log(cleanedText)
  return cleanedText
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {}

// Call Function
const output = isAnagram('Dormitoryz', 'dirty room##');

console.log(output);
