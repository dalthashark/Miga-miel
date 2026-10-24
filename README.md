# 🥐 Miga & Miel - Pastelería Artesanal

Proyecto integrador grupal desarrollado para el **Laboratorio #5** del curso Full Stack Developer Web - Seminario en **SENATI**. Una solución web interactiva, dinámica y moderna construida con React y enfocada en la experiencia del usuario para una pastelería artesanal.

## 📝 1. Contexto y Problemática
En el sector gastronómico local, muchas pastelerías tradicionales carecen de una plataforma digital interactiva que permita lucir sus productos y captar pedidos especiales en tiempo real. **Miga & Miel** responde a esta necesidad con una web atractiva y funcional que conecta la marca con sus clientes.

## 🎨 2. Diseño UI/UX
El diseño visual y la experiencia de navegación interactiva fueron prototipados previamente para validar la usabilidad de la interfaz.
* **Pantallas principales (5):** Inicio, Nuestros Dulces (Catálogo), Por Encargo (Personalizados), Nuestra Historia y Contacto.
* **Línea Gráfica:** Paleta de colores cálidos y tipografía elegante adaptada a la estética de repostería artesanal.

---

## 🚀 3. Enlaces del Proyecto
* 🎨 **Prototipo en Figma:** [Miga & Miel](https://www.figma.com/design/ihXOr05xDBfs5O1dcYFIlP/Miga---Miel?node-id=0-1)
* 📦 **Repositorio en GitHub:** [https://github.com/dalthashark/Miga-miel](https://github.com/dalthashark/Miga-miel)
* 🌐 **Aplicación Desplegada (Vercel):** [https://miga-miel-amber.vercel.app](https://miga-miel-amber.vercel.app)

---

## 🛠️ 4. Tecnologías y Herramientas Utilizadas
* **Frontend:** React (Vite)
* **Diseño:** Figma
* **Control de Versiones:** Git & GitHub (Estrategia colaborativa de Ramas)

## 👥 5. Equipo de Desarrollo
El proyecto fue realizado de forma equitativa mediante control de versiones colaborativo:
* **Sebastián Mendoza** (Líder de Equipo)
* **Levano Diego**
* **Doriant Chanta**
* **Joel Santivañez**

---

## 🔀 6. Guía de trabajo en equipo con Git (paso a paso)

> Esta guía es para colaborar entre varios integrantes sin trabajar directamente sobre `main`.

### 6.1 Clonar el repositorio (solo la primera vez)

```bash
git clone https://github.com/dalthashark/Miga-miel.git
cd Miga-miel
```

### 6.2 Instalar dependencias y levantar el proyecto

```bash
npm install
npm run dev
```

### 6.3 Crear tu rama personal de trabajo

> Usa una convención clara, por ejemplo: `feature/tu-nombre` o `fix/tu-nombre`.

```bash
git checkout main
git pull origin main
git checkout -b feature/tu-nombre
git push -u origin feature/tu-nombre
```

### 6.4 Si tu rama ya existe, solo cámbiate a ella

```bash
git fetch origin
git checkout feature/tu-nombre
```

Verifica tu rama actual:

```bash
git branch
```

### 6.5 Actualizar tu rama con cambios recientes de `main`

> Haz esto antes de empezar a trabajar cada día.

```bash
git checkout main
git pull origin main
git checkout feature/tu-nombre
git merge main
```

### 6.6 Guardar y subir tus avances

```bash
git status
git add .
git commit -m "feat: descripción corta del avance"
git push origin feature/tu-nombre
```

Ejemplos de commit:

- `feat: agrega sección de productos`
- `fix: corrige estilos del header en móvil`
- `docs: actualiza instrucciones del README`

### 6.7 Crear Pull Request (PR) hacia `main`

1. Ve al repositorio en GitHub.
2. Abre **Pull requests** → **New pull request**.
3. Selecciona:
   - **base:** `main`
   - **compare:** `feature/tu-nombre`
4. Agrega título y descripción.
5. Crea el PR y solicita revisión.

### 6.8 Reglas recomendadas para el equipo

- ✅ No trabajar directo en `main`.
- ✅ Hacer commits pequeños y claros.
- ✅ Subir avances frecuentemente (`git push`).
- ✅ Actualizar con `main` antes de desarrollar.
- ❌ Evitar `git push --force` (salvo coordinación explícita del equipo).

### 6.9 Si aparecen conflictos al hacer merge

```bash
git status
```

1. Abre los archivos con conflicto.
2. Resuelve las secciones marcadas (`<<<<<<<`, `=======`, `>>>>>>>`).
3. Guarda cambios y ejecuta:

```bash
git add .
git commit -m "fix: resuelve conflictos de merge"
git push origin feature/tu-nombre
```
