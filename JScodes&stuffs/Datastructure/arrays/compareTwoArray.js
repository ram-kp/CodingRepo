/* Given two arrays, create a function that let's 
user know (true/false) whether these two arrays
contain any common element */
// for Example:
const array1 = ['a', 'b', 'c', 'd'];
const array2 = ['x', 'y', 'h'];
// should return false.
//--------
// const array1 = { 1, 2, 3, 4,5 };
// const array2 = {8,5,6};
// should return true;

// 2 parameters
// return true or false
function compare(arr1,arr2){
	let found= 0;
	let index =0;
	const arr1Size = arr1.length;
	const arr2Size = arr2.length;
	// let biggerArr = arr1;
	// let smallerArr = arr2;
	arr1 = arr1 + arr2;

	for(let itr=0; itr<arr1.length; itr++){
		if(arr1[itr]===arr1[arr1Size+itr]){
			found= 1;
			index= itr;
			break;
		}
	}
	if(found===1){
		console.log('value was '+arr1[index]+' common');
	}
}
compare(array1,array2);


	
// 	for(i=0; i<arr1.length; i++) {
// 		for(j=0; j<arr2.length; j++) {
// 			if ( arr1[i]===arr2[j] ) {
// 				found= 1;
// 				index= i;
// 				break;
// 			}
// 		}
// 	}
// 	if(found === 1){
// 		console.log('the value '+arr1[index]+' existed in both the arrays');
// 	} else {
// 		console.log('no value matched in both the arrays');
// 	}
// }
// compare(array2,array1);