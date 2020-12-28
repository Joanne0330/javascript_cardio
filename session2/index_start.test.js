const { expect } = require('@jest/globals');

const {
    longestWord,
    chunkArray,
    flattenArray, 
    isAnagram,
    letterChanges
} = require('./index_start');

// ex. longestWord('Hi there, my name is Brad') === 'there,'
test('find the longest word in a sentence', () => {
    const sentence = 'Hi there, my name is Brad';
    expect(longestWord(sentence)).toBe('there')
})

// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
test('chunking a large array into 3', () => {
    const givenArr = [1, 2, 3, 4, 5, 6, 7];
    const groupOfThree = [[1, 2, 3],[4, 5, 6],[7]];
    const groupOfTwo = [[1, 2],[3, 4],[5, 6],[7]];
    expect(chunkArray(givenArr, 3)).toEqual(groupOfThree);
    expect(chunkArray(givenArr, 2)).toEqual(groupOfTwo);
})

// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
test('merging small arrays inside on array into one large array', () => {
    const givenArr = [[1, 2], [3, 4], [5, 6], [7]];
    const answer = [1, 2, 3, 4, 5, 6, 7]
    expect(flattenArray(givenArr)).toEqual(answer);
})

// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'
test('confirms if 2 inputs makes an anagram by giving true or false', () => {
    const str1 = 'elbow';
    const str2 = 'below';
    expect(isAnagram(str1, str2)).toBeTruthy;
})

test('confirms if 2 inputs with symbols and random uppercase makes an anagram', () => {
    const str1 = 'Dormitory';
    const str2 = 'dirty room##';
    expect(isAnagram(str1, str2)).toBeTruthy;
})

// ex. 'hello there' === 'Ifmmp UIfsf'
test('replace each letter to the next and capitalise the vowels', () => {
    const str = 'hello there';
    const result = 'Ifmmp UIfsf'
    expect(letterChanges(str)).toBe(result);
})