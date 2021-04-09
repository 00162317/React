import React from 'react';
import Button from '@material-ui/core/Button';


import './holamundo.css'

class HolaMundo extends React.Component {


    state={
        hero:[]
    }

    componentDidMount(){
        fetch('https://www.superheroapi.com/api.php/3945365972188670/687')
        .then((res)=>res.json())
        .then(data=>{
            this.setState({hero:data});
            console.log(data.name);
        });
        
    }


    render() {
        //Es importante siempre guardar mas de dos elementos en un div
        //Y siempre cerrar las etiquteas con "/"
        return (
            <div>
                <p>Hola {this.props.nombre} </p>
                {/* Para comentar en windows y JSX es CTR+K+C y para borrar CTRL+K+U*/}
                <p>Edad: {this.props.edad}</p>
                <br/>
                <Button color="primary">Click me</Button>
                <p className={this.props.tipo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet voluptatibus totam ut aliquam esse qui incidunt eveniet ad laborum dignissimos, beatae est, possimus dolorum adipisci similique, perspiciatis doloribus aliquid aperiam.</p>
                <h1>{this.state.hero.name}</h1>
            </div>

        )
    }
}

export default HolaMundo;