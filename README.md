# Zenith - Sistema de Gestión y Ventas

![Zenith Dashboard](/public/assets/dashboard.webp)

## ¿Qué es Zenith?

Es un sistema POS con gestión de inventario integrado, pensado para optimizar el flujo de trabajo en entornos de ventas y almacén. A diferencia de sistemas genéricos, este prioriza una **experiencia de usuario fluida** sin sacrificar la robustez técnica.

## ¿Por qué?

Creé Zenith porque los sistemas de gestión suelen ser lentos o incómodos de usar (o ambos), o tienen carencias simples pero útiles, y fáciles de implementar, pero no se agregan. Así que quise hacer uno que arreglase eso y agregara mejoras funcionales y cómodas de usar, como un sistema de búsqueda muy bueno, un rendimiento destacable, y un diseño agradable y cómodo.

## Características Principales

- **Dashboard en tiempo real:** Visualización clara de métricas y estados del sistema.
- **Búsqueda Difusa (Fuzzy Search):** Localización instantánea de productos incluso con términos incompletos.
- **Escaneos integrados:** Soporte nativo para escaneo de códigos de barras y QR para agilizar el proceso de venta y búsqueda de artículos.
- **Gestión Estructurada:** Arquitectura pensada para el manejo consistente de inventarios y datos.

## Stack Tecnológico

- **Astro:** Framework principal por su alto rendimiento y versatilidad (web/servidor)
- **Preact y Tailwind CSS:** Para una interfaz reactiva, ligera y rápida.
- **TypeScript:** Por su tipado estricto y experiencia de desarrollo.
- **Bun:** Runtime y gestor de paquetes potente y bastante optimizado.
- **SQLite:** Gestión de persistencia de datos robusta.

## Instalación

``` sh
# Clonar repositorio
git clone --depth 1 https://github.com/Ubiufboeuf/zenith

# Instalación y ejecución con Bun
bun install
bun run dev
```

Nota: Configura tu base de datos y variables de entorno en un archivo `.env` en la raíz del proyecto.
