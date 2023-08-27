"use strict";
//Implement a program that uses a loop to iterate through an array of numbers
//and remove all the even numbers from them and just leave the odd ones
var array = [1, 2, 2, 4, 5, 6, 7, 8, 9, 10];
for (var i = 1; i <= array.length; i++) {
    if (array[i - 1] % 2 == 0) {
        array.splice(i - 1, 1);
        i--;
    }
}
console.log(`The required list of numbers is ${array}`);
