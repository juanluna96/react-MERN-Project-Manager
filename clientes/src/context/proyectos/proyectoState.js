import React, { useReducer } from 'react'
import proyectoContext from './proyectoContext';
import { proyectoReducer } from './proyectoReducer';
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO, VALIDAR_FORMULARIO, PROYECTO_ACTUAL, ELIMINAR_PROYECTO } from '../../types';
import { v4 as uuidv4 } from 'uuid';
import clienteAxios from '../../config/axios';

const ProyectoState = props => {

    const initialState = {
        proyectos: [],
        formulario: false,
        errorformulario: false,
        proyecto: null
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener los proyectos
    const obtenerProyectos = async () => {
        try {
            const resultado = await clienteAxios.get('/api/proyectos');
            const proyectos = resultado.data.proyectos;
            dispatch({
                type: OBTENER_PROYECTOS,
                payload: proyectos
            })

            calcularNumTareas(proyectos);
            console.log(proyectos);
        } catch (error) {
            console.log(error);
        }
    }

    // Obtener numero de tareas en cada proyecto
    const calcularNumTareas = (proyectos) => {
        proyectos.map(async (proyecto) => {
            try {
                const resultado = await clienteAxios.get(`/api/proyectos/${proyecto._id}`);
                proyecto.numTareas = resultado.data.numTareas;
            } catch (error) {
                console.log(error.response);
            }
        });
    }

    // Agregar un nuevo proyecto
    const agregarProyecto = async (proyecto) => {
        try {
            const resultado = await clienteAxios.post('/api/proyectos', proyecto);
            // Agregar el proyecto en el state
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error.response);
        }

    };

    // Validar el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    // Selecciona el proyecto que el usuario dio click
    const proyectoActual = (proyecto) => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyecto
        })
    }

    //Elimina un proyecto
    const eliminarProyecto = async (proyecto) => {
        try {
            await clienteAxios.delete(`/api/proyectos/${proyecto._id}`)
        } catch (error) {
            console.log(error);
        }
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyecto
        })
    }

    return (
        <proyectoContext.Provider value={ {
            proyectos: state.proyectos,
            formulario: state.formulario,
            errorformulario: state.errorformulario,
            proyecto: state.proyecto,
            mostrarFormulario,
            obtenerProyectos,
            agregarProyecto,
            mostrarError,
            proyectoActual,
            eliminarProyecto
        } }>
            {props.children }
        </proyectoContext.Provider>
    )
}

export default ProyectoState;