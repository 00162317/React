import React from 'react';


export default class FetchHero extends React.Component {

    state = {
        hero: null
    };

    async componentDidMount() {
        const API = 'https://www.superheroapi.com/api.php/3945365972188670/';
        const id = '201';
        const response = await fetch(API + id);
        const data = await response.json();
        this.setState({ hero: data})
        var nombre = data.name;
        console.log('Nombre: '+data.name); 
        console.log('Hero: '+this.state.hero.name);
        
    }
    render() {

        return (<div>
            <h1>Superhero: {}</h1>
        </div>
        );
    }

}


