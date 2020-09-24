import { ALTERAR_LOGIN } from './actionTypes';


export function mostrarLogin(novoLogin){
    //retorna uma Action (objeto javascript)
    return {
        type: ALTERAR_LOGIN,
        payload: novoLogin
    }
}