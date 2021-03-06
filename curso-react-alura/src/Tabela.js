import React, { Component } from 'react';

const TableHead = () => {
    return(
        <thead>
        <tr>
          <th>Autores</th>
          <th>Livros</th>
          <th>Preços</th>
          <th></th>
        </tr>
      </thead>
    );
}

const TableBody = props => {
    const linhas = props.autores.map((linha, index) => {
        return (
            //atributo key ideintifica o elemento do array na linha
            <tr key = {index}>
                <td>{ linha.nome }</td>
                <td>{ linha.livro }</td>
                <td>{ linha.preco }</td>
                <td><button onClick = { () => { props.removeAutor(index) } } className="waves-effect waves-light btn indigo lightten 2">Remover</button></td>
            </tr>
        );
    });

    return(
        <tbody>
            {linhas}
        </tbody>
    );
}

class Tabela extends Component {
    render(){
        //pega o aray de autores da propriedae props do componente, autores deve ser o mesmo nome do parametro passado
        //associa cada propriedade conforme seu nome passado como parâmetro
        const { autores, removeAutor} = this.props;
        return (
        <table className="centered highlight">
            <TableHead/>
            <TableBody autores = { autores } removeAutor = { removeAutor }/>
          </table>
        );
    }
}

export default Tabela;