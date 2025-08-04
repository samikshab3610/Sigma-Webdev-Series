// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Animate input box when user focuses on it
    const input = document.querySelector('input[type="text"]');
    input.addEventListener("focus", () => {
        input.style.boxShadow = "0 0 20px rgba(255,255,255,0.6)";
        input.style.transition = "0.3s";
    });

    input.addEventListener("blur", () => {
        input.style.boxShadow = "0 0 10px rgba(255,255,255,0.3)";
    });

    // Typing animation for heading (just for style)
    const heading = document.querySelector("main h1");
    const fullText = `"India's #1"\n"food delivery app"`;
    heading.textContent = "";
    let i = 0;

    function typeText() {
        if (i < fullText.length) {
            heading.textContent += fullText[i];
            i++;
            setTimeout(typeText, 50);
        }
    }

    typeText();
});
