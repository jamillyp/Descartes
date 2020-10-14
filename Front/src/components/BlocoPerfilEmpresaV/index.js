import React, { Component } from 'react';
import pin1 from '../../assets/svg/pin1.svg';
import phone1 from '../../assets/svg/phone1.svg';
import mail1 from '../../assets/svg/mail1.svg';
import web1 from '../../assets/svg/web1.svg';


export class BlocoPerfilEmpresaV extends Component {
    render() {
        return (
            <div>
                <div className='PrimeiroBloco'>
                    <div className='BlocoEsquerdo'>
                        <section className='FotoEmpresa'>
                            <img src='' id='LogoEmpresa' />
                            <button>Foto</button>
                        </section>
                        <section className='DadosEmpresa'>
                            <h3></h3>
                            <section className='Dados'>
                                <p><img src={pin1} id='IconPerfilEmp' alt='Endereco' />Endereço: 
                                </p>
                                <p><img src={phone1} id='IconPerfilEmp' alt='Telefone' />Telefone: </p>
                                <p><img src={mail1} id='IconPerfilEmp' alt='Email' />E-mail:</p>
                                <p><img src={web1} id='IconPerfilEmp' alt='Site' />Site: </p>
                            </section>
                        </section>
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
                                    <td id='Numero'>1000</td>
                                </tr>
                            </table>
                        </section>
                    </div> 
                </div>
                <div></div>
            </div>
        )
    }
}

export default BlocoPerfilEmpresaV;
