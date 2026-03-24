// Button click alert
document.getElementById("exploreBtn").addEventListener("click", function () {
    alert("Welcome to TechNova! 🚀");
});

// Smooth scrolling
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Scroll animation
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.8;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

// Typing effect
const text = "Innovating the Future";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();
