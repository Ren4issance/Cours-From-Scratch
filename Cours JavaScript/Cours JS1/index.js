// alert("Salut JS!");

// ********* Les Variables ********* //

var unTexte = "voici un texte";

// const = constante (ne peut pas être modifiée)
const prenom = "justine";

// let = variable (peut être modifiée)
let unChiffre = 24;
unChiffre = 22;

let chaine = "Je suis une chaine de caractères";

let nouvelleChaine =
    "Chaine précédente : " + chaine + " et je suis une nouvelle chaine";

// Concaténation avec les backticks
let autreConcatenation = `Chaine précédente : ${chaine} et je suis une nouvelle chaine`;

// ********* Les Types de Variables ********* //

let string = "Je suis une chaine de caractères";
let number = 24;
let boolean = true; // ou false

// Tableau : il y a des crochets et les éléments sont séparés par des virgules
let array = ["un", true, 3];

// Objet : il y a des accolades et les éléments sont séparés par des virgules
let object = {
    prenom: "Justine",
    age: 24,
    estEtudiant: true,
};

// Variable non définie
let arbre;

arbre = "sapin";

// ********* Les Opérateurs ********* //
// console.log(4 + 5); // 9
// console.log(4 - 5); // 9
// console.log(4 * 5); // 9
// console.log(4 / 5); // 9
// // puissance
// console.log(4 ** 5); // 1024

// Opérateurs d'affectation

let total = 0;

total += 5; // total = total + 5
total -= 5; // total = total - 5

// ********* Les Structures de Contrôle ********* //
let x = 2;
let y = 2;

// if (x > y) {
//   // alert("x est plus grand que y");
//   console.log("x est plus grand que y");
// } else if (x < y) {
//   console.log("x est plus petit que y");
// } else {
//   console.log("x est égal à y");
// }

// On teste si la variable est true
if (x) {
    // console.log("x existe");
}

// === On test l'égalité en type et en valeur
if (x === y) {
    // console.log("x est égal à y");
} else {
    // console.log("x n'est pas égal à y");
}

let a = 2;
let b = "2";
// == On test l'égalité en valeur uniquement
if (a == b) {
    // console.log("x est égal à y");
} else {
    // console.log("x n'est pas égal à y");
}

// || = ou
// && = et

// soit l'un soit l'autre
if (x < y || x > 1) {
    // console.log("UI");
}

// && il faut que toutes les conditions soient réunies
if (x < y && x > 1) {
    console.log("UI");
}

// ********* Les Fonctions ********* //

// fonction classique à l'ancienne
function faireQuelqueChose() {
    console.log("Je fais quelque chose");
    console.log(5 + 6);
    alert("Calcul terminé");
}

// Il faut impérativement appelé la fonction pour qu'elle s'exécute
// faireQuelqueChose();

//fonction fléchée
const addition = (a, b) => {
    console.log(a + b);
};

// addition(5, 6);
// addition(432, 578481);

// ********* La portée des variables ********* //

function add2() {
    let num = 4;
    console.log(num + 2);
}

// console.log(num); // erreur car la variable num n'est pas définie dans ce contexte
