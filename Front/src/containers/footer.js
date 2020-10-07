import React from 'react';
import Footer from '../components/Footer'

import email from '../assets/svg/email.svg';
import endereco from '../assets/svg/endereco.svg';
import instagram from '../assets/svg/instagram.svg';


export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <img src={ email } id='IconEmail' alt='Email' width='50px'/>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Contato:</Footer.Title>
                        <Footer.Link href="#">projetodescartes@gmail.com</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <img src={ endereco } id='IconEndereco' alt='Endereco' width='40px'/>  
                    </Footer.Column>                
                    <Footer.Column>
                        <Footer.Title>Endereço:</Footer.Title>
                        <a href="#">Av. José de Freitas Queiroz, 5003, Quixadá - CE</a>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
            <Footer.Wrapper>
                <Footer.Title>
                    <p id='TextOne'>
                      Um projeto dos alunos de Design Digital da Universidade Federal do Ceará - Campus Quixadá  
                    </p> 
                </Footer.Title>
            </Footer.Wrapper>
            <Footer.Wrapper>
                <Footer.Row>
                    <img src= { instagram } id='IconInstagram' alt='Instagram' width='20px' />
                    <a href='https://www.instagram.com/shelida.crislane/'>shelida</a>
                    <img src= { instagram } id='IconInstagram' alt='Instagram' width='20px' />
                    <a href='https://www.instagram.com/julichan007/'>juliana</a>
                    <img src= { instagram } id='IconInstagram' alt='Instagram' width='20px' />
                    <a href='https://www.instagram.com/dona.isys/'>isys</a>
                    <img src= { instagram } id='IconInstagram' alt='Instagram' width='20px' />
                    <a href='https://www.instagram.com/oftimeandmemory/'>thais</a>
                    <img src= { instagram } id='IconInstagram' alt='Instagram' width='20px' />
                    <a href='https://www.instagram.com/pinheiromilly/'>jamilly</a>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}