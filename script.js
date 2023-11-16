const dynamicText = document.querySelector("h1 span.dynamic-text");
const words = ["Leuk", "Lekker","In Januari 2023","Goede Prijzen"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;

    dynamicText.className = '';
    dynamicText.classList.add(`word${wordIndex + 1}`);
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;

      
        setTimeout(() => {
            typeEffect();
        }, 1200);
    }
}

typeEffect();
