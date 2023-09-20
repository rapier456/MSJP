const student ={
    major : "컴퓨터공학부",
    idNum : 201795042,
    name : "박정수"
}

for(key in student){
    document.write(`${key} : ${student[key]}<br>`);
}