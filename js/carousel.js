// Carruseles seccion de inicio
const flecha = (direccion) => `
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="${direccion === "prev" ? "15 4 7 12 15 20" : "9 4 17 12 9 20"}"></polyline>
  </svg>`;

const crearCarrusel = (track) => {
  const items = [...track.children];
  const controles = track.parentElement.querySelector(".carousel__controls");

  const prev = document.createElement("button");
  prev.type = "button";
  prev.className = "carousel__arrow";
  prev.setAttribute("aria-label", "Tarjeta anterior");
  prev.innerHTML = flecha("prev");

  const next = document.createElement("button");
  next.type = "button";
  next.className = "carousel__arrow";
  next.setAttribute("aria-label", "Tarjeta siguiente");
  next.innerHTML = flecha("next");

  const dots = document.createElement("div");
  dots.className = "carousel__dots";

  const irA = (i) => {
    track.scrollTo({ left: items[i].offsetLeft - items[0].offsetLeft, behavior: "smooth" });
  };

  items.forEach((item, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel__dot";
    dot.setAttribute("aria-label", `Ir a la tarjeta ${i + 1}`);
    dot.addEventListener("click", () => irA(i));
    dots.appendChild(dot);
  });

  controles.append(prev, dots, next);

  // Indice de la tarjeta que esta mas a la vista
  const indiceActual = () => {
    const paso = items[1].offsetLeft - items[0].offsetLeft;
    const maximo = track.scrollWidth - track.clientWidth;
    // Al llegar al final se marca la ultima tarjeta aunque no quede alineada
    return track.scrollLeft >= maximo - 2 ? items.length - 1 : Math.round(track.scrollLeft / paso);
  };

  const actualizar = () => {
    const activo = indiceActual();
    dots.querySelectorAll(".carousel__dot").forEach((dot, i) => {
      dot.classList.toggle("carousel__dot--active", i === activo);
    });
    prev.disabled = activo === 0;
    next.disabled = activo === items.length - 1;
  };

  prev.addEventListener("click", () => irA(Math.max(indiceActual() - 1, 0)));
  next.addEventListener("click", () => irA(Math.min(indiceActual() + 1, items.length - 1)));

  track.addEventListener("scroll", actualizar);
  track.addEventListener("scrollend", actualizar);
  window.addEventListener("resize", actualizar);
  actualizar();
};

document.querySelectorAll("[data-carousel]").forEach(crearCarrusel);
