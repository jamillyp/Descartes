import { createReducer } from '@reduxjs/toolkit';

import { cadastrarMaterial } from '../actions/actionCadastroM';

const INITIAL_STATE = []

const materialReducer = createReducer(INITIAL_STATE, {
    [cadastrarMaterial.type]: (state, action) => {
        console.log('---EMP-RE-', action)
        return [...state, action.payload]
    },
})

export default materialReducer;