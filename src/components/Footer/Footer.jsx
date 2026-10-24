import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const redes = [
  {
    nombre: 'Instagram',
    url: 'https://www.instagram.com/',
    icono: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" />
      </>
    ),
  },
  {
    nombre: 'Facebook',
    url: 'https://www.facebook.com/',
    icono: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <path d="M15.5 8.5h-1.7c-1 0-1.8.8-1.8 1.8V21M9.5 13h5" />
      </>
    ),
  },
  {
    nombre: 'TikTok',
    url: 'https://www.tiktok.com/',
    icono: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <path d="M13.2 7v7.3a2.3 2.3 0 1 1-2.3-2.3M13.2 7c.3 1.7 1.4 2.7 3.1 2.9" />
      </>
    ),
  },
]

function Footer() {
  return (
    <footer className={styles.pie}>
      <div className={styles.contenido}>
        <div className={styles.marcaBloque}>
          <p className={styles.marca}>miga &amp; miel</p>
          <p className={styles.lema}>Un poquito de dulzura cambia el día.</p>
        </div>

        <nav className={styles.columna} aria-label="Explora">
          <p className={styles.titulo}>Explora</p>
          <Link to="/nuestros-dulces">Nuestros dulces</Link>
          <Link to="/por-encargo">Pasteles por encargo</Link>
          <Link to="/nuestra-historia">Nuestra historia</Link>
        </nav>

        <div className={styles.columna}>
          <p className={styles.titulo}>Un poco de inspiración</p>
          {redes.map((red) => (
            <a
              className={styles.instagram}
              href={red.url}
              target="_blank"
              rel="noreferrer"
              key={red.nombre}
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {red.icono}
              </svg>
              Síguenos en {red.nombre} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>

      <div className={styles.legal}>
        <p>© Miga &amp; Miel · Concepto de pastelería artesanal</p>
        <ul>
          <li>Aviso legal</li>
          <li>Privacidad</li>
          <li>Cookies</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
