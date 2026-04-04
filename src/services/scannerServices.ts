import { Html5QrcodeScanner } from 'html5-qrcode'

export function createScanner (elementId: string, onSuccess: (res: string) => void) {
  const scanner = new Html5QrcodeScanner(elementId, {
    fps: 10,
    qrbox: { width: 480, height: 270 }, // Mejor para códigos de barras como el de Bracafé
    aspectRatio: 1.777778, // 16:9
    videoConstraints: { facingMode: 'environment' }
  }, false)

  scanner.render(onSuccess, (err) => console.warn(err))
  return scanner
}
