import React, { useReducer } from 'react';
import tareaContext from './tareaContext'
import TareaReducer from './tareaReducer'
import { v4 as uuidv4 } from 'uuid';

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA
} from '../../types';

const TareaState = (props) => {
    const initialState = {
        tareas: [
            { id: 1, nombre: 'Elegir plataforma', estado: true, proyectoId: 1 },
            { id: 2, nombre: 'Elegir colores', estado: false, proyectoId: 2 },
            { id: 3, nombre: 'Elegir plataformas de pago', estado: false, proyectoId: 3 },
            { id: 4, nombre: 'Elegir hosting', estado: true, proyectoId: 4 },
            { id: 5, nombre: 'Elegir plataformas de pago', estado: false, proyectoId: 1 },
            { id: 6, nombre: 'Elegir hosting', estado: true, proyectoId: 2 }
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // Crear las funciones

    // Obtener las tareas de un proyecto
    const obtenerTareas = (proyecto) => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyecto.id
        })
    }

    // Agregar una tarea al proyecto seleccionado
    const agregarTarea = (tarea) => {
        tarea.id = uuidv4();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    // Valida y muestra un error en caso de que sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    // Eliminar tarea
    const eliminarTarea = (tarea) => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: tarea.id
        })
    }

    // Cambiar estado de la tarea
    const cambiarEstadoTarea = (tarea) => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    // Extrae una tarea para edición
    const guardarTareaActual = (tarea) => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    // Edita o modifica una tarea
    const actualizarTarea = (tarea) => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    return (
        <tareaContext.Provider value={ {
            tareas: state.tareas, tareasproyecto: state.tareasproyecto, errortarea: state.errortarea, tareaseleccionada: state.tareaseleccionada,
            obtenerTareas, agregarTarea, validarTarea, eliminarTarea, cambiarEstadoTarea, guardarTareaActual, actualizarTarea
        } }>
            {props.children }
        </tareaContext.Provider>
    )
}

export default TareaState
