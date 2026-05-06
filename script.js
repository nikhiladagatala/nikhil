// Typing Effect
const texts = ["Web Developer", "Programmer", "Learner"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) { count = 0; }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing-text").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 150);
    }
}());

// Theme Toggle
const btn = document.getElementById("theme-toggle");
btn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    document.getElementById("sun-icon").classList.toggle("hidden", !isLight);
    document.getElementById("moon-icon").classList.toggle("hidden", isLight);
});

// Modal Popup for Certificates
function openModal(src, title) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = src;
    captionText.innerHTML = title;
}

function closeModal() {
    document.getElementById("certModal").style.display = "none";
}

// Simple Chatbot Toggle
function toggleChat() {
    const chat = document.getElementById("chat-window");
    chat.style.display = (chat.style.display === "block") ? "none" : "block";
}
