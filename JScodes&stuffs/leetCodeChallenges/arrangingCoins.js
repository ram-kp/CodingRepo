// JULY'20 day 1 challenge
var arrangeCoins = function(n) {
    let ctr = 0;
    let i;
    let rowCount = 0;
    while(ctr < n){  // untill counter = n-1
        for(i=0 ; i<=rowCount; i++){  
                                                          // to print the coins along the line uptill no of rows
        }
        rowCount++;                                  // increment the row count by 1 each time
        ctr += i;                                    // increment total element count by i 
    }
    if (n-ctr != 0) {
        return rowCount-1;
    }
    return rowCount;
};
/*var arrangeCoins = function(n) {
    if(!n) return 0;
    let result = 0;
    let total = 0;
    
    while(total <= n) {
        result++;
        total += result; 
    }
    if(result <= 1) return result; 
    return result - 1;
};*/

// console.log(arrangeCoins(3)) 
// answer--> 2
console.log(arrangeCoins(11))
