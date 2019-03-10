//destruct assignment

var a, b,c, rest;
({a, b} = {a:10, b:20});

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

({a, b, ...rest} = {a:10, b:20, c:30, d:40, e:50});


console.log(a);
console.log(b);
console.log(rest);
// expected output: [30,40,50]

//디폴트 매개변수
({a, b, c =30} = {a:10, b:20});

console.log(a);
console.log(c);
// expected output: 10

console.log(b);
// expected output: 20