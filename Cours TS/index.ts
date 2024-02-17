// variables
let num1 = 24;
let num2: string;
let numOrstring: number | string;

// Tableaux

let arr = ["chien", "chat", "poisson"];
let tableau: string[] = [];
let tableau1: (number | boolean)[] = [];

// tableau.push(false);
// tableau.push(24);
// tableau.push("string");

// Les objets

// console.log(array);

interface Player {
    id: number;
    name: string;
    jersey?: number;
}

const zidane: Player = {
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
    id: number;
    name: string;
    alive?: boolean;

    constructor(id: number, name: string, alive?: boolean) {
        this.id = id;
        this.name = name;
        this.alive = alive;
    }
}

const prince = new Singer(0, "Prince");
// console.log(prince);

// Les fonctions

const sayMyName = (name: string) => {
    console.log(`Bonjour ${name}`);
};
// sayMyName("Ren4issance");

const ageDuCapitaine = (age: number | string, size?: number): string => {
    if (size) {
        console.log(
            `La taille est de ${size} cm et il est agé de 16 ${age} ans`
        );
    } else {
        console.log(`Il est agé de : ${age} ans`);
    }
    return "Ok cool";
};

ageDuCapitaine(16, 185);

// enum & Tuple
enum Role {
    ADMIN,
    PREMIUM,
    BASIC,
}

console.log(Role.ADMIN);
console.log(Role.PREMIUM);

interface User {
    name: string;
    attributes: [number | boolean, string]; // Tuple
    role: Role;
}

const user1: User = {
    name: "Ren4issance",
    attributes: [false, "author"],
    role: Role.ADMIN,
};

if (user1.role === Role.ADMIN) {
    console.log("connexion spéciale");
}
