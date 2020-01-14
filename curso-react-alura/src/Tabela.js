import React, { Component } from 'react';

const TableHead = () => {
    return(
        <thead>
        <tr>
          <th>Autores</th>
          <th>Livros</th>
          <th>Preços</th>
        </tr>
      </thead>
    );
}

const TableBody = () => {
    return(
      <tbody>
        <tr>
          <td>Nico</td>
          <td>React</td>
          <td>100</td>
          <td><button>Remover</button></td>
        </tr>
        <tr>
          <td>Paulo</td>
          <td>React</td>
          <td>150</td>
          <td><button>Remover</button></td>
        </tr>
        <tr>
          <td>Daniel</td>
          <td>React</td>
          <td>200</td>
          <td><button>Remover</button></td>
        </tr>
      </tbody>        
    );
}

class Tabela extends Component {
    render(){
        return (
        <table>
            <TableHead/>
            <TableBody/>
          </table>
        );
    }
}

export default Tabela;