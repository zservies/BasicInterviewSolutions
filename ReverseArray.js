/*reverseArray() takes an inputted array and stores the reverse into a new array 
reverseArrayInPlace() takes an inputted array and stores the reverse into the SAME array. */

let testArray = [1,2,3,4,5];

function reverseArray(inputArray){
    let newArray = [];
    for (i = 0; i<inputArray.length; i++){
        newArray.unshift(inputArray[i]);
    }
    return newArray;
}

console.log(reverseArray(testArray));

function reverseArrayInPlace(inputArray){
    let tempArray = [];
    for (i = 0; i<inputArray.length; i++){
        tempArray.unshift(inputArray[i]);
    }
    for (i = 0; i<tempArray.length; i++){
        inputArray.shift();
        inputArray.push(tempArray[i]);
    }
    return inputArray;
}

console.log(reverseArrayInPlace(testArray));