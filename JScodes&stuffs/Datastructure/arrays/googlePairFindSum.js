/*const array1 = ['a','b',null,'d'];
const array2 = ['x','y',null];
let index = 0;
function containCommomItems(arr1,arr2)
{
	let map={};
	for (let i=0; i<arr1.length ; i++) {
		if(!map[arr1[i]]){
			const item = arr1[i];
			map[item] = true;
		}
	}

	for (let j = 0;  j< arr2.length; j++) {
		if(map[arr2[j]]){
			index = j;
			return true;
		}
	}
	return false;
}

const exist = containCommomItems(array1,array2);
if(exist){
	console.log('the element '+array2[index]+ 
		' is common in both');
}

function containCommonItem2(arr1,arr2)
{
	return arr1.some(item => arr2.includes(item));
}

containCommonItem2(array1,array2);*/

//better version of google code
index= 0;
function hasPairWithSum2(arr,sum) {
	const mySet = new Set(); // new set that contains complement of each element
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		if(mySet.has(arr[i])) {
			index= i;  //tracking the index
			console.log('(' + arr[index] + "," + (sum-arr[index]) + ') \n');
			console.log('(' + (sum-arr[index]) + "," + arr[index]+ ') \n');
			console.log(arr.indexOf(sum-arr[index]),index);
		}
		mySet.add(sum - arr[i]);
	}
	return false;
}

hasPairWithSum2([6,4,3,7,2], 9);
// O(len) space complexity
// O(len) time complexity