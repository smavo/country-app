
## API RESTCOUNTRIES
https://restcountries.eu/#api-endpoints-all

## Install
npm install react-router-dom

## deploy-de-una-aplicacion-react-a-github-pages/
Configuraciones para hacer deploy de una aplicación React a Github Pages

En este caso se asume que ya se tiene una aplicación hecha en React y se tiene configurado todo el proceso para generar el build.

Si no es así, recomiendo usar el código y estructura que genera create-react-app  para facilitar la generación del build.


## 1. Generar el build de una aplicación React
Si tu aplicación fue generada con ya tiene configurado un script para realizar las tareas del build.

En el archivo package.json puedes encontrar la instrucción de esta manera:
```
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
},
```

## 2. Activar la generación del build como un paso previo al deploy

En los scripts de npm se debe agregar uno llamado predeploy y que este deberá llamar al script build.
```
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "predeploy": "npm run build"
},
```

## 3. Instalar el paquete gh-pages

Lo que se desea ahora es tener un proceso que permita tomar esos archivos estatáticos del folder build y pasarlos a una rama llamada gh-pages.

Puedes hacerlo manualmente, o puedes usar un paquete que lo hace por ti. El paquete se llama gh-pages, y para instalarlo ejecutamos el comando:
```
npm install -D gh-pages
```


## 4. Crear un script para ejecutar el deploy usando gh-pages
```
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
},
```

## 5. Configurar el package.json con la url de github pages

En el archivo package.json además del script es importante indicar cuál es la homepage, es decir, la url de github pages en la que tu aplicación quedará deployeada.

```
"homepage": "https://[TU USUARIO].github.io/[TU REPOSITORIO]/"
```

## Deploy de una aplicación React a Github Pages

La configuración ha quedado lista, de modo que ahora esta todo listo para poder hacer deploy en el momento que desees y desde la rama que desees.

Solo debes ejecutar el comando
```
npm run deploy
```