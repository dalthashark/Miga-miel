import { useEffect, useState } from 'react'
import styles from './NuestrosDulces.module.css'
import chocolate from '../../assets/pasteles/pastel-chocolate.jpg'
import frutosRojos from '../../assets/pasteles/tarta-frutos-rojos.jpg'
import tartaletas from '../../assets/pasteles/tartaletas.jpg'
import galletas from '../../assets/pasteles/galletas.jpg'
import croissants from '../../assets/pasteles/croissants.jpg'
import personalizada from '../../assets/pasteles/torta-personalizada.jpg'
import tartaQueso from '../../assets/pasteles/tarta-queso.jpg'
import pastelZanahoria from '../../assets/pasteles/pastel-zanahoria.jpg'
import brownies from '../../assets/pasteles/brownies.jpg'
import alfajores from '../../assets/pasteles/alfajores.jpg'
import rollitosCanela from '../../assets/pasteles/rollitos-canela.jpg'
import bizcochoNaranja from '../../assets/pasteles/bizcocho-naranja.jpg'

const productos = [
  { nombre: 'Tarta de queso dorada', categoria: 'Tartas y pasteles', imagen: tartaQueso, etiqueta: 'Suave y cremosa', descripcion: 'Corazón cremoso, superficie dorada y una base delicadamente crujiente.', detalle: 'Una tarta de queso horneada de textura sedosa y sabor suave. Para disfrutar despacio, cucharada a cucharada.' },
  { nombre: 'Zanahoria con cariño', categoria: 'Tartas y pasteles', imagen: pastelZanahoria, etiqueta: 'Sabor de casa', descripcion: 'Bizcocho de zanahoria, crema de queso y un toque de nueces.', detalle: 'Dos capas de bizcocho húmedo con zanahoria y nueces, unidas por una suave crema de queso. Una combinación reconfortante para la sobremesa.' },
  { nombre: 'Brownies de chocolate', categoria: 'Pequeños antojos', imagen: brownies, etiqueta: 'Intensamente chocolate', descripcion: 'Una fina corteza crujiente y un interior húmedo de cacao.', detalle: 'Pequeños cuadrados de chocolate con una textura densa y tierna. Ideales para compartir o acompañar con una taza de café.' },
  { nombre: 'Alfajores de dulce de leche', categoria: 'Pequeños antojos', imagen: alfajores, etiqueta: 'Un dulce abrazo', descripcion: 'Galletas suaves, dulce de leche y un delicado borde de coco.', detalle: 'Dos galletas que se deshacen en la boca, rellenas de dulce de leche y terminadas con coco rallado y azúcar glas.' },
  { nombre: 'Rollitos de canela', categoria: 'Bollería', imagen: rollitosCanela, etiqueta: 'Espirales de dulzura', descripcion: 'Masa esponjosa, canela y un ligero hilo de glaseado.', detalle: 'Rollitos dorados con un corazón de canela y una cobertura suave. Un pequeño capricho para desayunos y meriendas.' },
  { nombre: 'Bizcocho de naranja', categoria: 'Tartas y pasteles', imagen: bizcochoNaranja, etiqueta: 'Un rayito de sol', descripcion: 'Miga tierna, notas cítricas y una fina capa de glaseado.', detalle: 'Un bizcocho de naranja de corteza dorada y miga esponjosa, terminado con un glaseado ligero. Para cortar una rebanada y alargar la tarde.' },
  { nombre: 'Tarta de frutos rojos', categoria: 'Tartas y pasteles', imagen: frutosRojos, etiqueta: 'La favorita', descripcion: 'Vainilla suave, nata y frutos rojos. Un clásico para compartir.', detalle: 'Un bizcocho tierno con un toque fresco y delicado, perfecto para acompañar una celebración o una sobremesa.' },
  { nombre: 'Chocolate sin prisa', categoria: 'Tartas y pasteles', imagen: chocolate, etiqueta: 'Para chocolateros', descripcion: 'Cacao intenso y ganache sedosa, en cada bocado.', detalle: 'Un pastel de chocolate de sabor profundo y textura suave. Para quienes siempre eligen un poquito más de cacao.' },
  { nombre: 'Limón de la tarde', categoria: 'Pequeños antojos', imagen: tartaletas, etiqueta: 'Un toque cítrico', descripcion: 'Tartaletas de limón con un delicado merengue tostado.', detalle: 'Una base crujiente, crema de limón y merengue ligero: el equilibrio entre lo dulce y lo fresco.' },
  { nombre: 'Galletas para compartir', categoria: 'Pequeños antojos', imagen: galletas, etiqueta: 'Una dulce pausa', descripcion: 'Pequeños bocados para acompañar tu café favorito.', detalle: 'Para poner en el centro de la mesa, regalar un detalle o disfrutar de una merienda sin prisa.' },
  { nombre: 'Croissants dorados', categoria: 'Bollería', imagen: croissants, etiqueta: 'Capa a capa', descripcion: 'Un exterior dorado y un interior lleno de suavidad.', detalle: 'El compañero de los desayunos tranquilos. Disfrútalo con café, té o tu bebida favorita.' },
  { nombre: 'Un pastel muy tuyo', categoria: 'Personalizados', imagen: personalizada, etiqueta: 'Para celebrar', descripcion: 'Una inspiración para ese momento que merece algo especial.', detalle: 'El diseño de la fotografía es una referencia. Los sabores, la decoración y el tamaño se definen según cada encargo.' },
]

const recetas = {
  'Tarta de queso dorada': {
    tiempo: '1 h 10 min',
    porciones: '8 porciones',
    ingredientes: ['600 g de queso crema', '200 g de azúcar', '4 huevos', '200 ml de nata para montar', '1 cucharadita de extracto de vainilla', '30 g de harina', '150 g de galletas trituradas', '80 g de mantequilla derretida'],
  },
  'Zanahoria con cariño': {
    tiempo: '1 h 20 min',
    porciones: '10 porciones',
    ingredientes: ['250 g de zanahoria rallada', '220 g de harina de trigo', '200 g de azúcar moreno', '3 huevos', '150 ml de aceite de girasol', '80 g de nueces picadas', '1 cucharadita de canela', '2 cucharaditas de polvo de hornear', '250 g de queso crema', '100 g de azúcar glas'],
  },
  'Brownies de chocolate': {
    tiempo: '45 min',
    porciones: '12 cuadrados',
    ingredientes: ['200 g de chocolate negro', '150 g de mantequilla', '180 g de azúcar', '3 huevos', '90 g de harina de trigo', '30 g de cacao en polvo', '1 pizca de sal', '80 g de nueces (opcional)'],
  },
  'Alfajores de dulce de leche': {
    tiempo: '1 h',
    porciones: '16 alfajores',
    ingredientes: ['200 g de maicena', '100 g de harina de trigo', '125 g de mantequilla', '100 g de azúcar glas', '3 yemas de huevo', '1 cucharadita de polvo de hornear', 'Ralladura de limón', '300 g de dulce de leche', 'Coco rallado para decorar'],
  },
  'Rollitos de canela': {
    tiempo: '2 h 30 min',
    porciones: '12 rollitos',
    ingredientes: ['500 g de harina de trigo', '250 ml de leche tibia', '7 g de levadura seca', '70 g de azúcar', '60 g de mantequilla', '1 huevo', '3 cucharaditas de canela', '100 g de azúcar moreno', '100 g de azúcar glas para el glaseado'],
  },
  'Bizcocho de naranja': {
    tiempo: '1 h',
    porciones: '8 porciones',
    ingredientes: ['3 huevos', '200 g de azúcar', '200 g de harina de trigo', '120 ml de aceite de oliva suave', 'Zumo y ralladura de 2 naranjas', '2 cucharaditas de polvo de hornear', '100 g de azúcar glas para el glaseado'],
  },
  'Tarta de frutos rojos': {
    tiempo: '1 h 30 min',
    porciones: '8 porciones',
    ingredientes: ['200 g de harina de trigo', '180 g de azúcar', '4 huevos', '120 ml de leche', '100 g de mantequilla derretida', '1 cucharadita de extracto de vainilla', '2 cucharaditas de polvo de hornear', '300 ml de nata para montar', '250 g de frutos rojos (fresas, frambuesas, arándanos)'],
  },
  'Chocolate sin prisa': {
    tiempo: '1 h 15 min',
    porciones: '10 porciones',
    ingredientes: ['220 g de harina de trigo', '70 g de cacao en polvo sin azúcar', '250 g de azúcar', '3 huevos', '200 ml de leche', '120 ml de aceite de girasol', '1 cucharadita de bicarbonato', '200 g de chocolate negro', '200 ml de nata para la ganache'],
  },
  'Limón de la tarde': {
    tiempo: '1 h 20 min',
    porciones: '12 tartaletas',
    ingredientes: ['250 g de harina de trigo', '125 g de mantequilla fría', '70 g de azúcar glas', '1 huevo', '3 limones (zumo y ralladura)', '4 yemas de huevo', '150 g de azúcar', '3 claras de huevo', '120 g de azúcar para el merengue'],
  },
  'Galletas para compartir': {
    tiempo: '40 min',
    porciones: '24 galletas',
    ingredientes: ['250 g de harina de trigo', '125 g de mantequilla', '100 g de azúcar', '1 huevo', '1 cucharadita de extracto de vainilla', '1/2 cucharadita de polvo de hornear', '100 g de chispas de chocolate'],
  },
  'Croissants dorados': {
    tiempo: '4 h (con reposos)',
    porciones: '8 croissants',
    ingredientes: ['500 g de harina de fuerza', '10 g de sal', '60 g de azúcar', '10 g de levadura seca', '150 ml de leche', '100 ml de agua', '250 g de mantequilla para laminar', '1 huevo para pintar'],
  },
  'Un pastel muy tuyo': {
    tiempo: 'Según el diseño',
    porciones: 'Según el tamaño',
    ingredientes: ['Bizcocho de vainilla, chocolate o limón, a tu elección', 'Relleno de nata, crema o ganache', 'Cobertura de buttercream o fondant', 'Decoración con fruta, flores comestibles o detalles a tu gusto'],
  },
}

const categorias = ['Todos', 'Tartas y pasteles', 'Pequeños antojos', 'Bollería', 'Personalizados']

export default function NuestrosDulces() {
  const [categoria, setCategoria] = useState('Todos')
  const [seleccionado, setSeleccionado] = useState(null)
  const visibles = productos.filter((producto) => categoria === 'Todos' || producto.categoria === categoria)
  const receta = seleccionado ? recetas[seleccionado.nombre] : null

  useEffect(() => {
    const elementos = document.querySelectorAll('[data-revelar]')
    const reducirMovimiento = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reducirMovimiento || !('IntersectionObserver' in window)) {
      elementos.forEach((elemento) => elemento.setAttribute('data-visible', ''))
      return undefined
    }
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.setAttribute('data-visible', '')
            observador.unobserve(entrada.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    elementos.forEach((elemento) => observador.observe(elemento))
    return () => observador.disconnect()
  }, [categoria])

  useEffect(() => {
    if (!seleccionado) return undefined
    const cerrarConEscape = (evento) => {
      if (evento.key === 'Escape') setSeleccionado(null)
    }
    const overflowAnterior = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', cerrarConEscape)
    return () => {
      document.body.style.overflow = overflowAnterior
      window.removeEventListener('keydown', cerrarConEscape)
    }
  }, [seleccionado])

  return (
    <div className={styles.catalogo}>
      <header className={styles.intro} data-revelar="arriba">
        <p className={styles.etiqueta}>El pequeño catálogo de miga &amp; miel</p>
        <h1>Nuestros dulces,<br /><em>tus pequeños momentos.</em></h1>
        <p className={styles.descripcion}>Tartas para celebrar, antojos para la tarde y ese dulce al que siempre vuelves. Descubre tu próximo favorito.</p>
        <span className={styles.sello}><span aria-hidden="true">♡</span> Lo sencillo, hecho con mimo</span>
      </header>

      <section className={styles.seccion} aria-labelledby="catalogo-titulo">
        <div className={styles.encabezado} data-revelar="arriba">
          <div><p className={styles.etiqueta}>Un dulce para cada ocasión</p><h2 id="catalogo-titulo">Elige lo que te hace sonreír.</h2></div>
          <p className={styles.contador} role="status">{visibles.length} dulces por descubrir</p>
        </div>
        <div className={styles.filtros} role="group" aria-label="Filtrar dulces por categoría" data-revelar="arriba">
          {categorias.map((opcion) => (
            <button key={opcion} type="button" aria-pressed={categoria === opcion} onClick={() => setCategoria(opcion)}>{opcion}</button>
          ))}
        </div>
        <div className={styles.productos}>
          {visibles.map((producto, index) => (
            <article className={styles.producto} key={producto.nombre} data-revelar="arriba" style={{ '--retraso': `${index * 90}ms` }}>
              <div className={styles.foto}>
                <button type="button" className={styles.abrirReceta} onClick={() => setSeleccionado(producto)} aria-haspopup="dialog" aria-label={`Ver receta: ${producto.nombre}`}>
                  <img src={producto.imagen} alt={producto.nombre} loading="lazy" width="600" height="480" />
                </button>
                <span className={styles.distintivo}>{producto.etiqueta}</span>
              </div>
              <div className={styles.contenido}>
                <p className={styles.categoria}>{producto.categoria}</p>
                <h3>{producto.nombre}</h3>
                <p className={styles.descripcionProducto}>{producto.descripcion}</p>
                <details className={styles.detalle}>
                  <summary>Conoce este dulce <span aria-hidden="true">+</span></summary>
                  <p>{producto.detalle}</p>
                </details>
              </div>
            </article>
          ))}
        </div>
      </section>

      {seleccionado && receta && (
        <div className={styles.fondoModal} onClick={() => setSeleccionado(null)}>
          <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="receta-titulo" onClick={(evento) => evento.stopPropagation()}>
            <button type="button" className={styles.cerrar} onClick={() => setSeleccionado(null)} aria-label="Cerrar receta" autoFocus>×</button>
            <img className={styles.modalImagen} src={seleccionado.imagen} alt={seleccionado.nombre} />
            <div className={styles.modalCuerpo}>
              <p className={styles.etiqueta}>{seleccionado.etiqueta}</p>
              <h3 id="receta-titulo">{seleccionado.nombre}</h3>
              <p className={styles.modalDetalle}>{seleccionado.detalle}</p>
              <p className={styles.modalDatos}>
                <span>⏱ {receta.tiempo}</span>
                <span>🍰 {receta.porciones}</span>
              </p>
              <h4>Ingredientes</h4>
              <ul>
                {receta.ingredientes.map((ingrediente) => (
                  <li key={ingrediente}>{ingrediente}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <aside className={styles.nota} data-revelar="arriba">
        <span className={styles.corazon} aria-hidden="true">♡</span>
        <div><h2>Lo bonito es compartirlo.</h2><p>Una sobremesa larga, un cumpleaños o una pausa para ti. Siempre hay un buen momento para algo dulce.</p></div>
      </aside>
    </div>
  )
}
