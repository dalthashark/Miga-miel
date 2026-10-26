# Exposición del proyecto web: Miga & Miel

## 1. Introducción del proyecto
Hoy presento **Miga & Miel**, una web creada para una pastelería artesanal que recién iniciaba y no tenía presencia digital.  
El objetivo principal fue construir una página que transmitiera cercanía, calidez y detalle, reflejando la esencia del negocio.

Desde el diseño visual, trabajé una paleta de colores inspirada en la identidad de la marca:
- **Crema** como base limpia y suave.
- **Terracota** como tono principal para destacar elementos clave.
- **Verde salvia** para equilibrio visual y sensación natural.

---

## 2. Diseño del inicio (Home)
La sección de inicio fue pensada para generar una buena primera impresión y comunicar rápidamente de qué trata la marca.

Incluye:
- Un **hero principal** con mensaje emocional + imagen central.
- Botones de acción claros (por ejemplo, “Descubre nuestros dulces”).
- Sección de **productos destacados** que abre un modal con más información.

La idea fue combinar estética con funcionalidad para que la navegación sea atractiva y fácil.

---

## 3. Animaciones al cargar
Para mejorar la experiencia visual, implementé animaciones suaves usando **CSS + JavaScript**.

### ¿Cómo lo hice?
- Utilicé `IntersectionObserver` para detectar cuándo cada bloque entra en pantalla.
- Al detectarlo, se activa una transición con `opacity` y `transform`, generando una entrada progresiva.
- También consideré accesibilidad con `prefers-reduced-motion`, para reducir animaciones si el usuario lo prefiere.

Esto hace que la página se vea dinámica, sin afectar la comodidad de uso.

---

## 4. Mensajes que se desplazan (testimonios)
La sección de testimonios rota automáticamente para mostrar opiniones de clientes y dar vida a la página.

### Implementación:
- Con `setInterval` se cambia el testimonio cada 5 segundos.
- Hay navegación manual con flechas y puntos.
- La rotación se pausa con hover o foco, para facilitar la lectura.

Este bloque aporta dinamismo y mejora la interacción.

---

## 5. Navbar (barra de navegación)
El navbar fue trabajado para ser visualmente limpio, pero también inteligente.

### Funcionalidades:
- Cambia estilo al hacer scroll (agrega sombra para mejor legibilidad).
- Usa `NavLink` para indicar sección activa.
- Tiene una línea indicadora animada que se desplaza según la ruta activa, calculada con `getBoundingClientRect`.
- Incluye feedback de clic con sonido para reforzar la interacción.

El resultado es una navegación clara y moderna.

---

## 6. Footer (pie de página)
El footer se estructuró en tres áreas:
1. Identidad de marca y lema.
2. Enlaces rápidos internos.
3. Redes sociales con íconos SVG generados desde un arreglo.

Esto facilita mantenimiento y mantiene coherencia visual hasta el final de la página.

---

## 7. Cierre
Este proyecto no fue solo “hacer una web bonita”, sino transformar la identidad de una pastelería en una experiencia digital coherente:  
**artesanal, cálida, funcional e interactiva**.
