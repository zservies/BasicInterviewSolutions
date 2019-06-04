/*Create a function that takes in an array (slot machine outcome) and returns true if all elements 
in the array are identical, and false otherwise. The array will contain 4 elements. */

function testJackpot(result) {
	var jackpot = true;
	var testVar = result[0];
	for (let i = 0; i<result.length; i++){
		if (result[i] != testVar){
			jackpot = false;
		}else{
			testVar = result[i];
		}
	}
	return jackpot;
}