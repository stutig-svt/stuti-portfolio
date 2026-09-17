// Text that will appear in the typing effect
const texts = [
    "Computer Science Student",
    "Tech Enthusiast",
    "Aspiring Developer"
];

const typingText = document.getElementById("typing-text");

let textIndex = 0;
let characterIndex = 0;

function typeText() {

    if (characterIndex < texts[textIndex].length) {

        typingText.textContent += texts[textIndex].charAt(characterIndex);

        characterIndex++;

        setTimeout(typeText, 80);

    } else {

        setTimeout(deleteText, 1500);

    }
}

function deleteText() {

    if (characterIndex > 0) {

        typingText.textContent =
            texts[textIndex].substring(0, characterIndex - 1);

        characterIndex--;

        setTimeout(deleteText, 40);

    } else {

        textIndex++;

        if (textIndex >= texts.length) {
            textIndex = 0;
        }

        setTimeout(typeText, 300);

    }
}

typeText();


// Mobile navigation
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});
// Scroll reveal animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.15
});

sections.forEach(function(section) {
    observer.observe(section);
});