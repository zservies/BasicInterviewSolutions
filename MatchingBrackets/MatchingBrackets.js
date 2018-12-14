/* Takes an input of parentheses and inserts additional parentheses to balance the string */ 

let bracket_input = prompt("Input parentheses to be matched: ");

function bracketMatch(bracket_string){
    let count1 = 0;
    let count2 = 0;
    let difference = 0;
    
    for (let i = 0; i <= bracket_string.length; i++){
        if(bracket_string[i] === "("){
            count1 += 1;
        }else if (bracket_string[i] === ")"){
            count2 += 1;
        }
    }

    if (count1 > count2){
        difference = count1 - count2;
        for (let i = 0; i< difference; i++){
            bracket_string = bracket_string + ")";
        }
    }else if (count2 > count1){
        difference = count2 - count1;
        for(let i = 0; i< difference; i++){
            bracket_string = bracket_string + "(";
        }
    }else{
        return bracket_string;
    }
    return bracket_string;
}

console.log(bracketMatch("((()")); //result should be: ((()))
console.log(bracketMatch("()")); //result should be: ()....... ADDED FOR SOME REASON.
console.log(bracketMatch("(()")); //result should be: (())......DID NOTHING.
console.log(bracketMatch(")("));//result should be: (())
console.log(bracketMatch("(()))"));// result should be: ((()))
console.log(bracketMatch("))"));
console.log(bracketMatch(bracket_input));
