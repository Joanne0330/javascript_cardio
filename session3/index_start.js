// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

function addAll(...arg) {
    // console.log(arg)
    //solution 1: 
    return arg.reduce((accumulator, currentValue) => accumulator + currentValue)

    //solution: 2
    // var total = 0;
    // for (let i = 0; i < arg.length; i++) {
    //     total += arg[i];
    // }
    // return total;
}


// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

function sumAllPrimes(num) { 
    const arr = [2, 3, 5];
    function checkPrime(i) {
        if(i % 3 == 0 || i % 5 == 0) {
            return false;
        }
        return true;
    };

    for(let i = 7; i <= num; i+= 2) {    //step 1: trying to get all odd numbers: 3, 5,7,9,11,13,15,17,19
        if(checkPrime(i)) {  //step2: get rid of the odd number is not divisiable by 3 or 5
            arr.push(i)
        }
    }
    console.log(arr)
    const sumAllPrime = arr.reduce((accumulator, currentValue) => {
         return accumulator + currentValue
    })
    return sumAllPrime
}

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

function seekAndDestroy(arr, ...rest) {  
    const filteredArr = arr.filter(item => !rest.includes(item))  //using rest array to filter, therefore we need to keep whatever that's NOT in rest
    
    return filteredArr
}

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(arr) {
    const posArr = arr.filter(num => num !== -1).sort((a,b) => a - b)  //gives: [150, 160, 170, 180, 190]
    //take the origianl arr and insert the posArr if not -1
    const sorted = arr.map(value => value !== -1 ? posArr.shift() : value )
    return sorted
}

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined

function missingLetters(str) {
    let arr = str.split('');
    let compareNum = 97;
    let missing;
    console.log(str.charCodeAt(0)) //  this tells that the first letter a is 97

    arr.map((letter, index) => {
        if(str.charCodeAt(index) == compareNum ) {
            compareNum += 1;
        } else {
            missing = String.fromCharCode(compareNum)
        }
    });
    
    return missing;
}


// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSums(arr) {
    evenSum = 0;
    oddSum = 0;
    arr.forEach(num => {
        if(num % 2 == 0 ) {
            evenSum += num
        } else {
            oddSum += num
        }
    })
    return [evenSum, oddSum]
}




const output = missingLetters("abce")
console.log(output);

module.exports = {
    addAll,
    sumAllPrimes,
    seekAndDestroy,
    evenOddSums,
    sortByHeight, 
    missingLetters
}