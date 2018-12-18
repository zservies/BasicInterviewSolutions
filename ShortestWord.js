/* Finds the shortest word in a string and returns the length. */
function findShort(s){
    let stringArray = s.split(" ");
    let count = stringArray[0].length;

    for (let i = 0; i<stringArray.length; i++){
        if (stringArray[i].length < count){
            count = stringArray[i].length;
        }else{
            continue;
        }
    }
    return count;
  }

  testString = "hell this is a string";
  console.log(findShort(testString)); //Should return 1 in this case.