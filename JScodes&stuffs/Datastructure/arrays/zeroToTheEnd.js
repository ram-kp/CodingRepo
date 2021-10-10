// input --> array of number [1,2,0,5,0,1]
// output --> return array of nums -- [1,2,5,1,0,0]
// checks --> 0 consecutive 
const input =  [0,0,4,0,-7,12]
// // console.log(input.splice(1,1 )[0])
// input.push(input.splice(2, 1)[0]);
// console.log(input)
var moveZeroes = function(nums) {
    for(let i=0; i<nums.length; i++){
        if(nums[i] == 0 && nums[i+1] == 0){
           nums.push(nums.splice(i,1)[0]);
           nums.push(nums.splice(i,1)[0]);
        } else if (nums[i] == 0) {
           nums.push(nums.splice(i,1)[0]);
        }
    }
    return nums;
};
// let moveZeroes = function(nums) {
//     let lastNonZeroFoundAt = 0;
//     for(let i=0; i<nums.length; i++){
//         if(nums[i] !== 0){
//           nums[lastNonZeroFoundAt++] = nums[i];
//     }
        
//     for(let i=0 ; i < nums.length; i++){
//         nums[i] = 0;
//     }
//     return nums;
// };
// => SECOND APPROACH
// let moveZeroes = function(nums) {
//     let item = 0, pos;
//     while(~(pos = nums.indexOf(0))) {
//         item++;
//         nums.splice(pos,1);
//     }
//     nums.splice(nums.length, 0, ...((new Array(item)).fill(0)));
//     return nums;
// };

console.log(moveZeroes(input));
