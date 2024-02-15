// Créer un événement au scroll

// Réduire la navbar quand on descend vers le bas, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

let lastScroll = 0;
let playOnce = true;

window.addEventListener("scroll", () => {
    if (window.scrollY < 50) {
        navbar.style.height = "90px";
    } else {
        navbar.style.height = "45px";
    }
    lastScroll = window.scrollY;

    // Faire apparaitre l'image de la partie improvise
    let scrollValue =
        (window.scrollY + window.innerHeight) / document.body.offsetHeight;

    if (scrollValue > 0.45) {
        imgImprovise.style.opacity = 1;
        imgImprovise.style.transform = "translateY(0)";
    }

    // Faire apparaitre la popup quand on est en bas du site
    if (scrollValue > 0.85 && playOnce) {
        popup.style.opacity = 1;
        popup.style.transform = "translateY(0)";
        playOnce = false;
    }
});

closeBtn.addEventListener("click", () => {
    popup.style.opacity = 0;
    popup.style.transform = "translateX(500px)";
});
