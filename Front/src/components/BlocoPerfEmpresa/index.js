import React from 'react';
import './style.css';
import pin1 from '../../assets/svg/pin1.svg';
import phone1 from '../../assets/svg/phone1.svg';
import mail1 from '../../assets/svg/mail1.svg';
import web1 from '../../assets/svg/web1.svg';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap'

export class BlocoPerfEmpresa extends React.Component{
    render() {
        return (
            <Container>
                <div className='PrimeiroBloco'>
                <div className='BlocoEsquerdo'>
                    <section className='FotoEmpresa'>
                        <img src='' id='LogoEmpresa' />
                        <button>Foto</button>
                    </section>
                    <section className='DadosEmpresa'>
                        <h3>{this.props.empresa.nome}</h3>
                        <section className='Dados'>
                            <p><img src={pin1} id='IconPerfilEmp' alt='Endereco' />Endereço: 
                            {' ' + this.props.empresa.endereco}, 
                            {' ' + this.props.empresa.numero}, 
                            {' ' + this.props.empresa.cidade}</p>
                            <p><img src={phone1} id='IconPerfilEmp' alt='Telefone' />Telefone: {' ' + this.props.empresa.tel1}</p>
                            <p><img src={mail1} id='IconPerfilEmp' alt='Email' />E-mail: {' ' + this.props.empresa.email}</p>
                            <p><img src={web1} id='IconPerfilEmp' alt='Site' />Site: {' ' + this.props.empresa.site}</p>
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
                                <td id='Numero'>1000</td>
                            </tr>
                        </table>
                    </section>
                </div> 
            </div>
            </Container> 
        )
    }
}

function mapStateToProps(state) {
    console.log('Bloco material----',state)
        return {
            empresa: state.EmpLogadaReducer
        }
}

export default connect(mapStateToProps)(BlocoPerfEmpresa);



