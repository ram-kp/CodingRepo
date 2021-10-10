// Implementing the Insertion Sort algorithm
// Holds good with small arrays and almost sorted arrays.
// Becomes O(n) for smaller/almost sorted inputs

const numbers = [2,8,4,67,12,9];

function insertionSort(array){
	length = numbers.length;
	for (var i = 0; i < length; i++) {
		if (array[i] < array[0]) {
			// move the array to the first position
			array.unshift(array.splice(i,1)[0]);
		}
		else {
			// find the right place to shift
			for (var j = 0; j < i; j++) {
				if (array[i] > array[j-1] && array[i] < array[j]) {
					// move the number to the right spot
					array.splice(j, 0, array.splice(i,1)[0]);
				}
			}
		}
	}
}
insertionSort(numbers);
console.log(numbers);




