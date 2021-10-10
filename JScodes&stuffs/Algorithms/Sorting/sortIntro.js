// why will companies ask so silly que if we have inbuilt methods 
// in different languages?
// When input gets larger and larger, it cost them lots of money if we go on
// performing operations.
// Think of amazon, google play that shows sorted datas according to
// ratings, price etc., they need custom sorted method based on their data
// so that they can lower the cost and operations.
// Unsorted data is hard to access, small things may cost them huge losses.

// BuiltIn method



// Sorting Algorithms:

/*Bubble Sort
Insertion Sort
Selection Sort*/
// Merge Sort
// Quick Sort

// The issue with builtIn Sort

const letters = ['a','c','f','b'];
console.log(letters.sort().join(' '));

const basket = [2, 65, 34, 2, 1, 7, 8];
const sortedBasket = basket.sort((a,b) => {
	return a-b;
})
console.log(sortedBasket);
// console.log(basket.sort())

const mixedArray = ['80','23','2',1,5,99,3];
const sortedMixedArray = mixedArray.sort((a,b) => {
	return a-b;
})
console.log(sortedMixedArray);

console.log('2'.charCodeAt(0));
console.log('65'.charCodeAt(0));
console.log('34'.charCodeAt(0));
console.log('7'.charCodeAt(0));

// const spanish = ['unico','arbol','cosas','futbol'];
// const sorted = spanish.sort((a,b) => {
// 	return a.localeCompare(b);
// })
// console.log(sorted);

// Each prog. languages or js engine uses its own way of 
// implementing the inbuilt sort method.

// Time and Space complexity of the sort() cannot be guaranteed
// as it is implementation dependent(javascript engine).


