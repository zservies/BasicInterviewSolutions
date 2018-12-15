/*Takes two numbers as parameters and stores their range in an array. */
function range(start, end){
    let container = [];
    for (let i = start; i <= end; i++){
        container.push(i);
    }
    return container;

}

console.log(range(1,10)); //Testing the range function

/*Adds up the value of the previously created range/array. */
function sumOfRange(rangeArray){
    let sum = 0;
    for (let i = 0; i<rangeArray.length; i++){
        sum = sum + rangeArray[i];
    }
    return sum;
}

console.log(sumOfRange(range(1,10)));



