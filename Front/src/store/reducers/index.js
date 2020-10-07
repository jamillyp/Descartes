import { combineReducers } from 'redux';
import empresaReducer from './empresaReducer';
import pessoafReducer from './pessoafReducer'
import login from './loginReducer';

export default combineReducers ({
    empresaReducer,
    pessoafReducer,
    login
})