import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            mensagem: '',
        };
    }


    entraEmail = (event) => {
        this.setState({email: event.target.value});
        console.log(event.target.value);
    };

    entraSenha = (event) => {
        this.setState({senha: event.target.value});
        console.log(event.target.value);
    };

    validaLogin = (event) => {
        event.preventDefault();

        const emailValido = "validacao@email.com";
        const senhaValida = "validacaoOK";

        const {email, senha} = this.state;

        if (email === emailValido && senha == senhaValida) {
            this.setState({mensagem: "Acessado com Sucesso"});
        } else {
            this.setState({mensagem: "Erro ao Acessar"});
        }
    };

    render(){
        return(
            <div>
                <h1>Login</h1>
                <form onSubmit={this.validaLogin}>
                    <label>
                        E-mail:
                        <input
                        type= "email"
                        value= {this.state.email}
                        onChange={this.entraEmail}
                        />
                    </label>
                    <br />
                    <label>
                        Senha:
                        <input
                        type="password"
                        value= {this.state.senha}
                        onChange= {this.entraSenha}
                        />
                    </label>
                    <br />
                    <button type= "submit">Acessar</button>
                </form>
                {this.state.mensagem && <p>{this.state.mensagem}</p>}
            </div>
        );
    }
}
export default App;
