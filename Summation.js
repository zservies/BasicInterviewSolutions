/*Write a program that finds the summation of every number from 1 to num.
The number will always be a positive integer greater than 0. */
function summation(num){
    let sum = 0;
    if (num <= 0){
        console.log("Please enter an integer greater than 0.");
    }else{
        for ( let i = 0; i < num; i++){
            sum = i + (sum +1);
        }
        // while(count<num){
        //     sum = (count + (count+1));
        //     count +=1;
        // }
    }

    return sum;
}

console.log(summation(8)); //Should return 36