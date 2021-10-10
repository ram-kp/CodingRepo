// july-20 day7
let input= [8,7,2,3,9,9,9,8]
var plusOne = function(digits) {
    let nineArr=[];
    let besideNine;
    let ctr = digits.length-1;
    
    while(digits[ctr] == 9 ){
        nineArr.push(digits.pop((digits[ctr])))  // popped out all 9's into nineArr
        ctr--;                                   // ctr is left adjacent index of first 9 in the digits
    }
    if(nineArr.length != 0){                     // whether nineArr exist
        if(digits[ctr] != null && digits[ctr+1] == null){    // modified digits last element = nonNine 
            nineArr.fill(0);
            digits[ctr]++ ; 
            return digits.concat(nineArr)
        }
        nineArr.length++;                        // modified digits has no element
        nineArr.fill(0);
        nineArr[0] = 1;
        return digits.concat(nineArr)
    }
    
    digits.push(digits.pop()+1)
    return digits
};
console.log(plusOne(input));
