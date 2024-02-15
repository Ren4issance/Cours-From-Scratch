// **************** Rappel des types de données en JS ****************

let string = "Je suis une chaine de caractères";
let number = 42;
let boolean = true;
let maVariable; // undefined
let autreVariable = null; // null

// console.log(typeof string); // string

// **************** Les tableaux ****************

let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array[0][3]);

let array2 = ["Bordeaux", 42, true, [1, 2, 3], { nom: "Denis" }];
// console.log(array2[4].nom);

let object = {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
};

// object.adresse = "22 rue du code";
// console.log(object);

let data = [
    {
        pseudo: "Denis",
        age: 33,
        technos: ["Javascript", "React", "NodeJs"],
        admin: false,
    },
    {
        pseudo: "Samia",
        age: 24,
        technos: ["CSS", "React", "NodeJs"],
        admin: false,
    },
    {
        pseudo: "Nikola",
        age: 42,
        technos: ["Php", "React", "NodeJs"],
        admin: true,
    },
];

// console.log(data[2].pseudo[0]);

// **************** Les structures de contrôle ****************

if (data[0].age > data[1].age) {
    // console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
    // console.log(data[1].pseudo + " est plus agé que " + data[0].pseudo);
}

// if (valeur à tester) valeur si vrai

// valeur à tester ? si vrai : si faux : ternaire

// While

let w = 0;

while (w < 10) {
    w++;
    // console.log("la valeur de w est de : " + w);
}

// Do while
let d = 0;

do {
    d++;
    // console.log(d);
} while (d < 5);

// For
for (const user of data) {
    // document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}

// on déclare la valeur de i / jusqu'où on boucle / incrémentation
for (i = 0; i < data.length; i++) {
    // console.log(data[i].technos[0]);
    // document.body.innerHTML += "<h2>" + data[i].technos + "</h2>";
}

document.body.addEventListener("click", (e) => {
    switch (e.target.id) {
        case "javascript":
            document.body.style.background = "yellow";
            break;
        case "php":
            document.body.style.background = "violet";
            break;
        case "python":
            document.body.style.background = "blue";
            break;
    }
});

// **************** Méthodes String ****************
let string2 = "Javascript est un langage orienté objet";

// console.log(typeof "42");
// console.log(eval(parseInt("1") + 2));
// console.log(isNaN(string2));,

// console.log(string2.length);
// console.log(string2[string2.length - 1]);

// console.log(string2.indexOf("langage"));
// console.log(string2.indexOf("x")); // Retourne -1 s'il ne le connaît pas

// let newString = string2.slice(5, 17);

// console.log(string2.split("i"));

// console.log(string2.toLowerCase());
// console.log(string2.toUpperCase());

// console.log(string2.replace("Javascript", "PHP"));

// **************** Méthodes Numbers ****************

let number2 = 42.1234;
let numberString = "42.1234 est un chiffre";

// console.log(number2.toFixed(2));
// console.log(parseInt(numberString));
// console.log(parseFloat(numberString));

// Maths

// console.log(Math.PI);
// console.log(Math.round(4.5));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.pow(2, 7));
// console.log(Math.sqrt(16));

// console.log(Math.floor(Math.random() * 50));

// **************** Méthodes Array ****************

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

let newArray = array3.concat(array4);
// console.log(newArray);

// let newArray = [...array3, ...array4];
// console.log(newArray);

// console.log(array3.join(" "));

// console.log(newArray.slice(2, 5));

// console.log(array3.indexOf("Python"));

// array3.forEach((languages) => {
//     console.log(languages);
// });

// console.log(array3.every((language) => language === "Php"));
// console.log(array3.some((language) => language === "Php"));

// let shift = array3.shift();
// console.log(shift);

// console.log(array3.pop());

// const restArray = array3.splice(1, 1, ...array4);
// console.log(array3);

// **************** IMPORTANT ****************
let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y));
arrayNumber.push(17);
// console.log(arrayNumber);

// **************** FILTER, SORT, MAP ****************

// console.log(arrayNumber.filter((number) => number > 10));
// console.log(arrayNumber.sort((a, b) => a - b));

// document.body.innerHTML = arrayNumber
//     .map((number) => `<li>${number}</li>`)
//     .join("");

// **************** Méthodes Object ****************

// document.body.innerHTML = data
//     .filter((user) => user.pseudo.includes("a"))
//     .sort((a, b) => b.age - a.age)
//     .map(
//         (user) =>
//             `
//             <div class="user-card">
//                 <h2>${user.pseudo}</h2>
//                 <p>Age : ${user.age} ans</p>
//                 <p>Statut: ${user.admin ? "Modérateur" : "Membre"}</p>
//             </div>
//         `
//     )
//     .join("");

// **************** Dates ****************

// Date classique
let date = new Date();

// Timestamp
let timestamp = Date.parse(date);
// console.log(timestamp);

// IsoString
let iso = date.toISOString();

function dateParser(chaine) {
    let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        // hour: "numeric",
        // minute: "numeric",
    });
    return newDate;
}

// console.log(dateParser(date));
// console.log(dateParser(timestamp));
// console.log(dateParser(iso));

// **************** Destructuring ****************

let moreData = {
    destVar: ["Element1", "Element2"],
};

const { destVar } = moreData;

// console.log(moreData.destVar);
// console.log(destVar);

let array5 = [70, 80, 90];
let [x, y, z] = array5;
// console.log(x, y, z);

// console.log(iso);
const dateDestructuring = (chaine) => {
    let newDate = chaine.split("T")[0];
    let [y, m, d] = newDate.split("-");
    return [d, m, y].join("/");
};
// console.log(dateDestructuring(iso));

// **************** Les Datasets ****************

const h3js = document.getElementById("javascript");
// console.log(h3js.dataset.lang);

const h3 = document.querySelectorAll("h3");
// h3.forEach((language) => console.log(language.dataset.lang));

// **************** Les Regex ****************

let mail = "from_scratch33@gmail.com";
// console.log(mail.search(/from/));

// console.log(mail.replace(/from/, "de"));

// console.log(mail.match(/SCratch/i));
// console.log(mail.match(/[zug]/));
// console.log(mail.match(/[123]/));

// Tous les chiffres
// console.log(mail.match(/\d/));

// Matcher toutes les lettres
// console.log(mail.match(/[a-z]/));

// console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));

let separator = 265264849;

// console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
