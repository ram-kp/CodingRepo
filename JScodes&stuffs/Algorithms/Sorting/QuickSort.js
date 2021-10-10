// Divide and conquer method
// Fix a random pivot and rearrange it in array such that left 
// elements are smaller and right ones greater than it.
// Keep on dividing the array(divider --> fixed pivot) and 
// fix the pivots for each.
// 0(n log(n)) but in worst cases(pivot-smallest) 0(n^2) time complex.
// Space complexity of 0(n log(n))

// Implementing the Quick Sort
const numbers = [9,12,7,1,4,0];

function quickSort(array,left,right){
	const len = array.length;
	let pivot;
	let partitionIndex;
	if (left < right) {
		pivot = right;
		partitionIndex = partition(array, pivot, left, right);
		// sort left and right
		quickSort(array, left, partitionIndex-1);
		quickSort(array, partitionIndex+1, right);
	}
	return array;
}

function partition(array, pivot, left, right){
	let pivotValue = array[pivot];
	let partitionIndex = left;
	for (var i = left; i < right; i++) {
		if (array[i] < pivotValue) {
			swap(array, i, partitionIndex);
			partitionIndex++ ;
		}
	}
	swap(array, right, partitionIndex);
	return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
	var temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] =  temp;
}
// Select first and last index as 2nd and 3rd parameter of 
// quickSort function
quickSort(numbers, 0, numbers.length-1);
console.log(numbers);

