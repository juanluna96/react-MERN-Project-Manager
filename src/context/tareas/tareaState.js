import React, { useReducer } from 'react';
import tareaContext from './tareaContext'
import TareaReducer from './tareaReducer'

import { TAREAS_PROYECTO, AGREGAR_TAREA } from '../../types';

const TareaState = (props) => {
    const initialState = {
        tareas: [
            { nombre: 'Elegir plataforma', estado: true, proyectoId: 1 },
            { nombre: 'Elegir colores', estado: false, proyectoId: 2 },
            { nombre: 'Elegir plataformas de pago', estado: false, proyectoId: 3 },
            { nombre: 'Elegir hosting', estado: true, proyectoId: 4 },
            { nombre: 'Elegir plataformas de pago', estado: false, proyectoId: 1 },
            { nombre: 'Elegir hosting', estado: true, proyectoId: 2 }
        ],
        tareasproyecto: null
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
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    return (
        <tareaContext.Provider value={ { tareas: state.tareas, tareasproyecto: state.tareasproyecto, obtenerTareas } }>
            {props.children }
        </tareaContext.Provider>
    )
}

export default TareaState