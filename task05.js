"use strict";
//Develop a program that reads a list of grades and uses the splice method to
//remove failing grades (below 50) from the array.
function removeGrades(gradeArray) {
    for (var i = 1; i <= gradeArray.length; i++) {
        if (gradeArray[i - 1] < 50) {
            gradeArray.splice(i - 1, 1);
        }
    }
    return gradeArray;
}
var inputGrades = removeGrades([43, 56, 23, 78, 65, 98, 23, 45, 29, 89, 67]);
console.log(`The list after removing failing grades is ${inputGrades}`);
