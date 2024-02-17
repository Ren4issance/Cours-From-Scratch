// XMLHttpRequest

function reqListener() {
    console.log(this.responseText);
}

// let req = new XMLHttpRequest();
// req.onload = reqListener;
// req.open("get", "data.txt", true);
// req.open("get", "data.json", true);
// req.open("get", "https://api.blablagues.net/?rub=blagues", true);
// req.send();

//------------------------------------------------------------
// FETCH
//------------------------------------------------------------

// fetch("monlien", "objet d'options")
//     .then((response) => {
//         // console.log(response);
//     })
//     .catch((err) => console.log(err));

fetch("data.txt").then((res) => res.text());
// .then((data) => console.log(data));

fetch("data.json").then((res) => res.json());
// .then((data) => console.log(data));

const myHeaders = new Headers();

const init = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
};

// fetch("data.json", init).then((res) => console.log(res));

//------------------------------------------------------------
// CRUD => Create (POST), Read (GET), Update (PUT), Delete (DELETE)

const init2 = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        pseudo: "John",
        message: "Yo les potes !",
    }),
    mode: "cors",
    credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
    fetch("http://localhost:3000/posts", init2).then(() =>
        console.log("data envoyée")
    );
});

//------------------------------------------------------------
//Asynchrone
//------------------------------------------------------------

// setTimoout(() => {
//     log("test");
// }, 2000);

// Promise
// fetch("monlien").then((res) => res);

// async await
async function fetchData() {
    await fetch("monlien");
    // attend que le await soit exécuté avant de faire la suite

    executeFonction();
}

const fecthData2 = async () => {
    await fetch("monlien");

    executeFonction();
};

//------------------------------------------------------------
// LE JSON
//------------------------------------------------------------

// Méthode .json() => transforme le json en objet JavaScript, elle s'auto-résout en renvoyant le Body de la requête

fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
        // console.log(data);
        // console.log(JSON.stringify(data)); // Stringify => transforme un objet JavaScript en JSON
        let settings = JSON.stringify(data);
        // Parse => transforme un JSON en objet JavaScript
        // console.log(JSON.parse(settings));
    });

//------------------------------------------------------------
// Les WEB API
//------------------------------------------------------------

// CLIENT STORAGE
// localStorage

localStorage.data = "Je stock la data";
// document.body.textContent = localStorage.data;

localStorage.removeItem("data");

const obj = {
    pseudo: "John",
    age: 25,
};

// IIl faut passer des chaines de caractères
localStorage.user = JSON.stringify(obj);

// console.log(JSON.parse(localStorage.user))
// ---
// session Storage
// ---
// sessionStorage.dataSettings = "Je stock la data";
// console.log(sessionStorage.dataSettings);
// sessionStorage.clear();
// ---
// Cookies
// ---

document.cookie = "username=John Doe";

// Bonne pratique
document.cookie = "pseudo=FS;path=/;max-age=45000; secure; samesite";
