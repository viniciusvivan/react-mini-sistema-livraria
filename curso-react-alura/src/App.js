import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import Header from './Header';
import Tabela from './Tabela';
import Form from './Formulario';

class App extends Component{

  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Marcos',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Bruna',
        livro: 'React',
        preco: '1000'
      },
    ],
  };

  removeAutor = index => {

    const { autores } = this.state;

    this.setState(
        {
          autores : autores.filter((autor, posAtual) => posAtual !== index),
        }
    );
  };

  escutadorDeSubmit = autor => {
    this.setState({ autores : [...this.state.autores, autor]  })
  };

  render() {
    return (
        <Fragment>
          <Header/>
            <div className="container mb-10">
            <Tabela autores={ this.state.autores } removeAutor = { this.removeAutor }/>
            <Form escutadorDeSubmit={ this.escutadorDeSubmit }/>
          </div>
        </Fragment>
    );
  }
}

export default App;
