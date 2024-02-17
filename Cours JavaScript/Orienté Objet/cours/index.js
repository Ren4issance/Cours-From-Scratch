const obj = {
    // index: value
    pseudo: "From Scratch",
    ville: "Châtel-Guyon",
    admin: false,

    direBonjour: function () {
        console.log("Bonjour je suis " + this.pseudo);
    },
};

// const obj = {
//     // index: value
//     pseudo: "From Scratch",
//     ville: "Châtel-Guyon",
//     admin: false,

//     direBonjour() {
//         console.log("Bonjour je suis " + this.pseudo);
//     },
// };

// const obj = {
//     // index: value
//     pseudo: "From Scratch",
//     ville: "Châtel-Guyon",
//     admin: false,

//     direBonjour() {
//         console.log("Bonjour je suis " + obj.pseudo);
//     },
// };

// console.log(typeof obj);

// let array = [1, 2, 3, 4, 5];

// console.log(typeof array);

// console.log(document.body);
// console.log(typeof document.body);
// console.log(typeof null);

// Ajouter //

obj.age = 24;
obj["admin"] = true;

// Modifier //

obj.pseudo = "FS";

// Supprimer //

delete obj.ville;

// Checker si une propriété existe //

// console.log("pseudo" in obj);
// console.log("ville" in obj);

// Parcourir un objet //

for (const key in obj) {
    // console.log(key + " : " + obj[key]);
    // console.log(key);
}

// console.log(obj.direBonjour());

//----------------------------------------------------------------
// Méthode : Obtenir les clés et les valeurs d'un objet
//----------------------------------------------------------------

// Obtenir les clés d'un objet //

const keys = Object.keys(obj);
// console.log(keys);

// Obtenir les valeurs d'un objet //

const values = Object.values(obj);
// console.log(values);

// Obtenir les clés et les valeurs d'un objet //

const nestedArray = Object.entries(obj);
// console.log(nestedArray);

// Fusionner objects //

const obj2 = {
    taille: "1m75",
    poids: "75kg",
    pseudo: "From", // Le dernier déclaré écrase le premier
};

const fusion = Object.assign(obj, obj2);
// console.log(fusion);

// Freeze object //

// const newObj = Object.freeze(obj);

// Seal object // Permet de modifier les valeurs existantes mais pas d'en ajouter ou de supprimer

const newObj = Object.seal(obj);
newObj.adresse = "42 avenue du code";
newObj.pseudo = "Test";

// console.log(newObj);

//----------------------------------------------------------------
// Méthode : Les constructeurs
//----------------------------------------------------------------

// Fonction constructeur //

function User(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;

    this.getCity = function () {
        console.log(this.pseudo + " habite à " + this.ville);
    };
}

const user1 = new User("Ren4issance", "Châtel-Guyon"); // Instance de l'objet User
const user2 = new User("Arsenic", "Riom");

// console.log(user2.getCity());

//----------------------------------------------------------------
// Factory Functions
//----------------------------------------------------------------

function User3(pseudo, ville) {
    return {
        pseudo, // pseudo: pseudo,
        ville, // ville: ville,
        getCity() {
            console.log(this.pseudo + " habite à " + this.ville);
        },
    };
}

const user4 = User3("Narcotic", "Châtel-Guyon");
// console.log(user4);

//----------------------------------------------------------------
// Class
//----------------------------------------------------------------

class Utilisateur {
    constructor(pseudo, ville) {
        this.pseudo = pseudo;
        this.ville = ville;
    }
    sayMyName = function () {
        console.log("Bonjour je suis" + this.pseudo);
    };
}

const user5 = new Utilisateur("Bébou", "Paris");

Utilisateur.prototype.sayCity = function () {
    console.log("J'habite à " + this.ville);
};

Object.assign(Utilisateur.prototype, {
    method1() {
        // code
    },
    method2() {
        // code
    },
});

// console.log(user5);

let array = [1, 2, 3, 4, 5];
// console.log(array);

//----------------------------------------------------------------
// L'Héritage
//----------------------------------------------------------------

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    saySomething() {
        console.log(this.name + "dit" + this.name);
    }
}

class Dog extends Animal {
    run() {
        console.log("Le chien court !");
    }
}

class Cat extends Animal {
    hunt() {
        console.log("Le chat chasse !");
    }
}

const rintintin = new Dog("Rintintin", 9);
const minou = new Cat("Minou", 4);
console.log(rintintin, minou);
