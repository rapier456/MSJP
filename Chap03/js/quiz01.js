const num = [1, 3, 4, 5, 6, 8, 11, 12, 23, 34];

document.write(`<h2>for문 결과</h2>`);
for(let i = 0; i <num.length; i++){
    if(num[i] > 10){
        document.write(`$num`);
    }
};

document.write(`<hr>`);

document.write(`<h2>forEach 결과</h2>`);
num.forEach(function(num1){
    if(num1 > 10){
        document.write(`$(num1), `);
    }
});

document.write(`<hr>`);

document.write(`<h2>for of 결과</h2>`);
for(let num1 of num){
    if(num1 > 10){
        document.write(`$(num1), `);
    }
}