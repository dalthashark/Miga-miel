// EmailJS usa una clave pública en el navegador; el destinatario se configura en la plantilla.
export async function enviarConsulta({ nombre, correo, asunto, mensaje }) {
  const name = nombre.trim()
  const email = correo.trim()
  const subject = asunto.trim() || 'Consulta desde Miga & Miel'
  const message = mensaje.trim()

  const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: 'service_zepsftb',
      template_id: 'template_e4vvu6g',
      user_id: 'CY7t-q7TQqRf2qhmQ',
      template_params: {
        nombre: name,
        correo: email,
        asunto: subject,
        mensaje: message,
        name,
        email,
        subject,
        title: subject,
        message,
        from_name: name,
        from_email: email,
        reply_to: email,
      },
    }),
    signal: AbortSignal.timeout(20000),
  })

  if (!response.ok) {
    throw new Error(`EmailJS rechazó el envío (${response.status})`)
  }
}
