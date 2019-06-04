/* Create a function that returns true if an asterisk * is inside a box.*/

function inBox(arr) {
	var result = false;
	for(var i = 0; i<arr.length; i++){
		if(arr[i].includes("*")){
			result = true;
			break;
		}
	}
	return result;
}