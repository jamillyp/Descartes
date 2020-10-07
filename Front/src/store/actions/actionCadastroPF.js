import { createAction } from '@reduxjs/toolkit';
import axios from '../../services/axios'

export const cadastrarPessoaf = createAction('CADASTRAR_PESSOAF')

export const fetchCadastrarPessoaf = (dadosPessoaf) => {
    return (dispatch) => {
        console.log('--XX', dadosPessoaf)
        // usar rota '/cadastrarPessoaf' no back
        axios.post('/cadastrarPessoaf', dadosPessoaf)
            .then((dados) => {
                console.log(dados)
                dispatch(cadastrarPessoaf(dados.data))
            })
            .catch((erro)=>{console.log(erro)})
    }
}