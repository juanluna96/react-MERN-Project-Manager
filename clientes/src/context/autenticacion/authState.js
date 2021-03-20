import React, { useReducer } from 'react'
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    OBTENER_USUARIO,
    CERRAR_CESION
} from '../../types';

const AuthState = (props) => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)

    // Las funciones

    return (
        <AuthContext.Provider value={ {} }>
            {props.children }
        </AuthContext.Provider>
    )
}

export default AuthState
