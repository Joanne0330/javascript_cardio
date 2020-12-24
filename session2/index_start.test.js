const { expect } = require('@jest/globals');

const {
    longestWord,
    chunkArray,
    flattenArray
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