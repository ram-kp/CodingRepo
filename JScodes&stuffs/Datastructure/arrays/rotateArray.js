const input = [-1,-100,3,99];
var rotate = function(nums, k) {
    let len = nums.length;
    let iter = 0;
    while(iter < k){
        nums.unshift(nums.pop());
        iter++;
    }
    return nums;
};
console.log(rotate(input, 3));




// console.log(input.unshift(input.pop()));
// console.log(input)