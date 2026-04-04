import { useEffect, useRef, useState } from 'preact/hooks'
import { readBarcodes } from 'zxing-wasm/reader'

const FPS = 5
const TIMEOUT = 1000 / FPS
const WIDTH = 480
const HEIGHT = 270

export function Scanner () {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [result, setResult] = useState('')

  function onResult (result: string) {
    setResult(result)
  }

  useEffect(() => {
    let isScanning = true
    let timeoutId: number

    async function setupCamera () {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { 
            facingMode: 'environment',
            // Bajamos la resolución ideal para procesar menos píxeles
            width: { ideal: WIDTH }, 
            height: { ideal: HEIGHT }
          }
        })
        if (videoRef.current) videoRef.current.srcObject = stream
      } catch (err) {
        console.error('Error cámara:', err)
      }
    }

    async function scanFrame () {
      if (!isScanning || !videoRef.current || !canvasRef.current) return

      const video = videoRef.current
      const canvas = canvasRef.current
      const context = canvas.getContext('2d', { alpha: false }) // Optimización de context

      if (context && video.readyState === video.HAVE_ENOUGH_DATA) {
        // Dibujamos en un canvas más chico para que WASM trabaje menos
        canvas.width = WIDTH
        canvas.height = HEIGHT
        context.drawImage(video, 0, 0, canvas.width, canvas.height)

        const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
        
        try {
          const results = await readBarcodes(imageData, {
            formats: ['EAN13', 'Code128', 'QRCode'], // Solo lo necesario para Zenith
            tryHarder: false, // ¡IMPORTANTE! False consume mucha menos CPU
            maxNumberOfSymbols: 1
          })

          if (results.length > 0) {
            if (navigator.vibrate) navigator.vibrate(100)
            onResult(results[0].text)
            return 
          }
        } catch (err) { /* No barcode found */ }
      }
      
      // En lugar de requestAnimationFrame directo, metemos un delay.
      // 200ms = 5 escaneos por segundo. Es rapidísimo para el usuario 
      // pero baja el uso de CPU un 90%.
      timeoutId = window.setTimeout(() => {
        requestAnimationFrame(scanFrame)
      }, TIMEOUT) 
    }

    setupCamera().then(() => requestAnimationFrame(scanFrame))

    return () => {
      isScanning = false
      clearTimeout(timeoutId)

      // Accedemos al stream que guardamos en el video
      const stream = videoRef.current?.srcObject as MediaStream

      if (stream) {
        // 1. Obtenemos todos los 'tracks' (video, y audio si hubiera)
        const tracks = stream.getTracks()

        tracks.forEach(track => {
          track.stop() // 2. Apaga físicamente el hardware de la cámara
          stream.removeTrack(track) // 3. Desvincula el track del stream
        })

        // 4. Limpiamos la referencia en el elemento de video
        if (videoRef.current) {
          videoRef.current.srcObject = null
        }
      }
    }
  }, [])

  return (
    <div>
      <div className='relative w-full h-64 bg-black overflow-hidden rounded-xl'>
        <video ref={videoRef} autoPlay playsInline className='w-full h-full object-cover' />
        <canvas ref={canvasRef} className='hidden' />
        {/* Guía visual para el usuario */}
        <div
          className='absolute left-1/2 top-1/2 -translate-1/2 max-w-8/10 max-h-8/10 border-2 border-primary/50 rounded-lg pointer-events-none'
          style={{
            height: HEIGHT,
            width: WIDTH
          }}
        />
      </div>
      {result}
    </div>
  )
}
