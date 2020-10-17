import { createAction } from "@reduxjs/toolkit";

import axios from '../../services/axios'

// action para salvar empresa e seus materiais
export const salvarEmpresas = createAction('SALVAR_EMPRESAS')

export const fetchEmpresas = () => {
    return (dispatch) => {
        // usar rota '/cadastrarMaterial' no back
        axios.get(`/empresas`)
            .then((dados) => {
                console.log(dados)
                dispatch(salvarEmpresas(dados.data))
            })
            .catch((erro)=>{console.log(erro)})
    }
}
