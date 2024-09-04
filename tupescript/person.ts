interface Person {
    name:string;
    age:number;
    greet():void;
}
const personne:Person={
    name:"slim",
    age:30,
greet(){console.log(`Hello, my name is ${this.name}`);

}
}
personne.greet()