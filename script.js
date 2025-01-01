"use strict";

/* Colori per il titolo, lo sfondo e i coriandoli */
const colors = ["#FF0000", "#0000FF", "#008000", "#FFA500", "#800080", "#00BFFF", "#FFFF00"]; // Rosso, Blu, Verde, Arancione, Viola, Azzurro scuretto, Giallo
const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const body = document.body;

/* Funzione per creare coriandoli */
function createCoriandoli() {
    const coriandolo = document.createElement("div");
    coriandolo.classList.add("coriandoli");
    coriandolo.style.left = Math.random() * 100 + "vw"; // Posizione casuale sull'asse x
    coriandolo.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // Colore casuale
    coriandolo.style.animationDuration = Math.random() * 3 + 2 + "s"; // Durata animazione casuale
    body.appendChild(coriandolo);

    /* Rimuove i coriandoli dopo che sono caduti */
    setTimeout(() => coriandolo.remove(), 5000);
}

/* Funzione per scegliere due colori diversi per h1 e background */
function getDifferentColors() {
    let h1Color, bgColor;
    
    do {
        bgColor = colors[Math.floor(Math.random() * colors.length)];
        h1Color = colors[Math.floor(Math.random() * colors.length)];
    } while (bgColor === h1Color); // Assicura che siano diversi
    
    return { h1Color, bgColor };
}

/* Aggiunge l'evento click al bottone */
button.addEventListener("click", () => {
    /* Colori diversi per h1 e background */
    const { h1Color, bgColor } = getDifferentColors();

    /* Cambia il colore di h1 */
    h1.style.color = h1Color;

    /* Cambia il colore del background */
    body.style.backgroundColor = bgColor;

    /* Genera coriandoli ogni 100ms per 5 secondi */
    const interval = setInterval(createCoriandoli, 100);

    /* Ferma i coriandoli dopo 5 secondi */
    setTimeout(() => clearInterval(interval), 5000);
});