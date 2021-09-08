let diceMap = new Map();
let i = 0;
let maxTemp = 0;
let maxNum;
while(maxTemp < 10){
    let number = Math.floor(Math.random() * 6) + 1;
    //check key exist or not
    if(diceMap.has(number)){
        let count = diceMap.get(number);
        count += +1;
        diceMap.set(number,count);
        if(maxTemp < count){
            maxTemp = count;
            maxNum = number;
        }
    }
    else{
        diceMap.set(number,1);
    }
}
let min = 10;
let minNum;
for(let [number,count] of diceMap){
    if(count < min){
        min = count;
        minNum = number;
    }
}

console.log(diceMap);
console.log("Number reaches Maximum times : " + maxNum);
console.log("Number reaches Minimum times : " + minNum);