let randomArr = new Array();
for(let i=0; i<10; i++){
    let number = Math.floor(Math.random() * 900) + 100;
    randomArr.push(number);
}
randomArr.sort();
console.log(randomArr);
console.log('Second Largest : ' + randomArr[randomArr.length - 2]);
console.log('Second Smallest : ' + randomArr[1]);
