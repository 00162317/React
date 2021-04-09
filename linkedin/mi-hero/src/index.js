import React from 'react';
import {render} from 'react-dom'//Para poder mostrar todos los contenidos en mi pantalla
import registerServiceWorker from './registerServiceWorker';

import HolaMundo from './components/HolaMundo';


//Llamando a la clase hola mundo
render(<HolaMundo nombre="Roberto" edad="22"/>,document.querySelector('#root')); 
