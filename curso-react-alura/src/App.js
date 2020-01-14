import React, { Component } from 'react';
import './App.css';
import Tabela from './Tabela';

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

//alterado para render e incluido o acesso a state na chave autores
  render() {
    return (
      <div className = "App" >
        <Tabela autores={ this.state.autores } removeAutor = { this.removeAutor }/>
      </div>
    );
  }
}

export default App;
