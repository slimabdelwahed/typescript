var personne = {
    name: "slim",
    age: 30,
    greet: function () {
        console.log("Hello, my name is ".concat(this.name));
    }
};
personne.greet();
