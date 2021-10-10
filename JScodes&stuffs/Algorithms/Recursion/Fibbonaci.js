// Given a number N return the index of the fibonacci 
// sequence, where the sequence is:

// 0,1,1,2,3,5,8,13,21,34,55,89,144....
// The pattern of the sequence is that each value is the sum of
// the previous 2 values, that means that for N=5 -> 2+3

// Iterative method O(n)

let sum = 0;
const arr = [0,1]
function fibbonaciIndex(n){
	for (var i = 2; i < n; i++) {
		arr.push(arr[i-2] + arr[i-1]);
	}
	return arr[n];
}

// Recursive method O(2^n)
let i = 0;
function fibbonaciIndex1(n){
	if (n < 2) {
		return n;
	}
	return fibbonaciIndex1(n-1) + fibbonaciIndex1(n-2)
}

console.log(fibbonaciIndex1(0))


// Recursion vs Iterative approach
// Anything you can do with recursion CAN be done iteratively
// pro- Dry and easy readability
// con- Large Stack (creates extra memory with extra calls)
// Tail Call Optimization(recursion with creating extra stack)ES-6

// NEW RULE:
// Every time you are using a tree or converting something into
// a tree, consider a recursion.
// 1. Divided into a number of subproblem that are smaller instances
// 	  the same problem.
// 2. Each instances of the subproblem is identical in nature
// 3. The solution of each subproblem can be combined to solve the problem at hand.

// Divide and Conquer using recursion

