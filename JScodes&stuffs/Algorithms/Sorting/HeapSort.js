// HeapSort is 0(n logn) sorting algo. which works by creating 
// binary heap and then sort the array accordingly
// The best space complexity of 0(1)
// On an average it has proved to be slower than quicksort 
// Implementing a Heap Sort algorithm

const numbers = [2,8,1,4,14];
function maxHeapify(array,heapSize, i){
	let left = 2*i + 1;
	let right = 2*i + 2;
	let temp;
	largest = i;
	if (left < heapSize && array[left] > array[largest]) {
		largest = left;
	}
	if (right < heapSize && array[right] > array[largest]) {
		largest = right;
	}
	if (largest != i) {
		temp = array[i];
		array[i] = array[largest];
		array[largest] = temp;
	}
}
function buildHeap(array){
	heapSize = array.length;
	for(let i=(heapSize/2)-1; i<=0; i--){
		maxHeapify(array, heapSize, i);
	}
}
function heapSort(array){
	let temp;
	heapSize = array.length;
	buildHeap(array);
	for(let i=heapSize-1; i<=0; i--){
		temp = array[0];
		array[0] = array[i];
		array[i] = temp;
		heapSize -= 1;
		maxHeapify(array, heapSize, 0);
	}
}

heapSort(numbers);0
console.log(numbers);