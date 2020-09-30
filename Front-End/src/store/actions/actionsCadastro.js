import { createAction } from '@reduxjs/toolkit';
import axios from '../../services/axios'

export const cadastrarEmpresa = createAction('CADASTRAR_NOVA_EMPRESA')

export const fetchCadastrarEmpresa = (dadosEmpresa) => {
    return (dispatch) => {
        // usar rota '/cadastrarEmpresa' no back
        axios.post('/cadastrarEmpresa', dadosEmpresa)
            .then((dados) => {
                console.log(dados)
                dispatch(cadastrarEmpresa(dados.data))
            })
            .catch((erro)=>{console.log(erro)})
    }
}
