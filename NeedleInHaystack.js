/*Function to find the 'needle' in a haystack (array). Returns index of needle if found. */
function findNeedle(haystack) {
    if (haystack.includes("needle")){
        console.log("found the needle at: %s", haystack.indexOf("needle"));
    }else{
        console.log("there is no needle. ");
    }

  }

  let test_array = ["this", "is", "needle", "test", "array", ""]; 
  let test_array2 = [];
  var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

findNeedle(test_array);
findNeedle(test_array2)
findNeedle(haystack_3);
