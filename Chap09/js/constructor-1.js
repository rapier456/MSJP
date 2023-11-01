// 생성자 함수 만들기
function Book(title, pages, done = false){
    this.title = title;
    this.pages = pages;
    this.done = done;
    this.finish = function(){
        let str = "";
        this.done === false ? (str = "읽는 중") : (str = "완독");
        return str;
    }
}

// 생성자 함수를 사용하여 객체 생성이 가능
// 3개의 인수를 가지고 객체 생성
const book1 = new Book("모던 자바 스크립트", 650, false);
const book2 = new Book("PL/SQL", 450, true);

document.write(`<h2>생성자 함수로 객체 만들기</h2>`);
document.write(`${book1.title} - ${book1.pages} - ${book1.finish()}<br>`);
document.write(`${book2.title} - ${book2.pages} - ${book2.finish()}<br>`);

// class 만들기
class Book2{
    //constructor() 안에 property를 작성
    constructor(title, pages, done = false){
        this.title = title;
        this.pages = pages;
        this.done = done;
    }
    //method는 constructor() 밖에 작성
    // function 예약이 사용 안함. ()만 사용
    finish() {
        let str = "";
        this.done === false ? (str = "읽는 중") : (str = "완독");
        return str;
    }
}

const book3 = new Book2("모던 자바 스크립트", 650, false);
const book4 = new Book2("PL/SQL", 450, true);

document.write(`<hr><h2>클래스로 객체 만들기</h2>`);
document.write(`${book3.title} - ${book3.pages} - ${book3.finish()}<br>`);
document.write(`${book4.title} - ${book4.pages} - ${book4.finish()}<br>`);