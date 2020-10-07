import { createAction } from '@reduxjs/toolkit';
import axios from '../../services/axios'

export const cadastrarMaterial = createAction('CADASTRAR_MATERIAL')

export const fetchCadastrarMaterial = (dadosMaterial) => {
    return (dispatch) => {
        console.log('--XX', dadosMaterial)
        // usar rota '/cadastrarMaterial' no back
        axios.post('/cadastrarMaterial', dadosMaterial)
            .then((dados) => {
                console.log(dados)
                dispatch(cadastrarMaterial(dados.data))
            })
            .catch((erro)=>{console.log(erro)})
    }
}