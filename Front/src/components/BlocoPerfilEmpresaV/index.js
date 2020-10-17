import React, { Component } from 'react';

import pin1 from '../../assets/svg/pin1.svg';
import phone1 from '../../assets/svg/phone1.svg';
import mail1 from '../../assets/svg/mail1.svg';
import web1 from '../../assets/svg/web1.svg';
import selo from '../../assets/images/seloicon.png';
import foto from '../../assets/images/perfil.png';

import './styles.css';


export class BlocoPerfilEmpresaV extends Component {
    render() {

        return (
                <div className='PrimeiroBlocoV'>
                    <div className='BlocoEsquerdoV'>
                        <section className='FotoEmpresaV'>
                            <img src={foto} id='LogoEmpresaV' />
                        </section>
                        <section className='DadosEmpresaV'>
                            <h3>{this.props.empresa.nome}</h3>
                            <section className='DadosV'>
                                <p><img src={pin1} id='IconPerfilEmp' alt='Endereco' />
                                Endereço: {this.props.empresa.endereco}
                                </p>
                                <p><img src={phone1} id='IconPerfilEmp' alt='Telefone' />
                                Telefone: {this.props.empresa.tel1}</p>
                                <p><img src={mail1} id='IconPerfilEmp' alt='Email' />
                                E-mail: {this.props.empresa.email}</p>
                                <p><img src={web1} id='IconPerfilEmp' alt='Site' />
                                Site: {this.props.empresa.site}</p>
                            </section>
                        </section>
                    </div>
                    <div className='BlocoDireitaV'>
                        <section className='CabecalhoSelosV'>
                            <h2>Selos de sustentabilidade</h2>
                            <img src={selo} alt="selo" id='TipoSeloV' />
                        </section>
                        <section className='TabelaSelosV'>
                            <table className='TabelSeloV1'>
                                <tr>
                                    <td>Quantidade de resíduos já cadastrados:</td>
                                    
                                    <td id='NumeroV'>0</td>
                                </tr>
                            </table>
                            <p className='LinhaV' />
                            <table className='TabelSeloV2'>
                                <tr>
                                    <td>Quantidade de negociações realizadas:</td>
                                    <td id='NumeroV'> {this.props.empresa.negociacoes}</td>
                                </tr>
                            </table>
                            <p className='LinhaV' />
                            <table className='TabelSeloV3'>
                                <tr>
                                    <td>Selos conquistados:</td>
                                    <td id='NumeroV'>100</td>
                                </tr>
                            </table>
                        </section>
                    </div> 
                </div>
        )
    }
}

export default BlocoPerfilEmpresaV;
