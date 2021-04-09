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
                <p className={this.props.tipo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptatibus totam ut aliquam esse qui incidunt eveniet ad laborum dignissimos, beatae est, possimus dolorum adipisci similique, perspiciatis doloribus aliquid aperiam.</p>
            </div>
        )
    }
}

export default HolaMundo;