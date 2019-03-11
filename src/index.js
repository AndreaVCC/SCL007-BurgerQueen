//Se encarga de arrancar la aplicacion

import React from 'react'; //importa React, es la que nos permite crear las interfaces web
import ReactDOM from 'react-dom'; //es React enfocado al navegador

import firebase from 'firebase';

//webpack le permite importar los css, ¿Qué es webpack? -> https://www.campusmvp.es/recursos/post/webpack-que-es-para-que-sirve-y-sus-ventajas-e-inconvenientes.aspx
import './index.css'; // css general, que afecta a todo el cuerpo de la aplicacion

import App from './App';

import * as serviceWorker from './serviceWorker'; 
//service... para applicaciones que se encargan de simular datos de manera local en  pc (en caso de que se pierda net por un rato)

/* ¿aplicaciones web progresivas (PWA)?
Una PWA utiliza las últimas tecnologías disponibles en los navegadores 
para ofrecer una experiencia en móviles lo más parecida a la de una aplicación nativa, como:
-Responsive Web Design, animaciones CSS y frameworks específicos para crear interfaces móviles con aspecto de nativas
-Service Workers
-App Shell
-Manifiesto de aplicación

*/
const config = {
        apiKey: "AIzaSyBOjXxBukX90tfyBxBXUZdGNlWYxB9xh_I",
        authDomain: "burgerqueen-2019.firebaseapp.com",
        databaseURL: "https://burgerqueen-2019.firebaseio.com",
        projectId: "burgerqueen-2019",
        storageBucket: "burgerqueen-2019.appspot.com",
        messagingSenderId: "134345568365"
      };
      firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root')); 

// render permite a react  pintar la interfaz en pantalla, renderiza la aplicacion que hemos escrito en App.js
//ReactDOM. =  gracias a la biblioteca de React para la web...
//.render = vamos a renderizar...
//(<App/>) = una aplicacion ..
//d.getElementById = y con esto le decimos donde lo vamos a pintar, en este caso root que esta en index.html de la carpeta publica

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();