// O(n^2) is cool, but you know what's cooler?
// O(n log(n))
// merge,quick sort => Divide and conquer technique
// We open the book from the middle and not from 
// start and then divide furthur to find the word.

// Implementing Merge Sort algorithm(Divide And Conquer)

const numbers = [1,3,5,2];

function mergeSort (array) {
	if (array.length === 1) {
		return array;
	}
	// Split array in into right and left
	const length = array.length;
	const middle = Math.floor(length/2);
	const left = array.slice(0, middle);
	const right = array.slice(middle);
	console.log('left:', left);
	console.log('right:', right);

	return merge(
		mergeSort(left),
		mergeSort(right)
	)
}

function merge(left, right){
	const result = [];
	let leftIndex = 0;
	let rightIndex = 0;
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex]);
			leftIndex++ ;
		} else {
			result.push(right[rightIndex]);
			rightIndex++ ;
		}
	}
	console.log(left, right);

	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers);
console.log(answer);





