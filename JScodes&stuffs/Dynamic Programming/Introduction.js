// DYNAMIC PROGRAMMING

// It is an optimization technique 
// Do you have something you can cache?

// Beaking the problems into subproblems and solving the problem once 
// and storing their solutions to cope incase next time the subproblems occurs.

// Memoization ~~~~~ Caching
// Caching is a way to store the values so we can use them later on.

// Ideally you can think of caching as a bag pack you take to the school,
// instead of going to the home wen u need something like a pencil you have a small box in the bag 
// that holds the item u need so that we can reuse them over and over in school.

// It is a way to speed up the program and hold the piece of data in the easily accessable box.

// memoization is a specific form of caching, we use a lot in D.P.

// Memoization is the method of remembering the solution of the subproblem so that we dont have to calculate it again

// unmemoized
function addTo80(n){
	console.log('long time')
	return n + 80;
}

// memoized

function memoizedTo80(n){
	let cache = {};  // using closures to use cache locally(avoid global scope) we cant use it directly inside since each time the cache will reset
	return function(n) {
		if (n in cache) {
			return cache[n];
		} else {
			console.log('long time');
			cache[n] = n + 80
			return cache[n]
		}
	}
}
const memoized = memoizedTo80(); // memoization --> function(n) -- line 32
console.log('1', memoized(5));
console.log('2', memoized(6));

// 0,1,1,2,3,5,8,13,..... --> fibonacci series

let calculations = 0;
function fibonacci(n){
	calculations++;
	if (n < 2) {
		return n;
	}

	return  fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(10))

// STEPS TO IMPLEMENT DYNAMIC PROGRAMMING

// 1. Can be divided into problems 
// 2. Recursive Solution
// 3. Are there repetitive subproblems?
// 4. Memoize subproblems
// 5. Demand a raise from your boss