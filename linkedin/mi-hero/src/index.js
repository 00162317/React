import React from 'react';
import {render} from 'react-dom'//Para poder mostrar todos los contenidos en mi pantalla

class HolaMundo extends React.Component{
  render(){
    return <p>Hola mundo</p>
  }
}


//Llamando a la clase hola mundo
render(<HolaMundo/>,document.querySelector('#root')); 
