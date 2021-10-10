const statement = 'i am a boy ramesh '
function LongestWord(sen) { 
  let holder = []; // to conatain the individual words
  let len = sen.length;
  let partial = ''; 
  for(let i=0; i<= len ; i++){
    if(sen[i] == ' ' || sen[i] == sen[len]){
      holder.push(partial);
      partial = '';
    } else {
      partial = partial + sen[i];  // adding single character to form word
    }
  }
  return maxLenStr(holder);
}
function maxLenStr(arr){
  let longestWord = arr[0];
  for(let i=1; i< arr.length ; i++){
    if (longestWord.length === arr[i].length) {
      continue;
    }
    if(longestWord.length < arr[i].length){
      longestWord = arr[i];
    }
  }
  return longestWord;
}
   
// keep this function call here 
console.log(LongestWord(statement));
// 0(n) --> time nd space complexity
