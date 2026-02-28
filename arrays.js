// const arr=new Array(5,3,4);
// const arr2=new Array(6);
// console.log(arr,arr.length);
// console.log(arr2,arr2.length);


let newArr=[1,2,3];
newArr.push(4);     // newArr=[1,2,3,4]
newArr.pop();       // newArr=[1,2,3]
newArr.unshift(0);  // newArr=[0,1,2,3]
newArr.shift();     // newArr=[1,2,3]
// console.log(newArr);


newArr.push(2);
newArr.push(5);
// console.log(newArr.indexOf(2));
// console.log(newArr.indexOf(4));
// console.log(newArr.lastIndexOf(2));
// console.log(newArr.lastIndexOf(4));


// console.log(newArr.length);

// const list=[1,2,3,4,5,6]
// const mappedList=list.map((x)=>x*3)
// console.log(mappedList);
// //console.log(list);

// const filteredList=list.filter((x)=>x%2===0)
// console.log(filteredList);
   
// const reducedList=list.reduce((a,b)=> a*b)
// console.log(reducedList)


const somearray=["a","b","c","d"]
const string= somearray.join(" "); // by default the join operator uses ',' as the seperrator we can also modify it.
console.log(string);

const Array=[1,2,3,4,5];
for(let i=0;i<Array.length;i++){
    console.log(Array[i]*2);
}
for(let i in Array){
    console.log(Array[i]*3);
}
for(let i of Array){
    console.log(i*4);
}
let res=Array.forEach(n=> n*10)
console.log(res) // it returns undefined because forEach doesnt return any value
