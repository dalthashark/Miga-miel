import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './NuestraHistoria.module.css'
import obradorPastelera from '../../assets/pasteles/obrador-pastelera.jpg'
import ingredientes from '../../assets/pasteles/ingredientes.jpg'
import heroPastel from '../../assets/pasteles/inicio-hero.jpg'
import { reproducirClic } from '../../utils/sonido.js'

const pasosReceta = [
  {
    numero: '01',
    titulo: 'Elegir',
    descripcion: 'Pensar en el sabor y en el equilibrio de cada ingrediente.',
  },
  {
    numero: '02',
    titulo: 'Preparar',
    descripcion: 'Pesar, mezclar y dar a cada elaboración el tiempo que necesita.',
  },
  {
    numero: '03',
    titulo: 'Hornear',
    descripcion: 'La temperatura exacta, el punto de cocción y el reposo necesario.',
  },
  {
    numero: '04',
    titulo: 'Dar el último mimo',
    descripcion: 'Cuidar el acabado y esos detalles que hacen especial la mesa.',
  },
]

const ingredientesDestacados = [
  {
    titulo: 'Vainilla, nata y fruta fresca',
    descripcion: 'Un aroma suave, una base ligera y fruta fresca para equilibrar cada bocado.',
  },
  {
    titulo: 'Cacao y ganache',
    descripcion: 'Un sabor intenso y un glaseado suave para crear un contraste rico en matices.',
  },
  {
    titulo: 'Limón y merengue',
    descripcion: 'Un toque ácido de limón y la textura ligera del merengue que suman frescura.',
  },
]

function NuestraHistoria() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

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

  return (
    <div className={styles.historia}>
      {/* 1. SECCIÓN HERO */}
      <section className={styles.hero} aria-labelledby="historia-titulo">
        <div className={styles.heroContenido} data-revelar>
          <p className={styles.etiqueta}>El placer de volver a lo sencillo</p>
          <h1 id="historia-titulo">
            El placer de volver <br />
            a lo sencillo.
          </h1>
          <p className={styles.heroDescripcion}>
            Miga &amp; Miel nace de una idea sencilla: recuperar el placer de lo hecho en casa.
            El olor a mantequilla, las manos con harina y esa primera cucharada que te hace
            sonreír.
          </p>
          <p className={styles.firma}>Con cariño, Miga &amp; Miel</p>
          <p className={styles.heroNota}>Pastelería artesanal hecha para disfrutarla sin prisa.</p>
        </div>

        <div className={styles.heroImagenes} data-revelar>
          <div className={styles.imagenArcoContenedor}>
            <img
              src={obradorPastelera}
              alt="Pastelera amasando en el obrador con delantal y rodillo de madera"
              className={styles.imagenArco}
            />
          </div>
          <div className={styles.polaroidFlotante}>
            <img
              src={ingredientes}
              alt="Huevos, harina, mantequilla y vainilla sobre un mantel de lino"
              className={styles.imagenPolaroid}
            />
          </div>
        </div>
      </section>

      {/* 2. FRANJA SALVIA: FILOSOFÍA */}
      <section className={styles.seccionSalvia} aria-labelledby="filosofia-titulo">
        <div className={styles.contenedorSalvia}>
          <div className={styles.salviaIzquierda} data-revelar>
            <p className={styles.etiquetaSecundaria}>Un obrador, desde dentro</p>
            <h2 id="filosofia-titulo">
              Manos en la masa. <br />
              Corazón en cada receta.
            </h2>
          </div>
          <div className={styles.salviaDerecha} data-revelar>
            <p className={styles.textoFilosofia}>
              Imaginamos un obrador donde cada hornada tiene su tiempo y cada detalle, su porqué.
              Una pastelería cercana, honesta y un poquito nostálgica. Como los buenos recuerdos.
            </p>
            <blockquote className={styles.cita}>
              «No se trata solo de hacer un pastel. Se trata de lo que sucede alrededor de la mesa.»
            </blockquote>
            <p className={styles.pieCita}>Filosofía sobre la que construimos cada dulce</p>
          </div>
        </div>
      </section>

      {/* 3. INGREDIENTES SENCILLOS */}
      <section className={styles.seccionIngredientes} aria-labelledby="ingredientes-titulo">
        <div className={styles.contenedorIngredientes}>
          <div className={styles.ingredientesFotoCol} data-revelar>
            <div className={styles.marcoFotoIngredientes}>
              <img
                src={ingredientes}
                alt="Ingredientes naturales: huevos frescos, harina de trigo y mantequilla dorada"
                className={styles.fotoIngredientes}
              />
            </div>
            <p className={styles.pieFotoIngredientes}>
              Selección de ingredientes para nuestra repostería.
            </p>
          </div>

          <div className={styles.ingredientesTextoCol} data-revelar>
            <p className={styles.etiqueta}>El sabor empieza aquí</p>
            <h2 id="ingredientes-titulo">Ingredientes sencillos. Nada que esconder.</h2>
            <p className={styles.ingredientesDescripcion}>
              Vainilla suave, nata, cacao intenso, limón y fruta fresca son algunos de los
              ingredientes que dan vida a nuestras recetas. Elegimos sabores reconocibles para
              disfrutar de lo esencial.
            </p>

            <div className={styles.listaIngredientes}>
              {ingredientesDestacados.map((item) => (
                <div key={item.titulo} className={styles.itemIngrediente}>
                  <h3 className={styles.itemTitulo}>{item.titulo}</h3>
                  <p className={styles.itemDescripcion}>{item.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CADA RECETA TIENE SU RITMO */}
      <section className={styles.seccionRitmo} aria-labelledby="ritmo-titulo">
        <div className={styles.contenedorRitmo}>
          <div className={styles.ritmoCabecera} data-revelar>
            <div>
              <p className={styles.etiqueta}>El proceso detrás de cada receta</p>
              <h2 id="ritmo-titulo">Cada receta tiene su ritmo.</h2>
            </div>
            <p className={styles.ritmoSubtexto}>
              Así imaginamos el oficio: atención en cada paso, desde la primera mezcla hasta el
              último detalle.
            </p>
          </div>

          <div className={styles.pasosGrid}>
            {pasosReceta.map((paso, index) => (
              <div
                key={paso.numero}
                className={styles.pasoCard}
                data-revelar
                style={{ '--retraso': `${index * 120}ms` }}
              >
                <span className={styles.pasoNumero}>{paso.numero}</span>
                <h3 className={styles.pasoTitulo}>{paso.titulo}</h3>
                <p className={styles.pasoDescripcion}>{paso.descripcion}</p>
              </div>
            ))}
          </div>

          <p className={styles.ritmoPie} data-revelar>
            Oficio artesanal en cada una de nuestras recetas.
          </p>
        </div>
      </section>

      {/* 5. SECCIÓN FINAL: RECUERDOS (FONDO ROSA EMPOLVADO) */}
      <section className={styles.seccionRecuerdos} aria-labelledby="recuerdos-titulo">
        <div className={styles.contenedorRecuerdos}>
          <div className={styles.recuerdosImagenCol} data-revelar>
            <div className={styles.recuerdosArco}>
              <img
                src={heroPastel}
                alt="Tarta decorada con frutos rojos y flores naturales para compartir"
                className={styles.fotoRecuerdos}
              />
            </div>
          </div>

          <div className={styles.recuerdosTextoCol} data-revelar>
            <p className={styles.etiqueta}>Lo bonito es compartirlo</p>
            <h2 id="recuerdos-titulo">Los mejores recuerdos dejan alguna miga.</h2>
            <p className={styles.recuerdosDescripcion}>
              Una merienda que se alarga, unas velas por soplar o una visita inesperada. Esa es la
              pastelería que imaginamos: la que acompaña los pequeños y grandes momentos.
            </p>
            <div className={styles.recuerdosAccion}>
              <Link
                to="/nuestros-dulces"
                className={styles.botonRecuerdos}
                onClick={reproducirClic}
              >
                Descubre nuestros dulces <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <p className={styles.recuerdosPie}>
              Pastelería artesanal pensada para regalar o regalarse.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NuestraHistoria
