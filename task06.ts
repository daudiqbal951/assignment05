//Write a program that uses a function to find the largest element in an array of numbers.

function largestNumber(numberArray:number[]){
    var largestElement=numberArray[0]
    for(var i=1; i<=numberArray.length;i++){
        if(numberArray[i]>largestElement){
        largestElement=numberArray[i]
        }
    }
    return largestElement
}

var inputArray=largestNumber([43, 56, 23, 78, 65, 98, 23, 45, 29, 89, 67])
console.log(`The largest number is ${inputArray}`)