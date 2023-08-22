"use strict";
//Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
var sum = 0;
var n = 10;
for (var i = 1; i <= 2 * n; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
    }
}
console.log(`The sun of first ${n} even numbers is ${sum}`);
