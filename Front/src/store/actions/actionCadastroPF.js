import { createAction } from '@reduxjs/toolkit';
import axios from '../../services/axios'

export const cadastrarPessoaf = createAction('CADASTRAR_PESSOAF')

export const fetchCadastrarPessoaf = (dadosPessoaf, history) => {
    return (dispatch) => {
        console.log('--XX', dadosPessoaf)
        // usar rota 'artesao/cadastrarPessoaf' no back
        axios.post('/artesao/cadastrarPessoaf', dadosPessoaf)
            .then((dados) => {
                console.log(dados)
                window.localStorage.setItem('userId', dados.data._id)
                dispatch(cadastrarPessoaf(dados.data))
                history.push('/perfilArtesao')
            })
            .catch((erro)=>{console.log(erro)})
    }
}