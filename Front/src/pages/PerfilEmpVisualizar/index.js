import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BlocoAlert from '../../components/BlocoAlert';
import BlocoPerfilEmpresaV from '../../components/BlocoPerfilEmpresaV';
import BlocoTabelMatArtesao from '../../components/BlocoTabelMatArtesao';

import './styles.css';

class PerfilEmpVisualizar extends React.Component{
    componentDidMount() {
        console.log('---props---',this.props)

        console.log('empresaXXCC--', this.props.getEmpresa(this.props.match.params.id))
    }
    
    render () {

        const empresa = this.props.getEmpresa(this.props.match.params.id)
        
        return (

            <Container className='ContainerEmpVisu'>
                <BlocoPerfilEmpresaV empresa={empresa} />
                <BlocoAlert />
                <BlocoTabelMatArtesao empresa={empresa} />
            </Container>
            
        )
    }
}

function mapStateToProps(state) { 
    return {
        getEmpresa: (id) => state.empresaReducer.find(empresa => empresa._id === id)

    }
}

export default withRouter(connect(mapStateToProps)(PerfilEmpVisualizar));