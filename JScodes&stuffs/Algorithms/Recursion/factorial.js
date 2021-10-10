// Using Recursive method - Big O => O(n) 

function Factorial(n) {
	if (n == 2) {
		return 2;
	}
	else {
		return n*Factorial(n-1);
	}
}
// Using General method - Big O => O(n)

let fact = 1;
function Factorial1(n) {
for (var i = 1; i <= n; i++) {
	fact = fact * i ;
}
return fact;
}

console.log(Factorial(1));

