// // fn expression
// let greet = function () {
//     console.log("Inside the Function");
// }
// console.log(greet());


// greet2();
// // normal fn
// function greet2() {
//     console.log("Second way of creating a function");
// }


// let fn = () => {
//     console.log("Inside the Function");
// }


function sayMyname(greet = "Hello User") {
    console.log(greet);

}



// const myGreet = sayMyname("Good Morning...")

// console.log(myGreet);

sayMyname()

function outerFn(val, fn) {


    console.log(val + 2);
    return fn("Hiiii USerrrr");



}

outerFn(5,sayMyname)
// outerFn(5, function () {
//     console.log("i am from inner fn");

// })

anotherfn=()=>{
    console.log("Inside Another Function");
}

anotherouterfn=(val,fn)=>{
    console.log(val+3);
    return fn()
}

anotherouterfn(5,anotherfn)