function showWelcomePopup() {
    const welcomePopup = document.querySelector(".welcome-popup");
    welcomePopup.style.display = "flex";
}

function hideWelcomePopup() {
    const welcomePopup = document.querySelector(".welcome-popup");
    welcomePopup.style.display = "none";
}

window.addEventListener("DOMContentLoaded", () => {
    showWelcomePopup();

    const welcomePopup = document.querySelector(".welcome-popup");
    welcomePopup.addEventListener("click", (event) => {
        if (event.target === welcomePopup) {
            hideWelcomePopup();
        }
    });
});