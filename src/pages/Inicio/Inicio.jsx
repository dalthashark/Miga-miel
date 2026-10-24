import { useEffect, useState } from 'react'
import styles from './Inicio.module.css'
import { Link } from 'react-router-dom'
import heroImage from '../../assets/pasteles/inicio-hero.jpg'
import tartaFrutosRojos from '../../assets/pasteles/tarta-frutos-rojos.jpg'
import pastelChocolate from '../../assets/pasteles/pastel-chocolate.jpg'
import tartaletas from '../../assets/pasteles/tartaletas.jpg'

const destacados = [
  {
    nombre: 'Tarta de frutos rojos',
    descripcion: 'Vainilla suave · nata · fruta fresca',
    etiqueta: 'La favorita',
    imagen: tartaFrutosRojos,
    alt: 'Tarta de vainilla con nata y frutos rojos sobre un plato de cerámica',
    detalle:
      'Un bizcocho de vainilla muy tierno, relleno de nata ligera y coronado con frutos rojos frescos.',
    tiempo: '1 h 30 min',
    porciones: '8 porciones',
    ingredientes: [
      '200 g de harina de trigo',
      '180 g de azúcar',
      '4 huevos',
      '120 ml de leche',
      '100 g de mantequilla derretida',
      '1 cucharadita de extracto de vainilla',
      '2 cucharaditas de polvo de hornear',
      '300 ml de nata para montar',
      '250 g de frutos rojos (fresas, frambuesas, arándanos)',
    ],
    pasos: [
      'Precalienta el horno a 180 °C y engrasa un molde de 20 cm.',
      'Bate los huevos con el azúcar hasta que doblen su volumen.',
      'Incorpora la mantequilla, la leche y la vainilla.',
      'Añade la harina con el polvo de hornear tamizados, mezclando con movimientos envolventes.',
      'Hornea de 30 a 35 minutos y deja enfriar por completo.',
      'Monta la nata, corta el bizcocho en dos capas, rellena y decora con los frutos rojos.',
    ],
  },
  {
    nombre: 'Chocolate sin prisa',
    descripcion: 'Cacao intenso · ganache sedosa',
    etiqueta: 'Para chocolateros',
    imagen: pastelChocolate,
    alt: 'Porción de pastel de chocolate con virutas sobre una mesa de madera',
    detalle:
      'Un bizcocho húmedo de cacao intenso cubierto con una ganache sedosa de chocolate negro.',
    tiempo: '1 h 15 min',
    porciones: '10 porciones',
    ingredientes: [
      '220 g de harina de trigo',
      '70 g de cacao en polvo sin azúcar',
      '250 g de azúcar',
      '3 huevos',
      '200 ml de leche',
      '120 ml de aceite de girasol',
      '1 cucharadita de bicarbonato',
      '200 g de chocolate negro',
      '200 ml de nata para la ganache',
    ],
    pasos: [
      'Precalienta el horno a 175 °C y prepara un molde de 22 cm.',
      'Mezcla los ingredientes secos: harina, cacao, azúcar y bicarbonato.',
      'Añade los huevos, la leche y el aceite, y bate hasta obtener una masa lisa.',
      'Hornea de 35 a 40 minutos y deja enfriar.',
      'Calienta la nata sin que hierva, viértela sobre el chocolate troceado y remueve hasta que esté brillante.',
      'Cubre el pastel con la ganache y decora con virutas de chocolate.',
    ],
  },
  {
    nombre: 'Limón de la tarde',
    descripcion: 'Crema de limón · merengue tostado',
    etiqueta: 'Un toque cítrico',
    imagen: tartaletas,
    alt: 'Tartaletas de limón con merengue tostado',
    detalle:
      'Base de masa quebrada crujiente, crema de limón fresca y un merengue ligero tostado al momento.',
    tiempo: '1 h 20 min',
    porciones: '12 tartaletas',
    ingredientes: [
      '250 g de harina de trigo',
      '125 g de mantequilla fría',
      '70 g de azúcar glas',
      '1 huevo',
      '3 limones (zumo y ralladura)',
      '4 yemas de huevo',
      '150 g de azúcar',
      '3 claras de huevo',
      '120 g de azúcar para el merengue',
    ],
    pasos: [
      'Mezcla la harina, la mantequilla y el azúcar glas; añade el huevo y forma la masa. Reposa 30 minutos en frío.',
      'Estira la masa, forra los moldes y hornea 15 minutos a 180 °C.',
      'Cocina a fuego suave el zumo, la ralladura, las yemas y el azúcar hasta que espese.',
      'Rellena las bases con la crema de limón y deja enfriar.',
      'Monta las claras con el azúcar hasta tener un merengue firme.',
      'Decora con el merengue y tuéstalo con un soplete o bajo el grill.',
    ],
  },
]

const detalles = [
  'Ingredientes de verdad',
  'Elaboración artesanal',
  'Sabores de temporada',
  'Detalles para compartir',
]

const testimonios = [
  {
    texto:
      'Era justo el pastel que imaginaba. Bonito por fuera y aún más rico por dentro.',
    nombre: 'Clara',
    ocasion: 'Un cumpleaños especial',
  },
  {
    texto:
      'Se nota el cariño en cada bocado. La tarta de limón fue la mejor parte de la merienda.',
    nombre: 'Pablo',
    ocasion: 'Una tarde entre amigos',
  },
  {
    texto:
      'Un sabor de esos que te llevan a casa. No quedó ni una miga en la mesa.',
    nombre: 'Lucía',
    ocasion: 'Una celebración en familia',
  },
  {
    texto:
      'Pedí una tarta para el cumpleaños de mi madre y todos repitieron. Llegó preciosa y en su punto.',
    nombre: 'Andrea',
    ocasion: 'Un cumpleaños en familia',
  },
  {
    texto:
      'Los dulces saben a hecho en casa, de los de verdad. Ya es nuestra parada fija de los domingos.',
    nombre: 'Marcos',
    ocasion: 'Un domingo cualquiera',
  },
  {
    texto:
      'Me escucharon, me aconsejaron y el pastel quedó exactamente como lo soñé. Mil gracias.',
    nombre: 'Valeria',
    ocasion: 'Una sorpresa de aniversario',
  },
]

const SEGUNDOS_ROTACION = 5000

function Inicio() {
  const [indice, setIndice] = useState(0)
  const [pausado, setPausado] = useState(false)
  const [seleccionado, setSeleccionado] = useState(null)

  // Revela cada bloque con animación la primera vez que entra en pantalla
  useEffect(() => {
    const elementos = document.querySelectorAll('[data-revelar]')
    const reducirMovimiento = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reducirMovimiento || !('IntersectionObserver' in window)) {
      elementos.forEach((el) => el.setAttribute('data-visible', ''))
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
    elementos.forEach((el) => observador.observe(el))
    return () => observador.disconnect()
  }, [])

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

  useEffect(() => {
    if (pausado) return undefined
    const temporizador = setInterval(() => {
      setIndice((actual) => (actual + 1) % testimonios.length)
    }, SEGUNDOS_ROTACION)
    return () => clearInterval(temporizador)
  }, [pausado])

  // Se muestran 3 testimonios seguidos (1 en celular) y la ventana avanza de uno en uno
  const visibles = [0, 1, 2].map(
    (desfase) => testimonios[(indice + desfase) % testimonios.length],
  )

  return (
    <div className={styles.inicio}>
      <section className={styles.hero} aria-labelledby="inicio-titulo">
        <div className={styles.heroContenido} data-revelar="izquierda">
          <p className={styles.etiqueta}>
            Pequeños placeres, grandes momentos
          </p>
          <h1 id="inicio-titulo">
            <span>La vida sabe</span>
            <span>mejor con una</span>
            <em>miga de dulzura.</em>
          </h1>
          <p className={styles.heroTexto}>
            Pasteles, tartas y pequeños antojos hechos a mano. Con ingredientes
            sencillos, mucho cariño y tiempo para lo que importa.
          </p>
          <div className={styles.acciones}>
            <Link className={styles.boton} to="/nuestros-dulces">
              Descubre nuestros dulces <span aria-hidden="true">↗</span>
            </Link>
            <Link className={styles.enlaceSecundario} to="/por-encargo">
              Un pastel para ti
            </Link>
          </div>
          <p className={styles.lema}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 20 19 4M8 16l-3-1m6-3-3-1m6-3-3-1m6-3-3-1m-4 13 1 3m3-6 1 3m3-6 1 3" />
            </svg>
            Lo sencillo, hecho con mimo.
          </p>
        </div>
        <div className={styles.heroImagen} data-revelar="derecha">
          <div className={styles.heroFoto}>
            <img
              src={heroImage}
              alt="Tarta blanca decorada con fresas y flores"
            />
          </div>
          <span className={styles.sello}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
            </svg>
            Hecho con cariño
          </span>
          <div className={styles.pieFoto}>
            <span>Vainilla, nata y frutos rojos</span>
            <em>Un bocado de felicidad</em>
          </div>
        </div>
      </section>

      <ul className={styles.detalles} aria-label="Lo que nos hace especiales" data-revelar="arriba">
        {detalles.map((detalle, index) => (
          <li key={detalle}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {index === 0 && (
                <path d="M5 21 19 3M8 17l-3-1m6-3-3-1m6-3-3-1m6-3-3-1m-4 13 1 3m3-6 1 3m3-6 1 3" />
              )}
              {index === 1 && (
                <path d="M7 12V6a1.5 1.5 0 0 1 3 0v5-7a1.5 1.5 0 0 1 3 0v7-6a1.5 1.5 0 0 1 3 0v7-4a1.5 1.5 0 0 1 3 0v7c0 4-2.5 7-6.5 7h-1c-2 0-3.5-1-4.5-2.5L4 15a1.7 1.7 0 0 1 2.5-2.2L9 15" />
              )}
              {index === 2 && (
                <path d="M12 10c-2-3-1-6 2-8m-1 1c3 0 5 1 6 4-3 1-5 0-6-4M7 13c2-2 5-2 7 0l-1 6a3 3 0 0 1-6 0Zm7 0c2-2 5-2 7 0l-1 6a3 3 0 0 1-6 0Z" />
              )}
              {index === 3 && (
                <path d="M3 10h18v11H3zM2 6h20v4H2zm10 0v15M12 6H7a2 2 0 1 1 2-2c0 2 3 2 3 2Zm0 0h5a2 2 0 1 0-2-2c0 2-3 2-3 2Z" />
              )}
            </svg>
            {detalle}
          </li>
        ))}
      </ul>

      <section
        className={styles.favoritos}
        id="favoritos"
        aria-labelledby="favoritos-titulo"
      >
        <div className={styles.encabezadoSeccion} data-revelar="arriba">
          <div>
            <p className={styles.etiqueta}>Recién salidos del corazón</p>
            <h2 id="favoritos-titulo">Siempre hay un favorito.</h2>
          </div>
          <Link className={styles.verTodos} to="/nuestros-dulces">
            Ver todos los dulces <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className={styles.productos}>
          {destacados.map((producto, posicion) => (
            <article
              className={styles.producto}
              key={producto.nombre}
              data-revelar="arriba"
              style={{ '--retraso': `${posicion * 140}ms` }}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-label={`Ver receta: ${producto.nombre}`}
              onClick={() => setSeleccionado(producto)}
              onKeyDown={(evento) => {
                if (evento.key === 'Enter' || evento.key === ' ') {
                  evento.preventDefault()
                  setSeleccionado(producto)
                }
              }}
            >
              <div className={styles.productoImagen}>
                <img src={producto.imagen} alt={producto.alt} loading="lazy" />
                <span className={styles.etiquetaProducto}>
                  {producto.etiqueta}
                </span>
              </div>
              <div className={styles.productoTexto}>
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {seleccionado && (
        <div
          className={styles.fondoModal}
          onClick={() => setSeleccionado(null)}
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="receta-titulo"
            onClick={(evento) => evento.stopPropagation()}
          >
            <button
              type="button"
              className={styles.cerrar}
              onClick={() => setSeleccionado(null)}
              aria-label="Cerrar receta"
              autoFocus
            >
              ×
            </button>
            <img
              className={styles.modalImagen}
              src={seleccionado.imagen}
              alt={seleccionado.alt}
            />
            <div className={styles.modalCuerpo}>
              <p className={styles.etiqueta}>{seleccionado.etiqueta}</p>
              <h3 id="receta-titulo">{seleccionado.nombre}</h3>
              <p className={styles.modalDetalle}>{seleccionado.detalle}</p>
              <p className={styles.modalDatos}>
                <span>⏱ {seleccionado.tiempo}</span>
                <span>🍰 {seleccionado.porciones}</span>
              </p>
              <h4>Ingredientes</h4>
              <ul>
                {seleccionado.ingredientes.map((ingrediente) => (
                  <li key={ingrediente}>{ingrediente}</li>
                ))}
              </ul>
              <h4>Preparación</h4>
              <ol>
                {seleccionado.pasos.map((paso) => (
                  <li key={paso}>{paso}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}

      <section className={styles.hechoConAmor} aria-labelledby="amor-titulo">
        <div className={styles.amorEncabezado} data-revelar="arriba">
          <p className={styles.etiqueta}>Lo bonito es compartirlo</p>
          <h2 id="amor-titulo">Palabras que nos endulzan.</h2>
        </div>
        <div
          className={styles.razones}
          data-revelar="arriba"
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
          onFocus={() => setPausado(true)}
          onBlur={() => setPausado(false)}
        >
          {visibles.map((testimonio) => (
            <figure className={styles.razon} key={`${indice}-${testimonio.nombre}`}>
              <span className={styles.estrellas} aria-label="5 estrellas">
                ☆☆☆☆☆
              </span>
              <blockquote>«{testimonio.texto}»</blockquote>
              <figcaption>
                <strong>{testimonio.nombre}</strong>
                <span>{testimonio.ocasion}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className={styles.puntos}>
          <button
            type="button"
            className={styles.navegar}
            onClick={() =>
              setIndice((actual) => (actual - 1 + testimonios.length) % testimonios.length)
            }
            aria-label="Comentario anterior"
          >
            ←
          </button>
          {testimonios.map((testimonio, posicion) => (
            <button
              type="button"
              key={testimonio.nombre}
              className={
                posicion === indice
                  ? `${styles.punto} ${styles.puntoActivo}`
                  : styles.punto
              }
              onClick={() => setIndice(posicion)}
              aria-label={`Ver comentario de ${testimonio.nombre}`}
              aria-current={posicion === indice}
            />
          ))}
          <button
            type="button"
            className={styles.navegar}
            onClick={() => setIndice((actual) => (actual + 1) % testimonios.length)}
            aria-label="Comentario siguiente"
          >
            →
          </button>
        </div>
      </section>
    </div>
  )
}

export default Inicio
