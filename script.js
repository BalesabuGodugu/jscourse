
let a = [8,9];
const demo = function add(...a){
    a[0] = 19;
    return a;}
console.log(a);
console.log(demo(a));
//console.log(add(3,4));
console.log(a);