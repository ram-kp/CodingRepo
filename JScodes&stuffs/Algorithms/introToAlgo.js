// steps that we perform to do specific task, innumerable
// create it with the help of D.S. , booleans , keywords
// DataStructurees + Algorithms = Programs
// Class{} + functions() = Programs
// Algorithms can help us deal with scaling and Big O complexity
// Recursion is a concept and not Algo. and is used throughout.
// Recursion a common and popular topic at interveiws
// Recursion - a function that refers to itself.
// Used in sorting and traversing trees
// Recursive case - keep calling the funtion
// Base case in recursion is there to stop the function

let counter = 0;
function inception(){
	console.log(counter);
	if (counter > 3){
		return 'done!';
	}
	counter++ ;
	inception();
}
inception();

// 1. Identify the Base Case
// 2. Identify the Recursive Case
// 3. Get closer and closer and return when needed,
// 	  usually you have two returns.




