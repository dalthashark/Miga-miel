import { useState } from 'react'
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

const categorias = ['Todos', 'Tartas y pasteles', 'Pequeños antojos', 'Bollería', 'Personalizados']

export default function NuestrosDulces() {
  const [categoria, setCategoria] = useState('Todos')
  const visibles = productos.filter((producto) => categoria === 'Todos' || producto.categoria === categoria)

  return (
    <div className={styles.catalogo}>
      <header className={styles.intro}>
        <p className={styles.etiqueta}>El pequeño catálogo de miga &amp; miel</p>
        <h1>Nuestros dulces,<br /><em>tus pequeños momentos.</em></h1>
        <p className={styles.descripcion}>Tartas para celebrar, antojos para la tarde y ese dulce al que siempre vuelves. Descubre tu próximo favorito.</p>
        <span className={styles.sello}><span aria-hidden="true">♡</span> Lo sencillo, hecho con mimo</span>
      </header>

      <section className={styles.seccion} aria-labelledby="catalogo-titulo">
        <div className={styles.encabezado}>
          <div><p className={styles.etiqueta}>Un dulce para cada ocasión</p><h2 id="catalogo-titulo">Elige lo que te hace sonreír.</h2></div>
          <p className={styles.contador} role="status">{visibles.length} dulces por descubrir</p>
        </div>
        <div className={styles.filtros} role="group" aria-label="Filtrar dulces por categoría">
          {categorias.map((opcion) => (
            <button key={opcion} type="button" aria-pressed={categoria === opcion} onClick={() => setCategoria(opcion)}>{opcion}</button>
          ))}
        </div>
        <div className={styles.productos}>
          {visibles.map((producto) => (
            <article className={styles.producto} key={producto.nombre}>
              <div className={styles.foto}>
                <img src={producto.imagen} alt={producto.nombre} loading="lazy" width="600" height="480" />
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
      <aside className={styles.nota}>
        <span className={styles.corazon} aria-hidden="true">♡</span>
        <div><h2>Lo bonito es compartirlo.</h2><p>Una sobremesa larga, un cumpleaños o una pausa para ti. Siempre hay un buen momento para algo dulce.</p></div>
      </aside>
    </div>
  )
}
