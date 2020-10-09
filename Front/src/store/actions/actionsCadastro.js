import { createAction } from '@reduxjs/toolkit';
import axios from '../../services/axios'

export const cadastrarEmpresa = createAction('CADASTRAR_NOVA_EMPRESA')

export const fetchCadastrarEmpresa = (dadosEmpresa) => {
    return (dispatch) => {
        // usar rota '/cadastrarEmpresa' no back
        console.log('ANTES ----')
        axios.post('/empresas/cadastrarEmpresa', dadosEmpresa)
            .then((dados) => {
                console.log('Cdastro---', dados)
                window.localStorage.setItem('userId', dados.data._id)
                dispatch(cadastrarEmpresa(dados.data))
            })
            .catch((erro)=>{console.log(erro)})
    }
}
