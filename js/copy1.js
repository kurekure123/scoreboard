let book = {title: "인사이드 자바스크립트", price: 18000};
// 1. book을 카피한후에  price를 바꾸면 book과 copyBook이 같이 바뀐다. 이유가 무엇인가?
// let copyBook = book;
// copyBook.price = 20000;
// console.log(book);
// console.log(copyBook);

// 2. book을 카피하되 deep copy를 수행한 후에 price를 30000으로 바꾸고 출력하라. 두개의 값이 달라야 한다.
// 2-1 Object.assign() 사용하여 deep copy하기
//Object.assign(src, ...target);

//새로운 객체 생성 {} 을 사용하기만 해도 새로운 배열 객체가 등록 된다.
//Object.assign({}, ...target);

//book에 있는 값을 {} 배열 안에 담는다.
//Object.assign({}, ...book);



// const copyBook = Object.assign({}, ...book/*, {a:1}, {title:'a'}*/);
// copyBook.price = 20000;
// console.log(book);
// console.log(copyBook);


// 2-2 es6 spread 연산자를 사용하여 deep copy 하기
// spread 연산자
//{...book}

const copyBook = {...book/*, ...{a:1}, ...{title:'a'}*/ };
copyBook.price = 20000;
console.log(book);
console.log(copyBook);
