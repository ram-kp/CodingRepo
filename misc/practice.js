// // handling asynchronous await
// Promise.resolve('asyncfail')
// 	.then(response => {
// 		throw new Error('#1 fail')  // im not doing anything more than finding the catch block
// 		return response
// 	})
// 	.then(response => {
// 		console.log(response)
// 	})
// 	.catch(err => {      // once it is caught its handles, unless we throw new error no catch block ahead of it works
// 		return err
// 	})
// 	.then(response => {
// 		console.log(response.message)
// 	})

// // asynchronous error handling 2

// async function (){
// 	try {
// 		await Promise.resolve('oopsie')
// 		await Promise.reject
// 	} catch
// }

// foreach
// const array = [1,2,3,4,5];
// const double = [];
// array.forEach( item => {
// 	double.push(item*2);
// });
// console.log('foreach', double);

// // map
// const double1 = array.map(item => item*2)
// console.log('map', double1);

// // filter
// const array1 = [1,3,5,9,7,23];
// const filtered = array1.filter(item => item > 5);
// console.log('filtered', filtered);

// // reduce
// const sum = array1.reduce((acc, num) => {
// 	return acc + num 
// })
// console.log(sum);

// the object are reference type while primitives like variables are not reference typed

// reference type
// var object1 = {value : 20};
// var object2 = object1;
// var object3 = {value : 20};
// console.log(object1 === object2);
// console.log(object1 === object3);

// es8 features
// const obj = {
// 	username1 : 'mr Ram',
// 	username2 : 'satyajith roy',
// 	username3 : 'Elon musk'
// }
// Object.keys(obj).forEach( (key, index) => {
// 	console.log(key, index);
// });
// Object.values(obj).forEach( value => {
// 	console.log(value)
// });
// const modified = Object.entries(obj).map(value => {
// 	return value[1] + value[0].replace('username', '')
// })

// console.log(modified);
// console.log(obj)

//  ES9 features
// const array = [1,[[2,3],4],[5]];
// console.log(array.flat(2));
// const employees = [['ram', 28], ['sam', 32], ['jadhav', 39]]
// const objEmployees = Object.fromEntries(employees);
// console.log(employees);
// console.log(objEmployees)
// console.log(Object.entries(objEmployees))

// for(item in obj) {   // we are enumerating and not iterating(arrays)
// 	console.log(obj[item]);
// }
// const flattened = [[0,1],[2,3],[6,5],[4,9]].reduce(
// 	(a,b) => a.concat(b), []);
// console.log(flattened)

// given two array to the function , if any of the element of one array matches with
// any of the element of other array it return true or else false
// for example -
 // "zenie"
// 	"prokaryote"
//  ---> returns true (boolean)
// let charMatch = function(a, b) {
// 	let i=0, j=0;
// 	let aObj = {};
// 	a.split("").map((cur) => { // 0(n)
// 	  	aObj[cur] = cur;
// 	})
// 	console.log(aObj);
// 	while(i < b.length){    //0(m)
// 		if( aObj[b[i]] ){
// 			return true;
// 		}
// 		i++;
// 	}
// 	return false;
// }
// let res = charMatch('ramta','shu'); // 0(m+n)
// console.log(res);
// console.log("esfs".length)

// input 1. an array of integers 2. sum , we are suppose to find a pair of integers
// in the array whose sum = sum specified
// [2,3,6,9,1], 10
// returns --> (9,1)
// [2,3,6,9,1], 6
// return --> false

// const numArray = [3,2,7,9,1];  // closures
// const sum = 10;

// const sumPair = function(numArray, sum){
// const complement = {};  // empty object to contain complement(sum-num)
// const pairArray = [];
// let i=0;
// 	while(i<numArray.length){   // iterates over the array
// 		if(complement[sum-numArray[i]]){  // checking the existence of complement
// 			pairArray.push([numArray[i], sum-numArray[i]]);
// 		} 
// 		complement[numArray[i]] = true;  // pushes the number itself into the array
// 	i++;
// 	}
// 	if(pairArray[0]){
// 		return pairArray;
// 	}
// 	return false;
// }
// let res = sumPair(numArray, sum);
// console.log(res);

// input a string and reverse it completely
// input--> my name is ram
// output--> mar si eman ym

// brute force 0(n) time and space complexity both
// const revString = (str) => {
// 	const revStr = [];
// 	for (let i = str.length-1; i >= 0; i--) {
// 		revStr.push(str[i]);
// 	}
// 	return revStr.join("");
// }
// const res = revString("ram is a good boy");
// console.log(res);

const finalString = (str, pat, rep) => {
	const final = [];
	let j=0,m=0;
	for(let i=0; i<str.length; i++) {
		while(str[m] == pat[j]){
			j++;
			m++;
			if(pat[j] == null){
				let found = 1;
				for(start=0; start<rep.length; start++, i++){
					final[i] = rep[start];
					j=0;
					m=i;
				}
			}
		}
		final[m] = str[i];
		m++;
	}
	return final;
}
console.log(finalString('rampanram', 'pan', 'kan').join(""));














