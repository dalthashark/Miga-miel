import { useEffect, useRef, useState } from 'react'
import styles from './Contacto.module.css'
import ingredientes from '../../assets/pasteles/ingredientes.jpg'
import { reproducirClic } from '../../utils/sonido.js'

import { enviarConsulta } from '../../utils/emailjs.js'

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: '',
    aceptaPolitica: false,
  })

  const envioEnCurso = useRef(false)
  const [enviando, setEnviando] = useState(false)
  const [errorEnvio, setErrorEnvio] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [errores, setErrores] = useState({})

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormulario((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (errores[name]) {
      setErrores((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (envioEnCurso.current) return
    reproducirClic()
    setErrorEnvio('')

    const nuevosErrores = {}
    if (!formulario.nombre.trim()) {
      nuevosErrores.nombre = 'Por favor, indícanos tu nombre'
    }
    if (!formulario.correo.trim()) {
      nuevosErrores.correo = 'Por favor, indícanos tu correo electrónico'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.correo.trim())) {
      nuevosErrores.correo = 'Por favor, introduce un correo electrónico válido'
    }
    if (!formulario.mensaje.trim()) {
      nuevosErrores.mensaje = 'Por favor, escribe tu mensaje'
    }
    if (!formulario.aceptaPolitica) {
      nuevosErrores.aceptaPolitica = 'Debes aceptar la política de privacidad'
    }

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores)
      return
    }

    envioEnCurso.current = true
    setEnviando(true)
    setErrores({})
    try {
      await enviarConsulta(formulario)
      setEnviado(true)
    } catch {
      setErrorEnvio('No pudimos enviar tu consulta. Tus datos siguen aquí; inténtalo de nuevo en unos momentos.')
    } finally {
      envioEnCurso.current = false
      setEnviando(false)
    }
  }

  const reiniciarFormulario = () => {
    setFormulario({
      nombre: '',
      correo: '',
      asunto: '',
      mensaje: '',
      aceptaPolitica: false,
    })
    setErrorEnvio('')
    setEnviado(false)
    setErrores({})
  }

  return (
    <div className={styles.contacto}>
      {/* 1. CABECERA INTRODUCTORIA (FONDO CREMA) */}
      <section className={styles.cabeceraSeccion} aria-labelledby="contacto-titulo">
        <div className={styles.contenedorCabecera}>
          <div className={styles.cabeceraIzquierda} data-revelar>
            <p className={styles.etiqueta}>Estamos para leerte</p>
            <h1 id="contacto-titulo">
              Las buenas ideas <br />
              empiezan con un hola.
            </h1>
          </div>
          <div className={styles.cabeceraDerecha} data-revelar>
            <p className={styles.textoIntro}>
              ¿Tienes una duda o quieres escribirnos? Este es tu espacio para contactar con nosotros.
            </p>
            <p className={styles.taglineCariño}>Te leemos con cariño.</p>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN PRINCIPAL (FONDO TERRACOTA) */}
      <section className={styles.seccionPrincipal} aria-label="Formulario e información de contacto">
        <div className={styles.contenedorPrincipal}>
          {/* COLUMNA IZQUIERDA: INFORMACIÓN E IMAGEN */}
          <div className={styles.columnaInfo} data-revelar>
            <p className={styles.etiquetaTerracota}>Encantados de escucharte</p>
            <h2 className={styles.tituloInfo}>
              Hablemos. Te leemos <br />
              con cariño.
            </h2>
            <p className={styles.descripcionInfo}>
              Escríbenos para hacer una consulta general, compartir una sugerencia o conocer más
              sobre Miga &amp; Miel.
            </p>

            <div className={styles.tarjetaContacto}>
              <div className={styles.iconoEmail}>
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className={styles.infoEmail}>
                <a href="mailto:hola@migaymiel.ejemplo" className={styles.linkEmail}>
                  hola@migaymiel.ejemplo
                </a>
                <p className={styles.subEmail}>¿Te apetece escribirnos?</p>
                <p className={styles.detalleEmail}>Para consultas generales o información.</p>
              </div>
            </div>

            <div className={styles.contenedorFoto}>
              <div className={styles.marcoFoto}>
                <img
                  src={ingredientes}
                  alt="Huevos, harina, mantequilla y vainilla en la mesa del obrador"
                  className={styles.foto}
                />
              </div>
              <p className={styles.lemaFoto}>
                <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
                  <path
                    d="M5 20 19 4M8 16l-3-1m6-3-3-1m6-3-3-1m6-3-3-1m-4 13 1 3m3-6 1 3m3-6 1 3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
                Lo sencillo, hecho con mimo.
              </p>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO INTERACTIVO */}
          <div className={styles.columnaFormulario} data-revelar>
            <h2 className={styles.tituloFormulario}>Déjanos tu mensaje.</h2>
            <p className={styles.subtituloFormulario}>
              Déjanos tu mensaje y un correo para poder responderte.
            </p>

            {enviado ? (
              <div className={styles.mensajeExito} role="alert">
                <div className={styles.iconoExito} aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3>¡Mensaje enviado con éxito!</h3>
                <p>
                  Gracias por escribirnos, <strong>{formulario.nombre}</strong>. Hemos recibido tu
                  consulta y te responderemos con cariño a <em>{formulario.correo}</em> en un plazo
                  de 24 a 48 horas.
                </p>
                <button
                  type="button"
                  className={styles.botonReiniciar}
                  onClick={reiniciarFormulario}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-busy={enviando} className={styles.formulario}>
                <fieldset disabled={enviando} className={styles.camposFormulario}>
                <div className={styles.filaDoble}>
                  <div className={styles.grupoCampo}>
                    <label htmlFor="nombre" className={styles.label}>
                      Tu nombre *
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      name="nombre"
                      placeholder="¿Cómo te llamas?"
                      value={formulario.nombre}
                      onChange={handleChange}
                      className={errores.nombre ? `${styles.input} ${styles.inputError}` : styles.input}
                      required
                    />
                    {errores.nombre && (
                      <span className={styles.errorTexto}>{errores.nombre}</span>
                    )}
                  </div>

                  <div className={styles.grupoCampo}>
                    <label htmlFor="correo" className={styles.label}>
                      Tu correo *
                    </label>
                    <input
                      id="correo"
                      type="email"
                      name="correo"
                      placeholder="nombre@correo.com"
                      value={formulario.correo}
                      onChange={handleChange}
                      className={errores.correo ? `${styles.input} ${styles.inputError}` : styles.input}
                      required
                    />
                    {errores.correo && (
                      <span className={styles.errorTexto}>{errores.correo}</span>
                    )}
                  </div>
                </div>

                <div className={styles.grupoCampo}>
                  <label htmlFor="asunto" className={styles.label}>
                    Asunto
                  </label>
                  <input
                    id="asunto"
                    type="text"
                    name="asunto"
                    placeholder="¿En qué podemos ayudarte?"
                    value={formulario.asunto}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.grupoCampo}>
                  <label htmlFor="mensaje" className={styles.label}>
                    Tu mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="4"
                    placeholder="Explícanos tu consulta o sugerencia... Te leemos."
                    value={formulario.mensaje}
                    onChange={handleChange}
                    className={errores.mensaje ? `${styles.textarea} ${styles.inputError}` : styles.textarea}
                    required
                  />
                  {errores.mensaje && (
                    <span className={styles.errorTexto}>{errores.mensaje}</span>
                  )}
                </div>

                <div className={styles.grupoCheckbox}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="aceptaPolitica"
                      checked={formulario.aceptaPolitica}
                      onChange={handleChange}
                      className={styles.checkbox}
                    />
                    <span className={styles.checkboxTexto}>
                      He leído la política de privacidad y acepto el uso de mis datos para responder
                      a esta consulta.
                    </span>
                  </label>
                  {errores.aceptaPolitica && (
                    <span className={styles.errorTexto}>{errores.aceptaPolitica}</span>
                  )}
                </div>

                </fieldset>
                {errorEnvio && (
                  <p role="alert" className={styles.errorTexto}>{errorEnvio}</p>
                )}
                <div className={styles.filaBoton}>
                  <button type="submit" disabled={enviando} className={styles.botonEnviar}>
                    {enviando ? 'Enviando…' : 'Enviar mi consulta'} <span aria-hidden="true">↗</span>
                  </button>
                </div>

                <p className={styles.notaTiempo}>
                  Tiempo de respuesta habitual: 24 a 48 horas en días laborables.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacto
