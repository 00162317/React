import React from 'react';
import './holamundo.css'

class HolaMundo extends React.Component {
    render() {
        //Es importante siempre guardar mas de dos elementos en un div
        //Y siempre cerrar las etiquteas con "/"
        return (
            <div>
                <p>Hola {this.props.nombre} </p>
                {/* Para comentar en windows y JSX es CTR+K+C y para borrar CTRL+K+U*/}
                <p>Edad: {this.props.edad}</p>
                <br/>
            </div>
        )
    }
}

export default HolaMundo;