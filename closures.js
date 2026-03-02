// function fn(){
//     console.log("Hello");
//     return "Hi";
// }

// const a=fn()
// // when we are assigning a function to another variable; if we call the function while assigning it(using "()"); it runs the function and stores the return value in the declared variable.
// // In this case; when fn() is being storedf in a variable; function fn() runs and prints "Hello" in the terminal and stores the return value "Hi" in the a.
 
// console.log(typeof a)

// const b=fn
// // If we dont want to run the function just store the entire function in a variable then we shopuld assign it as above. it stores the function entirely and runs only when we 
// // call it

// console.log(typeof b)
// const c=b()
// console.log(typeof c)

let count=0
function fn1(){
    console.log(++count)
}
fn1();
count=0
fn1();
fn1();



function outer() {
    let count2 = 0;
    return function () {
        console.log(++count2)
    }

}

const fn = outer()
fn()
fn()
fn()
fn()
fn()