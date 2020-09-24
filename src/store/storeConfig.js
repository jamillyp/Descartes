import { createStore, combineReducers } from 'redux'
import authActionCreator from './reducers/authReducer'

const reducers = combineReducers( {
   authReducer: authActionCreator
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig;