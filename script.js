const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Menü schließen" : "Menü öffnen"
    );

});

// Menü nach Klick auf einen Link schließen

navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Menü öffnen");
    });

});