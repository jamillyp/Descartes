import { CADASTRO_SUCESSO, CADASTRO_ERRO } from '../actions/actionTypes';

const INITIAL_STATE = {
    authMsg: null,
    user: '',
}

export default function (state = INITIAL_STATE, action) {
    return {
        ...state,
        Mensagem: "Usuário cadastrado com sucesso!",
        MensagemEmpresa: "Empresa cadastrada com sucesso!",
        MensagemLogin: "Login realizado com sucesso!",
        loginInicial: 'Login',
        loginSome: '',
    }

}