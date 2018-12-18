//Takes an input string and capitalizes the first letter in every word So It Will Look Like This.
function capitalizeFirst(stringWords){
    let arrayOfWords = stringWords.split(" ");
    for (let i = 0; i<arrayOfWords.length; i++){
        //Takes the array at index i and sends the first character to an uppercase.
        //Then adds the rest of the string as is to the newly capitalized string, storing it into the array at index i.
        arrayOfWords[i] = arrayOfWords[i].charAt(0).toUpperCase() + arrayOfWords[i].substring(1);
    }
    stringWords = arrayOfWords.join(" "); //Takes the array and converts it back to a string using spaces.
    return stringWords;

}

let testVariable = "this is not a capped string.";
console.log(capitalizeFirst(testVariable));