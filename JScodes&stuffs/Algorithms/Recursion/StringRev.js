// reversing a string using recursion

const content = 'madame';
let len = content.length;
const revContent = []
function ReverseString(len){
	// Base Case
	if(len < 0){
		return null;
	}
	// Recursive Case
	revContent.push(content[len]);
	return ReverseString(len-1)
}
ReverseString(len);
console.log(revContent.join(''));