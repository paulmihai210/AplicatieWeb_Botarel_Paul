// script.js

// Identifică secțiunea de conținut de monitorizare
const monitorizareSection = document.getElementById('monitorizare');
const slideshowContainer = document.getElementById('slideshow-container');
const imaginiMonitorizare = document.querySelectorAll('.resource-image');

let slideshowInterval = null; // Variabila pentru a stoca ID-ul intervalului de timp
let indexCurent = 0;
const timpTranzitie = 3000; // 3 secunde (3000 ms)

/**
 * Pornește slide-show-ul.
 */
function pornesteSlideShow() {
    // Dacă slide-show-ul rulează deja, nu facem nimic
    if (slideshowInterval !== null) {
        return;
    }

    // Funcție care schimbă imaginea activă
    function arataSlide() {
        // Ascunde imaginea curentă
        imaginiMonitorizare.forEach(img => {
            img.classList.remove('active');
        });

        // Calculează indexul următoarei imagini
        indexCurent = (indexCurent + 1) % imaginiMonitorizare.length;

        // Afișează următoarea imagine
        imaginiMonitorizare[indexCurent].classList.add('active');
    }

    // Asigură-te că prima imagine este vizibilă la pornire
    imaginiMonitorizare[indexCurent].classList.add('active');

    // Setează intervalul de timp de 3 secunde pentru schimbarea imaginilor
    slideshowInterval = setInterval(arataSlide, timpTranzitie);
    console.log("Slide-show pornit. Tranziție: 3 secunde.");
}

/**
 * Opriște slide-show-ul. (Opțional, dar util pentru control)
 */
function opresteSlideShow() {
    if (slideshowInterval !== null) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
        console.log("Slide-show oprit.");
    }
}

// Adaugă ascultătorul de eveniment pentru "dublu click" (dblclick)
monitorizareSection.addEventListener('dblclick', function() {
    console.log("Dublu click detectat pe secțiunea Monitorizare.");
    
    // Verifică dacă slide-show-ul rulează. Dacă nu, îl pornește.
    if (slideshowInterval === null) {
        pornesteSlideShow();
    } else {
        // Opțional: La al doilea dublu click, îl poți opri.
        // Opresc slide-show-ul doar dacă secțiunea primește focus, de exemplu.
        // Pentru cerință, este suficient să pornim la primul dblclick.
        // opresteSlideShow(); 
    }
});

// Inițial, asigură-te că doar prima imagine este vizibilă
window.onload = function() {
    if (imaginiMonitorizare.length > 0) {
        imaginiMonitorizare[0].classList.add('active');
    }
}