// Divide and conquer approach
// Works on the sorted list
// For an unordered list we have to traverse the entire list
// Traversal is visiting every node so 0(n), we did loops to visit 
// arrays,lists but for trees and graphs we have 2 ways.
// 1. Breadth First Search(BFS) -> a/ graph b/ tree-traversal
// 2. Depth First Search(DFS) -> a/ graph b/ tree-traversal
// For both of them big O complexity --> 0(n)
// Why dont we put complex data in the arrays that are sorted or list -->
// 1. 0(log n) searching
// 2. hash tables arent sorted
// Trees and Graphs work really well for the lots of cases like =>
// insertion, deletion better performance, order maintained

// WHEN TO USE BFS/DFS
// If you know a solution is not far from the root of the tree:
// => BFS

// If the tree is very deep and solutions are rare:
// => BFS (DFS will take long)

// If the tree is very wide:
// => DFS (BFS will need too much memory)

// If solutions are frequent but located deep in the tree:
// => DFS

// Determining whether a path exists between two nodes:
// => DFS

// Finding the shortest path:
// => BFS

// Binary search algo

const numbers = [1,6,7,14,100,101,122];
function binarySearch(array, searchValue){
	const len = array.length;
	let low = 0;
	let high = len-1;
	while(low < high){
		let mid = Math.floor((low + high)/2);
		
		if (array[mid] === searchValue) {
			return mid;
		}
		else if (array[mid] > searchValue) {
			high = mid ;
		}
		else {
			low = mid;
		}
	}
}
console.log('index', binarySearch(numbers,7))
// const index = binarySearch(numbers,7);
// console.log('element found at index: ',index);
