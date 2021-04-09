import React from 'react';

class HolaMundo extends React.Component {
    render() {
        //Es importante siempre guardar mas de dos elementos en un div
        //Y siempre cerrar las etiquteas con "/"
        return (
            <div>
                <p>Hola mundo</p>
                <p>Hola mundo</p>
                <br/>
            </div>
        )
    }
}

export default HolaMundo;