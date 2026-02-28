// const car={
//     brand:"Honda",
//     col:"Black"
// };

// console.log(car.brand,car.col);

// //we can also create objects as follows
// const car2=new Object();
// car2.brand="toyota";
// car2.col="White";
// console.log(car2);

// class User{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }
// const u1=new User("Lokesh",22);
// console.log(u1);
// delete u1.age;
// console.log(u1);

// console.log("name" in u1);
// console.log(u1.hasOwnProperty("name"));
// u1.greet=()=>{
//     console.log("Hello",this.name);
// }
// u1.greet2=function(){
//     console.log("Hello",this.name);
// }
// u1.greet();
// u1.greet2();
// if we use a arrowfunction in objects; the "this" will look for parent scope not the currewnt scope. i.e,in the above case, it will 
// not consider u1 as this. it considers the parent scope(windows). So it returns undefined since the default value of windows scope 
// name is undefined. Eventhough if we define a name outside the object scope it returns undefined only.


// const obj={
//     name:'user',
//     greet() {
//         console.log("Hello",this.name);
//     }
// }

// obj.greet();


// const user={
//     name:"Lokesh",
//     age:22,
//     skills:"JavaScript",
//     greet() {
//         console.log("Hello",this.name,this.skills)
//     }
// }

// user.greet();

// delete user.age
// console.log(user)

// user.age=23
// console.log(user)



// class Cars{
//     constructor(brand,colour){
//         this.brand=brand
//         this.col=colour
//     }
// }

// c1=new Cars("Honda","Black");
// c2=new Cars("Toyota","Grey");

// c1.type="Petrol";
// console.log(c1,c2)


// class Cars2{
//     constructor(brand,type){
//         this.brand=brand;
//         if(type==="Petrol" || type==="Diesel"){
//             this.type=type;
//         }
//         else{
//             throw new Error("Invalid Type of The car.")
//         }
//     }
// }

// ca2=new Cars2("BMW","Petrol");
// ca1=new Cars2("Audi","Electric");




// ArrInObj={
//     name:"User",
//     skills:["Python","JS","SQL"],
//     year:2026
// }

// ArrInObj.skills.push("ML")
// console.log(ArrInObj["skills"])
// console.log(ArrInObj.skills)

// for(let key in ArrInObj){
//     console.log(key,ArrInObj[key]);
// }

// console.log("name" in ArrInObj);
// console.log(ArrInObj.hasOwnProperty("age"));
// console.log(Object.keys(ArrInObj))

// console.log(Object.values(ArrInObj))



objt={
    name:"User"
}

objt2=objt;
objt2.name="Lokesh";

console.log(objt.name)