// Implementing fibonacci using dynamic programming
let calculations = 0;

function fibonacciMaster(){  // 0(n) --> holymoly but we traded off space complex. ;)
	let cache = {};
	return function fib(n){
		calculations++;
		if (n in cache) {
			return cache[n]
		} else {
		  if (n < 2) {
			 return n;
		  } else {
			cache[n] = fib(n-1) + fib(n-2);
			return cache[n]
		  }
		}
	}
}
const fasterFib = fibonacciMaster();
console.time()
console.log(fasterFib(10));
console.timeEnd()
console.log('we did '+calculations+ ' calculations')



// 0,1,1,2,3,5,8,13,21,... may return entire list
function fibonacciMaster2(n){
	let answer = [0,1];
	for (var i = 2; i <= n; i++) {
		answer.push(answer[i-1] + answer[i-2])
	}
	return answer.pop()
}

console.log(fibonacciMaster2(5))



// General time taking way


function fibonacci(n){  // 0(2^n)
	calculations++ ;
	if (n < 2) {
		return n
	}
	return fibonacci(n-1) + fibonacci(n-2);
}
console.time()
console.log(fibonacci(10))
console.timeEnd()
console.log('we did '+calculations+ ' calculations')
