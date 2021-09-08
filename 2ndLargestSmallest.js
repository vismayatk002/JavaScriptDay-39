let randomArr = new Array();
for(let i=0; i<10; i++){
    let number = Math.floor(Math.random() * 900) + 100;
    randomArr.push(number);
}
console.log(randomArr);
