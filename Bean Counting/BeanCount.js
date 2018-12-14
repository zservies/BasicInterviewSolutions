/* Counts the number of times a specific character occurs in a string */

//Case sensitive
function countBs(someString){
    let count = 0;
    for(let i = 0; i <= someString.length; i++){
        if (someString[i] === "B"){
            count+=1;
        }else{
            continue;
        }
    }
    return count;
}

function countChar(someString, countCharacter){
    let count = 0;
    for(let i = 0; i<= someString.length; i++){
        if (someString[i] === countCharacter){
            count+=1;
        }else{
            continue;
        }
    }
    return count;

}

console.log(countBs("BBC"));
console.log(countChar("hello this is a string.", "p"));
