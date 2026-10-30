// Scrollbar que cambia de color segun la seccion - Samir Rosero

// Colores de cada seccion: track = fondo de la barra, thumb = la parte que se mueve
const coloresScroll = [
  { selector: ".hero", track: "#000000", thumb: "#da5047" },
  { selector: ".featured", track: "#655fb1", thumb: "#e8c75c" },
  { selector: ".explore", track: "#054553", thumb: "#ffffff" },
  { selector: ".coming-soon", track: "#f4f4f4", thumb: "#333333" },
  { selector: ".vacation", track: "#f4f4f4", thumb: "#333333" },
  { selector: ".get-more", track: "#e4faf7", thumb: "#9653ae" },
  { selector: ".disney-footer", track: "#ffffff", thumb: "#2c5e9d" },
];

const seccionesScroll = coloresScroll
  .map((color) => ({ ...color, elemento: document.querySelector(color.selector) }))
  .filter((seccion) => seccion.elemento);

let seccionActual = null;

const actualizarScroll = () => {
  // Seccion que pasa por la mitad de la pantalla
  const mitad = window.innerHeight / 2;
  let actual = seccionesScroll[0];
  seccionesScroll.forEach((seccion) => {
    if (seccion.elemento.getBoundingClientRect().top <= mitad) actual = seccion;
  });

  // Al llegar al final de la pagina se usa la ultima seccion (el footer es bajito)
  const alFinal = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
  if (alFinal) actual = seccionesScroll[seccionesScroll.length - 1];

  if (actual === seccionActual) return;
  seccionActual = actual;
  document.documentElement.style.setProperty("--scroll-track", actual.track);
  document.documentElement.style.setProperty("--scroll-thumb", actual.thumb);
};

window.addEventListener("scroll", actualizarScroll, { passive: true });
window.addEventListener("resize", actualizarScroll);
actualizarScroll();
