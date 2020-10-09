import React from 'react';
import './styles.css';
import BlocoPerfEmpresa from '../../components/BlocoPerfEmpresa';
import BlocoAddMaterial from '../../components/BlocoAddMaterial';
import BlocoListaMaterial from '../../components/BlocoListaMaterial';

export class empresaPerfil extends React.Component{
    render() {
        return (
            <div className='EmpresaPerfil'>
                <BlocoPerfEmpresa />
                <BlocoAddMaterial />
                <BlocoListaMaterial />
            </div>
        );
    }
}
    
export default empresaPerfil;

