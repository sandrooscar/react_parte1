import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Tabela from './Tabela';
import ContaClicks from './ContaClicks';
import Form from './Formulario';

class App extends Component {
  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      },
      {
        nome: 'Nico',
        livro: 'Java',
        preco: '999'
      }
    ],
  };

  removeAutor = index => {
    //pega o array de autores do state
    const { autores } = this.state;
    this.setState(
      {
        autores : autores.filter((autor, posAtual) => {
          console.log(index, posAtual);
          //Enquanto posAtual diferente de index, mantem o elemento no array. Se coincidir remove o elemento.
          return posAtual !== index;
        }),
      }
    );
  }

  escutadorDeSubmit = autor => {
    this.setState({autores:[...this.state.autores, autor]})
  }

//alterado para render e incluido o acesso a state na chave autores
  render() {
    return (
        <Fragment>
          <ContaClicks></ContaClicks>
          <Tabela autores={ this.state.autores } removeAutor = { this.removeAutor }/>
          <Form escutadorDeSubmit={this.escutadorDeSubmit}/>
        </Fragment>
    );
  }
}

export default App;
