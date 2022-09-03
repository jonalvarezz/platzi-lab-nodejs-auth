# Le Backend

Esta carpeta corresponde al Backend de este proyecto.

## 🚗 Dependencias

1. Node.js

   Recomendamos instalarlo a través de [Fast Node Manager (fnm)](https://github.com/Schniz/fnm). Versiones soportadas: 14+.

1. MongoDB

   [Instrucciones de instalación del sitio oficial](https://www.mongodb.com/docs/manual/administration/install-community/).

## 🤖 Guía Rápida Para Desarrollo Local

1. Clona el repositorio

   ```sh
   git clone git@github.com:jonalvarezz/platzi-lab-nodejs-auth.git
   ```

1. Instala dependencias

   ```sh
   # Instala desde la raíz del proyecto
   cd platzi-lab-nodejs-auth
   npm install
   ```

1. Inicia la aplicación backend

   ```sh
   # Desde la raíz del proyecto:
   npm start --workspace=api
   ```

   La app estará disponible y escuchando peticiones HTTP en http://localhost:3000

1. Para instalar nuevas dependencias en este paquete

   ```sh
   # Desde la raíz del proyecto:
   npm install nombrelibreria --workspace=api
   ```

   Más información en https://docs.npmjs.com/cli/v7/using-npm/workspaces
