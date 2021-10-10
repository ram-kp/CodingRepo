// inserting a item inside the array
// procceding by taking the worse case i.e. insertion in middle

const value = 7;
let nums = [1,4,5,3];
nums.(value,3);
console.log(nums);
/*const placeIndex = 2;

function insertion(arr,item,index){
	for(let i=arr.length ; i>index ; i--){
		arr[i] = arr[i-1];
	}
	arr[index] = item;
	return arr;
}
console.log(insertion(nums,value,placeIndex));*/
// 0(n) time complexity
// 0(1) space complexity

