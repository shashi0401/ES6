let range = "shashi"

let a = Array.from(range);
console.log(a);

let b = '12346560';
let result = Array.from(b, x=> x*x);
console.log(result);

// Array.from(obj , mapFn ,thisArg)