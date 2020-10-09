import React from 'react';
import BlocoAlert from '../../components/BlocoAlert';
import { BlocoPerfEmpresa } from '../../components/BlocoPerfEmpresa';
import BlocoTabelMatArtesao from '../../components/BlocoTabelMatArtesao';

import './styles.css';

export class PerfilEmpVisualizar extends React.Component{
    render () {
        return (
            <div className='CorpoPerfilEmpVisual'>
                <BlocoAlert />
                <BlocoTabelMatArtesao />
            </div>
        )
    }
}

export default PerfilEmpVisualizar;