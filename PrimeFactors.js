const prompt = require('prompt-sync')();
let number = prompt('Enter a number : ');
console.log(`${number}`);
let factorsArr = new Array();
console.log(`Prime Factors :`); 
if(number > 0){
    for(let i=2; i<=number/2; i++) {
        let flag = 1
        if(number % i == 0) {
            for(let j=2; j<i; j++) {
        
                if((i % j) == 0){
                    flag = 0;
                    break;
                }	
            }
            if(flag == 1){
                factorsArr.push(i);
                console.log( factorsArr);
            }
        }
    }
}
else{
    console.log(`Invalid`);
}
