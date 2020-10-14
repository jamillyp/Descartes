import { createReducer } from '@reduxjs/toolkit'

import { cadastrarEmpresa } from '../actions/actionsCadastro'
import { salvarEmpresas } from '../actions/actionEmpresa';

const INITIAL_STATE = []

const empresaReducer = createReducer(INITIAL_STATE, {
    [cadastrarEmpresa.type]: (state, action) => {
        console.log('---EMP-RE-', action)
        return [...state, action.payload]
    },
    [salvarEmpresas]: (state, action) => {
        return action.payload
    }
})

export default empresaReducer;