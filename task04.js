"use strict";
//Write a program that defines a function to calculate the area of a circle.
//The function should take the radius as input and return the calculated area.
function areaOfCircle(radius) {
    var area = (22 / 7) * radius;
    return area;
}
var circleArea = areaOfCircle(3);
console.log(`The area of the circle is ${circleArea}`);
