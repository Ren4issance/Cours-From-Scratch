const form = document.querySelector("form");
const inputs = document.querySelectorAll(
    'input[type="text"], input[type="password"]'
);
const progressBar = document.getElementById("progress-bar");
let pseudo, email, password, confirmPass;

const errorDisplay = (tag, message, valid) => {
    const container = document.querySelector("." + tag + "-container");
    const span = document.querySelector("." + tag + "-container span");

    if (!valid) {
        container.classList.add("error");
        span.textContent = message;
    } else {
        container.classList.remove("error");
        span.textContent = message;
    }
};

const pseudoChecker = (value) => {
    if (value.length > 0 && (value.length < 3 || value.length > 20)) {
        errorDisplay(
            "pseudo",
            "Le pseudo doit contenir entre 3 et 20 caractères"
        );
        pseudo = null;
        return false;
    } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
        errorDisplay(
            "pseudo",
            "Le pseudo ne doit pas contenir de caractères spéciaux"
        );
        pseudo = null;
    } else errorDisplay("pseudo", "", true);
    pseudo = value;
    return true;
};

const emailChecker = (value) => {
    if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
        errorDisplay("email", "L'email n'est pas valide");
        email = null;
    } else {
        errorDisplay("email", "", true);
        email = value;
        return true;
    }
};

const passwordChecker = (value) => {
    progressBar.classList = "";

    if (!value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/)) {
        errorDisplay(
            "password",
            "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial"
        );
        progressBar.classList.add("progressRed");
        password = null;
    } else if (value.length < 12) {
        progressBar.classList.add("progressBlue");
        errorDisplay("password", "", true);
        password = value;
    } else {
        progressBar.classList.add("progressGreen");
        errorDisplay("password", "", true);
        password = value;
    }
    if (confirmPass) confirmChecker();
};

const confirmChecker = (value) => {
    if (value !== password) {
        errorDisplay("confirm", "Les mots de passe ne correspondent pas");
        confirmPass = false;
    } else {
        errorDisplay("confirm", "", true);
        confirmPass = true;
    }
};

inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
        switch (e.target.id) {
            case "pseudo":
                pseudoChecker(e.target.value);
                break;
            case "email":
                emailChecker(e.target.value);
                break;
            case "password":
                passwordChecker(e.target.value);
                break;
            case "confirm":
                confirmChecker(e.target.value);
                break;
            default:
                null;
        }
    });
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (pseudo && email && password && confirmPass) {
        const data = {
            pseudo,
            email,
            password,
        };
        console.log(data);

        inputs.forEach((input) => (input.value = ""));
        progressBar.classList = "";

        pseudo = null;
        email = null;
        password = null;
        confirmPass = null;
        alert("Inscription validée !");
    } else {
        alert("Veuillez remplir correctement les champs");
    }
});
