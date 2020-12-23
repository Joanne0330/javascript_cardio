const { expect } = require('@jest/globals')
const {
    reverseString,
    isPalindrome,
    reverseInt, 
    capitalizeLetters,
    maxCharacter
} = require('./index_start')


// ex. reverseString('hello') === 'olleh'
test('it can reverse the inputted string', () => {
    expect(reverseString('hello')).toBe('olleh')
})

// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
test('racecar is a palindrome', () => {
    expect(isPalindrome('racecar')).toBeTruthy();
})

test('hello is not a palindrome', () => {
    expect(isPalindrome('hello')).not.toBeTruthy();
})

// ex. reverseInt(521) === 125
test('integers can be reversed', () => {
    expect(reverseInt(521)).toBe(125)
})

// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
test('a string input will have the first letter of each word capitalized', () => {
    expect(capitalizeLetters('i love javascript')).toBe('I Love Javascript')
})

test('a randomly capitalised string input will only have the first letter of each word capitalized', () => {
    expect(capitalizeLetters('i lOve jaVascrIpt')).toBe('I Love Javascript')
})

// ex. maxCharacter('javascripttttt') == 't'
test('it finds the charater that repeats the most', () => {
    expect(maxCharacter('javascripttttt')).toBe('t')
})