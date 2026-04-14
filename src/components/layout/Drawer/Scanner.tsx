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
  const [torchOn, setTorchOn] = useState(false)
  
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

  async function toggleTorch () {
    const stream = videoRef.current?.srcObject as MediaStream
    if (!stream) return

    const track = stream.getVideoTracks()[0]
    
    try {
      // Algunos navegadores requieren refrescar las capacidades
      const capabilities = track.getCapabilities() as any

      if (track) {
        console.log('Capabilities:', track.getCapabilities())
        console.log('Settings:', track.getSettings())
      }

      // Si 'torch' no aparece, puede que el navegador no lo soporte o 
      // no esté usando la cámara trasera con permisos completos
      if (!capabilities || !('torch' in capabilities)) {
        alert('Tu navegador no permite controlar la linterna en esta cámara.')
        return
      }

      const newState = !torchOn
      await track.applyConstraints({
        advanced: [{ torch: newState }]
      } as any)
      
      setTorchOn(newState)
    } catch (err) {
      console.error('Error al aplicar torch:', err)
      alert('No se pudo activar la linterna.')
    }
  }

  useEffect(() => {
    let isUnmounted = false
    let timeoutId: number
    let detector: any
    
    if ('BarcodeDetector' in window) {
      detector = new (window.BarcodeDetector as any)({
        formats: ['qr_code', 'ean_13', 'ean_8', 'code_128', 'upc_a', 'upc_e']
      })
    } else {
      console.error('El navegador no soporta BarcodeDetector API nativa')
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
          const results = await detector.detect(video)

          if (results.length > 0) {
            if (navigator.vibrate) navigator.vibrate(100)
            onResult(results[0].rawValue)
            return 
          }
        } catch {
          // Ignoramos errores de frames vacíos
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
        stream.getTracks().forEach(track => {
          // Intentamos apagar la linterna antes de cerrar la cámara
          track.applyConstraints({ advanced: [{ torch: false }] } as any).finally(() => {
            track.stop()
          })
        })
        if (videoRef.current) videoRef.current.srcObject = null
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
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          className='w-full h-full object-cover' 
        />
      </div>

      <div class='w-full h-fit flex flex-col gap-2'>
        <div class='w-full h-fit flex items-center gap-2'>
          <button
            type='button'
            class='flex-1 p-2 px-4 rounded-lg transition-colors bg-neutral-800 hover:bg-neutral-700 text-white'
            onClick={resetScanner}
          >
            Reiniciar
          </button>
          
          <button
            type='button'
            onClick={toggleTorch}
            class={`h-fit w-fit p-2 px-4 rounded-lg transition-all duration-200 border border-transparent ${
              torchOn 
                ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20' 
                : 'bg-neutral-800 text-white hover:bg-neutral-700'
            }`}
          >
            {torchOn ? '🔦 Apagar' : '🔦 Linterna'}
          </button>
        </div>
        <span class='text-sm text-neutral-400'>
          Contenido: <strong class='text-white'>{result || '-'}</strong>
        </span>
      </div>
    </div>
  )
}
