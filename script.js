
// let a = [8,9];
// const demo = function add(...a){
//     a[0] = 19;
//     return a;}
// console.log(a);
// console.log(demo(a));
// //console.log(add(3,4));
// console.log(a);

// class Animal {};
// console.log(Animal);
// const dog = Object.create(Animal);
// const dog2 = new Animal();

// console.log(dog);
// console.log(dog2);


let student = {
    firstname : "akash",
    lastname  : "kumar"
  
}
let   fullname  =  function(location,noofyears){
    console.log(this.firstname+" "+ this.lastname," ,his location is: "+ location," he has been working here from last", noofyears);
 }
 fullname.call(student,"hyderabad","8");

let student2 = {
    firstname : "ajay",
    lastname  : "kumar",
   
}

fullname.apply(student2,["delhi","working in new throught process"]);