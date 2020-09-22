import React, { Component } from 'react';
import logoEmpresa from '../../assets/svg/Rectangle15.svg';
import './styles.css';

export class perfilEmpresa extends Component { 
    
    constructor(props){
            super(props);
            console.log(props)
            this.nomeEmpresa = props.nomeEmpresa
            this.endereco = props.endereco
            this.numero = props.numero
            this.telefone1 = props.telefone1
            this.email = props.email
            this.site = props.site
        }
    state = {
        listaEmpresas: [
            {
                nomeEmpresa: "Monstros S.A",  
                endereco: "Rua Tabelião Eneias", 
                numero: "256",
                telefone1: "(85) 989130631",
                email: "diretoria@graficamonstro.com.br",
                site: "wwww.graficamonstro.com.br"
            },
        ]
    }

    render() {

        return (
            <div className="Empresa-perfil">
                <div className="logo-empresa">
                    <img src={logoEmpresa}/>
                </div>
                <div className="dados-empresa">
                    <h4>{this.nomeEmpresa}</h4>

                    <img src="" /><p>{this.endereco}, {this.numero}</p>
                    <img src="" /><p>{this.telefone1}</p>
                    <img src="" /><p>{this.email}</p>
                    <img src="" /><p>{this.site}</p>
                </div>
                
            </div>
        )
    }
}

export default perfilEmpresa;
