import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    OBTENER_USUARIO,
    CERRAR_SESION
} from '../../types';
export default function (state, action) {
    switch (action.type) {
        case LOGIN_EXITOSO:
        case REGISTRO_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                autenticado: true,
                mensaje: null
            }
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                mensaje: action.payload
            };
        case OBTENER_USUARIO:
            return {
                ...state,
                usuario: action.payload
            };
        case CERRAR_SESION:
            return {
                ...state,

            };

        default:
            return state;
    }
}