// const arr=[1,2,3,4,5,57];
// let [a,b,...c]=arr
// console.log(a,b,c)

// let [e,,...f]=arr
// console.log(e,f)

// const [x,,,,,y]=arr
// console.log(x,y)

// const [m=5,n=6] =[undefined,3];
// console.log(m)
// console.log(n)

// let a=1,b=2,c=3;
// [a,b,c]=[c,b,a]
// console.log(a,b,c)

// const ar1=[1,2,3,4,5]
// const ar2=[5,6,7]
// const [e1,, ...sfa]=ar1
// const fa=[e1,...sfa,...ar2]
// console.log(fa)

// const user = {
//     name: "User",
//     age: 22,
//     address: {
//         city: "Hyderabad",
//         pincode: 500001
//     }
// }
// console.log(user["address"]["city"])

// const { name: myname, age } = user
// user.name = "Lokesh"

// console.log(myname)
// console.log(age)


const user2={
    name:"Loki",
    age:22,
    add:{
        city:"Hyd",
        permanent_add:{
            "pin code":500075
        }
    }
}
console.log(user2.add.permanent_add["pin code"])

const {add:{city, permanent_add:{"pin code":pincode}}}=user2

console.log(city,pincode)

const { name, ...rest}=user2
console.log(name)
console.log(rest)

