// Parcial 2 - Sayi Lorena Ramirez Alvarez & Samir Rosero

// Menu hamburguesa del navbar (pantallas chicas)
const navbar = document.querySelector(".navbar");
const navbarToggle = document.querySelector(".navbar__toggle");

navbarToggle.addEventListener("click", () => {
  const abierto = navbar.classList.toggle("navbar--open");
  navbarToggle.setAttribute("aria-expanded", abierto);
  navbarToggle.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
});
