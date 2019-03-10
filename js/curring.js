const res = a => b => a+b;
// function(a){function(b){a+b}} ???
console.log(res(1)(2));

//curring function
const res2 = a => b => c => a+b+c;
console.log(res2(1)(2)(3));