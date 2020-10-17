import { createReducer } from '@reduxjs/toolkit';

import { cadastrarEmpresa } from '../actions/actionsCadastro';

import { cadastrarMaterial } from '../actions/actionCadastroM';

const INITIAL_STATE = {}

const EmpLogadaReducer = createReducer(INITIAL_STATE, {
    [cadastrarEmpresa.type]: (state, action) => {
        console.log('---EMP-RE-', action)
        return {...state, ...action.payload}
    },
    [cadastrarMaterial]: (state, action) => {
        console.log('PAYYYYYXXXX----', action)
        return action.payload
    }

})

export default EmpLogadaReducer;