//조건 3번 : 함수에서 다른 함수 반환

let init = () => {
    return function(a, b){
        return a - b > 0 ? a - b : b - a;
    }
}

//함수 안의 다른 함수가 반환됨. 고로 결과가 아닌 init() 내부 코드가 출력됨.
//console.log(`init(30,20) : ${init(30,20)}`);

// 두개의 값을 처리한 결과. 기본init함수는 매개변수가 없는 함수였음.
console.log(`init(30,20) : ${init()(30,20)}`);