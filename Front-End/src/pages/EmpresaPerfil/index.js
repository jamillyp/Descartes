import React from 'react';
import './styles.css';
import {connect} from 'react-redux';

import pin1 from '../../assets/svg/pin1.svg';
import phone1 from '../../assets/svg/phone1.svg';
import mail1 from '../../assets/svg/mail1.svg';
import web1 from '../../assets/svg/web1.svg';

export class empresaPerfil extends React.Component{
    render() {
        return (
            <div>
                <div className='PrimeiroBloco'>
                    <div className='BlocoEsquerdo'>
                        <section className='FotoEmpresa'>
                            <img src='' id='LogoEmpresa' />
                            <button>Mudar foto</button>
                        </section>
                        <section className='DadosEmpresa'>
                        <h3>{this.props.empresas[0].nome}</h3>
                            <section className='Dados'>
                                <p><img src={pin1} id='IconPerfilEmp' alt='Endereco' />Endereço: 
                                {' ' + this.props.empresas[0].endereco}, 
                                {' ' + this.props.empresas[0].numero}, 
                                {' ' + this.props.empresas[0].cidade}</p>
                                <p><img src={phone1} id='IconPerfilEmp' alt='Telefone' />Telefone: {' ' + this.props.empresas[0].tel1}</p>
                                <p><img src={mail1} id='IconPerfilEmp' alt='Email' />E-mail: {' ' + this.props.empresas[0].email}</p>
                                <p><img src={web1} id='IconPerfilEmp' alt='Site' />Site: {' ' + this.props.empresas[0].site}</p>
                            </section>
                        </section>
                        <section className='BotaoEditar'><button id='BotaoEditPerfil'><b>Editar perfil</b></button></section>
                    </div>
                    <div className='BlocoDireita'>
                        <section className='CabecalhoSelos'>
                            <h2>Selos de sustentabilidade</h2>
                            <img src='' id='TipoSelo' />
                        </section>
                        <section className='TabelaSelos'>
                            <table className='TabelSelo'>
                                <tr>
                                    <td>Quantidade de resíduos já cadastrados:</td>
                                    <td id='Numero'>000</td>
                                </tr>
                                <p id='Linha' />
                                <tr>
                                    <td>Quantidade de negociações realizadas:</td>
                                    <td id='Numero'>000</td>
                                </tr>
                                <p id='Linha' />
                                <tr>
                                    <td>Selos conquistados:</td>
                                    <td id='Numero'>000</td>
                                </tr>
                            </table>
                        </section>
                    </div> 
                </div>
                <div className='SegundoBloco'>
                    <div className='BlocoAmarelo'>
                        <section className='CabecalhoBlAmarelo'>
                            <h1>Cadastrar Material</h1>
                            <p id='Divisoria'></p>
                        </section>
                        <section className='CorpoBlAmarelo'>
                            <p>Tipo de material</p>
                            <input type="text" id="txtCadTipo" placeholder="Digite o tipo de material"/>
                            <p>Quantidade / Tamanho</p>
                            <input type="text" id="txtCadQnt" placeholder="Digite a quantidade/tamanho"/>
                            <p>Disponibilidade</p>
                            <input type="date" id="Data"/>
                            <input type="time" id="Hora" min="09:00" max="18:00" required></input>
                            <p id='BotaoCadastrar'><button id='BotaoCad'>Cadastrar</button></p>
                        </section>
                    </div>
                </div>
                <div className='TerceiroBloco'>
                    <div className='BlocoVerde'>
                        <section className='CabecalhoBlAmarelo'>
                            <h1>Lista de Materiais</h1>
                            <p id='DivisoriaTabel'></p>
                        </section>
                        <section className='TabelaProdCadastrados'>
                            <table className='TabelaListaProd1'>
                                <thead id='TituloTabela'>
                                    <tr>
                                        <th id='th1'>Cdg</th>
                                        <th id='th2'>Descrição</th>
                                        <th id='th3'>Qtd</th>
                                        <th id='th4'>Apagar</th>
                                        <th id='th5'>Reservar</th>
                                        <th id='th6'>Doado</th>
                                    </tr>
                                </thead>
                            </table>
                            <table className='TabelaListaProd2'>
                                <tbody className='ListagemTabela'>
                                    <tr>
                                        <td id='td1'>001</td>
                                        <td id='td2'>Papel</td>
                                        <td id='td3'>100kg</td>
                                        <td id='td4'><input id="Check1" type="checkbox" /></td>
                                        <td id='td5'><input id="Check2" type="checkbox" /></td>
                                        <td id='td6'><input id="Check3" type="checkbox" /></td>
                                    </tr>
                                    <tr>
                                        <td id='td1'>002</td>
                                        <td id='td2'>Retalhos de tecido</td>
                                        <td id='td3'>30m</td>
                                        <td id='td4'><input id="Check1" type="checkbox" /></td>
                                        <td id='td5'><input id="Check2" type="checkbox" /></td>
                                        <td id='td6'><input id="Check3" type="checkbox" /></td>
                                        </tr>
                                </tbody>
                            </table>
                        </section>
                        <section id='BotaoAtualizar'><button id='Atualizar'>Atualizar</button></section>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('PE----',state)
        return {
            empresas: state.empresaReducer
        }
}
    
export default connect(mapStateToProps)(empresaPerfil);

