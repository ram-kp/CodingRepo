// Given array nums = [-1, 0, 1, 2, -1, -4],  // input --> array
// A solution set is:                         // return --> array of triplets
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

 

// const triplets = (nums) =>{
// 	const length = nums.length;
// 	let answer = []
// 	for(var i = 0; i < length; i++) {
// 		for(var j = i+1; j < length; j++) {
// 			for (var k = j+1; k < length; k++) {
// 					if (nums[i]+nums[j]+nums[k] == 0) {
// 						answer.push([nums[i],nums[j],nums[k]]);
// 					}
// 			}	
// 		}	
// 	}
// 	return answer;	
// }
const input = [-1, 0, 1, 2, -1, -4]
const triplets = (nums) =>{
	const len = nums.length;
	let compSet = new Set();   // []
	compSet.add(0-nums[0]);   
	let answer = []            // [[-1,0,1],]
	for (var i = 0; i < len; i++) {
		if(compSet.has(nums[i+1] + nums[i+2])){
			answer.push([nums[i],nums[i+1],nums[i+2]]);
			compSet.delete(nums[i+1] + nums[i+2]);
		} else {
		compSet.add(0-nums[i]);
		}
		// compSet.add(0-nums[i])
	}
	return answer;
}

console.log(triplets(input));
