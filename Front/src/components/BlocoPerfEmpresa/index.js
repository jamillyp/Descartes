import React from 'react';
import { connect } from 'react-redux';

import ProfilePicture from "profile-picture";
import "profile-picture/build/ProfilePicture.css";
import './style.css';

import pin1 from '../../assets/svg/pin1.svg';
import phone1 from '../../assets/svg/phone1.svg';
import mail1 from '../../assets/svg/mail1.svg';
import web1 from '../../assets/svg/web1.svg';
import selo from '../../assets/images/seloicon.png';




export class BlocoPerfEmpresa extends React.Component{

    constructor(props) {
        super(props)
        this.profilePictureRef = React.createRef();
    }
    
    handleUpload() {
        const PP = this.profilePicture.current;
        const imageData = PP.getData();
        const file = imageData.file;
        const imageAsDataURL = PP.getImageAsDataUrl();
    }

    render() {
        return (
            <div className='PrimeiroBloco'>
                <div className='BlocoEsquerdo'>
                    <section className='FotoEmpresa'>

                    <ProfilePicture
                        ref={this.profilePictureRef}
                        useHelper={true}
                        debug={true}
                    />
                    <button className="buttonAtualizar" onClick={this.handleUpload.bind(this)}>Atualizar</button>

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
                        <button id='BotaoEditPerfil'>Editar perfil</button>
                    </section>
                </div>
                <div className='BlocoDireita'>
                    <section className='CabecalhoSelos'>
                        <h2>Selos de sustentabilidade</h2>
                        <img src={selo} alt="selo" id='TipoSelo' />
                    </section>
                    <section className='TabelaSelos'>
                        <table className='TabelSelo1'>
                            <tr>
                                <td>Quantidade de resíduos já cadastrados:</td>
                                <td id='Numero'>{this.props.empresa.notificao}</td>
                            </tr>
                        </table>
                        <p id='LinhaT' />
                        <table className='TabelSelo2'>
                            <tr>
                                <td>Quantidade de negociações realizadas:</td>
                                <td id='Numero'>{this.props.empresa.negociacoes}</td>
                            </tr>
                        </table>
                        <p id='LinhaT' />
                        <table className='TabelSelo3'>
                            <tr>
                                <td>Selos conquistados:</td>
                                <td id='Numero'>100</td>
                            </tr>
                        </table>
                    </section>
            </div> 
            
        </div>
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



