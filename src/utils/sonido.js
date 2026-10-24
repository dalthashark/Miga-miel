let contexto = null

// Sonido corto y suave generado con Web Audio (no requiere archivos de audio)
export function reproducirClic() {
  const AudioContexto = window.AudioContext || window.webkitAudioContext
  if (!AudioContexto) return

  contexto = contexto ?? new AudioContexto()
  if (contexto.state === 'suspended') contexto.resume()

  const ahora = contexto.currentTime
  const oscilador = contexto.createOscillator()
  const volumen = contexto.createGain()

  oscilador.type = 'sine'
  oscilador.frequency.setValueAtTime(880, ahora)
  oscilador.frequency.exponentialRampToValueAtTime(1320, ahora + 0.08)

  volumen.gain.setValueAtTime(0.0001, ahora)
  volumen.gain.exponentialRampToValueAtTime(0.12, ahora + 0.01)
  volumen.gain.exponentialRampToValueAtTime(0.0001, ahora + 0.18)

  oscilador.connect(volumen)
  volumen.connect(contexto.destination)
  oscilador.start(ahora)
  oscilador.stop(ahora + 0.2)
}
