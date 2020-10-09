import { createReducer } from '@reduxjs/toolkit'

import { cadastrarEmpresa } from '../actions/actionsCadastro'

const INITIAL_STATE = {}

const EmpLogadaReducer = createReducer(INITIAL_STATE, {
    [cadastrarEmpresa.type]: (state, action) => {
        console.log('---EMP-RE-', action)
        return {...state, ...action.payload}
    },
})

export default EmpLogadaReducer;