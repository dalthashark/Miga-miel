import { useEffect } from 'react'
import styles from './PorEncargo.module.css'
import heroEncargoImage from '../../assets/pasteles/torta-personalizada.jpg'

export default function PorEncargo() {
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

  const handleSubmit = (evento) => {
    evento.preventDefault()
    alert('¡Solicitud de encargo enviada con éxito! Nos pondremos en contacto pronto.')
  }

  return (
    <div className={styles.porEncargo}>
      
      {/* SECCIÓN 1: HERO / PORTADA (Con márgenes y título unificado) */}
      <section className={styles.heroSeccion} aria-labelledby="encargo-titulo">
        <div className={styles.heroContenedorGrid}>
          
          <div className={styles.heroContenido} data-revelar="izquierda">
            <p className={styles.etiqueta}>
              Tú lo imaginas, nosotros lo horneamos
            </p>
            {/* Título unificado en un solo bloque sin colores divididos */}
            <h1 id="encargo-titulo" className={styles.heroTituloUnico}>
              Tu momento merece su propio pastel.
            </h1>
            <p className={styles.heroTexto}>
              Un cumpleaños, un «sí, quiero» o un porque sí. Cuéntanos tu idea y daremos
              forma a un pastel que hable de ti, por dentro y por fuera.
            </p>
            <div className={styles.acciones}>
              <a className={styles.botonHero} href="#formulario">
                Cuéntanos tu idea <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className={styles.avisoHero}>
              La disponibilidad y el presupuesto se confirman en cada consulta.
            </p>
          </div>

          <div className={styles.heroImagen} data-revelar="derecha">
            <div className={styles.heroFotoArco}>
              <img
                src={heroEncargoImage}
                alt="Pastel decorado con velas y flores sobre una mesa"
              />
            </div>
            <div className={styles.selloFigma}>
              Tan único como tu momento.
            </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN 2: EMPENCEMOS POR LO QUE TE GUSTA (3 PASOS) */}
      <section className={styles.pasosSeccion} aria-labelledby="pasos-titulo" data-revelar="arriba">
        <div className={styles.encabezadoSeccion}>
          <p className={styles.etiqueta}>Un pastel, muchas maneras de hacerlo tuyo</p>
          <h2 id="pasos-titulo">Empecemos por lo que te gusta.</h2>
          <p className={styles.subtituloSeccion}>
            No hace falta tenerlo todo decidido. Estas ideas de ejemplo nos ayudan a empezar la conversación; cada detalle se acuerda contigo.
          </p>
        </div>

        <div className={styles.tarjetasPasos}>
          <article className={styles.tarjetaPaso}>
            <span className={styles.numeroPaso}>01</span>
            <h3>Sabores a tu gusto</h3>
            <p className={styles.descripcionPaso}>Los sabores de nuestra carta como punto de partida.</p>
            <ul>
              <li>Vainilla suave · nata · fruta fresca</li>
              <li>Cacao intenso · ganache sedosa</li>
              <li>Crema de limón · merengue tostado</li>
            </ul>
          </article>

          <article className={styles.tarjetaPaso}>
            <span className={styles.numeroPaso}>02</span>
            <h3>Diseño con mimo</h3>
            <p className={styles.descripcionPaso}>Cuéntanos cómo imaginas ese primer vistazo al pastel.</p>
            <ul>
              <li>Colores e inspiración</li>
              <li>Acabado y detalles decorativos</li>
              <li>Una dedicatoria especial</li>
            </ul>
          </article>

          <article className={styles.tarjetaPaso}>
            <span className={styles.numeroPaso}>03</span>
            <h3>Tamaño para compartir</h3>
            <p className={styles.descripcionPaso}>Una celebración íntima o una mesa con muchas cucharas.</p>
            <ul>
              <li>Número aproximado de personas</li>
              <li>Formato y presentación a valorar</li>
              <li>Ocasión, fecha y preferencias</li>
            </ul>
          </article>
        </div>
        <p className={styles.notaPaso}>Propuestas de ejemplo, sujetas a valoración. Si hay alergias o intolerancias, consúltanos antes de elegir.</p>
      </section>

      {/* SECCIÓN 3: DE TU IDEA A LA PRIMERA CUCHARADA (FONDO SALVIA) */}
      <section className={styles.procesoSalvia} data-revelar="arriba">
        <div className={styles.procesoContenido}>
          <p className={styles.etiqueta}>Así de sencillo</p>
          <h2>De tu idea a la primera cucharada.</h2>
          <div className={styles.pasosProcesoGrid}>
            <div>
              <span className={styles.numeroProceso}>01</span>
              <strong>Cuéntanos</strong>
              <p>Comparte la fecha, las porciones y ese sabor que no puede faltar.</p>
            </div>
            <div>
              <span className={styles.numeroProceso}>02</span>
              <strong>Lo creamos contigo</strong>
              <p>Acordamos sabores, diseño y presupuesto antes de empezar.</p>
            </div>
            <div>
              <span className={styles.numeroProceso}>03</span>
              <strong>Llega el momento</strong>
              <p>Concretamos la entrega o recogida. Tú solo piensa en disfrutar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: FORMULARIO DE ENCARGO (FONDO TERRACOTA - INTACTO) */}
      <section id="formulario" className={styles.formularioSeccion} data-revelar="arriba" aria-labelledby="form-titulo">
        <div className={styles.formularioContenedorGrid}>
          
          <div className={styles.formularioInfo}>
            <p className={styles.etiquetaBlanca}>TODO EMPIEZA CON UNA IDEA</p>
            <h2 id="form-titulo">Cuéntanos qué quieres celebrar.</h2>
            <p className={styles.textoInfo}>
              Fecha, porciones y preferencias: con esos detalles empezamos. Si aún no sabes el sabor o el diseño, lo pensamos contigo.
            </p>
            
            <hr className={styles.lineaDivisoria} />

            <div className={styles.bloqueSinPrisa}>
              <h3>Sin prisa, pero con fecha.</h3>
              <p>Escríbenos en cuanto tengas una fecha. Confirmaremos el tiempo de preparación según tu idea.</p>
              <span className={styles.notaEjemplo}>Datos de ejemplo - Personalizar antes de publicar</span>
            </div>
          </div>

          <div className={styles.cajaFormulario}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formularioGrid}>
                
                <div className={styles.campoGrupo}>
                  <label htmlFor="nombre">Tu nombre *</label>
                  <input id="nombre" type="text" required placeholder="¿Cómo te llamas?" />
                </div>

                <div className={styles.campoGrupo}>
                  <label htmlFor="correo">Tu correo *</label>
                  <input id="correo" type="email" required placeholder="nombre@correo.com" />
                </div>

                <div className={styles.campoGrupo}>
                  <label htmlFor="fecha">Fecha aproximada</label>
                  <input id="fecha" type="text" placeholder="Día / Mes / Año" />
                </div>

                <div className={styles.campoGrupo}>
                  <label htmlFor="porciones">Porciones</label>
                  <input id="porciones" type="text" placeholder="¿Para cuántas personas?" />
                </div>

                <div className={styles.campoGrupo}>
                  <label htmlFor="ocasion">Ocasión</label>
                  <input id="ocasion" type="text" placeholder="Cumpleaños, celebración..." />
                </div>

                <div className={styles.campoGrupo}>
                  <label htmlFor="sabor">Sabor que te apetece</label>
                  <input id="sabor" type="text" placeholder="Cuéntanos tu favorito" />
                </div>

                <div className={`${styles.campoGrupo} ${styles.campoCompleto}`}>
                  <label htmlFor="idea">Tu idea *</label>
                  <textarea id="idea" rows="4" required placeholder="Sabores, ocasión, inspiration... Te leemos."></textarea>
                  <p className={styles.avisoAlergias}>
                    Si hay alergias o intolerancias, indícalas aquí. Las opciones se valoran en cada consulta.
                  </p>
                </div>

                <div className={`${styles.campoGrupo} ${styles.campoCompleto}`}>
                  <div className={styles.checkboxWrapper}>
                    <input type="checkbox" id="privacidad" required />
                    <label htmlFor="privacidad">
                      He leído la política de privacidad y acepto el uso de mis datos para responder a esta consulta.
                    </label>
                  </div>
                </div>

                <div className={`${styles.campoGrupo} ${styles.campoCompleto} ${styles.formAccionesFlex}`}>
                  <button type="submit" className={styles.botonFormulario}>
                    Enviar mi idea <span aria-hidden="true">↗</span>
                  </button>
                  <span className={styles.notaBoton}>Consultar no confirma una reserva.</span>
                </div>

              </div>
            </form>
            <p className={styles.notaCampos}>* Campos necesarios - Formulario de ejemplo, sin envío de datos.</p>
          </div>

        </div>
      </section>

      {/* SECCIÓN 5: PREGUNTAS FRECUENTES (FAQ) */}
      <section className={styles.faqSeccion} data-revelar="arriba" aria-labelledby="faq-titulo">
        <div className={styles.faqGrid}>
          <div className={styles.faqInfoIzquierda}>
            <p className={styles.etiqueta}>Antes del primer bocado</p>
            <h2 id="faq-titulo">Unas dudas menos. Un poco más de ilusión.</h2>
            <p className={styles.faqSubtitulo}>Cada encargo es diferente. Estas respuestas son una guía para preparar tu consulta.</p>
          </div>

          <div className={styles.faqLista}>
            <div className={styles.faqItem}>
              <h3>¿Con cuánta antelación hago el encargo?</h3>
              <p>Escríbenos en cuanto tengas una fecha. Te confirmaremos la disponibilidad y el tiempo de preparación según tu idea.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>¿Puedo adaptar un sabor o el diseño?</h3>
              <p>Cuéntanos tus preferencias y comparte tu inspiración. Las adaptaciones se valoran antes de acordar el diseño y el presupuesto.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>¿Cómo se organiza la entrega o recogida?</h3>
              <p>La modalidad y los detalles se concretan al confirmar el encargo. No hay horarios ni condiciones de entrega publicados en esta propuesta.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}