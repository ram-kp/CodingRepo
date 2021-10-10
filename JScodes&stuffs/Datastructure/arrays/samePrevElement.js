// given an array = [2,1,6,2,4,5,6,6]
// it should return 2

//given an array = [2,1,1,4,2,5]
// it should return 1

// given an array = [2,3,5,6,8]
// it should return undefined

const checkList = new Set();
function firstRecurringItem(list){
	for(let i=0; i<list.length ; i++){
		checkList.add(list[i]);
		if(!list[i+1]){
			break;
		}
		if(checkList.has(list[i+1])){
			return list[i+1];
		}
	}
	return undefined;
}

console.log(firstRecurringItem([1,3,4,2,1,7])); // should return undefined
// 0(n)