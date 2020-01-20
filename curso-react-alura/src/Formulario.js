import React, { Component } from 'react';

class Formulario extends Component {
    constructor(props){
        super(props);
        this.stateInicial = {
            nome:'',
            livro:'',
            preco:'',
        }
        this.state = this.stateInicial;
    }

    //incluindo evento para atribuir valor da digitacao do formulario no state, para futura atribuicao nos campos
    escutadorDeInput = event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        });
    }

    //captura do props o evento que deverá ser executador ao clicar no submit
    //manda os dados do state do formulario que contém os dados do novo autor para o app.js
    submitFormulario = () => {
        this.props.escutadorDeSubmit(this.state);
        //zerando os campos do formulario
        this.setState(this.stateInicial);
    }

    render(){
        
        const { nome, livro, preco } = this.state;
        
        return(
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="nome">Nome</label>
                        <input
                            className="Validate"
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeInput} />
                    </div>
                    <div className="input-field col s4">

                        <label className="input-field" htmlFor="livro">Livro</label>
                        <input
                            className="Validate"
                            id="livro"
                            type="text"
                            name="livro"
                            value={livro}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                    <div className="input-field col s4">

                        <label className="input-field" htmlFor="preco">Preço</label>
                        <input
                            className="Validate" 
                            id="preco"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange={this.escutadorDeInput} />
                    </div>
                </div>
                <button type="button" onClick={this.submitFormulario} className="waves-effect waves-light btn indigo lightten 2">Salvar</button>
            </form>
        )
    }
}

export default Formulario;