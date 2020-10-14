import React from 'react';
import './styles.css';
import { Container } from 'react-bootstrap';

class BlocoAlert extends React.Component {
    render() {
        return (
            <Container>
                <div className='BlocoAlert'>
                    <section className='BlFundo1'>
                        <section className='TextosBlFundo'>
                            <section className='TextoMaior'>
                                <h1>ATENÇÃO</h1>
                                <p>Leia, é importante!</p>
                            </section>
                            <section className='TextoCorrido'>
                                <p>
                                    Caso encontre o material que deseja, você pode fazer a solicitação do material a empresa, 
                                    porém é necessário que entre em contato com a empresa combinando a retirada do material em questão, 
                                    dentro das informações já fornecidas. O contato deve ser realizado através dos números de contato fornecidos 
                                    pela empresa. Sua solicitação pode ser validada pela confirmação de solicitação pela empresa, mas também pode 
                                    ser encerrada pela mesma a qualquer momento, por isso o contato e comunicação devem ser realizadas de maneira 
                                    organizada e bem esclarecida por ambas as partes.
                                </p>
                            </section> 
                        </section>
                    </section>
                </div>
            </Container>
        )
    }
}

export default BlocoAlert;