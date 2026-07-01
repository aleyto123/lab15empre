# CineSpoilerS Store

Proyecto final empresarial desarrollado con React. La aplicacion presenta una
base de e-commerce para comprar peliculas, consumir informacion desde TMDB,
mantener un carrito global y simular una pasarela de pago.

## Datos del informe

- Alumno: Mauricio Lucianno Rojas Tello
- GitHub: https://github.com/blaxells-zlipper/evaempfinal
- Video: https://youtu.be/AtfQgpFSIEk

El informe PDF incluye evidencia de:

- Desarrollo de todas las paginas principales.
- Checkout simulado.
- TMDB API en uso.

## Objetivo del proyecto

El objetivo es demostrar una aplicacion web moderna con rutas, componentes,
estado global, consumo de API, renderizado de informacion, validaciones de
formulario, pago simulado y pruebas automatizadas.

## Stack utilizado

- React 19: construccion de componentes y vistas.
- TypeScript: tipado de peliculas, carrito y servicios.
- Vite: entorno de desarrollo y build del proyecto.
- React Router: navegacion entre paginas.
- TanStack Query: manejo de fetching, cache y estados de carga.
- Axios: cliente HTTP para consumir TMDB.
- Zustand: estado global del carrito de compras.
- React Hook Form: manejo del formulario de pago.
- Zod: validacion del formulario de checkout.
- TailwindCSS: estilos utilitarios y responsive design.
- shadcn/radix-ui: componentes UI reutilizables.
- Lucide React: iconos de navegacion y acciones.
- Vitest y Testing Library: pruebas del store y componentes.
- Playwright: verificacion visual de flujos en navegador.

## Que usa la web

La web usa una arquitectura simple por carpetas:

- `src/routes/router.tsx`: define las rutas principales.
- `src/pages`: contiene las paginas `Home`, `Movies`, `MovieDetail` y
  `Checkout`.
- `src/components`: contiene componentes reutilizables de layout, peliculas y
  UI.
- `src/services/movie-api.ts`: consume TMDB con Axios y usa datos locales si no
  hay credenciales.
- `src/stores/cart-store.ts`: implementa el carrito global con Zustand.
- `src/data/movies.ts`: datos locales de respaldo para la presentacion.
- `src/test/setup.ts`: configuracion de pruebas.

## Paginas desarrolladas

- `/`: landing principal de CineSpoilerS Store.
- `/movies`: cartelera con peliculas renderizadas.
- `/movies/:movieId`: detalle de una pelicula.
- `/checkout`: resumen del carrito y pasarela de pago simulada.

## Instalacion

Clonar el repositorio:

```powershell
git clone https://github.com/blaxells-zlipper/evaempfinal.git
cd evaempfinal
```

Instalar dependencias:

```powershell
npm install
```

Levantar el proyecto:

```powershell
npm run dev
```

Abrir en el navegador:

```txt
http://localhost:5173
```

## Variables de entorno para TMDB

Crear un archivo `.env` en la raiz del proyecto usando `.env.example` como
base:

```env
VITE_TMDB_API_URL=https://api.themoviedb.org/3
VITE_TMDB_TOKEN=tu_token_de_lectura
VITE_TMDB_API_KEY=tu_api_key
```

El archivo `.env` no se sube a GitHub porque contiene credenciales privadas.

Si no se configura TMDB, la aplicacion usa datos locales de respaldo para que el
proyecto siempre pueda ejecutarse.

## Como probar la web

1. Abrir `http://localhost:5173`.
2. Entrar a `Movies` para ver peliculas renderizadas.
3. Presionar `Detalle` para abrir la pagina de una pelicula.
4. Presionar `Agregar al carrito` o `Comprar`.
5. Verificar que el contador del carrito cambia.
6. Entrar a `Checkout`.
7. Completar el formulario con:

```txt
Nombre completo: Mauricio Demo
Correo: demo@mail.com
Tarjeta demo: 4242424242424242
```

8. Presionar `Pagar`.
9. Verificar el mensaje de compra simulada correctamente.

## Comandos de validacion

Ejecutar lint:

```powershell
npm run lint
```

Ejecutar build:

```powershell
npm run build
```

Ejecutar tests:

```powershell
npm test
```

Estado validado:

```txt
Lint: OK
Build: OK
Tests: 2 passed
Browser check: OK
```

## Evidencia visual incluida

- `docs/browser-home-check.png`: cartelera renderizada.
- `docs/browser-checkout-check.png`: checkout con pago simulado.

## Versiones usadas

```txt
Node: v24.16.0
npm: 11.16.0
```
