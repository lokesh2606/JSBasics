// spread operator on an array
// combining an array:

// const arr1=[1,2,3]
// const arr2=[4,5,6]

// const combined=[...arr1,...arr2]
// console.log(combined)

// const altCombined=arr1.concat(arr2)
// console.log(altCombined)

// //copying an array
// const copied=[...arr2]
// copied.push(8)
// console.log(copied) // it doesn't mutate the original array
// console.log(arr2)

// const dup=arr2
// dup.push(10)
// console.log(dup) // it mutates the original array
// console.log(arr2)// by assigning it directly it shares the same reference so changes in one array affects both the arrays


// Spread Operator with Objects

// //copy:
// const obj={
//     name:"Lokesh",
//     age:22
// }
// const obj2={...obj,age:23,city:"hyd"} // later value overrides the earlier ones. In this case, age=23 overrides 22.
// //console.log(obj2)

// const obj3={
//     name:"USer",
//     city:"hyd",
//     pincode:500001
// }

// const merged={...obj,...obj3} //later value in obj3 overides the earlier name value in obj
// console.log(merged)


// // Spread Operator in Function calls:

// const nums=[1,2,3,4]
// console.log(Math.max(...nums))


//Rest Operators:

// Functional Parameter: used to accept unlimited parameters
 
// function sum(...nums){
//     return nums.reduce((a,b)=>a+b);
// }

// nums=[1,2,3,5,6,7,9]
// console.log(sum(...nums))

//we Can also take normal and rest operators together in functional calls

// Rest is also used in array destructuring
 
const arrays1=[1,2,3,4,5]
const [a,,...b]=arrays1
console.log(a,b)

//Rest is used for object destructuring as well:

const newObj={
    name:"Lokesh",
    age:22,
    city:"Hyd",
    pincode:500001
}

const {name, ...rest}=newObj

console.log(name,rest)
