const express = require('express')

 // Returns an array of prime number 
// Param: number - the upper limit number to check against
function getPrimeNumbers(value) {
    // We don't need to include the upper limit number, so this range func is fine as it starts at 0
    // and we will be skipping over it anyway
    var primeArrTmp = [...Array(value).keys()];
    var primeArr = []
    var medianArr = []

    // start at two, since 1 is not a prime number, two always is as its divisible by itself or a positive number
    for (var i = 2; i < value; i++) {
        primeArrTmp[i] = true;
    }

    // get the square root value, since now the prime numbers are will less than or equal to the square root
    // set true or false if it is a prime number
    var sqrt = Math.sqrt(value);

    for (var i = 2; i < sqrt; i++) {
        if (primeArrTmp[i] === true) {
            for (var j = i * i; j < value; j += i) {
                primeArrTmp[j] = false;
            }
        }
    }
    // finally check which ones are prime numbers and add to array to return
    for (var i = 2; i < value; i++) {
        if (primeArrTmp[i] === true) {
            primeArr.push(i);
        }
    } 

    // Sort the array into ascending numerical order
    var sortedArr = primeArr.sort((a, b) => a - b)

    // If the array has an even number, return the two median numbers,
    // otherwise return the one median number
    if (sortedArr.length % 2 === 0) {
        medianArr.push(sortedArr[sortedArr.length / 2 - 1])
        medianArr.push(sortedArr[sortedArr.length / 2])
    }
    else {
        medianArr.push(sortedArr[Math.floor(sortedArr.length / 2)])
    } 
    return medianArr 
}


module.exports = getPrimeNumbers;