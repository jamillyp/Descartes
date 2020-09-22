import React, { Component } from 'react';
import './styles.css';
import lupa from '../../assets/svg/lupa.svg'

export default class barraPesquisa extends Component {
    render() {
        return (
            <div className="barraPesquisa">
                <div className="titulo-bpesquisa">
                    <h3><img src={lupa}></img>Encontre os materiais, locais, empresas que deseja.</h3>
                </div>
                <div className="pesquisa-pg1">
                <div className="busca-material">
                    <label for="material">Qual material busca?</label><br />
                    <select name="material" id="material">
                    <option value="opcao0" aria-checked="">Selecione o tipo de material. Ex.: Papel</option>
                    <option value="opcao1" >Papel</option>
                    <option value="opcao2">Tecido</option>
                    <option value="opcao3">Papelão</option>
                    <option value="opcao4">Vidro</option>
                    <option value="opcao5">Plástico</option>
                    <option value="opcao6">Gesso</option>
                    <option value="opcao7">Madeira</option>
                    </select>
                </div>
                <div className="local-material">
                <br />
                    <label for="local">Onde deseja encontrar material?</label><br />
                    <select name="local" id="local">
                    <option value="opcao0" aria-checked="">Selecione a cidade. Ex.: Quixadá</option>  
                    <option value="opcao1">Quixadá</option>
                    <option value="opcao2">Quixeramobim</option>
                    <option value="opcao3">Senador Pompeu</option>
                    <option value="opcao4">Fortaleza</option>
                    </select><br />
                    <a href="http://www.buscacep.correios.com.br/sistemas/buscacep/">Busca por CEP</a>
                </div>
                <div className="busca-empresa">
                    <label for="empresa">Em que empresa busca material?</label><br />
                    <select name="empresa" id="empresa">
                    <option value="opcao0" aria-checked="">Selecione a empresa. Ex.: Empresa A</option>
                    <option value="opcao1">Empresa 1</option>
                    <option value="opcao2">Empresa 2</option>
                    <option value="opcao3">Empresa 3</option>
                    <option value="opcao4">Todas</option>
                    </select>
                </div>
                <div className="pesquisar"><br />
                    <button type="submit" id="botao-pesquisar">Pesquisar</button>
                </div>        
            </div>
        </div>
            
        )
    }
}



