import { createAction } from '@reduxjs/toolkit';
import axios from '../../services/axios'

export const fazerLogin = createAction('LOGIN')

export const fetchFazerLogin = (dadosLogin) => {
    return (dispatch) => {
        // usar rota '/logar' no back
        axios.post('/logar', dadosLogin)
            .then((dados) => {
                console.log(dados)
                dispatch(fazerLogin(dados.data))
            })
            .catch((erro)=>{console.log(erro)})
    }
}