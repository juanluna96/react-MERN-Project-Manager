import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    OBTENER_USUARIO,
    CERRAR_CESION
} from '../../types';
export default function (state, action) {
    switch (action.type) {
        case REGISTRO_EXITOSO:
            localStorage.setItem('token', action.payload.item);
            return {
                ...state,
                autenticado: true,
                mensaje: null
            }
        case REGISTRO_ERROR:
            return {
                ...state,
                token: null,
                mensaje: action.payload
            };
        case LOGIN_EXITOSO:
            return {
                ...state,

            };
        case LOGIN_ERROR:
            return {
                ...state,

            };
        case OBTENER_USUARIO:
            return {
                ...state,

            };
        case CERRAR_CESION:
            return {
                ...state,

            };

        default:
            return state;
    }
}