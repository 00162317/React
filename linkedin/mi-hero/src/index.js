import React from 'react';
import {render} from 'react-dom'//Para poder mostrar todos los contenidos en mi pantalla
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import HolaMundo from './components/hola-mundos/HolaMundo';
import Router from './Router';

const Root = () =>{
    return(
        <div>
            <Router />
        </div>
    )
}


render(<Root/>, document.querySelector('#root2'))

//Llamando a la clase hola mundo
//render(<HolaMundo nombre="Roberto" edad="22" tipo="nota"/>,document.querySelector('#root')); 
