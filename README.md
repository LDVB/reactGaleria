
# React Gallery - CRUD




## Author

- [@Laura del Valle](https://github.com/LDVB)


## Installation Server

#### Install my-project with npm.

```bash
  npm install Ironlauncher
```
#### Server Usage.

```bash
  npm run dev 
```
#### Server .env variables needed

PORT=3000

ORIGIN=http://localhost:3000

MONGODB_URI

CLOUDINARY_NAME

CLOUDINARY_KEY

CLOUDINARY_SECRET

## Installation Client

#### Install my-project with npm create-react-app.

```bash
   npm create-react-app
```
#### Server Usage.

```bash
  npm start 
```

#### Client variables needed

PORT=5005

ORIGIN=http://localhost:5005

AXIOS

REACT-ROUTER-dom

REACT BOOTSTRAP BOOTSTRAP@5.1.3



    

## Process

#### Preparación del entorno de trabajo local.

Instalar ironlauncher como server.

Adecuar archivo .env de servidor.

#### Instalar create-react-app como client.

Instalaciones cliente:

 - axios
 - react-router-dom
 - react-bootstrap bootstrap@5.1.3

Crear archivo .env en cliente, con clave REACT_APP_API_URL para servicios

#### Desarrollo de API (directorio server):

Crear modelo.
Crear archivo de rutas.
Testeo de rutas con Postman.

#### Navegación 
Crear componente Navigation.

Importar y adecuar Navbar de Bootstrap.

Implementar Router de react-router-dom.

Implementar NavLink de react-router-dom.

#### Página de galería de imagenes
Crear componente ImageListPage.

Enrutar componente CoastersListPage.

Desarrollar servicio getAllImages()

Implementar  servicio getAllImages() en estado de ImageListPage

Crear componente ImageList

Crear componente ImageCard

####  Página de detalles 

Crear componente ImageDetails

Enrutar componente ImageDetails

Desarrollar servicio getOneImage()

Implementar servicio getOneImage() en estado de ImageDetails

Renderizar detalles item en ImageDetails

####  Formulario Nueva Imagen

Crear componente 

Desarrollar servicio saveImage()

Implementar servicio saveImage() en estado de NewImageForm

####  Integrar formulario en ventana modal

Importar y adecuar Modal de Bootstrap en ImageListPage

Crear lógicas de apertura y cierre como estado de ImageListPage

Integrar componente NewImageForm dentro de Modal

Configurar acciones tras creación de item: cierre Modal y refresco de Página











