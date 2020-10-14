import React from 'react';
import BlocoAlert from '../../components/BlocoAlert';
import BlocoPerfilEmpresaV from '../../components/BlocoPerfilEmpresaV';
import BlocoTabelMatArtesao from '../../components/BlocoTabelMatArtesao';
import { Container } from 'react-bootstrap'
import './styles.css';


export class PerfilEmpVisualizar extends React.Component{
    render () {
        return (
            <Container>
            <div className='CorpoPerfilEmpVisual'>
                <BlocoPerfilEmpresaV></BlocoPerfilEmpresaV>
                <BlocoAlert />
                <BlocoTabelMatArtesao />
            </div>
            </Container>
            
        )
    }
}

export default PerfilEmpVisualizar;