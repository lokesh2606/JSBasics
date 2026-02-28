// let a="Hi";
// var b="Hello";
// if(true){
//     console.log(a,b);
//     let c= "HIIII";
//     var d="HELLLLLO";
//     console.log(c,d);
//     a="Lokesh";
// }

// console.log(a);
// console.log(b);
// //console.log(c); // cannot print c because c is declared in enclosed space and cannot be accesed 
// // outside its scope.
// console.log(d);



let king="A";
if(true){
    let king="B";
    if(true){
        let king="C";
        console.log(king);
    }
    console.log(king);
}
console.log(king);
// console.log(m); // cannot print m in this case because m is declared in an enclosed space
//in this problem if we dont declare it(use the word let):
//consider as global, outer, inner. 
// in outer block if we dont dont declare the variable and directly modify it; the var also 
// changes in the global block because it is not shadowing the existing variable but directly 
// updating it.
// in second case, consider not declaring the variable in inner block of code but just updating it. 
// So, what happens is initially B overshadows A. then B gets updated to C. So the o/p will be C in 
// inner block and C in outer block as well since the var is updated not overshadowed. But in global 
// scope the variable remains same as after updating in the outer block, it still remains as C 
// overshadowing A. and after exiting the outer block of code the var gets changed back to A.


// var k="A";
// if(true){
//     var k="B";
//     if(true){
//         var k="C";
//         console.log(k);
//     }
//     console.log(k);
// }
// console.log(k);