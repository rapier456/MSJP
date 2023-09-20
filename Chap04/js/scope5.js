const factor = 5;

function calc(){
    return num * factor; //오류 발생.
}

{
    const num = 10; // 이 블럭에서만 사용가능한 num
    let result = calc();
    console.log(`result : ${result} `);
}