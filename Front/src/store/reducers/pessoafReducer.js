import { createReducer } from '@reduxjs/toolkit';
import { cadastrarPessoaf } from '../actions/actionCadastroPF';

const INITIAL_STATE = []

const pessoafReducer = createReducer(INITIAL_STATE, {
    [cadastrarPessoaf.type]: (state, action) => {
        console.log('---EMP-RE-', action)
        return [...state, action.payload]
    },
})

export default pessoafReducer;

