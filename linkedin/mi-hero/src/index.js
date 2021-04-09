import React from 'react';
import {render} from 'react-dom'//Para poder mostrar todos los contenidos en mi pantalla
import registerServiceWorker from './registerServiceWorker';
import './index.css';


import HolaMundo from './components/hola-mundos/HolaMundo';


//Llamando a la clase hola mundo
render(<HolaMundo nombre="Roberto" edad="22"/>,document.querySelector('#root')); 
