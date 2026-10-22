
// Menu de navigation pour les téléphones
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fermer le menu" : "Ouvrir le menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Fermer le menu après un clic sur un lien
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Ouvrir le menu");
        menuToggle.textContent = "☰";
    });
});

// Afficher automatiquement l'année actuelle
document.getElementById("currentYear").textContent =
    new Date().getFullYear();

// Copier l'adresse e-mail
const copyEmailButton = document.getElementById("copyEmail");
const copyMessage = document.getElementById("copyMessage");

copyEmailButton.addEventListener("click", async () => {
    const email = copyEmailButton.dataset.email;

    try {
        await navigator.clipboard.writeText(email);
        copyMessage.textContent = "Adresse e-mail copiée !";
    } catch (error) {
        copyMessage.textContent =
            "Copie automatique indisponible. Adresse : " + email;
    }
});
