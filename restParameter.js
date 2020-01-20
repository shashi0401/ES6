//let arr = ['1','2','3','4'];


function sum(...arr){
    let s = 0;
    console.log(arr[0]);
    console.log(arr.length);
    
    for (a of arr){
        s+=a;
    }
    return s;
}

console.log(sum(7,8,9,5,7));

let p = [1,2,3,4]

let h = "Hello";
console.log(Array.from(h)); // converts iterable into array
console.log(...h);
console.log(h);
