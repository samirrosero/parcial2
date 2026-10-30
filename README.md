# Parcial 2 - Desarrollo de Aplicaciones Web

## Integrantes

- Sayi Lorena Ramirez Alvarez
- Samir Rosero

## Descripción del proyecto

Para este segundo parcial realizamos una página web de Disney utilizando HTML, CSS y JavaScript. La idea era que quedara lo más parecida posible (pixel perfect) a las imágenes de referencia del diseño, y que además se viera bien en computador, tablet y celular.

## Cómo ejecutarlo

No necesita instalar nada. Basta con abrir `index.html` en el navegador.

## Estructura del proyecto

```text
Parcial2/
├── css/
│   ├── styles.css          Estilos base (reset y fuente)
│   ├── navbar.css          Menú principal y menú hamburguesa
│   ├── hero.css            Banner de Snow White
│   ├── featured.css        Tarjetas amarillas de Snow White
│   ├── explore.css         Explore More Disney+
│   ├── coming-soon.css     Coming Soon to Disney+
│   ├── vacation.css        Vacation with Disney Parks
│   ├── get-more.css        Get More Disney Every Day
│   ├── disney-footer.css   Footer
│   ├── carousel.css        Flechas y puntos de los carruseles
│   └── scrollbar.css       Barra de desplazamiento personalizada
├── img/                    Imágenes del diseño
├── js/
│   ├── main.js             Menú hamburguesa
│   ├── carousel.js         Carruseles con flechas y puntos
│   └── scrollbar.js        Cambia el color de la barra según la sección
├── index.html
└── README.md
```

Cada sección tiene su propio archivo CSS para que los dos pudiéramos trabajar al mismo tiempo sin pisarnos los cambios.

## Secciones de la página

- **Navbar y Hero:** menú principal y banner de Snow White con sus botones.
- **Featured:** cuatro tarjetas amarillas con contenido destacado de Snow White.
- **Explore More Disney+:** tres tarjetas con más contenido de Disney+.
- **Coming Soon to Disney+:** cinco pósters de películas y series con sus títulos y fechas de estreno.
- **Vacation with Disney Parks:** dos imágenes de los parques con sus textos y botones.
- **Get More Disney Every Day:** promociones de la tarjeta Disney con sus precios y descripciones.
- **Footer:** logo de Disney, enlaces y derechos de autor.

## Responsive

El diseño de referencia solo venía para escritorio, así que la versión para tablet y celular la propusimos nosotros:

| Sección | Escritorio | Tablet | Celular |
|---|---|---|---|
| Navbar | Menú completo con buscador | Menú hamburguesa (1100px o menos) | Menú hamburguesa |
| Hero | Igual al diseño, escala con el ancho | Escala con el ancho | Imagen vertical con el texto abajo (768px o menos) |
| Featured | 4 columnas | 2 columnas | Carrusel (600px o menos) |
| Explore More Disney+ | 3 columnas | Carrusel (900px o menos) | Carrusel |
| Coming Soon | 5 columnas | Carrusel (900px o menos) | Carrusel |
| Vacation | 2 columnas | 2 columnas | Carrusel (768px o menos) |
| Get More Disney | Texto sobre la imagen | Imagen a la izquierda y texto a la derecha (1200px o menos) | Imagen arriba y texto abajo (768px o menos) |

### Carruseles

En pantallas chicas las tarjetas se pueden deslizar con el dedo y se acomodan solas (`scroll-snap` de CSS). Como a veces el usuario no sabe que tiene que deslizar, agregamos flechas `<` `>` y puntos que indican en qué tarjeta va. Todos los carruseles usan la misma función de `js/carousel.js`: basta con ponerle el atributo `data-carousel` al contenedor de las tarjetas.

### Barra de desplazamiento

La barra de desplazamiento no es la del navegador: cambia de color según la sección que se está viendo (negro y rojo en el hero, morado y amarillo en las tarjetas, verde azulado en Explore, etc.). Los colores de cada sección están en `js/scrollbar.js`. Se nota en computador; en celular el sistema usa su propia barra.

## Cómo trabajamos

Para realizar el proyecto nos dividimos las secciones. Samir trabajó en el navbar, Hero, Featured, Explore More Disney+, los carruseles, el responsive de todas las secciones y la barra de desplazamiento. Sayi trabajó en Coming Soon, Vacation with Disney Parks, Get More Disney Every Day y el footer.

Utilizamos Git y GitHub para llevar un orden con los cambios. Cada uno trabajó en su propia rama (`feat/samir-seccionhero`, `feat/samir-seccionExplore`, `feature/secciones-inferiores`, `feat/samir-carrusel-inferiores`) y fuimos guardando los avances con commits. Cada rama se unió a `main` con un pull request.

## Dificultades

Una de las cosas que más nos costó fue hacer que la página quedara parecida a las imágenes del profesor. Algunas imágenes no tenían el tamaño correcto, los espacios eran diferentes y ciertos textos quedaban en otros renglones. Fuimos comparando la página con las imágenes y corrigiendo esos detalles.

- **La fuente:** el diseño usa una fuente tipo Avenir que no teníamos, así que el navegador usa Arial. Calculamos los tamaños de letra para que los textos ocuparan el mismo ancho que en el diseño.
- **La imagen del hero:** traía un borde negro arriba y a la derecha que tuvimos que recortar con `background-size` y `background-position`.
- **El hero en pantallas pequeñas:** al principio tenía medidas fijas y en pantallas más angostas la imagen se cortaba. Lo solucionamos con unidades `cqw`, que escalan según el ancho de la sección.
- **El texto de Get More:** en pantallas chicas el texto no cabía encima de la imagen y quedaba oculto. Lo cambiamos para que la imagen y el texto queden lado a lado o uno debajo del otro.
- **Los saltos de línea `<br>`:** los usamos para que los textos cortaran igual que en el diseño, pero en celular cortaban raro. Al ocultarlos se pegaban palabras ("EVERYDAY"), así que agregamos un espacio antes de cada `<br>`.
- **Conflictos en Git:** tuvimos un conflicto al unir los cambios porque los dos habíamos trabajado en `index.html`. Revisamos el archivo y conservamos las secciones de ambos. Por eso decidimos que cada sección tuviera su propio archivo CSS y JS.

## Aprendizajes

Con este trabajo practicamos HTML y CSS, especialmente cómo organizar las secciones, trabajar con tarjetas, ajustar imágenes y manejar los espacios.

También aprendimos:

- A usar `grid` y `flex` para las columnas de tarjetas.
- A hacer el diseño responsive con `@media`, `aspect-ratio`, `max()` y unidades `cqw`.
- A hacer carruseles con `scroll-snap` y un poco de JavaScript para las flechas y los puntos.
- A personalizar la barra de desplazamiento con `::-webkit-scrollbar` y variables CSS.
- A usar Git y GitHub: trabajar con ramas, guardar avances con commits, hacer pull requests y resolver conflictos cuando se trabaja en equipo.

## Uso de inteligencia artificial

Durante el proyecto utilizamos inteligencia artificial (Gemini IA dentro de VS Code) como apoyo en el desarrollo.

La usamos para:

- Medir el diseño de referencia (posiciones, tamaños y colores) y maquetar las secciones a partir de esas medidas.
- Generar parte del código HTML, CSS y JavaScript, como el navbar, el hero, las tarjetas, los carruseles y la barra de desplazamiento.
- Proponer y aplicar el responsive de las secciones.
- Entender comandos de Git y sugerir mensajes para los commits.

Nosotros decidíamos qué hacer en cada paso, revisábamos los resultados en el navegador y pedíamos correcciones cuando algo no quedaba bien. Por ejemplo: que el hero mostrara la imagen completa, que el carrusel tuviera flechas porque el usuario no sabía que tenía que deslizar, y que el JavaScript de los carruseles estuviera en su propio archivo para evitar conflictos.

### Algunas consultas realizadas

- Cómo ajustar el tamaño de un título sin cambiar los demás estilos.
- Cómo organizar los textos para que quedaran como en la referencia.
- Cómo hacer que el hero mostrara la imagen completa en pantallas más pequeñas.
- Cómo convertir las tarjetas en un carrusel en celular y agregarle flechas.
- Cómo arreglar la sección Get More, donde el texto no se veía en pantallas chicas.
- Cómo trabajar con ramas de Git sin afectar los archivos del compañero.
- Cómo revisar los cambios antes de subirlos a GitHub.
- Cómo agregar un color diferente al scrollbar de acuerdo a la sección.
