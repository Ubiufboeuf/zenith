/* eslint-disable @typescript-eslint/no-explicit-any */
import { getProductByScanner } from '@/services/productsService'
import { useEffect, useRef, useState } from 'preact/hooks'

const FPS = 5
const TIMEOUT = 1000 / FPS
const WIDTH = 640
const HEIGHT = 360

export function Scanner () {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [result, setResult] = useState('')
  
  const scanningActive = useRef(true)
  const startScanRef = useRef<() => void>()

  async function navigateToProduct () {
    if (!result) return

    const product = await getProductByScanner(result)
    if (!product) return

    location.href = origin + `/product/${product.id}`
  }

  function resetScanner () {
    setResult('')
    scanningActive.current = true
    if (startScanRef.current) {
      startScanRef.current()
    }
  }

  function onResult (text: string) {
    setResult(text)
    scanningActive.current = false
  }

  useEffect(() => {
    let isUnmounted = false
    let timeoutId: number
    let detector: any
    
    // 2. Verificamos soporte e inicializamos el detector
    if ('BarcodeDetector' in window) {
      detector = new (window.BarcodeDetector as any)({
        // Puedes agregar más formatos según lo que necesites
        formats: ['qr_code', 'ean_13', 'ean_8', 'code_128', 'upc_a', 'upc_e']
      })
    } else {
      console.error('El navegador no soporta BarcodeDetector API nativa')
      // Aquí podrías mostrar un mensaje en la UI avisando al usuario
    }

    async function setupCamera () {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { 
            facingMode: 'environment',
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
      if (isUnmounted || !scanningActive.current || !videoRef.current || !detector) return

      const video = videoRef.current

      if (video.readyState === video.HAVE_ENOUGH_DATA) {
        try {
          // 3. Le pasamos el elemento video DIRECTAMENTE. ¡Adiós canvas!
          const results = await detector.detect(video)

          if (results.length > 0) {
            if (navigator.vibrate) navigator.vibrate(100)
            // 4. La API nativa devuelve el texto en la propiedad "rawValue"
            onResult(results[0].rawValue)
            return 
          }
        } catch {
          // Ignoramos los errores de frame sin código
        }
      }
      
      timeoutId = window.setTimeout(() => {
        requestAnimationFrame(scanFrame)
      }, TIMEOUT) 
    }

    startScanRef.current = () => requestAnimationFrame(scanFrame)

    setupCamera().then(() => {
      if (startScanRef.current) startScanRef.current()
    })

    return () => {
      isUnmounted = true
      scanningActive.current = false
      clearTimeout(timeoutId)

      const stream = videoRef.current?.srcObject as MediaStream

      if (stream) {
        const tracks = stream.getTracks()
        tracks.forEach(track => {
          track.stop() 
          stream.removeTrack(track) 
        })
        if (videoRef.current) {
          videoRef.current.srcObject = null
        }
      }
    }
  }, [])

  useEffect(() => {
    if (!result) return
    navigateToProduct()
  }, [result])

  return (
    <div class='w-full h-fit flex flex-col gap-6'>
      <div className='relative w-full h-64 bg-black overflow-hidden rounded-xl'>
        {/* 5. El canvas desapareció por completo de la estructura */}
        <video ref={videoRef} autoPlay playsInline className='w-full h-full object-cover' />
      </div>
      <div class='w-full h-fit flex flex-col gap-2'>
        <button
          class='p-2 px-4 rounded-lg transition-colors bg-neutral-800 shr:bg-neutral-700/70'
          onClick={resetScanner}
          >
          Reiniciar
        </button>
        <span>Contenido: {result || '-'}</span>
      </div>
    </div>
  )
}
