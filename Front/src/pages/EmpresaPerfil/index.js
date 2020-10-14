import React from 'react';
import './styles.css';
import BlocoPerfEmpresa from '../../components/BlocoPerfEmpresa';
import BlocoAddMaterial from '../../components/BlocoAddMaterial';
import BlocoListaMaterial from '../../components/BlocoListaMaterial';
import { Container } from 'react-bootstrap'

export class empresaPerfil extends React.Component{
    render() {
        return (
            <Container>
            <div className='EmpresaPerfil'>
                <BlocoPerfEmpresa />
                <BlocoAddMaterial />
                <BlocoListaMaterial />
            </div>
            </Container>   
        );
    }
}
    
export default empresaPerfil;

