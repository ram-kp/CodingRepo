// Implementing a Selection Sort
// Scans for the smallest item and swaps it with 1st item.


const unsortedList = [0,6,2,5,3,9,7];

const sortedList = (array) => {
	const length = array.length;
	let temp;

	for (let i = 0; i < length; i++) {
		// set current index as minimum
		let min = i;
		for (let j = i+1; j < length; j++) {
			if (array[j] < array[min]) {
				// update the minimum value as j if the 
				// if case happens.
				min = j;
			}
		}
		let temp = array[i]
		array[i] = array[min];
		array[min] = temp;
	}
	return array;
}

console.log(sortedList(unsortedList));