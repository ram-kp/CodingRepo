//O(1) - space compexity
//O(n) - time complexity

// merge sorted arrays to give a single sorted array
// mergeSortedArrays[0,3,4,31],[4,6,30]
// [0,3,4,4,6,30,31]

const array1 = [0,3,5,8];
const array2 = [2,4,5,7,19];
let mergedArray = [];
let index1 = 0;
let index2 = 0;

function mergeSortedArrays(arr1,arr2) {
	if(arr1.length === 0){
		return arr2;
	}
	if(arr2.length === 0){
		return arr1;
	}
	while(arr1[index1] || arr2[index2]){ 	// checks whether array items exist or not	

		if(!arr2[index2] || arr1[index1] < arr2[index2]){	//if array 2 items are not left out then it must print the remaining array1 elements
			mergedArray.push(arr1[index1]);		//pushes the smaller number(array1) to the merged array
			index1++ ;							
		}
		else {				
			mergedArray.push(arr2[index2]);		
			index2++ ;							
		}
	}
	return mergedArray;
}
console.log(mergeSortedArrays(array1,array2));