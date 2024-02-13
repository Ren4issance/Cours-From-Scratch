// ************** SELECTEURS **************

// document.querySelector("h4").style.background = "yellow";

// const baliseHtml = document.querySelector("h4");

// console.log(baliseHtml);

// baliseHtml.style.background = "yellow";

// ************** Click Event **************

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

// console.log(btn1, btn2);

questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "green";
});

btn2.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "red";
});

// /* <div> > #id > .class >  balise html */ LES PRIORITES EN CSS

//------------------------------------------------------------

// ************** Mouse Events **************
const mouseMove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
    mouseMove.style.left = e.pageX + "px";
    mouseMove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
    mouseMove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
    mouseMove.style.transform = "scale(1) translate(-50%, -50%)";
    mouseMove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
    response.style.transform = "rotate(2deg)";
});

//------------------------------------------------------------

// ************** Key Events **************

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
    key.textContent = e.key;
});

//     if (e.key === "j") {
//         keypressContainer.style.background = "pink";
//     } else if (e.key === "h") {
//         keypressContainer.style.background = "teal";
//     } else {
//         keypressContainer.style.background = "white";
//     }
// });

//------------------------------------------------------------

// ************** Scroll Event **************

const nav = document.querySelector("nav");

window.addEventListener("scroll", (e) => {
    if (window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
});

//------------------------------------------------------------
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
    pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
    language = e.target.value;
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (cgv.checked) {
        document.querySelector(
            "form > div"
        ).innerHTML = `<h3>Pseudo: ${pseudo}</h3><h4>Langage préféré: ${language}</h4>`;
    } else {
        alert("Veuillez accepter les CGV.");
    }
});

//------------------------------------------------------------

// ************** Load Event **************
window.addEventListener("load", () => {
    // console.log("Document chargé !");
});
//------------------------------------------------------------
// ************** ForEach **************
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        e.target.style.transform = "scale(0.7)";
    });
});

//------------------------------------------------------------

// addEventListener Vs Onclick (propriété)

// document.body.onclick = () => {
//     console.log("Click !");
// };

// Bubbling => fin (de base l'eventlistener est paramétré en bubbling)
document.body.addEventListener(
    "click",
    () => {
        // console.log("Click 1!");
    },
    false
);

// Usecapture => début
document.body.addEventListener(
    "click",
    () => {
        // console.log("Click 2!");
    },
    true
);

//------------------------------------------------------------

// Stop propagation

questionContainer.addEventListener("click", (e) => {
    // alert("Test !");
    e.stopPropagation();
});

// removeEventListener

//------------------------------------------------------------
//BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open("http://google.com", "cours js", "height=600, width=800");
// window.close();

//Evénemnts adossés à Window
// window.alert("Hello !");

//Confirme
btn2.addEventListener("click", () => {
    confirm("Voulez-vous vraiment vous tromper ?");
});

//Prompt
btn1.addEventListener("click", () => {
    let answer = prompt("Entrez votre nom !");
    questionContainer.innerHTML += `<h3>Bravo ${answer}</h3>`;
});

// Timer, compte à rebours en millisecondes
setTimeout(() => {
    questionContainer.style.borderRadius = "300px";
}, 2000);

// setInterval

// let interval = setInterval(() => {
//     document.body.innerHTML += `
//     <div class="box">
//         <h2>Nouvelle Boite !</h2>
//     </div>
//     `;
// }, 1000);

document.body.addEventListener("click", (e) => {
    // e.target.remove();
    clearInterval(interval);
});

// Location
// console.log(window.location.href);
// console.log(window.location.host);
// console.log(window.location.pathname);
// console.log(window.location.search);
// location.replace("http://google.com");

// window.onload = () => {
//     location.href = "http://google.com";
// };

// Navigator
// console.log(navigator.userAgent);

// History
// console.log(history);
// window.history.back();
// window.history.go(-2);

//------------------------------------------------------------
// SetProperties
window.addEventListener("mousemove", (e) => {
    nav.style.setProperty("--x", e.layerX + "px");
    nav.style.setProperty("--y", e.layerY + "px");
});
