// Implementing a bubble sort algorithm
// The last element is at the last.
// complexity time - O(n^2), space - O(1).

const unsortedNums = [99,44,6,2,1,5,63,87,283,4,0];

function BubbleSort(array) {
	const length = array.length;
	let temp;
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length; j++) {
			if ( array[j] > array[j+1] ) {
				// Swap Numbers
				temp = array[j];
				array[j] = array[j+1];
				array[j+1] = temp;
			}
		}
	}
}

BubbleSort(unsortedNums);
console.log(unsortedNums);