const greet= {
    name: "Lokesh",
    inside: ()=>{
        console.log(this.name);
    }
}

greet.inside()
