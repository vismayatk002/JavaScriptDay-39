let randomArr = new Array();
for(let i=0; i<10; i++){
    let number = Math.floor(Math.random() * 900) + 100;
    randomArr.push(number);
}
let min;
let max;
let secondMin;
let secondMax;

for (let i = 0; i < 10; i++ ){

    if(i == 0){
        min = randomArr[i];
        max = randomArr[i];
    }
    if(randomArr[i] < min){
        secondMin = min;
        min = randomArr[i];
    }
    else if(randomArr[i] < secondMin){
        secondMin = randomArr[i];
    }
    if(randomArr[i] > max){
        secondMax = max;
        max = randomArr[i];
    }
    else if(randomArr[i] > secondMax){
        secondMax = randomArr[i];
    }
}
console.log('Second Smallest Number : ' + secondMin);
console.log('Second Largest Number : ' + secondMax);