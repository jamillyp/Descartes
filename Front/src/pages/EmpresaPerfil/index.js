import React from 'react';
import './styles.css';
import BlocoPerfEmpresa from '../../components/BlocoPerfEmpresa';
import BlocoAddMaterial from '../../components/BlocoAddMaterial';

export class empresaPerfil extends React.Component{
    render() {
        return (
            <div className='EmpresaPerfil'>
                <BlocoPerfEmpresa />
                <BlocoAddMaterial />
            </div>
        );
    }
}
    
export default empresaPerfil;

