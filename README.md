# XX Concurso de Proyectos de Innovación - ISC 2026

## 🌐 Enlace del Proyecto Desplegado
- **Sitio Web en Producción:** [https://McflyDinero.github.io/Concurso_Proyectos_ISC/](https://McflyDinero.github.io/Concurso_Proyectos_ISC/)

---

## 🚀 Mejoras Implementadas por Ejes Técnicos

### 1. Estructura y Semántica Web (HTML5)
- Reemplazo de contenedores genéricos (`div`) por etiquetas semánticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` y `<footer>`.
- Metadatos SEO completos (`title`, `description`, `keywords`, `author`) y tarjetas Open Graph / Twitter Cards para previsualización social.
- Accesibilidad (WCAG AA): textos alternativos (`alt`), atributos `aria-*` en navegación/botones y jerarquía lógica de encabezados (`h1`-`h6`).

### 2. Diseño, Maquetación y UX (CSS3)
- Enfoque responsivo **Mobile-First** con Flexbox y CSS Grid.
- Sistema de variables CSS con la identidad institucional TecMM (`--primary`, `--accent`, `--secondary`).
- Microinteracciones en botones y tarjetas.
- **Selector interactivo de Modo Claro / Modo Oscuro** con persistencia en `localStorage`.

### 3. Dinamismo e Interactividad (JavaScript Moderno ES6+)
- **Contador regresivo en tiempo real** hacia la fecha inaugural del evento.
- **Formulario interactivo** con validación reactiva en tiempo real para correos institucionales (`*.tecmm.edu.mx` / `*.edu.mx`), alertas de error inmediatas y confirmación sin recarga.
- **Catálogo de proyectos** con filtro dinámico por categoría mediante manipulación del DOM.

### 4. Rendimiento y Buenas Prácticas
- Carga diferida (`loading="lazy"`) en imágenes e `iframe` de mapa.
- Arquitectura limpia y modular separando `index.html`, `styles.css` y `main.js`.
- **Auditoría Google Lighthouse:**
  - **Performance:** 99
  - **Accessibility:** 96
  - **Best Practices:** 96
  - **SEO:** 100

---

## 🛠️ Tecnologías Utilizadas
- HTML5 Semántico
- CSS3 Nativo (Variables & Responsive Grid/Flexbox)
- Bootstrap 5 & FontAwesome 6
- JavaScript Moderno (ES6+)
- Git & GitHub Pages