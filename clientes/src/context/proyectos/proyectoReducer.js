import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO,
    PROYECTO_ERROR,
    BUSCAR_PROYECTO
} from '../../types';

export const proyectoReducer = (state, action) => {
    switch (action.type) {
        case FORMULARIO_PROYECTO:
            // return { ...state, formulario: !state.formulario };
            return { ...state, formulario: true };

        case OBTENER_PROYECTOS:
            return { ...state, proyectos: action.payload };

        case AGREGAR_PROYECTO:
            return { ...state, proyectos: [...state.proyectos, action.payload], formulario: false, errorformulario: false };

        case VALIDAR_FORMULARIO:
            return { ...state, errorformulario: true };

        case PROYECTO_ACTUAL:
            return { ...state, proyecto: state.proyectos.filter(proyecto => proyecto._id === action.payload._id) };

        case ELIMINAR_PROYECTO:
            return { ...state, proyectos: state.proyectos.filter(proyecto => proyecto._id !== action.payload._id), proyecto: null };

        case PROYECTO_ERROR:
            return { ...state, mensaje: action.payload };

        case BUSCAR_PROYECTO:
            return { ...state, proyectos: state.proyectos.filter(proyecto => proyecto.nombre.toLowerCase().includes(action.payload.toLowerCase())) };

        default:
            return state;
    }
}