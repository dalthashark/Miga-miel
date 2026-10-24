import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'
import { reproducirClic } from '../../utils/sonido.js'

const enlaces = [
  { to: '/nuestros-dulces', texto: 'Nuestros dulces' },
  { to: '/por-encargo', texto: 'Por encargo' },
  { to: '/nuestra-historia', texto: 'Nuestra historia' },
  { to: '/contacto', texto: 'Contacto' },
]

function Navbar() {
  const [conSombra, setConSombra] = useState(false)
  const [indicador, setIndicador] = useState(null)
  const { pathname } = useLocation()
  const navRef = useRef(null)

  useEffect(() => {
    const alDesplazar = () => setConSombra(window.scrollY > 10)
    alDesplazar()
    window.addEventListener('scroll', alDesplazar, { passive: true })
    return () => window.removeEventListener('scroll', alDesplazar)
  }, [])

  // La línea terracota se desliza hasta la pestaña activa
  useEffect(() => {
    const medir = () => {
      const nav = navRef.current
      const activo = nav?.querySelector('[aria-current="page"]')
      if (!activo) {
        setIndicador(null)
        return
      }
      const caja = nav.getBoundingClientRect()
      const enlace = activo.getBoundingClientRect()
      setIndicador({ left: enlace.left - caja.left, width: enlace.width })
    }
    medir()
    window.addEventListener('resize', medir)
    return () => window.removeEventListener('resize', medir)
  }, [pathname])

  return (
    <header
      className={conSombra ? `${styles.cabecera} ${styles.conSombra}` : styles.cabecera}
    >
      <p className={`${styles.aviso} ${styles.entrada}`}>
        Hecho a mano, para disfrutar sin prisa
      </p>
      <div className={styles.barra}>
        <Link
          to="/"
          className={`${styles.logo} ${styles.entrada}`}
          style={{ '--retraso': '150ms' }}
          aria-label="Miga & Miel, inicio"
        >
          <span className={styles.marca}>miga &amp; miel</span>
          <span className={styles.lema}>Pastelería artesanal</span>
        </Link>

        <nav className={styles.navegacion} aria-label="Principal" ref={navRef}>
          <ul>
            {enlaces.map((enlace, posicion) => (
              <li
                key={enlace.to}
                className={styles.entrada}
                style={{ '--retraso': `${300 + posicion * 100}ms` }}
              >
                <NavLink
                  to={enlace.to}
                  onClick={reproducirClic}
                  className={({ isActive }) =>
                    isActive ? `${styles.enlace} ${styles.activo}` : styles.enlace
                  }
                >
                  {enlace.texto}
                </NavLink>
              </li>
            ))}
          </ul>
          <span
            className={styles.indicador}
            aria-hidden="true"
            style={
              indicador
                ? { transform: `translateX(${indicador.left}px)`, width: indicador.width, opacity: 1 }
                : { opacity: 0 }
            }
          />
        </nav>

        <Link
          to="/contacto"
          className={`${styles.boton} ${styles.entrada}`}
          style={{ '--retraso': '750ms' }}
        >
          Hablemos de tu pastel <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
