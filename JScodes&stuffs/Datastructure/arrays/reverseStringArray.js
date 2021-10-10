// reverse a string
//'Hi my name is Ram' should be:
//'maR si eman ym iH'
// const content = 'Hi my name is Ram';
// const len = content.length;
// const newContent = [];

// function reverseString(str){
// 	for(let i=0; i<len ; i++) {
// 		newContent[i] = str[len-i-1];
// 	}
// 	return newContent.join('');
// }

// console.log(reverseString(content));

//O(n) - space compexity
//O(n) - time complexity

// const reverse2 = str => [...str].reverse().join('');
// console.log(reverse2(content));

//O(1) - space compexity
//O(n) - time complexity

// merge sorted arrays to give a single sorted array
// mergeSortedArrays[0,3,4,31],[4,6,30]
// [0,3,4,4,6,30,31]

const array1 = [0,3,5,8];
const array2 = [2,4,5,7,19];
let mergedArray = [];
let index1 = 0;
let index2 = 0;

function mergeSortedArrays(arr1,arr2) {
	if(arr1.length === 0){
		return arr2;
	}
	if(arr2.length === 0){
		return arr1;
	}
	while(arr1[index1] || arr2[index2]){		// true or true , true or true , true or true , 	false or true

		if(!arr2[index2] || arr1[index1] < arr2[index2]){		// 0<2	true	, 3<2 false 	, 3<30				,null<30 
			mergedArray.push(arr1[index1]);		// mer.. [0,]	, 				, mer.. [0,2,30,]
			index1++ ;							// index1 = 1	, 				index1 = 2
		}
		else { // 				, 3>2 true
			mergedArray.push(arr2[index2]);		//				, mer.. [0,2,]
			index2++ ;							//				, index2 = 1
		}
	}
	return mergedArray;
}
console.log(mergeSortedArrays(array1,array2));

