# Zenith

## Sobre el Proyecto
Zenith es una aplicación de Punto de Venta (POS) y gestión de inventario desarrollada bajo una sólida filosofía back-first.
Cuenta con una API REST robusta y desacoplada construida con Bun y Express, respaldada por una base de datos LibSQL (Turso), y un frontend moderno, rápido y cómodo.

## Stack Tecnológico

### Backend

- Runtime: Bun
- Framework: Express.js
- Base de datos: LibSQL (Turso)
- Validación: Zod

### Frontend

- Framework: Astro & Preact
- Estilos: Tailwind CSS + DaisyUI
- Gestión de Estado: Zustand
- Lenguaje: TypeScript

## Configuración y Ejecución Local

Prerrequisitos:
- Tener instalado Bun o pnpm.

### 1. Clonar el repositorio e instalar dependencias
```Bash
git clone --depth 1 https://github.com/Ubiufboeuf/zenith
cd zenith
bun install # pnpm install

cd ..
git clone --depth 1 https://github.com/Ubiufboeuf/zenith-api
cd zenith-api
bun install # pnpm install
```

### 2. Configurar las Variables de Entorno del Backend

Crea un archivo `.env` basado en la configuración requerida tanto para desarrollo local como para producción:

```.env
TURSO_DATABASE_URL='tú_url_de_turso'
TURSO_AUTH_TOKEN='tú_token_de_turso'
LOCAL_DATABASE_URL='file:zenith.db'

PORT=8080
DB='local' # o 'prod'. Indica qué BD usar

ENV_ORIGINS='http://localhost:5173'
```

### 3. Ejecutar en desarrollo

Ambos se ejecutan de la misma manera:

```Bash
bun run dev # pnpm run dev
```

## Despliegue

- Backend: Desplegado en Railway conectado a la base de datos en la nube de Turso.
- Frontend: Desplegado de manera óptima en Vercel utilizando el adaptador oficial de Astro.

## Licencia
Este proyecto está bajo la licencia [LICENSE.md](/LICENSE.md).