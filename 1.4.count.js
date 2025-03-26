// step 1 set the variable 
let numbers = [1,2,3,4,5,4,5,2,2,2,];

// step 2 set the target
let target = 2;

// step3 count is 0
let count = 0;

for (let num of numbers){
    if(num == target){
        count ++;
    }
}

console.log(count);