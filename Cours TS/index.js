"use strict";
// variables
let num1 = 24;
let num2;
let numOrstring;
// Tableaux
let arr = ["chien", "chat", "poisson"];
let tableau = [];
let tableau1 = [];
const zidane = {
    id: 0,
    name: "Zidane",
    // jersey: 10,
};
// let player = {
//     id: 0,
//     name: "Zidane",
//     // jersey:number
// };
// player.jersey = 10;
// const sayName = () => {
//     console.log(player.surname);
// };
// Les classes
class Singer {
    constructor(id, name, alive) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
}
const prince = new Singer(0, "Prince");
// console.log(prince);
// Les fonctions
const sayMyName = (name) => {
    console.log(`Bonjour ${name}`);
};
// sayMyName("Ren4issance");
const ageDuCapitaine = (age, size) => {
    if (size) {
        console.log(`La taille est de ${size} cm et il est agé de 16 ${age} ans`);
    }
    else {
        console.log(`Il est agé de : ${age} ans`);
    }
    return "Ok cool";
};
ageDuCapitaine(16, 185);
// enum & Tuple
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["PREMIUM"] = 1] = "PREMIUM";
    Role[Role["BASIC"] = 2] = "BASIC";
})(Role || (Role = {}));
console.log(Role.ADMIN);
console.log(Role.PREMIUM);
const user1 = {
    name: "Ren4issance",
    attributes: [false, "author"],
    role: Role.ADMIN,
};
if (user1.role === Role.ADMIN) {
    console.log("connexion spéciale");
}
