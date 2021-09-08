function findTriples(arr){

    let triplesCount = 0; 
    
    for(let i=0; i<arr.length; i++) {
        for(let j=i+ +1; j<arr.length; j++) {
            for(let k=j+ +1; k<arr.length; k++) {
                // Check the sum of combination is zero
                console.log(arr[i] + ' ' + arr[j] +  ' ' + arr[k]);
                let sum = arr[i] + arr[j] + arr[k];
                console.log('sum : ' + sum);
                if(sum == 0){

                    // Condition to print the line only once
                    if(triplesCount == 0) {
                        console.log(`Triples available in array`);
                    }
                    console.log('(' + i + ' , ' + j + ' , ' + k + ')');
                    triplesCount++;
                }
            }
        }
    }
    if(triplesCount == 0) {
        console.log(`Array doesn't have triples`);
    }else {
        console.log(`Array  have triples : ` + triplesCount);
    }
}
const prompt = require('prompt-sync')();
let arr = new Array();
let count = prompt('Enter the count  : ');
console.log(`Enter the numbers  : `);		
for(let i=0; i<count; i++) {
    let num = prompt('');
    arr.push(parseInt(num));
}
console.log(arr);
findTriples(arr);