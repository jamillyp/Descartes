import { createReducer } from '@reduxjs/toolkit'

import { fazerLogin } from '../actions/actionLogin'

const INITIAL_STATE = {}


const loginReducer = createReducer(INITIAL_STATE, 
    {
        [fazerLogin.type]: (state, action) => {
            console.log('---EMP-RE-', action)
            return {...state, ...action.payload}
        },
    }
)

export default loginReducer;

