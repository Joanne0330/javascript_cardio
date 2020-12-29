const { expect } = require('@jest/globals');
const {
    addAll,
    sumAllPrimes, 
    seekAndDestroy,
    evenOddSums,
    sortByHeight
} = require('./index_start')

// ex. addAll(2,5,6,7) === 20
test('it gives the sum of the given arguement(s)', () => {;
    expect(addAll(2,5,6,7)).toBe(20);
})

// ex. sumAllPrimes(10) == 17
test('give the sum of the all prime numbers from 2 to the given number', () => {
    expect(sumAllPrimes(10)).toBe(17);
})

// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']
test('the arr only keeps what is NOT included in the parameters', () => {
    const arr = [2, 3, 4, 6, 6, 'hello']
    const result = [3, 4, 'hello']
    expect(seekAndDestroy(arr, 2, 6)).toEqual(result);
})

// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]
test('given an array, output two numbers of even sum and odd sum', () => {
    const arr = [50, 60, 60, 45, 71];
    const result = [170, 116];
    expect(evenOddSums(arr)).toEqual(result)
})

// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]
test('sorts the arr ascending except those marked -1', () => {
    const a = [-1, 150, 190, 170, -1, -1, 160, 180];
    const result = [-1, 150, 160, 170, -1, -1, 180, 190];
    expect(sortByHeight(a)).toEqual(result);
})