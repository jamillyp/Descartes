import { createAction } from '@reduxjs/toolkit';
import axios from '../../services/axios';

export const cadastrarEmpresa = createAction('CADASTRAR_NOVA_EMPRESA')

export const fetchCadastrarEmpresa = (dadosEmpresa, history) => {
    return (dispatch) => {
        // usar rota '/empresas/cadastrarEmpresa' no back
        console.log('ANTES ----')
        axios.post('/empresas/cadastrarEmpresa', dadosEmpresa)
            .then((dados) => {
                console.log('Cadastro---', dados)
                window.localStorage.setItem('userId', dados.data._id)
                dispatch(cadastrarEmpresa(dados.data))
                console.log('DEPOISSSS')
                // match.
                history.push('/perfilEmpresa')
            })
            .catch((erro)=>{console.log(erro)})
    }
}
